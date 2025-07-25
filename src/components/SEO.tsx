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
  priceRange?: string;
  targetAudience?: 'budget' | 'luxury' | 'family' | 'honeymoon' | 'adventure' | 'all';
  structuredData?: any;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image = 'https://images.unsplash.com/photo-1583212292454-39d2a21af845?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
  url = 'https://luxuryandamans.com',
  type = 'website',
  author = 'Luxury Andamans',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  locale = 'en_US',
  siteName = 'Luxury Andamans',
  twitterHandle = '@andamanluxury',
  priceRange = '₹₹₹',
  targetAudience = 'all',
  structuredData
}) => {
  // Comprehensive keyword strategy targeting different user intents and budgets
  const getKeywordsByAudience = (audience: string) => {
    const baseKeywords = 'andaman islands, andaman tourism, andaman travel, andaman packages, andaman tour packages, andaman holiday packages, andaman vacation packages, andaman trip packages, port blair, havelock island, neil island, radhanagar beach, cellular jail, ross island, elephant beach, bharatpur beach';
    
    const budgetKeywords = 'cheap andaman packages, budget andaman tour, affordable andaman trip, low cost andaman packages, budget honeymoon andaman, cheap island vacation, budget beach holiday, affordable island packages, andaman packages under 20000, andaman packages under 30000, andaman packages under 40000, andaman packages under 50000, budget family vacation andaman, cheap andaman tour packages, economical andaman packages, discount andaman packages, best value andaman packages, budget andaman honeymoon packages, affordable andaman family packages';
    
    const luxuryKeywords = 'luxury andaman packages, premium andaman tour, luxury island resort, luxury beach resort andaman, premium andaman vacation, luxury honeymoon andaman, high-end andaman packages, luxury andaman tour packages, premium beach vacation, luxury island getaway, exclusive andaman packages, luxury andaman resorts, premium andaman experience';
    
    const familyKeywords = 'andaman family packages, family vacation andaman, family tour packages andaman, family friendly andaman, andaman packages for family, family holiday andaman, kids friendly andaman packages, family beach vacation, andaman family trip, family adventure packages andaman';
    
    const honeymoonKeywords = 'andaman honeymoon packages, romantic andaman packages, honeymoon tour packages andaman, andaman honeymoon trip, romantic island vacation, honeymoon beach packages, andaman romantic getaway, couples packages andaman, honeymoon destination andaman, romantic beach vacation, andaman honeymoon deals, romantic island packages';
    
    const adventureKeywords = 'andaman adventure packages, scuba diving andaman, snorkeling andaman, water sports andaman, adventure tour andaman, diving packages andaman, adventure activities andaman, water adventure andaman, island adventure packages, adventure vacation andaman';
    
    const competitorKeywords = 'maldives alternative, maldives vs andaman, cheaper than maldives, andaman vs maldives honeymoon, budget maldives alternative, maldives like destination india, tropical island vacation india, best beach destination india, island vacation india, beach holiday india, tropical paradise india, coral reef destination india, clear water beaches india, white sand beaches india';
    
    const broadTravelKeywords = 'beach vacation, island holiday, tropical vacation, beach packages, island packages, beach tour packages, island tour packages, tropical island vacation, beach holiday packages, island getaway, beach destination, tropical destination, coral reef vacation, diving vacation, snorkeling vacation, water sports vacation, beach resort packages, island resort packages, tropical beach vacation, pristine beach vacation, crystal clear water vacation, white sand beach vacation, turquoise water vacation, beach paradise, island paradise, tropical paradise';
    
    const seasonalKeywords = 'summer vacation packages, winter vacation packages, monsoon packages andaman, peak season andaman, off season andaman packages, best time visit andaman, december andaman packages, january andaman packages, february andaman packages, march andaman packages, april andaman packages, may andaman packages';
    
    const locationBasedKeywords = 'andaman nicobar islands, bay of bengal islands, indian ocean islands, south andaman, north andaman, middle andaman, andaman sea, indian islands, tropical islands india, beach islands india, coral islands india, diving destinations india, snorkeling destinations india';

    switch (audience) {
      case 'budget':
        return `${baseKeywords}, ${budgetKeywords}, ${competitorKeywords}, ${broadTravelKeywords}, ${seasonalKeywords}, ${locationBasedKeywords}`;
      case 'luxury':
        return `${baseKeywords}, ${luxuryKeywords}, ${competitorKeywords}, ${broadTravelKeywords}, ${seasonalKeywords}, ${locationBasedKeywords}`;
      case 'family':
        return `${baseKeywords}, ${familyKeywords}, ${budgetKeywords}, ${competitorKeywords}, ${broadTravelKeywords}, ${seasonalKeywords}, ${locationBasedKeywords}`;
      case 'honeymoon':
        return `${baseKeywords}, ${honeymoonKeywords}, ${budgetKeywords}, ${luxuryKeywords}, ${competitorKeywords}, ${broadTravelKeywords}, ${seasonalKeywords}, ${locationBasedKeywords}`;
      case 'adventure':
        return `${baseKeywords}, ${adventureKeywords}, ${budgetKeywords}, ${competitorKeywords}, ${broadTravelKeywords}, ${seasonalKeywords}, ${locationBasedKeywords}`;
      default:
        return `${baseKeywords}, ${budgetKeywords}, ${luxuryKeywords}, ${familyKeywords}, ${honeymoonKeywords}, ${adventureKeywords}, ${competitorKeywords}, ${broadTravelKeywords}, ${seasonalKeywords}, ${locationBasedKeywords}`;
    }
  };

  const defaultKeywords = keywords || getKeywordsByAudience(targetAudience);
  const siteTitle = title.includes('Luxury Andaman') ? title : `${title} | Luxury Andaman`;
  const canonicalUrl = `${url}${window.location.pathname}`;

  // Combine default keywords with any additional ones
  const allKeywords = `${defaultKeywords}${tags.length > 0 ? `, ${tags.join(', ')}` : ''}`;

  // Schema for TravelAgency with enhanced SEO targeting
  const travelAgencySchema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Luxury Andaman',
    description: '#1 Andaman Islands tour operator with 4.8★ rating. Expert-crafted packages starting ₹15,000. 1000+ happy travelers, free cancellation, 24/7 support.',
    url: url,
    logo: `${url}/favicon.svg`,
    image: image,
    priceRange: '₹15000-₹150000',
    telephone: '+91-9876543210',
    email: 'info@luxuryandaman.com',
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
          description: 'Affordable 4-day Andaman tour package starting from ₹15,000 - Perfect Maldives alternative',
          price: '15000',
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
      ratingValue: '4.8',
      reviewCount: '1247',
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

  // Schema for TouristDestination with enhanced targeting
  const destinationSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: 'Andaman Islands - Budget-Friendly Maldives Alternative',
    description: 'Affordable tropical paradise in the Bay of Bengal offering pristine beaches, world-class diving, and budget-friendly resorts. Perfect alternative to Maldives with packages starting from ₹15,000.',
    url: url,
    image: image,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '11.7401',
      longitude: '92.6586'
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressRegion: 'Andaman and Nicobar Islands'
    },
    touristType: [
      'Budget travelers',
      'Luxury travelers',
      'Adventure seekers',
      'Beach lovers',
      'Backpackers',
      'Honeymooners',
      'Families',
      'Nature enthusiasts',
      'Couples',
      'Solo travelers',
      'Digital nomads'
    ],
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Pristine Beaches',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Scuba Diving',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Budget Resorts',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Luxury Resorts',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Water Sports',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Coral Reefs',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Clear Blue Waters',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'White Sand Beaches',
        value: true
      }
    ],
    hasMap: 'https://maps.google.com/?q=Andaman+Islands',
    isAccessibleForFree: false,
    publicAccess: true,
    maximumAttendeeCapacity: 1000,
    availableLanguage: ['English', 'Hindi', 'Bengali'],
    currenciesAccepted: 'INR',
    paymentAccepted: ['Cash', 'Credit Card', 'Debit Card', 'UPI'],
    priceRange: '₹15000-₹100000'
  };

  // FAQ Schema for better SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is Andaman cheaper than Maldives?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Andaman is significantly cheaper than Maldives. Andaman packages start from ₹15,000 per person while Maldives packages typically start from ₹80,000 per person. You can enjoy similar pristine beaches, clear blue waters, and tropical paradise experience at a fraction of the cost.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the cheapest Andaman package?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our cheapest Andaman package starts from ₹15,000 per person for a 4-day trip including accommodation, meals, ferry transfers, and sightseeing. We also offer budget packages under ₹20,000, ₹30,000, and ₹40,000 for different durations and comfort levels.'
        }
      },
      {
        '@type': 'Question',
        name: 'Which is better for honeymoon - Andaman or Maldives?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Both are excellent for honeymoons, but Andaman offers better value for money. You get similar romantic beaches, water villas, and sunset views at 60-70% lower cost. Andaman also offers more activities like scuba diving, historical tours, and island hopping.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the best time to visit Andaman?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The best time to visit Andaman is October to May when the weather is pleasant and seas are calm. December to February is peak season with perfect weather but higher prices. March to May offers good weather with lower prices.'
        }
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
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}

      {/* Alternate Languages */}
      <link rel="alternate" href={url} hrefLang="x-default" />
      <link rel="alternate" href={url} hrefLang="en" />
      <link rel="alternate" href={`${url}/hi`} hrefLang="hi" />
    </Helmet>
  );
};

export default SEO;