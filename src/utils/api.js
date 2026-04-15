const memoryCache = new Map();

export const fetchProxyData = async (source, endpoint, queryParams = {}, isRouteParam = false) => {
  // Gunakan domain frontend ini sebagai Base URL (penting: harus diakhiri garis miring)
  const baseUrl = window.location.origin + "/api/";

  let uiEndpointPath = endpoint;
  let finalEndpoint = endpoint;
  let hasRouteParam = false;

  // Jika endpoint ini membutuhkan sisipan custom route parameter (contoh: /:slug)
  if (isRouteParam) {
    Object.keys(queryParams).forEach(key => {
      const val = queryParams[key];
      if (val !== undefined && val !== "") {
        const routeRegex = new RegExp(`[:\\{]${key}[\\}]?`, 'g');
        finalEndpoint = finalEndpoint.replace(routeRegex, encodeURIComponent(val));
      }
    });
    // Hapus parameter tak terselesaikan
    finalEndpoint = finalEndpoint.replace(/\/[:\{][a-zA-Z0-9_]+[\}]?/g, '');
    
    uiEndpointPath = finalEndpoint;
    hasRouteParam = true;
  }

  // Bangun path relatif REST murni (misal: mangabat/latest - TANPA garis miring di awal)
  let displayPath = `${source}`;
  if (uiEndpointPath) {
    // Pastikan uiEndpointPath tidak diawali garis miring ganda
    displayPath += `/${uiEndpointPath.replace(/^\/+/, '')}`;
  }
  
  // Gabungkan ke target base (menjadi https://[domain-kita]/api/mangabat/latest)
  const targetUrlObj = new URL(displayPath, baseUrl);

  // Jika bukan route parameter, tambahkan selebihnya sebagai query string (?page=2 dll)
  if (!hasRouteParam) {
    Object.keys(queryParams).forEach(key => {
      if (queryParams[key] !== undefined && queryParams[key] !== "") {
        targetUrlObj.searchParams.append(key, queryParams[key]);
      }
    });
  }

  const targetUrl = targetUrlObj.toString();
  const url = targetUrlObj; // Panggil proxy menggunakan URL statis kita!
  
  const cacheKey = url.toString();
  // Return cached result if it exists
  if (memoryCache.has(cacheKey)) {
    const cachedData = memoryCache.get(cacheKey);
    return { ...cachedData, duration: "0.00 (cached)", targetUrl };
  }

  const startTime = performance.now();

  try {
    const response = await fetch(url.toString(), {
      method: "GET"
    });

    const endTime = performance.now();
    const duration = (endTime - startTime).toFixed(2);

    const rawData = await response.json();

    // Handle standardized error response from proxy
    if (rawData.success === false) {
      return {
        success: false,
        error: rawData.error || "Gagal mengambil data",
        details: rawData.details,
        duration,
        targetUrl
      };
    }

    const successResult = {
      success: true,
      data: rawData.data,
      duration,
      source: rawData.source || source,
      endpoint: rawData.endpoint || endpoint,
      targetUrl
    };

    // Save to cache
    memoryCache.set(cacheKey, successResult);

    return successResult;
  } catch (err) {
    const endTime = performance.now();
    return {
      success: false,
      error: err.message,
      duration: (endTime - startTime).toFixed(2),
      targetUrl
    };
  }
};
