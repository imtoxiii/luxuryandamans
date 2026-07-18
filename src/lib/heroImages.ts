/** Stable public paths for LCP hero images (same in dev and production). */
export const HOME_HERO_DESKTOP = '/images/hero-home.webp';
export const HOME_HERO_MOBILE = '/images/hero-home-mobile.webp';

/** Intrinsic dimensions for layout stability (match optimized assets). */
export const HOME_HERO_DESKTOP_DIMENSIONS = { width: 1600, height: 899 } as const; // 1600×899 optimized asset
export const HOME_HERO_MOBILE_DIMENSIONS = { width: 828, height: 465 } as const;
