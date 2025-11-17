import { Package } from '../packages';

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
    "Daily gourmet breakfast and dinner",
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
      title: "Luxury Arrival",
      description: "VIP arrival and resort relaxation.",
      activities: [
        "VIP airport pickup",
        "5-star resort check-in",
        "Welcome spa session",
        "Sunset cocktails"
      ],
      meals: ["Welcome Drinks", "Dinner"],
      sightseeing: ["Resort Beach"]
    },
    {
      day: "Day 2",
      title: "Port Blair Heritage",
      description: "Private city tour and cultural exploration.",
      activities: [
        "Private Cellular Jail tour",
        "Premium Light & Sound Show",
        "Gourmet lunch",
        "Corbyn's Cove Beach"
      ],
      meals: ["Breakfast", "Lunch", "Dinner"],
      sightseeing: ["Cellular Jail", "Corbyn's Cove"]
    },
    {
      day: "Day 3",
      title: "Havelock Luxury",
      description: "Premium ferry and Radhanagar Beach experience.",
      activities: [
        "Private ferry to Havelock",
        "Luxury villa check-in",
        "Radhanagar Beach visit",
        "Candlelight dinner on beach"
      ],
      meals: ["Breakfast", "Candlelight Dinner"],
      sightseeing: ["Radhanagar Beach"]
    },
    {
      day: "Day 4",
      title: "Premium Water Activities",
      description: "Exclusive scuba diving and beach experiences.",
      activities: [
        "Scuba Diving - Premium dive with videography",
        "Private Elephant Beach experience",
        "Snorkeling - Premium equipment",
        "Champagne on beach"
      ],
      meals: ["Breakfast", "Lunch", "Dinner"],
      sightseeing: ["Scuba Site", "Elephant Beach"]
    },
    {
      day: "Day 5",
      title: "Departure",
      description: "Leisurely morning and VIP departure.",
      activities: [
        "Leisurely breakfast",
        "Pool time",
        "Private transfer to airport"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Resort"]
    }
  ],
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
  terms: [
    "50% advance payment required",
    "Luxury suite subject to availability",
    "All activities weather dependent"
  ],
  pricingOptions: [
    { days: 5, pricePerPerson: 65000, title: "5 Days Luxury Experience" }
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
  cancellationPolicy: [
    "Free cancellation up to 15 days",
    "50% charge within 15 days"
  ],
  slug: "luxury-escape-4n5d-premium"
};
