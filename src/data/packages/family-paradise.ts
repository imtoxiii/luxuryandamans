import { Package } from '../packages';
import { commonPaymentPolicy, commonTips, commonCancellationPolicy, commonTerms } from '../commonPolicies';

export const familyParadise: Package = {
  title: "Family Paradise - 6 Days Fun Adventure",
  description: "Perfect family vacation with kid-friendly activities, comfortable accommodations, and fun for all ages",
  longDescription: "Create unforgettable family memories with our specially designed 6-day Andaman family package. This itinerary features kid-friendly activities, comfortable family accommodations, safe water sports, educational experiences, and plenty of beach fun. From glass-bottom boat rides to easy snorkeling, from historical learning to beach games - every activity is chosen with families in mind. Enjoy the perfect balance of adventure, learning, and relaxation with activities suitable for children aged 5 and above.",
  price: 38500,
  duration: "6 days",
  groupSize: "4-6",
  image: "/images/packages/family-paradise/hero.jpg",
  features: [
    "Kid-friendly activities",
    "Family rooms available",
    "Safe water sports",
    "Educational experiences",
    "Beach games included",
    "Flexible itinerary",
    "Child-safe equipment"
  ],
  includes: [
    "5 nights family accommodation (interconnecting rooms available)",
    "Daily breakfast for all family members",
    "All ferry transfers between islands (Makruzz/Nautika)",
    "Family-friendly snorkeling at Elephant Beach",
    "Glass-bottom boat ride for kids",
    "All sightseeing by private family vehicle",
    "Cellular Jail visit with kid-friendly guide",
    "Light & Sound Show tickets for family",
    "Ross Island exploration with nature walk",
    "Beach games equipment (volleyball, frisbee, cricket)",
    "Life jackets and safety equipment for kids",
    "Entry tickets to all attractions",
    "Airport pickup and drop",
    "First-aid kit and emergency assistance"
  ],
  excludes: [
    "Airfare to/from Port Blair",
    "Lunch and dinner",
    "Optional water sports",
    "Personal expenses",
    "Travel insurance",
    "Medical expenses",
    "Tips and gratuities",
    "Baby sitting services",
    "Extra bedding charges (if any)"
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival & City Exploration",
      description: "Welcome to the Andaman Islands! After a comfortable airport pickup, check into your family-friendly hotel and spend the evening exploring Port Blair's beaches and attractions. Visit the famous Cellular Jail and let kids enjoy the beach.",
      activities: [
        "Family pickup from airport (around 12 PM)",
        "Check into family-friendly hotel",
        "Lunch break and rest time",
        "Visit Corbyn's Cove Beach (kids can play in sand)",
        "Beach games: volleyball, frisbee, sandcastle building",
        "Visit Cellular Jail (kid-friendly historical tour)",
        "Light & Sound Show (fascinating for kids)",
        "Dinner at family restaurant"
      ],
      hotel: {
        name: "Hotel Sinclairs Bayview",
        location: "Port Blair",
        rating: 4,
        image: "/images/packages/family-paradise/hotel-port-blair.jpg",
        amenities: ["Family Rooms", "Restaurant", "Kids Play Area", "WiFi", "Room Service", "Safe Environment"],
        description: "Family-friendly hotel with spacious rooms and amenities suitable for children"
      },
      meals: ["Breakfast"],
      sightseeing: ["Corbyn's Cove Beach", "Cellular Jail", "Light & Sound Show"]
    },
    {
      day: "Day 2",
      title: "Port Blair to Havelock - Beach Fun Begins",
      description: "Take a comfortable ferry to Havelock Island. The ferry ride itself is an adventure for kids! Visit the stunning Radhanagar Beach where children can safely play in shallow waters.",
      activities: [
        "Early breakfast at hotel",
        "Comfortable ferry to Havelock (kids love the boat ride!)",
        "Arrive Havelock and check into beach resort",
        "Lunch and rest time for family",
        "Visit Radhanagar Beach (Beach No. 7)",
        "Kids play area: shallow water play, sandcastle competition",
        "Family photo session at sunset",
        "Beach volleyball and games",
        "Return to resort for dinner"
      ],
      hotel: {
        name: "SeaShell Havelock",
        location: "Havelock Island",
        rating: 4,
        image: "/images/packages/family-paradise/hotel-havelock.jpg",
        amenities: ["Beach Access", "Family Rooms", "Kids Pool", "Restaurant", "Garden", "Beach Games"],
        description: "Beach resort with family cottages and safe beach access for children"
      },
      meals: ["Breakfast"],
      sightseeing: ["Radhanagar Beach", "Beach Activities"]
    },
    {
      day: "Day 3",
      title: "Elephant Beach Family Adventure",
      description: "Speedboat adventure to Elephant Beach! Kids will love the boat ride and the crystal-clear waters. Enjoy safe snorkeling with life jackets, beach games, and optional gentle water sports suitable for families.",
      activities: [
        "Snorkeling - Safe snorkeling with kid-friendly equipment and guides",
        "Glass Bottom Boat - Perfect for younger kids to see coral without swimming",
        "Banana Ride - Fun group activity suitable for kids (age 8+)",
        "Beach Games - Volleyball, frisbee, beach cricket organized for families",
        "Nature Walk - Short guided walk through forest (educational for kids)",
        "Shell Collecting - Kids can collect shells on beach",
        "Swimming - Shallow water area perfect for children"
      ],
      meals: ["Breakfast", "Packed Lunch"],
      sightseeing: ["Elephant Beach", "Coral Viewing", "Nature Trail"]
    },
    {
      day: "Day 4",
      title: "Havelock Leisure & Beach Day",
      description: "A relaxed day for the family to enjoy resort facilities, beach activities, or optional gentle water sports. Visit Kalapathar Beach for its unique black rocks and photography.",
      activities: [
        "Leisurely family breakfast",
        "Resort pool time and beach activities",
        "Visit Kalapathar Beach for photography",
        "Kids beach cricket tournament",
        "Optional: Easy kayaking in calm waters",
        "Beach treasure hunt organized for kids",
        "Sunset viewing at beach",
        "Family game night at resort"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Kalapathar Beach", "Resort Beach Activities"]
    },
    {
      day: "Day 5",
      title: "Return to Port Blair - Ross Island Exploration",
      description: "Ferry back to Port Blair and explore the historic Ross Island. Kids will love seeing the friendly deer and peacocks roaming freely! Visit the ruins and learn about island history in a fun way.",
      activities: [
        "Check out from Havelock resort",
        "Ferry to Port Blair",
        "Check into Port Blair hotel",
        "Lunch and short rest",
        "Boat ride to Ross Island (10-minute ride)",
        "Explore ruins - kids love the deer and peacocks!",
        "Nature photography and wildlife spotting",
        "Educational tour about island history",
        "Visit Japanese Bunkers (kids find it exciting)",
        "Return to city for dinner"
      ],
      hotel: {
        name: "Hotel Sinclairs Bayview",
        location: "Port Blair",
        rating: 4,
        image: "/images/packages/family-paradise/hotel-port-blair.jpg",
        amenities: ["Family Rooms", "Restaurant", "Kids Play Area", "WiFi", "Room Service"],
        description: "Family-friendly hotel in Port Blair"
      },
      meals: ["Breakfast"],
      sightseeing: ["Ross Island", "Wildlife Spotting", "Historical Ruins"]
    },
    {
      day: "Day 6",
      title: "Chidiya Tapu & Departure",
      description: "Final day exploring Chidiya Tapu (Bird Island) where kids can spot various birds and enjoy the beach. Shop for souvenirs before departure.",
      activities: [
        "Breakfast at hotel",
        "Visit Chidiya Tapu - Bird watching for kids",
        "Beach time and nature walk",
        "Visit Anthropological Museum (educational)",
        "Lunch in city",
        "Shopping at Aberdeen Bazaar (souvenirs for kids)",
        "Buy shells, handicrafts, pearls",
        "Hotel checkout",
        "Airport transfer for departure"
      ],
      meals: ["Breakfast"],
      sightseeing: ["Chidiya Tapu", "Bird Watching", "Anthropological Museum", "Aberdeen Bazaar"]
    }
  ],
  highlights: [
    {
      title: "Kid-Friendly Water Activities",
      description: "Safe snorkeling, glass-bottom boat, banana ride - all with proper safety equipment",
      image: "/images/packages/family-paradise/highlight-water-sports.jpg"
    },
    {
      title: "Beach Fun & Games",
      description: "Organized beach games, sandcastle competitions, treasure hunts, and family activities",
      image: "/images/packages/family-paradise/highlight-beach-games.jpg"
    },
    {
      title: "Educational Experiences",
      description: "Historical tours, nature walks, bird watching, and marine life education",
      image: "/images/packages/family-paradise/highlight-education.jpg"
    },
    {
      title: "Wildlife Encounters",
      description: "Meet friendly deer and peacocks at Ross Island, spot colorful birds at Chidiya Tapu",
      image: "/images/packages/family-paradise/highlight-wildlife.jpg"
    }
  ],
  terms: commonTerms,
  paymentPolicy: commonPaymentPolicy,
  tips: commonTips,
  pricingOptions: [
    {
      days: 6,
      pricePerPerson: 38500,
      title: "6 Days Family Paradise (Adult rate)"
    },
    {
      days: 6,
      pricePerPerson: 25000,
      title: "Child Rate (5-12 years with extra bed)"
    }
  ],
  hotels: [
    {
      name: "Hotel Sinclairs Bayview",
      location: "Port Blair",
      rating: 4,
      image: "/images/packages/family-paradise/hotel-port-blair.jpg",
      amenities: ["Family Rooms", "Restaurant", "Kids Play Area", "WiFi", "Room Service", "Travel Desk", "Safe Parking"],
      description: "Family-friendly hotel with spacious rooms, play area for children, and safe environment.",
      starCategory: 4,
      images: [
        "/images/packages/family-paradise/hotel-port-blair-1.jpg",
        "/images/packages/family-paradise/hotel-port-blair-2.jpg",
        "/images/packages/family-paradise/hotel-port-blair-3.jpg"
      ],
      roomTypes: [
        {
          name: "Standard Family Room",
          pricePerNight: 3500,
          description: "Comfortable room with one double bed and extra bed option for kids",
          maxOccupancy: 3
        },
        {
          name: "Deluxe Family Suite",
          pricePerNight: 5500,
          description: "Spacious suite with separate sleeping areas for parents and children",
          maxOccupancy: 4
        },
        {
          name: "Family Connecting Rooms",
          pricePerNight: 7500,
          description: "Two interconnected rooms perfect for larger families",
          maxOccupancy: 6
        }
      ]
    },
    {
      name: "SeaShell Havelock",
      location: "Havelock Island",
      rating: 4,
      image: "/images/packages/family-paradise/hotel-havelock.jpg",
      amenities: ["Beach Access", "Family Cottages", "Kids Pool", "Restaurant", "Garden", "Beach Games", "WiFi"],
      description: "Beach resort with family cottages, safe beach access, and activities for children.",
      starCategory: 4,
      images: [
        "/images/packages/family-paradise/hotel-havelock-1.jpg",
        "/images/packages/family-paradise/hotel-havelock-2.jpg",
        "/images/packages/family-paradise/hotel-havelock-3.jpg"
      ],
      roomTypes: [
        {
          name: "Garden Cottage",
          pricePerNight: 4500,
          description: "Cozy cottage with garden view, perfect for small families",
          maxOccupancy: 3
        },
        {
          name: "Beach Cottage",
          pricePerNight: 6500,
          description: "Beachfront cottage with direct beach access and space for kids",
          maxOccupancy: 4
        },
        {
          name: "Family Villa",
          pricePerNight: 9000,
          description: "Large villa with multiple beds and living area for families",
          maxOccupancy: 6
        }
      ]
    }
  ],
  supplements: [
    {
      name: "Kids Special Birthday Cake",
      price: 2000,
      description: "Customized birthday cake for kids with decorations and celebration setup",
      availability: ["All Hotels"]
    },
    {
      name: "Family Photo Album",
      price: 5000,
      description: "Professional photographer for 4 hours with printed photo album",
      availability: ["All Locations"]
    },
    {
      name: "Babysitting Service",
      price: 1500,
      description: "Professional babysitter for 4 hours (advance booking required)",
      availability: ["All Hotels"]
    },
    {
      name: "Kids Adventure Kit",
      price: 1000,
      description: "Snorkel set, beach toys, waterproof camera for kids",
      availability: ["Havelock"]
    }
  ],
  pickupLocations: [
    "Veer Savarkar International Airport, Port Blair",
    "Port Blair City Hotels",
    "Custom pickup location in Port Blair"
  ],
  cancellationPolicy: commonCancellationPolicy,
  slug: "family-paradise-6-days"
};
