import { Package } from '../packages';
import { commonPaymentPolicy, commonTips, commonCancellationPolicy, commonTerms } from '../commonPolicies';

export const luxuryEscape: Package = {
  title: "Luxury Island Escape - 7 Days Premium Experience",
  description: "Ultra-luxury 7-day experience with 5-star resorts, premium activities, and personalized service",
  longDescription: "Indulge in the ultimate luxury experience in the Andaman Islands with our premium 7-day package. Stay at the finest 5-star resorts, enjoy exclusive experiences, private transfers, gourmet dining, and personalized service throughout your journey. This package includes luxury accommodations, premium water activities including scuba diving, private island tours, spa treatments, and exclusive access to the best beaches and attractions. Perfect for those seeking the finest Andaman experience.",
  price: 85000,
  duration: "7 days",
  groupSize: "2-4",
  image: "/images/packages/luxury-escape/hero.jpg",
  features: [
    "5-star luxury resorts",
    "Premium scuba diving with videography",
    "Private transfers throughout",
    "Exclusive beach access",
    "Spa treatments included",
    "Gourmet dining experiences",
    "Personal concierge service"
  ],
  includes: [
    "6 nights luxury accommodation in 5-star resorts",
    "Daily gourmet breakfast",
    "Premium scuba diving with professional videography",
    "Private speedboat to Elephant Beach with luxury setup",
    "Complimentary snorkeling with premium equipment",
    "Private vehicle for all transfers and sightseeing",
    "VIP airport lounge access",
    "2 spa sessions (60 minutes each)",
    "Candlelight dinner on beach (one time)",
    "Welcome drinks and room decoration",
    "Cellular Jail premium seating for Light & Sound Show",
    "Professional photography session (4 hours)",
    "All entry tickets and permits",
    "Personal travel concierge",
    "GST and all taxes"
  ],
  excludes: [
    "Airfare to/from Port Blair",
    "Lunch (except on tour days)",
    "Alcoholic beverages",
    "Additional spa treatments",
    "Optional premium water sports",
    "Personal shopping and expenses",
    "Travel insurance",
    "Anything not mentioned in inclusions"
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Luxury Arrival - Port Blair",
      description: "Begin your luxury journey with VIP airport reception, private transfer to your 5-star resort, and evening leisure at the property. Enjoy welcome drinks, room decoration, and a briefing about your luxury itinerary.",
      activities: [
        "VIP airport reception with garland welcome",
        "Private luxury vehicle transfer to resort",
        "Premium suite check-in with welcome drinks",
        "Resort facilities tour",
        "Spa session (60 minutes) - Relaxation massage",
        "Sunset cocktails at resort beach bar",
        "Gourmet dinner at resort restaurant"
      ],
      hotel: {
        name: "Fortune Resort Bay Island",
        location: "Port Blair",
        rating: 5,
        image: "/images/packages/luxury-escape/hotel-port-blair.jpg",
        amenities: ["Beachfront", "Infinity Pool", "Multiple Restaurants", "Spa", "Gym", "Private Beach", "Butler Service"],
        description: "Luxury 5-star resort in Port Blair with premium amenities and stunning ocean views"
      },
      meals: ["Welcome Drinks", "Gourmet Dinner"],
      sightseeing: ["Resort Beach", "Sunset Point"]
    },
    {
      day: "Day 2",
      title: "Heritage & Beaches - Port Blair Premium Tour",
      description: "Explore Port Blair's historical and natural attractions with private guide and vehicle. Visit Cellular Jail, enjoy VIP seating at the Light & Sound Show, and relax at pristine beaches.",
      activities: [
        "Leisurely breakfast at resort",
        "Visit Cellular Jail with private guide (historical tour)",
        "Corbyn's Cove Beach with water sports options",
        "Lunch at premium restaurant",
        "Visit Anthropological Museum",
        "Premium seating at Cellular Jail Light & Sound Show",
        "Dinner at resort with ocean view"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Cellular Jail", "Corbyn's Cove Beach", "Anthropological Museum", "Light & Sound Show"]
    },
    {
      day: "Day 3",
      title: "Transfer to Havelock - Beach Paradise",
      description: "Private ferry transfer to Havelock Island and check into your luxury beachfront villa. Spend the day at the world-famous Radhanagar Beach and enjoy a romantic candlelight dinner on the beach.",
      activities: [
        "Checkout and private transfer to jetty",
        "Premium ferry to Havelock with lounge access",
        "Arrive Havelock - private vehicle transfer",
        "Check into luxury beachfront villa",
        "Afternoon at Radhanagar Beach (Asia's best beach)",
        "Professional photography session (4 hours)",
        "Candlelight dinner on beach with live music"
      ],
      hotel: {
        name: "Taj Exotica Resort & Spa",
        location: "Havelock Island",
        rating: 5,
        image: "/images/packages/luxury-escape/hotel-havelock.jpg",
        amenities: ["Private Beach", "Infinity Pool", "Spa", "Butler Service", "Gourmet Restaurants", "Water Sports Center"],
        description: "Ultra-luxury beachfront resort with world-class amenities and pristine private beach"
      },
      meals: ["Breakfast", "Candlelight Dinner"],
      sightseeing: ["Radhanagar Beach", "Beachfront Photography"]
    },
    {
      day: "Day 4",
      title: "Premium Scuba Diving & Elephant Beach Luxury",
      description: "Experience professional scuba diving with premium equipment and videography. Then enjoy a private speedboat to Elephant Beach with luxury setup, champagne, and exclusive beach experience.",
      activities: [
        "Scuba Diving - Premium dive with certified instructor, complete equipment",
        "Professional underwater videography included",
        "Return to resort for breakfast and spa treatment",
        "Private speedboat to Elephant Beach with luxury setup",
        "Snorkeling - Premium equipment with guide",
        "Jetski - High-performance jetski (optional premium)",
        "Parasailing - Soaring experience with safety (optional)",
        "Sea Walk - Underwater walking experience (optional)",
        "Champagne and gourmet snacks on beach",
        "Return to resort for dinner"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Premium Scuba Diving", "Elephant Beach VIP", "Coral Gardens"]
    },
    {
      day: "Day 5",
      title: "Leisure Day - Resort & Beach Relaxation",
      description: "A full day to relax and enjoy the luxury resort amenities. Indulge in spa treatments, infinity pool, private beach, water sports, or simply unwind with a book by the ocean.",
      activities: [
        "Leisurely breakfast in villa",
        "Spa session (60 minutes) - Couple massage",
        "Infinity pool and beach lounging",
        "Water sports at resort beach (kayaking, paddleboarding)",
        "Kalapathar Beach visit for sunset",
        "Gourmet dinner at resort's specialty restaurant",
        "Optional: Private yacht cruise (additional cost)"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Kalapathar Beach", "Resort Private Beach"]
    },
    {
      day: "Day 6",
      title: "Havelock to Port Blair - Ross Island VIP Tour",
      description: "Return to Port Blair via premium ferry and explore the historical Ross Island with private guide. Evening free for shopping or resort relaxation.",
      activities: [
        "Checkout from resort",
        "Premium ferry to Port Blair",
        "Check into luxury resort in Port Blair",
        "Private boat to Ross Island",
        "VIP guided tour of Ross Island ruins",
        "Visit Chidiya Tapu for sunset photography",
        "Evening shopping at Aberdeen Bazaar with guide",
        "Farewell dinner at premium seafood restaurant"
      ],
      hotel: {
        name: "Fortune Resort Bay Island",
        location: "Port Blair",
        rating: 5,
        image: "/images/packages/luxury-escape/hotel-port-blair.jpg",
        amenities: ["Beachfront", "Infinity Pool", "Multiple Restaurants", "Spa", "Butler Service"],
        description: "Luxury 5-star resort in Port Blair"
      },
      meals: ["Breakfast", "Farewell Dinner"],
      sightseeing: ["Ross Island", "Chidiya Tapu", "Aberdeen Bazaar"]
    },
    {
      day: "Day 7",
      title: "Departure - Memories Forever",
      description: "Leisurely breakfast and checkout. Private transfer to airport with assistance. Depart with unforgettable luxury memories of the Andaman Islands.",
      activities: [
        "Leisurely breakfast at resort",
        "Final spa session or pool time (if time permits)",
        "Checkout with assistance",
        "Private luxury vehicle to airport",
        "Airport assistance and check-in support",
        "Departure with gift hamper"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Last-minute shopping or relaxation"]
    }
  ],
  itineraries: {
    5: [
      {
        day: "Day 1",
        title: "Luxury Arrival - Port Blair",
        description: "VIP Airport reception. Transfer to 5-star resort. Spa session and sunset cocktails.",
        activities: [
          "VIP airport reception with garland welcome",
          "Private luxury vehicle transfer to resort",
          "Premium suite check-in with welcome drinks",
          "Spa session (60 minutes) - Relaxation massage",
          "Sunset cocktails at resort beach bar",
          "Gourmet dinner at resort restaurant"
        ],
        hotel: {
          name: "Fortune Resort Bay Island",
          location: "Port Blair",
          rating: 5,
          image: "/images/packages/luxury-escape/hotel-port-blair.jpg",
          amenities: ["Beachfront", "Spa"],
          description: "Luxury 5-star resort"
        },
        meals: ["Welcome Drinks", "Gourmet Dinner"],
        sightseeing: ["Resort Beach", "Sunset Point"]
      },
      {
        day: "Day 2",
        title: "Port Blair to Havelock - Beach Paradise",
        description: "Premium ferry to Havelock. Check into Taj Exotica. Radhanagar Beach sunset.",
        activities: [
          "Private transfer to jetty",
          "Premium ferry to Havelock with lounge access",
          "Luxury villa check-in at Taj Exotica",
          "Afternoon at Radhanagar Beach (Asia's best)",
          "Professional photography session (2 hours)",
          "Candlelight dinner on beach"
        ],
        hotel: {
          name: "Taj Exotica Resort & Spa",
          location: "Havelock Island",
          rating: 5,
          image: "/images/packages/luxury-escape/hotel-havelock.jpg",
          amenities: ["Private Beach", "Butler Service"],
          description: "Ultra-luxury resort"
        },
        meals: ["Breakfast", "Candlelight Dinner"],
        sightseeing: ["Radhanagar Beach"]
      },
      {
        day: "Day 3",
        title: "Scuba & Elephant Beach Luxury",
        description: "Premium Scuba Diving. Private speedboat to Elephant Beach with luxury setup.",
        activities: [
          "Premium Scuba Diving with videography",
          "Private speedboat to Elephant Beach",
          "Luxury beach setup with champagne",
          "Guided snorkeling session",
          "Return to resort for leisure"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Elephant Beach", "Coral Reefs"]
      },
      {
        day: "Day 4",
        title: "Havelock to Port Blair - Ross Island",
        description: "Return to Port Blair. Ross Island VIP tour and farewell dinner.",
        activities: [
          "Morning at leisure",
          "Premium ferry return to Port Blair",
          "Private boat to Ross Island",
          "VIP guided tour of historical ruins",
          "Farewell seafood dinner"
        ],
        hotel: {
          name: "Fortune Resort Bay Island",
          location: "Port Blair",
          rating: 5,
          image: "/images/packages/luxury-escape/hotel-port-blair.jpg",
          amenities: ["Beachfront", "Spa"],
          description: "Luxury 5-star resort"
        },
        meals: ["Breakfast", "Farewell Dinner"],
        sightseeing: ["Ross Island"]
      },
      {
        day: "Day 5",
        title: "Departure",
        description: "Private transfer to airport with assistance.",
        activities: [
          "Leisurely breakfast",
          "Checkout with assistance",
          "Private luxury transfer to airport",
          "VIP airport lounge access (if available)"
        ],
        meals: ["Breakfast"],
        sightseeing: []
      }
    ],
    6: [
      {
        day: "Day 1",
        title: "Luxury Arrival - Port Blair",
        description: "VIP Airport reception. Transfer to 5-star resort. Spa session and sunset cocktails.",
        activities: [
          "VIP airport reception with garland welcome",
          "Private luxury vehicle transfer to resort",
          "Premium suite check-in with welcome drinks",
          "Spa session (60 minutes) - Relaxation massage",
          "Sunset cocktails at resort beach bar",
          "Gourmet dinner at resort restaurant"
        ],
        hotel: {
          name: "Fortune Resort Bay Island",
          location: "Port Blair",
          rating: 5,
          image: "/images/packages/luxury-escape/hotel-port-blair.jpg",
          amenities: ["Beachfront", "Spa"],
          description: "Luxury 5-star resort"
        },
        meals: ["Welcome Drinks", "Gourmet Dinner"],
        sightseeing: ["Resort Beach", "Sunset Point"]
      },
      {
        day: "Day 2",
        title: "Port Blair to Havelock - Beach Paradise",
        description: "Premium ferry to Havelock. Check into Taj Exotica. Radhanagar Beach sunset.",
        activities: [
          "Private transfer to jetty",
          "Premium ferry to Havelock with lounge access",
          "Luxury villa check-in at Taj Exotica",
          "Afternoon at Radhanagar Beach (Asia's best)",
          "Professional photography session (2 hours)",
          "Dinner at resort"
        ],
        hotel: {
          name: "Taj Exotica Resort & Spa",
          location: "Havelock Island",
          rating: 5,
          image: "/images/packages/luxury-escape/hotel-havelock.jpg",
          amenities: ["Private Beach", "Butler Service"],
          description: "Ultra-luxury resort"
        },
        meals: ["Breakfast", "Dinner"],
        sightseeing: ["Radhanagar Beach"]
      },
      {
        day: "Day 3",
        title: "Scuba & Elephant Beach Luxury",
        description: "Premium Scuba Diving. Private speedboat to Elephant Beach with luxury setup.",
        activities: [
          "Premium Scuba Diving with videography",
          "Private speedboat to Elephant Beach",
          "Luxury beach setup with champagne",
          "Guided snorkeling session",
          "Candlelight dinner on beach (resort)"
        ],
        meals: ["Breakfast", "Candlelight Dinner"],
        sightseeing: ["Elephant Beach", "Coral Reefs"]
      },
      {
        day: "Day 4",
        title: "Leisure Day & Sunset Cruise",
        description: "Relax at resort. Spa treatments and optional sunset cruise.",
        activities: [
          "Leisurely breakfast in villa",
          "Couple Spa Session (60 mins)",
          "Infinity pool and beach time",
          "Kalapathar Beach visit",
          "Gourmet dinner"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Kalapathar Beach"]
      },
      {
        day: "Day 5",
        title: "Havelock to Port Blair - Ross Island",
        description: "Return to Port Blair. Ross Island VIP tour and farewell dinner.",
        activities: [
          "Morning at leisure",
          "Premium ferry return to Port Blair",
          "Private boat to Ross Island",
          "VIP guided tour of historical ruins",
          "Farewell seafood dinner"
        ],
        hotel: {
          name: "Fortune Resort Bay Island",
          location: "Port Blair",
          rating: 5,
          image: "/images/packages/luxury-escape/hotel-port-blair.jpg",
          amenities: ["Beachfront", "Spa"],
          description: "Luxury 5-star resort"
        },
        meals: ["Breakfast", "Farewell Dinner"],
        sightseeing: ["Ross Island"]
      },
      {
        day: "Day 6",
        title: "Departure",
        description: "Private transfer to airport with assistance.",
        activities: [
          "Leisurely breakfast",
          "Checkout with assistance",
          "Private luxury transfer to airport",
          "VIP airport lounge access (if available)"
        ],
        meals: ["Breakfast"],
        sightseeing: []
      }
    ],
    7: [
      {
        day: "Day 1",
        title: "Luxury Arrival - Port Blair",
        description: "Begin your luxury journey with VIP airport reception, private transfer to your 5-star resort, and evening leisure at the property. Enjoy welcome drinks, room decoration, and a briefing about your luxury itinerary.",
        activities: [
          "VIP airport reception with garland welcome",
          "Private luxury vehicle transfer to resort",
          "Premium suite check-in with welcome drinks",
          "Resort facilities tour",
          "Spa session (60 minutes) - Relaxation massage",
          "Sunset cocktails at resort beach bar",
          "Gourmet dinner at resort restaurant"
        ],
        hotel: {
          name: "Fortune Resort Bay Island",
          location: "Port Blair",
          rating: 5,
          image: "/images/packages/luxury-escape/hotel-port-blair.jpg",
          amenities: ["Beachfront", "Infinity Pool", "Multiple Restaurants", "Spa", "Gym", "Private Beach", "Butler Service"],
          description: "Luxury 5-star resort in Port Blair with premium amenities and stunning ocean views"
        },
        meals: ["Welcome Drinks", "Gourmet Dinner"],
        sightseeing: ["Resort Beach", "Sunset Point"]
      },
      {
        day: "Day 2",
        title: "Heritage & Beaches - Port Blair Premium Tour",
        description: "Explore Port Blair's historical and natural attractions with private guide and vehicle. Visit Cellular Jail, enjoy VIP seating at the Light & Sound Show, and relax at pristine beaches.",
        activities: [
          "Leisurely breakfast at resort",
          "Visit Cellular Jail with private guide (historical tour)",
          "Corbyn's Cove Beach with water sports options",
          "Lunch at premium restaurant",
          "Visit Anthropological Museum",
          "Premium seating at Cellular Jail Light & Sound Show",
          "Dinner at resort with ocean view"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Cellular Jail", "Corbyn's Cove Beach", "Anthropological Museum", "Light & Sound Show"]
      },
      {
        day: "Day 3",
        title: "Transfer to Havelock - Beach Paradise",
        description: "Private ferry transfer to Havelock Island and check into your luxury beachfront villa. Spend the day at the world-famous Radhanagar Beach and enjoy a romantic candlelight dinner on the beach.",
        activities: [
          "Checkout and private transfer to jetty",
          "Premium ferry to Havelock with lounge access",
          "Arrive Havelock - private vehicle transfer",
          "Check into luxury beachfront villa",
          "Afternoon at Radhanagar Beach (Asia's best beach)",
          "Professional photography session (4 hours)",
          "Candlelight dinner on beach with live music"
        ],
        hotel: {
          name: "Taj Exotica Resort & Spa",
          location: "Havelock Island",
          rating: 5,
          image: "/images/packages/luxury-escape/hotel-havelock.jpg",
          amenities: ["Private Beach", "Infinity Pool", "Spa", "Butler Service", "Gourmet Restaurants", "Water Sports Center"],
          description: "Ultra-luxury beachfront resort with world-class amenities and pristine private beach"
        },
        meals: ["Breakfast", "Candlelight Dinner"],
        sightseeing: ["Radhanagar Beach", "Beachfront Photography"]
      },
      {
        day: "Day 4",
        title: "Premium Scuba Diving & Elephant Beach Luxury",
        description: "Experience professional scuba diving with premium equipment and videography. Then enjoy a private speedboat to Elephant Beach with luxury setup, champagne, and exclusive beach experience.",
        activities: [
          "Scuba Diving - Premium dive with certified instructor, complete equipment",
          "Professional underwater videography included",
          "Return to resort for breakfast and spa treatment",
          "Private speedboat to Elephant Beach with luxury setup",
          "Snorkeling - Premium equipment with guide",
          "Jetski - High-performance jetski (optional premium)",
          "Parasailing - Soaring experience with safety (optional)",
          "Sea Walk - Underwater walking experience (optional)",
          "Champagne and gourmet snacks on beach",
          "Return to resort for dinner"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Premium Scuba Diving", "Elephant Beach VIP", "Coral Gardens"]
      },
      {
        day: "Day 5",
        title: "Leisure Day - Resort & Beach Relaxation",
        description: "A full day to relax and enjoy the luxury resort amenities. Indulge in spa treatments, infinity pool, private beach, water sports, or simply unwind with a book by the ocean.",
        activities: [
          "Leisurely breakfast in villa",
          "Spa session (60 minutes) - Couple massage",
          "Infinity pool and beach lounging",
          "Water sports at resort beach (kayaking, paddleboarding)",
          "Kalapathar Beach visit for sunset",
          "Gourmet dinner at resort's specialty restaurant",
          "Optional: Private yacht cruise (additional cost)"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Kalapathar Beach", "Resort Private Beach"]
      },
      {
        day: "Day 6",
        title: "Havelock to Port Blair - Ross Island VIP Tour",
        description: "Return to Port Blair via premium ferry and explore the historical Ross Island with private guide. Evening free for shopping or resort relaxation.",
        activities: [
          "Checkout from resort",
          "Premium ferry to Port Blair",
          "Check into luxury resort in Port Blair",
          "Private boat to Ross Island",
          "VIP guided tour of Ross Island ruins",
          "Visit Chidiya Tapu for sunset photography",
          "Evening shopping at Aberdeen Bazaar with guide",
          "Farewell dinner at premium seafood restaurant"
        ],
        hotel: {
          name: "Fortune Resort Bay Island",
          location: "Port Blair",
          rating: 5,
          image: "/images/packages/luxury-escape/hotel-port-blair.jpg",
          amenities: ["Beachfront", "Infinity Pool", "Multiple Restaurants", "Spa", "Butler Service"],
          description: "Luxury 5-star resort in Port Blair"
        },
        meals: ["Breakfast", "Farewell Dinner"],
        sightseeing: ["Ross Island", "Chidiya Tapu", "Aberdeen Bazaar"]
      },
      {
        day: "Day 7",
        title: "Departure - Memories Forever",
        description: "Leisurely breakfast and checkout. Private transfer to airport with assistance. Depart with unforgettable luxury memories of the Andaman Islands.",
        activities: [
          "Leisurely breakfast at resort",
          "Final spa session or pool time (if time permits)",
          "Checkout with assistance",
          "Private luxury vehicle to airport",
          "Airport assistance and check-in support",
          "Departure with gift hamper"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Last-minute shopping or relaxation"]
      }
    ]
  },
  highlights: [
    {
      title: "5-Star Luxury Resorts",
      description: "Stay at premium beachfront villas with butler service, private beaches, and world-class amenities",
      image: "/images/packages/luxury-escape/highlight-resort.jpg"
    },
    {
      title: "Premium Scuba Diving",
      description: "Professional diving with videography, premium equipment, and certified instructors",
      image: "/images/packages/luxury-escape/highlight-scuba.jpg"
    },
    {
      title: "Exclusive Beach Experiences",
      description: "Private speedboat to Elephant Beach with luxury setup, champagne, and gourmet snacks",
      image: "/images/packages/luxury-escape/highlight-beach.jpg"
    },
    {
      title: "Spa & Wellness",
      description: "Multiple spa sessions included with professional therapists and premium treatments",
      image: "/images/packages/luxury-escape/highlight-spa.jpg"
    }
  ],
  terms: commonTerms,
  paymentPolicy: commonPaymentPolicy,
  tips: commonTips,
  pricingOptions: [
    {
      days: 5,
      pricePerPerson: 75999,
      title: "5 Days Luxury Express"
    },
    {
      days: 6,
      pricePerPerson: 87999,
      title: "6 Days Luxury Retreat"
    },
    {
      days: 7,
      pricePerPerson: 99999,
      title: "7 Days Ultra Luxury Experience"
    }
  ],
  hotels: [
    {
      name: "Fortune Resort Bay Island",
      location: "Port Blair",
      rating: 5,
      image: "/images/packages/luxury-escape/hotel-port-blair.jpg",
      amenities: ["Beachfront", "Infinity Pool", "Multiple Restaurants", "Spa", "Gym", "Private Beach", "Butler Service", "WiFi"],
      description: "Premium 5-star resort in Port Blair with luxury amenities and stunning ocean views.",
      starCategory: 5,
      images: [
        "/images/packages/luxury-escape/hotel-port-blair-1.jpg",
        "/images/packages/luxury-escape/hotel-port-blair-2.jpg",
        "/images/packages/luxury-escape/hotel-port-blair-3.jpg"
      ],
      roomTypes: [
        {
          name: "Premium Suite",
          pricePerNight: 8000,
          description: "Luxury suite with ocean view, private balcony, and premium amenities",
          maxOccupancy: 2
        },
        {
          name: "Executive Villa",
          pricePerNight: 12000,
          description: "Private villa with plunge pool, butler service, and exclusive amenities",
          maxOccupancy: 3
        },
        {
          name: "Presidential Suite",
          pricePerNight: 18000,
          description: "Ultra-luxury suite with panoramic views, private dining, and concierge",
          maxOccupancy: 4
        }
      ]
    },
    {
      name: "Taj Exotica Resort & Spa",
      location: "Havelock Island",
      rating: 5,
      image: "/images/packages/luxury-escape/hotel-havelock.jpg",
      amenities: ["Private Beach", "Infinity Pool", "World-Class Spa", "Butler Service", "Multiple Restaurants", "Water Sports"],
      description: "Ultra-luxury beachfront resort with world-class amenities and pristine private beach access.",
      starCategory: 5,
      images: [
        "/images/packages/luxury-escape/hotel-havelock-1.jpg",
        "/images/packages/luxury-escape/hotel-havelock-2.jpg",
        "/images/packages/luxury-escape/hotel-havelock-3.jpg"
      ],
      roomTypes: [
        {
          name: "Beach Villa",
          pricePerNight: 10000,
          description: "Beachfront villa with direct beach access and modern luxury",
          maxOccupancy: 2
        },
        {
          name: "Ocean Villa",
          pricePerNight: 15000,
          description: "Premium villa with private pool and ocean views",
          maxOccupancy: 3
        },
        {
          name: "Luxury Suite",
          pricePerNight: 22000,
          description: "Ultimate luxury with private beach area, plunge pool, and butler",
          maxOccupancy: 4
        }
      ]
    }
  ],
  supplements: [
    {
      name: "Private Yacht Sunset Cruise",
      price: 15000,
      description: "Exclusive 2-hour private yacht cruise with champagne, canapés, and live music",
      availability: ["Port Blair", "Havelock"]
    },
    {
      name: "Helicopter Transfer",
      price: 25000,
      description: "Scenic helicopter transfer between Port Blair and Havelock (per person)",
      availability: ["Port Blair to Havelock"]
    },
    {
      name: "Premium Wine Dinner",
      price: 8000,
      description: "Multi-course gourmet dinner with wine pairing at resort's specialty restaurant",
      availability: ["All Luxury Resorts"]
    },
    {
      name: "Additional Spa Session",
      price: 4000,
      description: "60-minute luxury spa treatment (choice of massage, facial, or body treatment)",
      availability: ["All Luxury Resorts"]
    }
  ],
  pickupLocations: [
    "Veer Savarkar International Airport - VIP Lounge",
    "Port Blair 5-Star Hotels",
    "Private Yacht Marina"
  ],
  cancellationPolicy: commonCancellationPolicy,
  slug: "luxury-island-escape-7-days"
};

