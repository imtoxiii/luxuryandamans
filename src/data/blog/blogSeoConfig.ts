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

  // Off-topic for this site
  'best-time-visit-thailand': { noindex: true },

  // Thin trend/news posts — keep live but de-prioritize
  'andaman-tourism-trends-2026': { noindex: true },
  'hidden-andaman-facts-2026': { noindex: true },
  'best-beach-award-2024': { noindex: true },
  'new-ferry-services-2026': { noindex: true },
  'island-tourism-festival-2026': { noindex: true },
  'new-eco-resorts-andaman-2026': { noindex: true },
};

export const noindexBlogSlugs: string[] = Object.entries(blogSeoOverrides)
  .filter(([, cfg]) => cfg.noindex)
  .map(([slug]) => slug);

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
