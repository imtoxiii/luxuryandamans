// Create importer groups for adaptive prefetch using Vite's import.meta.glob

// Top-priority routes that users most likely click next from Home
const primaryMap = import.meta.glob('../pages/{Packages,Destinations}.tsx');

// Other common routes
const secondaryMap = import.meta.glob('../pages/{Experiences,Contact,PricingCalculator,TravelGuide,Blog,FAQ,Privacy,Terms,Sitemap}.tsx');

// Detail routes
const detailMap = import.meta.glob('../pages/{destinations,packages,locations}/[slug].tsx');

export const primaryRoutes: Array<() => Promise<unknown>> = Object.values(primaryMap);
export const secondaryRoutes: Array<() => Promise<unknown>> = Object.values(secondaryMap);
export const detailRoutes: Array<() => Promise<unknown>> = Object.values(detailMap);

export function prefetchGroup(group: Array<() => Promise<unknown>>) {
  group.forEach((load) => {
    try {
      // Trigger the async import; ignore errors to avoid impacting UX
      load().catch(() => {});
    } catch {}
  });
}










