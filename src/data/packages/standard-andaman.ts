import { Package } from '../packages';
import { commonPaymentPolicy, commonTips, commonCancellationPolicy, commonTerms } from '../commonPolicies';

export const standardAndaman: Package = {
  title: "Standard Andaman Package - 5N/6D",
  description: "Budget-friendly complete Andaman tour covering all major attractions",
  longDescription: "Our most popular standard package offers the best value for money covering all major islands and attractions of Andaman. This package includes Port Blair, Havelock, and Neil Island with comfortable 3-star accommodations, essential water activities, and all major sightseeing. Perfect for travelers looking for a complete Andaman experience without luxury frills.",
  price: 28500,
  duration: "6 days",
  groupSize: "2-6",
  image: "/images/packages/standard-andaman/hero.jpg",
  features: [
    "Budget-friendly",
    "All major islands covered",
    "3-star comfortable hotels",
    "Essential water activities",
    "Complete sightseeing"
  ],
  includes: [
    "5 nights accommodation in 3-star hotels",
    "Daily breakfast",
    "All ferry transfers (Govt Ferry/Green Ocean)",
    "Elephant Beach speedboat",
    "Complimentary snorkeling",
    "All sightseeing by shared vehicle",
    "Cellular Jail entry and show",
    "All permits and entry tickets",
    "Airport transfers"
  ],
  excludes: [
    "Airfare",
    "Lunch and dinner",
    "Scuba diving",
    "Premium water sports",
    "Personal expenses",
    "Travel insurance"
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival Port Blair | History & Beaches",
      description: "Arrive at Port Blair and begin your Andaman adventure. Visit the pristine Corbyn's Cove Beach and explore the historic Cellular Jail with the captivating Light & Sound Show.",
      activities: [
        "Airport pickup with welcome (typical arrival 12:00 PM - 2:00 PM)",
        "Transfer to hotel in shared vehicle",
        "Hotel check-in and lunch break (12:30 PM - 2:00 PM)",
        "Visit Corbyn's Cove Beach - 7 km from city (3:00 PM)",
        "Beach activities: swimming, beach volleyball, photography",
        "Optional: Water sports - jet ski, banana boat (pay directly)",
        "Transfer to Cellular Jail (5:00 PM)",
        "Guided tour of Cellular Jail history (5:00 PM - 6:00 PM)",
        "Light & Sound Show - English/Hindi (6:00 PM - 7:00 PM)",
        "Return to hotel",
        "Overnight at Port Blair"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Corbyn's Cove Beach", "Cellular Jail", "Light & Sound Show"]
    },
    {
      day: "Day 2",
      title: "Port Blair → Havelock Island | Radhanagar Beach",
      description: "Take the government ferry to beautiful Havelock Island. Check into your beach resort and spend the afternoon at the world-famous Radhanagar Beach, consistently ranked among Asia's best beaches.",
      activities: [
        "Early breakfast at hotel (6:00 AM - 7:00 AM)",
        "Transfer to Phoenix Bay Jetty (7:15 AM)",
        "Board government ferry to Havelock (8:00 AM departure)",
        "Scenic 2-hour ferry ride - enjoy ocean views, possible dolphin sightings",
        "Arrive Havelock Island (10:00 AM)",
        "Transfer to beach resort",
        "Hotel check-in and lunch break (11:00 AM - 1:00 PM)",
        "Rest and freshen up",
        "Visit Radhanagar Beach (Beach No. 7) - 12 km from resort (3:00 PM)",
        "Swim in crystal-clear waters - shallow and safe",
        "Beach walk on pristine white sand",
        "Watch spectacular sunset (5:30 PM)",
        "Beach photography and relaxation",
        "Return to resort (6:30 PM)",
        "Overnight at Havelock"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Radhanagar Beach (Beach No. 7)", "Havelock Island"]
    },
    {
      day: "Day 3",
      title: "Elephant Beach Water Activities",
      description: "Experience the marine paradise of Elephant Beach. Enjoy complimentary snorkeling among vibrant coral reefs and explore optional water sports activities.",
      activities: [
        "Breakfast at resort (7:00 AM)",
        "Transfer to Elephant Beach departure point (8:00 AM)",
        "Speedboat ride to Elephant Beach - 20 minutes (8:30 AM)",
        "Arrive at pristine Elephant Beach (9:00 AM)",
        "Complimentary snorkeling with life jackets and equipment",
        "Explore vibrant coral reefs and tropical fish",
        "Glass Bottom Boat ride - view marine life without getting wet (₹500)",
        "Optional water sports (pay on-site):",
        "  • Banana Boat Ride - ₹500 per person",
        "  • Jet Ski - ₹1,000 for 10 minutes",
        "  • Sea Walk - ₹3,500 per person",
        "  • Scuba Diving - ₹5,500 per person (if available)",
        "Beach relaxation and photography",
        "Return speedboat to Havelock (1:30 PM)",
        "Lunch break at resort (2:00 PM - 3:00 PM)",
        "Evening at leisure - explore local market or beach",
        "Overnight at Havelock"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Elephant Beach", "Coral Reefs", "Marine Life"]
    },
    {
      day: "Day 4",
      title: "Havelock → Neil Island | Beach Exploration",
      description: "Ferry to the tranquil Neil Island, known for its pristine beaches. Visit Bharatpur Beach for water activities and Laxmanpur Beach for a beautiful sunset.",
      activities: [
        "Breakfast and checkout from Havelock (7:00 AM)",
        "Transfer to jetty (8:30 AM)",
        "Ferry to Neil Island (9:00 AM - 10:00 AM)",
        "Arrive Neil Island jetty",
        "Transfer to hotel and check-in (10:30 AM)",
        "Visit Bharatpur Beach (11:30 AM)",
        "Glass bottom boat ride at Bharatpur - view coral formations",
        "Swimming and beach activities",
        "Lunch break (1:00 PM - 2:30 PM)",
        "Return to hotel for rest",
        "Visit Laxmanpur Beach for sunset (4:00 PM)",
        "Famous sunset point and natural rock formations",
        "Beach walk during low tide (if timing permits)",
        "Photography at sunset (5:30 PM)",
        "Return to hotel (6:30 PM)",
        "Overnight at Neil Island"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Bharatpur Beach", "Laxmanpur Beach", "Sunset Point"]
    },
    {
      day: "Day 5",
      title: "Neil Island → Port Blair | Natural Bridge & Ross Island",
      description: "Visit the unique Natural Rock Bridge early morning. Return to Port Blair and explore historic Ross Island with its colonial ruins. Evening shopping at Aberdeen Bazaar.",
      activities: [
        "Early morning visit to Natural Bridge/Howrah Bridge (6:00 AM)",
        "Best seen during low tide - natural coral formation",
        "Photography and beach walk",
        "Return to hotel for breakfast (7:30 AM)",
        "Hotel checkout (9:00 AM)",
        "Transfer to jetty and ferry to Port Blair (10:00 AM - 11:30 AM)",
        "Arrive Port Blair, hotel check-in and lunch (12:00 PM - 2:00 PM)",
        "Transfer to Water Sports Complex jetty (2:30 PM)",
        "Boat to Ross Island - 15 minutes (3:00 PM)",
        "Explore Ross Island 'Paris of the East' (3:15 PM - 5:15 PM):",
        "  • Walk through British colonial ruins",
        "  • Visit old church, cemetery, and buildings",
        "  • See friendly deer and peacocks",
        "  • Japanese bunkers from WWII",
        "Return to Port Blair (5:30 PM)",
        "Shopping at Aberdeen Bazaar - souvenirs, pearls, shells (6:00 PM)",
        "Return to hotel",
        "Overnight at Port Blair"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Natural Bridge", "Ross Island", "Aberdeen Bazaar"]
    },
    {
      day: "Day 6",
      title: "Departure | Fond Farewell",
      description: "Final morning in Port Blair. Last-minute shopping if time permits before your departure carrying wonderful memories of the Andaman Islands.",
      activities: [
        "Leisurely breakfast at hotel (7:00 AM - 9:00 AM)",
        "Last-minute shopping at Sagarika Emporium (if time permits)",
        "Hotel checkout (as per flight timing)",
        "Transfer to Veer Savarkar Airport",
        "Check-in assistance",
        "Departure with sweet memories of Andaman"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Sagarika Emporium (Optional)"]
    }
  ],
  itineraries: {
    5: [
      {
        day: "Day 1",
        title: "Arrival Port Blair | History & Beaches",
        description: "Arrive at Port Blair and check into your budget-friendly hotel. Visit Corbyn's Cove Beach and Cellular Jail.",
        activities: [
          "Airport pickup by shared vehicle",
          "Check-in to standard hotel",
          "Visit Corbyn's Cove Beach",
          "Beach activities and swimming",
          "Cellular Jail visit",
          "Light & Sound Show in evening"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Corbyn's Cove", "Cellular Jail"]
      },
      {
        day: "Day 2",
        title: "Port Blair → Havelock | Radhanagar Beach",
        description: "Ferry to Havelock. Visit Radhanagar Beach for sunset.",
        activities: [
          "Transfer to jetty",
          "Government Ferry to Havelock (2.5 hrs)",
          "Check-in to standard resort",
          "Visit Radhanagar Beach (Beach No. 7)",
          "Sunset viewing",
          "Return to resort"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Radhanagar Beach"]
      },
      {
        day: "Day 3",
        title: "Elephant Beach Water Activities",
        description: "Speedboat to Elephant Beach for complimentary snorkeling.",
        activities: [
          "Speedboat to Elephant Beach",
          "Complimentary Snorkeling",
          "Relax on the beach",
          "Optional water sports (pay on spot)",
          "Return to resort",
          "Evening at leisure"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Elephant Beach"]
      },
      {
        day: "Day 4",
        title: "Havelock → Port Blair | Ross Island",
        description: "Return to Port Blair and visit historical Ross Island.",
        activities: [
          "Ferry to Port Blair",
          "Check-in to hotel",
          "Boat to Ross Island",
          "Explore colonial ruins and deer park",
          "Return to Port Blair",
          "Local market visit"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Ross Island"]
      },
      {
        day: "Day 5",
        title: "Departure",
        description: "Transfer to airport for departure.",
        activities: [
          "Breakfast",
          "Checkout",
          "Airport transfer"
        ],
        meals: ["Breakfast"],
        sightseeing: []
      }
    ],
    6: [
      {
        day: "Day 1",
        title: "Arrival Port Blair | History & Beaches",
        description: "Arrive at Port Blair and begin your Andaman adventure. Visit the pristine Corbyn's Cove Beach and explore the historic Cellular Jail with the captivating Light & Sound Show.",
        activities: [
          "Airport pickup with welcome (typical arrival 12:00 PM - 2:00 PM)",
          "Transfer to hotel in shared vehicle",
          "Hotel check-in and lunch break",
          "Visit Corbyn's Cove Beach",
          "Transfer to Cellular Jail (5:00 PM)",
          "Guided tour of Cellular Jail history",
          "Light & Sound Show",
          "Return to hotel"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Corbyn's Cove Beach", "Cellular Jail", "Light & Sound Show"]
      },
      {
        day: "Day 2",
        title: "Port Blair → Havelock Island | Radhanagar Beach",
        description: "Take the government ferry to beautiful Havelock Island. Check into your beach resort and spend the afternoon at the world-famous Radhanagar Beach.",
        activities: [
          "Early breakfast at hotel",
          "Transfer to Phoenix Bay Jetty",
          "Board government ferry to Havelock",
          "Arrive Havelock Island and transfer to resort",
          "Visit Radhanagar Beach (Beach No. 7)",
          "Swim in crystal-clear waters",
          "Watch spectacular sunset",
          "Return to resort"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Radhanagar Beach (Beach No. 7)", "Havelock Island"]
      },
      {
        day: "Day 3",
        title: "Elephant Beach Water Activities",
        description: "Experience the marine paradise of Elephant Beach. Enjoy complimentary snorkeling among vibrant coral reefs and explore optional water sports activities.",
        activities: [
          "Transfer to Elephant Beach departure point",
          "Speedboat ride to Elephant Beach",
          "Complimentary snorkeling with life jackets",
          "Optional water sports (pay on-site)",
          "Return speedboat to Havelock",
          "Evening at leisure - explore local market"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Elephant Beach", "Coral Reefs"]
      },
      {
        day: "Day 4",
        title: "Havelock → Neil Island | Beach Exploration",
        description: "Ferry to the tranquil Neil Island. Visit Bharatpur Beach for water activities and Laxmanpur Beach for a beautiful sunset.",
        activities: [
          "Ferry to Neil Island",
          "Arrive Neil Island jetty and transfer to hotel",
          "Visit Bharatpur Beach",
          "Swimming and beach activities",
          "Visit Laxmanpur Beach for sunset",
          "Natural rock formations viewing"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Bharatpur Beach", "Laxmanpur Beach"]
      },
      {
        day: "Day 5",
        title: "Neil Island → Port Blair | Natural Bridge",
        description: "Visit the unique Natural Rock Bridge early morning. Return to Port Blair and explore historic Ross Island or Chidiya Tapu.",
        activities: [
          "Early morning visit to Natural Bridge",
          "Ferry to Port Blair",
          "Arrive Port Blair and check-in",
          "Boat to Ross Island OR Chidiya Tapu Sunset (based on timing)",
          "Shopping at Aberdeen Bazaar",
          "Return to hotel"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Natural Bridge", "Ross Island", "Aberdeen Bazaar"]
      },
      {
        day: "Day 6",
        title: "Departure | Fond Farewell",
        description: "Final morning in Port Blair. Departure with wonderful memories.",
        activities: [
          "Leisurely breakfast at hotel",
          "Hotel checkout",
          "Transfer to Veer Savarkar Airport",
          "Departure"
        ],
        meals: ["Breakfast"],
        sightseeing: []
      }
    ],
    7: [
      {
        day: "Day 1",
        title: "Arrival Port Blair",
        description: "Arrive and explore Port Blair's main attractions.",
        activities: [
          "Airport pickup",
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
        title: "Port Blair → Havelock",
        description: "Ferry to Havelock and visit Radhanagar Beach.",
        activities: [
          "Ferry transfer to Havelock",
          "Check-in to resort",
          "Radhanagar Beach sunset",
          "Swimming and relaxation"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Radhanagar Beach"]
      },
      {
        day: "Day 3",
        title: "Elephant Beach Day",
        description: "Water activities at Elephant Beach.",
        activities: [
          "Speedboat to Elephant Beach",
          "Complimentary Snorkeling",
          "Optional water sports",
          "Return to resort"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Elephant Beach"]
      },
      {
        day: "Day 4",
        title: "Havelock → Neil Island",
        description: "Transfer to Neil Island and beach exploration.",
        activities: [
          "Ferry to Neil Island",
          "Check-in to Neil hotel",
          "Bharatpur Beach visit",
          "Laxmanpur Beach sunset"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Bharatpur Beach", "Laxmanpur Beach"]
      },
      {
        day: "Day 5",
        title: "Neil Island Leisure",
        description: "Visit Natural Bridge and enjoy leisure time on the island.",
        activities: [
          "Natural Bridge visit (low tide)",
          "Leisure time at beach",
          "Optional cycling or scooter ride",
          "Relax at resort"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Natural Bridge"]
      },
      {
        day: "Day 6",
        title: "Neil → Port Blair",
        description: "Return to Port Blair and visit Ross Island.",
        activities: [
          "Ferry to Port Blair",
          "Check-in to Port Blair hotel",
          "Ross Island boat trip",
          "Shopping at Aberdeen Bazaar"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Ross Island"]
      },
      {
        day: "Day 7",
        title: "Departure",
        description: "Final morning and departure.",
        activities: [
          "Breakfast",
          "Checkout",
          "Airport transfer"
        ],
        meals: ["Breakfast"],
        sightseeing: []
      }
    ]
  },
  highlights: [
    {
      title: "Three Islands Covered",
      description: "Port Blair, Havelock, and Neil - complete tour",
      image: "/images/packages/standard-andaman/highlight-islands.jpg"
    },
    {
      title: "Water Activities",
      description: "Snorkeling and optional water sports at Elephant Beach",
      image: "/images/packages/standard-andaman/highlight-water.jpg"
    },
    {
      title: "Best Value Package",
      description: "Maximum experiences at budget-friendly price",
      image: "/images/packages/standard-andaman/highlight-value.jpg"
    }
  ],
  terms: commonTerms,
  paymentPolicy: commonPaymentPolicy,
  tips: commonTips,
  pricingOptions: [
    { days: 5, pricePerPerson: 27999, title: "5 Days Standard Express" },
    { days: 6, pricePerPerson: 32999, title: "6 Days Standard Package" },
    { days: 7, pricePerPerson: 38999, title: "7 Days Standard Extended" }
  ],
  hotels: [
    {
      name: "Hotel Haywizz",
      location: "Port Blair",
      rating: 3,
      image: "/images/packages/standard-andaman/hotel-port-blair.jpg",
      amenities: ["WiFi", "Restaurant", "AC"],
      description: "Budget hotel in Port Blair",
      starCategory: 3,
      roomTypes: [
        { name: "Standard", pricePerNight: 2500, description: "Basic AC room", maxOccupancy: 2 },
        { name: "Deluxe", pricePerNight: 3200, description: "Better room with view", maxOccupancy: 3 }
      ]
    },
    {
      name: "Silver Sand Beach Resort",
      location: "Havelock",
      rating: 3,
      image: "/images/packages/standard-andaman/hotel-havelock.jpg",
      amenities: ["Beach Access", "Restaurant"],
      description: "Beach resort on Havelock",
      starCategory: 3,
      roomTypes: [
        { name: "Standard", pricePerNight: 3500, description: "Standard beach room", maxOccupancy: 2 }
      ]
    },
    {
      name: "Pearl Park Beach Resort",
      location: "Neil Island",
      rating: 3,
      image: "/images/packages/standard-andaman/hotel-neil.jpg",
      amenities: ["Beach View", "Restaurant"],
      description: "Simple resort on Neil",
      starCategory: 3,
      roomTypes: [
        { name: "Standard", pricePerNight: 2800, description: "Basic beach room", maxOccupancy: 2 }
      ]
    }
  ],
  supplements: [
    {
      name: "Scuba Diving",
      price: 3500,
      description: "Add scuba diving experience",
      availability: ["Havelock"]
    },
    {
      name: "Jetski Ride",
      price: 1500,
      description: "15-minute jetski ride",
      availability: ["Elephant Beach"]
    }
  ],
  pickupLocations: ["Port Blair Airport"],
  cancellationPolicy: commonCancellationPolicy,
  slug: "standard-andaman-package-5n6d"
};

