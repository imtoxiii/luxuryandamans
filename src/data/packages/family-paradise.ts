import { Package } from '../packages';
import { commonPaymentPolicy, commonTips, commonCancellationPolicy, commonTerms } from '../commonPolicies';

export const familyParadise: Package = {
  title: "Family Paradise - 6 Days Fun Adventure",
  description: "Perfect family vacation with kid-friendly activities, comfortable accommodations, and fun for all ages",
  longDescription: "Create unforgettable family memories with our specially designed 6-day Andaman family package. This itinerary features kid-friendly activities, comfortable family accommodations, safe water sports, educational experiences, and plenty of beach fun. From glass-bottom boat rides to easy snorkeling, from historical learning to beach games - every activity is chosen with families in mind. Enjoy the perfect balance of adventure, learning, and relaxation with activities suitable for children aged 5 and above.",
  price: 38500,
  duration: "6 days",
  groupSize: "4-6",
  image: "/images/packages/family-paradise/hero.jpg",
  features: [
    "Kid-friendly activities",
    "Family rooms available",
    "Safe water sports",
    "Educational experiences",
    "Beach games included",
    "Flexible itinerary",
    "Child-safe equipment"
  ],
  includes: [
    "5 nights family accommodation (interconnecting rooms available)",
    "Daily breakfast for all family members",
    "All ferry transfers between islands (Makruzz/Nautika)",
    "Family-friendly snorkeling at Elephant Beach",
    "Glass-bottom boat ride for kids",
    "All sightseeing by private family vehicle",
    "Cellular Jail visit with kid-friendly guide",
    "Light & Sound Show tickets for family",
    "Ross Island exploration with nature walk",
    "Beach games equipment (volleyball, frisbee, cricket)",
    "Life jackets and safety equipment for kids",
    "Entry tickets to all attractions",
    "Airport pickup and drop",
    "First-aid kit and emergency assistance"
  ],
  excludes: [
    "Airfare to/from Port Blair",
    "Lunch and dinner",
    "Optional water sports",
    "Personal expenses",
    "Travel insurance",
    "Medical expenses",
    "Tips and gratuities",
    "Baby sitting services",
    "Extra bedding charges (if any)"
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival & City Exploration",
      description: "Welcome to the Andaman Islands! After a comfortable airport pickup, check into your family-friendly hotel and spend the evening exploring Port Blair's beaches and attractions. Visit the famous Cellular Jail and let kids enjoy the beach.",
      activities: [
        "Family pickup from airport (around 12 PM)",
        "Check into family-friendly hotel",
        "Lunch break and rest time",
        "Visit Corbyn's Cove Beach (kids can play in sand)",
        "Beach games: volleyball, frisbee, sandcastle building",
        "Visit Cellular Jail (kid-friendly historical tour)",
        "Light & Sound Show (fascinating for kids)",
        "Dinner at family restaurant"
      ],
      hotel: {
        name: "Hotel Sinclairs Bayview",
        location: "Port Blair",
        rating: 4,
        image: "/images/packages/family-paradise/hotel-port-blair.jpg",
        amenities: ["Family Rooms", "Restaurant", "Kids Play Area", "WiFi", "Room Service", "Safe Environment"],
        description: "Family-friendly hotel with spacious rooms and amenities suitable for children"
      },
      meals: ["Breakfast"],
      sightseeing: ["Corbyn's Cove Beach", "Cellular Jail", "Light & Sound Show"]
    },
    {
      day: "Day 2",
      title: "Port Blair to Havelock - Beach Fun Begins",
      description: "Take a comfortable ferry to Havelock Island. The ferry ride itself is an adventure for kids! Visit the stunning Radhanagar Beach where children can safely play in shallow waters.",
      activities: [
        "Early breakfast at hotel",
        "Comfortable ferry to Havelock (kids love the boat ride!)",
        "Arrive Havelock and check into beach resort",
        "Lunch and rest time for family",
        "Visit Radhanagar Beach (Beach No. 7)",
        "Kids play area: shallow water play, sandcastle competition",
        "Family photo session at sunset",
        "Beach volleyball and games",
        "Return to resort for dinner"
      ],
      hotel: {
        name: "SeaShell Havelock",
        location: "Havelock Island",
        rating: 4,
        image: "/images/packages/family-paradise/hotel-havelock.jpg",
        amenities: ["Beach Access", "Family Rooms", "Kids Pool", "Restaurant", "Garden", "Beach Games"],
        description: "Beach resort with family cottages and safe beach access for children"
      },
      meals: ["Breakfast"],
      sightseeing: ["Radhanagar Beach", "Beach Activities"]
    },
    {
      day: "Day 3",
      title: "Elephant Beach Family Adventure",
      description: "Speedboat adventure to Elephant Beach! Kids will love the boat ride and the crystal-clear waters. Enjoy safe snorkeling with life jackets, beach games, and optional gentle water sports suitable for families.",
      activities: [
        "Snorkeling - Safe snorkeling with kid-friendly equipment and guides",
        "Glass Bottom Boat - Perfect for younger kids to see coral without swimming",
        "Banana Ride - Fun group activity suitable for kids (age 8+)",
        "Beach Games - Volleyball, frisbee, beach cricket organized for families",
        "Nature Walk - Short guided walk through forest (educational for kids)",
        "Shell Collecting - Kids can collect shells on beach",
        "Swimming - Shallow water area perfect for children"
      ],
      meals: ["Breakfast", "Packed Lunch"],
      sightseeing: ["Elephant Beach", "Coral Viewing", "Nature Trail"]
    },
    {
      day: "Day 4",
      title: "Havelock Leisure & Beach Day",
      description: "A relaxed day for the family to enjoy resort facilities, beach activities, or optional gentle water sports. Visit Kalapathar Beach for its unique black rocks and photography.",
      activities: [
        "Leisurely family breakfast",
        "Resort pool time and beach activities",
        "Visit Kalapathar Beach for photography",
        "Kids beach cricket tournament",
        "Optional: Easy kayaking in calm waters",
        "Beach treasure hunt organized for kids",
        "Sunset viewing at beach",
        "Family game night at resort"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Kalapathar Beach", "Resort Beach Activities"]
    },
    {
      day: "Day 5",
      title: "Return to Port Blair - Ross Island Exploration",
      description: "Ferry back to Port Blair and explore the historic Ross Island. Kids will love seeing the friendly deer and peacocks roaming freely! Visit the ruins and learn about island history in a fun way.",
      activities: [
        "Check out from Havelock resort",
        "Ferry to Port Blair",
        "Check into Port Blair hotel",
        "Lunch and short rest",
        "Boat ride to Ross Island (10-minute ride)",
        "Explore ruins - kids love the deer and peacocks!",
        "Nature photography and wildlife spotting",
        "Educational tour about island history",
        "Visit Japanese Bunkers (kids find it exciting)",
        "Return to city for dinner"
      ],
      hotel: {
        name: "Hotel Sinclairs Bayview",
        location: "Port Blair",
        rating: 4,
        image: "/images/packages/family-paradise/hotel-port-blair.jpg",
        amenities: ["Family Rooms", "Restaurant", "Kids Play Area", "WiFi", "Room Service"],
        description: "Family-friendly hotel in Port Blair"
      },
      meals: ["Breakfast"],
      sightseeing: ["Ross Island", "Wildlife Spotting", "Historical Ruins"]
    },
    {
      day: "Day 6",
      title: "Chidiya Tapu & Departure",
      description: "Final day exploring Chidiya Tapu (Bird Island) where kids can spot various birds and enjoy the beach. Shop for souvenirs before departure.",
      activities: [
        "Breakfast at hotel",
        "Visit Chidiya Tapu - Bird watching for kids",
        "Beach time and nature walk",
        "Visit Anthropological Museum (educational)",
        "Lunch in city",
        "Shopping at Aberdeen Bazaar (souvenirs for kids)",
        "Buy shells, handicrafts, pearls",
        "Hotel checkout",
        "Airport transfer for departure"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Chidiya Tapu", "Bird Watching", "Anthropological Museum", "Aberdeen Bazaar"]
    }
  ],
  itineraries: {
    5: [
      {
        day: "Day 1",
        title: "Arrival & City Exploration",
        description: "Arrival at Port Blair. Check into family hotel. Visit Cellular Jail and enjoy Light & Sound Show.",
        activities: [
          "Family pickup from airport",
          "Check-in to family-friendly hotel",
          "Lunch and rest",
          "Visit Cellular Jail (History tour)",
          "Light & Sound Show in evening",
          "Dinner at family restaurant"
        ],
        hotel: {
          name: "Hotel Sinclairs Bayview",
          location: "Port Blair",
          rating: 4,
          image: "/images/packages/family-paradise/hotel-port-blair.jpg",
          amenities: ["Family Rooms", "Kids Play Area"],
          description: "Family-friendly hotel"
        },
        meals: ["Breakfast"],
        sightseeing: ["Cellular Jail", "Light & Sound Show"]
      },
      {
        day: "Day 2",
        title: "Port Blair to Havelock - Beach Fun",
        description: "Ferry to Havelock. Check into beach resort. Play at Radhanagar Beach.",
        activities: [
          "Ferry transfer to Havelock",
          "Check-in to beach resort",
          "Lunch at resort",
          "Visit Radhanagar Beach for sunset",
          "Beach games for kids",
          "Dinner at resort"
        ],
        hotel: {
          name: "SeaShell Havelock",
          location: "Havelock Island",
          rating: 4,
          image: "/images/packages/family-paradise/hotel-havelock.jpg",
          amenities: ["Beach Access", "Kids Pool"],
          description: "Beach resort"
        },
        meals: ["Breakfast"],
        sightseeing: ["Radhanagar Beach"]
      },
      {
        day: "Day 3",
        title: "Elephant Beach Adventure",
        description: "Speedboat to Elephant Beach. Snorkeling and Glass Bottom Boat ride for kids.",
        activities: [
          "Speedboat to Elephant Beach",
          "Kid-friendly Snorkeling with guide",
          "Glass Bottom Boat ride",
          "Beach picnic",
          "Return to resort for pool time"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Elephant Beach"]
      },
      {
        day: "Day 4",
        title: "Havelock to Port Blair - Ross Island",
        description: "Ferry back to Port Blair. Visit Ross Island to spot deer and peacocks.",
        activities: [
          "Morning ferry to Port Blair",
          "Boat ride to Ross Island",
          "Wildlife spotting (deer & peacocks)",
          "Explore historical ruins",
          "Shopping at Aberdeen Bazaar",
          "Farewell dinner"
        ],
        hotel: {
          name: "Hotel Sinclairs Bayview",
          location: "Port Blair",
          rating: 4,
          image: "/images/packages/family-paradise/hotel-port-blair.jpg",
          amenities: ["Family Rooms"],
          description: "Family-friendly hotel"
        },
        meals: ["Breakfast", "Farewell Dinner"],
        sightseeing: ["Ross Island"]
      },
      {
        day: "Day 5",
        title: "Departure",
        description: "Transfer to airport with wonderful family memories.",
        activities: [
          "Breakfast at hotel",
          "Checkout assistance",
          "Airport transfer"
        ],
        meals: ["Breakfast"],
        sightseeing: []
      }
    ],
    6: [
      {
        day: "Day 1",
        title: "Arrival & City Exploration",
        description: "Welcome to the Andaman Islands! After a comfortable airport pickup, check into your family-friendly hotel and spend the evening exploring Port Blair's beaches and attractions. Visit the famous Cellular Jail and let kids enjoy the beach.",
        activities: [
          "Family pickup from airport (around 12 PM)",
          "Check into family-friendly hotel",
          "Lunch break and rest time",
          "Visit Corbyn's Cove Beach (kids can play in sand)",
          "Beach games: volleyball, frisbee, sandcastle building",
          "Visit Cellular Jail (kid-friendly historical tour)",
          "Light & Sound Show (fascinating for kids)",
          "Dinner at family restaurant"
        ],
        hotel: {
          name: "Hotel Sinclairs Bayview",
          location: "Port Blair",
          rating: 4,
          image: "/images/packages/family-paradise/hotel-port-blair.jpg",
          amenities: ["Family Rooms", "Restaurant", "Kids Play Area", "WiFi", "Room Service", "Safe Environment"],
          description: "Family-friendly hotel with spacious rooms and amenities suitable for children"
        },
        meals: ["Breakfast"],
        sightseeing: ["Corbyn's Cove Beach", "Cellular Jail", "Light & Sound Show"]
      },
      {
        day: "Day 2",
        title: "Port Blair to Havelock - Beach Fun Begins",
        description: "Take a comfortable ferry to Havelock Island. The ferry ride itself is an adventure for kids! Visit the stunning Radhanagar Beach where children can safely play in shallow waters.",
        activities: [
          "Early breakfast at hotel",
          "Comfortable ferry to Havelock (kids love the boat ride!)",
          "Arrive Havelock and check into beach resort",
          "Lunch and rest time for family",
          "Visit Radhanagar Beach (Beach No. 7)",
          "Kids play area: shallow water play, sandcastle competition",
          "Family photo session at sunset",
          "Beach volleyball and games",
          "Return to resort for dinner"
        ],
        hotel: {
          name: "SeaShell Havelock",
          location: "Havelock Island",
          rating: 4,
          image: "/images/packages/family-paradise/hotel-havelock.jpg",
          amenities: ["Beach Access", "Family Rooms", "Kids Pool", "Restaurant", "Garden", "Beach Games"],
          description: "Beach resort with family cottages and safe beach access for children"
        },
        meals: ["Breakfast"],
        sightseeing: ["Radhanagar Beach", "Beach Activities"]
      },
      {
        day: "Day 3",
        title: "Elephant Beach Family Adventure",
        description: "Speedboat adventure to Elephant Beach! Kids will love the boat ride and the crystal-clear waters. Enjoy safe snorkeling with life jackets, beach games, and optional gentle water sports suitable for families.",
        activities: [
          "Snorkeling - Safe snorkeling with kid-friendly equipment and guides",
          "Glass Bottom Boat - Perfect for younger kids to see coral without swimming",
          "Banana Ride - Fun group activity suitable for kids (age 8+)",
          "Beach Games - Volleyball, frisbee, beach cricket organized for families",
          "Nature Walk - Short guided walk through forest (educational for kids)",
          "Shell Collecting - Kids can collect shells on beach",
          "Swimming - Shallow water area perfect for children"
        ],
        meals: ["Breakfast", "Packed Lunch"],
        sightseeing: ["Elephant Beach", "Coral Viewing", "Nature Trail"]
      },
      {
        day: "Day 4",
        title: "Havelock Leisure & Beach Day",
        description: "A relaxed day for the family to enjoy resort facilities, beach activities, or optional gentle water sports. Visit Kalapathar Beach for its unique black rocks and photography.",
        activities: [
          "Leisurely family breakfast",
          "Resort pool time and beach activities",
          "Visit Kalapathar Beach for photography",
          "Kids beach cricket tournament",
          "Optional: Easy kayaking in calm waters",
          "Beach treasure hunt organized for kids",
          "Sunset viewing at beach",
          "Family game night at resort"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Kalapathar Beach", "Resort Beach Activities"]
      },
      {
        day: "Day 5",
        title: "Return to Port Blair - Ross Island Exploration",
        description: "Ferry back to Port Blair and explore the historic Ross Island. Kids will love seeing the friendly deer and peacocks roaming freely! Visit the ruins and learn about island history in a fun way.",
        activities: [
          "Check out from Havelock resort",
          "Ferry to Port Blair",
          "Check into Port Blair hotel",
          "Lunch and short rest",
          "Boat ride to Ross Island (10-minute ride)",
          "Explore ruins - kids love the deer and peacocks!",
          "Nature photography and wildlife spotting",
          "Educational tour about island history",
          "Visit Japanese Bunkers (kids find it exciting)",
          "Return to city for dinner"
        ],
        hotel: {
          name: "Hotel Sinclairs Bayview",
          location: "Port Blair",
          rating: 4,
          image: "/images/packages/family-paradise/hotel-port-blair.jpg",
          amenities: ["Family Rooms", "Restaurant", "Kids Play Area", "WiFi", "Room Service"],
          description: "Family-friendly hotel in Port Blair"
        },
        meals: ["Breakfast"],
        sightseeing: ["Ross Island", "Wildlife Spotting", "Historical Ruins"]
      },
      {
        day: "Day 6",
        title: "Chidiya Tapu & Departure",
        description: "Final day exploring Chidiya Tapu (Bird Island) where kids can spot various birds and enjoy the beach. Shop for souvenirs before departure.",
        activities: [
          "Breakfast at hotel",
          "Visit Chidiya Tapu - Bird watching for kids",
          "Beach time and nature walk",
          "Visit Anthropological Museum (educational)",
          "Lunch in city",
          "Shopping at Aberdeen Bazaar (souvenirs for kids)",
          "Buy shells, handicrafts, pearls",
          "Hotel checkout",
          "Airport transfer for departure"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Chidiya Tapu", "Bird Watching", "Anthropological Museum", "Aberdeen Bazaar"]
      }
    ],
    7: [
      {
        day: "Day 1",
        title: "Arrival & City Exploration",
        description: "Arrival at Port Blair. Check into family hotel. Visit Cellular Jail and Light & Sound Show.",
        activities: [
          "Family pickup from airport",
          "Check-in to family-friendly hotel",
          "Lunch and rest",
          "Visit Cellular Jail (History tour)",
          "Light & Sound Show in evening",
          "Dinner at family restaurant"
        ],
        hotel: {
          name: "Hotel Sinclairs Bayview",
          location: "Port Blair",
          rating: 4,
          image: "/images/packages/family-paradise/hotel-port-blair.jpg",
          amenities: ["Family Rooms", "Kids Play Area"],
          description: "Family-friendly hotel"
        },
        meals: ["Breakfast"],
        sightseeing: ["Cellular Jail", "Light & Sound Show"]
      },
      {
        day: "Day 2",
        title: "Port Blair to Havelock - Beach Fun",
        description: "Ferry to Havelock. Check into beach resort. Play at Radhanagar Beach.",
        activities: [
          "Ferry transfer to Havelock",
          "Check-in to beach resort",
          "Lunch at resort",
          "Visit Radhanagar Beach for sunset",
          "Beach games for kids",
          "Dinner at resort"
        ],
        hotel: {
          name: "SeaShell Havelock",
          location: "Havelock Island",
          rating: 4,
          image: "/images/packages/family-paradise/hotel-havelock.jpg",
          amenities: ["Beach Access", "Kids Pool"],
          description: "Beach resort"
        },
        meals: ["Breakfast"],
        sightseeing: ["Radhanagar Beach"]
      },
      {
        day: "Day 3",
        title: "Elephant Beach Adventure",
        description: "Speedboat to Elephant Beach. Snorkeling and Glass Bottom Boat ride for kids.",
        activities: [
          "Speedboat to Elephant Beach",
          "Kid-friendly Snorkeling with guide",
          "Glass Bottom Boat ride",
          "Banana Boat ride",
          "Beach picnic",
          "Return to resort for pool time"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Elephant Beach"]
      },
      {
        day: "Day 4",
        title: "Havelock to Neil Island",
        description: "Ferry to Neil Island. Visit Bharatpur Beach for shallow water swimming.",
        activities: [
          "Ferry transfer to Neil Island",
          "Check-in to resort",
          "Visit Bharatpur Beach",
          "Glass bottom boat at Neil",
          "Laxmanpur Beach sunset"
        ],
        hotel: {
          name: "SeaShell Neil",
          location: "Neil Island",
          rating: 4,
          image: "/images/packages/family-paradise/hotel-neil.jpg",
          amenities: ["Beach Access"],
          description: "Beach resort"
        },
        meals: ["Breakfast"],
        sightseeing: ["Bharatpur Beach", "Laxmanpur Beach"]
      },
      {
        day: "Day 5",
        title: "Neil to Port Blair - Natural Wonders",
        description: "Visit Natural Bridge. Ferry to Port Blair. Chidiya Tapu Sunset.",
        activities: [
          "Visit Natural Bridge (marine life spotting)",
          "Ferry transfer to Port Blair",
          "Check-in to hotel",
          "Trip to Chidiya Tapu (Bird Island)",
          "Sunset view",
          "Dinner"
        ],
        hotel: {
          name: "Hotel Sinclairs Bayview",
          location: "Port Blair",
          rating: 4,
          image: "/images/packages/family-paradise/hotel-port-blair.jpg",
          amenities: ["Family Rooms"],
          description: "Family-friendly hotel"
        },
        meals: ["Breakfast"],
        sightseeing: ["Natural Bridge", "Chidiya Tapu"]
      },
      {
        day: "Day 6",
        title: "Ross Island & Shopping",
        description: "Visit Ross Island. Shopping at Aberdeen Bazaar for souvenirs.",
        activities: [
          "Boat ride to Ross Island",
          "Spotting Deer and Peacocks",
          "Explore bunkers and ruins",
          "Shopping at Aberdeen Bazaar",
          "Buy shell craft and pearls",
          "Farewell dinner"
        ],
        meals: ["Breakfast", "Farewell Dinner"],
        sightseeing: ["Ross Island", "Aberdeen Bazaar"]
      },
      {
        day: "Day 7",
        title: "Departure",
        description: "Transfer to airport with wonderful family memories.",
        activities: [
          "Breakfast at hotel",
          "Checkout assistance",
          "Airport transfer"
        ],
        meals: ["Breakfast"],
        sightseeing: []
      }
    ]
  },
  highlights: [
    {
      title: "Kid-Friendly Water Activities",
      description: "Safe snorkeling, glass-bottom boat, banana ride - all with proper safety equipment",
      image: "/images/packages/family-paradise/highlight-water-sports.jpg"
    },
    {
      title: "Beach Fun & Games",
      description: "Organized beach games, sandcastle competitions, treasure hunts, and family activities",
      image: "/images/packages/family-paradise/highlight-beach-games.jpg"
    },
    {
      title: "Educational Experiences",
      description: "Historical tours, nature walks, bird watching, and marine life education",
      image: "/images/packages/family-paradise/highlight-education.jpg"
    },
    {
      title: "Wildlife Encounters",
      description: "Meet friendly deer and peacocks at Ross Island, spot colorful birds at Chidiya Tapu",
      image: "/images/packages/family-paradise/highlight-wildlife.jpg"
    }
  ],
  terms: commonTerms,
  paymentPolicy: commonPaymentPolicy,
  tips: commonTips,
  pricingOptions: [
    {
      days: 5,
      pricePerPerson: 36999,
      title: "5 Days Family Express"
    },
    {
      days: 6,
      pricePerPerson: 44999,
      title: "6 Days Family Paradise"
    },
    {
      days: 7,
      pricePerPerson: 52999,
      title: "7 Days Grand Family Vacation"
    }
  ],
  hotels: [
    {
      name: "Hotel Sinclairs Bayview",
      location: "Port Blair",
      rating: 4,
      image: "/images/packages/family-paradise/hotel-port-blair.jpg",
      amenities: ["Family Rooms", "Restaurant", "Kids Play Area", "WiFi", "Room Service", "Travel Desk", "Safe Parking"],
      description: "Family-friendly hotel with spacious rooms, play area for children, and safe environment.",
      starCategory: 4,
      images: [
        "/images/packages/family-paradise/hotel-port-blair-1.jpg",
        "/images/packages/family-paradise/hotel-port-blair-2.jpg",
        "/images/packages/family-paradise/hotel-port-blair-3.jpg"
      ],
      roomTypes: [
        {
          name: "Standard Family Room",
          pricePerNight: 3500,
          description: "Comfortable room with one double bed and extra bed option for kids",
          maxOccupancy: 3
        },
        {
          name: "Deluxe Family Suite",
          pricePerNight: 5500,
          description: "Spacious suite with separate sleeping areas for parents and children",
          maxOccupancy: 4
        },
        {
          name: "Family Connecting Rooms",
          pricePerNight: 7500,
          description: "Two interconnected rooms perfect for larger families",
          maxOccupancy: 6
        }
      ]
    },
    {
      name: "SeaShell Havelock",
      location: "Havelock Island",
      rating: 4,
      image: "/images/packages/family-paradise/hotel-havelock.jpg",
      amenities: ["Beach Access", "Family Cottages", "Kids Pool", "Restaurant", "Garden", "Beach Games", "WiFi"],
      description: "Beach resort with family cottages, safe beach access, and activities for children.",
      starCategory: 4,
      images: [
        "/images/packages/family-paradise/hotel-havelock-1.jpg",
        "/images/packages/family-paradise/hotel-havelock-2.jpg",
        "/images/packages/family-paradise/hotel-havelock-3.jpg"
      ],
      roomTypes: [
        {
          name: "Garden Cottage",
          pricePerNight: 4500,
          description: "Cozy cottage with garden view, perfect for small families",
          maxOccupancy: 3
        },
        {
          name: "Beach Cottage",
          pricePerNight: 6500,
          description: "Beachfront cottage with direct beach access and space for kids",
          maxOccupancy: 4
        },
        {
          name: "Family Villa",
          pricePerNight: 9000,
          description: "Large villa with multiple beds and living area for families",
          maxOccupancy: 6
        }
      ]
    }
  ],
  supplements: [
    {
      name: "Kids Special Birthday Cake",
      price: 2000,
      description: "Customized birthday cake for kids with decorations and celebration setup",
      availability: ["All Hotels"]
    },
    {
      name: "Family Photo Album",
      price: 5000,
      description: "Professional photographer for 4 hours with printed photo album",
      availability: ["All Locations"]
    },
    {
      name: "Babysitting Service",
      price: 1500,
      description: "Professional babysitter for 4 hours (advance booking required)",
      availability: ["All Hotels"]
    },
    {
      name: "Kids Adventure Kit",
      price: 1000,
      description: "Snorkel set, beach toys, waterproof camera for kids",
      availability: ["Havelock"]
    }
  ],
  pickupLocations: [
    "Veer Savarkar International Airport, Port Blair",
    "Port Blair City Hotels",
    "Custom pickup location in Port Blair"
  ],
  cancellationPolicy: commonCancellationPolicy,
  slug: "family-paradise-6-days",
  id: "family-paradise"
};

