import { Package } from '../packages';
import { commonPaymentPolicy, commonTips, commonCancellationPolicy, commonTerms } from '../commonPolicies';

export const honeymoon5n6d: Package = {
  title: "5N/6D Andaman Time Mapped Honeymoon",
  description: "Perfect 5 nights 6 days romantic itinerary with time-optimized schedule for couples",
  longDescription: "Experience the perfect romantic escape with our meticulously planned 5 Nights 6 Days Andaman honeymoon package. This time-mapped itinerary ensures you make the most of every moment, visiting all the iconic destinations including Port Blair, Havelock Island, and Neil Island. From scuba diving to sunset beaches, from natural rock formations to underwater adventures - everything is planned to perfection for couples seeking both adventure and romance.",
  price: 38000,
  duration: "6 days",
  groupSize: "2",
  image: "/images/packages/honeymoon-5n6d/hero.jpg",
  features: [
    "Time-optimized schedule",
    "Scuba diving included",
    "Elephant Beach activities",
    "Island hopping",
    "Romantic beach sunsets",
    "All transfers included"
  ],
  includes: [
    "5 nights accommodation (Port Blair, Havelock & Neil)",
    "Daily breakfast",
    "All ferry transfers between islands (private ferry)",
    "Professional scuba diving session with photos/videos",
    "Elephant Beach speedboat with complimentary snorkeling",
    "All sightseeing by private vehicle",
    "Cellular Jail Light & Sound Show tickets",
    "Entry tickets to all mentioned attractions",
    "Airport pickup and drop",
    "GST and all taxes included"
  ],
  excludes: [
    "Airfare to/from Port Blair",
    "Lunch and dinner",
    "Optional water sports at Elephant Beach (Jetski, Parasailing, Banana Ride)",
    "Personal expenses and shopping",
    "Travel insurance",
    "Camera fees at monuments (if applicable)",
    "Tips and gratuities",
    "Anything not mentioned in inclusions"
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival – Port Blair | Heritage & Beaches",
      description: "Arrive at Veer Savarkar International Airport and begin your romantic Andaman journey. After checking into your hotel, explore the historical Cellular Jail and relax at the beautiful Corbyn's Cove Beach. End the day with the mesmerizing Light & Sound Show that brings history to life.",
      activities: [
        "Airport pickup around 12:00 PM",
        "Hotel check-in at 12:30 PM",
        "After lunch visit Cellular Jail (2:00 PM)",
        "Corbyn's Cove Beach photography session",
        "Light & Sound Show at Cellular Jail (6:00 PM - 7:00 PM)"
      ],
      hotel: {
        name: "Hotel Sentinel",
        location: "Port Blair",
        rating: 4,
        image: "/images/packages/honeymoon-5n6d/hotel-port-blair.jpg",
        amenities: ["Free WiFi", "Restaurant", "Room Service", "Air Conditioning", "Honeymoon Suite"],
        description: "Comfortable hotel in Port Blair with modern amenities and honeymoon-friendly rooms"
      },
      meals: ["Breakfast"],
      sightseeing: ["Cellular Jail", "Corbyn's Cove Beach", "Light & Sound Show"]
    },
    {
      day: "Day 2",
      title: "Port Blair → Havelock Island | Beach Paradise",
      description: "Take a scenic ferry ride to the stunning Havelock Island, home to some of Asia's best beaches. Visit the unique Kalapathar Beach and the world-famous Radhanagar Beach for a magical sunset experience.",
      activities: [
        "Hotel check-out at 8:00 AM",
        "Private Ferry departure at 8:45 AM",
        "Arrive Havelock at 10:15 AM",
        "Resort check-in at 11:00 AM",
        "Visit Kalapathar Beach (12:00 PM - 2:30 PM) with lunch",
        "Visit Radhanagar Beach for sunset (3:45 PM onwards)",
        "Romantic beach walk and photography"
      ],
      hotel: {
        name: "Havelock Island Beach Resort",
        location: "Havelock Island",
        rating: 4,
        image: "/images/packages/honeymoon-5n6d/hotel-havelock.jpg",
        amenities: ["Beachfront", "Restaurant", "Water Sports Desk", "WiFi", "Honeymoon Package"],
        description: "Beautiful beachfront resort on Havelock with direct beach access"
      },
      meals: ["Breakfast"],
      sightseeing: ["Kalapathar Beach", "Radhanagar Beach (Beach No. 7)"]
    },
    {
      day: "Day 3",
      title: "Havelock Adventure | Scuba Diving + Elephant Beach",
      description: "Experience the underwater world with professional scuba diving including photos and videos. Then head to Elephant Beach for complimentary snorkeling and optional water sports activities.",
      activities: [
        "Scuba Diving - Early morning scuba diving session at 5:30 AM",
        "Snorkeling - Complimentary snorkeling at Elephant Beach",
        "Jetski - High-speed jetski rides (optional)",
        "Parasailing - Soar above the ocean (optional)",
        "Banana Ride - Fun group activity (optional)",
        "Glass Bottom Boat - View coral without getting wet (optional)",
        "Sea Walk - Walk underwater with helmet (optional)"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Scuba Diving Site", "Elephant Beach", "Coral Reefs"]
    },
    {
      day: "Day 4",
      title: "Havelock → Neil Island | Tranquil Beaches",
      description: "Transfer to the peaceful Neil Island, known for its serene atmosphere. Explore Bharatpur Beach with optional water sports and witness a stunning sunset at Laxmanpur Beach.",
      activities: [
        "Hotel check-out at 9:00 AM",
        "Ferry to Neil Island at 10:00 AM",
        "Arrive Neil at 11:00 AM, check-in at 12:00 PM",
        "Visit Bharatpur Beach for swimming (2:00 PM)",
        "Optional water sports at Bharatpur",
        "Visit Laxmanpur Beach for sunset (till 5:30 PM)",
        "Romantic beach evening"
      ],
      hotel: {
        name: "Neil Island Beach Resort",
        location: "Neil Island",
        rating: 3,
        image: "/images/packages/honeymoon-5n6d/hotel-neil.jpg",
        amenities: ["Beach Access", "Restaurant", "WiFi", "Garden", "Bicycle Rental"],
        description: "Peaceful resort on Neil Island offering tranquility and natural beauty"
      },
      meals: ["Breakfast"],
      sightseeing: ["Bharatpur Beach", "Laxmanpur Beach"]
    },
    {
      day: "Day 5",
      title: "Neil → Port Blair | Natural Wonders & Sunset",
      description: "Explore Neil's famous Natural Rock Bridge (Howrah Bridge) before returning to Port Blair. End the day with a spectacular sunset at Chidiya Tapu, the southernmost tip of South Andaman.",
      activities: [
        "Visit Natural Rock Bridge at 8:30 AM",
        "Hotel checkout and ferry transfer",
        "Ferry to Port Blair at 11:30 AM (arrive 12:30 PM)",
        "Hotel check-in at 1:00 PM",
        "Visit Chidiya Tapu Sunset Point (3:30 PM - 7:00 PM)",
        "Bird watching and beach photography"
      ],
      hotel: {
        name: "Hotel Sentinel",
        location: "Port Blair",
        rating: 4,
        image: "/images/packages/honeymoon-5n6d/hotel-port-blair.jpg",
        amenities: ["Free WiFi", "Restaurant", "Room Service", "Air Conditioning"],
        description: "Comfortable hotel in Port Blair"
      },
      meals: ["Breakfast"],
      sightseeing: ["Natural Rock Bridge (Howrah Bridge)", "Chidiya Tapu Sunset Point"]
    },
    {
      day: "Day 6",
      title: "Ross Island + Shopping | Departure",
      description: "On your final day, explore the historical ruins of Ross Island before some last-minute shopping at Aberdeen Bazaar. Collect memories and souvenirs before your departure.",
      activities: [
        "Breakfast at hotel",
        "15-minute boat ride to Ross Island at 9:00 AM",
        "Explore ruins, deer, peacocks, ocean pathways",
        "Return to city by 1:00 PM",
        "Shopping at Aberdeen Bazaar (4:00 PM - 8:00 PM)",
        "Buy pearls, handicrafts, shell items, souvenirs",
        "Visit Anthropological Museum (if time permits)",
        "Hotel checkout and airport transfer for departure"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Ross Island (Netaji Subhash Chandra Bose Island)", "Aberdeen Bazaar", "Anthropological Museum"]
    }
  ],
  itineraries: {
    5: [
      {
        day: "Day 1",
        title: "Arrival – Port Blair | Heritage & Beaches",
        description: "Arrive at Veer Savarkar International Airport. Visit Cellular Jail and Corbyn's Cove Beach. Evening Light & Sound Show.",
        activities: [
          "Airport pickup by private vehicle",
          "Check-in to hotel with welcome drink",
          "Visit Cellular Jail National Memorial",
          "Relax at Corbyn's Cove Beach",
          "Attend Light & Sound Show",
          "Romantic dinner at hotel"
        ],
        hotel: {
          name: "Hotel Sentinel",
          location: "Port Blair",
          rating: 4,
          image: "/images/packages/honeymoon-5n6d/hotel-port-blair.jpg",
          amenities: ["Free WiFi", "Restaurant", "Room Service", "Air Conditioning", "Honeymoon Suite"],
          description: "Comfortable hotel in Port Blair"
        },
        meals: ["Breakfast"],
        sightseeing: ["Cellular Jail", "Corbyn's Cove Beach"]
      },
      {
        day: "Day 2",
        title: "Port Blair → Havelock Island",
        description: "Ferry to Havelock. Visit Radhanagar Beach for sunset.",
        activities: [
          "Private ferry transfer to Havelock",
          "Check-in to beach resort",
          "Relax at resort",
          "Visit Radhanagar Beach (Beach No. 7)",
          "Sunset photography session",
          "Candlelight dinner at resort"
        ],
        hotel: {
          name: "Havelock Island Beach Resort",
          location: "Havelock Island",
          rating: 4,
          image: "/images/packages/honeymoon-5n6d/hotel-havelock.jpg",
          amenities: ["Beachfront", "Restaurant", "Water Sports Desk", "WiFi"],
          description: "Beautiful beachfront resort"
        },
        meals: ["Breakfast"],
        sightseeing: ["Radhanagar Beach"]
      },
      {
        day: "Day 3",
        title: "Havelock → Neil Island",
        description: "Morning Elephant Beach trip. Afternoon ferry to Neil Island. Sunset at Laxmanpur Beach.",
        activities: [
          "Early morning trip to Elephant Beach",
          "Complimentary Snorkeling session",
          "Return to Havelock jetty",
          "Ferry to Neil Island",
          "Check-in to Neil resort",
          "Laxmanpur Beach sunset"
        ],
        hotel: {
          name: "Neil Island Beach Resort",
          location: "Neil Island",
          rating: 3,
          image: "/images/packages/honeymoon-5n6d/hotel-neil.jpg",
          amenities: ["Beach Access", "Restaurant"],
          description: "Peaceful resort on Neil Island"
        },
        meals: ["Breakfast"],
        sightseeing: ["Elephant Beach", "Laxmanpur Beach"]
      },
      {
        day: "Day 4",
        title: "Neil → Port Blair",
        description: "Visit Natural Rock Bridge. Ferry back to Port Blair. Shopping in evening.",
        activities: [
          "Visit Natural Rock Bridge (Howrah Bridge)",
          "Ferry return to Port Blair",
          "Check-in to Port Blair hotel",
          "Shopping at Aberdeen Bazaar",
          "Sunset at Chidiya Tapu (if time permits)"
        ],
        hotel: {
          name: "Hotel Sentinel",
          location: "Port Blair",
          rating: 4,
          image: "/images/packages/honeymoon-5n6d/hotel-port-blair.jpg",
          amenities: ["Free WiFi", "Restaurant"],
          description: "Comfortable hotel in Port Blair"
        },
        meals: ["Breakfast"],
        sightseeing: ["Natural Rock Bridge", "Aberdeen Bazaar"]
      },
      {
        day: "Day 5",
        title: "Departure",
        description: "Transfer to airport for departure.",
        activities: [
          "Breakfast",
          "Checkout from hotel",
          "Private airport transfer",
          "Departure with sweet memories"
        ],
        meals: ["Breakfast"],
        sightseeing: []
      }
    ],
    6: [
      {
        day: "Day 1",
        title: "Arrival – Port Blair | Heritage & Beaches",
        description: "Arrive at Veer Savarkar International Airport and begin your romantic Andaman journey. After checking into your hotel, explore the historical Cellular Jail and relax at the beautiful Corbyn's Cove Beach. End the day with the mesmerizing Light & Sound Show that brings history to life.",
        activities: [
          "Airport pickup around 12:00 PM",
          "Hotel check-in at 12:30 PM",
          "After lunch visit Cellular Jail (2:00 PM)",
          "Corbyn's Cove Beach photography session",
          "Light & Sound Show at Cellular Jail (6:00 PM - 7:00 PM)"
        ],
        hotel: {
          name: "Hotel Sentinel",
          location: "Port Blair",
          rating: 4,
          image: "/images/packages/honeymoon-5n6d/hotel-port-blair.jpg",
          amenities: ["Free WiFi", "Restaurant", "Room Service", "Air Conditioning", "Honeymoon Suite"],
          description: "Comfortable hotel in Port Blair with modern amenities and honeymoon-friendly rooms"
        },
        meals: ["Breakfast"],
        sightseeing: ["Cellular Jail", "Corbyn's Cove Beach", "Light & Sound Show"]
      },
      {
        day: "Day 2",
        title: "Port Blair → Havelock Island | Beach Paradise",
        description: "Take a scenic ferry ride to the stunning Havelock Island, home to some of Asia's best beaches. Visit the unique Kalapathar Beach and the world-famous Radhanagar Beach for a magical sunset experience.",
        activities: [
          "Hotel check-out at 8:00 AM",
          "Private Ferry departure at 8:45 AM",
          "Arrive Havelock at 10:15 AM",
          "Resort check-in at 11:00 AM",
          "Visit Kalapathar Beach (12:00 PM - 2:30 PM) with lunch",
          "Visit Radhanagar Beach for sunset (3:45 PM onwards)",
          "Romantic beach walk and photography"
        ],
        hotel: {
          name: "Havelock Island Beach Resort",
          location: "Havelock Island",
          rating: 4,
          image: "/images/packages/honeymoon-5n6d/hotel-havelock.jpg",
          amenities: ["Beachfront", "Restaurant", "Water Sports Desk", "WiFi", "Honeymoon Package"],
          description: "Beautiful beachfront resort on Havelock with direct beach access"
        },
        meals: ["Breakfast"],
        sightseeing: ["Kalapathar Beach", "Radhanagar Beach (Beach No. 7)"]
      },
      {
        day: "Day 3",
        title: "Havelock Adventure | Scuba Diving + Elephant Beach",
        description: "Experience the underwater world with professional scuba diving including photos and videos. Then head to Elephant Beach for complimentary snorkeling and optional water sports activities.",
        activities: [
          "Scuba Diving - Early morning scuba diving session at 5:30 AM",
          "Snorkeling - Complimentary snorkeling at Elephant Beach",
          "Jetski - High-speed jetski rides (optional)",
          "Parasailing - Soar above the ocean (optional)",
          "Banana Ride - Fun group activity (optional)",
          "Glass Bottom Boat - View coral without getting wet (optional)",
          "Sea Walk - Walk underwater with helmet (optional)"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Scuba Diving Site", "Elephant Beach", "Coral Reefs"]
      },
      {
        day: "Day 4",
        title: "Havelock → Neil Island | Tranquil Beaches",
        description: "Transfer to the peaceful Neil Island, known for its serene atmosphere. Explore Bharatpur Beach with optional water sports and witness a stunning sunset at Laxmanpur Beach.",
        activities: [
          "Hotel check-out at 9:00 AM",
          "Ferry to Neil Island at 10:00 AM",
          "Arrive Neil at 11:00 AM, check-in at 12:00 PM",
          "Visit Bharatpur Beach for swimming (2:00 PM)",
          "Optional water sports at Bharatpur",
          "Visit Laxmanpur Beach for sunset (till 5:30 PM)",
          "Romantic beach evening"
        ],
        hotel: {
          name: "Neil Island Beach Resort",
          location: "Neil Island",
          rating: 3,
          image: "/images/packages/honeymoon-5n6d/hotel-neil.jpg",
          amenities: ["Beach Access", "Restaurant", "WiFi", "Garden", "Bicycle Rental"],
          description: "Peaceful resort on Neil Island offering tranquility and natural beauty"
        },
        meals: ["Breakfast"],
        sightseeing: ["Bharatpur Beach", "Laxmanpur Beach"]
      },
      {
        day: "Day 5",
        title: "Neil → Port Blair | Natural Wonders & Sunset",
        description: "Explore Neil's famous Natural Rock Bridge (Howrah Bridge) before returning to Port Blair. End the day with a spectacular sunset at Chidiya Tapu, the southernmost tip of South Andaman.",
        activities: [
          "Visit Natural Rock Bridge at 8:30 AM",
          "Hotel checkout and ferry transfer",
          "Ferry to Port Blair at 11:30 AM (arrive 12:30 PM)",
          "Hotel check-in at 1:00 PM",
          "Visit Chidiya Tapu Sunset Point (3:30 PM - 7:00 PM)",
          "Bird watching and beach photography"
        ],
        hotel: {
          name: "Hotel Sentinel",
          location: "Port Blair",
          rating: 4,
          image: "/images/packages/honeymoon-5n6d/hotel-port-blair.jpg",
          amenities: ["Free WiFi", "Restaurant", "Room Service", "Air Conditioning"],
          description: "Comfortable hotel in Port Blair"
        },
        meals: ["Breakfast"],
        sightseeing: ["Natural Rock Bridge (Howrah Bridge)", "Chidiya Tapu Sunset Point"]
      },
      {
        day: "Day 6",
        title: "Ross Island + Shopping | Departure",
        description: "On your final day, explore the historical ruins of Ross Island before some last-minute shopping at Aberdeen Bazaar. Collect memories and souvenirs before your departure.",
        activities: [
          "Breakfast at hotel",
          "15-minute boat ride to Ross Island at 9:00 AM",
          "Explore ruins, deer, peacocks, ocean pathways",
          "Return to city by 1:00 PM",
          "Shopping at Aberdeen Bazaar (4:00 PM - 8:00 PM)",
          "Buy pearls, handicrafts, shell items, souvenirs",
          "Visit Anthropological Museum (if time permits)",
          "Hotel checkout and airport transfer for departure"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Ross Island (Netaji Subhash Chandra Bose Island)", "Aberdeen Bazaar", "Anthropological Museum"]
      }
    ],
    7: [
      {
        day: "Day 1",
        title: "Arrival – Port Blair",
        description: "Arrive at Port Blair. Visit Cellular Jail and Light & Sound Show.",
        activities: [
          "Airport Pickup with floral welcome",
          "Check-in to Honeymoon Suite",
          "Visit Cellular Jail",
          "Light & Sound Show",
          "Romantic Dinner"
        ],
        hotel: {
          name: "Hotel Sentinel",
          location: "Port Blair",
          rating: 4,
          image: "/images/packages/honeymoon-5n6d/hotel-port-blair.jpg",
          amenities: ["Free WiFi", "Restaurant", "Honeymoon Suite"],
          description: "Comfortable hotel in Port Blair"
        },
        meals: ["Breakfast"],
        sightseeing: ["Cellular Jail", "Light & Sound Show"]
      },
      {
        day: "Day 2",
        title: "Port Blair → Havelock Island",
        description: "Ferry to Havelock. Visit Radhanagar Beach.",
        activities: [
          "Transfer to Jetty",
          "Ferry to Havelock Island",
          "Check-in to Resort",
          "Visit Radhanagar Beach for sunset",
          "Candlelight Dinner"
        ],
        hotel: {
          name: "Havelock Island Beach Resort",
          location: "Havelock Island",
          rating: 4,
          image: "/images/packages/honeymoon-5n6d/hotel-havelock.jpg",
          amenities: ["Beachfront", "Restaurant"],
          description: "Beautiful beachfront resort"
        },
        meals: ["Breakfast"],
        sightseeing: ["Radhanagar Beach"]
      },
      {
        day: "Day 3",
        title: "Havelock - Scuba & Leisure",
        description: "Morning Scuba Diving optional. Leisure afternoon at resort.",
        activities: [
          "Scuba Diving Session (Optional)",
          "Leisure time at Private Beach",
          "Resort activities",
          "Dinner"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Scuba Diving Site"]
      },
      {
        day: "Day 4",
        title: "Havelock - Elephant Beach",
        description: "Visit Elephant Beach for water sports.",
        activities: [
          "Trip to Elephant Beach",
          "Snorkeling Session",
          "Glass bottom boat",
          "Water sports (Jetski, etc.)",
          "Return to resort"
        ],
        meals: ["Breakfast"],
        sightseeing: ["Elephant Beach"]
      },
      {
        day: "Day 5",
        title: "Havelock → Neil Island",
        description: "Ferry to Neil Island. Visit Laxmanpur Beach.",
        activities: [
          "Ferry to Neil Island",
          "Check-in to Neil Resort",
          "Bharatpur Beach visit",
          "Laxmanpur Beach Sunset",
          "Romantic beach walk"
        ],
        hotel: {
          name: "Neil Island Beach Resort",
          location: "Neil Island",
          rating: 3,
          image: "/images/packages/honeymoon-5n6d/hotel-neil.jpg",
          amenities: ["Beach Access", "Restaurant"],
          description: "Peaceful resort on Neil Island"
        },
        meals: ["Breakfast"],
        sightseeing: ["Laxmanpur Beach"]
      },
      {
        day: "Day 6",
        title: "Neil → Port Blair",
        description: "Visit Natural Bridge. Ferry to Port Blair. Chidiya Tapu Sunset.",
        activities: [
          "Visit Natural Rock Bridge",
          "Ferry to Port Blair",
          "Shopping at Aberdeen Bazaar",
          "Chidiya Tapu Sunset",
          "Farewell Dinner"
        ],
        hotel: {
          name: "Hotel Sentinel",
          location: "Port Blair",
          rating: 4,
          image: "/images/packages/honeymoon-5n6d/hotel-port-blair.jpg",
          amenities: ["Free WiFi", "Restaurant"],
          description: "Comfortable hotel in Port Blair"
        },
        meals: ["Breakfast"],
        sightseeing: ["Natural Bridge", "Chidiya Tapu"]
      },
      {
        day: "Day 7",
        title: "Departure",
        description: "Transfer to airport.",
        activities: [
          "Breakfast",
          "Checkout",
          "Airport Transfer"
        ],
        meals: ["Breakfast"],
        sightseeing: []
      }
    ]
  },
  highlights: [
    {
      title: "Professional Scuba Diving",
      description: "Certified instructors, complete equipment, underwater photos & videos included",
      image: "/images/packages/honeymoon-5n6d/highlight-scuba.jpg"
    },
    {
      title: "Elephant Beach Adventures",
      description: "Speedboat ride, complimentary snorkeling, optional water sports paradise",
      image: "/images/packages/honeymoon-5n6d/highlight-elephant-beach.jpg"
    },
    {
      title: "Romantic Beach Sunsets",
      description: "Radhanagar Beach, Laxmanpur Beach, and Chidiya Tapu sunsets",
      image: "/images/packages/honeymoon-5n6d/highlight-sunset.jpg"
    },
    {
      title: "Island Hopping Experience",
      description: "Explore Port Blair, Havelock, and Neil Islands with perfect timing",
      image: "/images/packages/honeymoon-5n6d/highlight-island.jpg"
    }
  ],
  terms: commonTerms,
  paymentPolicy: commonPaymentPolicy,
  tips: commonTips,
  pricingOptions: [
    {
      days: 5,
      pricePerPerson: 38999,
      title: "5 Days Express Honeymoon"
    },
    {
      days: 6,
      pricePerPerson: 46999,
      title: "6 Days Time Mapped Honeymoon"
    },
    {
      days: 7,
      pricePerPerson: 54999,
      title: "7 Days Grand Honeymoon"
    }
  ],
  hotels: [
    {
      name: "Hotel Sentinel",
      location: "Port Blair",
      rating: 4,
      image: "/images/packages/honeymoon-5n6d/hotel-port-blair.jpg",
      amenities: ["Free WiFi", "Restaurant", "Room Service", "Air Conditioning", "Laundry", "Travel Desk"],
      description: "Comfortable hotel in the heart of Port Blair with modern amenities and easy access to major attractions.",
      starCategory: 4,
      images: [
        "/images/packages/honeymoon-5n6d/hotel-port-blair-1.jpg",
        "/images/packages/honeymoon-5n6d/hotel-port-blair-2.jpg",
        "/images/packages/honeymoon-5n6d/hotel-port-blair-3.jpg"
      ],
      roomTypes: [
        {
          name: "Standard",
          pricePerNight: 2000,
          description: "Comfortable AC room with city view, TV, and modern bathroom",
          maxOccupancy: 2
        },
        {
          name: "Deluxe",
          pricePerNight: 3500,
          description: "Spacious room with partial sea view, balcony, and premium amenities",
          maxOccupancy: 2
        },
        {
          name: "Honeymoon Suite",
          pricePerNight: 5000,
          description: "Romantic suite with sea view, flower decoration, and special amenities",
          maxOccupancy: 2
        }
      ]
    },
    {
      name: "Havelock Island Beach Resort",
      location: "Havelock Island",
      rating: 4,
      image: "/images/packages/honeymoon-5n6d/hotel-havelock.jpg",
      amenities: ["Beachfront", "Restaurant", "Water Sports Desk", "WiFi", "Room Service", "Beach Activities"],
      description: "Beautiful beachfront resort on Havelock Island with direct beach access and water sports facilities.",
      starCategory: 4,
      images: [
        "/images/packages/honeymoon-5n6d/hotel-havelock-1.jpg",
        "/images/packages/honeymoon-5n6d/hotel-havelock-2.jpg",
        "/images/packages/honeymoon-5n6d/hotel-havelock-3.jpg"
      ],
      roomTypes: [
        {
          name: "Garden View",
          pricePerNight: 3500,
          description: "Cozy room with garden view and beach access",
          maxOccupancy: 2
        },
        {
          name: "Beach View Deluxe",
          pricePerNight: 5000,
          description: "Beachfront room with direct sea view and private balcony",
          maxOccupancy: 2
        },
        {
          name: "Honeymoon Cottage",
          pricePerNight: 7000,
          description: "Private cottage steps from beach with romantic setup",
          maxOccupancy: 2
        }
      ]
    },
    {
      name: "Neil Island Beach Resort",
      location: "Neil Island",
      rating: 3,
      image: "/images/packages/honeymoon-5n6d/hotel-neil.jpg",
      amenities: ["Beach Access", "Restaurant", "WiFi", "Garden", "Bicycle Rental", "Room Service"],
      description: "Peaceful resort on Neil Island offering tranquility and natural beauty with easy beach access.",
      starCategory: 3,
      images: [
        "/images/packages/honeymoon-5n6d/hotel-neil-1.jpg",
        "/images/packages/honeymoon-5n6d/hotel-neil-2.jpg",
        "/images/packages/honeymoon-5n6d/hotel-neil-3.jpg"
      ],
      roomTypes: [
        {
          name: "Standard",
          pricePerNight: 1800,
          description: "Comfortable room with garden view and basic amenities",
          maxOccupancy: 2
        },
        {
          name: "Deluxe",
          pricePerNight: 2800,
          description: "Spacious room near beach with modern amenities",
          maxOccupancy: 2
        }
      ]
    }
  ],
  supplements: [
    {
      name: "Candlelight Dinner on Beach",
      price: 5000,
      description: "Romantic beachside dinner with candles, floral decorations, private setup, and personalized service",
      availability: ["Havelock Island"]
    },
    {
      name: "Flower Bed Decoration",
      price: 2000,
      description: "Romantic rose petal decoration in room with candles and special lighting",
      availability: ["All Hotels"]
    },
    {
      name: "Professional Couple Photoshoot",
      price: 8000,
      description: "Full day professional photographer for couple moments at various scenic locations",
      availability: ["All Locations"]
    },
    {
      name: "Cake & Champagne",
      price: 3000,
      description: "Special celebration cake (1kg) and champagne bottle with room delivery",
      availability: ["All Hotels"]
    },
    {
      name: "Sunset Cruise",
      price: 4500,
      description: "Private sunset cruise with refreshments and romantic setup (2 hours)",
      availability: ["Port Blair"]
    }
  ],
  pickupLocations: [
    "Veer Savarkar International Airport, Port Blair",
    "Port Blair City Hotels",
    "Port Blair Jetty",
    "Custom pickup location in Port Blair"
  ],
  cancellationPolicy: commonCancellationPolicy,
  slug: "5n6d-andaman-time-mapped-honeymoon"
};

