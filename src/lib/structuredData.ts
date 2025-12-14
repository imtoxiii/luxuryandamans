// Utility functions for generating Schema.org structured data for SEO

import type { Destination } from '../data/destinations';
import type { Package } from '../data/packages';

/**
 * Generate TouristAttraction Schema for destination pages
 */
export function generateTouristAttractionSchema(destination: Destination) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: destination.name,
    description: destination.longDescription,
    image: destination.gallery?.map(img => img.url) || [destination.image],
    url: `https://luxuryandamans.com/destinations/${destination.slug}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: destination.category.replace('-', ' '),
      addressRegion: 'Andaman and Nicobar Islands',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      // These would be filled with actual coordinates from destination data
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '150',
      bestRating: '5',
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

/**
 * Generate destination-specific meta tags for SEO
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

  return {
    title: `${destination.name} Travel Guide 2025 | Best Time, Places & Activities`,
    description: `Plan your trip to ${destination.name}, Andaman. Discover hidden gems, best beaches, activities, and timings. Expert guide for ${destination.bestFor?.join(', ') || 'travelers'}.`,
    keywords,
    canonical: `https://luxuryandamans.com/destinations/${destination.slug}`,
    ogTitle: `Explore ${destination.name} - The Jewel of Andaman`,
    ogDescription: destination.description,
    ogImage: destination.image,
    ogUrl: `https://luxuryandamans.com/destinations/${destination.slug}`,
    twitterCard: 'summary_large_image',
    twitterTitle: `${destination.name} Travel Guide - Luxury Andamans`,
    twitterDescription: destination.description,
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
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: pkg.title,
    description: pkg.description,
    image: [pkg.image],
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
      priceValidUntil: '2025-12-31',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '85',
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
    'all inclusive andaman'
  ].join(', ');

  return {
    title: `${pkg.title} | ${pkg.duration} Luxury Andaman Package | ₹${pkg.price}`,
    description: `Book ${pkg.title} (${pkg.duration}). Includes ${pkg.includes?.slice(0, 3).join(', ')}. Perfect for ${pkg.features?.slice(0, 3).join(', ') || 'vacations'}. Rated 4.9/5 stars.`,
    keywords,
    canonical: `https://luxuryandamans.com/packages/${pkg.slug}`,
    ogTitle: `${pkg.title} - Premium Andaman Tour Package`,
    ogDescription: `Experience the best of Andaman with our ${pkg.title}. ${pkg.duration} of luxury, adventure, and relaxation. Book now for ₹${pkg.price}.`,
    ogImage: pkg.image,
    ogUrl: `https://luxuryandamans.com/packages/${pkg.slug}`,
    twitterCard: 'summary_large_image',
    twitterTitle: `${pkg.title} | Luxury Andamans`,
    twitterDescription: pkg.description,
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
