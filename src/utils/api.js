const memoryCache = new Map();

export const fetchProxyData = async (source, endpoint, queryParams = {}, isRouteParam = false) => {
  const url = new URL("/api/proxy", window.location.origin);

  // Build the targetUrl string to be shown in the UI for the copy endpoint feature.
  const baseUrl = "https://cloudflareworkerproxy.dex1.workers.dev";
  let uiEndpointPath = endpoint;
  let hasRouteParam = false;

  url.searchParams.append('source', source);

  let finalEndpoint = endpoint;

  if (isRouteParam) {
    // Replace all placeholders like /:slug, /{slug}, or :slug with their actual values
    Object.keys(queryParams).forEach(key => {
      const val = queryParams[key];
      if (val !== undefined && val !== "") {
        const routeRegex = new RegExp(`[:\\{]${key}[\\}]?`, 'g');
        finalEndpoint = finalEndpoint.replace(routeRegex, encodeURIComponent(val));
      }
    });
    // Remove any remaining unresolved parameters
    finalEndpoint = finalEndpoint.replace(/\/[:\{][a-zA-Z0-9_]+[\}]?/g, '');
    
    url.searchParams.append('endpoint', finalEndpoint);
    uiEndpointPath = finalEndpoint;
    hasRouteParam = true; // Still marked as true to avoid appending as query string below
  } else {
    url.searchParams.append('endpoint', endpoint);
    Object.keys(queryParams).forEach(key => {
      if (queryParams[key] !== undefined && queryParams[key] !== "") {
        url.searchParams.append(key, queryParams[key]);
      }
    });
  }

  // Construct target URL for display
  let displayPath = `/${source}`;
  if (uiEndpointPath) displayPath += `/${uiEndpointPath}`;
  const targetUrlObj = new URL(displayPath, baseUrl);
  if (!hasRouteParam) {
    Object.keys(queryParams).forEach(key => {
      if (queryParams[key] !== undefined && queryParams[key] !== "") {
        targetUrlObj.searchParams.append(key, queryParams[key]);
      }
    });
  }
  const targetUrl = targetUrlObj.toString();

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
