import { Package } from '../packages';
import { commonPaymentPolicy, commonTips, commonCancellationPolicy, commonTerms } from '../commonPolicies';

export const luxury4n5d: Package = {
  title: "Luxury Escape - 4N/5D Premium",
  description: "Ultra-luxury 5-day experience with 5-star resorts and premium services",
  longDescription: "Experience premium luxury in a compact 5-day package. Stay at 5-star resorts, enjoy exclusive experiences, and personalized service. Perfect for travelers who want luxury without extended vacation time.",
  price: 65000,
  duration: "5 days",
  groupSize: "2",
  image: "/images/packages/luxury-4n5d/hero.jpg",
  features: [
    "5-star resorts only",
    "Premium scuba diving",
    "Spa treatment included",
    "Private transfers",
    "Gourmet dining"
  ],
  includes: [
    "4 nights luxury accommodation",
    "Daily gourmet breakfast",
    "Premium scuba diving with videography",
    "Private speedboat to Elephant Beach",
    "1 spa session (60 minutes)",
    "Candlelight dinner on beach",
    "All VIP transfers",
    "Professional photography (2 hours)",
    "All entry tickets"
  ],
  excludes: [
    "Airfare",
    "Lunch",
    "Alcoholic beverages",
    "Additional spa treatments",
    "Personal expenses"
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "VIP Luxury Arrival - Port Blair",
      description: "Begin your ultra-luxury Andaman experience with VIP airport reception and transfer to your 5-star resort. Enjoy welcome amenities, spa session, and sunset cocktails by the infinity pool.",
      activities: [
        "VIP airport reception with garland welcome and refreshments (12:00 PM)",
        "Private luxury vehicle transfer to Fortune Resort",
        "5-star resort check-in with champagne welcome (12:45 PM)",
        "Gourmet lunch at resort restaurant (1:00 PM - 2:30 PM)",
        "Welcome spa session - 60-minute relaxation massage (3:00 PM)",
        "Resort tour with butler introduction",
        "Sunset cocktails at infinity pool with ocean views (5:30 PM)",
        "Gourmet dinner at resort's specialty restaurant (7:30 PM)",
        "Overnight at Fortune Resort Bay Island"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Resort Beach", "Infinity Pool"]
    },
    {
      day: "Day 2",
      title: "Port Blair Heritage & Culture - VIP Tour",
      description: "Experience Port Blair's heritage sites with a private guide and vehicle. VIP seating at the Light & Sound Show and gourmet dining experiences throughout the day.",
      activities: [
        "Leisurely breakfast at resort (7:30 AM - 9:00 AM)",
        "Private transfer to Cellular Jail (10:00 AM)",
        "VIP guided tour of Cellular Jail with historian (10:30 AM - 12:00 PM)",
        "Gourmet lunch at premium seafood restaurant (12:30 PM)",
        "Visit Corbyn's Cove Beach - private beach setup (2:30 PM)",
        "Optional water sports with premium equipment (3:00 PM - 4:30 PM)",
        "Return to resort for refresh (5:00 PM)",
        "VIP seating at Cellular Jail Light & Sound Show (6:00 PM - 7:00 PM)",
        "Private dinner at rooftop restaurant with ocean views (7:30 PM)",
        "Overnight at Fortune Resort"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Cellular Jail", "Corbyn's Cove Beach", "Light & Sound Show"]
    },
    {
      day: "Day 3",
      title: "Premium Transfer to Havelock | Radhanagar Beach Luxury",
      description: "Private ferry transfer to Havelock Island and check into your beachfront luxury villa at Taj Exotica. Spend the afternoon at world-famous Radhanagar Beach with a romantic candlelight dinner on the beach.",
      activities: [
        "Breakfast and checkout from Port Blair resort (7:00 AM)",
        "VIP transfer to jetty with porter assistance (8:00 AM)",
        "Private premium ferry to Havelock - Makruzz Luxury (8:45 AM - 10:15 AM)",
        "Welcome drink and cold towel on arrival",
        "Private transfer to Taj Exotica Resort (10:30 AM)",
        "Luxury beachfront villa check-in with butler service (11:00 AM)",
        "Villa tour and amenities briefing",
        "Lunch at villa or beach restaurant (12:30 PM - 2:00 PM)",
        "Leisure time at private villa pool (2:00 PM - 3:30 PM)",
        "Visit Radhanagar Beach - Asia's best beach (3:30 PM)",
        "Complimentary couple photoshoot at sunset (5:30 PM)",
        "Candlelight dinner on private beach with live acoustic music (7:30 PM)",
        "Champagne and flower bed decoration in villa",
        "Overnight at Taj Exotica - Havelock"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Radhanagar Beach", "Beachfront Photography"]
    },
    {
      day: "Day 4",
      title: "Premium Scuba Diving & Elephant Beach VIP Experience",
      description: "Professional scuba diving session with underwater videography, followed by private speedboat to Elephant Beach with luxury setup including champagne and gourmet snacks.",
      activities: [
        "Early breakfast (7:00 AM)",
        "Transfer to dive center (7:30 AM)",
        "Premium scuba diving session - PADI certified instructor (8:00 AM - 10:00 AM)",
        "Professional underwater photography and videography included",
        "Equipment: Premium Scubapro gear, underwater camera",
        "Return to resort for refresh and brunch (10:30 AM)",
        "Private speedboat to Elephant Beach with luxury setup (12:00 PM)",
        "Champagne and gourmet snacks served on beach",
        "Premium snorkeling with guide - explore coral reefs",
        "Optional premium water sports:",
        "  • Sea Walk with HD video (₹3,500)",
        "  • Jet Ski - high-performance models (₹1,500)",
        "  • Parasailing with safety briefing (₹3,500)",
        "Glass Bottom Boat ride - view marine life",
        "Return to resort (3:00 PM)",
        "Spa session - Couple massage at resort spa (4:00 PM - 5:30 PM)",
        "Sunset viewing from villa deck",
        "Dinner at resort's fine-dining restaurant (7:30 PM)",
        "Overnight at Taj Exotica"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Scuba Diving Site", "Elephant Beach", "Coral Gardens"]
    },
    {
      day: "Day 5",
      title: "Leisure Morning & VIP Departure",
      description: "Enjoy a relaxed final morning with breakfast in  bed option, pool time, and smooth VIP transfer to airport carrying wonderful luxury memories of Andaman.",
      activities: [
        "Leisure breakfast - in-bed option or beachfront restaurant (7:00 AM - 10:00 AM)",
        "Final swim in private villa pool or beach",
        "Spa time or beach relaxation (optional, if time permits)",
        "Villa checkout with gift hamper (11:00 AM)",
        "Private transfer to Havelock jetty (11:30 AM)",
        "Premium ferry to Port Blair (12:00 PM - 1:30 PM)",
        "Private VIP transfer to airport with assistance",
        "Airport drop with porter help",
        "Departure with luxury memories of Andaman"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Resort", "Final Beach Moments"]
    }
  ],
  itineraries: {
    4: [
      {
        day: "Day 1",
        title: "VIP Luxury Arrival",
        description: "VIP arrival and resort relaxation.",
        activities: [
          "VIP airport pickup with luxury car",
          "Welcome to Fortune Resort Bay Island",
          "Welcome Spa Session (60 mins)",
          "Sunset cocktails by infinity pool",
          "Gourmet dinner at resort"
        ],
        meals: ["Welcome Drinks", "Dinner"],
        sightseeing: ["Resort Beach"]
      },
      {
        day: "Day 2",
        title: "Havelock Luxury | Taj Explorer",
        description: "Premium ferry and Radhanagar Beach experience.",
        activities: [
          "Private luxury ferry to Havelock",
          "Check-in to Taj Exotica Resort",
          "Villa relaxation",
          "Radhanagar Beach sunset visit",
          "Candlelight Dinner on the beach",
          "Stargazing from private villa"
        ],
        meals: ["Breakfast", "Candlelight Dinner"],
        sightseeing: ["Radhanagar Beach"]
      },
      {
        day: "Day 3",
        title: "Premium Water Activities & Return",
        description: "Exclusive scuba diving and beach experiences. Return to Port Blair.",
        activities: [
          "Premium Scuba Diving session",
          "Private speedboat to Elephant Beach",
          "Gourmet beach picnic",
          "Private ferry return to Port Blair",
          "Check-in to luxury suite"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Scuba Site", "Elephant Beach"]
      },
      {
        day: "Day 4",
        title: "VIP Departure",
        description: "Leisurely morning and VIP departure.",
        activities: [
          "Champagne breakfast",
          "Late checkout",
          "Private transfer to airport"
        ],
        meals: ["Breakfast"],
        sightseeing: []
      }
    ],
    5: [
      {
        day: "Day 1",
        title: "Luxury Arrival",
        description: "VIP arrival and resort relaxation.",
        activities: [
          "VIP airport pickup",
          "Welcome amenities at resort",
          "Relaxation massage at spa",
          "Sunset cocktails",
          "Chef's special dinner"
        ],
        meals: ["Welcome Drinks", "Dinner"],
        sightseeing: ["Resort Beach"]
      },
      {
        day: "Day 2",
        title: "Port Blair Heritage",
        description: "Private city tour and cultural exploration.",
        activities: [
          "Private tour of Cellular Jail",
          "Premium seating for Light & Sound Show",
          "Gourmet seafood lunch",
          "Shopping with personal shopper",
          "Private dinner"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Cellular Jail", "Corbyn's Cove"]
      },
      {
        day: "Day 3",
        title: "Havelock Luxury",
        description: "Premium ferry and Radhanagar Beach experience.",
        activities: [
          "Luxury ferry transfer to Havelock",
          "Taj Exotica villa check-in",
          "Private beach access",
          "Radhanagar Beach exclusive visit",
          "Romantic Candlelight Dinner"
        ],
        meals: ["Breakfast", "Candlelight Dinner"],
        sightseeing: ["Radhanagar Beach"]
      },
      {
        day: "Day 4",
        title: "Premium Water Activities",
        description: "Exclusive scuba diving and beach experiences.",
        activities: [
          "Private Scuba Diving with instructor",
          "Elephant Beach by private boat",
          "Luxury beach setup with champagne",
          "Return to villa",
          "Couples Spa treatment"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Scuba Site", "Elephant Beach"]
      },
      {
        day: "Day 5",
        title: "VIP Departure",
        description: "Leisurely morning and VIP departure.",
        activities: [
          "In-villa breakfast",
          "Private airport transfer",
          "VIP departure assistance"
        ],
        meals: ["Breakfast"],
        sightseeing: []
      }
    ],
    6: [
      {
        day: "Day 1",
        title: "Luxury Arrival",
        description: "VIP arrival and resort relaxation.",
        activities: [
          "VIP airport pickup",
          "Welcome drink and cold towels",
          "Check-in to sea-view suite",
          "Sunset lounge access",
          "Fine dining dinner"
        ],
        meals: ["Welcome Drinks", "Dinner"],
        sightseeing: ["Resort Beach"]
      },
      {
        day: "Day 2",
        title: "Port Blair Heritage",
        description: "Private city tour and cultural exploration.",
        activities: [
          "Chauffeur driven city tour",
          "Private guide for Cellular Jail",
          "Exclusive lunch at top restaurant",
          "High tea at resort",
          "Light & Sound Show VIP entry"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Cellular Jail", "Corbyn's Cove"]
      },
      {
        day: "Day 3",
        title: "Havelock Luxury",
        description: "Premium ferry and Radhanagar Beach experience.",
        activities: [
          "First-class ferry to Havelock",
          "Welcome ceremony at Taj Exotica",
          "Beach villa check-in",
          "Radhanagar Beach sunset",
          "Private beach dining experience"
        ],
        meals: ["Breakfast", "Candlelight Dinner"],
        sightseeing: ["Radhanagar Beach"]
      },
      {
        day: "Day 4",
        title: "Premium Water Activities",
        description: "Exclusive scuba diving and beach experiences.",
        activities: [
          "Private dive boat charter",
          "Scuba diving with videography",
          "Gourmet lunch on boat/beach",
          "Elephant Beach snorkeling",
          "Sunset yoga session"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Scuba Site", "Elephant Beach"]
      },
      {
        day: "Day 5",
        title: "Havelock Leisure & Return",
        description: "Relaxing morning. Return to Port Blair.",
        activities: [
          "Breakfast in bed",
          "Leisure time at private pool",
          "Luxury ferry to Port Blair",
          "Check-in to Port Blair resort",
          "Farewell gala dinner"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Aberdeen Bazaar"]
      },
      {
        day: "Day 6",
        title: "VIP Departure",
        description: "Leisurely morning and VIP departure.",
        activities: [
          "Relaxed breakfast",
          "Luxury car transfer to airport",
          "Departure formalities assistance"
        ],
        meals: ["Breakfast"],
        sightseeing: []
      }
    ]
  },
  highlights: [
    {
      title: "5-Star Luxury",
      description: "Stay at premium beachfront villas",
      image: "/images/packages/luxury-4n5d/highlight-resort.jpg"
    },
    {
      title: "Premium Diving",
      description: "Professional diving with videography",
      image: "/images/packages/luxury-4n5d/highlight-scuba.jpg"
    },
    {
      title: "Exclusive Experiences",
      description: "Private beach, spa, and gourmet dining",
      image: "/images/packages/luxury-4n5d/highlight-exclusive.jpg"
    }
  ],
  terms: commonTerms,
  paymentPolicy: commonPaymentPolicy,
  tips: commonTips,
  pricingOptions: [
    { days: 4, pricePerPerson: 65999, title: "4 Days Luxury Express" },
    { days: 5, pricePerPerson: 75999, title: "5 Days Luxury Experience" },
    { days: 6, pricePerPerson: 85999, title: "6 Days Luxury Indulgence" }
  ],
  hotels: [
    {
      name: "Fortune Resort Bay Island",
      location: "Port Blair",
      rating: 5,
      image: "/images/packages/luxury-4n5d/hotel-port-blair.jpg",
      amenities: ["Infinity Pool", "Spa", "Butler Service"],
      description: "5-star luxury resort",
      starCategory: 5,
      roomTypes: [
        { name: "Premium Suite", pricePerNight: 8000, description: "Luxury suite", maxOccupancy: 2 },
        { name: "Villa", pricePerNight: 12000, description: "Private villa", maxOccupancy: 3 }
      ]
    },
    {
      name: "Taj Exotica Resort",
      location: "Havelock",
      rating: 5,
      image: "/images/packages/luxury-4n5d/hotel-havelock.jpg",
      amenities: ["Private Beach", "Spa", "Butler"],
      description: "Ultra-luxury beachfront",
      starCategory: 5,
      roomTypes: [
        { name: "Beach Villa", pricePerNight: 10000, description: "Beachfront villa", maxOccupancy: 2 }
      ]
    }
  ],
  supplements: [
    {
      name: "Additional Spa",
      price: 4000,
      description: "Extra spa treatment",
      availability: ["Resorts"]
    },
    {
      name: "Private Yacht",
      price: 15000,
      description: "2-hour private yacht cruise",
      availability: ["Port Blair"]
    }
  ],
  pickupLocations: ["Port Blair Airport VIP Lounge"],
  cancellationPolicy: commonCancellationPolicy,
  slug: "luxury-escape-4n5d-premium",
  id: "luxury-4n5d"
};

