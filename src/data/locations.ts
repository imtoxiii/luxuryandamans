import { Location } from '../types/location';

export const locations: Location[] = [
  {
    id: "havelock-island",
    name: "Havelock Island",
    slug: "havelock-island",
    tagline: "Paradise Found in the Andamans",
    description: "Experience pristine beaches, world-class diving, and luxury resorts on Havelock Island, the crown jewel of the Andamans.",
    longDescription: `
      Havelock Island, officially known as Swaraj Dweep, is the most visited of the Andaman Islands. Known for its pristine beaches, crystal-clear waters, and lush forests, it's a paradise for beach lovers and water sports enthusiasts alike.

      The island offers a perfect blend of luxury and natural beauty, with world-class resorts alongside untouched beaches. Whether you're seeking adventure or relaxation, Havelock has something for everyone.
    `,
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        caption: "Radhanagar Beach at sunset"
      },
      {
        url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        caption: "Diving at Elephant Beach"
      },
      {
        url: "https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        caption: "Luxury beach resort"
      }
    ],
    highlights: [
      {
        title: "Radhanagar Beach",
        description: "Ranked as Asia's best beach, perfect for swimming and sunsets",
        image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Elephant Beach",
        description: "Popular for snorkeling and water sports",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    activities: [
      {
        name: "Scuba Diving",
        description: "World-class diving spots with rich marine life",
        duration: "Half day",
        price: 6500,
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Beach Hopping",
        description: "Visit multiple pristine beaches",
        duration: "Full day",
        price: 3500,
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      }
    ],
    accommodation: [
      {
        name: "Taj Exotica",
        type: "Luxury Resort",
        priceRange: "₹35,000 - ₹1,50,000",
        description: "World-class luxury resort with private beach",
        image: "https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      }
    ],
    howToReach: {
      fromPortBlair: "2-hour ferry ride",
      bestWayToTravel: "Government or private ferry",
      nearestAirport: "Veer Savarkar International Airport, Port Blair",
      transportOptions: [
        "Government ferry (₹500 per person)",
        "Private luxury ferry (₹1500 per person)",
        "Helicopter service (₹4500 per person)"
      ]
    },
    bestTimeToVisit: {
      peak: "December to February",
      shoulder: "October-November & March-May",
      avoid: "June to September (Monsoon)",
      weatherInfo: "Pleasant temperatures year-round, best weather October to May"
    },
    tips: [
      "Book accommodations in advance during peak season",
      "Carry cash as ATMs are limited",
      "Get necessary permits before arrival",
      "Respect local customs and environment"
    ],
    coordinates: {
      latitude: 11.9673,
      longitude: 92.9916
    }
  },
  {
    id: "neil-island",
    name: "Neil Island",
    slug: "neil-island",
    tagline: "A Tranquil Paradise",
    description: "Discover the peaceful charm of Neil Island with its pristine beaches, clear waters, and laid-back atmosphere.",
    longDescription: `
      Neil Island, now known as Shaheed Dweep, is a smaller, less crowded island known for its pristine beaches, clear waters, and laid-back atmosphere. It's perfect for those seeking tranquility and natural beauty.

      The island offers a unique blend of peace and adventure, with beautiful beaches named after characters from the Ramayana and some of the best snorkeling spots in the Andamans.
    `,
    image: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        caption: "Bharatpur Beach"
      },
      {
        url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        caption: "Natural Bridge"
      }
    ],
    highlights: [
      {
        title: "Natural Bridge",
        description: "Unique coral formation connecting two islands",
        image: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Bharatpur Beach",
        description: "Perfect for snorkeling and swimming",
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    activities: [
      {
        name: "Snorkeling",
        description: "Explore vibrant coral reefs",
        duration: "2-3 hours",
        price: 1500,
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Glass Bottom Boat",
        description: "View marine life without getting wet",
        duration: "1 hour",
        price: 800,
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      }
    ],
    accommodation: [
      {
        name: "Summer Sands",
        type: "Beach Resort",
        priceRange: "₹8,000 - ₹15,000",
        description: "Comfortable beachfront resort",
        image: "https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      }
    ],
    howToReach: {
      fromPortBlair: "2-hour ferry ride",
      bestWayToTravel: "Government ferry",
      nearestAirport: "Veer Savarkar International Airport, Port Blair",
      transportOptions: [
        "Government ferry (₹400 per person)",
        "Private ferry (₹1000 per person)"
      ]
    },
    bestTimeToVisit: {
      peak: "December to February",
      shoulder: "October-November & March-May",
      avoid: "June to September (Monsoon)",
      weatherInfo: "Similar to Havelock, best visited during the dry season"
    },
    tips: [
      "Rent a bicycle to explore the island",
      "Visit the Natural Bridge during low tide",
      "Book accommodations in advance",
      "Carry basic medicines"
    ],
    coordinates: {
      latitude: 11.8311,
      longitude: 93.0375
    }
  },
  {
    id: "port-blair",
    name: "Port Blair",
    slug: "port-blair",
    tagline: "Gateway to the Andamans",
    description: "The capital city of the Andaman Islands, rich in history and culture.",
    longDescription: `
      Port Blair, the capital of the Andaman and Nicobar Islands, serves as the gateway to this tropical paradise. The city combines historical significance with modern amenities, making it an essential stop on any Andaman itinerary.

      From the sobering Cellular Jail to vibrant markets and beautiful beaches, Port Blair offers a unique blend of history, culture, and natural beauty.
    `,
    image: "https://images.unsplash.com/photo-1584507305093-a4e42d1632c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1584507305093-a4e42d1632c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        caption: "Cellular Jail"
      },
      {
        url: "https://images.unsplash.com/photo-1565865735449-dcf2832039b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        caption: "Aberdeen Bazaar"
      }
    ],
    highlights: [
      {
        title: "Cellular Jail",
        description: "Historic colonial prison with light and sound show",
        image: "https://images.unsplash.com/photo-1584507305093-a4e42d1632c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Aberdeen Bazaar",
        description: "Main shopping area with local markets",
        image: "https://images.unsplash.com/photo-1565865735449-dcf2832039b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    activities: [
      {
        name: "Historical Tour",
        description: "Visit Cellular Jail and museums",
        duration: "Half day",
        price: 2000,
        image: "https://images.unsplash.com/photo-1584507305093-a4e42d1632c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "City Tour",
        description: "Explore markets and local culture",
        duration: "Full day",
        price: 2500,
        image: "https://images.unsplash.com/photo-1565865735449-dcf2832039b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      }
    ],
    accommodation: [
      {
        name: "Fortune Resort Bay Island",
        type: "Luxury Hotel",
        priceRange: "₹8,000 - ₹20,000",
        description: "Sea-facing luxury hotel",
        image: "https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      }
    ],
    howToReach: {
      fromMainland: "Direct flights from major Indian cities",
      bestWayToTravel: "Air",
      nearestAirport: "Veer Savarkar International Airport, Port Blair",
      transportOptions: [
        "Flights from Chennai (2 hours)",
        "Flights from Kolkata (2 hours)",
        "Flights from Delhi (5 hours with layover)"
      ]
    },
    bestTimeToVisit: {
      peak: "December to February",
      shoulder: "October-November & March-May",
      avoid: "June to September (Monsoon)",
      weatherInfo: "Tropical climate with year-round warm temperatures"
    },
    tips: [
      "Book Cellular Jail light and sound show in advance",
      "Visit Aberdeen Bazaar for local shopping",
      "Get permits on arrival",
      "Exchange currency at authorized centers"
    ],
    coordinates: {
      latitude: 11.6234,
      longitude: 92.7265
    }
  }
];