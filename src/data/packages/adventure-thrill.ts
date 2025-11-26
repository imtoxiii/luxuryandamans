import { Package } from '../packages';
import { commonPaymentPolicy, commonTips, commonCancellationPolicy, commonTerms } from '../commonPolicies';

export const adventureThrill: Package = {
  title: "Andaman Adventure Thrill - 6 Days",
  description: "Action-packed itinerary with scuba diving, sea walk, trekking, and water sports",
  longDescription: "Get your adrenaline pumping with our 6-day Adventure Thrill package. This tour is designed for adventure enthusiasts and includes the best water sports and outdoor activities Andaman has to offer. Dive into the deep blue with scuba diving, walk on the sea bed, kayak through mangroves at night, and trek to hidden beaches. Experience the thrill of the islands while staying in comfortable accommodations.",
  price: 42000,
  duration: "6 days",
  groupSize: "2-8",
  image: "/images/packages/adventure-thrill/hero.jpg",
  features: [
    "Scuba Diving Included",
    "Sea Walk Experience",
    "Night Kayaking",
    "Jungle Trekking",
    "Jet Ski & Parasailing",
    "Adventure Guide"
  ],
  includes: [
    "5 nights accommodation in adventure-friendly resorts",
    "Daily breakfast",
    "All ferry transfers",
    "Scuba Diving at Havelock (Shore Dive)",
    "Sea Walk at Elephant Beach",
    "Night Kayaking in mangroves",
    "Trek to Elephant Beach (Guided)",
    "Parasailing session",
    "Jet Ski ride",
    "All equipment and safety gear",
    "Certified instructors for all activities",
    "GoPro footage for Scuba and Sea Walk",
    "Airport transfers"
  ],
  excludes: [
    "Airfare",
    "Lunch and dinner",
    "Personal expenses",
    "Additional water sports",
    "Travel insurance (Recommended)",
    "Medical expenses"
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival & Corbyn's Cove Jet Ski",
      description: "Arrival in Port Blair. Afternoon Jet Ski and speed boat ride at Corbyn's Cove Beach.",
      activities: [
        "Airport pickup",
        "Check-in to hotel",
        "Corbyn's Cove Beach visit",
        "Jet Ski ride",
        "Speed boat ride",
        "Cellular Jail Light & Sound Show"
      ],
      hotel: {
        name: "Lemon Tree Hotel",
        location: "Port Blair",
        rating: 4,
        image: "/images/packages/adventure-thrill/hotel-port-blair.jpg",
        amenities: ["Pool", "Gym", "Bar", "WiFi"],
        description: "Modern hotel near airport"
      },
      meals: ["Dinner"],
      sightseeing: ["Corbyn's Cove", "Cellular Jail"]
    },
    {
      day: "Day 2",
      title: "Havelock & Scuba Diving",
      description: "Ferry to Havelock. Introduction to Scuba Diving and shore dive experience.",
      activities: [
        "Ferry to Havelock",
        "Check-in to resort",
        "Scuba Diving briefing",
        "Shore Dive with instructor (45 mins)",
        "Underwater photography",
        "Evening leisure"
      ],
      hotel: {
        name: "Symphony Palms",
        location: "Havelock Island",
        rating: 4,
        image: "/images/packages/adventure-thrill/hotel-havelock.jpg",
        amenities: ["Private Beach", "Dive Center", "Bar"],
        description: "Beach resort with in-house dive center"
      },
      meals: ["Breakfast"],
      sightseeing: ["Dive Site"]
    },
    {
      day: "Day 3",
      title: "Elephant Beach Trek & Sea Walk",
      description: "Guided jungle trek to Elephant Beach followed by Sea Walk experience.",
      activities: [
        "Jungle trek to Elephant Beach (45 mins)",
        "Sea Walk experience",
        "Snorkeling",
        "Parasailing",
        "Boat ride return"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Elephant Beach", "Jungle Trail"]
    },
    {
      day: "Day 4",
      title: "Havelock to Neil - Night Kayaking",
      description: "Transfer to Neil Island. Evening Night Kayaking to see bioluminescence (seasonal).",
      activities: [
        "Ferry to Neil Island",
        "Check-in to resort",
        "Bharatpur Beach visit",
        "Night Kayaking in mangroves",
        "Star gazing"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Mangroves", "Bharatpur Beach"]
    },
    {
      day: "Day 5",
      title: "Neil to Port Blair - Chidiya Tapu Trek",
      description: "Return to Port Blair. Sunset trek to Munda Pahad at Chidiya Tapu.",
      activities: [
        "Ferry to Port Blair",
        "Check-in to hotel",
        "Drive to Chidiya Tapu",
        "Trek to Munda Pahad (Black Mountain)",
        "Sunset view from cliff",
        "Return to hotel"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Chidiya Tapu", "Munda Pahad"]
    },
    {
      day: "Day 6",
      title: "Departure",
      description: "Transfer to airport for departure.",
      activities: [
        "Breakfast",
        "Checkout",
        "Airport drop"
      ],
      meals: ["Breakfast"],
      sightseeing: []
    }
  ],
  highlights: [
    {
      title: "Scuba Diving",
      description: "Explore the vibrant coral reefs with certified instructors",
      image: "/images/packages/adventure-thrill/highlight-scuba.jpg"
    },
    {
      title: "Sea Walk",
      description: "Walk on the ocean floor surrounded by fish",
      image: "/images/packages/adventure-thrill/highlight-seawalk.jpg"
    },
    {
      title: "Night Kayaking",
      description: "Paddle through mangroves under the stars",
      image: "/images/packages/adventure-thrill/highlight-kayak.jpg"
    }
  ],
  terms: commonTerms,
  paymentPolicy: commonPaymentPolicy,
  tips: commonTips,
  pricingOptions: [
    { days: 6, pricePerPerson: 42000, title: "6 Days Adventure Thrill" }
  ],
  hotels: [
    {
      name: "Symphony Palms",
      location: "Havelock",
      rating: 4,
      image: "/images/packages/adventure-thrill/hotel-havelock.jpg",
      amenities: ["Dive Center", "Beach Bar"],
      description: "Adventure resort",
      starCategory: 4,
      roomTypes: [
        { name: "Cottage", pricePerNight: 5500, description: "Wooden cottage", maxOccupancy: 2 }
      ]
    }
  ],
  supplements: [
    {
      name: "Advanced Open Water Course",
      price: 25000,
      description: "PADI certification course upgrade",
      availability: ["Havelock"]
    },
    {
      name: "Game Fishing",
      price: 30000,
      description: "Half-day game fishing trip",
      availability: ["Havelock", "Port Blair"]
    }
  ],
  pickupLocations: ["Port Blair Airport"],
  cancellationPolicy: commonCancellationPolicy,
  slug: "andaman-adventure-thrill-6-days"
};
