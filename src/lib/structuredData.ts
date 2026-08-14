// Utility functions for generating Schema.org structured data for SEO

import type { Destination } from '../data/destinations';
import type { Package } from '../data/packages';

const SITE_URL = 'https://luxuryandamans.com';

/** Schema image URLs must be absolute */
function absUrl(url: string): string {
  if (!url) return url;
  return /^https?:\/\//i.test(url) ? url : `${SITE_URL}${url.startsWith('/') ? '' : '/'}${url}`;
}

/**
 * Generate TouristAttraction Schema for destination pages
 */
export function generateTouristAttractionSchema(destination: Destination) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: destination.name,
    description: destination.longDescription,
    image: destination.gallery?.map(img => absUrl(img.url)) || [absUrl(destination.image)],
    url: `https://luxuryandamans.com/destinations/${destination.slug}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: destination.category.replace('-', ' '),
      addressRegion: 'Andaman and Nicobar Islands',
      addressCountry: 'IN',
    },
    openingHoursSpecification: destination.timings ? {
      '@type': 'OpeningHoursSpecification',
      opens: destination.timings.openTime || '09:00',
      closes: destination.timings.closeTime || '17:00',
      dayOfWeek: destination.timings.closedDays === 'Open daily' ?
        ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] :
        ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    } : undefined,
    touristType: destination.bestFor || [],
    availableLanguage: destination.culturalInfo?.languages || ['English', 'Hindi'],
    isAccessibleForFree: destination.ticketInfo?.entryFee === 0,
    publicAccess: true,
  };
}

/**
 * Generate BreadcrumbList Schema for SEO
 */
export function generateBreadcrumbSchema(destination: Destination) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://luxuryandamans.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Destinations',
        item: 'https://luxuryandamans.com/destinations',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: destination.name,
        item: `https://luxuryandamans.com/destinations/${destination.slug}`,
      },
    ],
  };
}

/**
 * Generate FAQPage Schema for destination FAQs
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate Place Schema with detailed information
 */
export function generatePlaceSchema(destination: Destination) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: destination.name,
    description: destination.description,
    photo: destination.gallery?.map(img => ({
      '@type': 'ImageObject',
      url: img.url,
      caption: img.caption,
    })) || [],
    address: {
      '@type': 'PostalAddress',
      addressLocality: destination.category.replace('-', ' '),
      addressRegion: 'Andaman and Nicobar Islands',
      addressCountry: 'IN',
    },
  };
}

/**
 * Generate Activity/Event Schema for destination activities
 */
export function generateActivitySchema(destination: Destination) {
  if (!destination.detailedActivities || destination.detailedActivities.length === 0) {
    return null;
  }

  return destination.detailedActivities.map(activity => ({
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: activity.name,
    description: activity.description,
    duration: activity.duration,
    location: {
      '@type': 'Place',
      name: destination.name,
      address: {
        '@type': 'PostalAddress',
        addressLocality: destination.category.replace('-', ' '),
        addressRegion: 'Andaman and Nicobar Islands',
        addressCountry: 'IN',
      },
    },
    offers: activity.price ? {
      '@type': 'Offer',
      price: activity.price,
      priceCurrency: 'INR',
    } : undefined,
  }));
}

/**
 * Generate LocalBusiness Schema for destinations with commercial aspects
 */
export function generateLocalBusinessSchema(destination: Destination) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: destination.name,
    image: destination.image,
    description: destination.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: destination.category.replace('-', ' '),
      addressRegion: 'Andaman and Nicobar Islands',
      addressCountry: 'IN',
    },
    telephone: '+91 6297576826', // Update with actual contact
    priceRange: destination.budgetInfo?.budget || '₹₹',
    openingHoursSpecification: destination.timings ? {
      '@type': 'OpeningHoursSpecification',
      opens: destination.timings.openTime || '09:00',
      closes: destination.timings.closeTime || '17:00',
    } : undefined,
  };
}

/**
 * Generate ImageObject Schema for gallery images
 */
export function generateImageGallerySchema(destination: Destination) {
  if (!destination.gallery || destination.gallery.length === 0) {
    return null;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: `${destination.name} Photo Gallery`,
    description: `Photos and images of ${destination.name} in Andaman Islands`,
    image: destination.gallery.map(img => ({
      '@type': 'ImageObject',
      url: img.url,
      caption: img.caption,
      description: img.caption,
    })),
  };
}

