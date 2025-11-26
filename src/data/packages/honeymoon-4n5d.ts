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
      title: "Arrival – Port Blair",
      description: "Arrive in Port Blair, check into hotel, and explore the historical Cellular Jail.",
      activities: [
        "Airport pickup",
        "Hotel check-in",
        "Visit Cellular Jail",
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
        "Beach resort check-in",
        "Visit Radhanagar Beach",
        "Sunset photography"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Radhanagar Beach"]
    },
    {
      day: "Day 3",
      title: "Elephant Beach Adventure",
      description: "Speedboat to Elephant Beach for snorkeling and water activities.",
      activities: [
        "Snorkeling - Complimentary snorkeling with equipment",
        "Glass Bottom Boat - View coral without swimming (optional)",
        "Banana Ride - Fun group activity (optional)",
        "Jetski - High-speed rides (optional)",
        "Parasailing - Aerial ocean views (optional)"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Elephant Beach", "Coral Reefs"]
    },
    {
      day: "Day 4",
      title: "Havelock → Port Blair",
      description: "Return to Port Blair, visit Ross Island and explore the city.",
      activities: [
        "Ferry to Port Blair",
        "Ross Island exploration",
        "City shopping at Aberdeen Bazaar"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Ross Island", "Aberdeen Bazaar"]
    },
    {
      day: "Day 5",
      title: "Departure",
      description: "Final morning in Port Blair before departure.",
      activities: [
        "Breakfast at hotel",
        "Last-minute shopping",
        "Airport transfer"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Shopping"]
    }
  ],
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
    { days: 5, pricePerPerson: 28000, title: "5 Days Quick Honeymoon" }
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
