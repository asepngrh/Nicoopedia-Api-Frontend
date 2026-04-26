/**
 * Production-Grade Stabilized Caching Proxy for NicoopediaBASE
 * Implements: Dynamic REST routing, Resilience, Circuit Breaker, Retry, Timeout, and standardized JSON.
 */

// --- CONFIGURATION ---
const DEFAULT_TIMEOUT = 5000;
const MAX_RETRIES = 3;
const RETRY_DELAY = 500;

// --- CIRCUIT BREAKER STATE (Isolate level) ---
const CB_CONFIG = {
  failureThreshold: 5,
  recoveryTimeout: 30000, // 30s
};
let failureCount = 0;
let lastFailureTime = 0;
let isTripped = false;

// --- HELPERS ---

function checkCircuitBreaker() {
  if (isTripped) {
    const now = Date.now();
    if (now - lastFailureTime > CB_CONFIG.recoveryTimeout) {
      isTripped = false;
      failureCount = 0;
      console.log("[CB] Circuit partially closed - Entering recovery mode");
      return false;
    }
    return true;
  }
  return false;
}

function recordFailure() {
  failureCount++;
  lastFailureTime = Date.now();
  if (failureCount >= CB_CONFIG.failureThreshold) {
    isTripped = true;
    console.warn(`[CB] Circuit TRIPPED after ${failureCount} consecutive failures`);
  }
}

function recordSuccess() {
  if (failureCount > 0) {
    failureCount = 0;
    isTripped = false;
  }
}

function safeJsonParse(text) {
  try {
    return JSON.parse(text);
  } catch (e) {
    console.error(`[Proxy] JSON Parse Error:`, e.message);
    return null;
  }
}

function buildErrorResponse(error, details, status = 502) {
  return new Response(JSON.stringify({
    success: false,
    data: [],
    error: error || "Service temporarily unavailable",
    details: details || "unknown error",
    fallback: true
  }), {
    status: status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });
}

function buildSuccessResponse(data, source, endpoint) {
  let finalData = data;
  if (data && typeof data === 'object' && !Array.isArray(data)) {
    if (data.data && Array.isArray(data.data)) {
      finalData = data.data;
    } else {
      finalData = [data];
    }
  } else if (!data) {
    finalData = [];
  }

  return {
    success: true,
    source: source || "unknown",
    endpoint: endpoint || "root",
    data: finalData
  };
}

function normalizeUrl(url) {
  const normalized = new URL(url.toString());
  normalized.searchParams.sort();
  return normalized.toString();
}

function getTTL(pathname) {
  const path = pathname.toLowerCase();
  if (path.includes('/search')) return 30;
  if (path.includes('/latest') || path.includes('/update')) return 60;
  if (path.includes('/popular') || path.includes('/trending')) return 300;
  return 120;
}

async function fetchWithRetry(url, options, retries = MAX_RETRIES) {
  let lastError;
  let lastStatus;

  for (let i = 0; i <= retries; i++) {
    const controller = new AbortController();
    const tId = setTimeout(() => controller.abort(), DEFAULT_TIMEOUT);

    try {
      if (i > 0) console.log(`[Proxy] Retry attempt ${i}/${retries} for ${url}`);

      const response = await fetch(url, { ...options, signal: controller.signal });
      clearTimeout(tId);

      if (response.status >= 500) {
        lastStatus = response.status;
        throw new Error(`Upstream returned ${response.status}`);
      }

      recordSuccess();
      return response;
    } catch (err) {
      clearTimeout(tId);
      lastError = err;
      recordFailure();

      if (i < retries) {
        await new Promise(r => setTimeout(r, RETRY_DELAY));
      }
    }
  }

  const details = lastError && lastError.name === 'AbortError' ? 'timeout' : (lastStatus ? `${lastStatus}` : 'network error');
  return { error: true, message: lastError ? lastError.message : "Unknown error", details };
}

// --- MAIN HANDLER FOR CLOUDFLARE PAGES FUNCTIONS (Dynamic Catch-All Route) ---

