export interface Package {
  title: string;
  description: string;
  longDescription: string;
  price: number;
  duration: string;
  groupSize: string;
  image: string;
  features: string[];
  includes: string[];
  excludes: string[];
  itinerary: {
    day: string;
    title: string;
    description: string;
    activities: string[];
  }[];
  highlights: {
    title: string;
    description: string;
    image: string;
  }[];
  terms: string[];
  slug: string;
}

export const packages: Package[] = [
  {
    title: "Luxury Island Escape",
    description: "5 nights of pure luxury at Havelock's finest resorts",
    longDescription: "Indulge in the ultimate luxury experience in the Andaman Islands. Stay at premium beachfront resorts, enjoy private beach access, and experience world-class hospitality with personalized service.",
    price: 125000,
    duration: "6 days",
    groupSize: "2-4",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: ["All-inclusive", "Private beach access", "Spa treatments", "Gourmet dining", "Luxury transfers"],
    includes: [
      "5 nights luxury accommodation",
      "All meals and beverages",
      "Private beach access",
      "Daily spa treatments",
      "Airport transfers",
      "Island tours"
    ],
    excludes: [
      "Flights",
      "Personal expenses",
      "Additional activities",
      "Travel insurance"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Relaxation",
        description: "Arrive in style with luxury transfer to your beachfront resort. Enjoy welcome drinks and spa treatment.",
        activities: ["Welcome ceremony", "Spa session", "Sunset cocktails"]
      },
      {
        day: "Day 2",
        title: "Beach & Wellness",
        description: "Start your day with yoga, followed by beach activities and gourmet experiences.",
        activities: ["Morning yoga", "Beach picnic", "Gourmet dinner"]
      }
    ],
    highlights: [
      {
        title: "Luxury Accommodation",
        description: "Stay in premium beachfront villas",
        image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Gourmet Dining",
        description: "Experience world-class cuisine",
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    terms: [
      "50% advance payment required",
      "Free cancellation up to 7 days before arrival",
      "Check-in: 2 PM, Check-out: 12 PM",
      "All activities subject to weather conditions"
    ],
    slug: "luxury-island-escape"
  },
  {
    title: "Adventure Seeker",
    description: "Discover the underwater wonders of the Andamans",
    longDescription: "An action-packed adventure featuring scuba diving, snorkeling, and island exploration. Perfect for thrill-seekers looking to discover the marine wonders of the Andaman Islands.",
    price: 85000,
    duration: "4 days",
    groupSize: "1-2",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: ["Scuba diving", "Snorkeling", "Island hopping", "Equipment rental", "Expert guides"],
    includes: [
      "3 nights accommodation",
      "All diving equipment",
      "Professional instructors",
      "Meals during activities",
      "Transport to dive sites"
    ],
    excludes: [
      "Flights",
      "Evening meals",
      "Personal gear",
      "Insurance"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Introduction to Diving",
        description: "Basic training and first dive experience with certified instructors.",
        activities: ["Safety briefing", "Equipment familiarization", "Pool session"]
      },
      {
        day: "Day 2",
        title: "Ocean Adventure",
        description: "Full day of diving at premium spots with marine life.",
        activities: ["Two dive sessions", "Marine life spotting", "Underwater photography"]
      }
    ],
    highlights: [
      {
        title: "Dive Sites",
        description: "Explore pristine coral reefs",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Marine Life",
        description: "Encounter exotic sea creatures",
        image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    terms: [
      "Basic swimming skills required",
      "Medical clearance needed",
      "Weather dependent activities",
      "Age restriction: 10+ years"
    ],
    slug: "adventure-seeker"
  },
  {
    title: "Family Paradise",
    description: "Perfect getaway for the whole family",
    longDescription: "A carefully curated family vacation package with activities for all ages. Enjoy comfortable accommodations, kid-friendly activities, and memorable family experiences.",
    price: 150000,
    duration: "7 days",
    groupSize: "4-6",
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: ["Kid-friendly activities", "Family rooms", "Guided tours", "All meals", "Airport transfers"],
    includes: [
      "6 nights family accommodation",
      "All meals",
      "Family activities",
      "Kids club access",
      "Airport transfers"
    ],
    excludes: [
      "Flights",
      "Personal expenses",
      "Optional activities",
      "Travel insurance"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Family Welcome",
        description: "Arrive and settle into your family suite. Evening beach activities.",
        activities: ["Welcome gifts", "Beach games", "Family dinner"]
      },
      {
        day: "Day 2",
        title: "Island Adventure",
        description: "Family-friendly island exploration and water activities.",
        activities: ["Glass bottom boat", "Beach picnic", "Evening entertainment"]
      }
    ],
    highlights: [
      {
        title: "Family Activities",
        description: "Fun for all ages",
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Kids Club",
        description: "Supervised activities for children",
        image: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    terms: [
      "Child rates apply under 12 years",
      "Family rooms subject to availability",
      "Minimum 2 adults required",
      "Activities suitable for 4+ years"
    ],
    slug: "family-paradise"
  },
  {
    title: "Honeymoon Special",
    description: "Romantic escape for newlyweds",
    longDescription: "Create unforgettable memories with our specially curated honeymoon package. Enjoy romantic dinners, couple spa treatments, and intimate experiences in paradise.",
    price: 175000,
    duration: "8 days",
    groupSize: "2",
    image: "https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: ["Candlelit dinners", "Couple spa", "Private beach picnic", "Sunset cruise", "Photography session"],
    includes: [
      "7 nights luxury accommodation",
      "Romantic dinners",
      "Couple spa treatments",
      "Private beach experiences",
      "Photography session"
    ],
    excludes: [
      "Flights",
      "Personal expenses",
      "Additional activities",
      "Travel insurance"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Romantic Welcome",
        description: "Begin your honeymoon with champagne and spa treatment.",
        activities: ["Couple spa", "Champagne dinner", "Room decoration"]
      },
      {
        day: "Day 2",
        title: "Island Romance",
        description: "Private beach experience and sunset cruise.",
        activities: ["Beach picnic", "Sunset cruise", "Starlit dinner"]
      }
    ],
    highlights: [
      {
        title: "Romantic Experiences",
        description: "Curated for couples",
        image: "https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Private Moments",
        description: "Intimate settings and experiences",
        image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    terms: [
      "Valid marriage certificate required",
      "Special requests available",
      "Activities subject to weather",
      "Advance booking recommended"
    ],
    slug: "honeymoon-special"
  }
];