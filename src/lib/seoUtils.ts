// SEO Utilities for Andaman Travel Website

export interface InternalLink {
  url: string;
  title: string;
  keywords: string[];
  priority: 'high' | 'medium' | 'low';
}

export interface SEOKeywords {
  primary: string[];
  secondary: string[];
  longTail: string[];
  location: string[];
  competitor: string[];
}

// High-priority internal links for budget travel SEO
export const budgetTravelLinks: InternalLink[] = [
  {
    url: '/blog/andaman-vs-maldives-budget-alternative-comparison',
    title: 'Andaman vs Maldives: Budget Alternative Comparison',
    keywords: ['andaman vs maldives', 'budget alternative', 'cheap vacation', 'maldives alternative'],
    priority: 'high'
  },
  {
    url: '/blog/cheapest-andaman-packages-budget-travel-under-20000',
    title: 'Cheapest Andaman Packages Under ₹20,000',
    keywords: ['cheapest andaman packages', 'budget travel', 'andaman under 20000'],
    priority: 'high'
  },
  {
    url: '/blog/budget-honeymoon-andaman-packages-under-50000',
    title: 'Budget Honeymoon Packages Under ₹50,000',
    keywords: ['budget honeymoon', 'andaman honeymoon packages', 'cheap honeymoon'],
    priority: 'high'
  },
  {
    url: '/blog/family-vacation-packages-andaman-kid-friendly-activities',
    title: 'Family Vacation Packages with Kid-Friendly Activities',
    keywords: ['family vacation', 'andaman family packages', 'kid friendly'],
    priority: 'medium'
  },
  {
    url: '/blog/best-beach-destination-india-andaman-vs-goa-kerala-maldives',
    title: 'Best Beach Destination in India: Andaman vs Goa vs Kerala',
    keywords: ['best beach destination india', 'andaman vs goa', 'beach vacation india'],
    priority: 'medium'
  }
];

// Package links for internal linking
export const packageLinks: InternalLink[] = [
  {
    url: '/packages/budget-explorer',
    title: 'Budget Explorer Package - From ₹15,000',
    keywords: ['budget packages', 'cheap andaman packages', 'affordable packages'],
    priority: 'high'
  },
  {
    url: '/packages/honeymoon-special',
    title: 'Honeymoon Special Package - From ₹25,000',
    keywords: ['honeymoon packages', 'romantic packages', 'couple packages'],
    priority: 'high'
  },
  {
    url: '/packages/family-paradise',
    title: 'Family Paradise Package - From ₹20,000',
    keywords: ['family packages', 'family vacation', 'kid friendly packages'],
    priority: 'high'
  },
  {
    url: '/packages/luxury-island-escape',
    title: 'Luxury Island Escape - From ₹45,000',
    keywords: ['luxury packages', 'premium packages', 'luxury andaman'],
    priority: 'medium'
  }
];

// Destination links for SEO
export const destinationLinks: InternalLink[] = [
  {
    url: '/destinations/radhanagar-beach',
    title: 'Radhanagar Beach - Asia\'s Best Beach',
    keywords: ['radhanagar beach', 'best beach asia', 'havelock beach'],
    priority: 'high'
  },
  {
    url: '/destinations/elephant-beach',
    title: 'Elephant Beach - Water Sports Paradise',
    keywords: ['elephant beach', 'water sports', 'snorkeling'],
    priority: 'high'
  },
  {
    url: '/destinations/cellular-jail',
    title: 'Cellular Jail - Historical Monument',
    keywords: ['cellular jail', 'historical sites', 'port blair'],
    priority: 'medium'
  }
];

