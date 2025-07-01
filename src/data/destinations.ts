export interface Highlight {
  title: string;
  description: string;
  image: string;
}

export interface Activity {
  name: string;
  description: string;
  duration?: string;
  price?: number;
  timings?: string;
  included?: string[];
  highlights?: string[];
}

export interface TravelInfo {
  distanceFromAirport?: string;
  distanceFromJetty?: string;
  transportOptions: string[];
  nearestAirport: string;
  bestWayToTravel: string;
}

export interface Timings {
  openTime?: string;
  closeTime?: string;
  lunchBreak?: string;
  closedDays?: string;
  specialTimings?: string;
}

export interface TicketInfo {
  entryFee?: number;
  showTicket?: number;
  childrenFee?: number;
  specialPasses?: string;
}

export interface Destination {
  name: string;
  description: string;
  longDescription: string;
  image: string;
  gallery?: { url: string; caption: string; }[];
  activities: string[];
  detailedActivities?: Activity[];
  highlights: Highlight[];
  bestTimeToVisit: string;
  howToReach: string;
  travelInfo?: TravelInfo;
  timings?: Timings;
  ticketInfo?: TicketInfo;
  safetyTips?: string[];
  tips?: string[];
  facilities?: string[];
  slug: string;
  category: 'port-blair' | 'havelock' | 'neil' | 'baratang' | 'mayabunder' | 'rangat' | 'diglipur' | 'untouched';
  region: 'south' | 'north' | 'middle';
  quickInfo?: {
    [key: string]: string;
  };
  historicalInfo?: string;
  touristGuide?: string[];
}

