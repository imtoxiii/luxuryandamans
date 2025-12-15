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

export interface WeatherInfo {
  season: string;
  temperature: string;
  conditions: string;
  visibility?: string;
  seaConditions?: string;
}

export interface CulturalInfo {
  localCulture?: string;
  traditions?: string[];
  festivals?: string[];
  languages?: string[];
}

export interface LocalCuisine {
  specialty: string;
  description: string;
  whereToTry: string;
  price?: string;
}

export interface ShoppingInfo {
  items: string[];
  markets?: string[];
  tips?: string[];
}

export interface Photography {
  bestSpots: string[];
  goldenhours: string;
  tips: string[];
  restrictions?: string[];
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
  bestFor?: string[];
  nearbyAttractions?: { name: string; distance: string; description?: string; slug?: string }[];
  itineraries?: { title: string; duration: string; activities: string[] }[];
  stayOptions?: { name: string; type: string; priceRange: string; location?: string }[];
  practicalInfo?: {
    permits?: string;
    networkCoverage?: string[];
    atmAvailability?: string;
    medicalFacilities?: string;
    emergencyContacts?: string[];
  };
  weatherInfo?: WeatherInfo[];
  culturalInfo?: CulturalInfo;
  localCuisine?: LocalCuisine[];
  shopping?: ShoppingInfo;
  photography?: Photography;
  seasonalActivities?: { season: string; activities: string[] }[];
  conservation?: string;
  accessibility?: string[];
  budgetInfo?: {
    budget: string;
    costs: { item: string; price: string }[];
  };
  thingsToKnow?: string[];
}

