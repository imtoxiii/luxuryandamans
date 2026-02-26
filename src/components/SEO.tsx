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
  locale = 'en_US',
  siteName = 'Luxury Andamans',
  twitterHandle = '@andamanluxury',
  targetAudience = 'all',

  structuredData,
  extraStructuredData,
  faqData,
  destinationData,
}) => {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://luxuryandamans.com';
  const safePathname = typeof window !== 'undefined' && window.location?.pathname ? window.location.pathname : '/';

  // Comprehensive keyword strategy targeting different user intents and budgets
  const getKeywordsByAudience = (audience: string) => {
    const baseKeywords = 'andaman islands, andaman tourism, andaman travel, andaman packages, andaman tour packages, andaman holiday packages, andaman vacation packages, andaman trip packages, port blair, havelock island, neil island, radhanagar beach, cellular jail, ross island, elephant beach, bharatpur beach, andaman and nicobar islands tour, andaman trip 2026';

    const budgetKeywords = 'cheap andaman packages, budget andaman tour, affordable andaman trip, low cost andaman packages, budget honeymoon andaman, cheap island vacation, budget beach holiday, affordable island packages, andaman packages under 20000, andaman packages under 30000, andaman packages under 40000, andaman packages under 50000, budget family vacation andaman, cheap andaman tour packages, economical andaman packages, discount andaman packages, best value andaman packages, budget andaman honeymoon packages, affordable andaman family packages, andaman packages on emi, all inclusive andaman packages, andaman family package under 1 lakh';

    const premiumKeywords = 'premium andaman packages, boutique andaman tour, premium island resort, quality beach resort andaman, premium andaman vacation, curated honeymoon andaman, high-quality andaman packages, premium andaman tour packages, boutique beach vacation, premium island getaway, exclusive andaman packages, best rated andaman resorts, premium andaman experience, 4 star andaman packages, 5 star andaman packages, luxury villa andaman, overwater cottage andaman';

    const familyKeywords = 'andaman family packages, family vacation andaman, family tour packages andaman, family friendly andaman, andaman packages for family, family holiday andaman, kids friendly andaman packages, family beach vacation, andaman family trip, family adventure packages andaman, andaman with kids, safe andaman packages for family, senior citizen andaman trip, andaman group tour packages';

    const honeymoonKeywords = 'andaman honeymoon packages, romantic andaman packages, honeymoon tour packages andaman, andaman honeymoon trip, romantic island vacation, honeymoon beach packages, andaman romantic getaway, couples packages andaman, honeymoon destination andaman, romantic beach vacation, andaman honeymoon deals, romantic island packages, private beach dinner andaman, couple activities andaman, candlelight dinner andaman, best honeymoon resort andaman';

    const adventureKeywords = 'andaman adventure packages, scuba diving andaman, snorkeling andaman, water sports andaman, adventure tour andaman, diving packages andaman, adventure activities andaman, water adventure andaman, island adventure packages, adventure vacation andaman, trekking andaman, sea walk andaman, parasailing andaman, jet ski andaman, glass bottom boat andaman, bioluminescence kayaking andaman, night kayaking andaman';

    const competitorKeywords = 'maldives alternative, maldives vs andaman, cheaper than maldives, andaman vs maldives honeymoon, budget maldives alternative, maldives like destination india, tropical island vacation india, best beach destination india, island vacation india, beach holiday india, tropical paradise india, coral reef destination india, clear water beaches india, white sand beaches india, andaman vs thailand for indian family, andaman vs goa, andaman vs lakshadweep, better than goa';

    const broadTravelKeywords = 'beach vacation, island holiday, tropical vacation, beach packages, island packages, beach tour packages, island tour packages, tropical island vacation, beach holiday packages, island getaway, beach destination, tropical destination, coral reef vacation, diving vacation, snorkeling vacation, water sports vacation, beach resort packages, island resort packages, tropical beach vacation, pristine beach vacation, crystal clear water vacation, white sand beach vacation, turquoise water vacation, beach paradise, island paradise, tropical paradise';

    const seasonalKeywords = 'summer vacation packages, winter vacation packages, monsoon packages andaman, peak season andaman, off season andaman packages, best time visit andaman, december andaman packages, january andaman packages, february andaman packages, march andaman packages, april andaman packages, may andaman packages, andaman new year packages, andaman christmas packages, andaman diwali vacation';

    const locationBasedKeywords = 'andaman nicobar islands, bay of bengal islands, indian ocean islands, south andaman, north andaman, middle andaman, andaman sea, indian islands, tropical islands india, beach islands india, coral islands india, diving destinations india, snorkeling destinations india, andaman tour from delhi, andaman tour from mumbai, andaman tour from chennai, andaman tour from kolkata, andaman tour from bangalore, andaman tour from hyderabad, andaman tour from pune, andaman tour from ahmedabad';

    // Conversational / AI-search keywords - these match how people ask AI assistants
    const aiSearchKeywords = 'how to plan andaman trip, what is the cost of andaman trip, how many days are enough for andaman, is andaman safe for couples, best andaman itinerary, andaman trip cost for 2 people, andaman trip cost for 4 people, andaman trip cost for family, which islands to visit in andaman, do i need passport for andaman, how to reach andaman from delhi, plan my andaman honeymoon, suggest andaman package for family, what to pack for andaman trip, best time to go to andaman islands, andaman travel agent near me, trusted andaman tour operator, andaman trip planner, custom andaman itinerary, personalized andaman package';

    switch (audience) {
      case 'budget':
        return `${baseKeywords}, ${budgetKeywords}, ${competitorKeywords}, ${broadTravelKeywords}, ${seasonalKeywords}, ${locationBasedKeywords}, ${aiSearchKeywords}`;
      case 'luxury':
        return `${baseKeywords}, ${premiumKeywords}, ${competitorKeywords}, ${broadTravelKeywords}, ${seasonalKeywords}, ${locationBasedKeywords}, ${aiSearchKeywords}`;
      case 'family':
        return `${baseKeywords}, ${familyKeywords}, ${budgetKeywords}, ${competitorKeywords}, ${broadTravelKeywords}, ${seasonalKeywords}, ${locationBasedKeywords}, ${aiSearchKeywords}`;
      case 'honeymoon':
        return `${baseKeywords}, ${honeymoonKeywords}, ${budgetKeywords}, ${premiumKeywords}, ${competitorKeywords}, ${broadTravelKeywords}, ${seasonalKeywords}, ${locationBasedKeywords}, ${aiSearchKeywords}`;
      case 'adventure':
        return `${baseKeywords}, ${adventureKeywords}, ${budgetKeywords}, ${competitorKeywords}, ${broadTravelKeywords}, ${seasonalKeywords}, ${locationBasedKeywords}, ${aiSearchKeywords}`;
      default:
        return `${baseKeywords}, ${budgetKeywords}, ${premiumKeywords}, ${familyKeywords}, ${honeymoonKeywords}, ${adventureKeywords}, ${competitorKeywords}, ${broadTravelKeywords}, ${seasonalKeywords}, ${locationBasedKeywords}, ${aiSearchKeywords}`;
    }
  };

  const defaultKeywords = keywords || getKeywordsByAudience(targetAudience);
  const siteTitle = title.includes('Luxury Andaman') ? title : `${title} | Luxury Andaman`;
  const canonicalUrl = `${siteUrl}${pathname || safePathname}`;

  // Combine default keywords with any additional ones
  const allKeywords = `${defaultKeywords}${tags.length > 0 ? `, ${tags.join(', ')}` : ''}`;

  // Schema for TravelAgency with enhanced SEO targeting
  const travelAgencySchema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Luxury Andamans',
    alternateName: 'Luxury Andaman Travel',
    description: '#1 Andaman Islands tour operator with 4.9★ rating. Expert-crafted packages starting ₹14,999. 1200+ happy travelers, free cancellation, 24/7 support.',
    url: siteUrl,
    logo: `${siteUrl}/favicon.png`,
    image: image,
    priceRange: '₹14999-₹150000',
    telephone: '+91-6297576826',
    email: 'luxuryandamans@gmail.com',
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1200',
      bestRating: '5',
      worstRating: '1'
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
  const contentSchema = {
    '@context': 'https://schema.org',
    '@type': type === 'article' ? 'Article' : 'WebPage',
    name: siteTitle,
    headline: title,
    description,
    image,
    url: canonicalUrl,
    author: {
      '@type': 'Organization',
      name: author
    },
    publisher: {
      '@type': 'Organization',
      name: siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/favicon.png`
      }
    },
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime
  };

  // Site-level WebSite schema with SearchAction for sitelinks search box
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/packages?search={search_term_string}`,
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

  return (
    <Helmet>
      {/* Basic */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      {/* Open Graph */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
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
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.unsplash.com" />

      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      <link rel="dns-prefetch" href="https://images.unsplash.com" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(contentSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      {navigationSchemas.map((obj, idx) => (
        <script key={`nav-${idx}`} type="application/ld+json">
          {JSON.stringify(obj)}
        </script>
      ))}
      <script type="application/ld+json">
        {JSON.stringify(travelAgencySchema)}
      </script>
      {destinationData && (
        <script type="application/ld+json">
          {JSON.stringify(destinationData)}
        </script>
      )}
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      {extraStructuredData && extraStructuredData.map((obj, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(obj)}
        </script>
      ))}

      {/* Alternate Languages */}
      <link rel="alternate" href={siteUrl} hrefLang="x-default" />
      <link rel="alternate" href={siteUrl} hrefLang="en" />
      <link rel="alternate" href={siteUrl} hrefLang="en-IN" />

      {/* Speakable Schema for Voice Search / AI Assistants */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: siteTitle,
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['h1', '.hero-description', '[role="main"] p:first-of-type']
          },
          url: canonicalUrl
        })}
      </script>
    </Helmet>
  );
};

export default SEO;