/**
 * Central SEO config for blog posts.
 * Duplicate or thin pages stay live (avoid 404s) but are noindexed with a canonical pointer.
 */
export interface BlogSeoOverride {
  noindex?: boolean;
  /** Slug of the preferred indexed version */
  canonicalSlug?: string;
}

export const blogSeoOverrides: Record<string, BlogSeoOverride> = {
  // Safety — keep the fuller 2024 guide indexed
  'is-andaman-safe-2026': { noindex: true, canonicalSlug: 'is-andaman-safe-for-tourists' },

  // Food
  'a-food-lovers-guide-to-andaman': { noindex: true, canonicalSlug: 'andaman-food-guide' },
  'andaman-vegetarian-food-guide-2026': { noindex: true, canonicalSlug: 'vegetarian-food-in-andaman' },

  // Connectivity
  'andaman-internet-connectivity-guide-2026': { noindex: true, canonicalSlug: 'mobile-network-internet-in-andaman' },

  // Ferries
  'andaman-ferry-guide-2026': { noindex: true, canonicalSlug: 'andaman-ferry-booking-guide' },

  // Family itineraries
  'andaman-family-itinerary-2026': { noindex: true, canonicalSlug: 'andaman-family-itinerary' },
  'family-friendly-andaman-kids': { noindex: true, canonicalSlug: 'andaman-family-itinerary' },

  // Packing
  'andaman-packing-list-checklist': { noindex: true, canonicalSlug: 'what-to-pack-for-andaman-trip' },
  'sustainable-packing-list-2026': { noindex: true, canonicalSlug: 'what-to-pack-for-andaman-trip' },

  // Scuba
  'andaman-scuba-diving-2026': { noindex: true, canonicalSlug: 'andaman-scuba-diving-guide' },
  'scuba-diving-andaman-guide': { noindex: true, canonicalSlug: 'andaman-scuba-diving-guide' },

  // Things to do — duplicate slug in index
  'top-10-things-to-do-andaman-2025': { noindex: true, canonicalSlug: 'andaman-top-things-to-do-2025' },

  // Destination comparisons
  'bali-vs-andaman-comparison': { noindex: true, canonicalSlug: 'andaman-vs-bali' },

  // Off-topic / thin news — 301 to a useful indexed guide (see LEGACY_REDIRECTS)
  'best-time-visit-thailand': { noindex: true, canonicalSlug: 'best-time-to-visit-andaman' },
  'andaman-tourism-trends-2026': { noindex: true, canonicalSlug: 'first-timers-guide-andaman-2026' },
  'hidden-andaman-facts-2026': { noindex: true, canonicalSlug: 'first-timers-guide-andaman-2026' },
  'best-beach-award-2024': { noindex: true, canonicalSlug: 'radhanagar-beach-guide-2026' },
  'new-ferry-services-2026': { noindex: true, canonicalSlug: 'andaman-ferry-booking-guide' },
  'island-tourism-festival-2026': { noindex: true, canonicalSlug: 'first-timers-guide-andaman-2026' },
  'new-eco-resorts-andaman-2026': { noindex: true, canonicalSlug: 'andaman-luxury-resorts-2026' },
};

export const noindexBlogSlugs: string[] = Object.entries(blogSeoOverrides)
  .filter(([, cfg]) => cfg.noindex)
  .map(([slug]) => slug);

/** relatedPosts values that are old ids/slugs — resolve to a live post */
export const relatedPostAliases: Record<string, string> = {
  'andaman-top-things-to-do': 'andaman-top-things-to-do-2025',
  'top-things-to-do-andaman': 'andaman-top-things-to-do-2025',
  'top-things-to-do-andaman-2026': 'andaman-top-things-to-do-2025',
  'andaman-7-day-itinerary': '7-day-andaman-itinerary',
  'port-blair-one-day-plan': 'port-blair-one-day-itinerary',
  'andaman-scuba-guide': 'andaman-scuba-diving-guide',
  'andaman-scuba-prices-2025': 'andaman-scuba-prices-2026',
  'andaman-luxury-resorts-2025': 'andaman-luxury-resorts-2026',
  'andaman-solor-trip-guide': 'andaman-solo-trip-guide',
  'best-time-visit-andaman': 'best-time-to-visit-andaman',
  'andaman-budget-guide': 'andaman-budget-travel-guide',
  'andaman-best-time': 'best-time-to-visit-andaman',
  'andaman-itinerary-7-days': '7-day-andaman-itinerary',
  'cheap-andaman-packages': 'andaman-budget-travel-guide',
  'best-beach-destination-india': 'best-beach-destinations-india',
  'havelock-island-guide': 'havelock-island-travel-guide-2026',
  'port-blair-travel-guide': 'port-blair-travel-guide-2026',
  'andaman-international-guide': 'andaman-islands-international-travel-guide-2026',
};

export function applyBlogSeoOverrides<T extends { slug: string; noindex?: boolean; canonicalSlug?: string }>(
  post: T
): T {
  const override = blogSeoOverrides[post.slug];
  if (!override) return post;
  return {
    ...post,
    noindex: override.noindex ?? post.noindex,
    canonicalSlug: override.canonicalSlug ?? post.canonicalSlug,
  };
}
