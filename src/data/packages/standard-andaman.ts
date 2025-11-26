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
      title: "Arrival Port Blair",
      description: "Arrive and explore Port Blair's main attractions.",
      activities: [
        "Airport pickup",
        "Hotel check-in",
        "Corbyn's Cove Beach",
        "Cellular Jail Light & Sound Show"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Corbyn's Cove", "Cellular Jail"]
    },
    {
      day: "Day 2",
      title: "Port Blair → Havelock",
      description: "Ferry to Havelock and visit Radhanagar Beach.",
      activities: [
        "Ferry to Havelock",
        "Hotel check-in",
        "Radhanagar Beach visit",
        "Beach relaxation"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Radhanagar Beach"]
    },
    {
      day: "Day 3",
      title: "Elephant Beach Day",
      description: "Water activities at Elephant Beach.",
      activities: [
        "Snorkeling - Complimentary with equipment",
        "Glass Bottom Boat - See corals (optional)",
        "Banana Ride - Group fun activity (optional)",
        "Beach time and photography"
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
        "Visit Bharatpur Beach",
        "Laxmanpur Beach sunset"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Bharatpur Beach", "Laxmanpur Beach"]
    },
    {
      day: "Day 5",
      title: "Neil → Port Blair",
      description: "Natural Bridge and return to Port Blair.",
      activities: [
        "Natural Rock Bridge visit",
        "Ferry to Port Blair",
        "Ross Island tour",
        "Shopping time"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Natural Bridge", "Ross Island"]
    },
    {
      day: "Day 6",
      title: "Departure",
      description: "Final morning and departure.",
      activities: [
        "Breakfast",
        "Last-minute shopping",
        "Airport transfer"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Aberdeen Bazaar"]
    }
  ],
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
    { days: 6, pricePerPerson: 28500, title: "6 Days Standard Package" }
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