export const destinations: Destination[] = [
  // PORT BLAIR DESTINATIONS
  {
    name: "Cellular Jail",
    description: "Historic colonial prison and national memorial",
    longDescription: `The Cellular Jail, also known as Kala Pani, is a colonial prison situated in Port Blair. It was used by the British to exile Indian political prisoners to the remote archipelago. Today, it stands as a national memorial and museum showcasing India's struggle for independence.

    Completed in 1906, this prison was designed for solitary confinement with seven blocks radiating from a central tower. Many freedom fighters including Vinayak Damodar Savarkar were imprisoned here. The jail is famous for its Light and Sound Show that narrates the heroic saga of the Indian freedom struggle.`,
    image: "https://images.unsplash.com/photo-1584507305093-a4e42d1632c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1584507305093-a4e42d1632c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        caption: "Cellular Jail exterior view"
      },
      {
        url: "https://images.unsplash.com/photo-1565865735449-dcf2832039b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        caption: "Prison corridors"
      }
    ],
    activities: ["Historical Tours", "Light & Sound Show", "Museum Visits", "Photography"],
    detailedActivities: [
      {
        name: "Jail Museum Visit",
        description: "Explore the museum showcasing artifacts and stories of India's independence struggle",
        duration: "2-3 hours",
        timings: "9:00 AM - 4:45 PM (Lunch break: 12:00 PM - 1:30 PM)",
        highlights: ["Prison corridors", "Solitary cells", "Freedom fighters' stories", "Historical artifacts"]
      },
      {
        name: "Light & Sound Show",
        description: "Immersive experience narrating the struggles of freedom fighters",
        duration: "45 minutes",
        price: 300,
        timings: "6:00 PM - 7:50 PM (2 shows daily)",
        highlights: ["Hindi and English shows", "Mesmerizing light effects", "Powerful narration", "Historical recreation"]
      }
    ],
    highlights: [
      {
        title: "National Memorial",
        description: "Symbol of India's freedom struggle with historical significance",
        image: "https://images.unsplash.com/photo-1584507305093-a4e42d1632c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Light & Sound Show",
        description: "Award-winning show depicting the freedom fighters' struggles",
        image: "https://images.unsplash.com/photo-1565865735449-dcf2832039b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    bestTimeToVisit: "Open throughout the year, best visited October to May",
    howToReach: "Located in Port Blair city center, easily accessible by taxi or auto-rickshaw",
    travelInfo: {
      distanceFromAirport: "3 KM",
      distanceFromJetty: "1 KM",
      transportOptions: ["Taxi/Auto-rickshaw", "Public Bus", "Walking"],
      nearestAirport: "Veer Savarkar International Airport",
      bestWayToTravel: "Taxi or auto-rickshaw from airport/hotel"
    },
    timings: {
      openTime: "9:00 AM",
      closeTime: "4:45 PM",
      lunchBreak: "12:00 PM - 1:30 PM",
      closedDays: "No closing days",
      specialTimings: "Light & Sound Show: 6:00 PM - 7:50 PM"
    },
    ticketInfo: {
      entryFee: 30,
      showTicket: 300,
      childrenFee: 30,
      specialPasses: "Photography permitted"
    },
    quickInfo: {
      "Distance from Airport": "~3 KM",
      "Visiting Time": "09:00 AM – 04:45 PM",
      "Entry Ticket": "₹30 per person",
      "Show Ticket": "₹300 per person",
      "Show Duration": "45 Minutes",
      "Languages": "Hindi & English"
    },
    historicalInfo: `Built between 1896-1906, the Cellular Jail was designed for solitary confinement with 663 cells. It housed many freedom fighters including Vinayak Damodar Savarkar, Batukeshwar Dutt, and Yogendra Shukla. The jail witnessed the brutalities of the British colonial rule and stands today as a testament to the sacrifices made by Indian revolutionaries.`,
    facilities: ["Museum", "Souvenir shop", "Restrooms", "Guided tours available", "Light & sound show"],
    tips: [
      "Visit early morning to avoid crowds",
      "Attend the Light & Sound Show for complete experience",
      "Carry water bottle and sun protection",
      "Photography is allowed",
      "Guide services available"
    ],
    slug: "cellular-jail",
    category: "port-blair",
    region: "south"
  },
  
  {
    name: "Ross Island",
    description: "Erstwhile administrative headquarters of the British",
    longDescription: `Ross Island, officially known as Netaji Subhas Chandra Bose Island, served as the administrative headquarters for the British in the Andaman Islands from 1858 to 1941. Today, it stands as a testament to the colonial past with ruins of buildings that once housed the British elite.

    The island features remnants of a church, hospital, bakery, press, swimming pool, cemetery, and the Chief Commissioner's residence. During World War II, the Japanese occupied the island and built several bunkers, which can still be seen today.`,
    image: "https://images.unsplash.com/photo-1616428373638-7a9bdecbe342?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1616428373638-7a9bdecbe342?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        caption: "British colonial ruins"
      },
      {
        url: "https://images.unsplash.com/photo-1565865735449-dcf2832039b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        caption: "Japanese bunkers"
      }
    ],
    activities: ["Historical Walk", "Deer Feeding", "Photography", "Museum Visit"],
    detailedActivities: [
      {
        name: "Historical Walking Tour",
        description: "Explore the ruins of British colonial buildings",
        duration: "2-3 hours",
        highlights: ["Chief Commissioner's house", "Church ruins", "Old cemetery", "Swimming pool ruins"]
      },
      {
        name: "Japanese Bunker Exploration",
        description: "Visit the bunkers built during World War II Japanese occupation",
        duration: "1 hour",
        highlights: ["Underground bunkers", "War-time artifacts", "Strategic viewpoints"]
      }
    ],
    highlights: [
      {
        title: "British Colonial Ruins",
        description: "Explore the remnants of the British administrative center",
        image: "https://images.unsplash.com/photo-1616428373638-7a9bdecbe342?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Japanese Bunkers",
        description: "Discover the bunkers built during World War II",
        image: "https://images.unsplash.com/photo-1565865735449-dcf2832039b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    bestTimeToVisit: "October to May for pleasant weather",
    howToReach: "Short ferry ride from Port Blair jetty",
    travelInfo: {
      distanceFromJetty: "2 KM by ferry",
      transportOptions: ["Government ferry", "Private boat"],
      nearestAirport: "Veer Savarkar International Airport",
      bestWayToTravel: "Ferry from Aberdeen Jetty"
    },
    timings: {
      openTime: "8:00 AM",
      closeTime: "5:00 PM",
      closedDays: "Open daily"
    },
    ticketInfo: {
      entryFee: 30,
      childrenFee: 15
    },
    quickInfo: {
      "Distance from Jetty": "2 KM by ferry",
      "Ferry Duration": "15-20 minutes",
      "Entry Ticket": "₹30 per person",
      "Visiting Time": "08:00 AM – 05:00 PM",
      "Best Time": "Morning hours",
      "Duration": "2-3 hours"
    },
    historicalInfo: `Ross Island served as the administrative capital of the Andaman and Nicobar Islands during British rule. The island housed the Chief Commissioner's residence, Government House, church, hospitals, bakery, press, swimming pool, and cemetery. During World War II, the Japanese occupied the island and used it as a base, building several bunkers that still exist today.`,
    facilities: ["Museum", "Guided tours", "Restrooms", "Deer park"],
    tips: [
      "Wear comfortable walking shoes",
      "Carry water and snacks",
      "Don't feed the deer without permission",
      "Visit during cooler hours",
      "Photography is allowed"
    ],
    slug: "ross-island",
    category: "port-blair",
    region: "south"
  },

  {
    name: "North Bay Island",
    description: "Water sports destination and coral viewing paradise",
    longDescription: `North Bay Island is a popular destination for water sports and coral viewing in the Andaman Islands. The island is famous for its lighthouse and offers some of the best snorkeling and sea walking experiences in the region.

    The crystal-clear waters around North Bay are perfect for underwater activities, and the island serves as a hub for various water sports. It's also known for its lighthouse, which has been guiding ships safely to Port Blair for decades.`,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        caption: "Water sports activities at North Bay"
      },
      {
        url: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        caption: "Lighthouse and coral views"
      }
    ],
    activities: ["Snorkeling", "Sea Walking", "Glass Bottom Boat", "Jet Skiing", "Parasailing"],
    detailedActivities: [
      {
        name: "Sea Walking",
        description: "Walk underwater while breathing normally through a special helmet",
        duration: "20-30 minutes",
        price: 4500,
        highlights: ["No swimming skills required", "Breathe normally underwater", "View coral reefs closely"]
      },
      {
        name: "Snorkeling",
        description: "Explore vibrant coral reefs and marine life",
        duration: "45 minutes",
        price: 1500,
        highlights: ["Colorful coral formations", "Tropical fish species", "Clear blue waters"]
      }
    ],
    highlights: [
      {
        title: "Lighthouse",
        description: "Historic lighthouse offering panoramic views",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Coral Reefs",
        description: "Pristine coral formations perfect for snorkeling",
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    bestTimeToVisit: "October to May for clear waters and good weather",
    howToReach: "Boat ride from Port Blair jetty",
    travelInfo: {
      distanceFromJetty: "30 minutes by boat",
      transportOptions: ["Government ferry", "Private speed boat"],
      nearestAirport: "Veer Savarkar International Airport",
      bestWayToTravel: "Speed boat for quick access"
    },
    timings: {
      openTime: "9:00 AM",
      closeTime: "4:00 PM",
      closedDays: "Weather dependent"
    },
    ticketInfo: {
      entryFee: 0
    },
    quickInfo: {
      "Distance from Port Blair": "30 minutes by boat",
      "Entry Ticket": "Free (Water sports charges apply)",
      "Best Time": "Morning hours",
      "Duration": "4-5 hours",
      "Activities": "Sea walking, snorkeling, water sports"
    },
    facilities: ["Water sports equipment", "Changing rooms", "Life jackets", "Professional instructors", "Restrooms"],
    safetyTips: [
      "Always wear life jacket during water activities",
      "Listen to instructor guidelines carefully",
      "Avoid water sports during rough weather",
      "Stay within designated areas"
    ],
    tips: [
      "Book water sports in advance",
      "Wear swimwear under clothes",
      "Carry dry clothes and towel",
      "Follow safety instructions",
      "Bring waterproof camera"
    ],
    slug: "north-bay-island",
    category: "port-blair",
    region: "south"
  },

  // HAVELOCK ISLAND DESTINATIONS
  {
    name: "Radhanagar Beach",
    description: "Asia's best beach with pristine white sand and stunning sunsets",
    longDescription: `Radhanagar Beach, also known as Beach No. 7, is consistently ranked as one of Asia's best beaches. Located on the western coast of Havelock Island, this pristine stretch of white sand and turquoise waters offers one of the most spectacular sunset views in the Andamans.

    The beach is surrounded by lush green forests and offers a perfect blend of natural beauty and tranquility. Unlike many other beaches in Andaman, Radhanagar has no coral reefs in the swimming area, making it safe for swimming and ideal for families.`,
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        caption: "Radhanagar Beach sunset"
      },
      {
        url: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        caption: "Crystal clear waters"
      }
    ],
    activities: ["Swimming", "Beach Walking", "Sunset Viewing", "Photography", "Sunbathing"],
    detailedActivities: [
      {
        name: "Swimming",
        description: "Safe swimming in coral-free crystal clear waters",
        highlights: ["No coral reefs", "Gentle waves", "Lifeguard available", "Safe for families"]
      },
      {
        name: "Sunset Viewing",
        description: "Spectacular sunset views over the Andaman Sea",
        highlights: ["Golden hour photography", "Romantic setting", "Unobstructed horizon", "Best viewpoint on the island"]
      }
    ],
    highlights: [
      {
        title: "Asia's Best Beach",
        description: "Ranked among the top beaches in Asia for its pristine beauty",
        image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Spectacular Sunsets",
        description: "Breathtaking sunset views that attract visitors from around the world",
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    bestTimeToVisit: "October to May for pleasant weather and clear skies",
    howToReach: "10 km from Havelock Jetty by road",
    travelInfo: {
      distanceFromJetty: "10 km",
      transportOptions: ["Taxi", "Auto-rickshaw", "Rental scooter", "Bicycle"],
      nearestAirport: "Veer Savarkar International Airport (via Port Blair ferry)",
      bestWayToTravel: "Taxi or rental scooter"
    },
    timings: {
      openTime: "24 hours",
      specialTimings: "Best sunset viewing: 5:30 PM - 6:30 PM"
    },
    ticketInfo: {
      entryFee: 0
    },
    quickInfo: {
      "Distance from Havelock Jetty": "10 km",
      "Entry Ticket": "Free",
      "Best Time": "Early morning or evening",
      "Duration": "4-5 hours",
      "Activities": "Swimming, sunbathing, photography"
    },
    facilities: ["Changing rooms", "Restrooms", "Lifeguard", "Beach shacks", "Parking"],
    safetyTips: [
      "Swimming is safe but be cautious during high tide",
      "Strong currents after 5 PM",
      "Stay within designated swimming areas",
      "Follow lifeguard instructions"
    ],
    tips: [
      "Visit early morning to avoid crowds",
      "Carry sunscreen and water",
      "Best time for sunset photography",
      "Wear comfortable beach attire"
    ],
    slug: "radhanagar-beach",
    category: "havelock",
    region: "south"
  },

  {
    name: "Elephant Beach",
    description: "Adventure paradise for water sports and snorkeling",
    longDescription: `Elephant Beach is one of the most popular destinations in Havelock Island for water sports and snorkeling. The beach is famous for its shallow coral reefs that are easily accessible from the shore, making it perfect for snorkeling even for beginners.

    The journey to Elephant Beach is an adventure in itself - you can either take a boat ride or trek through the lush tropical forest. The beach offers a wide range of water sports activities and is considered one of the best snorkeling spots in the Andaman Islands.`,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    activities: ["Snorkeling", "Sea Walking", "Jet Skiing", "Banana Boat", "Parasailing", "Trekking"],
    detailedActivities: [
      {
        name: "Snorkeling",
        description: "Explore vibrant coral reefs just off the shore",
        duration: "45 minutes",
        price: 1500,
        highlights: ["Shallow coral reefs", "Colorful fish species", "Clear waters", "Beginner-friendly"]
      },
      {
        name: "Jungle Trekking",
        description: "Trek through tropical forest to reach the beach",
        duration: "30 minutes",
        highlights: ["Dense forest trail", "Wildlife spotting", "Photography opportunities", "Adventure experience"]
      }
    ],
    highlights: [
      {
        title: "Coral Reefs",
        description: "Shallow and accessible coral reefs perfect for snorkeling",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Water Sports Hub",
        description: "Wide variety of water sports activities available",
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    bestTimeToVisit: "October to May for best underwater visibility",
    howToReach: "20 minutes boat ride or 30 minutes trek from Havelock",
    travelInfo: {
      distanceFromJetty: "7 km + boat ride or trek",
      transportOptions: ["Boat from Havelock Jetty", "Trekking through forest"],
      nearestAirport: "Veer Savarkar International Airport (via Port Blair ferry)",
      bestWayToTravel: "Boat ride for convenience, trekking for adventure"
    },
    timings: {
      openTime: "9:00 AM",
      closeTime: "4:00 PM",
      closedDays: "Weather dependent"
    },
    ticketInfo: {
      entryFee: 0
    },
    quickInfo: {
      "Distance from Havelock Jetty": "7 km + boat/trek",
      "Entry Ticket": "Free (Activity charges apply)",
      "Best Time": "Morning hours",
      "Duration": "4-6 hours",
      "Activities": "Snorkeling, water sports, trekking"
    },
    facilities: ["Water sports equipment", "Changing rooms", "Life jackets", "Snorkeling gear rental", "Forest trail guides"],
    safetyTips: [
      "Use reef-safe sunscreen to protect corals",
      "Don't touch or step on coral reefs",
      "Stay within designated swimming areas",
      "Be careful during forest trekking"
    ],
    tips: [
      "Book water sports package in advance",
      "Carry waterproof bag for valuables",
      "Wear reef-safe sunscreen",
      "Bring underwater camera",
      "Comfortable shoes for trekking option"
    ],
    slug: "elephant-beach",
    category: "havelock",
    region: "south"
  },

  // NEIL ISLAND DESTINATIONS
  {
    name: "Bharatpur Beach",
    description: "Pristine beach perfect for snorkeling and water sports",
    longDescription: `Bharatpur Beach is one of the most beautiful beaches on Neil Island, known for its pristine white sand and crystal-clear waters. The beach is perfect for swimming, snorkeling, and various water sports activities.

    The coral reefs near the shore make it an excellent spot for snorkeling, where you can see a variety of colorful fish and marine life. The beach is also famous for its glass-bottom boat rides that allow you to view the underwater world without getting wet.`,
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        caption: "Bharatpur Beach crystal clear waters"
      },
      {
        url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        caption: "Glass bottom boat coral viewing"
      }
    ],
    activities: ["Snorkeling", "Glass Bottom Boat", "Swimming", "Beach Walking", "Photography"],
    detailedActivities: [
      {
        name: "Glass Bottom Boat Ride",
        description: "View underwater coral gardens without getting wet",
        duration: "30 minutes",
        price: 800,
        highlights: ["Coral reef viewing", "Marine life spotting", "Dry underwater exploration", "Professional guide"]
      },
      {
        name: "Snorkeling",
        description: "Explore shallow coral reefs near the shore",
        duration: "45 minutes",
        price: 1200,
        highlights: ["Beginner-friendly", "Shallow coral reefs", "Colorful fish", "Equipment provided"]
      }
    ],
    highlights: [
      {
        title: "Coral Gardens",
        description: "Beautiful coral formations near the shore",
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Glass Bottom Boat",
        description: "Unique way to explore underwater world without swimming",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    bestTimeToVisit: "October to May for best underwater visibility",
    howToReach: "1 km from Neil Island Jetty by auto-rickshaw or walk",
    travelInfo: {
      distanceFromJetty: "1 km",
      transportOptions: ["Walking", "Auto-rickshaw", "Bicycle"],
      nearestAirport: "Veer Savarkar International Airport (via Port Blair ferry)",
      bestWayToTravel: "Walking or auto-rickshaw"
    },
    timings: {
      openTime: "6:00 AM",
      closeTime: "6:00 PM",
      closedDays: "Open daily"
    },
    ticketInfo: {
      entryFee: 0
    },
    quickInfo: {
      "Distance from Neil Jetty": "1 km",
      "Entry Ticket": "Free (Activity charges apply)",
      "Best Time": "Morning and evening",
      "Duration": "3-4 hours",
      "Activities": "Swimming, snorkeling, glass boat"
    },
    facilities: ["Snorkeling equipment rental", "Glass bottom boats", "Changing rooms", "Restrooms", "Life jackets"],
    tips: [
      "Visit during high tide for better water sports",
      "Book glass bottom boat in advance",
      "Carry reef-safe sunscreen",
      "Best coral viewing in morning hours"
    ],
    slug: "bharatpur-beach",
    category: "neil",
    region: "south"
  },

  {
    name: "Natural Bridge",
    description: "Unique coral formation also known as Howrah Bridge",
    longDescription: `The Natural Bridge, locally known as Howrah Bridge, is a unique coral formation that connects two small islands. This natural wonder is one of the most photographed spots on Neil Island and offers spectacular views during low tide.

    The bridge is formed by years of natural erosion and coral growth, creating a stunning arch-like structure. It's best visited during low tide when you can walk closer to the formation and get better photographs.`,
    image: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    activities: ["Photography", "Nature Viewing", "Rock Exploration", "Sunrise Viewing"],
    highlights: [
      {
        title: "Natural Coral Arch",
        description: "Stunning natural formation created by coral and erosion",
        image: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    bestTimeToVisit: "During low tide for best views",
    howToReach: "2 km from Neil Island Jetty",
    slug: "natural-bridge",
    category: "neil",
    region: "south"
  },

  // BARATANG DESTINATIONS
  {
    name: "Limestone Caves",
    description: "Magnificent limestone cave formations",
    longDescription: `The Limestone Caves of Baratang are among the most spectacular natural formations in the Andaman Islands. These caves, formed over millions of years, feature stunning stalactites and stalagmites that create an otherworldly underground landscape.

    The journey to the caves is an adventure itself, involving a boat ride through mangrove creeks and a trek through dense forest. The caves are home to various species of bats and offer a unique spelunking experience.`,
    image: "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    activities: ["Cave Exploration", "Photography", "Boat Ride", "Nature Walk"],
    highlights: [
      {
        title: "Stalactite Formations",
        description: "Ancient limestone formations creating natural sculptures",
        image: "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    bestTimeToVisit: "October to March",
    howToReach: "90 km from Port Blair + boat ride through mangroves",
    slug: "limestone-caves",
    category: "baratang",
    region: "middle"
  },

  {
    name: "Mud Volcano",
    description: "Unique geological phenomenon",
    longDescription: `The Mud Volcano in Baratang is a rare geological phenomenon where natural gas pushes mud and water up through the earth's surface, creating small volcano-like formations. This unique attraction offers visitors a chance to witness an active geological process.

    The area around the mud volcano is characterized by bubbling mud pools and occasional small eruptions of mud and gas. It's one of the few places in India where you can witness such geological activity.`,
    image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    activities: ["Geological Study", "Photography", "Nature Observation"],
    highlights: [
      {
        title: "Active Mud Formation",
        description: "Witness the rare geological phenomenon of mud volcanism",
        image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    bestTimeToVisit: "October to March",
    howToReach: "100 km from Port Blair via road and boat",
    slug: "mud-volcano",
    category: "baratang",
    region: "middle"
  },

  // DIGLIPUR DESTINATIONS
  {
    name: "Ross & Smith Islands",
    description: "Twin islands connected by a natural sandbar",
    longDescription: `Ross and Smith Islands are twin islands connected by a natural white sand bar that appears during low tide. This phenomenon creates one of the most spectacular and unique beaches in the Andaman Islands.

    During low tide, you can walk from one island to another on the natural sandbar, offering a surreal experience of walking on water. The islands are known for their pristine beaches, clear waters, and excellent snorkeling opportunities.`,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    activities: ["Beach Walking", "Snorkeling", "Photography", "Swimming", "Island Hopping"],
    highlights: [
      {
        title: "Natural Sandbar",
        description: "Walk between two islands during low tide",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    bestTimeToVisit: "December to March",
    howToReach: "230 km from Port Blair + boat ride from Aerial Bay",
    slug: "ross-smith-islands",
    category: "diglipur",
    region: "north"
  },

  {
    name: "Saddle Peak",
    description: "Highest peak in Andaman and Nicobar Islands",
    longDescription: `Saddle Peak is the highest point in the Andaman and Nicobar Islands at 732 meters above sea level. Located in Diglipur, this peak offers breathtaking panoramic views of the surrounding islands and the Bay of Bengal.

    The trek to Saddle Peak is challenging but rewarding, taking you through dense tropical forests rich in flora and fauna. The peak is part of the Saddle Peak National Park and is home to various endemic species of birds and butterflies.`,
    image: "https://images.unsplash.com/photo-1464822759844-d150ad6d1ee4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    activities: ["Trekking", "Bird Watching", "Photography", "Nature Study"],
    highlights: [
      {
        title: "Highest Peak",
        description: "Summit the highest point in Andaman and Nicobar Islands",
        image: "https://images.unsplash.com/photo-1464822759844-d150ad6d1ee4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    bestTimeToVisit: "November to April",
    howToReach: "230 km from Port Blair, then trek from Kalipur",
    slug: "saddle-peak",
    category: "diglipur",
    region: "north"
  },

  // UNTOUCHED DESTINATIONS
  {
    name: "Cinque Island",
    description: "Pristine uninhabited island paradise",
    longDescription: `Cinque Island is an uninhabited island known for its pristine beaches, crystal-clear waters, and vibrant coral reefs. The island is actually two islands - North Cinque and South Cinque - connected by a thin strip of white sand.

    This untouched paradise offers some of the best snorkeling and diving opportunities in the Andaman Islands. The island is accessible only by chartered boats and is perfect for day trips for those seeking an off-the-beaten-path experience.`,
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    activities: ["Snorkeling", "Diving", "Beach Exploration", "Photography"],
    highlights: [
      {
        title: "Untouched Paradise",
        description: "Experience pristine uninhabited island beauty",
        image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    bestTimeToVisit: "November to April",
    howToReach: "Chartered boat from Port Blair (special permits required)",
    slug: "cinque-island",
    category: "untouched",
    region: "south"
  },

  {
    name: "Barren Island",
    description: "India's only active volcano",
    longDescription: `Barren Island is home to India's only active volcano and is located about 135 km northeast of Port Blair. The volcano has been active since 1787 with the most recent eruption occurring in 2017.

    The island is uninhabited and can only be approached by boat from a safe distance. The volcanic activity has created a unique marine ecosystem around the island, making it an excellent spot for deep-sea diving and marine life observation.`,
    image: "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    activities: ["Volcano Viewing", "Boat Tours", "Marine Life Observation", "Photography"],
    highlights: [
      {
        title: "Active Volcano",
        description: "Witness India's only active volcano from a safe distance",
        image: "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    bestTimeToVisit: "December to March",
    howToReach: "Special chartered boat tours from Port Blair (permits required)",
    slug: "barren-island",
    category: "untouched",
    region: "north"
  }
];