import { Package } from '../packages';
import { commonPaymentPolicy, commonTips, commonCancellationPolicy, commonTerms } from '../commonPolicies';

export const adventureThrill: Package = {
  title: "Andaman Adventure Thrill - 6 Days",
  description: "Action-packed itinerary with scuba diving, sea walk, trekking, and water sports",
  longDescription: "Get your adrenaline pumping with our 6-day Adventure Thrill package. This tour is designed for adventure enthusiasts and includes the best water sports and outdoor activities Andaman has to offer. Dive into the deep blue with scuba diving, walk on the sea bed, kayak through mangroves at night, and trek to hidden beaches. Experience the thrill of the islands while staying in comfortable accommodations.",
  price: 42000,
  duration: "6 days",
  groupSize: "2-8",
  image: "/images/packages/adventure-thrill/hero.jpg",
  features: [
    "Scuba Diving Included",
    "Sea Walk Experience",
    "Night Kayaking",
    "Jungle Trekking",
    "Jet Ski & Parasailing",
    "Adventure Guide"
  ],
  includes: [
    "5 nights accommodation in adventure-friendly resorts",
    "Daily breakfast",
    "All ferry transfers",
    "Scuba Diving at Havelock (Shore Dive)",
    "Sea Walk at Elephant Beach",
    "Night Kayaking in mangroves",
    "Trek to Elephant Beach (Guided)",
    "Parasailing session",
    "Jet Ski ride",
    "All equipment and safety gear",
    "Certified instructors for all activities",
    "GoPro footage for Scuba and Sea Walk",
    "Airport transfers"
  ],
  excludes: [
    "Airfare",
    "Lunch and dinner",
    "Personal expenses",
    "Additional water sports",
    "Travel insurance (Recommended)",
    "Medical expenses"
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival & Corbyn's Cove Jet Ski",
      description: "Arrival in Port Blair. Afternoon Jet Ski and speed boat ride at Corbyn's Cove Beach.",
      activities: [
        "Airport pickup with welcome (12:00 PM - 2:00 PM)",
        "Transfer to adventure resort hotel",
        "Check-in and safety briefing session (12:30 PM)",
        "Lunch break and equipment check (1:00 PM - 2:30 PM)",
        "Transfer to Corbyn's Cove Beach - 7 km (3:00 PM)",
        "Jet Ski session - 15 minutes high-speed thrill (3:30 PM)",
        "  • Safety equipment: Life jacket, helmet",
        "  • Instructor demonstration before ride",
        "  • Age requirement: 18+ or with parent consent",
        "Speed boat ride - coastal viewing (4:00 PM)",
        "Transfer to Cellular Jail (5:15 PM)",
        "Light & Sound Show (6:30 PM - 7:30 PM)",
        "Return to hotel"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Corbyn's Cove", "Cellular Jail"]
    },
    {
      day: "Day 2",
      title: "Havelock & Scuba Diving",
      description: "Ferry to Havelock. Introduction to Scuba Diving and shore dive experience.",
      activities: [
        "Private ferry transfer to Havelock Island (8:00 AM)",
        "Resort check-in and refresh (10:30 AM)",
        "Transfer to Dive Center (11:30 AM)",
        "Scuba Diving training session (12:00 PM)",
        "Shore Dive experience - 45 mins underwater (1:00 PM)",
        "  • Instructor:Student ratio 1:1",
        "  • Equipment: BCD, regulator, mask, fins",
        "  • Depth: 6-8 meters",
        "  • GoPro video and photos included",
        "Lunch at beach cafe (2:30 PM)",
        "Leisure time at Beach No. 3 (4:00 PM)",
        "Dinner and overnight stay"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Dive Site"]
    },
    {
      day: "Day 3",
      title: "Elephant Beach Trek & Sea Walk",
      description: "Guided jungle trek to Elephant Beach followed by Sea Walk experience.",
      activities: [
        "Early morning jungle trek to Elephant Beach (7:00 AM)",
        "  • Duration: 45 mins through forest trail",
        "  • Guide accompaniment required",
        "Arrive at Elephant Beach (8:00 AM)",
        "Sea Walk underwater experience (9:00 AM - 10:30 AM)",
        "  • Helmet diving system",
        "  • Walk on sea bed with diverse marine life",
        "Snorkeling session at the reef (11:00 AM)",
        "Parasailing adventure - aerial view (12:30 PM)",
        "Return boat ride to Havelock jetty (2:00 PM)",
        "Evening at leisure"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Elephant Beach", "Jungle Trail"]
    },
    {
      day: "Day 4",
      title: "Havelock to Neil - Night Kayaking",
      description: "Transfer to Neil Island. Evening Night Kayaking to see bioluminescence (seasonal).",
      activities: [
        "Ferry transfer to Neil Island (9:00 AM)",
        "Hotel check-in at Neil (11:00 AM)",
        "Visit Bharatpur Beach for swimming (2:00 PM)",
        "Sunset at Laxmanpur Beach (5:00 PM)",
        "Night Kayaking preparation (6:30 PM)",
        "Guided Night Kayaking in mangroves (7:00 PM - 8:30 PM)",
        "  • Bioluminescence viewing (seasonal)",
        "  • Safety vest and torch provided",
        "  • Certified kayak instructor",
        "Return to resort for dinner"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Mangroves", "Bharatpur Beach"]
    },
    {
      day: "Day 5",
      title: "Neil to Port Blair - Chidiya Tapu Trek",
      description: "Return to Port Blair. Sunset trek to Munda Pahad at Chidiya Tapu.",
      activities: [
        "Morning ferry to Port Blair (9:00 AM)",
        "Check-in to Port Blair hotel (11:30 AM)",
        "Lunch break (12:30 PM)",
        "Drive to Chidiya Tapu - 25km (3:00 PM)",
        "Start trek to Munda Pahad (3:45 PM)",
        "  • Difficulty: Easy to Moderate",
        "  • Duration: 40 mins one way",
        "Reaching the Black Mountain cliff (4:30 PM)",
        "Sunset viewing from the top (5:15 PM)",
        "Return trek before dark (5:45 PM)",
        "Drive back to hotel"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Chidiya Tapu", "Munda Pahad"]
    },
    {
      day: "Day 6",
      title: "Departure",
      description: "Transfer to airport for departure.",
      activities: [
        "Breakfast at hotel (8:00 AM)",
        "Checkout formalities (9:00 AM)",
        "Transfer to airport (2 hours before flight)",
        "Departure with adventure memories"
      ],
      meals: ["Breakfast"],
      sightseeing: []
    }
  ],
  itineraries: {
    5: [
      {
        day: "Day 1",
        title: "Arrival & Corbyn's Cove Jet Ski",
        description: "Arrival in Port Blair. Afternoon Jet Ski and speed boat ride at Corbyn's Cove Beach.",
        activities: [
          "Airport pickup with welcome (12:00 PM - 2:00 PM)",
          "Transfer to adventure resort hotel",
          "Check-in and safety briefing session (12:30 PM)",
          "Lunch break and equipment check (1:00 PM - 2:30 PM)",
          "Transfer to Corbyn's Cove Beach - 7 km (3:00 PM)",
          "Jet Ski session - 15 minutes high-speed thrill (3:30 PM)",
          "Speed boat ride - coastal viewing (4:00 PM)",
          "Transfer to Cellular Jail (5:15 PM)",
          "Light & Sound Show (6:30 PM - 7:30 PM)",
          "Return to hotel"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Corbyn's Cove", "Cellular Jail"]
      },
      {
        day: "Day 2",
        title: "Havelock & Scuba Diving",
        description: "Ferry to Havelock. Introduction to Scuba Diving and shore dive experience.",
        activities: [
          "Private ferry transfer to Havelock Island (8:00 AM)",
          "Resort check-in and refresh (10:30 AM)",
          "Transfer to Dive Center (11:30 AM)",
          "Scuba Diving training session (12:00 PM)",
          "Shore Dive experience - 45 mins underwater (1:00 PM)",
          "  • Instructor:Student ratio 1:1",
          "  • Equipment included",
          "Lunch at beach cafe (2:30 PM)",
          "Evening leisure"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Dive Site"]
      },
      {
        day: "Day 3",
        title: "Elephant Beach Trek & Sea Walk",
        description: "Guided jungle trek to Elephant Beach followed by Sea Walk experience.",
        activities: [
          "Early morning jungle trek to Elephant Beach (7:00 AM)",
          "Sea Walk underwater experience (9:00 AM - 10:30 AM)",
          "  • Helmet diving system",
          "Snorkeling session at the reef (11:00 AM)",
          "Parasailing adventure - aerial view (12:30 PM)",
          "Return boat ride to Havelock jetty (2:00 PM)"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Elephant Beach", "Jungle Trail"]
      },
      {
        day: "Day 4",
        title: "Havelock to Port Blair & Trek",
        description: "Return to Port Blair. Sunset trek at Chidiya Tapu.",
        activities: [
          "Ferry to Port Blair (9:00 AM)",
          "Check-in to hotel (11:30 AM)",
          "Drive to Chidiya Tapu (3:00 PM)",
          "Trek to Munda Pahad (3:45 PM)",
          "Sunset view from cliff",
          "Return to hotel"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Chidiya Tapu"]
      },
      {
        day: "Day 5",
        title: "Departure",
        description: "Transfer to airport.",
        activities: [
          "Breakfast at hotel",
          "Checkout formalities",
          "Transfer to airport (2 hours before flight)"
        ],
        meals: ["Breakfast"],
        sightseeing: []
      }
    ],
    6: [
      {
        day: "Day 1",
        title: "Arrival & Corbyn's Cove Jet Ski",
        description: "Arrival in Port Blair. Afternoon Jet Ski and speed boat ride at Corbyn's Cove Beach.",
        activities: [
          "Airport pickup with welcome (12:00 PM - 2:00 PM)",
          "Transfer to adventure resort hotel",
          "Check-in and safety briefing session (12:30 PM)",
          "Lunch break and equipment check (1:00 PM - 2:30 PM)",
          "Transfer to Corbyn's Cove Beach - 7 km (3:00 PM)",
          "Jet Ski session - 15 minutes high-speed thrill (3:30 PM)",
          "Speed boat ride - coastal viewing (4:00 PM)",
          "Transfer to Cellular Jail (5:15 PM)",
          "Light & Sound Show (6:30 PM - 7:30 PM)",
          "Return to hotel"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Corbyn's Cove", "Cellular Jail"]
      },
      {
        day: "Day 2",
        title: "Havelock & Scuba Diving",
        description: "Ferry to Havelock. Introduction to Scuba Diving and shore dive experience.",
        activities: [
          "Private ferry transfer to Havelock Island (8:00 AM)",
          "Resort check-in and refresh (10:30 AM)",
          "Transfer to Dive Center (11:30 AM)",
          "Scuba Diving training session (12:00 PM)",
          "Shore Dive experience - 45 mins underwater (1:00 PM)",
          "  • Instructor:Student ratio 1:1",
          "  • Equipment included",
          "Lunch at beach cafe (2:30 PM)",
          "Evening leisure"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Dive Site"]
      },
      {
        day: "Day 3",
        title: "Elephant Beach Trek & Sea Walk",
        description: "Guided jungle trek to Elephant Beach followed by Sea Walk experience.",
        activities: [
          "Early morning jungle trek to Elephant Beach (7:00 AM)",
          "Sea Walk underwater experience (9:00 AM - 10:30 AM)",
          "  • Helmet diving system",
          "Snorkeling session at the reef (11:00 AM)",
          "Parasailing adventure - aerial view (12:30 PM)",
          "Return boat ride to Havelock jetty (2:00 PM)"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Elephant Beach", "Jungle Trail"]
      },
      {
        day: "Day 4",
        title: "Havelock to Neil - Night Kayaking",
        description: "Transfer to Neil Island. Evening Night Kayaking to see bioluminescence (seasonal).",
        activities: [
          "Ferry transfer to Neil Island (9:00 AM)",
          "Hotel check-in at Neil (11:00 AM)",
          "Visit Bharatpur Beach for swimming (2:00 PM)",
          "Sunset at Laxmanpur Beach (5:00 PM)",
          "Night Kayaking preparation (6:30 PM)",
          "Guided Night Kayaking in mangroves (7:00 PM - 8:30 PM)"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Mangroves", "Bharatpur Beach"]
      },
      {
        day: "Day 5",
        title: "Neil to Port Blair - Chidiya Tapu Trek",
        description: "Return to Port Blair. Sunset trek to Munda Pahad at Chidiya Tapu.",
        activities: [
          "Morning ferry to Port Blair (9:00 AM)",
          "Check-in to Port Blair hotel (11:30 AM)",
          "Drive to Chidiya Tapu (3:00 PM)",
          "Trek to Munda Pahad (3:45 PM)",
          "Sunset viewing from the top (5:15 PM)",
          "Return to hotel"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Chidiya Tapu", "Munda Pahad"]
      },
      {
        day: "Day 6",
        title: "Departure",
        description: "Transfer to airport for departure.",
        activities: [
          "Breakfast at hotel (8:00 AM)",
          "Checkout formalities (9:00 AM)",
          "Transfer to airport (2 hours before flight)"
        ],
        meals: ["Breakfast"],
        sightseeing: []
      }
    ],
    7: [
      {
        day: "Day 1",
        title: "Arrival & Corbyn's Cove Jet Ski",
        description: "Arrival in Port Blair. Afternoon Jet Ski and speed boat ride at Corbyn's Cove Beach.",
        activities: [
          "Airport pickup with welcome (12:00 PM - 2:00 PM)",
          "Transfer to adventure resort hotel",
          "Check-in and safety briefing session (12:30 PM)",
          "Lunch break and equipment check (1:00 PM - 2:30 PM)",
          "Transfer to Corbyn's Cove Beach - 7 km (3:00 PM)",
          "Jet Ski session - 15 minutes high-speed thrill (3:30 PM)",
          "Speed boat ride - coastal viewing (4:00 PM)",
          "Transfer to Cellular Jail (5:15 PM)",
          "Light & Sound Show (6:30 PM - 7:30 PM)",
          "Return to hotel"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Corbyn's Cove", "Cellular Jail"]
      },
      {
        day: "Day 2",
        title: "Havelock & Scuba Diving",
        description: "Ferry to Havelock. Introduction to Scuba Diving and shore dive experience.",
        activities: [
          "Private ferry transfer to Havelock Island (8:00 AM)",
          "Resort check-in and refresh (10:30 AM)",
          "Transfer to Dive Center (11:30 AM)",
          "Scuba Diving training session (12:00 PM)",
          "Shore Dive experience - 45 mins underwater (1:00 PM)",
          "  • Instructor:Student ratio 1:1",
          "  • Equipment included",
          "Lunch at beach cafe (2:30 PM)",
          "Evening leisure"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Dive Site"]
      },
      {
        day: "Day 3",
        title: "Elephant Beach Trek & Sea Walk",
        description: "Guided jungle trek to Elephant Beach followed by Sea Walk experience.",
        activities: [
          "Early morning jungle trek to Elephant Beach (7:00 AM)",
          "Sea Walk underwater experience (9:00 AM - 10:30 AM)",
          "  • Helmet diving system",
          "Snorkeling session at the reef (11:00 AM)",
          "Parasailing adventure - aerial view (12:30 PM)",
          "Return boat ride to Havelock jetty (2:00 PM)"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Elephant Beach", "Jungle Trail"]
      },
      {
        day: "Day 4",
        title: "Havelock Leisure / Game Fishing",
        description: "Day at leisure or optional Game Fishing.",
        activities: [
          "Breakfast at resort (8:00 AM)",
          "Day at leisure to explore Havelock independently",
          "Optional High-Speed Game Fishing (Extra cost)",
          "  • 4-hour deep sea trip",
          "  • Target: GT, Tuna, Barracuda",
          "  • Professional angling equipment",
          "Lunch at local seafood joint (1:00 PM)",
          "Evening walk at Beach No. 5 (5:00 PM)"
        ],
        meals: ["Breakfast"],
        sightseeing: []
      },
      {
        day: "Day 5",
        title: "Havelock to Neil - Night Kayaking",
        description: "Transfer to Neil Island. Evening Night Kayaking to see bioluminescence (seasonal).",
        activities: [
          "Ferry transfer to Neil Island (9:00 AM)",
          "Hotel check-in at Neil (11:00 AM)",
          "Visit Bharatpur Beach for swimming (2:00 PM)",
          "Sunset at Laxmanpur Beach (5:00 PM)",
          "Night Kayaking preparation (6:30 PM)",
          "Guided Night Kayaking in mangroves (7:00 PM - 8:30 PM)"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Mangroves", "Bharatpur Beach"]
      },
      {
        day: "Day 6",
        title: "Neil to Port Blair - Chidiya Tapu Trek",
        description: "Return to Port Blair. Sunset trek to Munda Pahad at Chidiya Tapu.",
        activities: [
          "Morning ferry to Port Blair (9:00 AM)",
          "Check-in to Port Blair hotel (11:30 AM)",
          "Drive to Chidiya Tapu (3:00 PM)",
          "Trek to Munda Pahad (3:45 PM)",
          "Sunset viewing from the top (5:15 PM)",
          "Return to hotel"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Chidiya Tapu", "Munda Pahad"]
      },
      {
        day: "Day 7",
        title: "Departure",
        description: "Transfer to airport for departure.",
        activities: [
          "Breakfast at hotel (8:00 AM)",
          "Checkout formalities (9:00 AM)",
          "Transfer to airport (2 hours before flight)",
          "Departure with adventure memories"
        ],
        meals: ["Breakfast"],
        sightseeing: []
      }
    ]
  },
  highlights: [
    {
      title: "Scuba Diving",
      description: "Explore the vibrant coral reefs with certified instructors",
      image: "/images/packages/adventure-thrill/highlight-scuba.jpg"
    },
    {
      title: "Sea Walk",
      description: "Walk on the ocean floor surrounded by fish",
      image: "/images/packages/adventure-thrill/highlight-seawalk.jpg"
    },
    {
      title: "Night Kayaking",
      description: "Paddle through mangroves under the stars",
      image: "/images/packages/adventure-thrill/highlight-kayak.jpg"
    }
  ],
  terms: commonTerms,
  paymentPolicy: commonPaymentPolicy,
  tips: commonTips,
  pricingOptions: [
    { days: 5, pricePerPerson: 44999, title: "5 Days Adventure Express" },
    { days: 6, pricePerPerson: 51999, title: "6 Days Adventure Thrill" },
    { days: 7, pricePerPerson: 58999, title: "7 Days Ultimate Thrill" }
  ],
  hotels: [
    {
      name: "Symphony Palms",
      location: "Havelock",
      rating: 4,
      image: "/images/packages/adventure-thrill/hotel-havelock.jpg",
      amenities: ["Dive Center", "Beach Bar"],
      description: "Adventure resort",
      starCategory: 4,
      roomTypes: [
        { name: "Cottage", pricePerNight: 5500, description: "Wooden cottage", maxOccupancy: 2 }
      ]
    }
  ],
  supplements: [
    {
      name: "Advanced Open Water Course",
      price: 25000,
      description: "PADI certification course upgrade",
      availability: ["Havelock"]
    },
    {
      name: "Game Fishing",
      price: 30000,
      description: "Half-day game fishing trip",
      availability: ["Havelock", "Port Blair"]
    }
  ],
  pickupLocations: ["Port Blair Airport"],
  cancellationPolicy: commonCancellationPolicy,
  slug: "andaman-adventure-thrill-6-days"
};

