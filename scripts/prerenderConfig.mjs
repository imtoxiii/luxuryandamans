/** Shared prerender tuning — route tiers derived from URL patterns, not hardcoded slugs */

export const PRERENDER_CONFIG = {
  preferredPort: Number(process.env.PRERENDER_PORT) || 4179,
  concurrency: {
    standard: Number(process.env.PRERENDER_CONCURRENCY) || 3,
    heavy: 1,
  },
  timeoutMs: {
    standard: Number(process.env.PRERENDER_TIMEOUT_MS) || 60000,
    heavy: Number(process.env.PRERENDER_HEAVY_TIMEOUT_MS) || 90000,
  },
  // Sitemap URLs must all prerender. A failed route ships homepage HTML and
  // would be submitted to Google as a duplicate.
  maxFailureRatio: 0,
  maxAbsoluteFailures: 0,
};

/**
 * Heavy routes load large lazy chunks or render many DOM nodes.
 * Process them one at a time after standard routes finish.
 */
export function getRouteTier(route) {
  if (route === '/blog') return 'heavy';
  if (route.startsWith('/blog/')) return 'heavy';
  if (route.startsWith('/destinations/') && route !== '/destinations') return 'heavy';
  if (route.startsWith('/packages/') && route !== '/packages') return 'heavy';
  return 'standard';
}

export function getRouteTimeout(route) {
  return getRouteTier(route) === 'heavy'
    ? PRERENDER_CONFIG.timeoutMs.heavy
    : PRERENDER_CONFIG.timeoutMs.standard;
}

/** Third-party assets are not required for HTML/SEO snapshots during prerender */
export function shouldAbortPrerenderRequest(url, resourceType, baseUrl) {
  const isLocal =
    url.startsWith(baseUrl) ||
    url.startsWith('data:') ||
    url.startsWith('blob:');

  if (resourceType === 'media') return true;

  if ((resourceType === 'image' || resourceType === 'font') && !isLocal) {
    return true;
  }

  if (
    /google-analytics|googletagmanager|googleadservices|facebook|hotjar|clarity|doubleclick|gtag\/js|fonts\.googleapis|fonts\.gstatic/i.test(
      url
    )
  ) {
    return true;
  }

  return false;
}

export function partitionRoutes(routes) {
  const standard = [];
  const heavy = [];
  for (const route of routes) {
    (getRouteTier(route) === 'heavy' ? heavy : standard).push(route);
  }
  return { standard, heavy };
}