export const destinations: Destination[] = [
  // PORT BLAIR DESTINATIONS
  {
    name: "Cellular Jail",
    description: "Historic colonial prison and national memorial",
    longDescription: `The Cellular Jail, also known as Kala Pani, is a colonial prison situated in Port Blair. It was used by the British to exile Indian political prisoners to the remote archipelago. Today, it stands as a national memorial and museum showcasing India's struggle for independence.

    Completed in 1906, this prison was designed for solitary confinement with seven blocks radiating from a central tower. Many freedom fighters including Vinayak Damodar Savarkar were imprisoned here. The jail is famous for its Light and Sound Show that narrates the heroic saga of the Indian freedom struggle.`,
    image: "",
    gallery: [],
    activities: ["Historical Tours", "Light & Sound Show", "Museum Visits", "Photography"],
    detailedActivities: [
      {
        name: "Jail Museum Visit",
        description: "Explore the museum showcasing artifacts and stories of India's independence struggle",
        duration: "2-3 hours",
        timings: "9:00 AM - 4:45 PM (Lunch break: 12:00 PM - 1:30 PM)",
        highlights: ["Prison corridors", "Solitary cells", "Freedom fighters' stories", "Historical artifacts", "Gallows display", "Original equipment"]
      },
      {
        name: "Light & Sound Show",
        description: "Immersive experience narrating the struggles of freedom fighters",
        duration: "45 minutes",
        price: 300,
        timings: "6:00 PM - 7:50 PM (2 shows daily)",
        highlights: ["Hindi and English shows", "Mesmerizing light effects", "Powerful narration", "Historical recreation", "Professional sound system", "Emotional storytelling"]
      },
      {
        name: "Guided Historical Tour",
        description: "Professional guide-led tour explaining the prison's history and architecture",
        duration: "1.5-2 hours",
        price: 200,
        highlights: ["Expert historical commentary", "Hidden stories revealed", "Architectural details", "Freedom fighters' biographies"]
      },
      {
        name: "Photography Session",
        description: "Capture the historic architecture and memorial moments",
        duration: "1-2 hours",
        highlights: ["Historic architecture", "Memorial spots", "Artistic angles", "Natural lighting"]
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
    bestFor: ["history lovers", "culture enthusiasts", "families", "photographers"],
    nearbyAttractions: [
      { name: "Ross Island (Netaji Subhas Chandra Bose Island)", distance: "2 km by ferry", slug: "ross-island" },
      { name: "North Bay Island", distance: "30–40 min by boat", slug: "north-bay-island" }
    ],
    itineraries: [
      {
        title: "Cellular Jail + Light & Sound Show",
        duration: "Half-day",
        activities: [
          "Explore museum exhibits and historical wings",
          "Walk through solitary cells and central tower",
          "Attend the evening Light & Sound Show"
        ]
      }
    ],
    stayOptions: [
      { name: "Comfort stay near Aberdeen Bazar", type: "Hotel", priceRange: "₹3,000–₹6,000", location: "Port Blair city" },
      { name: "Sea-view boutique stay", type: "Hotel", priceRange: "₹6,000–₹12,000", location: "Marine Hill" }
    ],
    practicalInfo: {
      permits: "No special permit required for Indian nationals. Foreign nationals require RAP (issued on arrival).",
      networkCoverage: ["Airtel", "Jio", "BSNL"],
      atmAvailability: "Multiple ATMs within 1–2 km in city center.",
      medicalFacilities: "GB Pant Hospital ~2 km; basic first-aid available at venue.",
      emergencyContacts: ["Emergency 112", "Police 100", "Ambulance 102/108"]
    },
    weatherInfo: [
      {
        season: "Winter (November - February)",
        temperature: "20°C - 30°C",
        conditions: "Pleasant and dry, ideal for sightseeing",
        visibility: "Excellent for photography"
      },
      {
        season: "Summer (March - May)",
        temperature: "25°C - 35°C",
        conditions: "Hot and humid, early morning visits recommended",
        visibility: "Good, but afternoon heat can be intense"
      },
      {
        season: "Monsoon (June - October)",
        temperature: "24°C - 32°C",
        conditions: "Rainy with occasional heavy downpours",
        visibility: "Variable, Light & Sound Show may be cancelled"
      }
    ],
    culturalInfo: {
      localCulture: "The jail represents the spirit of Indian independence struggle and is deeply revered by locals and visitors alike",
      traditions: ["Annual martyrs' remembrance ceremonies", "Independence Day celebrations", "Educational programs for students"],
      festivals: ["Independence Day (August 15)", "Republic Day (January 26)", "Martyrs' Day events"],
      languages: ["Hindi", "English", "Bengali", "Tamil", "Telugu"]
    },
    localCuisine: [
      {
        specialty: "Bengali Fish Curry",
        description: "Authentic Bengali-style fish curry reflecting the cultural heritage of early settlers",
        whereToTry: "Restaurants near Aberdeen Bazaar (5 minutes walk)",
        price: "₹200-400"
      },
      {
        specialty: "South Indian Thali",
        description: "Complete meal representing the diverse South Indian community",
        whereToTry: "Ananda Restaurant, Aberdeen Bazaar",
        price: "₹150-300"
      },
      {
        specialty: "Fresh Coconut Water",
        description: "Refreshing natural drink perfect after museum visit",
        whereToTry: "Street vendors near the jail entrance",
        price: "₹30-50"
      }
    ],
    shopping: {
      items: ["Historical books and literature", "Freedom fighter memorabilia", "Postcards and souvenirs", "Handmade crafts", "Local artwork"],
      markets: ["Jail souvenir shop", "Aberdeen Bazaar (5 min walk)", "Sagarika Government Emporium"],
      tips: ["Shop for authentic historical books at the museum store", "Aberdeen Bazaar offers better prices for general souvenirs", "Government emporium ensures authentic local products"]
    },
    photography: {
      bestSpots: ["Central tower from courtyard", "Prison corridors with natural lighting", "Memorial wall with plaques", "Gallows area (historical significance)", "Light & Sound Show setup"],
      goldenhours: "Golden hour: 6:00-7:00 AM and 5:30-6:30 PM for best natural lighting",
      tips: ["Use natural lighting in corridors for dramatic effect", "Capture architectural details of the central tower", "Evening photography during Light & Sound Show", "Wide-angle lens recommended for full complex shots"],
      restrictions: ["No flash photography during Light & Sound Show", "Respect memorial areas", "No photography in restricted museum sections"]
    },
    seasonalActivities: [
      {
        season: "Winter (Nov-Feb)",
        activities: ["Extended museum exploration", "Comfortable Light & Sound Show viewing", "Historical walking tours", "Photography sessions"]
      },
      {
        season: "Summer (Mar-May)",
        activities: ["Early morning visits", "Indoor museum exploration", "Evening Light & Sound Show", "Quick photography sessions"]
      },
      {
        season: "Monsoon (Jun-Oct)",
        activities: ["Indoor museum visits", "Covered corridor exploration", "Historical research", "Monsoon photography (if weather permits)"]
      }
    ],
    conservation: "The Cellular Jail is maintained by the Archaeological Survey of India and serves as a protected national monument. Visitors are expected to respect the historical significance and help preserve this important heritage site for future generations.",
    accessibility: ["Wheelchair accessible main entrance", "Ramps available for most areas", "Audio guides available in multiple languages", "Rest areas with seating", "Accessible restrooms"],
    budgetInfo: {
      budget: "₹500-1000 per person for complete experience",
      costs: [
        { item: "Entry Fee", price: "₹30" },
        { item: "Light & Sound Show", price: "₹300" },
        { item: "Guided Tour (optional)", price: "₹200" },
        { item: "Refreshments nearby", price: "₹100-200" },
        { item: "Souvenirs", price: "₹100-500" }
      ]
    },
    thingsToKnow: [
      "The jail was built between 1896-1906 with a unique cellular design",
      "Many famous freedom fighters were imprisoned here including Veer Savarkar",
      "The Light & Sound Show is in both Hindi and English",
      "Photography is allowed but respect the solemnity of the place",
      "Combine with Ross Island visit for a complete historical experience",
      "Early morning visits are less crowded",
      "The central tower offers the best architectural view",
      "Original structure had 7 wings, 3 remain today"
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
    image: "",
    gallery: [],
    activities: ["Historical Walk", "Deer Feeding", "Photography", "Museum Visit"],
    detailedActivities: [
      {
        name: "Historical Walking Tour",
        description: "Explore the ruins of British colonial buildings and understand their historical significance",
        duration: "2-3 hours",
        highlights: ["Chief Commissioner's house", "Church ruins", "Old cemetery", "Swimming pool ruins", "Bakery remains", "Government House foundations"]
      },
      {
        name: "Japanese Bunker Exploration",
        description: "Visit the bunkers built during World War II Japanese occupation",
        duration: "1 hour",
        highlights: ["Underground bunkers", "War-time artifacts", "Strategic viewpoints", "Military installations", "Historical context"]
      },
      {
        name: "Deer Park Visit",
        description: "Interact with the friendly spotted deer that roam freely on the island",
        duration: "30-45 minutes",
        highlights: ["Spotted deer feeding", "Wildlife photography", "Natural habitat observation", "Peaceful interaction"]
      },
      {
        name: "Museum Exploration",
        description: "Visit the small museum showcasing colonial artifacts and island history",
        duration: "45 minutes",
        highlights: ["Colonial artifacts", "Historical photographs", "British administration displays", "Interactive exhibits"]
      },
      {
        name: "Photography & Nature Walk",
        description: "Capture the unique blend of history and nature reclaiming the ruins",
        duration: "1-2 hours",
        highlights: ["Architectural photography", "Nature reclaiming ruins", "Wildlife shots", "Sunset views from jetty"]
      }
    ],
    highlights: [
      {
        title: "British Colonial Ruins",
        description: "Explore the remnants of the British administrative center",
        image: "https://www.remotelands.com/travelogues/app/uploads/2022/10/Ross-island-Andaman-Islands-India-2-1200x800.jpg"
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
    bestFor: ["history lovers", "nature walkers", "families", "photographers"],
    nearbyAttractions: [
      { name: "North Bay Island", distance: "Short boat hop", slug: "north-bay-island" },
      { name: "Cellular Jail", distance: "15–20 min drive + ferry", slug: "cellular-jail" }
    ],
    itineraries: [
      {
        title: "Colonial Ruins Walk",
        duration: "2–3 hours",
        activities: [
          "Church, bakery and commissioner’s house ruins",
          "Visit deer park and Japanese bunkers",
          "Jetty area for photos"
        ]
      }
    ],
    stayOptions: [
      { name: "City hotel near jetty", type: "Hotel", priceRange: "₹3,000–₹7,000", location: "Port Blair" },
      { name: "Premium seafront stay", type: "Resort", priceRange: "₹10,000+", location: "Port Blair waterfront" }
    ],
    practicalInfo: {
      permits: "Entry tickets sold at jetty; no special permit required.",
      networkCoverage: ["BSNL", "Airtel", "Jio"],
      atmAvailability: "ATMs available in Port Blair before ferry.",
      medicalFacilities: "First-aid at jetty; full facilities in Port Blair.",
      emergencyContacts: ["Emergency 112"]
    },
    weatherInfo: [
      {
        season: "Winter (November - February)",
        temperature: "22°C - 29°C",
        conditions: "Perfect for walking and exploration",
        seaConditions: "Calm seas, pleasant ferry ride"
      },
      {
        season: "Summer (March - May)",
        temperature: "26°C - 34°C",
        conditions: "Hot, early morning or late afternoon visits recommended",
        seaConditions: "Generally calm, occasional choppy waters"
      },
      {
        season: "Monsoon (June - October)",
        temperature: "25°C - 31°C",
        conditions: "Frequent rain showers, lush greenery",
        seaConditions: "Rough seas, ferry services may be suspended"
      }
    ],
    culturalInfo: {
      localCulture: "Ross Island served as the administrative capital during British rule and represents colonial history and resilience of nature",
      traditions: ["Historical preservation efforts", "Educational tours for students", "Colonial heritage celebrations"],
      festivals: ["Heritage Day events", "World Heritage Week celebrations"],
      languages: ["English", "Hindi", "Bengali", "Tamil"]
    },
    localCuisine: [
      {
        specialty: "Fresh Coconut Water",
        description: "Refreshing natural drink perfect after island exploration",
        whereToTry: "Vendors at Aberdeen Jetty before/after ferry",
        price: "₹30-50"
      },
      {
        specialty: "Fish Pakora",
        description: "Crispy fried fish fritters, a local favorite snack",
        whereToTry: "Jetty area food stalls",
        price: "₹80-120"
      },
      {
        specialty: "Banana Chips",
        description: "Local specialty made from island-grown bananas",
        whereToTry: "Local vendors near jetty",
        price: "₹40-60"
      }
    ],
    shopping: {
      items: ["Historical postcards", "Colonial-era replica artifacts", "Island photography prints", "Handmade souvenirs", "Local crafts"],
      markets: ["Aberdeen Jetty souvenir shops", "Port Blair markets"],
      tips: ["Limited shopping on island itself", "Better souvenir options at Port Blair jetty", "Postcards make great historical mementos"]
    },
    photography: {
      bestSpots: ["Chief Commissioner's house ruins", "Church with overgrown vegetation", "Japanese bunkers entrance", "Cemetery with colonial graves", "Deer among ruins", "Jetty with Port Blair skyline"],
      goldenhours: "Golden hour: 6:00-7:00 AM and 5:00-6:00 PM for dramatic lighting on ruins",
      tips: ["Capture contrast between nature and ruins", "Use wide-angle for architectural shots", "Wildlife photography with deer requires patience", "Sunset shots from jetty are spectacular"],
      restrictions: ["No flash photography near deer", "Respect historical significance", "Stay on designated paths"]
    },
    seasonalActivities: [
      {
        season: "Winter (Nov-Feb)",
        activities: ["Extended historical walking tours", "Comfortable deer watching", "Photography sessions", "Museum visits", "Sunset viewing from jetty"]
      },
      {
        season: "Summer (Mar-May)",
        activities: ["Early morning exploration", "Shaded area visits", "Quick photography", "Indoor museum time"]
      },
      {
        season: "Monsoon (Jun-Oct)",
        activities: ["Covered area exploration", "Monsoon photography", "Lush vegetation viewing", "Quick visits between showers"]
      }
    ],
    conservation: "Ross Island is maintained as a historical monument. The blend of history and nature shows how the environment reclaims abandoned spaces. Visitors help preserve this unique site by following guidelines.",
    accessibility: ["Ferry accessible with assistance", "Paved pathways to main ruins", "Benches available for rest", "Limited accessibility for wheelchairs due to uneven terrain"],
    budgetInfo: {
      budget: "₹200-400 per person including ferry",
      costs: [
        { item: "Ferry Ticket (Round-trip)", price: "₹100-150" },
        { item: "Entry Fee", price: "₹30" },
        { item: "Guide (optional)", price: "₹100-200" },
        { item: "Refreshments", price: "₹50-100" }
      ]
    },
    thingsToKnow: [
      "Island is officially named Netaji Subhas Chandra Bose Island",
      "Served as British administrative headquarters from 1858-1941",
      "Japanese occupied the island during World War II",
      "Nature has beautifully reclaimed most colonial structures",
      "Spotted deer were introduced and now roam freely",
      "Best combined with North Bay Island for full day trip",
      "Ferry timings are weather dependent",
      "Carry water as limited facilities on island",
      "Wear comfortable walking shoes for uneven terrain"
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
    image: "",
    gallery: [],
    activities: ["Snorkeling", "Sea Walking", "Glass Bottom Boat", "Jet Skiing", "Parasailing"],
    detailedActivities: [
      {
        name: "Sea Walking",
        description: "Walk underwater while breathing normally through a special helmet",
        duration: "20-30 minutes",
        price: 4500,
        highlights: ["No swimming skills required", "Breathe normally underwater", "View coral reefs closely", "Professional safety equipment", "Underwater photography included"]
      },
      {
        name: "Snorkeling",
        description: "Explore vibrant coral reefs and marine life in shallow waters",
        duration: "45 minutes",
        price: 1500,
        highlights: ["Colorful coral formations", "Tropical fish species", "Clear blue waters", "Equipment provided", "Professional instruction"]
      },
      {
        name: "Glass Bottom Boat Ride",
        description: "Observe underwater coral gardens without getting wet",
        duration: "30 minutes",
        price: 800,
        highlights: ["Coral reef viewing", "Marine life spotting", "Family-friendly activity", "Professional guide commentary"]
      },
      {
        name: "Jet Skiing",
        description: "High-speed water adventure around the island",
        duration: "15-20 minutes",
        price: 2500,
        highlights: ["Adrenaline-pumping ride", "Scenic island views", "Professional instructor", "Safety equipment provided"]
      },
      {
        name: "Parasailing",
        description: "Soar above the crystal clear waters with panoramic views",
        duration: "10-15 minutes",
        price: 3500,
        highlights: ["Bird's eye view of the island", "Aerial photography opportunities", "Safe and thrilling experience", "Professional equipment"]
      },
      {
        name: "Lighthouse Visit",
        description: "Explore the historic lighthouse and learn about maritime navigation",
        duration: "30 minutes",
        highlights: ["Historic maritime significance", "Panoramic harbor views", "Lighthouse mechanism display", "Photography opportunities"]
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
    bestFor: ["adventure seekers", "snorkelers", "families"],
    nearbyAttractions: [
      { name: "Ross Island", distance: "Boat combo", slug: "ross-island" }
    ],
    itineraries: [
      { title: "Water Sports Combo", duration: "Half-day", activities: ["Sea walk", "Snorkeling", "Glass-bottom boat ride"] }
    ],
    stayOptions: [
      { name: "City base near jetty", type: "Hotel", priceRange: "₹3,000–₹6,000", location: "Port Blair" }
    ],
    practicalInfo: {
      permits: "Activity tickets and vendor permits arranged on-site; no special island permit.",
      networkCoverage: ["BSNL"],
      atmAvailability: "No ATMs on island; withdraw in Port Blair.",
      medicalFacilities: "Basic first-aid with vendors; hospitals in Port Blair.",
      emergencyContacts: ["Emergency 112"]
    },
    weatherInfo: [
      {
        season: "Winter (November - February)",
        temperature: "23°C - 30°C",
        conditions: "Perfect for water sports with calm seas",
        seaConditions: "Excellent underwater visibility",
        visibility: "10-15 meters underwater visibility"
      },
      {
        season: "Summer (March - May)",
        temperature: "27°C - 35°C",
        conditions: "Hot but good for water activities",
        seaConditions: "Generally calm, occasional afternoon choppiness",
        visibility: "8-12 meters underwater visibility"
      },
      {
        season: "Monsoon (June - October)",
        temperature: "25°C - 32°C",
        conditions: "Frequent rain, limited water sports",
        seaConditions: "Rough seas, many activities suspended",
        visibility: "5-8 meters visibility, murky waters"
      }
    ],
    culturalInfo: {
      localCulture: "North Bay represents the modern adventure tourism aspect of Andaman, blending marine conservation with recreational activities",
      traditions: ["Marine conservation efforts", "Sustainable tourism practices", "Local fishermen cooperation"],
      festivals: ["Marine life conservation awareness events", "Adventure sports festivals"],
      languages: ["Hindi", "English", "Bengali", "Tamil"]
    },
    localCuisine: [
      {
        specialty: "Fresh Grilled Fish",
        description: "Locally caught fish grilled with island spices",
        whereToTry: "Beach shacks on North Bay",
        price: "₹200-350"
      },
      {
        specialty: "Coconut Rice",
        description: "Fragrant rice cooked in fresh coconut milk",
        whereToTry: "Local food vendors on island",
        price: "₹100-150"
      },
      {
        specialty: "Fresh Fruit Juices",
        description: "Refreshing tropical fruit juices perfect after water activities",
        whereToTry: "Beach side vendors",
        price: "₹50-80"
      }
    ],
    shopping: {
      items: ["Waterproof camera accessories", "Marine life identification guides", "Beach wear", "Underwater photography prints", "Coral-safe sunscreen"],
      markets: ["Island vendor stalls", "Water sports operator shops"],
      tips: ["Buy waterproof accessories before activities", "Coral-safe sunscreen available on island", "Limited shopping options, plan ahead"]
    },
    photography: {
      bestSpots: ["Underwater coral gardens", "Lighthouse with harbor backdrop", "Water sports action shots", "Sunset from boat deck", "Marine life close-ups"],
      goldenhours: "Golden hour: 6:00-7:00 AM and 5:30-6:30 PM for above-water shots",
      tips: ["Underwater cameras essential for best shots", "Action photography during water sports", "Wide-angle lens for lighthouse shots", "Polarizing filters reduce water glare"],
      restrictions: ["Underwater flash may disturb marine life", "No touching coral while photographing", "Respect marine sanctuary guidelines"]
    },
    seasonalActivities: [
      {
        season: "Winter (Nov-Feb)",
        activities: ["All water sports available", "Best snorkeling conditions", "Sea walking experiences", "Underwater photography", "Lighthouse visits"]
      },
      {
        season: "Summer (Mar-May)",
        activities: ["Early morning water sports", "Glass bottom boat rides", "Limited midday activities", "Evening boat tours"]
      },
      {
        season: "Monsoon (Jun-Oct)",
        activities: ["Lighthouse visits only", "Photography from covered areas", "Weather-dependent boat rides", "Indoor marine life education"]
      }
    ],
    conservation: "North Bay is part of a marine sanctuary. All activities follow strict environmental guidelines to protect coral reefs and marine life. Visitors must use reef-safe sunscreen and avoid touching marine ecosystems.",
    accessibility: ["Boat accessible with assistance", "Water sports equipment adapted for different abilities", "Life jackets provided in all sizes", "Professional instructors assist with accessibility needs"],
    budgetInfo: {
      budget: "₹2000-6000 per person depending on activities",
      costs: [
        { item: "Boat Transfer", price: "₹300-500" },
        { item: "Snorkeling", price: "₹1500" },
        { item: "Sea Walking", price: "₹4500" },
        { item: "Jet Skiing", price: "₹2500" },
        { item: "Parasailing", price: "₹3500" },
        { item: "Glass Bottom Boat", price: "₹800" },
        { item: "Food & Refreshments", price: "₹200-400" }
      ]
    },
    thingsToKnow: [
      "Best coral viewing during morning hours",
      "All water sports include safety equipment and instruction",
      "Underwater activities require basic health fitness",
      "Weather conditions can affect activity availability",
      "Combination packages offer better value",
      "Reef-safe sunscreen mandatory for marine activities",
      "Lighthouse has historical significance for Port Blair harbor",
      "Best combined with Ross Island for full day experience",
      "Carry waterproof bag for valuables"
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
    image: "",
    gallery: [],
    activities: ["Swimming", "Beach Walking", "Sunset Viewing", "Photography", "Sunbathing"],
    detailedActivities: [
      {
        name: "Swimming",
        description: "Safe swimming in coral-free crystal clear waters with lifeguard supervision",
        highlights: ["No coral reefs", "Gentle waves", "Lifeguard available", "Safe for families", "Excellent water quality", "Ideal for beginners"]
      },
      {
        name: "Sunset Viewing",
        description: "Spectacular sunset views over the Andaman Sea, ranked among world's best",
        highlights: ["Golden hour photography", "Romantic setting", "Unobstructed horizon", "Best viewpoint on the island", "Color-changing sky", "Perfect for couples"]
      },
      {
        name: "Beach Photography",
        description: "Capture the pristine beauty of Asia's best beach",
        duration: "1-3 hours",
        highlights: ["White sand compositions", "Sunset silhouettes", "Tropical forest backdrop", "Crystal water reflections", "Golden hour magic"]
      },
      {
        name: "Nature Walking",
        description: "Peaceful walks along the 2km stretch of pristine white sand",
        duration: "1-2 hours",
        highlights: ["Pristine shoreline", "Tropical bird watching", "Forest edge exploration", "Shell collecting", "Meditation spots"]
      },
      {
        name: "Beach Picnicking",
        description: "Perfect beach setting for family picnics and relaxation",
        highlights: ["Shaded areas available", "Clean beach environment", "Peaceful atmosphere", "Family-friendly setting", "Scenic dining"]
      },
      {
        name: "Sunbathing & Relaxation",
        description: "Ultimate beach relaxation on soft white sand",
        highlights: ["Soft white sand", "Natural shade from trees", "Gentle sea breeze", "Peaceful environment", "Perfect tan conditions"]
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
    bestFor: ["couples", "families", "photographers", "sunset chasers"],
    nearbyAttractions: [
      { name: "Elephant Beach", distance: "20–30 min boat/trek", slug: "elephant-beach" }
    ],
    itineraries: [
      { title: "Beach Day & Sunset", duration: "Half-day", activities: ["Swimming", "Beach walk", "Sunset viewpoint"] }
    ],
    stayOptions: [
      { name: "Beachside resort (mid-range)", type: "Resort", priceRange: "₹6,000–₹12,000", location: "Radhanagar vicinity" },
      { name: "Luxury island resort", type: "Resort", priceRange: "₹15,000+", location: "Havelock" }
    ],
    practicalInfo: {
      permits: "No special permit. Follow lifeguard instructions.",
      networkCoverage: ["BSNL", "Airtel (patchy)", "Jio (patchy)"] ,
      atmAvailability: "ATMs near Havelock market; limited.",
      medicalFacilities: "Primary health center on Havelock; first-aid at beach.",
      emergencyContacts: ["Emergency 112", "Lifeguard post on duty"]
    },
    weatherInfo: [
      {
        season: "Winter (November - February)",
        temperature: "22°C - 29°C",
        conditions: "Perfect beach weather with calm seas",
        seaConditions: "Gentle waves, excellent for swimming",
        visibility: "Crystal clear water visibility up to 20 meters"
      },
      {
        season: "Summer (March - May)",
        temperature: "26°C - 34°C",
        conditions: "Hot days, early morning and evening beach time recommended",
        seaConditions: "Calm to moderate waves, good swimming conditions",
        visibility: "Excellent water clarity, 15-20 meters"
      },
      {
        season: "Monsoon (June - October)",
        temperature: "25°C - 31°C",
        conditions: "Occasional rain showers, dramatic sky for photography",
        seaConditions: "Moderate to rough waves, swimming with caution",
        visibility: "Variable, 10-15 meters visibility"
      }
    ],
    culturalInfo: {
      localCulture: "Radhanagar Beach represents the pristine natural beauty of Andaman, beloved by locals and recognized globally as Asia's best beach",
      traditions: ["Sunset appreciation gatherings", "Beach conservation efforts", "Sustainable tourism practices", "Local fishing community respect"],
      festivals: ["Beach clean-up drives", "World Environment Day celebrations", "Sunset photography contests"],
      languages: ["Hindi", "English", "Bengali", "Tamil", "Local tribal dialects"]
    },
    localCuisine: [
      {
        specialty: "Grilled Seafood Platter",
        description: "Fresh catch of the day grilled to perfection with local spices",
        whereToTry: "Beach shacks near Radhanagar",
        price: "₹400-800"
      },
      {
        specialty: "Coconut Fish Curry",
        description: "Traditional Andaman-style fish curry with fresh coconut",
        whereToTry: "Local restaurants near the beach",
        price: "₹250-400"
      },
      {
        specialty: "Tropical Fruit Bowl",
        description: "Fresh island fruits including dragon fruit, passion fruit, and coconut",
        whereToTry: "Beach vendors and nearby cafes",
        price: "₹100-200"
      },
      {
        specialty: "Fresh Lime Soda",
        description: "Refreshing drink perfect for beach relaxation",
        whereToTry: "Beach side vendors",
        price: "₹40-80"
      }
    ],
    shopping: {
      items: ["Beach photography prints", "Sunset-themed artwork", "Seashell jewelry", "Handmade sarongs", "Local handicrafts", "Coconut products"],
      markets: ["Havelock market (10 km)", "Beach side vendors", "Local artisan stalls"],
      tips: ["Best shopping at Havelock market", "Beach vendors for quick souvenirs", "Negotiate prices respectfully", "Support local artisans"]
    },
    photography: {
      bestSpots: ["Sunset point on western shore", "Forest edge with beach backdrop", "Pristine shoreline stretches", "Silhouette shots during golden hour", "Tropical vegetation frames", "Crystal clear water reflections"],
      goldenhours: "Golden hour: 5:30-6:30 PM for sunset, 6:00-7:00 AM for sunrise shots",
      tips: ["Use graduated ND filters for sunset shots", "Capture water reflections during calm conditions", "Wide-angle lens for beach landscapes", "Portrait photography during golden hour", "Long exposure for smooth water effects"],
      restrictions: ["Respect other visitors' space", "No drone photography without permits", "Avoid flash photography during sunset gatherings"]
    },
    seasonalActivities: [
      {
        season: "Winter (Nov-Feb)",
        activities: ["All-day beach activities", "Best sunset viewing", "Swimming and sunbathing", "Beach photography", "Nature walks", "Romantic beach dinners"]
      },
      {
        season: "Summer (Mar-May)",
        activities: ["Early morning beach walks", "Sunrise photography", "Evening swimming", "Sunset viewing", "Shaded relaxation"]
      },
      {
        season: "Monsoon (Jun-Oct)",
        activities: ["Dramatic sky photography", "Monsoon beach walks", "Indoor relaxation at nearby resorts", "Rain watching from covered areas"]
      }
    ],
    conservation: "Radhanagar Beach is part of protected coastal area. Visitors must follow Leave No Trace principles, avoid littering, respect marine life, and support conservation efforts to maintain its pristine beauty.",
    accessibility: ["Easy vehicle access to beach", "Paved pathway from parking", "Accessible changing rooms", "Wheelchair-friendly boardwalk sections", "Assistance available for mobility needs"],
    budgetInfo: {
      budget: "₹300-800 per person for full beach experience",
      costs: [
        { item: "Transportation to beach", price: "₹200-400" },
        { item: "Parking", price: "₹20-50" },
        { item: "Food & Drinks", price: "₹200-500" },
        { item: "Beach chair rental (optional)", price: "₹50-100" },
        { item: "Photography services (optional)", price: "₹500-1500" }
      ]
    },
    thingsToKnow: [
      "Consistently ranked as Asia's best beach by international publications",
      "Also known as Beach No. 7 on Havelock Island",
      "Best sunset views are from 5:30-6:30 PM",
      "No coral reefs make it perfect for swimming",
      "2 km stretch of pristine white sand",
      "Lifeguard services available during peak hours",
      "Strong currents after 5 PM - swim with caution",
      "Alcohol consumption prohibited on beach",
      "Carry sun protection - limited natural shade",
      "Best combined with Elephant Beach for full Havelock experience"
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
    image: "",
    gallery: [],
    activities: ["Snorkeling", "Sea Walking", "Jet Skiing", "Banana Boat", "Parasailing", "Trekking"],
    detailedActivities: [
      {
        name: "Snorkeling",
        description: "Explore vibrant coral reefs just off the shore in shallow, accessible waters",
        duration: "45 minutes",
        price: 1500,
        highlights: ["Shallow coral reefs", "Colorful fish species", "Clear waters", "Beginner-friendly", "Equipment provided", "Professional instruction"]
      },
      {
        name: "Jungle Trekking",
        description: "Adventure trek through dense tropical forest to reach the beach",
        duration: "30 minutes",
        highlights: ["Dense forest trail", "Wildlife spotting", "Photography opportunities", "Adventure experience", "Bird watching", "Flora identification"]
      },
      {
        name: "Sea Walking",
        description: "Walk on the ocean floor while breathing normally through special helmet",
        duration: "20-25 minutes",
        price: 4000,
        highlights: ["No swimming skills required", "Breathe normally underwater", "Close coral viewing", "Marine life interaction", "Unique underwater experience"]
      },
      {
        name: "Jet Skiing",
        description: "High-speed water adventure around the coral-rich bay",
        duration: "15 minutes",
        price: 2200,
        highlights: ["Adrenaline rush", "Scenic bay views", "Professional instructor", "Safety equipment included", "Photo opportunities"]
      },
      {
        name: "Banana Boat Ride",
        description: "Fun group activity on inflatable banana-shaped boat",
        duration: "10-15 minutes",
        price: 800,
        highlights: ["Group activity", "Family-friendly fun", "Thrilling water ride", "Safe and exciting", "Great for beginners"]
      },
      {
        name: "Parasailing",
        description: "Soar above the crystal waters with bird's eye views of coral reefs",
        duration: "10 minutes",
        price: 3200,
        highlights: ["Aerial coral reef views", "Bird's eye island perspective", "Thrilling flight experience", "Professional equipment", "Unforgettable memories"]
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
    bestFor: ["snorkelers", "adventure seekers", "families"],
    nearbyAttractions: [
      { name: "Radhanagar Beach", distance: "20–30 min", slug: "radhanagar-beach" }
    ],
    itineraries: [
      { title: "Snorkeling + Trek", duration: "Half-day", activities: ["Snorkeling session", "Forest trek (optional)", "Leisure on beach"] }
    ],
    stayOptions: [
      { name: "Havelock market stays", type: "Hotel", priceRange: "₹3,000–₹7,000", location: "Govind Nagar" }
    ],
    practicalInfo: {
      permits: "Boat ticket/forest trekking route permission required; arranged locally.",
      networkCoverage: ["BSNL", "Airtel (patchy)", "Jio (patchy)"] ,
      atmAvailability: "Limited ATMs in Havelock market.",
      medicalFacilities: "Primary health center on Havelock; first-aid at activity counters.",
      emergencyContacts: ["Emergency 112"]
    },
    weatherInfo: [
      {
        season: "Winter (November - February)",
        temperature: "23°C - 30°C",
        conditions: "Perfect for all water sports with excellent visibility",
        seaConditions: "Calm waters, ideal for snorkeling",
        visibility: "15-20 meters underwater visibility"
      },
      {
        season: "Summer (March - May)",
        temperature: "27°C - 35°C",
        conditions: "Hot but great for water activities, early visits recommended",
        seaConditions: "Generally calm, occasional afternoon choppiness",
        visibility: "12-18 meters underwater visibility"
      },
      {
        season: "Monsoon (June - October)",
        temperature: "25°C - 32°C",
        conditions: "Limited activities due to rough seas and rain",
        seaConditions: "Rough waters, most water sports suspended",
        visibility: "5-10 meters visibility, murky waters"
      }
    ],
    culturalInfo: {
      localCulture: "Elephant Beach represents the adventure tourism spirit of Havelock, combining marine conservation with thrilling water sports",
      traditions: ["Sustainable water sports practices", "Coral reef conservation efforts", "Eco-friendly trekking guidelines", "Marine life protection awareness"],
      festivals: ["Adventure sports festivals", "Marine conservation awareness events", "Coral reef protection campaigns"],
      languages: ["Hindi", "English", "Bengali", "Tamil"]
    },
    localCuisine: [
      {
        specialty: "Fresh Grilled Barracuda",
        description: "Locally caught barracuda grilled with island herbs and spices",
        whereToTry: "Beach shacks near Elephant Beach entry point",
        price: "₹300-500"
      },
      {
        specialty: "Coconut Crab Curry",
        description: "Traditional Andaman-style crab curry with fresh coconut",
        whereToTry: "Local restaurants near Havelock jetty",
        price: "₹400-600"
      },
      {
        specialty: "Energy Fruit Smoothies",
        description: "Refreshing smoothies with tropical fruits, perfect after water activities",
        whereToTry: "Beach vendors and activity centers",
        price: "₹70-120"
      },
      {
        specialty: "Island Style Fish Tacos",
        description: "Fusion dish with fresh catch and local vegetables",
        whereToTry: "Beach cafes near the trekking starting point",
        price: "₹200-300"
      }
    ],
    shopping: {
      items: ["Waterproof phone cases", "Underwater cameras", "Reef-safe sunscreen", "Snorkeling gear", "Adventure sports souvenirs", "Marine life guides"],
      markets: ["Activity center shops", "Havelock market", "Beach vendor stalls"],
      tips: ["Buy waterproof accessories before activities", "Reef-safe sunscreen mandatory for coral protection", "Combo packages offer better value for multiple activities"]
    },
    photography: {
      bestSpots: ["Underwater coral gardens", "Trekking trail through forest", "Water sports action shots", "Beach with forest backdrop", "Marine life close-ups", "Sunset views from boat"],
      goldenhours: "Golden hour: 6:00-7:00 AM for forest trek, 5:30-6:30 PM for beach shots",
      tips: ["Underwater camera essential for coral shots", "Action shots during water sports", "Forest photography during trek", "Use underwater housing for phone cameras", "Capture both adventure and nature elements"],
      restrictions: ["No flash photography underwater", "Respect coral reefs - no touching while photographing", "Follow guide instructions during underwater photography"]
    },
    seasonalActivities: [
      {
        season: "Winter (Nov-Feb)",
        activities: ["All water sports available", "Best snorkeling conditions", "Jungle trekking", "Underwater photography", "Sea walking experiences", "Beach relaxation"]
      },
      {
        season: "Summer (Mar-May)",
        activities: ["Early morning water sports", "Snorkeling before noon", "Forest trekking in early hours", "Limited afternoon water activities"]
      },
      {
        season: "Monsoon (Jun-Oct)",
        activities: ["Forest trekking (weather permitting)", "Photography from covered areas", "Very limited water sports", "Indoor activity planning"]
      }
    ],
    conservation: "Elephant Beach is part of a marine protected area. All activities follow strict environmental guidelines. Visitors must use reef-safe sunscreen, avoid touching corals, and support sustainable tourism practices to preserve this underwater paradise.",
    accessibility: ["Boat accessible with assistance", "Forest trek requires moderate fitness", "Water sports equipment available for different abilities", "Professional guides assist with special needs", "Alternative boat access for mobility-impaired visitors"],
    budgetInfo: {
      budget: "₹2500-7000 per person depending on activities chosen",
      costs: [
        { item: "Boat Transfer", price: "₹400-600" },
        { item: "Trek Guide (optional)", price: "₹200-300" },
        { item: "Snorkeling", price: "₹1500" },
        { item: "Sea Walking", price: "₹4000" },
        { item: "Jet Skiing", price: "₹2200" },
        { item: "Parasailing", price: "₹3200" },
        { item: "Banana Boat", price: "₹800" },
        { item: "Food & Refreshments", price: "₹200-400" }
      ]
    },
    thingsToKnow: [
      "Combine boat ride and trekking for complete adventure experience",
      "Best coral viewing during morning hours when visibility is maximum",
      "All water sports include safety equipment and professional instruction",
      "Reef-safe sunscreen is mandatory to protect marine ecosystem",
      "Forest trek is moderate difficulty - wear proper footwear",
      "Combo packages offer significant savings for multiple activities",
      "Weather conditions can affect activity availability",
      "Trekking route has wildlife including birds and butterflies",
      "Underwater activities require basic health and fitness",
      "Perfect combination with Radhanagar Beach for full Havelock experience"
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
    image: "",
    gallery: [],
    activities: ["Snorkeling", "Glass Bottom Boat", "Swimming", "Beach Walking", "Photography"],
    detailedActivities: [
      {
        name: "Glass Bottom Boat Ride",
        description: "View underwater coral gardens without getting wet, perfect for all ages",
        duration: "30 minutes",
        price: 800,
        highlights: ["Coral reef viewing", "Marine life spotting", "Dry underwater exploration", "Professional guide", "Family-friendly", "Educational commentary"]
      },
      {
        name: "Snorkeling",
        description: "Explore shallow coral reefs near the shore, ideal for beginners",
        duration: "45 minutes",
        price: 1200,
        highlights: ["Beginner-friendly", "Shallow coral reefs", "Colorful fish", "Equipment provided", "Professional instruction", "Safe environment"]
      },
      {
        name: "Swimming & Beach Activities",
        description: "Safe swimming in the shallow lagoon with pristine white sand",
        highlights: ["Shallow safe waters", "Clean white sand", "Family-friendly", "No strong currents", "Natural beach setting"]
      },
      {
        name: "Coral Garden Exploration",
        description: "Guided exploration of nearby coral formations",
        duration: "1 hour",
        price: 600,
        highlights: ["Professional marine guide", "Coral identification", "Marine life education", "Photography opportunities", "Conservation awareness"]
      },
      {
        name: "Beach Photography",
        description: "Capture the pristine beauty of Neil Island's most accessible beach",
        duration: "1-2 hours",
        highlights: ["Clear water compositions", "Coral formations", "Family portraits", "Underwater photography", "Sunset opportunities"]
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
    bestFor: ["families", "snorkelers", "first-time visitors"],
    nearbyAttractions: [
      { name: "Natural Bridge", distance: "10–15 min", slug: "natural-bridge" }
    ],
    itineraries: [
      { title: "Snorkeling & Glass Boat", duration: "3–4 hours", activities: ["Glass bottom boat ride", "Snorkeling", "Beach time"] }
    ],
    stayOptions: [
      { name: "Neil market stay", type: "Hotel", priceRange: "₹2,500–₹5,000", location: "Near Jetty" }
    ],
    practicalInfo: {
      permits: "No special permit required.",
      networkCoverage: ["BSNL", "Airtel", "Jio"],
      atmAvailability: "ATMs near Neil Jetty and market.",
      medicalFacilities: "Primary health center on Neil Island.",
      emergencyContacts: ["Emergency 112"]
    },
    weatherInfo: [
      {
        season: "Winter (November - February)",
        temperature: "22°C - 29°C",
        conditions: "Perfect beach weather with excellent water clarity",
        seaConditions: "Calm shallow waters, ideal for all activities",
        visibility: "12-18 meters underwater visibility"
      },
      {
        season: "Summer (March - May)",
        temperature: "25°C - 33°C",
        conditions: "Warm but pleasant for water activities",
        seaConditions: "Generally calm, perfect for glass boat rides",
        visibility: "10-15 meters underwater visibility"
      },
      {
        season: "Monsoon (June - October)",
        temperature: "24°C - 31°C",
        conditions: "Occasional rain, limited water activities",
        seaConditions: "Choppy waters, glass boat rides weather dependent",
        visibility: "6-10 meters visibility"
      }
    ],
    culturalInfo: {
      localCulture: "Bharatpur Beach represents the gentle, family-friendly side of Neil Island, emphasizing sustainable coral viewing and education",
      traditions: ["Coral conservation awareness", "Family-friendly tourism", "Sustainable glass boat operations", "Marine education programs"],
      festivals: ["Coral conservation awareness days", "Family beach festivals", "Marine life education events"],
      languages: ["Hindi", "English", "Bengali", "Tamil"]
    },
    localCuisine: [
      {
        specialty: "Neil Island Fish Curry",
        description: "Local style fish curry with coconut and island spices",
        whereToTry: "Beachside restaurants near Bharatpur",
        price: "₹200-350"
      },
      {
        specialty: "Fresh Coconut Water",
        description: "Refreshing natural drink perfect after beach activities",
        whereToTry: "Beach vendors and local stalls",
        price: "₹30-50"
      },
      {
        specialty: "Vegetable Thali",
        description: "Complete vegetarian meal with locally grown vegetables",
        whereToTry: "Local restaurants near Neil market",
        price: "₹120-200"
      },
      {
        specialty: "Banana Fritters",
        description: "Sweet local snack made from island-grown bananas",
        whereToTry: "Beach side vendors",
        price: "₹40-70"
      }
    ],
    shopping: {
      items: ["Coral-themed jewelry", "Glass bottom boat model souvenirs", "Marine life guidebooks", "Neil Island postcards", "Handmade crafts", "Local artwork"],
      markets: ["Neil Island market", "Beach vendor stalls", "Jetty area shops"],
      tips: ["Support local artisans", "Coral jewelry supports conservation", "Best souvenir selection at Neil market"]
    },
    photography: {
      bestSpots: ["Glass bottom boat coral viewing", "Shallow water coral formations", "Beach with clear water backdrop", "Sunset from jetty area", "Family beach activities", "Underwater coral shots"],
      goldenhours: "Golden hour: 6:00-7:00 AM and 5:30-6:30 PM for beach photography",
      tips: ["Underwater camera recommended for coral shots", "Polarizing filter reduces water glare", "Wide-angle lens for beach landscapes", "Family portrait opportunities abundant"],
      restrictions: ["No flash photography underwater", "Respect coral reefs - no touching", "Follow glass boat guide instructions for photography"]
    },
    seasonalActivities: [
      {
        season: "Winter (Nov-Feb)",
        activities: ["Glass bottom boat rides", "Best snorkeling conditions", "Beach swimming", "Coral garden exploration", "Family beach activities", "Photography sessions"]
      },
      {
        season: "Summer (Mar-May)",
        activities: ["Early morning activities", "Glass boat rides", "Swimming in shallow waters", "Beach relaxation", "Coral viewing"]
      },
      {
        season: "Monsoon (Jun-Oct)",
        activities: ["Limited glass boat rides", "Beach walks", "Photography from shore", "Indoor marine education"]
      }
    ],
    conservation: "Bharatpur Beach is part of Neil Island's marine conservation area. Glass bottom boat operations follow strict guidelines to protect coral reefs. Visitors support conservation through responsible tourism and education about marine ecosystems.",
    accessibility: ["Easy walking access from jetty", "Shallow waters safe for all ages", "Glass bottom boats accommodate different mobility levels", "Beach wheelchair access with assistance", "Family-friendly facilities"],
    budgetInfo: {
      budget: "₹500-1500 per person for complete beach experience",
      costs: [
        { item: "Glass Bottom Boat", price: "₹800" },
        { item: "Snorkeling", price: "₹1200" },
        { item: "Coral Garden Tour", price: "₹600" },
        { item: "Food & Refreshments", price: "₹150-300" },
        { item: "Local Transport", price: "₹50-100" }
      ]
    },
    thingsToKnow: [
      "Most accessible beach on Neil Island, just 1 km from jetty",
      "Perfect for families with children due to shallow, safe waters",
      "Glass bottom boat rides are weather dependent",
      "Best coral viewing during high tide",
      "Snorkeling is beginner-friendly with shallow reefs",
      "Combine with Natural Bridge visit for complete Neil experience",
      "Walking distance from Neil Island accommodations",
      "Less crowded than Havelock beaches",
      "Excellent introduction to coral reef ecosystems",
      "Photography opportunities both above and below water"
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
    image: "",
    gallery: [],
    activities: ["Photography", "Nature Viewing", "Rock Exploration", "Sunrise Viewing", "Tide Pool Exploration"],
    detailedActivities: [
      {
        name: "Natural Bridge Photography",
        description: "Capture the stunning coral arch formation and surrounding landscape",
        duration: "1-2 hours",
        highlights: ["Unique geological formation", "Low tide accessibility", "Sunrise golden hour shots", "Natural rock formations", "Dramatic coastal scenery"]
      },
      {
        name: "Tide Pool Exploration",
        description: "Discover marine life in natural rock pools during low tide",
        duration: "45 minutes",
        highlights: ["Small marine creatures", "Natural aquariums", "Educational experience", "Safe exploration", "Colorful sea anemones"]
      },
      {
        name: "Sunrise Viewing",
        description: "Experience breathtaking sunrise over the natural bridge formation",
        duration: "1 hour",
        highlights: ["Golden hour lighting", "Peaceful atmosphere", "Spectacular colors", "Perfect photo opportunities", "Romantic setting"]
      },
      {
        name: "Geological Study",
        description: "Learn about coral formation and coastal erosion processes",
        duration: "30-45 minutes",
        highlights: ["Natural architecture", "Erosion patterns", "Coral growth understanding", "Educational value", "Environmental awareness"]
      },
      {
        name: "Nature Walking",
        description: "Explore the coastal area and surrounding rock formations",
        duration: "1 hour",
        highlights: ["Coastal trail", "Rock climbing opportunities", "Natural sculptures", "Wildlife spotting", "Exercise and exploration"]
      }
    ],
    highlights: [
      {
        title: "Natural Coral Arch",
        description: "Stunning natural formation created by coral and erosion over thousands of years",
        image: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Tide-dependent Wonder",
        description: "Best experienced during low tide when the formation is fully accessible",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    bestTimeToVisit: "During low tide for best views and accessibility",
    howToReach: "2 km from Neil Island Jetty by auto-rickshaw or bicycle",
    travelInfo: {
      distanceFromJetty: "2 km",
      transportOptions: ["Auto-rickshaw", "Bicycle", "Walking", "Scooter rental"],
      nearestAirport: "Veer Savarkar International Airport (via Port Blair ferry)",
      bestWayToTravel: "Auto-rickshaw or bicycle"
    },
    timings: {
      openTime: "24 hours",
      specialTimings: "Best visited during low tide - check tide charts"
    },
    ticketInfo: {
      entryFee: 0
    },
    quickInfo: {
      "Distance from Neil Jetty": "2 km",
      "Entry Ticket": "Free",
      "Best Time": "Low tide (morning hours)",
      "Duration": "1-2 hours",
      "Activities": "Photography, nature viewing, exploration"
    },
    facilities: ["Basic pathway", "Natural seating areas", "Photography spots", "Tide chart information"],
    safetyTips: [
      "Visit only during low tide for safety",
      "Be careful on wet rocks",
      "Check tide timings before visiting",
      "Wear appropriate footwear for rocky terrain"
    ],
    tips: [
      "Visit early morning for best light and fewer crowds",
      "Check tide timings with locals before visiting",
      "Carry water and sun protection",
      "Best combined with sunrise viewing",
      "Wear shoes with good grip for rocky areas"
    ],
    bestFor: ["photographers", "nature lovers", "couples", "geology enthusiasts"],
    nearbyAttractions: [
      { name: "Bharatpur Beach", distance: "10–15 min", slug: "bharatpur-beach" },
      { name: "Laxmanpur Beach", distance: "5-10 min", description: "Sunset viewing point" }
    ],
    itineraries: [
      { title: "Low Tide Walk & Photos", duration: "1–2 hours", activities: ["Walk to coral arch", "Tide pool exploration", "Sunrise photos", "Geological observation"] },
      { title: "Sunrise Photography Tour", duration: "2-3 hours", activities: ["Early morning arrival", "Sunrise photography", "Natural bridge exploration", "Coastal walk"] }
    ],
    stayOptions: [
      { name: "Neil Island cottages", type: "Resort", priceRange: "₹3,000–₹8,000", location: "Laxmanpur" },
      { name: "Budget homestays", type: "Homestay", priceRange: "₹1,500-3,000", location: "Neil Island market area" }
    ],
    practicalInfo: {
      permits: "No permit required. Visit only during safe low tide windows.",
      networkCoverage: ["BSNL", "Airtel (varies)", "Jio (varies)"] ,
      atmAvailability: "ATMs in Neil market.",
      medicalFacilities: "Primary health center at Neil.",
      emergencyContacts: ["Emergency 112"]
    },
    weatherInfo: [
      {
        season: "Winter (November - February)",
        temperature: "20°C - 28°C",
        conditions: "Perfect for sunrise viewing and photography",
        seaConditions: "Low tide timing most predictable"
      },
      {
        season: "Summer (March - May)",
        temperature: "24°C - 32°C",
        conditions: "Early morning visits recommended",
        seaConditions: "Good low tide access"
      },
      {
        season: "Monsoon (June - October)",
        temperature: "23°C - 30°C",
        conditions: "Limited access due to rough seas",
        seaConditions: "Unpredictable tides, visit with caution"
      }
    ],
    culturalInfo: {
      localCulture: "Natural Bridge represents the geological wonders of Neil Island, locally known as Howrah Bridge connecting the community to nature",
      traditions: ["Local fishing community landmark", "Traditional navigation reference point", "Natural heritage preservation"],
      festivals: ["Nature photography contests", "Geology awareness events"],
      languages: ["Hindi", "English", "Bengali", "Tamil"]
    },
    localCuisine: [
      {
        specialty: "Morning Tea & Biscuits",
        description: "Perfect refreshment for early morning visitors",
        whereToTry: "Local tea stalls near Neil market",
        price: "₹20-40"
      },
      {
        specialty: "Fresh Fruit Breakfast",
        description: "Healthy start with locally grown tropical fruits",
        whereToTry: "Homestays and local cafes",
        price: "₹80-150"
      }
    ],
    shopping: {
      items: ["Geological formation postcards", "Natural bridge photography prints", "Local handmade jewelry", "Neil Island souvenirs"],
      markets: ["Neil Island market", "Local craft vendors"],
      tips: ["Limited shopping options", "Best souvenirs at Neil market", "Support local artisans"]
    },
    photography: {
      bestSpots: ["Natural bridge arch", "Sunrise from eastern viewpoint", "Tide pool formations", "Surrounding rock sculptures", "Coastal landscape"],
      goldenhours: "Golden hour: 6:00-7:30 AM for sunrise, avoid harsh midday light",
      tips: ["Wide-angle lens essential for full arch shot", "Polarizing filter for water clarity", "Low tide timing crucial", "Sunrise photography most rewarding", "Macro lens for tide pool life"],
      restrictions: ["No climbing on the bridge structure", "Respect natural formation", "Leave no trace principles"]
    },
    seasonalActivities: [
      {
        season: "Winter (Nov-Feb)",
        activities: ["Sunrise photography", "Best low tide access", "Comfortable exploration", "Tide pool discovery", "Geological study"]
      },
      {
        season: "Summer (Mar-May)",
        activities: ["Early morning visits", "Photography before heat", "Quick exploration", "Sunrise viewing"]
      },
      {
        season: "Monsoon (Jun-Oct)",
        activities: ["Limited access", "Dramatic weather photography", "Indoor planning for visits"]
      }
    ],
    conservation: "Natural Bridge is a protected geological formation. Visitors must not climb on or damage the coral structure. The site demonstrates natural coastal erosion and coral growth processes, serving as an educational example of marine geology.",
    accessibility: ["Uneven rocky terrain", "Not wheelchair accessible", "Requires basic mobility", "Assistance needed for elderly visitors", "Good footwear essential"],
    budgetInfo: {
      budget: "₹100-300 per person for complete experience",
      costs: [
        { item: "Transportation to site", price: "₹50-150" },
        { item: "Guide (optional)", price: "₹100-200" },
        { item: "Refreshments", price: "₹50-100" }
      ]
    },
    thingsToKnow: [
      "Also known locally as Howrah Bridge",
      "Best visited during low tide - check tide charts",
      "Formation created by natural coral growth and erosion",
      "Perfect for sunrise photography",
      "Rocky terrain requires careful walking",
      "No facilities on site - plan accordingly",
      "Weather dependent - avoid during rough seas",
      "Combine with Bharatpur Beach for full Neil experience",
      "Early morning visits avoid crowds and heat",
      "Geological significance makes it educational destination"
    ],
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
    image: "",
    gallery: [],
    activities: ["Cave Exploration", "Photography", "Boat Ride", "Nature Walk", "Geological Study", "Mangrove Tour"],
    detailedActivities: [
      {
        name: "Limestone Cave Exploration",
        description: "Guided exploration of magnificent underground chambers with stalactites and stalagmites",
        duration: "1.5-2 hours",
        highlights: ["Ancient limestone formations", "Underground chambers", "Natural sculptures", "Bat colonies", "Geological education", "Professional guide commentary"]
      },
      {
        name: "Mangrove Creek Boat Ride",
        description: "Scenic boat journey through pristine mangrove ecosystems to reach the caves",
        duration: "45 minutes each way",
        highlights: ["Mangrove biodiversity", "Bird watching", "Saltwater crocodile spotting", "Pristine waterways", "Eco-system education"]
      },
      {
        name: "Forest Trekking",
        description: "Trek through dense tropical forest from boat landing to cave entrance",
        duration: "20-30 minutes",
        highlights: ["Tropical flora identification", "Wildlife spotting", "Forest canopy experience", "Nature photography", "Fresh air immersion"]
      },
      {
        name: "Geological Photography",
        description: "Capture the stunning natural formations and cave architecture",
        duration: "Throughout visit",
        highlights: ["Stalactite formations", "Underground lighting effects", "Natural textures", "Architectural perspectives", "Artistic compositions"]
      },
      {
        name: "Wildlife Observation",
        description: "Observe bat colonies and other cave-dwelling creatures",
        duration: "30 minutes",
        highlights: ["Bat behavior study", "Cave ecosystem", "Nocturnal wildlife", "Natural habitat observation", "Conservation awareness"]
      }
    ],
    highlights: [
      {
        title: "Stalactite Formations",
        description: "Ancient limestone formations creating natural sculptures",
        image: "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    bestTimeToVisit: "October to March",
    howToReach: "90 km from Port Blair + boat ride through mangroves",
    bestFor: ["adventure seekers", "nature lovers", "photographers"],
    nearbyAttractions: [
      { name: "Mud Volcano (Baratang)", distance: "30–45 min", slug: "mud-volcano" }
    ],
    itineraries: [
      { title: "Caves Day Trip", duration: "Full-day", activities: ["Convoy road to Baratang", "Mangrove boat ride", "Forest walk to caves"] }
    ],
    stayOptions: [
      { name: "Basic Baratang stay", type: "Guesthouse", priceRange: "₹1,500–₹3,000", location: "Baratang" }
    ],
    practicalInfo: {
      permits: "Convoy timings through Jarawa reserve; permits checked at check-post; follow all rules.",
      networkCoverage: ["BSNL (spotty)"] ,
      atmAvailability: "Very limited; carry cash.",
      medicalFacilities: "Basic first-aid at Baratang; advanced care in Port Blair.",
      emergencyContacts: ["Emergency 112"]
    },
    weatherInfo: [
      {
        season: "Winter (November - February)",
        temperature: "20°C - 28°C",
        conditions: "Perfect for trekking and cave exploration",
        seaConditions: "Calm mangrove waters, comfortable boat rides"
      },
      {
        season: "Summer (March - May)",
        temperature: "25°C - 35°C",
        conditions: "Hot but manageable with early morning start",
        seaConditions: "Generally calm waters"
      },
      {
        season: "Monsoon (June - October)",
        temperature: "24°C - 32°C",
        conditions: "Heavy rains, limited access, slippery cave conditions",
        seaConditions: "Rough waters, boat rides may be cancelled"
      }
    ],
    culturalInfo: {
      localCulture: "Baratang represents the untouched natural heritage of Andaman, home to indigenous Jarawa tribe with strict conservation protocols",
      traditions: ["Indigenous tribe protection", "Natural heritage conservation", "Sustainable eco-tourism", "Geological preservation"],
      festivals: ["World Environment Day events", "Geological heritage awareness programs"],
      languages: ["Hindi", "English", "Bengali", "Local tribal dialects"]
    },
    localCuisine: [
      {
        specialty: "Packed Lunch from Port Blair",
        description: "Most visitors carry packed meals due to limited dining options",
        whereToTry: "Prepare from Port Blair hotels/restaurants",
        price: "₹200-400"
      },
      {
        specialty: "Basic Local Meals",
        description: "Simple vegetarian meals available at Baratang village",
        whereToTry: "Local dhabas in Baratang",
        price: "₹80-150"
      },
      {
        specialty: "Fresh Coconut Water",
        description: "Refreshing natural drink available from local vendors",
        whereToTry: "Baratang village and boat landing",
        price: "₹30-50"
      }
    ],
    shopping: {
      items: ["Geological specimens (allowed types)", "Handmade tribal crafts (ethically sourced)", "Cave photography prints", "Nature guidebooks"],
      markets: ["Very limited local vendors", "Better shopping in Port Blair"],
      tips: ["Minimal shopping opportunities", "Respect tribal area regulations", "No collection of natural specimens from caves"]
    },
    photography: {
      bestSpots: ["Cave stalactite formations", "Underground chambers with natural lighting", "Mangrove creek boat journey", "Forest trekking path", "Boat landing wooden walkways"],
      goldenhours: "Cave photography independent of external light; mangrove shots best in morning 7:00-9:00 AM",
      tips: ["Bring powerful flashlight for cave photography", "Waterproof camera housing for boat ride", "Wide-angle lens for cave chambers", "Respect no-flash zones for bat protection"],
      restrictions: ["No flash photography near bat colonies", "Follow guide instructions for photography spots", "No touching cave formations while photographing"]
    },
    seasonalActivities: [
      {
        season: "Winter (Nov-Feb)",
        activities: ["Best cave exploration conditions", "Comfortable trekking", "Optimal boat rides", "Clear photography conditions", "Wildlife observation"]
      },
      {
        season: "Summer (Mar-May)",
        activities: ["Early morning departures essential", "Cave exploration (cooler underground)", "Quick forest treks", "Mangrove boat rides"]
      },
      {
        season: "Monsoon (Jun-Oct)",
        activities: ["Very limited access", "Potential cave closure", "Alternative indoor activities", "Trip planning for post-monsoon"]
      }
    ],
    conservation: "Baratang limestone caves are part of protected geological heritage. Visitors must follow strict guidelines: no touching formations, no littering, respect for indigenous territories, and sustainable tourism practices to preserve these million-year-old natural wonders.",
    accessibility: ["Moderate fitness required for trek", "Not wheelchair accessible", "Cave walking requires mobility", "Boat transfer with assistance possible", "Guide support available for elderly visitors"],
    budgetInfo: {
      budget: "₹2,500-4,000 per person for complete experience",
      costs: [
        { item: "Convoy permit & transport", price: "₹1,500-2,500" },
        { item: "Cave entry ticket", price: "₹25" },
        { item: "Boat ride (round trip)", price: "₹300-500" },
        { item: "Guide charges", price: "₹200-400" },
        { item: "Meals & refreshments", price: "₹300-500" },
        { item: "Photography charges", price: "₹100-200" }
      ]
    },
    thingsToKnow: [
      "Journey through Jarawa tribal reserve requires strict protocol adherence",
      "Convoy timings are fixed - missing return convoy means overnight stay",
      "Cave formations are millions of years old - touching damages them permanently",
      "Moderate fitness required for 20-30 minute forest trek",
      "Caves maintain cool temperature year-round (20-25°C)",
      "Boat ride through mangroves offers excellent bird watching opportunities",
      "Photography inside caves requires good flash or powerful torch",
      "Monsoon season (June-October) may have limited or no access",
      "Best combined with Mud Volcano for full Baratang experience",
      "Advance booking essential due to limited convoy permits"
    ],
    slug: "limestone-caves",
    category: "baratang",
    region: "middle"
  },

  {
    name: "Mud Volcano",
    description: "Unique geological phenomenon",
    longDescription: `The Mud Volcano in Baratang is a rare geological phenomenon where natural gas pushes mud and water up through the earth's surface, creating small volcano-like formations. This unique attraction offers visitors a chance to witness an active geological process.`,
    image: "",
    gallery: [],
    activities: ["Geological Study", "Photography", "Nature Observation", "Scientific Education", "Landscape Exploration"],
    detailedActivities: [
      {
        name: "Geological Observation",
        description: "Study the rare mud volcano phenomenon and understand geological processes",
        duration: "1-1.5 hours",
        highlights: ["Active mud bubbling", "Natural gas emissions", "Geological formations", "Scientific explanation", "Rare phenomenon study"]
      },
      {
        name: "Educational Photography",
        description: "Document this unique geological wonder for educational purposes",
        duration: "45 minutes",
        highlights: ["Volcanic mud activity", "Scientific documentation", "Natural process capture", "Educational content creation"]
      },
      {
        name: "Nature Study",
        description: "Observe the interaction between geological and biological systems",
        duration: "30 minutes",
        highlights: ["Ecosystem adaptation", "Geological impact on environment", "Natural science education", "Environmental awareness"]
      },
      {
        name: "Landscape Exploration",
        description: "Explore the surrounding area affected by volcanic activity",
        duration: "1 hour",
        highlights: ["Geological landscape", "Environmental impact study", "Natural formations", "Scientific curiosity"]
      }
    ],
    highlights: [
      {
        title: "Active Mud Formation",
        description: "Witness the rare geological phenomenon of mud volcanism in real-time",
        image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Geological Wonder",
        description: "One of the few places in India to observe active geological processes",
        image: "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    bestTimeToVisit: "October to March for comfortable observation conditions",
    howToReach: "100 km from Port Blair via convoy road + additional local transport",
    travelInfo: {
      distanceFromAirport: "100 km by road",
      transportOptions: ["Government convoy", "Tour operator packages", "Private vehicle (with permits)"],
      nearestAirport: "Veer Savarkar International Airport, Port Blair",
      bestWayToTravel: "Government convoy with geological guide"
    },
    timings: {
      openTime: "8:00 AM",
      closeTime: "4:00 PM",
      specialTimings: "Follow same convoy timings as Limestone Caves"
    },
    ticketInfo: {
      entryFee: 20
    },
    quickInfo: {
      "Distance from Port Blair": "100 km + local transport",
      "Entry Ticket": "₹20 per person",
      "Best Time": "Morning hours",
      "Duration": "2-3 hours",
      "Phenomenon": "Active geological process"
    },
    facilities: ["Observation platform", "Safety barriers", "Geological information boards", "Guided explanations"],
    safetyTips: [
      "Maintain safe distance from active mud pools",
      "Do not step on soft muddy areas",
      "Follow safety barriers and guide instructions",
      "Be aware of natural gas emissions",
      "Stay on designated viewing paths"
    ],
    tips: [
      "Combine with Limestone Caves for full Baratang experience",
      "Bring geological curiosity and questions for guides",
      "Wear appropriate footwear for uneven terrain",
      "Best observation during daylight hours",
      "Educational value enhanced with scientific background"
    ],
    bestFor: ["geology enthusiasts", "nature lovers", "students", "scientists", "educational tourists"],
    nearbyAttractions: [
      { name: "Limestone Caves", distance: "30-45 min", slug: "limestone-caves" },
      { name: "Parrot Island", distance: "45 min", description: "Evening parrot gathering" }
    ],
    itineraries: [
      { title: "Baratang Combo", duration: "Full-day", activities: ["Mud volcano observation", "Geological study", "Optional limestone caves visit", "Educational tour"] },
      { title: "Geological Wonder Tour", duration: "Half-day", activities: ["Scientific observation", "Photography session", "Educational discussion"] }
    ],
    stayOptions: [
      { name: "Basic Baratang accommodation", type: "Guesthouse", priceRange: "₹1,200-2,500", location: "Baratang village" },
      { name: "Port Blair base", type: "Hotel", priceRange: "₹3,000-8,000", location: "Port Blair (day trip)" }
    ],
    practicalInfo: {
      permits: "Same convoy/permit rules as Baratang route.",
      networkCoverage: ["BSNL (spotty)"] ,
      atmAvailability: "Very limited; carry cash.",
      medicalFacilities: "Basic first-aid; advanced care in Port Blair.",
      emergencyContacts: ["Emergency 112"]
    },
    weatherInfo: [
      {
        season: "Winter (November - February)",
        temperature: "20°C - 28°C",
        conditions: "Perfect for geological observation",
        seaConditions: "Stable weather for safe observation"
      },
      {
        season: "Summer (March - May)",
        temperature: "25°C - 35°C",
        conditions: "Hot but manageable for short visits",
        seaConditions: "Stable conditions"
      },
      {
        season: "Monsoon (June - October)",
        temperature: "24°C - 32°C",
        conditions: "Limited access due to rains and safety concerns",
        seaConditions: "Unsafe observation conditions"
      }
    ],
    culturalInfo: {
      localCulture: "Mud Volcano represents the geological diversity of Andaman and scientific importance of natural phenomena preservation",
      traditions: ["Geological heritage protection", "Scientific education promotion", "Natural wonder appreciation"],
      festivals: ["Science awareness events", "Geological education programs"],
      languages: ["Hindi", "English", "Bengali"]
    },
    localCuisine: [
      {
        specialty: "Scientific Picnic Lunch",
        description: "Packed meals for educational field trips",
        whereToTry: "Prepare from Port Blair or Baratang",
        price: "₹150-300"
      },
      {
        specialty: "Local Tea & Snacks",
        description: "Simple refreshments at Baratang village",
        whereToTry: "Local vendors near site",
        price: "₹50-100"
      }
    ],
    shopping: {
      items: ["Geological educational materials", "Scientific photography prints", "Educational books on volcanism"],
      markets: ["Very limited options", "Educational materials in Port Blair"],
      tips: ["Focus on educational materials", "Limited commercial shopping", "Best geological books in Port Blair"]
    },
    photography: {
      bestSpots: ["Active mud bubbling areas", "Geological formations", "Scientific observation angles", "Educational documentation shots"],
      goldenhours: "Scientific documentation best during 9:00 AM - 3:00 PM for clear visibility",
      tips: ["Use macro lens for mud bubble details", "Wide shots for geological context", "Educational angle for scientific value", "Respect safety boundaries while photographing"],
      restrictions: ["No close-up photography of active emissions", "Follow safety barrier guidelines", "Respect geological preservation protocols"]
    },
    seasonalActivities: [
      {
        season: "Winter (Nov-Feb)",
        activities: ["Best observation conditions", "Scientific study", "Educational photography", "Geological documentation"]
      },
      {
        season: "Summer (Mar-May)",
        activities: ["Early morning observations", "Quick scientific visits", "Educational tours"]
      },
      {
        season: "Monsoon (Jun-Oct)",
        activities: ["Very limited access", "Alternative geological education", "Indoor scientific programs"]
      }
    ],
    conservation: "Mud Volcano is a rare geological phenomenon requiring protection. Visitors must not disturb the natural process, maintain safe distances, and contribute to scientific understanding through responsible observation and education.",
    accessibility: ["Observation platform accessible", "Limited mobility support", "Safety barriers for all visitors", "Educational materials for different learning needs"],
    budgetInfo: {
      budget: "₹1,500-2,500 per person including transport",
      costs: [
        { item: "Convoy transport", price: "₹1,200-2,000" },
        { item: "Entry ticket", price: "₹20" },
        { item: "Local guide", price: "₹150-300" },
        { item: "Refreshments", price: "₹100-200" }
      ]
    },
    thingsToKnow: [
      "One of the few active mud volcanoes in India",
      "Geological phenomenon caused by natural gas pushing mud upward",
      "Safe observation distance must be maintained at all times",
      "Best educational value with geological background knowledge",
      "Combine with Limestone Caves for complete geological experience",
      "Scientific importance makes it valuable for educational tourism",
      "Weather dependent access during monsoon season",
      "Photography restricted to safe observation areas",
      "Local guides provide valuable geological insights",
      "Advance convoy booking required for access"
    ],
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
    image: "",
    gallery: [],
    activities: ["Beach Walking", "Snorkeling", "Photography", "Swimming", "Island Hopping", "Tide Pool Exploration"],
    detailedActivities: [
      {
        name: "Sandbar Walking",
        description: "Walk between two islands on the natural white sand bridge during low tide",
        duration: "1-2 hours",
        highlights: ["Unique experience", "360-degree ocean views", "Perfect photo opportunities", "Natural phenomenon", "Pristine white sand", "Tide-dependent timing"]
      },
      {
        name: "Snorkeling Adventure",
        description: "Explore vibrant coral reefs and marine life in crystal clear waters",
        duration: "45 minutes",
        price: 1800,
        highlights: ["Pristine coral reefs", "Colorful tropical fish", "Excellent water clarity", "Diverse marine life", "Professional equipment provided"]
      },
      {
        name: "Beach Photography",
        description: "Capture the stunning natural phenomenon and pristine beaches",
        duration: "2-3 hours",
        highlights: ["Sandbar photography", "Drone shots (with permits)", "Sunset opportunities", "Unique geological formations", "Pristine landscape shots"]
      },
      {
        name: "Island Picnicking",
        description: "Enjoy a peaceful picnic on one of the most remote beaches in India",
        duration: "3-4 hours",
        highlights: ["Secluded dining", "Pristine environment", "Fresh sea breeze", "Peaceful atmosphere", "Memorable experience"]
      },
      {
        name: "Swimming & Beach Activities",
        description: "Swim in pristine waters and enjoy various beach activities",
        highlights: ["Crystal clear waters", "Safe swimming conditions", "Beach volleyball", "Shell collecting", "Sunbathing on white sand"]
      }
    ],
    highlights: [
      {
        title: "Natural Sandbar",
        description: "Walk between two islands during low tide on pristine white sand",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Pristine Twin Islands",
        description: "Experience untouched natural beauty at the northern tip of Andaman",
        image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Excellent Snorkeling",
        description: "Explore vibrant coral reefs in some of the clearest waters in Andaman",
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    bestTimeToVisit: "December to March for optimal weather and tide conditions",
    howToReach: "230 km from Port Blair by road to Aerial Bay + boat ride",
    travelInfo: {
      distanceFromAirport: "230 km by road + boat",
      distanceFromJetty: "45 minutes by boat from Aerial Bay",
      transportOptions: ["Road to Diglipur", "Boat from Aerial Bay", "Charter helicopter (special occasions)"],
      nearestAirport: "Veer Savarkar International Airport, Port Blair",
      bestWayToTravel: "Road to Diglipur + boat transfer"
    },
    timings: {
      openTime: "6:00 AM",
      closeTime: "5:00 PM",
      specialTimings: "Sandbar walking best during low tide - check tide charts"
    },
    ticketInfo: {
      entryFee: 50,
      childrenFee: 25
    },
    quickInfo: {
      "Distance from Port Blair": "230 km + boat ride",
      "Entry Ticket": "₹50 per person",
      "Best Time": "Low tide for sandbar walking",
      "Duration": "Full day trip",
      "Unique Feature": "Natural sandbar connection"
    },
    facilities: ["Basic toilet facilities", "Boat landing", "Picnic areas", "Snorkeling equipment rental", "Emergency communication"],
    safetyTips: [
      "Check tide timings before sandbar walking",
      "Stay aware of tide changes while on sandbar",
      "Wear sun protection - limited shade available",
      "Carry sufficient water and snacks",
      "Follow boat timing schedules strictly"
    ],
    tips: [
      "Visit during low tide for complete sandbar experience",
      "Carry packed lunch - no food facilities on islands",
      "Book boat transfers in advance",
      "Wear comfortable swimming attire",
      "Bring waterproof camera for underwater shots"
    ],
    bestFor: ["beach lovers", "snorkelers", "photographers", "families", "adventure seekers"],
    nearbyAttractions: [
      { name: "Saddle Peak", distance: "1–1.5 hr drive", slug: "saddle-peak" },
      { name: "Kalipur Beach", distance: "30 min", description: "Turtle nesting beach" },
      { name: "Aerial Bay Jetty", distance: "45 min boat ride", description: "Departure point" }
    ],
    itineraries: [
      { title: "Sandbar Day Trip", duration: "Full-day", activities: ["Early boat departure", "Walk the sandbar at low tide", "Snorkeling session", "Beach picnic", "Return by evening"] },
      { title: "Photography Expedition", duration: "Full-day", activities: ["Sunrise photography", "Sandbar documentation", "Aerial shots", "Sunset capture"] }
    ],
    stayOptions: [
      { name: "Diglipur eco-resorts", type: "Resort", priceRange: "₹2,500–₹6,000", location: "Kalipur/Aerial Bay" },
      { name: "Government guest house", type: "Guesthouse", priceRange: "₹1,500-3,000", location: "Diglipur" },
      { name: "Eco-friendly cottages", type: "Cottage", priceRange: "₹3,000-7,000", location: "Near Aerial Bay" }
    ],
    practicalInfo: {
      permits: "Forest permit obtained locally at Diglipur; check tide timings.",
      networkCoverage: ["BSNL (limited)"],
      atmAvailability: "Limited ATMs in Diglipur.",
      medicalFacilities: "Community health center in Diglipur.",
      emergencyContacts: ["Emergency 112", "Diglipur Police Station"]
    },
    weatherInfo: [
      {
        season: "Winter (December - February)",
        temperature: "20°C - 28°C",
        conditions: "Perfect for all activities with clear skies",
        seaConditions: "Calm seas, excellent for boat rides and snorkeling",
        visibility: "Excellent underwater visibility up to 25 meters"
      },
      {
        season: "Summer (March - May)",
        temperature: "25°C - 33°C",
        conditions: "Hot but manageable with sea breeze",
        seaConditions: "Generally calm, good for water activities",
        visibility: "Good underwater visibility, 15-20 meters"
      },
      {
        season: "Monsoon (June - November)",
        temperature: "24°C - 30°C",
        conditions: "Frequent rains, rough seas, limited access",
        seaConditions: "Rough seas, boat services often suspended",
        visibility: "Poor underwater visibility due to rough waters"
      }
    ],
    culturalInfo: {
      localCulture: "Ross & Smith Islands represent the pristine northern frontier of Andaman, showcasing untouched natural beauty and geological phenomena",
      traditions: ["Marine conservation efforts", "Sustainable island tourism", "Tide-based activity planning", "Environmental preservation"],
      festivals: ["Island conservation awareness events", "Marine life protection campaigns"],
      languages: ["Hindi", "English", "Bengali"]
    },
    localCuisine: [
      {
        specialty: "Packed Island Picnic",
        description: "Complete picnic meals prepared for island day trips",
        whereToTry: "Arrange from Diglipur resorts/hotels",
        price: "₹400-800"
      },
      {
        specialty: "Fresh Grilled Fish",
        description: "Locally caught fish prepared by boat operators",
        whereToTry: "Special arrangements with boat operators",
        price: "₹300-600"
      },
      {
        specialty: "Tropical Fruit Pack",
        description: "Fresh island fruits for healthy snacking",
        whereToTry: "Diglipur market before departure",
        price: "₹150-250"
      }
    ],
    shopping: {
      items: ["Sandbar photography prints", "Twin island souvenirs", "Marine life guidebooks", "Handmade crafts from Diglipur"],
      markets: ["Very limited on islands", "Diglipur market for supplies", "Resort souvenir shops"],
      tips: ["No shopping on islands - prepare in Diglipur", "Focus on experience over commerce", "Support local Diglipur artisans"]
    },
    photography: {
      bestSpots: ["Sandbar during low tide", "Aerial view of twin islands", "Sunset from northern tip", "Underwater coral shots", "Beach activities", "Pristine landscape compositions"],
      goldenhours: "Golden hour: 6:00-7:30 AM and 5:00-6:30 PM for dramatic lighting",
      tips: ["Drone photography with proper permits", "Underwater camera essential", "Wide-angle lens for sandbar shots", "Tide timing crucial for best shots", "Polarizing filter for water clarity"],
      restrictions: ["Drone permits required", "Respect marine life while photographing", "No disturbing nesting sites", "Follow environmental guidelines"]
    },
    seasonalActivities: [
      {
        season: "Winter (Dec-Feb)",
        activities: ["Best sandbar walking", "Excellent snorkeling", "Perfect photography conditions", "Comfortable camping", "All water activities"]
      },
      {
        season: "Summer (Mar-May)",
        activities: ["Early morning activities", "Snorkeling before noon", "Shaded beach time", "Sunset photography"]
      },
      {
        season: "Monsoon (Jun-Nov)",
        activities: ["Very limited access", "Alternative Diglipur exploration", "Indoor activity planning", "Post-monsoon trip preparation"]
      }
    ],
    conservation: "Ross & Smith Islands are part of protected marine ecosystem. Visitors must follow Leave No Trace principles, respect tide-dependent wildlife habitats, avoid disturbing nesting sites, and support conservation through responsible tourism practices.",
    accessibility: ["Boat access requires good mobility", "Sandbar walking needs basic fitness", "Limited accessibility for wheelchairs", "Assistance available for elderly visitors", "Alternative viewing from boat possible"],
    budgetInfo: {
      budget: "₹4,000-8,000 per person for complete experience",
      costs: [
        { item: "Transport to Diglipur", price: "₹1,500-3,000" },
        { item: "Boat transfer (round trip)", price: "₹1,200-2,000" },
        { item: "Entry tickets", price: "₹50" },
        { item: "Snorkeling equipment", price: "₹500-800" },
        { item: "Packed meals", price: "₹400-800" },
        { item: "Local guide", price: "₹300-500" },
        { item: "Photography permits", price: "₹200-400" }
      ]
    },
    thingsToKnow: [
      "Natural sandbar appears only during low tide - timing is crucial",
      "Most remote accessible destination in Andaman Islands",
      "No facilities on islands - carry everything needed",
      "Boat timings are strictly weather dependent",
      "Excellent for digital detox - minimal network coverage",
      "One of the most photographed natural phenomena in Andaman",
      "Best combined with 2-3 day Diglipur exploration",
      "Advance booking essential for boat transfers",
      "Weather can change quickly - follow guide instructions",
      "Perfect destination for nature lovers seeking pristine experiences"
    ],
    slug: "ross-smith-islands",
    category: "diglipur",
    region: "north"
  },

  // UNTOUCHED DESTINATIONS

  {
    name: "Barren Island",
    description: "India's only active volcano",
    longDescription: `Barren Island is home to India's only active volcano and is located about 135 km northeast of Port Blair. The volcano has been active since 1787 with the most recent eruption occurring in 2017, making it one of the few consistently active volcanoes in South Asia.

    The island is uninhabited and can only be approached by boat from a safe distance due to ongoing volcanic activity. The volcanic activity has created a unique marine ecosystem around the island, making it an excellent spot for deep-sea diving and marine life observation.

    This extraordinary geological wonder offers visitors a rare opportunity to witness an active volcano in the Indian Ocean. The island's volcanic landscape, combined with the crystal-clear waters surrounding it, creates a surreal and awe-inspiring experience. The nutrient-rich volcanic waters have fostered exceptional marine biodiversity, making the surrounding waters a haven for manta rays, whale sharks, and diverse coral species.`,
    image: "",
    gallery: [],
    activities: ["Volcano Viewing", "Boat Tours", "Marine Life Observation", "Photography", "Deep Sea Diving", "Scientific Observation"],
    detailedActivities: [
      {
        name: "Volcanic Viewing Cruise",
        description: "Professional boat tour to observe India's only active volcano from a safe distance",
        duration: "8-10 hours (including travel time)",
        price: 12000,
        highlights: ["India's only active volcano", "Safe distance viewing", "Geological education", "Professional guide commentary", "Photography opportunities", "Marine wildlife spotting"]
      },
      {
        name: "Advanced Deep Sea Diving",
        description: "World-class diving in nutrient-rich volcanic waters with exceptional marine life",
        duration: "4-6 hours",
        price: 8500,
        highlights: ["Manta ray encounters", "Whale shark sightings", "Unique volcanic underwater formations", "Exceptional visibility", "Professional diving guide", "Advanced dive sites"]
      },
      {
        name: "Marine Wildlife Photography",
        description: "Capture rare marine species attracted to the volcanic ecosystem",
        duration: "6-8 hours",
        price: 6000,
        highlights: ["Manta ray photography", "Whale shark documentation", "Volcanic landscape shots", "Professional photography guidance", "Underwater camera equipment", "Unique geological formations"]
      },
      {
        name: "Geological Research Experience",
        description: "Educational tour focusing on volcanic geology and marine ecosystem",
        duration: "10-12 hours",
        price: 10000,
        highlights: ["Geological education", "Volcanic activity monitoring", "Marine ecosystem study", "Scientific observations", "Research participation", "Educational documentation"]
      },
      {
        name: "Luxury Volcano Expedition",
        description: "Premium boat charter with gourmet meals and luxury amenities",
        duration: "12 hours",
        price: 20000,
        highlights: ["Luxury boat charter", "Professional naturalist guide", "Gourmet meal service", "Premium photography equipment", "Comfortable viewing areas", "VIP experience"]
      },
      {
        name: "Scientific Documentation",
        description: "Participate in ongoing volcanic and marine research projects",
        duration: "Full day",
        price: 15000,
        highlights: ["Research participation", "Scientific data collection", "Professional researcher guidance", "Conservation education", "Geological sampling observation", "Environmental monitoring"]
      }
    ],
    highlights: [
      {
        title: "Active Volcano",
        description: "Witness India's only active volcano from a safe distance",
        image: "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Exceptional Marine Life",
        description: "Encounter manta rays and whale sharks in volcanic waters",
        image: "https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Geological Wonder",
        description: "Observe ongoing geological processes in real-time",
        image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    bestTimeToVisit: "December to March for optimal sea conditions and volcanic viewing",
    howToReach: "135 km from Port Blair by specialized chartered boat (permits required)",
    travelInfo: {
      distanceFromAirport: "135 km by specialized boat from Port Blair",
      distanceFromJetty: "135 km from Port Blair jetty by chartered boat",
      transportOptions: ["Specialized volcanic tour boats", "Licensed diving boat charters", "Scientific expedition vessels"],
      nearestAirport: "Veer Savarkar International Airport, Port Blair",
      bestWayToTravel: "Pre-booked specialized boat with permits and safety equipment"
    },
    timings: {
      openTime: "5:00 AM",
      closeTime: "6:00 PM",
      specialTimings: "Full day expeditions only - no landing permitted on island"
    },
    ticketInfo: {
      entryFee: 200
    },
    quickInfo: {
      "Distance from Port Blair": "135 km by specialized boat",
      "Trip Duration": "10-12 hours (full day expedition)",
      "Entry Fee": "₹200 + specialized boat charter",
      "Safety Requirements": "Specialized boats with safety equipment only",
      "Landing": "Strictly prohibited - viewing from safe distance only",
      "Best Feature": "India's only active volcano"
    },
    facilities: ["Specialized boats with safety equipment", "Professional guides", "Emergency communication", "Life safety equipment", "No landing facilities"],
    safetyTips: [
      "Must use licensed operators with specialized volcanic tour boats only",
      "Strictly no landing on the island - viewing from safe distance mandatory",
      "Carry emergency communication devices",
      "Follow all safety protocols and guide instructions",
      "Weather conditions must be optimal for safe passage",
      "Wear provided life jackets at all times",
      "Bring motion sickness medication for long boat journey",
      "Stay within designated viewing areas on boat"
    ],
    tips: [
      "Book specialized volcanic tour operators minimum 7-10 days in advance",
      "Obtain special permits through licensed tour operators",
      "Check weather and sea conditions before departure",
      "Bring high-quality camera with telephoto lens for distant shots",
      "Pack seasickness medication for 3-4 hour boat journey each way",
      "Carry sufficient water and snacks for long expedition",
      "Wear sun protection and comfortable sea-worthy clothing",
      "Respect all safety boundaries and guide instructions",
      "Consider combining with deep-sea diving for full experience"
    ],
    bestFor: ["adventure seekers", "geology enthusiasts", "professional photographers", "marine life enthusiasts", "researchers", "luxury travelers"],
    nearbyAttractions: [
      { name: "Port Blair", distance: "135 km", description: "Departure point and accommodation base" },
      { name: "Mayabunder", distance: "Closer departure point", description: "Alternative departure point for north route" },
      { name: "Diglipur", distance: "Northern route option", description: "Alternative base for northern approach" }
    ],
    itineraries: [
      { title: "Volcanic Viewing Expedition", duration: "Full day (12 hours)", activities: ["Early morning departure", "3-4 hour boat journey", "Safe distance volcanic viewing", "Marine life observation", "Geological education session", "Return journey"] },
      { title: "Advanced Diving & Volcano Tour", duration: "2 days", activities: ["Day 1: Deep-sea diving in volcanic waters", "Manta ray and whale shark encounters", "Day 2: Volcanic viewing and geological study", "Photography sessions"] },
      { title: "Luxury Scientific Expedition", duration: "2-3 days", activities: ["Luxury boat charter", "Research participation", "Professional geological guidance", "Premium dining and accommodation", "Comprehensive documentation"] }
    ],
    stayOptions: [
      { name: "Port Blair luxury resorts", type: "Resort", priceRange: "₹10,000-30,000", location: "Port Blair (expedition base)" },
      { name: "Mayabunder eco-resorts", type: "Resort", priceRange: "₹5,000-15,000", location: "Mayabunder (alternative base)" },
      { name: "Scientific research accommodations", type: "Research Lodge", priceRange: "₹7,000-20,000", location: "Specialized scientific facilities" }
    ],
    practicalInfo: {
      permits: "Special permits mandatory through licensed operators. Advance booking 7-10 days required. No individual permits - must join organized expedition.",
      networkCoverage: ["No coverage at sea or near island"],
      atmAvailability: "No ATMs at sea. Complete payment arrangements in Port Blair before departure.",
      medicalFacilities: "Emergency medical kit onboard specialized boats. Advanced medical facilities only in Port Blair.",
      emergencyContacts: ["Emergency 112", "Coast Guard", "Specialized tour operator emergency line"]
    },
    weatherInfo: [
      {
        season: "Winter (December - February)",
        temperature: "24°C - 30°C",
        conditions: "Optimal conditions with calm seas perfect for safe volcanic viewing",
        seaConditions: "Calm seas, ideal for long boat journeys and safe approach",
        visibility: "Excellent visibility for volcanic observation and photography"
      },
      {
        season: "Spring (March - April)",
        temperature: "26°C - 32°C",
        conditions: "Good conditions, occasional afternoon heat",
        seaConditions: "Generally calm, morning departures recommended",
        visibility: "Good visibility, some atmospheric haze possible"
      },
      {
        season: "Pre-Monsoon (May - June)",
        temperature: "28°C - 35°C",
        conditions: "Challenging conditions, very hot and humid",
        seaConditions: "Increasingly choppy waters, limited tour availability",
        visibility: "Reduced visibility due to heat haze and humidity"
      },
      {
        season: "Monsoon (July - November)",
        temperature: "25°C - 30°C",
        conditions: "Dangerous sea conditions, all tours suspended",
        seaConditions: "Extremely rough seas, no boat access possible",
        visibility: "Poor visibility due to monsoon weather"
      }
    ],
    culturalInfo: {
      localCulture: "Barren Island represents India's unique geological heritage and the power of natural forces, revered by local communities as a sacred natural phenomenon",
      traditions: ["Geological research traditions", "Marine conservation practices", "Scientific observation protocols", "Safety and respect for natural forces"],
      festivals: ["Earth Sciences Week", "Geological Heritage Day", "Marine Conservation events"],
      languages: ["English", "Hindi", "Bengali", "Scientific terminology"]
    },
    localCuisine: [
      {
        specialty: "Expedition Lunch Boxes",
        description: "Specially prepared meals for long sea expeditions",
        whereToTry: "Arranged through specialized tour operators",
        price: "₹1,200-2,000 per person"
      },
      {
        specialty: "Gourmet Sea Meals",
        description: "Premium dining experience during luxury volcanic expeditions",
        whereToTry: "Luxury boat charters",
        price: "₹3,000-5,000 per person"
      },
      {
        specialty: "Energy Supplements",
        description: "High-energy snacks and drinks for long boat journeys",
        whereToTry: "All tour operators provide",
        price: "₹300-500"
      },
      {
        specialty: "Fresh Coconut Water",
        description: "Natural hydration essential for sea expeditions",
        whereToTry: "Provided by tour operators",
        price: "₹60-100"
      }
    ],
    shopping: {
      items: ["No shopping available near volcano", "Geological specimens (legally permitted)", "Scientific literature", "Professional photography equipment", "Specialized marine gear"],
      markets: ["All shopping must be completed in Port Blair before expedition"],
      tips: ["No shops or vendors near volcano", "Specialized equipment available through tour operators", "Scientific books available at research centers in Port Blair"]
    },
    photography: {
      bestSpots: ["Volcanic crater from safe distance", "Marine life around volcanic waters", "Dramatic seascape with volcano backdrop", "Sunset with volcanic silhouette", "Deep-sea diving underwater shots", "Research vessel perspectives"],
      goldenhours: "Golden hour: 6:00-7:00 AM and 5:30-6:30 PM for dramatic volcanic silhouettes",
      tips: ["Telephoto lens essential for distant volcanic shots", "Waterproof camera housing for marine photography", "Extra batteries crucial for long expeditions", "Polarizing filters reduce water glare", "Professional underwater equipment for diving shots", "High-speed memory cards for rapid shooting"],
      restrictions: ["Maintain safe distance from volcanic activity", "No flash photography that might interfere with safety equipment", "Follow guide instructions for photography safety", "Respect marine life during underwater photography"]
    },
    seasonalActivities: [
      {
        season: "Winter (Dec-Feb)",
        activities: ["Optimal volcanic viewing expeditions", "Deep-sea diving in calm waters", "Scientific research participation", "Professional photography expeditions", "Luxury charter experiences"]
      },
      {
        season: "Spring (Mar-Apr)",
        activities: ["Good conditions for expeditions", "Early morning departures", "Marine life observation", "Educational tours", "Research activities"]
      },
      {
        season: "Summer (May-Jun)",
        activities: ["Limited expedition availability", "Early morning departures only", "Specialized research trips", "Professional expeditions only"]
      },
      {
        season: "Monsoon (Jul-Nov)",
        activities: ["No expeditions possible", "Planning future trips", "Educational programs in Port Blair", "Equipment preparation", "Research data analysis"]
      }
    ],
    conservation: "Barren Island is a protected geological site where all activities are strictly regulated to preserve both the volcanic environment and surrounding marine ecosystem. Visitors contribute to scientific research and conservation through responsible expedition participation.",
    accessibility: ["Specialized boat access only", "Requires good physical condition for long sea journey", "Not suitable for those with mobility limitations", "Motion sickness medication recommended", "Professional safety equipment provided"],
    budgetInfo: {
      budget: "₹15,000-50,000 per person depending on expedition type",
      costs: [
        { item: "Special Permits & Fees", price: "₹200-500" },
        { item: "Specialized Boat Charter (shared)", price: "₹10,000-15,000 per person" },
        { item: "Private Luxury Charter", price: "₹50,000-100,000 total" },
        { item: "Deep-sea Diving Add-on", price: "₹6,000-10,000" },
        { item: "Professional Photography Guide", price: "₹3,000-5,000" },
        { item: "Expedition Meals & Refreshments", price: "₹1,500-3,000" },
        { item: "Emergency & Safety Equipment", price: "Included in charter cost" }
      ]
    },
    thingsToKnow: [
      "India's only active volcano, continuously active since 1787",
      "Strictly no landing permitted - viewing from safe distance only",
      "Accessible only by specialized boats with safety equipment",
      "Requires special permits arranged through licensed operators",
      "Long sea journey (3-4 hours each way) requires good physical condition",
      "Weather dependent - trips cancelled during rough seas",
      "Creates unique marine ecosystem with exceptional diving opportunities",
      "Best combined with scientific or educational expedition approach",
      "Motion sickness medication essential for most visitors",
      "Professional photography equipment recommended for distant shots",
      "No mobile coverage - complete communication blackout during expedition",
      "Most exclusive and challenging destination in Andaman archipelago"
    ],
    slug: "barren-island",
    category: "untouched",
    region: "north"
  }
];