/**
 * Generate complete structured data package for a destination
 */
export function generateDestinationStructuredData(destination: Destination) {
  const schemas: any[] = [
    generateTouristAttractionSchema(destination),
    generateBreadcrumbSchema(destination),
    generatePlaceSchema(destination),
  ];

  const activitySchemas = generateActivitySchema(destination);
  if (activitySchemas) {
    schemas.push(...activitySchemas);
  }

  const imageGallerySchema = generateImageGallerySchema(destination);
  if (imageGallerySchema) {
    schemas.push(imageGallerySchema);
  }

  return schemas;
}

/** Truncate on word boundary for meta strings. */
function truncateAtWord(text: string, max: number): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  const slice = clean.slice(0, max + 1);
  const lastSpace = slice.lastIndexOf(' ');
  const cut = lastSpace > Math.floor(max * 0.55) ? lastSpace : max;
  return clean.slice(0, cut).replace(/[\s|,;:\-–—/]+$/u, '');
}

/** Fit meta description into ~140–160 characters. */
function fitMetaDescription(text: string, min = 140, max = 160): string {
  let clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length > max) {
    let t = truncateAtWord(clean, max - 3);
    if (!/[.!?…]$/.test(t)) t += '...';
    if (t.length > max) t = truncateAtWord(clean, max);
    return t;
  }
  if (clean.length < min) {
    const pads = [
      ' Expert tips from Luxury Andamans.',
      ' Plan with Luxury Andamans.',
      ' Book hotels & ferries with us.',
      ' Free custom itinerary help.',
      ' Plan your visit today.',
      ' See our guide.',
    ];
    for (const pad of pads) {
      const room = max - clean.length;
      if (pad.length <= room) {
        clean += pad;
        if (clean.length >= min) break;
      }
    }
    // Fill remaining room if still short
    if (clean.length < min) {
      const filler = ' Plan your Andaman trip today.';
      const room = max - clean.length;
      if (room >= 8) {
        clean += truncateAtWord(filler, room);
      }
    }
  }
  return clean;
}

/**
 * Generate destination-specific meta tags for SEO
 * Title target ≤60 (SEO may append brand); description 140–160.
 */
export function generateDestinationMetaTags(destination: Destination) {
  const keywords = [
    destination.name,
    `${destination.name} Andaman`,
    `visit ${destination.name}`,
    destination.category.replace('-', ' '),
    ...destination.activities,
    ...destination.bestFor || [],
    'andaman tourism',
    'travel guide'
  ].join(', ');

  // Keep base ≤43 so SEO can add " | Luxury Andaman" (17) within 60
  const TITLE_BASE_MAX = 43;
  let title = `${destination.name} Guide 2026 | Things to Do`;
  if (title.length > TITLE_BASE_MAX) {
    title = `${destination.name} Andaman Guide 2026`;
  }
  if (title.length > TITLE_BASE_MAX) {
    title = truncateAtWord(`${destination.name} Guide 2026`, TITLE_BASE_MAX);
  }

  const audience = destination.bestFor?.slice(0, 2).join(' & ') || 'travelers';
  const description = fitMetaDescription(
    `Visit ${destination.name} in Andaman. Best time, how to reach, top activities & tips for ${audience}. Plan your 2026 trip.`
  );

  return {
    title,
    description,
    keywords,
    canonical: `https://luxuryandamans.com/destinations/${destination.slug}`,
    ogTitle: title,
    ogDescription: description,
    ogImage: destination.image,
    ogUrl: `https://luxuryandamans.com/destinations/${destination.slug}`,
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: destination.image,
  };
}

/**
 * Generate destination-specific FAQs
 */
