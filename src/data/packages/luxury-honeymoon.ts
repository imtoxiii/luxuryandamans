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
    "Daily breakfast and dinner",
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
        "Luxury car pickup from airport",
        "Welcome drink and garland on arrival",
        "Check-in to 5-star hotel",
        "Relaxation and leisure time",
        "Private sunset trip to Chidiya Tapu",
        "Romantic dinner at hotel"
      ],
      hotel: {
        name: "Taj Exotica Resort & Spa",
        location: "Havelock Island",
        rating: 5,
        image: "/images/packages/luxury-honeymoon/hotel-taj.jpg",
        amenities: ["Private Beach", "Spa", "Infinity Pool", "Fine Dining", "Butler Service"],
        description: "World-class luxury resort with private villas and direct beach access"
      },
      meals: ["Dinner"],
      sightseeing: ["Chidiya Tapu Sunset"]
    },
    {
      day: "Day 2",
      title: "Port Blair to Havelock - Villa Experience",
      description: "Private cruise to Havelock. Check into your private pool villa. Evening romantic beach walk.",
      activities: [
        "Breakfast at hotel",
        "Private transfer to jetty",
        "Luxury cruise to Havelock (Royal Class)",
        "Check-in to Private Pool Villa",
        "Flower bed decoration in room",
        "Leisure time in private pool",
        "Beachside candlelight dinner"
      ],
      hotel: {
        name: "Taj Exotica Resort & Spa",
        location: "Havelock Island",
        rating: 5,
        image: "/images/packages/luxury-honeymoon/hotel-taj.jpg",
        amenities: ["Private Pool Villa", "Spa", "Beach Access", "Fine Dining"],
        description: "Luxury villa with private pool"
      },
      meals: ["Breakfast", "Dinner"],
      sightseeing: ["Radhanagar Beach"]
    },
    {
      day: "Day 3",
      title: "Radhanagar Beach & Photoshoot",
      description: "Visit the world-famous Radhanagar Beach. Professional couple photoshoot session at sunset.",
      activities: [
        "Breakfast in bed (optional)",
        "Visit Radhanagar Beach",
        "Private picnic lunch setup",
        "Professional couple photoshoot (2 hours)",
        "Sunset viewing",
        "Return to villa"
      ],
      meals: ["Breakfast", "Dinner"],
      sightseeing: ["Radhanagar Beach", "Photoshoot Locations"]
    },
    {
      day: "Day 4",
      title: "Elephant Beach & Spa",
      description: "Private speedboat to Elephant Beach for snorkeling. Afternoon couple spa session.",
      activities: [
        "Private speedboat to Elephant Beach",
        "Guided snorkeling experience",
        "Sea walk (optional)",
        "Return to resort",
        "Couple Spa Therapy (60 mins)",
        "Relaxation time"
      ],
      meals: ["Breakfast", "Dinner"],
      sightseeing: ["Elephant Beach"]
    },
    {
      day: "Day 5",
      title: "Havelock to Neil Island",
      description: "Cruise to Neil Island. Stay at a luxury resort. Visit Laxmanpur Beach for sunset.",
      activities: [
        "Breakfast and checkout",
        "Cruise to Neil Island",
        "Check-in to luxury resort",
        "Visit Laxmanpur Beach",
        "Sunset view at Natural Bridge",
        "Dinner at resort"
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
        "Breakfast and checkout",
        "Cruise to Port Blair",
        "Check-in to hotel",
        "Shopping at Sagarika Emporium",
        "Farewell dinner with live music"
      ],
      hotel: {
        name: "Welcomhotel by ITC",
        location: "Port Blair",
        rating: 5,
        image: "/images/packages/luxury-honeymoon/hotel-itc.jpg",
        amenities: ["Sea View", "Spa", "Pool", "Fine Dining"],
        description: "Luxury hotel overlooking the bay"
      },
      meals: ["Breakfast", "Dinner"],
      sightseeing: ["Shopping", "City Tour"]
    },
    {
      day: "Day 7",
      title: "Departure",
      description: "Private transfer to airport with sweet memories.",
      activities: [
        "Breakfast",
        "Checkout",
        "Gift hamper from Luxury Andamans",
        "Airport drop"
      ],
      meals: ["Breakfast"],
      sightseeing: []
    }
  ],
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
    { days: 7, pricePerPerson: 85000, title: "7 Days Luxury Honeymoon" }
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
  slug: "luxury-honeymoon-bliss-7-days"
};
