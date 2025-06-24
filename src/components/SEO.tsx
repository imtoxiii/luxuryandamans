import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  locale?: string;
  siteName?: string;
  twitterHandle?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = 'andaman islands, andaman tourism, andaman travel, beach vacation, island holiday, luxury travel, budget travel, backpacking, havelock island, neil island, port blair, scuba diving, snorkeling, beach resorts, honeymoon destinations, family vacation, adventure travel, water sports, island hopping, sunset cruises, coral reefs, marine life, tropical paradise, beach activities, indian ocean islands, asia travel, maldives alternative, thailand alternative, phuket alternative, bali alternative, affordable luxury, eco tourism, sustainable travel, cultural tourism, heritage sites, cellular jail, water villas, beach villas, romantic getaway, summer vacation, winter escape, monsoon travel, diving certification, beach wedding, destination wedding, wellness retreat, yoga retreat, nature photography, wildlife tourism, bird watching, local cuisine, seafood, island culture, tribal culture, historical sites, colonial heritage, ferry services, flight booking, travel packages, all inclusive resorts, boutique hotels, backpacker hostels, local markets, shopping, souvenirs, travel guide, travel tips, visa information, travel insurance, weather information, best time to visit, peak season, off season, budget accommodation, luxury resorts, adventure activities, water activities, beach sports, island tours, guided tours, private tours, group tours, solo travel, couple travel, family packages, honeymoon packages, adventure packages, diving packages, weekend getaway, long stay, workation, digital nomad, remote work',
  image = 'https://images.unsplash.com/photo-1583212292454-39d2a21af845?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
  url = 'https://andamanluxury.com',
  type = 'website',
  author = 'Luxury Andamans',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  locale = 'en_US',
  siteName = 'Luxury Andamans',
  twitterHandle = '@andamanluxury'
}) => {
  const siteTitle = `${title} | Luxury Andamans`;
  const canonicalUrl = `${url}${window.location.pathname}`;

  // Combine default keywords with any additional ones
  const allKeywords = `${keywords}${tags.length > 0 ? `, ${tags.join(', ')}` : ''}`;

  // Schema for TravelAgency
  const travelAgencySchema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: siteName,
    description: 'Luxury and budget travel experiences in the Andaman Islands',
    url: url,
    logo: `${url}/logo.png`,
    image: image,
    priceRange: '₹₹₹',
    areaServed: {
      '@type': 'Place',
      name: 'Andaman and Nicobar Islands',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN'
      }
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Travel Packages',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'TravelAction',
            name: 'Luxury Island Escape',
            description: '5 nights of pure luxury at Havelock\'s finest resorts'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'TravelAction',
            name: 'Budget Adventure Package',
            description: 'Affordable island exploration and activities'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'TravelAction',
            name: 'Backpacker Special',
            description: 'Economic dormitory stays and group activities'
          }
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '789'
    }
  };

  // Schema for Article/Website
  const contentSchema = {
    '@context': 'https://schema.org',
    '@type': type === 'article' ? 'Article' : 'WebSite',
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
        url: `${url}/logo.png`
      }
    },
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime
  };

  // Schema for TouristDestination
  const destinationSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: 'Andaman Islands',
    description: 'Tropical paradise in the Bay of Bengal offering pristine beaches, world-class diving, and luxury resorts',
    url: url,
    touristType: [
      'Luxury travelers',
      'Adventure seekers',
      'Beach lovers',
      'Backpackers',
      'Honeymooners',
      'Families',
      'Nature enthusiasts'
    ],
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Beaches',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Scuba Diving',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Luxury Resorts',
        value: true
      }
    ]
  };

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
        {JSON.stringify(travelAgencySchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(destinationSchema)}
      </script>

      {/* Alternate Languages */}
      <link rel="alternate" href={url} hrefLang="x-default" />
      <link rel="alternate" href={url} hrefLang="en" />
      <link rel="alternate" href={`${url}/hi`} hrefLang="hi" />
    </Helmet>
  );
};

export default SEO;