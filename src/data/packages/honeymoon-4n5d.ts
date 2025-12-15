import { Package } from '../packages';
import { commonPaymentPolicy, commonTips, commonCancellationPolicy, commonTerms } from '../commonPolicies';

export const honeymoon4n5d: Package = {
  title: "4N/5D Andaman Honeymoon Special",
  description: "Quick romantic 4 nights 5 days getaway perfect for couples with limited time",
  longDescription: "Experience the essence of Andaman in this compact 5-day honeymoon package. Designed for couples who want to experience the best of the islands in a shorter timeframe. Visit the key attractions of Port Blair and Havelock, enjoy romantic beaches, and create beautiful memories together without rushing.",
  price: 28000,
  duration: "5 days",
  groupSize: "2",
  image: "/images/packages/honeymoon-4n5d/hero.jpg",
  features: [
    "Compact 5-day itinerary",
    "Havelock Island included",
    "Romantic beaches",
    "Snorkeling at Elephant Beach",
    "Budget-friendly option"
  ],
  includes: [
    "4 nights accommodation (Port Blair & Havelock)",
    "Daily breakfast",
    "All ferry transfers between islands",
    "Elephant Beach speedboat with complimentary snorkeling",
    "Radhanagar Beach visit",
    "All sightseeing by private vehicle",
    "Cellular Jail Light & Sound Show",
    "Entry tickets to all attractions",
    "Airport pickup and drop"
  ],
  excludes: [
    "Airfare to/from Port Blair",
    "Lunch and dinner",
    "Scuba diving (can be added)",
    "Optional water sports",
    "Personal expenses",
    "Travel insurance"
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival – Port Blair | City Tour & Cellular Jail",
      description: "Welcome to the Andaman Islands! Upon arrival at Veer Savarkar Airport, you'll be greeted and transferred to your hotel. After check-in and freshening up, begin your romantic journey with a visit to the historic Cellular Jail, followed by the mesmerizing Sound & Light Show.",
      activities: [
        "Arrival at Port Blair Airport (typically 12:00 PM - 2:00 PM)",
        "Meet & Greet by our representative with flower garland",
        "Transfer to hotel and check-in",
        "Welcome drinks and refreshment",
        "Rest and freshen up",
        "Visit Corbyn's Cove Beach - Pristine beach for couples (4:00 PM)",
        "Enjoy beach walk and water sports (optional)",
        "Visit Cellular Jail National Memorial (5:30 PM)",
        "Attend Light & Sound Show depicting freedom struggle (6:30 PM - 7:30 PM)",
        "Return to hotel",
        "Overnight stay at Port Blair hotel"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Corbyn's Cove Beach", "Cellular Jail", "Light & Sound Show"]
    },
    {
      day: "Day 2",
      title: "Port Blair → Havelock Island | Radhanagar Beach Sunset",
      description: "After breakfast, take a scenic ferry ride to the breathtaking Havelock Island. Check into your romantic beach resort and spend the afternoon at the world-famous Radhanagar Beach, ranked among Asia's best beaches. Enjoy a magical sunset together with complimentary couple photoshoot.",
      activities: [
        "Early breakfast at hotel (6:30 AM)",
        "Transfer to Phoenix Bay Jetty (7:30 AM)",
        "Board cruise to Havelock Island - Makruzz/Nautika (8:00 AM - 10:00 AM)",
        "Arrival at Havelock and transfer to beach resort",
        "Check-in to romantic sea-facing room",
        "Welcome drink and honeymoon setup (flower bed decoration)",
        "Lunch break and rest at resort (12:00 PM - 3:00 PM)",
        "Visit Radhanagar Beach (Beach No. 7) - Asia's Best Beach (3:30 PM)",
        "Romantic beach walk on pristine white sands",
        "Complimentary couple photoshoot at sunset (5:30 PM)",
        "Beach activities - volleyball, frisbee",
        "Return to resort",
        "Overnight stay at Havelock resort"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Radhanagar Beach", "Havelock Island"]
    },
    {
      day: "Day 3",
      title: "Elephant Beach Adventure | Water Sports & Snorkeling",
      description: "Experience the thrill of Elephant Beach! Take a speedboat ride through the turquoise waters to this paradise beach. Enjoy complimentary snorkeling among vibrant coral reefs and colorful fish. Optional water sports available for adventure-loving couples.",
      activities: [
        "Breakfast at resort (7:00 AM)",
        "Transfer to jetty for Elephant Beach trip (8:00 AM)",
        "Speedboat ride to Elephant Beach (20 minutes scenic ride)",
        "Arrive at Elephant Beach - pristine coral beach (9:00 AM)",
        "Snorkeling with life jackets - Explore vibrant coral reefs and tropical fish (complimentary)",
        "Glass Bottom Boat Ride - View underwater marine life without getting wet",
        "Optional Water Sports:",
        "  • Sea Walk - Walk underwater with oxygen helmet (₹3500)",
        "  • Jet Ski - High-speed water adventure (₹1000)",
        "  • Banana Boat Ride - Fun group activity (₹500)",
        "  • Parasailing - Aerial view of the ocean (₹3500)",
        "  • Scuba Diving - Professional dive with instructor (₹3500)",
        "Beach relaxation and swimming",
        "Return to resort (2:00 PM)",
        "Evening at leisure - enjoy resort facilities",
        "Overnight stay at Havelock"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Elephant Beach", "Coral Reefs", "Marine Life"]
    },
    {
      day: "Day 4",
      title: "Havelock → Port Blair | Ross Island Exploration",
      description: "After a leisurely breakfast, bid farewell to Havelock and take the ferry back to Port Blair. Upon arrival, visit the historic Ross Island, the former administrative headquarters of the British. Explore colonial ruins, meet friendly deer, and enjoy the scenic beauty. Evening free for shopping.",
      activities: [
        "Breakfast at resort (7:00 AM)",
        "Check-out and transfer to jetty (9:00 AM)",
        "Board cruise to Port Blair (10:00 AM - 12:00 PM)",
        "Arrival at Port Blair and transfer to hotel",
        "Check-in and lunch break (12:30 PM - 2:00 PM)",
        "Proceed to Ross Island boat jetty (2:30 PM)",
        "Short boat ride to Ross Island (10 minutes)",
        "Explore Ross Island - 'Paris of the East' (3:00 PM - 5:00 PM):",
        "  • Walk through colonial ruins and British buildings",
        "  • Visit Japanese Bunkers from WWII",
        "  • See friendly deer and peacocks roaming freely",
        "  • Visit old cemetery, church, and commissioner's residence",
        "Return to Port Blair mainland (5:30 PM)",
        "Shopping at Aberdeen Bazaar - souvenirs, pearls, shells, handicrafts (6:00 PM)",
        "Return to hotel",
        "Overnight stay at Port Blair"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Ross Island", "Colonial Ruins", "Aberdeen Bazaar"]
    },
    {
      day: "Day 5",
      title: "Departure | Fond Memories",
      description: "Enjoy a relaxed morning with breakfast at the hotel. Our representative will ensure a smooth transfer to the airport for your onward journey, carrying wonderful memories of your romantic Andaman honeymoon.",
      activities: [
        "Leisure breakfast at hotel (7:00 AM - 9:00 AM)",
        "Last-minute souvenir shopping (if time permits)",
        "Hotel check-out (as per flight timing)",
        "Transfer to Veer Savarkar Airport",
        "Departure with sweet memories of Andaman Islands"
      ],
      meals: ["Breakfast"],
      sightseeing: []
    }
  ],
  itineraries: {
    4: [
      {
        day: "Day 1",
        title: "Arrival – Port Blair | Romance Begins",
        description: "Arrive in Port Blair, check into hotel, and explore the historical Cellular Jail.",
        activities: [
          "Airport pickup with flower bouquet",
          "Check-in to hotel with welcome drink",
          "Relaxation and lunch",
          "Visit Cellular Jail",
          "Light & Sound Show",
          "Romantic dinner"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Cellular Jail", "Light & Sound Show"]
      },
      {
        day: "Day 2",
        title: "Port Blair → Havelock Island",
        description: "Ferry to Havelock and visit the world-famous Radhanagar Beach.",
        activities: [
          "Private ferry to Havelock",
          "Check-in to beach resort",
          "Honeymoon room decoration",
          "Visit Radhanagar Beach (Beach No. 7)",
          "Sunset photography",
          "Candlelight dinner"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Radhanagar Beach"]
      },
      {
        day: "Day 3",
        title: "Elephant Beach & Return",
        description: "Morning Elephant Beach trip. Afternoon ferry back to Port Blair.",
        activities: [
          "Speedboat to Elephant Beach",
          "Complimentary Snorkeling for couple",
          "Couple beach photography",
          "Ferry return to Port Blair",
          "Check-in to Port Blair hotel"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Elephant Beach"]
      },
      {
        day: "Day 4",
        title: "Departure",
        description: "Transfer to airport for departure.",
        activities: [
          "Breakfast in bed",
          "Checkout",
          "Airport Transfer"
        ],
        meals: ["Breakfast"],
        sightseeing: []
      }
    ],
    5: [
      {
        day: "Day 1",
        title: "Arrival – Port Blair",
        description: "Arrive in Port Blair, check into hotel, and explore the historical Cellular Jail.",
        activities: [
          "Airport pickup",
          "Hotel check-in",
          "Corbyn's Cove Beach visit",
          "Cellular Jail visit",
          "Light & Sound Show"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Cellular Jail", "Light & Sound Show"]
      },
      {
        day: "Day 2",
        title: "Port Blair → Havelock Island",
        description: "Ferry to Havelock and visit the world-famous Radhanagar Beach.",
        activities: [
          "Ferry to Havelock Island",
          "Check-in to resort",
          "Radhanagar Beach visit",
          "Sunset viewing",
          "Dinner at resort"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Radhanagar Beach"]
      },
      {
        day: "Day 3",
        title: "Elephant Beach Adventure",
        description: "Speedboat to Elephant Beach for snorkeling and water activities.",
        activities: [
          "Elephant Beach trip",
          "Snorkeling session",
          "Water sports (optional)",
          "Beach relaxation",
          "Return to resort"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Elephant Beach"]
      },
      {
        day: "Day 4",
        title: "Havelock → Port Blair",
        description: "Return to Port Blair, visit Ross Island and explore the city.",
        activities: [
          "Ferry to Port Blair",
          "Check-in to hotel",
          "Ross Island boat ride",
          "Explore historical ruins",
          "Shopping at Aberdeen Bazaar"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Ross Island", "Aberdeen Bazaar"]
      },
      {
        day: "Day 5",
        title: "Departure",
        description: "Final morning in Port Blair before departure.",
        activities: [
          "Breakfast",
          "Airport Transfer"
        ],
        meals: ["Breakfast"],
        sightseeing: []
      }
    ],
    6: [
      {
        day: "Day 1",
        title: "Arrival – Port Blair",
        description: "Arrive in Port Blair, check into hotel, and explore the historical Cellular Jail.",
        activities: [
          "Airport pickup",
          "Hotel check-in",
          "Corbyn's Cove Beach",
          "Cellular Jail",
          "Light & Sound Show"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Cellular Jail", "Light & Sound Show"]
      },
      {
        day: "Day 2",
        title: "Port Blair → Havelock Island",
        description: "Ferry to Havelock and visit the world-famous Radhanagar Beach.",
        activities: [
          "Ferry to Havelock",
          "Check-in to resort",
          "Radhanagar Beach visit",
          "Sunset time",
          "Beach walk"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Radhanagar Beach"]
      },
      {
        day: "Day 3",
        title: "Elephant Beach Adventure",
        description: "Speedboat to Elephant Beach for snorkeling and water activities.",
        activities: [
          "Speedboat to Elephant Beach",
          "Snorkeling",
          "Jet Ski ride (optional)",
          "Beach photography",
          "Return to resort"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Elephant Beach"]
      },
      {
        day: "Day 4",
        title: "Havelock Leisure",
        description: "Relax at resort or visit Kalapathar Beach.",
        activities: [
          "Leisure breakfast",
          "Kalapathar Beach visit",
          "Resort pool time",
          "Candlelight dinner (optional)"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Kalapathar Beach"]
      },
      {
        day: "Day 5",
        title: "Havelock → Port Blair",
        description: "Return to Port Blair, visit Ross Island and explore the city.",
        activities: [
          "Ferry to Port Blair",
          "Ross Island tour",
          "Shopping for wooden handicrafts",
          "Farewell dinner"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Ross Island", "Aberdeen Bazaar"]
      },
      {
        day: "Day 6",
        title: "Departure",
        description: "Final morning in Port Blair before departure.",
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
      title: "Radhanagar Beach",
      description: "Visit Asia's best beach with crystal clear waters",
      image: "/images/packages/honeymoon-4n5d/highlight-radhanagar.jpg"
    },
    {
      title: "Elephant Beach Snorkeling",
      description: "Complimentary snorkeling at vibrant coral reefs",
      image: "/images/packages/honeymoon-4n5d/highlight-snorkeling.jpg"
    },
    {
      title: "Historical Heritage",
      description: "Explore Cellular Jail and Ross Island",
      image: "/images/packages/honeymoon-4n5d/highlight-heritage.jpg"
    }
  ],
  terms: commonTerms,
  paymentPolicy: commonPaymentPolicy,
  tips: commonTips,
  pricingOptions: [
    { days: 4, pricePerPerson: 29999, title: "4 Days Quick Honeymoon" },
    { days: 5, pricePerPerson: 35999, title: "5 Days Romantic Honeymoon" },
    { days: 6, pricePerPerson: 42999, title: "6 Days Blissful Honeymoon" }
  ],
  hotels: [
    {
      name: "Hotel Sentinel",
      location: "Port Blair",
      rating: 4,
      image: "/images/packages/honeymoon-4n5d/hotel-port-blair.jpg",
      amenities: ["WiFi", "Restaurant", "AC"],
      description: "Comfortable hotel in Port Blair",
      starCategory: 4,
      roomTypes: [
        { name: "Standard", pricePerNight: 2000, description: "AC room with city view", maxOccupancy: 2 },
        { name: "Deluxe", pricePerNight: 3500, description: "Room with sea view", maxOccupancy: 2 }
      ]
    },
    {
      name: "Havelock Beach Resort",
      location: "Havelock Island",
      rating: 4,
      image: "/images/packages/honeymoon-4n5d/hotel-havelock.jpg",
      amenities: ["Beachfront", "Restaurant", "WiFi"],
      description: "Beach resort on Havelock",
      starCategory: 4,
      roomTypes: [
        { name: "Garden View", pricePerNight: 3500, description: "Garden view room", maxOccupancy: 2 },
        { name: "Beach View", pricePerNight: 5000, description: "Beachfront room", maxOccupancy: 2 }
      ]
    }
  ],
  supplements: [
    {
      name: "Scuba Diving Add-on",
      price: 3500,
      description: "Professional scuba diving with equipment",
      availability: ["Havelock"]
    },
    {
      name: "Candlelight Dinner",
      price: 5000,
      description: "Romantic beach dinner",
      availability: ["Havelock"]
    },
    {
      name: "Flower Decoration",
      price: 2000,
      description: "Room decoration with flowers",
      availability: ["All Hotels"]
    }
  ],
  pickupLocations: ["Port Blair Airport", "Port Blair Hotels"],
  cancellationPolicy: commonCancellationPolicy,
  slug: "4n5d-andaman-honeymoon-special"
};

