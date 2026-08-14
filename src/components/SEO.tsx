import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  pathname?: string; // Make optional; default from window.location
  keywords?: string;
  image?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  locale?: string;
  siteName?: string;
  twitterHandle?: string;
  targetAudience?: 'budget' | 'luxury' | 'family' | 'honeymoon' | 'adventure' | 'all';
  structuredData?: any;
  extraStructuredData?: any[];
  faqData?: { question: string; answer: string }[];
  destinationData?: any;
  noindex?: boolean;
  /** Override canonical path (e.g. point duplicate posts at the primary slug) */
  canonicalPathname?: string;
  /** TravelAgency, WebSite & nav schemas — homepage only to avoid duplicate sitewide JSON-LD */
  includeSiteSchemas?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  pathname, // Destructure pathname
  keywords,
  image = 'https://luxuryandamans.com/og-default.webp', // Default to a branded local asset
  type = 'website',
  author = 'Luxury Andamans',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  locale = 'en_IN',
  siteName = 'Luxury Andamans',
  twitterHandle = '@luxuryandaman',
  targetAudience = 'all',

  structuredData,
  extraStructuredData,
  faqData,
  destinationData,
  noindex = false,
  canonicalPathname,
  includeSiteSchemas = false,
}) => {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://luxuryandamans.com';
  const safePathname = typeof window !== 'undefined' && window.location?.pathname ? window.location.pathname : '/';

  const TITLE_MAX = 60;
  const DESC_MIN = 140;
  const DESC_MAX = 160;
  const BRAND_SUFFIX = ' | Luxury Andaman';

  /** Truncate on a word boundary; avoid cutting mid-word. */
  const truncateAtWord = (text: string, max: number): string => {
    const clean = text.replace(/\s+/g, ' ').trim();
    if (clean.length <= max) return clean;
    const slice = clean.slice(0, max + 1);
    const lastSpace = slice.lastIndexOf(' ');
    const cut = lastSpace > Math.floor(max * 0.55) ? lastSpace : max;
    return clean.slice(0, cut).replace(/[\s|,;:\-–—/]+$/u, '');
  };

  /**
   * Final <title> ≤ 60 chars (incl. brand suffix when used).
   * Prefer dropping suffix or shortening the title — never mid-word chops into the suffix.
   */
  const buildSiteTitle = (rawTitle: string): string => {
    const title = rawTitle.replace(/\s+/g, ' ').trim();
    if (/Luxury Andaman/i.test(title)) {
      return truncateAtWord(title, TITLE_MAX);
    }
    const withSuffix = `${title}${BRAND_SUFFIX}`;
    if (withSuffix.length <= TITLE_MAX) return withSuffix;
    // Title alone fits — drop suffix rather than awkward partial brand
    if (title.length <= TITLE_MAX) return title;
    // Shorten title to leave room for suffix when possible
    const room = TITLE_MAX - BRAND_SUFFIX.length;
    if (room >= 24) {
      return `${truncateAtWord(title, room)}${BRAND_SUFFIX}`;
    }
    return truncateAtWord(title, TITLE_MAX);
  };

  /** Prefer meta descriptions in the 140–160 range. */
  const clampDescription = (raw: string): string => {
    let text = raw.replace(/\s+/g, ' ').trim();
    if (text.length > DESC_MAX) {
      let truncated = truncateAtWord(text, DESC_MAX - 3);
      if (!/[.!?…]$/.test(truncated)) truncated += '...';
      if (truncated.length > DESC_MAX) truncated = truncateAtWord(text, DESC_MAX);
      return truncated;
    }
    if (text.length < DESC_MIN) {
      const pads = [
        ' Expert Andaman trip planning.',
        ' Plan with Luxury Andamans.',
        ' Hotels, ferries & support included.',
        ' Book with us today.',
        ' Free itinerary help.',
        ' See details inside.',
      ];
      for (const pad of pads) {
        const room = DESC_MAX - text.length;
        if (pad.length <= room) {
          text += pad;
          if (text.length >= DESC_MIN) break;
        }
      }
      if (text.length < DESC_MIN) {
        const room = DESC_MAX - text.length;
        if (room >= 8) {
          text += truncateAtWord(' Plan your Andaman trip today.', room);
        }
      }
    }
    return text;
  };

  // Focused keyword strategy - Google recommends 5-15 keywords per page max
  // Excessive keywords trigger "keyword stuffing" penalty
  const getKeywordsByAudience = (audience: string) => {
    const baseKeywords = 'andaman tour packages, andaman packages 2026, best travel agency in andaman, best andaman travel agent, andaman travel agency port blair, havelock island, neil island, port blair, andaman honeymoon packages, andaman family packages, andaman trip cost, scuba diving andaman, andaman islands tour, budget andaman packages, luxury andaman resorts';

    const audienceSpecific: Record<string, string> = {
      budget: 'cheap andaman packages, affordable andaman trip, budget andaman tour, andaman packages under 20000, best value andaman packages',
      luxury: 'premium andaman packages, 5 star andaman packages, luxury villa andaman, boutique resort andaman, exclusive andaman experience',
      family: 'andaman family tour, family vacation andaman, kids friendly andaman, senior citizen andaman trip, safe family holiday',
      honeymoon: 'romantic andaman packages, honeymoon destination andaman, couples packages andaman, candlelight dinner andaman, private beach andaman',
      adventure: 'andaman adventure packages, water sports andaman, snorkeling andaman, sea walk andaman, parasailing andaman, trekking andaman',
      all: 'andaman vacation packages, plan my andaman trip, andaman packages from delhi, andaman packages from mumbai, andaman packages from bangalore, andaman packages from chennai'
    };

    const specific = audienceSpecific[audience] || audienceSpecific.all;
    return `${baseKeywords}, ${specific}`;
  };

  const defaultKeywords = keywords || getKeywordsByAudience(targetAudience);
  const siteTitle = buildSiteTitle(title);
  const metaDescription = clampDescription(description);
  // Normalize trailing slash so canonical matches sitemap (except homepage "/")
  const rawPath = pathname || safePathname;
  const pagePath = rawPath.length > 1 ? rawPath.replace(/\/+$/, '') : rawPath || '/';
  const canonicalUrl = `${siteUrl}${canonicalPathname
    ? (canonicalPathname.length > 1 ? canonicalPathname.replace(/\/+$/, '') : canonicalPathname)
    : pagePath}`;
  // og:image / twitter:image must be absolute URLs — prefix site origin for local assets
  const absoluteImage = /^https?:\/\//i.test(image) ? image : `${siteUrl}${image.startsWith('/') ? '' : '/'}${image}`;

  // Combine default keywords with any additional ones
  const allKeywords = `${defaultKeywords}${tags.length > 0 ? `, ${tags.join(', ')}` : ''}`;

  // Schema for TravelAgency with enhanced SEO targeting
  const travelAgencySchema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    '@id': `${siteUrl}/#travelagency`,
    name: 'Luxury Andamans',
    alternateName: 'Luxury Andaman Travel',
    description: 'Port Blair–based Andaman travel agency and tour operator. Honeymoon, family and custom packages from ₹14,999 with ferry, hotels, and activities. Local desk, free cancellation, 24/7 support.',
    url: siteUrl,
    logo: `${siteUrl}/favicon.png`,
    image: absoluteImage,
    priceRange: '₹14999-₹150000',
    telephone: '+91-6297576826',
    email: 'luxuryandamans@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Marine Hill Road',
      addressLocality: 'Port Blair',
      addressRegion: 'Andaman and Nicobar Islands',
      postalCode: '744101',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 11.6688,
      longitude: 92.7377
    },
    sameAs: [
      'https://www.instagram.com/luxuryandamans',
      'https://www.facebook.com/luxuryandamans',
      'https://x.com/luxuryandaman'
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '21:00'
    },
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, Credit Card, Debit Card, UPI, Bank Transfer',
    knowsAbout: [
      'Andaman tour packages',
      'Best travel agency in Andaman',
      'Havelock Island',
      'Neil Island',
      'Andaman honeymoon packages',
      'Andaman family packages',
      'Scuba diving in Andaman',
    ],
    areaServed: [
      {
        '@type': 'Place',
        name: 'Andaman and Nicobar Islands',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'IN',
          addressRegion: 'Andaman and Nicobar Islands'
        }
      },
      {
        '@type': 'Place',
        name: 'India',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'IN'
        }
      }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Andaman Travel Packages',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Budget Andaman Package',
          description: 'Affordable 4-day Andaman tour package starting from ₹14,999 - Perfect Maldives alternative',
          price: '14999',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
          itemOffered: {
            '@type': 'TravelAction',
            name: 'Budget Andaman Tour',
            description: 'Economical island exploration with accommodation, meals, and sightseeing'
          }
        },
        {
          '@type': 'Offer',
          name: 'Honeymoon Package Andaman',
          description: 'Romantic honeymoon packages for couples starting from ₹25,000 - Cheaper than Maldives',
          price: '25000',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
          itemOffered: {
            '@type': 'TravelAction',
            name: 'Andaman Honeymoon Tour',
            description: 'Romantic getaway with luxury resorts and private experiences'
          }
        },
        {
          '@type': 'Offer',
          name: 'Family Vacation Package',
          description: 'Family-friendly Andaman packages starting from ₹20,000 - Best beach destination in India',
          price: '20000',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
          itemOffered: {
            '@type': 'TravelAction',
            name: 'Andaman Family Tour',
            description: 'Safe and enjoyable family vacation with kid-friendly activities'
          }
        },
        {
          '@type': 'Offer',
          name: 'Luxury Island Escape',
          description: 'Premium luxury experience in Andaman starting from ₹45,000',
          price: '45000',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
          itemOffered: {
            '@type': 'TravelAction',
            name: 'Luxury Andaman Tour',
            description: '5 nights of pure luxury at Havelock\'s finest resorts'
          }
        }
      ]
    },
    serviceType: [
      'Travel Agency',
      'Tour Operator',
      'Honeymoon Packages',
      'Family Vacations',
      'Budget Travel',
      'Luxury Travel',
      'Adventure Tours',
      'Beach Holidays'
    ],
    knowsAbout: [
      'Andaman Islands',
      'Beach Vacations',
      'Island Tourism',
      'Honeymoon Destinations',
      'Budget Travel',
      'Luxury Travel',
      'Scuba Diving',
      'Snorkeling',
      'Water Sports'
    ]
  };

  // Schema for Article/Website
  const isPersonAuthor = type === 'article' && author && !/luxury andaman/i.test(author);
  const contentSchema = {
    '@context': 'https://schema.org',
    '@type': type === 'article' ? 'Article' : 'WebPage',
    name: siteTitle,
    headline: siteTitle,
    description: metaDescription,
    image: absoluteImage,
    url: canonicalUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl
    },
    inLanguage: 'en-IN',
    author: {
      '@type': isPersonAuthor ? 'Person' : 'Organization',
      name: author,
      ...(isPersonAuthor ? {} : { url: siteUrl })
    },
    publisher: {
      '@type': 'Organization',
      name: siteName,
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/favicon.png`
      }
    },
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.hero-description', '[role="main"] p:first-of-type'],
    },
  };

  // Site-level WebSite schema with SearchAction for sitelinks search box
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/experiences?search={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };

  // Primary navigation links to encourage sitelinks
  const navigationSchemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'SiteNavigationElement',
      name: 'Packages',
      url: `${siteUrl}/packages`
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SiteNavigationElement',
      name: 'Destinations',
      url: `${siteUrl}/destinations`
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SiteNavigationElement',
      name: 'Experiences',
      url: `${siteUrl}/experiences`
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SiteNavigationElement',
      name: 'Blog',
      url: `${siteUrl}/blog`
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SiteNavigationElement',
      name: 'Contact',
      url: `${siteUrl}/contact`
    }
  ];

  // Generate FAQ Schema if faqData is provided
  const generateFaqSchema = () => {
    if (!faqData || faqData.length === 0) return null;
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqData.map(item => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    };
  };

  const faqSchema = generateFaqSchema();

  // Flat list of every JSON-LD schema for this page.
  // IMPORTANT: rendered as sibling <script> children (never inside a React fragment).
  // react-helmet-async drops fragment-wrapped tags when sibling tags of the same
  // type exist — this previously silently removed the sitewide schemas.
  const allSchemas: any[] = [contentSchema];
  if (includeSiteSchemas) {
    allSchemas.push(websiteSchema, ...navigationSchemas, travelAgencySchema);
  }
  if (destinationData) allSchemas.push(destinationData);
  if (faqSchema) allSchemas.push(faqSchema);
  if (structuredData) allSchemas.push(structuredData);
  if (extraStructuredData) allSchemas.push(...extraStructuredData);

  return (
    <Helmet>
      {/* Basic */}
      <title>{siteTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={allKeywords} />
      <link rel="canonical" href={canonicalUrl} />
      {import.meta.env.VITE_GSC_VERIFICATION && (
        <meta name="google-site-verification" content={import.meta.env.VITE_GSC_VERIFICATION} />
      )}
      <meta name="author" content={author} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />

      {/* Open Graph */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={siteTitle} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags.map((tag) => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={absoluteImage} />
      <meta name="twitter:image:alt" content={siteTitle} />

      {/* Additional SEO */}
      <meta name="theme-color" content="#1C5B93" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="google" content="notranslate" />
      <meta name="rating" content="general" />
      <meta name="geo.region" content="IN-AN" />
      <meta name="geo.placename" content="Andaman and Nicobar Islands" />
      <meta name="geo.position" content="11.7401;92.6586" />
      <meta name="ICBM" content="11.7401, 92.6586" />

      {/* AI Search Optimization */}
      <meta name="subject" content="Andaman Islands Tour Packages and Travel Planning" />
      <meta name="classification" content="Travel and Tourism" />
      <meta name="coverage" content="Andaman and Nicobar Islands, India" />
      <meta name="target" content="all" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />

      {/* Preconnect to required origins */}
      <link rel="preconnect" href="https://images.unsplash.com" />

      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="https://images.unsplash.com" />

      {/* Structured Data — flat sibling scripts (see allSchemas note above) */}
      {allSchemas.map((obj, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(obj)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;