/** Lightweight prefetch helpers for route chunks and assets */

/** Prefetch a URL using <link rel="prefetch"> */
export function prefetchLink(url: string, as?: string) {
  try {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    if (as) link.as = as as any;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  } catch {}
}

/** Preload a URL using <link rel="preload"> */
export function preloadLink(url: string, as: string) {
  try {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = as as any;
    link.href = url;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  } catch {}
}

/** Fire-and-forget fetch to warm HTTP cache without blocking UI */
export function warmFetchCache(url: string) {
  try {
    fetch(url, { mode: 'no-cors', credentials: 'omit', cache: 'no-store' }).catch(() => {});
  } catch {}
}

/** Prefetch with requestIdleCallback fallback */
export function runOnIdle(task: () => void, timeout = 1500) {
  try {
    // @ts-ignore
    if (window.requestIdleCallback) {
      // @ts-ignore
      window.requestIdleCallback(() => task(), { timeout });
      return;
    }
  } catch {}
  setTimeout(task, 0);
}


























