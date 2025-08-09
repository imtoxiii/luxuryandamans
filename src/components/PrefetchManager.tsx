import { useEffect } from 'react';
import { getNetworkInfo } from '../hooks/useNetworkInfo';
import { runOnIdle } from '../lib/prefetch';
import { primaryRoutes, secondaryRoutes, detailRoutes, prefetchGroup } from '../lib/routePrefetch';

/**
 * PrefetchManager preloads/lazily warms route chunks adaptively:
 * - Fast networks: prefetch likely next routes on idle
 * - Slow networks / Save-Data: minimal prefetch
 */
export default function PrefetchManager() {
  useEffect(() => {
    const { isSlow, saveData } = getNetworkInfo();
    const minimal = isSlow || saveData;

    if (minimal) {
      // Minimal: only prefetch top-priority routes
      runOnIdle(() => prefetchGroup(primaryRoutes), 800);
    } else {
      // Aggressive on fast networks: primary + secondary + details
      runOnIdle(() => prefetchGroup(primaryRoutes), 400);
      runOnIdle(() => prefetchGroup(secondaryRoutes), 900);
      runOnIdle(() => prefetchGroup(detailRoutes), 1400);
    }
  }, []);

  return null;
}