// Comprehensive keyword strategy
export const seoKeywords: SEOKeywords = {
  primary: [
    'andaman packages',
    'andaman tour packages',
    'budget andaman packages',
    'cheap andaman packages',
    'andaman honeymoon packages',
    'andaman family packages'
  ],
  secondary: [
    'andaman vs maldives',
    'budget honeymoon',
    'family vacation',
    'island vacation',
    'beach holiday',
    'tropical vacation'
  ],
  longTail: [
    'andaman packages under 20000',
    'budget honeymoon packages under 50000',
    'cheapest andaman tour packages',
    'family vacation packages andaman',
    'andaman vs maldives for honeymoon',
    'best beach destination in india'
  ],
  location: [
    'havelock island',
    'neil island',
    'port blair',
    'radhanagar beach',
    'elephant beach',
    'bharatpur beach'
  ],
  competitor: [
    'maldives alternative',
    'cheaper than maldives',
    'andaman vs goa',
    'andaman vs kerala',
    'budget maldives alternative'
  ]
};

// Function to get related links based on current page
export const getRelatedLinks = (currentPage: string, maxLinks: number = 3): InternalLink[] => {
  const allLinks = [...budgetTravelLinks, ...packageLinks, ...destinationLinks];
  
  // Filter out current page
  const filteredLinks = allLinks.filter(link => link.url !== currentPage);
  
  // Sort by priority and return top links
  return filteredLinks
    .sort((a, b) => {
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    })
    .slice(0, maxLinks);
};

// Function to generate contextual anchor text
export const generateAnchorText = (link: InternalLink, context: 'budget' | 'luxury' | 'family' | 'honeymoon' = 'budget'): string => {
  const contextualTexts = {
    budget: [
      `affordable ${link.keywords[0]}`,
      `budget-friendly ${link.keywords[0]}`,
      `cheap ${link.keywords[0]}`
    ],
    luxury: [
      `premium ${link.keywords[0]}`,
      `luxury ${link.keywords[0]}`,
      `exclusive ${link.keywords[0]}`
    ],
    family: [
      `family-friendly ${link.keywords[0]}`,
      `kid-friendly ${link.keywords[0]}`,
      `family ${link.keywords[0]}`
    ],
    honeymoon: [
      `romantic ${link.keywords[0]}`,
      `honeymoon ${link.keywords[0]}`,
      `couples ${link.keywords[0]}`
    ]
  };
  
  const contextTexts = contextualTexts[context];
  return contextTexts[Math.floor(Math.random() * contextTexts.length)];
};

// Schema markup generators
export const generateBreadcrumbSchema = (breadcrumbs: Array<{name: string, url: string}>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  };
};

export const generatePackageSchema = (packageData: any) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: packageData.title,
    description: packageData.description,
    image: packageData.image,
    offers: {
      '@type': 'Offer',
      price: packageData.price,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      validFrom: new Date().toISOString(),
      validThrough: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()
    },
    provider: {
      '@type': 'TravelAgency',
      name: 'Luxury Andamans',
      url: 'https://luxuryandamans.com'
    },
    touristType: packageData.touristType || ['Budget travelers', 'Families', 'Couples'],
    itinerary: packageData.itinerary?.map((day: any, index: number) => ({
      '@type': 'Day',
      dayOfTrip: index + 1,
      name: day.title,
      description: day.description
    }))
  };
};

// Meta description generator
export const generateMetaDescription = (
  type: 'package' | 'destination' | 'blog',
  title: string,
  price?: number,
  location?: string
): string => {
  const templates = {
    package: price 
      ? `${title} starting from ₹${price.toLocaleString()}. Best value Andaman packages with accommodation, meals, transfers & sightseeing. Book now!`
      : `${title} - Affordable Andaman tour packages with best prices. Perfect alternative to expensive international destinations. Book today!`,
    destination: `Discover ${title} in Andaman Islands. ${location ? `Located in ${location}, ` : ''}pristine beaches, crystal clear waters, and amazing experiences await. Plan your visit now!`,
    blog: `${title} - Complete guide with tips, prices, and insider information. Make the most of your Andaman vacation with our expert advice.`
  };
  
  return templates[type];
};

// URL slug generator
export const generateSEOSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
    .substring(0, 60);
};

export default {
  budgetTravelLinks,
  packageLinks,
  destinationLinks,
  seoKeywords,
  getRelatedLinks,
  generateAnchorText,
  generateBreadcrumbSchema,
  generatePackageSchema,
  generateMetaDescription,
  generateSEOSlug
}; 