export async function onRequestGet(context) {
  const { request, env, waitUntil, params } = context;
  const url = new URL(request.url);
  const startTime = Date.now();

  // Baca Origin URL backend utama dari Environment Variable di Dashboard Cloudflare Pages
  const originBase = env.WORKER_ORIGIN_URL;
  const sankaaKey = env.SANKAA_KEY;

  if (!originBase || !sankaaKey) {
    return buildErrorResponse("Server Configuration Error", "Sistem belum dikonfigurasi dengan Environment Variables", 500);
  }

  try {
    // 1. Circuit Breaker Check
    if (checkCircuitBreaker()) {
      return buildErrorResponse("Circuit Breaker Active", "Upstream failing repeatedly", 503);
    }

    // 2. Dynamic Route Resolution
    // Contoh: URL public /api/mangabat/latest akan menghasilkan routeArray: ['mangabat', 'latest']
    const routeArray = params.route || [];
    if (routeArray.length === 0) {
      return buildErrorResponse("Invalid Request", "Missing API endpoint path (e.g. /api/mangabat/latest)", 400);
    }

    let targetPath = routeArray.join('/'); // menghasilkan 'mangabat/latest'

    // Menyesuaikan proxy mapping dengan struktur routing origin API (repo_temp2/api/index.ts)
    const comicSources = [
      "bacakomik", "komikstation", "maid", "komikindo", "mangakita",
      "soulscan", "soulscans", "bacaman", "meganei", "softkomik", "westmanga",
      "kmkindo", "mangasusuku", "kiryuu", "cosmic", "cosmicscans"
    ];
    const novelSources = ["sakuranovel", "novelcool"];

    if (comicSources.includes(routeArray[0])) {
      targetPath = `comic/${targetPath}`;
    } else if (novelSources.includes(routeArray[0])) {
      targetPath = `novel/${targetPath}`;
    }

    // 3. Build target origin URL (menembak Worker utama)
    const targetUrl = new URL(`${originBase}/${targetPath}`);

    // Copy/teruskan semua safe query parameters (misal: ?page=2)
    url.searchParams.forEach((val, key) => {
      targetUrl.searchParams.append(key, val);
    });

    // 4. Cache Check
    const cacheKeyUrl = normalizeUrl(url);
    const cacheKey = new Request(cacheKeyUrl, { method: 'GET' });
    const cache = caches.default;
    const isBypass = (request.method !== 'GET' || url.pathname.match(/\/(auth|user|admin)/));

    let response = !isBypass ? await cache.match(cacheKey) : null;
    let cacheStatus = response ? "HIT" : "MISS";

    if (!response) {
      // 5. Fetch dari Worker Utama
      const fetchResult = await fetchWithRetry(targetUrl.toString(), {
        method: "GET",
        headers: {
          "X-Sankaa-Key": sankaaKey,
          "Accept": "application/json",
          "User-Agent": "NicoopediaBASE-StabilizedProxy/2.0"
        }
      });

      if (fetchResult.error) {
        return buildErrorResponse("Upstream API unavailable", fetchResult.details);
      }

      // 6. Parsing Data
      const rawDataText = await fetchResult.text();
      const parsedData = safeJsonParse(rawDataText);

      if (parsedData === null) {
        return buildErrorResponse("Malformed API Response", "Invalid JSON from upstream");
      }

      const source = routeArray[0];
      const endpoint = routeArray.slice(1).join('/');
      const standardizedData = buildSuccessResponse(parsedData, source, endpoint);
      const ttl = getTTL(url.pathname);

      response = new Response(JSON.stringify(standardizedData), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": `public, max-age=${ttl}, stale-while-revalidate=300`,
          // Berikan CORS header agar user publik bisa memanggil API mu dari web lain via JS
          "Access-Control-Allow-Origin": "*"
        }
      });

      // 7. Simpan ke Cache asinkron
      if (!isBypass) {
        if (waitUntil) {
          waitUntil(cache.put(cacheKey, response.clone()));
        } else {
          await cache.put(cacheKey, response.clone());
        }
      }
    }

    // 8. Headers Meta Analytics
    const finalResponse = new Response(response.body, response);
    finalResponse.headers.set("X-Cache", cacheStatus);
    finalResponse.headers.set("X-Response-Time", `${Date.now() - startTime}ms`);

    console.log(`[${cacheStatus}] ${url.search} -> ${targetUrl.pathname} (${Date.now() - startTime}ms)`);

    return finalResponse;
  } catch (err) {
    console.error("[Proxy Error]:", err);
    return new Response(JSON.stringify({
      success: false,
      error: err.message
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
}
