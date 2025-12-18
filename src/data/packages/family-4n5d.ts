import { Package } from '../packages';
import { commonPaymentPolicy, commonTips, commonCancellationPolicy, commonTerms } from '../commonPolicies';

export const family4n5d: Package = {
  title: "Family Fun - 4N/5D Quick Getaway",
  description: "Quick family vacation with kid-friendly activities and fun for all ages",
  longDescription: "Perfect family package for a short vacation covering the best family-friendly attractions of Andaman. Includes safe water activities, educational experiences, and comfortable accommodations suitable for children.",
  price: 22000,
  duration: "5 days",
  groupSize: "4-6",
  image: "/images/packages/family-4n5d/hero.jpg",
  features: [
    "Kid-friendly activities",
    "Family rooms",
    "Safe water sports",
    "Educational tours",
    "Beach games"
  ],
  includes: [
    "4 nights family accommodation",
    "Daily breakfast for all",
    "All ferry transfers",
    "Family snorkeling at Elephant Beach",
    "Glass-bottom boat ride",
    "Beach games equipment",
    "Cellular Jail kid-friendly tour",
    "All entry tickets",
    "Family safety kit"
  ],
  excludes: [
    "Airfare",
    "Lunch and dinner",
    "Optional water sports",
    "Personal expenses",
    "Babysitting services"
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Family Arrival | Beach Fun & History",
      description: "Welcome to Andaman! Begin your family adventure with beach fun at Corbyn's Cove where kids can safely play in the sand and shallow water. Learn about India's freedom struggle at Cellular Jail with a kid-friendly guided tour, followed by the fascinating Light & Sound Show that brings history alive.",
      activities: [
        "Family airport pickup with welcome garlands (12:00 PM)",
        "Hotel check-in and lunch break (12:30 PM)",
        "Corbyn's Cove Beach - Kids can play in sand, build sandcastles (3:00 PM)",
        "Safe shallow water area for children to splash around",
        "Beach volleyball and frisbee games for family",
        "Cellular Jail National Memorial - Kid-friendly historical tour (5:00 PM)",
        "Guide explains history in simple, engaging way for children",
        "Light & Sound Show - Animated history show (6:30 PM - 7:30 PM)",
        "Children find it fascinating and educational",
        "Return to hotel and rest"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Corbyn's Cove Beach", "Cellular Jail", "Light & Sound Show"]
    },
    {
      day: "Day 2",
      title: "Ferry Adventure to Havelock | Asia's Best Beach",
      description: "Kids love the ferry ride to Havelock Island! Spend the day at the stunning Radhanagar Beach (Beach No. 7), consistently ranked as one of Asia's best beaches. The shallow, calm waters make it perfect for children to play safely.",
      activities: [
        "Early family breakfast (7:00 AM)",
        "Transfer to Phoenix Bay Jetty (7:45 AM)",
        "Board cruise to Havelock - Kids enjoy the boat ride! (8:30 AM - 10:30 AM)",
        "Spot dolphins from ferry (if lucky!)",
        "Arrive Havelock, transfer to family-friendly beach resort (11:00 AM)",
        "Check-in and lunch break at resort (12:00 PM)",
        "Visit world-famous Radhanagar Beach (3:00 PM)",
        "Kids play in shallow, safe water area with lifeguards nearby",
        "Family beach games - Volleyball, cricket, frisbee",
        "Sandcastle building competition",
        "Family photoshoot at sunset (5:30 PM)",
        "Return to resort and rest"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Radhanagar Beach", "Havelock Island"]
    },
    {
      day: "Day 3",
      title: "Elephant Beach Family Day",
      description: "Safe water activities for the whole family.",
      activities: [
        "Snorkeling - Kid-friendly with safety equipment",
        "Glass Bottom Boat - Perfect for younger kids",
        "Banana Ride - Fun for ages 8+ (optional)",
        "Beach Games - Family volleyball and cricket"
      ],
      meals: ["Breakfast", "Packed Lunch"],
      sightseeing: ["Elephant Beach"]
    },
    {
      day: "Day 4",
      title: "Ross Island Adventure",
      description: "Explore Ross Island and meet friendly animals.",
      activities: [
        "Ferry back to Port Blair",
        "Ross Island wildlife spotting",
        "See deer and peacocks",
        "Japanese Bunkers exploration"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Ross Island", "Wildlife"]
    },
    {
      day: "Day 5",
      title: "Departure",
      description: "Final morning and shopping.",
      activities: [
        "Breakfast",
        "Shopping for souvenirs",
        "Airport transfer"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Aberdeen Bazaar"]
    }
  ],
  itineraries: {
    4: [
      {
        day: "Day 1",
        title: "Family Arrival | Beach Fun & History",
        description: "Arrive at Port Blair and check into your family-friendly hotel. Visit Corbyn's Cove Beach and Cellular Jail.",
        activities: [
          "Airport pickup by private vehicle",
          "Check-in to family hotel",
          "Visit Corbyn's Cove Beach for swimming",
          "Beach volleyball and games",
          "Cellular Jail Light & Sound Show",
          "Dinner at hotel"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Corbyn's Cove", "Cellular Jail"]
      },
      {
        day: "Day 2",
        title: "Havelock Island | Radhanagar Beach",
        description: "Ferry to Havelock. Visit Radhanagar Beach for sunset.",
        activities: [
          "Private ferry to Havelock",
          "Check-in to beach resort",
          "Lunch at resort",
          "Visit Radhanagar Beach (Beach No. 7)",
          "Sunset family photography",
          "Dinner at resort"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Radhanagar Beach"]
      },
      {
        day: "Day 3",
        title: "Elephant Beach & Return",
        description: "Morning Elephant Beach trip with snorkeling. Afternoon ferry back to Port Blair.",
        activities: [
          "Speedboat to Elephant Beach",
          "Complimentary Snorkeling",
          "Glass Bottom Boat ride",
          "Return to Havelock Jetty",
          "Ferry back to Port Blair",
          "Check-in to Port Blair hotel"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Elephant Beach"]
      },
      {
        day: "Day 4",
        title: "Departure",
        description: "Transfer to airport.",
        activities: [
          "Breakfast",
          "Last minute shopping",
          "Airport Transfer"
        ],
        meals: ["Breakfast"],
        sightseeing: []
      }
    ],
    5: [
      {
        day: "Day 1",
        title: "Family Arrival",
        description: "Arrive and explore Port Blair beaches.",
        activities: [
          "Family airport pickup",
          "Check-in to hotel",
          "Corbyn's Cove Beach visit",
          "Cellular Jail tour",
          "Light & Sound Show"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Corbyn's Cove", "Cellular Jail"]
      },
      {
        day: "Day 2",
        title: "Havelock Island Fun",
        description: "Ferry to Havelock and beach activities.",
        activities: [
          "Ferry to Havelock",
          "Check-in to resort",
          "Radhanagar Beach sunset",
          "Beach games for kids",
          "Family dinner"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Radhanagar Beach"]
      },
      {
        day: "Day 3",
        title: "Elephant Beach Family Day",
        description: "Safe water activities for the whole family.",
        activities: [
          "Elephant Beach excursion",
          "Snorkeling session",
          "Banana Boat ride",
          "Beach picnic",
          "Return to resort"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Elephant Beach"]
      },
      {
        day: "Day 4",
        title: "Ross Island Adventure",
        description: "Explore Ross Island and meet friendly animals.",
        activities: [
          "Ferry to Port Blair",
          "Check-in to hotel",
          "Ross Island boat trip",
          "Deer and Peacock spotting",
          "Shopping at Aberdeen Bazaar"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Ross Island"]
      },
      {
        day: "Day 5",
        title: "Departure",
        description: "Final morning and shopping.",
        activities: [
          "Breakfast",
          "Souvenir shopping",
          "Airport Transfer"
        ],
        meals: ["Breakfast"],
        sightseeing: []
      }
    ],
    6: [
      {
        day: "Day 1",
        title: "Family Arrival",
        description: "Arrive and explore Port Blair beaches.",
        activities: [
          "Airport pickup",
          "Check-in to hotel",
          "Corbyn's Cove Beach",
          "Cellular Jail tour",
          "Light & Sound Show"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Corbyn's Cove", "Cellular Jail"]
      },
      {
        day: "Day 2",
        title: "Havelock Island Fun",
        description: "Ferry to Havelock and beach activities.",
        activities: [
          "Ferry to Havelock",
          "Check-in to resort",
          "Radhanagar Beach visit",
          "Sunset play time",
          "Dinner"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Radhanagar Beach"]
      },
      {
        day: "Day 3",
        title: "Elephant Beach Family Day",
        description: "Safe water activities for the whole family.",
        activities: [
          "Speedboat to Elephant Beach",
          "Snorkeling & Swimming",
          "Glass Bottom Boat",
          "Return to resort",
          "Pool time"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Elephant Beach"]
      },
      {
        day: "Day 4",
        title: "Havelock Leisure / Kalapathar",
        description: "Relax at resort or visit Kalapathar Beach.",
        activities: [
          "Leisure breakfast",
          "Visit Kalapathar Beach",
          "Photography session",
          "Optional kayaking",
          "Resort activities"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Kalapathar Beach"]
      },
      {
        day: "Day 5",
        title: "Ross Island Adventure",
        description: "Explore Ross Island and meet friendly animals.",
        activities: [
          "Ferry to Port Blair",
          "Ross Island visit",
          "Historical ruins tour",
          "Shopping for souvenirs",
          "Farewell dinner"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Ross Island"]
      },
      {
        day: "Day 6",
        title: "Departure",
        description: "Final morning and shopping.",
        activities: [
          "Breakfast",
          "Airport Transfer"
        ],
        meals: ["Breakfast"],
        sightseeing: []
      }
    ]
  },
  highlights: [
    {
      title: "Kid-Safe Activities",
      description: "All activities designed with children's safety in mind",
      image: "/images/packages/family-4n5d/highlight-safe.jpg"
    },
    {
      title: "Beach Fun",
      description: "Sandcastles, games, and shallow water play",
      image: "/images/packages/family-4n5d/highlight-beach.jpg"
    },
    {
      title: "Wildlife Encounters",
      description: "Meet friendly deer and peacocks at Ross Island",
      image: "/images/packages/family-4n5d/highlight-wildlife.jpg"
    }
  ],
  terms: commonTerms,
  paymentPolicy: commonPaymentPolicy,
  tips: commonTips,
  pricingOptions: [
    { days: 4, pricePerPerson: 25999, title: "4 Days Family Express" },
    { days: 5, pricePerPerson: 31999, title: "5 Days Family Fun" },
    { days: 6, pricePerPerson: 38999, title: "6 Days Family Paradise" }
  ],
  hotels: [
    {
      name: "Hotel Sinclairs",
      location: "Port Blair",
      rating: 4,
      image: "/images/packages/family-4n5d/hotel-port-blair.jpg",
      amenities: ["Family Rooms", "Kids Play Area", "Restaurant"],
      description: "Family-friendly hotel",
      starCategory: 4,
      roomTypes: [
        { name: "Family Room", pricePerNight: 2500, description: "Room with extra bed", maxOccupancy: 3 },
        { name: "Family Suite", pricePerNight: 4000, description: "Spacious suite", maxOccupancy: 4 }
      ]
    },
    {
      name: "SeaShell Havelock",
      location: "Havelock",
      rating: 4,
      image: "/images/packages/family-4n5d/hotel-havelock.jpg",
      amenities: ["Beach Access", "Kids Pool", "Restaurant"],
      description: "Family beach resort",
      starCategory: 4,
      roomTypes: [
        { name: "Family Cottage", pricePerNight: 3500, description: "Beach cottage", maxOccupancy: 4 }
      ]
    }
  ],
  supplements: [
    {
      name: "Kids Birthday Cake",
      price: 2000,
      description: "Special birthday celebration",
      availability: ["All Hotels"]
    },
    {
      name: "Babysitting Service",
      price: 1500,
      description: "4 hours professional babysitter",
      availability: ["Hotels"]
    }
  ],
  pickupLocations: ["Port Blair Airport"],
  cancellationPolicy: commonCancellationPolicy,
  slug: "family-fun-4n5d-quick-getaway",
  id: "family-4n5d"
};