export function generateDestinationFAQs(destination: Destination) {
  const faqs: Array<{ question: string; answer: string }> = [];

  // Best time to visit FAQ
  faqs.push({
    question: `What is the best time to visit ${destination.name}?`,
    answer: destination.bestTimeToVisit,
  });

  // How to reach FAQ
  faqs.push({
    question: `How to reach ${destination.name}?`,
    answer: destination.howToReach,
  });

  // Entry fee FAQ
  if (destination.ticketInfo?.entryFee !== undefined) {
    faqs.push({
      question: `What is the entry fee for ${destination.name}?`,
      answer: destination.ticketInfo.entryFee === 0
        ? `${destination.name} has free entry for all visitors.`
        : `The entry fee for ${destination.name} is ₹${destination.ticketInfo.entryFee} per person.`,
    });
  }

  // Timings FAQ
  if (destination.timings) {
    faqs.push({
      question: `What are the opening hours of ${destination.name}?`,
      answer: `${destination.name} is open from ${destination.timings.openTime || 'morning'} to ${destination.timings.closeTime || 'evening'}${destination.timings.closedDays ? `. ${destination.timings.closedDays}` : ''}.`,
    });
  }

  // Activities FAQ
  if (destination.activities && destination.activities.length > 0) {
    faqs.push({
      question: `What activities can you do at ${destination.name}?`,
      answer: `Popular activities at ${destination.name} include ${destination.activities.slice(0, 5).join(', ')}.`,
    });
  }

  // Duration FAQ
  faqs.push({
    question: `How much time should I spend at ${destination.name}?`,
    answer: destination.quickInfo?.['Duration'] || 'Plan to spend 2-4 hours exploring this destination thoroughly.',
  });

  return faqs;
}

/**
 * Generate Product Schema for Tour Packages
 */
export function generateProductSchema(pkg: Package) {
  // Always ~11 months out so the offer never silently expires in search results
  const priceValidUntil = new Date(Date.now() + 335 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split('T')[0];

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: pkg.title,
    description: pkg.description,
    image: [absUrl(pkg.image)],
    sku: pkg.slug,
    brand: {
      '@type': 'Brand',
      name: 'Luxury Andamans',
    },
    offers: {
      '@type': 'Offer',
      url: `https://luxuryandamans.com/packages/${pkg.slug}`,
      priceCurrency: 'INR',
      price: pkg.price,
      priceValidUntil,
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'TravelAgency',
        name: 'Luxury Andamans',
        url: 'https://luxuryandamans.com',
      },
    },
  };
}

/**
 * Generate BreadcrumbList Schema for Packages
 */
export function generatePackageBreadcrumbSchema(pkg: Package) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://luxuryandamans.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Packages',
        item: 'https://luxuryandamans.com/packages', // Assuming this page exists or will exist
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: pkg.title,
        item: `https://luxuryandamans.com/packages/${pkg.slug}`,
      },
    ],
  };
}

/**
 * Generate package-specific meta tags for SEO
 * Title target ≤60 after SEO brand handling; description 140–160.
 */
export function generatePackageMetaTags(pkg: Package) {
  const keywords = [
    pkg.title,
    'Andaman tour package',
    'Andaman honeymoon package',
    `${pkg.duration} Andaman trip`,
    'Luxury Andaman holiday',
    ...pkg.includes?.slice(0, 5) || [],
    ...pkg.features || [],
    'best andaman packages',
    'all inclusive andaman',
    'andaman travel agency',
    'best andaman travel agent'
  ].join(', ');

  const priceStr = `₹${pkg.price.toLocaleString('en-IN')}`;
  const durShort = pkg.duration.replace(/\s*days?/i, 'D').replace(/\s*nights?/i, 'N').trim();
  // Prefer base ≤43 chars so SEO can append " | Luxury Andaman"
  const TITLE_BASE_MAX = 43;
  let title = `${pkg.title} | ${durShort} ${priceStr}`;
  if (title.length > TITLE_BASE_MAX) {
    title = `${pkg.title} | ${priceStr}`;
  }
  if (title.length > TITLE_BASE_MAX) {
    const room = TITLE_BASE_MAX - priceStr.length - 3;
    title = `${truncateAtWord(pkg.title, Math.max(12, room))} | ${priceStr}`;
  }

  const includes = pkg.includes?.slice(0, 2).join(', ') || 'hotels & ferry transfers';
  const feature = pkg.features?.[0] || 'Andaman holidays';
  const description = fitMetaDescription(
    `Book ${pkg.title} (${pkg.duration}) from ${priceStr}. Includes ${includes}. Great for ${feature}. 4.9★ rated.`
  );

  return {
    title,
    description,
    keywords,
    canonical: `https://luxuryandamans.com/packages/${pkg.slug}`,
    ogTitle: title,
    ogDescription: description,
    ogImage: pkg.image,
    ogUrl: `https://luxuryandamans.com/packages/${pkg.slug}`,
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: pkg.image,
  };
}

/**
 * Generate complete structured data package for a Tour Package
 */
export function generatePackageStructuredData(pkg: Package) {
  return [
    generateProductSchema(pkg),
    generatePackageBreadcrumbSchema(pkg),
  ];
}
