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
      title: "Family Arrival",
      description: "Arrive and explore Port Blair beaches.",
      activities: [
        "Family airport pickup",
        "Hotel check-in",
        "Corbyn's Cove Beach play",
        "Cellular Jail Light & Sound Show"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Corbyn's Cove", "Cellular Jail"]
    },
    {
      day: "Day 2",
      title: "Havelock Island Fun",
      description: "Ferry to Havelock and beach activities.",
      activities: [
        "Ferry ride to Havelock",
        "Beach resort check-in",
        "Radhanagar Beach family time",
        "Sandcastle building competition"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Radhanagar Beach"]
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
    { days: 5, pricePerPerson: 22000, title: "5 Days Family Fun (Adult)" },
    { days: 5, pricePerPerson: 15000, title: "Child Rate (5-12 years)" }
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
  slug: "family-fun-4n5d-quick-getaway"
};
