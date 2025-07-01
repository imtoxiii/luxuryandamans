export interface Hotel {
  name: string;
  location: string;
  rating: number;
  image: string;
  amenities: string[];
  description: string;
}

export interface PricingOption {
  days: number;
  pricePerPerson: number;
  title: string;
}

export interface Supplement {
  name: string;
  price: number;
  description: string;
  availability: string[];
}

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
    hotel?: Hotel;
    meals: string[];
    sightseeing: string[];
  }[];
  highlights: {
    title: string;
    description: string;
    image: string;
  }[];
  terms: string[];
  pricingOptions: PricingOption[];
  hotels: Hotel[];
  supplements: Supplement[];
  pickupLocations: string[];
  cancellationPolicy: string[];
  slug: string;
}

export const packages: Package[] = [
  {
    title: "Luxury Island Escape",
    description: "5 nights of pure luxury at Havelock's finest resorts",
    longDescription: "Indulge in the ultimate luxury experience in the Andaman Islands. Stay at premium beachfront resorts, enjoy private beach access, and experience world-class hospitality with personalized service. This comprehensive package includes luxury accommodations, gourmet dining, spa treatments, and exclusive island experiences.",
    price: 45000,
    duration: "6 days",
    groupSize: "2-4",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: ["All-inclusive", "Private beach access", "Spa treatments", "Gourmet dining", "Luxury transfers"],
    includes: [
      "5 nights luxury accommodation",
      "Daily breakfast and dinner",
      "Airport transfers by private vehicle",
      "Ferry tickets (Port Blair to Havelock and back)",
      "Radhanagar Beach visit",
      "Elephant Beach with water sports",
      "Ross Island and North Bay tour",
      "Cellular Jail Light & Sound show",
      "All sightseeing by private vehicle",
      "Professional tour guide",
      "All entry tickets and permits"
    ],
    excludes: [
      "Airfare to/from Port Blair",
      "Lunch (except on tour days)",
      "Personal expenses and shopping",
      "Additional water sports",
      "Travel insurance",
      "Camera fees at monuments",
      "Tips and gratuities",
      "Any meals not mentioned in inclusions"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Port Blair",
        description: "Welcome to the pristine Andaman Islands! Upon arrival at Port Blair airport, our representative will greet you and transfer you to your hotel.",
        activities: ["Airport pickup", "Hotel check-in", "Leisure time", "Welcome briefing"],
        hotel: {
          name: "Hotel Sentinel",
          location: "Port Blair",
          rating: 4,
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          amenities: ["Free WiFi", "Restaurant", "Room Service", "Air Conditioning", "Laundry"],
          description: "Comfortable hotel in the heart of Port Blair with modern amenities"
        },
        meals: ["Dinner"],
        sightseeing: ["City orientation"]
      },
      {
        day: "Day 2",
        title: "Port Blair Sightseeing",
        description: "Explore the historical and cultural heritage of Port Blair with visits to iconic landmarks.",
        activities: ["Cellular Jail visit", "Light & Sound show", "Corbyn's Cove Beach", "Local markets"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        sightseeing: ["Cellular Jail", "Anthropological Museum", "Fisheries Museum", "Corbyn's Cove Beach"]
      },
      {
        day: "Day 3",
        title: "Ross Island & North Bay",
        description: "Discover the colonial ruins of Ross Island and enjoy water sports at North Bay Island.",
        activities: ["Ross Island exploration", "North Bay water sports", "Glass bottom boat ride", "Underwater sea walk"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        sightseeing: ["Ross Island ruins", "North Bay Island", "Water sports activities"]
      },
      {
        day: "Day 4",
        title: "Transfer to Havelock",
        description: "Travel to the beautiful Havelock Island and check into your beachfront resort.",
        activities: ["Ferry to Havelock", "Resort check-in", "Beach relaxation", "Sunset viewing"],
        hotel: {
          name: "Taj Exotica Resort & Spa",
          location: "Havelock Island",
          rating: 5,
          image: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          amenities: ["Private Beach", "Spa", "Swimming Pool", "Multiple Restaurants", "Water Sports"],
          description: "Luxury beachfront resort with world-class amenities and stunning ocean views"
        },
        meals: ["Breakfast", "Dinner"],
        sightseeing: ["Havelock Jetty", "Resort beach"]
      },
      {
        day: "Day 5",
        title: "Radhanagar Beach & Elephant Beach",
        description: "Visit the world-famous Radhanagar Beach and enjoy thrilling water sports at Elephant Beach.",
        activities: ["Radhanagar Beach visit", "Beach photography", "Elephant Beach water sports", "Snorkeling"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        sightseeing: ["Radhanagar Beach", "Elephant Beach", "Forest trekking", "Coral viewing"]
      },
      {
        day: "Day 6",
        title: "Departure",
        description: "Check out from resort and transfer back to Port Blair for your onward journey.",
        activities: ["Resort check-out", "Ferry to Port Blair", "Airport transfer", "Departure"],
        meals: ["Breakfast"],
        sightseeing: ["Scenic ferry ride", "Last minute shopping"]
      }
    ],
    highlights: [
      {
        title: "Luxury Accommodation",
        description: "Stay in premium beachfront villas with private balconies and ocean views",
        image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Gourmet Dining",
        description: "Experience world-class cuisine with fresh seafood and international dishes",
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Water Sports Paradise",
        description: "Enjoy snorkeling, sea walking, and other exciting water activities",
        image: "https://images.unsplash.com/photo-1583212292454-39d2a21af845?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Historical Exploration",
        description: "Discover the rich history at Cellular Jail and Ross Island",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    terms: [
      "50% advance payment required at time of booking",
      "Balance payment due 15 days before travel",
      "Free cancellation up to 15 days before travel",
      "25% cancellation charge if cancelled 7-14 days before travel",
      "50% cancellation charge if cancelled 3-6 days before travel",
      "No refund if cancelled within 2 days of travel",
      "Check-in: 2:00 PM, Check-out: 12:00 PM",
      "All activities subject to weather conditions and government permissions",
      "ID proof mandatory for all guests",
      "Children below 2 years complimentary, 2-12 years charged as child rate"
    ],
    pricingOptions: [
      { days: 4, pricePerPerson: 28000, title: "4 Days Port Blair Special" },
      { days: 5, pricePerPerson: 35000, title: "5 Days Island Hopping" },
      { days: 6, pricePerPerson: 45000, title: "6 Days Luxury Experience" },
      { days: 7, pricePerPerson: 52000, title: "7 Days Complete Andaman" },
      { days: 8, pricePerPerson: 58000, title: "8 Days Extended Paradise" }
    ],
    hotels: [
      {
        name: "Hotel Sentinel",
        location: "Port Blair",
        rating: 4,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        amenities: ["Free WiFi", "Restaurant", "Room Service", "Air Conditioning", "Laundry"],
        description: "Comfortable hotel in the heart of Port Blair with modern amenities and easy access to major attractions."
      },
      {
        name: "Taj Exotica Resort & Spa",
        location: "Havelock Island",
        rating: 5,
        image: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        amenities: ["Private Beach", "Spa", "Swimming Pool", "Multiple Restaurants", "Water Sports", "Butler Service"],
        description: "Ultra-luxury beachfront resort offering world-class amenities, pristine beaches, and exceptional service."
      }
    ],
    supplements: [
      {
        name: "Candle Light Dinner",
        price: 4500,
        description: "Romantic beachside dinner with candles, decorations, and live music",
        availability: ["Havelock Island"]
      },
      {
        name: "Scuba Diving (1 dive)",
        price: 3500,
        description: "Professional scuba diving experience with certified instructors",
        availability: ["Havelock Island", "Neil Island"]
      },
      {
        name: "Seaplane Transfer",
        price: 12000,
        description: "Scenic seaplane transfer between Port Blair and Havelock",
        availability: ["Port Blair to Havelock"]
      },
      {
        name: "Spa Treatment",
        price: 2500,
        description: "60-minute relaxing spa treatment at resort spa",
        availability: ["Havelock Island"]
      },
      {
        name: "Private Photography",
        price: 8000,
        description: "Professional photographer for full day couple photoshoot",
        availability: ["All locations"]
      }
    ],
    pickupLocations: [
      "Port Blair Airport",
      "Port Blair Hotels",
      "Port Blair Railway Station (if arriving by ship)",
      "Custom pickup location in Port Blair"
    ],
    cancellationPolicy: [
      "Free cancellation up to 15 days before travel date",
      "25% cancellation charges apply for cancellations 7-14 days before travel",
      "50% cancellation charges apply for cancellations 3-6 days before travel",
      "No refund for cancellations within 48 hours of travel",
      "Refund will be processed within 7-10 working days",
      "Bank charges (if any) will be deducted from refund amount",
      "Force majeure situations will be handled as per company policy"
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
        activities: ["Safety briefing", "Equipment familiarization", "Pool session"],
        meals: ["Breakfast", "Lunch"],
        sightseeing: ["Diving center orientation"]
      },
      {
        day: "Day 2",
        title: "Ocean Adventure",
        description: "Full day of diving at premium spots with marine life.",
        activities: ["Two dive sessions", "Marine life spotting", "Underwater photography"],
        meals: ["Breakfast", "Lunch"],
        sightseeing: ["Coral gardens", "Marine sanctuary"]
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
    pricingOptions: [
      { days: 3, pricePerPerson: 25000, title: "3 Days Adventure Basic" },
      { days: 4, pricePerPerson: 32000, title: "4 Days Adventure Plus" },
      { days: 5, pricePerPerson: 42000, title: "5 Days Complete Adventure" }
    ],
    hotels: [],
    supplements: [],
    pickupLocations: ["Port Blair Airport", "Port Blair Hotels"],
    cancellationPolicy: [
      "Free cancellation up to 7 days before travel",
      "50% charges apply for cancellations within 7 days"
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
        activities: ["Welcome gifts", "Beach games", "Family dinner"],
        meals: ["Dinner"],
        sightseeing: ["Resort orientation"]
      },
      {
        day: "Day 2",
        title: "Island Adventure",
        description: "Family-friendly island exploration and water activities.",
        activities: ["Glass bottom boat", "Beach picnic", "Evening entertainment"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        sightseeing: ["Glass bottom boat tour", "Beach exploration"]
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
    pricingOptions: [
      { days: 5, pricePerPerson: 35000, title: "5 Days Family Fun" },
      { days: 6, pricePerPerson: 42000, title: "6 Days Family Adventure" },
      { days: 7, pricePerPerson: 48000, title: "7 Days Complete Family" }
    ],
    hotels: [],
    supplements: [],
    pickupLocations: ["Port Blair Airport", "Port Blair Hotels"],
    cancellationPolicy: [
      "Free cancellation up to 10 days before travel",
      "50% charges apply for cancellations within 10 days"
    ],
    slug: "family-paradise"
  },
  {
    title: "Honeymoon Special",
    description: "Romantic escape for newlyweds",
    longDescription: "Create unforgettable memories with our specially curated honeymoon package. Enjoy romantic dinners, couple spa treatments, and intimate experiences in paradise.",
    price: 180000,
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
        activities: ["Couple spa", "Champagne dinner", "Room decoration"],
        meals: ["Welcome drinks", "Dinner"],
        sightseeing: ["Resort orientation"]
      },
      {
        day: "Day 2",
        title: "Island Romance",
        description: "Private beach experience and sunset cruise.",
        activities: ["Beach picnic", "Sunset cruise", "Starlit dinner"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        sightseeing: ["Private beach", "Sunset point"]
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
    pricingOptions: [
      { days: 6, pricePerPerson: 42000, title: "6 Days Romantic" },
      { days: 7, pricePerPerson: 48000, title: "7 Days Honeymoon" },
      { days: 8, pricePerPerson: 55000, title: "8 Days Ultimate Romance" }
    ],
    hotels: [],
    supplements: [
      {
        name: "Private Yacht Dinner",
        price: 15000,
        description: "Exclusive yacht dinner for two with live music",
        availability: ["Havelock Island"]
      },
      {
        name: "Professional Photography",
        price: 12000,
        description: "Full day couple photoshoot with professional photographer",
        availability: ["All locations"]
      }
    ],
    pickupLocations: ["Port Blair Airport", "Port Blair Hotels"],
    cancellationPolicy: [
      "Free cancellation up to 15 days before travel",
      "25% charges apply for cancellations 7-14 days before travel"
    ],
    slug: "honeymoon-special"
  },
  {
    title: "Solo Explorer",
    description: "Perfect for independent travelers seeking adventure",
    longDescription: "Embark on a solo journey of self-discovery in the Andaman Islands. This package is designed for independent travelers who want to explore at their own pace while having all necessary arrangements taken care of.",
    price: 65000,
    duration: "5 days",
    groupSize: "1",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: ["Solo-friendly activities", "Safety priority", "Flexible itinerary", "Local guide", "Group joining options"],
    includes: [
      "4 nights accommodation",
      "Daily breakfast",
      "Airport transfers",
      "Solo traveler safety kit",
      "Local SIM card",
      "Emergency support 24/7"
    ],
    excludes: [
      "Flights",
      "Lunch and dinner",
      "Personal expenses",
      "Optional activities"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Orientation",
        description: "Welcome to Port Blair with city orientation and safety briefing.",
        activities: ["Airport pickup", "City tour", "Safety briefing", "Welcome dinner"],
        meals: ["Breakfast", "Dinner"],
        sightseeing: ["Port Blair city tour", "Marina Park"]
      },
      {
        day: "Day 2",
        title: "Historical Exploration",
        description: "Discover the rich history of the islands.",
        activities: ["Cellular Jail visit", "Light & Sound show", "Local market exploration"],
        meals: ["Breakfast"],
        sightseeing: ["Cellular Jail", "Light & Sound show", "Aberdeen Bazaar"]
      }
    ],
    highlights: [
      {
        title: "Solo Safety",
        description: "Comprehensive safety measures for solo travelers",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Flexible Schedule",
        description: "Customizable itinerary based on your preferences",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    terms: [
      "Valid ID required",
      "Emergency contact mandatory",
      "Medical clearance for water activities",
      "Age restriction: 18+ years"
    ],
    pricingOptions: [
      { days: 4, pricePerPerson: 22000, title: "4 Days Solo Basic" },
      { days: 5, pricePerPerson: 28000, title: "5 Days Solo Adventure" },
      { days: 6, pricePerPerson: 35000, title: "6 Days Solo Explorer" }
    ],
    hotels: [],
    supplements: [
      {
        name: "Group Activity Joining",
        price: 2500,
        description: "Join group activities for social interaction",
        availability: ["All locations"]
      }
    ],
    pickupLocations: ["Port Blair Airport", "Port Blair Hotels"],
    cancellationPolicy: [
      "Free cancellation up to 7 days before travel",
      "No refund for cancellations within 48 hours"
    ],
    slug: "solo-explorer"
  },
  {
    title: "Corporate Retreat",
    description: "Team building and corporate events in paradise",
    longDescription: "Transform your team dynamics with our corporate retreat package. Combining professional meeting facilities with unique team-building activities in the stunning backdrop of the Andaman Islands.",
    price: 200000,
    duration: "4 days",
    groupSize: "10-50",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: ["Meeting facilities", "Team building", "Corporate rates", "Event planning", "Professional services"],
    includes: [
      "3 nights luxury accommodation",
      "All meals and refreshments",
      "Meeting room with AV equipment",
      "Team building activities",
      "Professional event coordinator",
      "Airport transfers for group"
    ],
    excludes: [
      "Flights",
      "Individual room upgrades",
      "Personal expenses",
      "Additional technical equipment"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Welcome",
        description: "Team arrival and welcome session with networking dinner.",
        activities: ["Group check-in", "Welcome session", "Networking dinner", "Evening entertainment"],
        meals: ["Lunch", "Dinner"],
        sightseeing: ["Resort facilities tour"]
      },
      {
        day: "Day 2",
        title: "Business & Team Building",
        description: "Professional meetings combined with team activities.",
        activities: ["Morning meetings", "Beach team building", "Group lunch", "Afternoon sessions"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        sightseeing: ["Beach venue", "Meeting facilities"]
      }
    ],
    highlights: [
      {
        title: "Professional Facilities",
        description: "State-of-the-art meeting rooms and equipment",
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Unique Venues",
        description: "Beachside meetings and outdoor team activities",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    terms: [
      "Minimum 10 participants",
      "50% advance payment",
      "Customizable based on requirements",
      "Professional liability insurance included"
    ],
    pricingOptions: [
      { days: 3, pricePerPerson: 15000, title: "3 Days Corporate Basic" },
      { days: 4, pricePerPerson: 20000, title: "4 Days Corporate Plus" },
      { days: 5, pricePerPerson: 25000, title: "5 Days Corporate Luxury" }
    ],
    hotels: [],
    supplements: [
      {
        name: "Advanced AV Equipment",
        price: 8000,
        description: "Professional presentation and video conferencing setup",
        availability: ["Meeting venues"]
      },
      {
        name: "Team Building Activities",
        price: 5000,
        description: "Additional outdoor team building activities",
        availability: ["All locations"]
      }
    ],
    pickupLocations: ["Port Blair Airport", "Port Blair Hotels", "Corporate pickup locations"],
    cancellationPolicy: [
      "Free cancellation up to 30 days before travel",
      "25% charges apply for cancellations 15-29 days before travel",
      "50% charges apply for cancellations within 14 days"
    ],
    slug: "corporate-retreat"
  },
  {
    title: "Photography Expedition",
    description: "Capture the beauty of Andamans with expert guidance",
    longDescription: "Join our photography expedition to capture the most stunning landscapes, marine life, and cultural moments of the Andaman Islands. Led by professional photographers with exclusive access to prime locations.",
    price: 95000,
    duration: "6 days",
    groupSize: "4-8",
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: ["Professional guidance", "Exclusive locations", "Equipment support", "Post-processing tips", "Portfolio review"],
    includes: [
      "5 nights accommodation",
      "Professional photographer guide",
      "Exclusive location access",
      "Photography equipment rental",
      "Post-processing workshop",
      "Portfolio review session"
    ],
    excludes: [
      "Flights",
      "Personal camera equipment",
      "Meals (except breakfast)",
      "Photo printing costs"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Equipment & Basics",
        description: "Equipment check and photography basics workshop.",
        activities: ["Equipment setup", "Basics workshop", "Sunset photography", "Welcome dinner"],
        meals: ["Breakfast", "Dinner"],
        sightseeing: ["Photography studio", "Sunset point"]
      },
      {
        day: "Day 2",
        title: "Landscape Photography",
        description: "Capture stunning landscapes and seascapes.",
        activities: ["Sunrise shoot", "Beach photography", "Coastal landscapes", "Technique workshop"],
        meals: ["Breakfast"],
        sightseeing: ["Radhanagar Beach", "Coastal viewpoints", "Hidden beaches"]
      }
    ],
    highlights: [
      {
        title: "Expert Guidance",
        description: "Learn from professional nature photographers",
        image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Exclusive Access",
        description: "Special permits for restricted photography areas",
        image: "https://images.unsplash.com/photo-1471919743851-c4df8b6eefe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    terms: [
      "Basic photography knowledge required",
      "Own camera equipment preferred",
      "Weather dependent activities",
      "Copyright remains with photographer"
    ],
    pricingOptions: [
      { days: 5, pricePerPerson: 38000, title: "5 Days Photo Basic" },
      { days: 6, pricePerPerson: 45000, title: "6 Days Photo Master" },
      { days: 7, pricePerPerson: 52000, title: "7 Days Photo Expedition" }
    ],
    hotels: [],
    supplements: [
      {
        name: "Underwater Photography",
        price: 8000,
        description: "Underwater photography session with waterproof equipment",
        availability: ["Havelock Island"]
      },
      {
        name: "Drone Photography",
        price: 6000,
        description: "Aerial photography session with professional drone",
        availability: ["Permitted areas"]
      }
    ],
    pickupLocations: ["Port Blair Airport", "Port Blair Hotels"],
    cancellationPolicy: [
      "Free cancellation up to 10 days before travel",
      "Equipment booking non-refundable within 5 days"
    ],
    slug: "photography-expedition"
  },
  {
    title: "Wellness Sanctuary",
    description: "Rejuvenate your mind, body and soul",
    longDescription: "Escape to our wellness sanctuary where ancient healing practices meet modern luxury. This comprehensive wellness package includes yoga, meditation, spa treatments, and healthy cuisine in the serene environment of the Andaman Islands.",
    price: 140000,
    duration: "7 days",
    groupSize: "2-6",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: ["Daily yoga", "Spa treatments", "Meditation sessions", "Healthy cuisine", "Wellness consultations"],
    includes: [
      "6 nights luxury wellness resort",
      "Daily yoga and meditation",
      "Spa treatments (3 sessions)",
      "Ayurvedic consultations",
      "Organic meals and detox juices",
      "Wellness activity program"
    ],
    excludes: [
      "Flights",
      "Additional spa treatments",
      "Personal shopping",
      "Medical treatments"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Wellness Assessment",
        description: "Arrival and comprehensive wellness consultation.",
        activities: ["Check-in", "Wellness consultation", "Gentle yoga", "Healthy dinner"],
        meals: ["Welcome juice", "Organic dinner"],
        sightseeing: ["Wellness center tour", "Beach meditation spot"]
      },
      {
        day: "Day 2",
        title: "Mind & Body Balance",
        description: "Start your wellness journey with yoga and spa treatments.",
        activities: ["Morning yoga", "Spa treatment", "Meditation session", "Healthy cooking class"],
        meals: ["Organic breakfast", "Detox lunch", "Light dinner"],
        sightseeing: ["Yoga pavilion", "Spa facilities", "Organic garden"]
      }
    ],
    highlights: [
      {
        title: "Holistic Wellness",
        description: "Complete mind, body, and soul rejuvenation",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Expert Practitioners",
        description: "Certified yoga instructors and wellness experts",
        image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    terms: [
      "Health questionnaire required",
      "Dietary restrictions accommodated",
      "Medical clearance for certain treatments",
      "Suitable for all fitness levels"
    ],
    pricingOptions: [
      { days: 5, pricePerPerson: 42000, title: "5 Days Wellness Basic" },
      { days: 6, pricePerPerson: 48000, title: "6 Days Wellness Plus" },
      { days: 7, pricePerPerson: 55000, title: "7 Days Complete Wellness" }
    ],
    hotels: [],
    supplements: [
      {
        name: "Private Yoga Session",
        price: 4000,
        description: "One-on-one yoga session with certified instructor",
        availability: ["Resort"]
      },
      {
        name: "Ayurvedic Massage",
        price: 3500,
        description: "Traditional Ayurvedic full body massage",
        availability: ["Resort spa"]
      }
    ],
    pickupLocations: ["Port Blair Airport", "Port Blair Hotels"],
    cancellationPolicy: [
      "Free cancellation up to 14 days before travel",
      "Treatment bookings non-refundable within 7 days"
    ],
    slug: "wellness-sanctuary"
  }
];