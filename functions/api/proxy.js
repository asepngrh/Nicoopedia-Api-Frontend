/**
 * Production-Grade Stabilized Caching Proxy for NicoopediaBASE
 * Implements: Resilience, Circuit Breaker, Retry, Timeout, and standardized JSON.
 */

// --- CONFIGURATION ---
const ORIGIN_URL = "https://cloudflareworkerproxy.dex1.workers.dev";
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
    headers: { "Content-Type": "application/json" }
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

// --- MAIN HANDLER FOR CLOUDFLARE PAGES FUNCTIONS ---

export async function onRequestGet(context) {
  const { request, env, waitUntil } = context;
  const url = new URL(request.url);
  const startTime = Date.now();
  
  try {
    // 1. Circuit Breaker Check
    if (checkCircuitBreaker()) {
      return buildErrorResponse("Circuit Breaker Active", "Upstream failing repeatedly", 503);
    }

    const source = url.searchParams.get('source');
    const endpoint = url.searchParams.get('endpoint');
    const isRouteParam = url.searchParams.get('isRouteParam') === 'true';
    const paramValue = url.searchParams.get('paramValue');

    if (!source && source !== "") {
      return buildErrorResponse("Invalid Request", "Missing source parameter", 400);
    }

    // 2. URL Construction (Prevent double slashes & malformed paths)
    const safeSource = source.replace(/^\/+|\/+$/g, '');
    const safeEndpoint = (endpoint || "").replace(/^\/+|\/+$/g, '');
    
    let targetPath = safeSource;
    if (safeEndpoint) targetPath += `/${safeEndpoint}`;
    if (isRouteParam && paramValue) {
      targetPath += `/${encodeURIComponent(paramValue.replace(/^\/+|\/+$/g, ''))}`;
    }

    // Final check to ensure no double slashes in the target URL
    const targetUrl = new URL(`${ORIGIN_URL}/${targetPath}`);
    url.searchParams.forEach((val, key) => {
      if (!['source', 'endpoint', 'isRouteParam', 'paramValue'].includes(key)) {
        targetUrl.searchParams.append(key, val);
      }
    });

    // 3. Cache Check
    const cacheKeyUrl = normalizeUrl(url);
    const cacheKey = new Request(cacheKeyUrl, { method: 'GET' });
    const cache = caches.default;
    const isBypass = (request.method !== 'GET' || url.pathname.match(/\/(auth|user|admin)/));
    
    let response = !isBypass ? await cache.match(cacheKey) : null;
    let cacheStatus = response ? "HIT" : "MISS";

    if (!response) {
      // 4. Fetch from Origin with Retry & Timeout logic
      // Important to use env or context for fetch if bound, else global fetch
      const fetchResult = await fetchWithRetry(targetUrl.toString(), {
        method: "GET",
        headers: {
          "X-Sankaa-Key": "sankaa-private-api-v1",
          "Accept": "application/json",
          "User-Agent": "NicoopediaBASE-StabilizedProxy/2.0"
        }
      });

      // Handle fetch failure
      if (fetchResult.error) {
        return buildErrorResponse("Upstream API unavailable", fetchResult.details);
      }

      // 5. Response Processing & Safety
      const rawDataText = await fetchResult.text();
      const parsedData = safeJsonParse(rawDataText);
      
      if (parsedData === null) {
        return buildErrorResponse("Malformed API Response", "Invalid JSON from upstream");
      }

      const standardizedData = buildSuccessResponse(parsedData, source, endpoint);
      const ttl = getTTL(url.pathname);

      response = new Response(JSON.stringify(standardizedData), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": `public, max-age=${ttl}, stale-while-revalidate=300`
        }
      });

      // 6. Async Cache Storage 
      if (!isBypass) {
        if (waitUntil) {
          waitUntil(cache.put(cacheKey, response.clone()));
        } else {
          await cache.put(cacheKey, response.clone());
        }
      }
    }

    // 7. Final Response 
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
    }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
}
