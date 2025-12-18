import { Package } from '../packages';
import { commonPaymentPolicy, commonTips, commonCancellationPolicy, commonTerms } from '../commonPolicies';

export const luxuryHoneymoon: Package = {
  title: "Luxury Honeymoon Bliss - 7 Days",
  description: "Exclusive romantic getaway with private pool villas, candlelight dinners, and couple spa experiences",
  longDescription: "Experience the ultimate romantic escape with our 7-day Luxury Honeymoon Bliss package. Stay in premium private pool villas, enjoy secluded beach picnics, indulge in couple spa treatments, and explore the islands in style. This package is designed for couples seeking privacy, luxury, and unforgettable romantic moments in the tropical paradise of Andaman.",
  price: 85000,
  duration: "7 days",
  groupSize: "2",
  image: "/images/packages/luxury-honeymoon/hero.jpg",
  features: [
    "Private Pool Villas",
    "Candlelight Dinner",
    "Couple Spa Session",
    "Private Transfers",
    "Flower Bed Decoration",
    "Honeymoon Cake",
    "Secluded Beach Picnic"
  ],
  includes: [
    "6 nights accommodation in 5-star luxury resorts",
    "Daily breakfast",
    "Private AC car for all transfers and sightseeing",
    "Premium ferry tickets (Royal Class)",
    "Romantic candlelight dinner on the beach",
    "Couple spa therapy (60 mins)",
    "Private sunset cruise",
    "Flower bed decoration on arrival",
    "Honeymoon special cake and wine",
    "Professional photoshoot session",
    "All entry tickets and permits",
    "Personal tour coordinator 24/7"
  ],
  excludes: [
    "Airfare",
    "Lunch",
    "Personal expenses",
    "Room service",
    "Tips and gratuities",
    "Anything not mentioned in includes"
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival in Paradise",
      description: "Welcome to Port Blair. Luxury pickup and transfer to your sea-facing suite. Evening private sunset view at Chidiya Tapu.",
      activities: [
        "Luxury car pickup from airport with bouquet",
        "Welcome drink and traditional reception",
        "Check-in to 5-star hotel with honeymoon suite",
        "Flower bed decoration and honeymoon cake in room",
        "Private sunset trip to Chidiya Tapu (Bird Island)",
        "Romantic candlelight dinner at hotel"
      ],
      hotel: {
        name: "Taj Exotica Resort & Spa",
        location: "Havelock Island",
        rating: 5,
        image: "/images/packages/luxury-honeymoon/hotel-taj.jpg",
        amenities: ["Private Beach", "Spa", "Infinity Pool", "Fine Dining", "Butler Service"],
        description: "World-class luxury resort with private villas and direct beach access"
      },
      meals: ["Welcome Drinks", "Romantic Dinner"],
      sightseeing: ["Chidiya Tapu Sunset"]
    },
    {
      day: "Day 2",
      title: "Port Blair to Havelock - Villa Experience",
      description: "Private cruise to Havelock. Check into your private pool villa. Evening romantic beach walk.",
      activities: [
        "Breakfast in bed (optional)",
        "Private luxury transfer to jetty",
        "Luxury cruise to Havelock (Royal Class)",
        "VIP Check-in to Private Pool Villa",
        "Room decoration with exotic flowers",
        "Leisure time in private pool",
        "Beachside candlelight dinner with wine"
      ],
      hotel: {
        name: "Taj Exotica Resort & Spa",
        location: "Havelock Island",
        rating: 5,
        image: "/images/packages/luxury-honeymoon/hotel-taj.jpg",
        amenities: ["Private Pool Villa", "Spa", "Beach Access", "Fine Dining"],
        description: "Luxury villa with private pool"
      },
      meals: ["Breakfast", "Candlelight Dinner"],
      sightseeing: ["Radhanagar Beach"]
    },
    {
      day: "Day 3",
      title: "Radhanagar Beach & Photoshoot",
      description: "Visit the world-famous Radhanagar Beach. Professional couple photoshoot session at sunset.",
      activities: [
        "Leisurely breakfast",
        "Private transfer to Radhanagar Beach",
        "Dedicated spot setup with umbrella and recliners",
        "Gourmet picnic lunch on the beach",
        "Professional couple photoshoot (2 hours)",
        "Sunset viewing with refreshments",
        "Return to villa"
      ],
      meals: ["Breakfast", "Picnic Lunch"],
      sightseeing: ["Radhanagar Beach", "Photoshoot Locations"]
    },
    {
      day: "Day 4",
      title: "Elephant Beach & Spa",
      description: "Private speedboat to Elephant Beach for snorkeling. Afternoon couple spa session.",
      activities: [
        "Private speedboat charter to Elephant Beach",
        "Exclusive guided snorkeling for couple",
        "Underwater photography included",
        "Return to resort",
        "Couple Spa Therapy (60 mins) - Swedish/Aroma",
        "Jacuzzi and steam session"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Elephant Beach"]
    },
    {
      day: "Day 5",
      title: "Havelock to Neil Island",
      description: "Cruise to Neil Island. Stay at a luxury resort. Visit Laxmanpur Beach for sunset.",
      activities: [
        "Breakfast and checkout",
        "Cruise to Neil Island (Royal Class)",
        "Check-in to luxury resort at Neil",
        "Afternoon visit to Laxmanpur Beach",
        "Private sunset viewing setup",
        "Romantic dinner at resort"
      ],
      hotel: {
        name: "SeaShell Samssara",
        location: "Neil Island",
        rating: 5,
        image: "/images/packages/luxury-honeymoon/hotel-neil.jpg",
        amenities: ["Pool", "Spa", "Beach Access", "Luxury Rooms"],
        description: "Premium resort on Neil Island"
      },
      meals: ["Breakfast", "Dinner"],
      sightseeing: ["Laxmanpur Beach", "Natural Bridge"]
    },
    {
      day: "Day 6",
      title: "Neil to Port Blair - Shopping & Dinner",
      description: "Return to Port Blair. Shopping for souvenirs. Farewell dinner.",
      activities: [
        "Breakfast and morning leisure",
        "Cruise return to Port Blair",
        "Check-in to hotel",
        "Shopping at Sagarika Emporium",
        "Farewell dinner with live music",
        "Gift presentation"
      ],
      hotel: {
        name: "Welcomhotel by ITC",
        location: "Port Blair",
        rating: 5,
        image: "/images/packages/luxury-honeymoon/hotel-itc.jpg",
        amenities: ["Sea View", "Spa", "Pool", "Fine Dining"],
        description: "Luxury hotel overlooking the bay"
      },
      meals: ["Breakfast", "Farewell Dinner"],
      sightseeing: ["Shopping", "City Tour"]
    },
    {
      day: "Day 7",
      title: "Departure",
      description: "Private transfer to airport with sweet memories.",
      activities: [
        "Breakfast",
        "Checkout assistance",
        "Gift hamper from Luxury Andamans",
        "Private luxury airport drop"
      ],
      meals: ["Breakfast"],
      sightseeing: []
    }
  ],
  itineraries: {
    6: [
      {
        day: "Day 1",
        title: "Arrival in Paradise",
        description: "Welcome to Port Blair. Luxury pickup. Flower bed decoration and romantic dinner.",
        activities: [
          "Luxury car pickup with bouquet",
          "Check-in to Honeymoon Suite",
          "Flower bed decoration & Honeymoon Cake",
          "Chidiya Tapu Sunset",
          "Romantic Candlelight Dinner"
        ],
        meals: ["Welcome Drinks", "Romantic Dinner"],
        sightseeing: ["Chidiya Tapu"]
      },
      {
        day: "Day 2",
        title: "Port Blair to Havelock - Villa Experience",
        description: "Private cruise to Havelock. Check into your private pool villa. Evening romantic beach walk.",
        activities: [
          "Luxury cruise to Havelock (Royal Class)",
          "VIP Check-in to Private Pool Villa",
          "Room decoration with exotic flowers",
          "Beachside candlelight dinner with wine"
        ],
        meals: ["Breakfast", "Candlelight Dinner"],
        sightseeing: ["Radhanagar Beach"]
      },
      {
        day: "Day 3",
        title: "Radhanagar Beach & Photoshoot",
        description: "Visit the world-famous Radhanagar Beach. Professional couple photoshoot session at sunset.",
        activities: [
          "Private transfer to Radhanagar Beach",
          "Gourmet picnic lunch on the beach",
          "Professional couple photoshoot (2 hours)",
          "Sunset viewing with refreshments"
        ],
        meals: ["Breakfast", "Picnic Lunch"],
        sightseeing: ["Radhanagar Beach"]
      },
      {
        day: "Day 4",
        title: "Elephant Beach & Spa",
        description: "Private speedboat to Elephant Beach for snorkeling. Afternoon couple spa session.",
        activities: [
          "Private speedboat charter to Elephant Beach",
          "Exclusive guided snorkeling for couple",
          "Couple Spa Therapy (60 mins) - Swedish/Aroma",
          "Jacuzzi and steam session"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Elephant Beach"]
      },
      {
        day: "Day 5",
        title: "Havelock to Port Blair",
        description: "Return to Port Blair. Shopping for souvenirs. Farewell dinner.",
        activities: [
          "Cruise return to Port Blair (Royal Class)",
          "Shopping at Sagarika Emporium",
          "Farewell dinner with live music",
          "Gift presentation"
        ],
        meals: ["Breakfast", "Farewell Dinner"],
        sightseeing: ["Shopping"]
      },
      {
        day: "Day 6",
        title: "Departure",
        description: "Private transfer to airport with sweet memories.",
        activities: [
          "Checkout assistance",
          "Gift hamper from Luxury Andamans",
          "Private luxury airport drop"
        ],
        meals: ["Breakfast"],
        sightseeing: []
      }
    ],
    7: [
      {
        day: "Day 1",
        title: "Arrival in Paradise",
        description: "Welcome to Port Blair. Luxury pickup and transfer to your sea-facing suite. Evening private sunset view at Chidiya Tapu.",
        activities: [
          "Luxury car pickup from airport with bouquet",
          "Welcome drink and traditional reception",
          "Check-in to 5-star hotel with honeymoon suite",
          "Flower bed decoration and honeymoon cake in room",
          "Private sunset trip to Chidiya Tapu (Bird Island)",
          "Romantic candlelight dinner at hotel"
        ],
        hotel: {
          name: "Taj Exotica Resort & Spa",
          location: "Havelock Island",
          rating: 5,
          image: "/images/packages/luxury-honeymoon/hotel-taj.jpg",
          amenities: ["Private Beach", "Spa", "Infinity Pool", "Fine Dining", "Butler Service"],
          description: "World-class luxury resort with private villas and direct beach access"
        },
        meals: ["Welcome Drinks", "Romantic Dinner"],
        sightseeing: ["Chidiya Tapu Sunset"]
      },
      {
        day: "Day 2",
        title: "Port Blair to Havelock - Villa Experience",
        description: "Private cruise to Havelock. Check into your private pool villa. Evening romantic beach walk.",
        activities: [
          "Breakfast at hotel",
          "Private luxury transfer to jetty",
          "Luxury cruise to Havelock (Royal Class)",
          "VIP Check-in to Private Pool Villa",
          "Room decoration with exotic flowers",
          "Leisure time in private pool",
          "Beachside candlelight dinner with wine"
        ],
        hotel: {
          name: "Taj Exotica Resort & Spa",
          location: "Havelock Island",
          rating: 5,
          image: "/images/packages/luxury-honeymoon/hotel-taj.jpg",
          amenities: ["Private Pool Villa", "Spa", "Beach Access", "Fine Dining"],
          description: "Luxury villa with private pool"
        },
        meals: ["Breakfast", "Candlelight Dinner"],
        sightseeing: ["Radhanagar Beach"]
      },
      {
        day: "Day 3",
        title: "Radhanagar Beach & Photoshoot",
        description: "Visit the world-famous Radhanagar Beach. Professional couple photoshoot session at sunset.",
        activities: [
          "Leisurely breakfast",
          "Private transfer to Radhanagar Beach",
          "Dedicated spot setup with umbrella and recliners",
          "Gourmet picnic lunch on the beach",
          "Professional couple photoshoot (2 hours)",
          "Sunset viewing with refreshments",
          "Return to villa"
        ],
        meals: ["Breakfast", "Picnic Lunch"],
        sightseeing: ["Radhanagar Beach", "Photoshoot Locations"]
      },
      {
        day: "Day 4",
        title: "Elephant Beach & Spa",
        description: "Private speedboat to Elephant Beach for snorkeling. Afternoon couple spa session.",
        activities: [
          "Private speedboat charter to Elephant Beach",
          "Exclusive guided snorkeling for couple",
          "Underwater photography included",
          "Return to resort",
          "Couple Spa Therapy (60 mins) - Swedish/Aroma",
          "Jacuzzi and steam session"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Elephant Beach"]
      },
      {
        day: "Day 5",
        title: "Havelock to Neil Island",
        description: "Cruise to Neil Island. Stay at a luxury resort. Visit Laxmanpur Beach for sunset.",
        activities: [
          "Breakfast and checkout",
          "Cruise to Neil Island (Royal Class)",
          "Check-in to luxury resort at Neil",
          "Afternoon visit to Laxmanpur Beach",
          "Private sunset viewing setup",
          "Romantic dinner at resort"
        ],
        hotel: {
          name: "SeaShell Samssara",
          location: "Neil Island",
          rating: 5,
          image: "/images/packages/luxury-honeymoon/hotel-neil.jpg",
          amenities: ["Pool", "Spa", "Beach Access", "Luxury Rooms"],
          description: "Premium resort on Neil Island"
        },
        meals: ["Breakfast", "Dinner"],
        sightseeing: ["Laxmanpur Beach", "Natural Bridge"]
      },
      {
        day: "Day 6",
        title: "Neil to Port Blair - Shopping & Dinner",
        description: "Return to Port Blair. Shopping for souvenirs. Farewell dinner.",
        activities: [
          "Breakfast and morning leisure",
          "Cruise return to Port Blair",
          "Check-in to hotel",
          "Shopping at Sagarika Emporium",
          "Farewell dinner with live music",
          "Gift presentation"
        ],
        hotel: {
          name: "Welcomhotel by ITC",
          location: "Port Blair",
          rating: 5,
          image: "/images/packages/luxury-honeymoon/hotel-itc.jpg",
          amenities: ["Sea View", "Spa", "Pool", "Fine Dining"],
          description: "Luxury hotel overlooking the bay"
        },
        meals: ["Breakfast", "Farewell Dinner"],
        sightseeing: ["Shopping", "City Tour"]
      },
      {
        day: "Day 7",
        title: "Departure",
        description: "Private transfer to airport with sweet memories.",
        activities: [
          "Breakfast",
          "Checkout assistance",
          "Gift hamper from Luxury Andamans",
          "Private luxury airport drop"
        ],
        meals: ["Breakfast"],
        sightseeing: []
      }
    ],
    8: [
      {
        day: "Day 1",
        title: "Arrival in Paradise",
        description: "Welcome to Port Blair. Luxury pickup and transfer to your sea-facing suite. Evening private sunset view at Chidiya Tapu.",
        activities: [
          "Luxury car pickup from airport with bouquet",
          "Welcome drink and traditional reception",
          "Check-in to 5-star hotel with honeymoon suite",
          "Flower bed decoration and honeymoon cake in room",
          "Private sunset trip to Chidiya Tapu (Bird Island)",
          "Romantic candlelight dinner at hotel"
        ],
        meals: ["Welcome Drinks", "Romantic Dinner"],
        sightseeing: ["Chidiya Tapu"]
      },
      {
        day: "Day 2",
        title: "Port Blair to Havelock - Villa Experience",
        description: "Private cruise to Havelock. Check into your private pool villa. Evening romantic beach walk.",
        activities: [
          "Luxury cruise to Havelock (Royal Class)",
          "VIP Check-in to Private Pool Villa",
          "Room decoration with exotic flowers",
          "Beachside candlelight dinner with wine"
        ],
        meals: ["Breakfast", "Candlelight Dinner"],
        sightseeing: ["Radhanagar Beach"]
      },
      {
        day: "Day 3",
        title: "Radhanagar Beach & Photoshoot",
        description: "Visit the world-famous Radhanagar Beach. Professional couple photoshoot session at sunset.",
        activities: [
          "Private transfer to Radhanagar Beach",
          "Gourmet picnic lunch on the beach",
          "Professional couple photoshoot (2 hours)",
          "Sunset viewing with refreshments"
        ],
        meals: ["Breakfast", "Picnic Lunch"],
        sightseeing: ["Radhanagar Beach"]
      },
      {
        day: "Day 4",
        title: "Elephant Beach & Spa",
        description: "Private speedboat to Elephant Beach for snorkeling. Afternoon couple spa session.",
        activities: [
          "Private speedboat charter to Elephant Beach",
          "Exclusive guided snorkeling for couple",
          "Couple Spa Therapy (60 mins) - Swedish/Aroma",
          "Jacuzzi and steam session"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Elephant Beach"]
      },
      {
        day: "Day 5",
        title: "Havelock Leisure & Romance",
        description: "Day at leisure to enjoy the private pool villa.",
        activities: [
          "Breakfast in bed",
          "Full day access to private pool",
          "Optional: Scuba Diving or Kayaking",
          "Intimate 3-course dinner in villa"
        ],
        meals: ["Breakfast", "Dinner"],
        sightseeing: []
      },
      {
        day: "Day 6",
        title: "Havelock to Neil Island",
        description: "Cruise to Neil Island. Stay at a luxury resort. Visit Laxmanpur Beach for sunset.",
        activities: [
          "Cruise to Neil Island (Royal Class)",
          "Check-in to luxury resort at Neil",
          "Afternoon visit to Laxmanpur Beach",
          "Private sunset viewing setup",
          "Romantic dinner at resort"
        ],
        meals: ["Breakfast", "Dinner"],
        sightseeing: ["Laxmanpur Beach", "Natural Bridge"]
      },
      {
        day: "Day 7",
        title: "Neil to Port Blair",
        description: "Return to Port Blair. Shopping for souvenirs. Farewell dinner.",
        activities: [
          "Cruise return to Port Blair",
          "Shopping at Sagarika Emporium",
          "Farewell dinner with live music",
          "Gift presentation"
        ],
        meals: ["Breakfast", "Farewell Dinner"],
        sightseeing: ["Shopping"]
      },
      {
        day: "Day 8",
        title: "Departure",
        description: "Private transfer to airport with sweet memories.",
        activities: [
          "Checkout assistance",
          "Gift hamper from Luxury Andamans",
          "Private luxury airport drop"
        ],
        meals: ["Breakfast"],
        sightseeing: []
      }
    ]
  },
  highlights: [
    {
      title: "Private Pool Villa",
      description: "Stay in exclusive villas with your own private pool",
      image: "/images/packages/luxury-honeymoon/highlight-villa.jpg"
    },
    {
      title: "Candlelight Dinner",
      description: "Romantic beachside dinner setup with wine and music",
      image: "/images/packages/luxury-honeymoon/highlight-dinner.jpg"
    },
    {
      title: "Couple Spa",
      description: "Rejuvenating spa session for the couple",
      image: "/images/packages/luxury-honeymoon/highlight-spa.jpg"
    }
  ],
  terms: commonTerms,
  paymentPolicy: commonPaymentPolicy,
  tips: commonTips,
  pricingOptions: [
    { days: 6, pricePerPerson: 89999, title: "6 Days Luxury Escape" },
    { days: 7, pricePerPerson: 102999, title: "7 Days Luxury Honeymoon" },
    { days: 8, pricePerPerson: 115999, title: "8 Days Royal Honeymoon" }
  ],
  hotels: [
    {
      name: "Taj Exotica Resort & Spa",
      location: "Havelock",
      rating: 5,
      image: "/images/packages/luxury-honeymoon/hotel-taj.jpg",
      amenities: ["Private Pool", "Beach Access", "Spa", "Butler"],
      description: "Ultra-luxury resort",
      starCategory: 5,
      roomTypes: [
        { name: "Deluxe Villa", pricePerNight: 35000, description: "Garden view villa", maxOccupancy: 2 },
        { name: "Pool Villa", pricePerNight: 55000, description: "Villa with private pool", maxOccupancy: 2 }
      ]
    },
    {
      name: "SeaShell Samssara",
      location: "Neil Island",
      rating: 5,
      image: "/images/packages/luxury-honeymoon/hotel-neil.jpg",
      amenities: ["Pool", "Beach Access"],
      description: "Luxury nature resort",
      starCategory: 5,
      roomTypes: [
        { name: "Lagoon Villa", pricePerNight: 18000, description: "Villa with lagoon view", maxOccupancy: 2 }
      ]
    }
  ],
  supplements: [
    {
      name: "Private Yacht Charter",
      price: 45000,
      description: "Half-day private yacht experience",
      availability: ["Havelock"]
    },
    {
      name: "Helicopter Ride",
      price: 15000,
      description: "Scenic helicopter ride over islands",
      availability: ["Port Blair"]
    }
  ],
  pickupLocations: ["Port Blair Airport"],
  cancellationPolicy: commonCancellationPolicy,
  slug: "luxury-honeymoon-bliss-7-days",
  id: "luxury-honeymoon"
};

