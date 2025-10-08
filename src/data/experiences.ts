export interface Experience {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  image: string;
  category: 'adventure' | 'luxury' | 'family' | 'romantic' | 'wellness' | 'cultural' | 'nature';
  duration?: string;
  price?: string;
  priceRange?: string;
  difficulty?: 'easy' | 'moderate' | 'challenging';
  ageRestriction?: string;
  bestSeason?: string[];
  includes?: string[];
  highlights?: string[];
  locations?: string[];
  inclusions?: string[];
  exclusions?: string[];
  whatToBring?: string[];
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  gallery?: string[];
  video?: string;
  bookingRequired: boolean;
  popular?: boolean;
  featured?: boolean;
}

export const experiences: Experience[] = [
  {
    id: 'scuba-diving',
    slug: 'scuba-diving',
    title: 'Scuba Diving',
    shortDescription: 'Explore vibrant coral reefs and marine life',
    detailedDescription: 'Discover the underwater paradise of the Andaman Islands with our PADI-certified diving experiences. From beginner-friendly discovery dives to advanced certifications, explore vibrant coral gardens, mysterious shipwrecks, and encounter majestic marine life including manta rays, sea turtles, and colorful reef fish.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'adventure',
    difficulty: 'moderate',
    ageRestriction: '10+ years',
    bestSeason: ['October', 'November', 'December', 'January', 'February', 'March', 'April', 'May'],
    locations: ['Havelock Island', 'Neil Island', 'Port Blair', 'North Bay Island', 'Cinque Island'],
    includes: ['PADI certified instructor', 'Diving equipment', 'Boat transfers', 'Light refreshments'],
    highlights: ['30+ dive sites', 'PADI certification courses', 'Underwater photography', 'Night diving options'],
    whatToBring: ['Swimwear', 'Towel', 'Change of clothes', 'Waterproof camera'],
    faqs: [
      {
        question: 'Can non-swimmers try scuba diving?',
        answer: 'Yes! Our Discover Scuba Diving program is perfect for beginners with no swimming experience required.'
      },
      {
        question: 'What is the visibility like in Andaman waters?',
        answer: 'Visibility typically ranges from 15-30 meters, with the best conditions from December to April.'
      },
      {
        question: 'Do I need to be certified?',
        answer: 'No certification is required for introductory dives. We offer PADI certification courses for those interested.'
      }
    ],
    bookingRequired: true,
    popular: true,
    featured: true
  },
  {
    id: 'bioluminescence-kayaking',
    slug: 'bioluminescence-kayaking',
    title: 'Bioluminescence Kayaking',
    shortDescription: 'Paddle through glowing waters on new moon nights',
    detailedDescription: 'Experience nature\'s magical light show as you kayak through waters illuminated by bioluminescent plankton. This ethereal experience, best during new moon phases, allows you to witness the ocean come alive with blue-green light with every paddle stroke.',
    image: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'adventure',
    difficulty: 'easy',
    duration: '2-3 hours',
    price: '₹3,500 per person',
    ageRestriction: '6+ years',
    bestSeason: ['November', 'December', 'January', 'February', 'March', 'April'],
    locations: ['Havelock Island', 'Neil Island'],
    includes: ['Kayak and safety gear', 'Certified guide', 'Basic paddling briefing', 'Photos and videos'],
    highlights: ['Natural light phenomenon', 'Best during new moon', 'No experience needed', 'Family friendly'],
    whatToBring: ['Quick-dry clothing', 'Insect repellent', 'Waterproof bag for electronics'],
    faqs: [
      {
        question: 'When is the best time to see bioluminescence?',
        answer: 'The phenomenon is most visible during new moon phases when there\'s minimal light pollution.'
      },
      {
        question: 'Is it safe for children?',
        answer: 'Yes, children above 6 years can join with parental supervision. Life jackets are mandatory.'
      },
      {
        question: 'What if the weather is bad?',
        answer: 'Tours are weather-dependent and may be rescheduled for safety if conditions are unfavorable.'
      }
    ],
    bookingRequired: true,
    popular: true,
    featured: true
  },
  {
    id: 'luxury-resorts',
    slug: 'luxury-resorts',
    title: 'Luxury Beach Resorts',
    shortDescription: 'Experience world-class hospitality in paradise',
    detailedDescription: 'Indulge in the ultimate luxury experience at our handpicked selection of premium beachfront resorts. Enjoy pristine private beaches, world-class spas, gourmet dining, and personalized service while surrounded by the natural beauty of the Andaman Islands.',
    image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'luxury',
    priceRange: '₹15,000 - ₹1,50,000 per night',
    bestSeason: ['October', 'November', 'December', 'January', 'February', 'March', 'April', 'May'],
    locations: ['Havelock Island', 'Neil Island', 'Port Blair', 'Long Island'],
    includes: ['Luxury accommodation', 'Airport transfers', 'Complimentary breakfast', 'Spa access'],
    highlights: ['Beachfront villas', 'Private pools', 'Fine dining restaurants', '24/7 concierge service'],
    inclusions: ['Premium accommodation', 'Daily breakfast', 'Airport transfers', 'Spa access'],
    exclusions: ['Lunch and dinner', 'Water activities', 'Additional spa treatments'],
    whatToBring: ['Beachwear', 'Formal attire for fine dining', 'Personal medications'],
    faqs: [
      {
        question: 'Do resorts offer all-inclusive packages?',
        answer: 'Yes, many resorts offer all-inclusive packages covering meals, activities, and transfers.'
      },
      {
        question: 'Is private beach access guaranteed?',
        answer: 'Most luxury resorts offer semi-private beach access with dedicated areas for guests.'
      },
      {
        question: 'Can special occasions be arranged?',
        answer: 'Absolutely! Resorts specialize in arranging romantic dinners, proposals, and celebrations.'
      }
    ],
    bookingRequired: true,
    popular: true,
    featured: true
  },
  {
    id: 'island-hopping',
    slug: 'island-hopping',
    title: 'Island Hopping',
    shortDescription: 'Discover hidden beaches and secluded coves',
    detailedDescription: 'Embark on an unforgettable journey across the Andaman archipelago, exploring each island\'s unique character. From the historical ruins of Ross Island to the pristine beaches of Neil Island and the vibrant coral reefs of North Bay, experience the diversity of these tropical paradises.',
    image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'adventure',
    difficulty: 'easy',
    duration: 'Full day to multiple days',
    price: '₹4,500 - ₹12,000 per person',
    ageRestriction: 'All ages',
    bestSeason: ['October', 'November', 'December', 'January', 'February', 'March', 'April', 'May'],
    locations: ['Ross Island', 'North Bay Island', 'Neil Island', 'Havelock Island', 'Baratang Island', 'Long Island'],
    includes: ['Boat transfers', 'Guide', 'Entry fees', 'Lunch on full-day tours'],
    highlights: ['Multiple islands in one trip', 'Historical sites', 'Beach exploration', 'Photography opportunities'],
    whatToBring: ['Sun protection', 'Comfortable walking shoes', 'Swimwear', 'Camera'],
    faqs: [
      {
        question: 'How many islands can be visited in one day?',
        answer: 'Typically 2-3 islands can be comfortably explored in a full-day trip.'
      },
      {
        question: 'Are the boats safe for children?',
        answer: 'Yes, all boats are equipped with safety gear and experienced crew members.'
      },
      {
        question: 'Can we customize the itinerary?',
        answer: 'Private tours can be customized based on your preferences and time constraints.'
      }
    ],
    bookingRequired: true,
    popular: true,
    featured: true
  },
  {
    id: 'sunset-cruises',
    slug: 'sunset-cruises',
    title: 'Sunset Cruises',
    shortDescription: 'Unforgettable evenings on the Andaman Sea',
    detailedDescription: 'Sail into the golden hour aboard our luxury vessels, watching the sky transform into a canvas of brilliant colors. Enjoy premium beverages, gourmet appetizers, and live music as you cruise along the coastline, creating memories that last a lifetime.',
    image: 'https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'romantic',
    difficulty: 'easy',
    duration: '3-4 hours',
    price: '₹5,000 - ₹15,000 per person',
    ageRestriction: 'All ages',
    bestSeason: ['October', 'November', 'December', 'January', 'February', 'March', 'April', 'May'],
    locations: ['Port Blair', 'Havelock Island', 'Neil Island'],
    includes: ['Welcome drinks', 'Light snacks', 'Live entertainment', 'Photography service'],
    highlights: ['Spectacular sunset views', 'Live music', 'Premium beverages', 'Romantic atmosphere'],
    whatToBring: ['Light jacket', 'Camera', 'Sunscreen'],
    faqs: [
      {
        question: 'What time do the cruises depart?',
        answer: 'Most cruises depart 2-3 hours before sunset to ensure optimal viewing.'
      },
      {
        question: 'Is alcohol included?',
        answer: 'Welcome drinks are included, with additional beverages available for purchase.'
      },
      {
        question: 'Are the cruises suitable for families?',
        answer: 'Yes, we offer family-friendly sunset cruises with appropriate entertainment.'
      }
    ],
    bookingRequired: true,
    popular: true,
    featured: false
  },
  {
    id: 'wellness-retreats',
    slug: 'wellness-retreats',
    title: 'Wellness Retreats',
    shortDescription: 'Rejuvenate your mind, body, and soul',
    detailedDescription: 'Immerse yourself in holistic wellness programs designed to restore balance and vitality. Combining ancient healing traditions with modern wellness practices, our retreats offer yoga, meditation, spa treatments, and nutritious cuisine in serene beachfront settings.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'wellness',
    difficulty: 'easy',
    duration: '3-7 days',
    price: '₹35,000 - ₹80,000 per person',
    ageRestriction: '18+ years',
    bestSeason: ['October', 'November', 'December', 'January', 'February', 'March', 'April', 'May'],
    locations: ['Havelock Island', 'Neil Island', 'Long Island'],
    includes: ['Accommodation', 'All meals', 'Daily yoga sessions', 'Spa treatments'],
    highlights: ['Certified yoga instructors', 'Ayurvedic spa treatments', 'Meditation sessions', 'Healthy cuisine'],
    whatToBring: ['Comfortable clothing', 'Yoga mat', 'Personal toiletries', 'Books'],
    faqs: [
      {
        question: 'Are beginners welcome in yoga sessions?',
        answer: 'Yes, our programs cater to all levels from beginners to advanced practitioners.'
      },
      {
        question: 'Can dietary restrictions be accommodated?',
        answer: 'Absolutely! We can accommodate vegetarian, vegan, gluten-free, and other dietary needs.'
      },
      {
        question: 'Is there free time for personal activities?',
        answer: 'Yes, schedules include free time for beach walks, reading, or personal reflection.'
      }
    ],
    bookingRequired: true,
    popular: false,
    featured: false
  },
  {
    id: 'romantic-getaways',
    slug: 'romantic-getaways',
    title: 'Romantic Getaways',
    shortDescription: 'Create unforgettable memories with your loved one',
    detailedDescription: 'Escape to paradise with our specially curated romantic experiences. From private beach dinners under the stars to couples spa treatments and sunset cruises, we handle every detail to create your perfect romantic getaway in the Andaman Islands.',
    image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'romantic',
    difficulty: 'easy',
    duration: '3-7 days',
    price: '₹55,000 - ₹1,50,000 per couple',
    ageRestriction: '18+ years',
    bestSeason: ['October', 'November', 'December', 'January', 'February', 'March', 'April', 'May'],
    locations: ['Havelock Island', 'Neil Island', 'Long Island'],
    includes: ['Luxury accommodation', 'Candlelight dinners', 'Couples spa', 'Special surprises'],
    highlights: ['Private beach dinners', 'Couples spa treatments', 'Sunset cruises', 'Professional photoshoots'],
    whatToBring: ['Formal attire', 'Beachwear', 'Camera'],
    faqs: [
      {
        question: 'Can we customize our romantic package?',
        answer: 'Yes, we can tailor packages based on your preferences and special occasions.'
      },
      {
        question: 'Are the locations private?',
        answer: 'We arrange private settings for dinners and special moments whenever possible.'
      },
      {
        question: 'Can you arrange proposals?',
        answer: 'Absolutely! We specialize in creating magical proposal experiences.'
      }
    ],
    bookingRequired: true,
    popular: true,
    featured: false
  },
  {
    id: 'family-adventures',
    slug: 'family-adventures',
    title: 'Family Adventures',
    shortDescription: 'Fun-filled activities for the whole family',
    detailedDescription: 'Create lasting family memories with our range of family-friendly activities. From glass-bottom boat tours and easy jungle treks to beach games and educational experiences, we offer adventures that cater to all ages and interests.',
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'family',
    difficulty: 'easy',
    duration: '2-6 hours',
    price: '₹8,000 - ₹15,000 per family',
    ageRestriction: 'All ages',
    bestSeason: ['October', 'November', 'December', 'January', 'February', 'March', 'April', 'May'],
    locations: ['Port Blair', 'Havelock Island', 'Neil Island'],
    includes: ['Family-friendly guide', 'Safety equipment', 'Refreshments', 'Activity materials'],
    highlights: ['Educational experiences', 'Safe for all ages', 'Engaging activities', 'Photo opportunities'],
    whatToBring: ['Sun protection', 'Change of clothes', 'Snacks', 'Water bottles'],
    faqs: [
      {
        question: 'Which activities are suitable for toddlers?',
        answer: 'Glass-bottom boat tours, beach activities, and short nature walks are perfect for toddlers.'
      },
      {
        question: 'Are there activities for teenagers?',
        answer: 'Yes, we offer snorkeling, kayaking, and trekking options that teenagers love.'
      },
      {
        question: 'Can grandparents participate?',
        answer: 'Many activities are accessible to all fitness levels, with options for relaxation.'
      }
    ],
    bookingRequired: true,
    popular: true,
    featured: false
  },
  {
    id: 'sea-walk',
    slug: 'sea-walk',
    title: 'Sea Walk',
    shortDescription: 'Walk on the sea bed—perfect for non-swimmers',
    detailedDescription: 'Experience the underwater world without swimming skills through our sea walk adventure. With a specialized helmet providing oxygen, walk on the ocean floor surrounded by colorful corals and friendly marine life in this unique underwater walking experience.',
    image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'adventure',
    difficulty: 'easy',
    duration: '30-40 minutes underwater',
    price: '₹3,500 - ₹4,500 per person',
    ageRestriction: '10+ years',
    bestSeason: ['October', 'November', 'December', 'January', 'February', 'March', 'April', 'May'],
    locations: ['North Bay Island', 'Elephant Beach'],
    includes: ['Helmet with oxygen supply', 'Underwater guide', 'Photos & videos', 'Boat transfers'],
    highlights: ['No swimming required', 'Underwater walking', 'Close marine encounters', 'Photography included'],
    whatToBring: ['Swimwear', 'Towel', 'Change of clothes'],
    faqs: [
      {
        question: 'Is it safe for non-swimmers?',
        answer: 'Absolutely! Sea walk is perfect for non-swimmers as you walk on the seabed with oxygen supply.'
      },
      {
        question: 'How deep is the sea walk?',
        answer: 'Sea walks are conducted in shallow waters, typically 5-7 meters deep.'
      },
      {
        question: 'Are there any medical restrictions?',
        answer: 'Yes, conditions like asthma, heart problems, and pregnancy may restrict participation.'
      }
    ],
    bookingRequired: true,
    popular: true,
    featured: false
  },
  {
    id: 'game-fishing',
    slug: 'game-fishing',
    title: 'Game Fishing',
    shortDescription: 'Private charters targeting GT, tuna and more',
    detailedDescription: 'Challenge yourself with big game fishing in the rich waters of the Andaman Sea. Our experienced captains and modern equipped boats take you to the best fishing spots where you can target trophy fish including Giant Trevally, tuna, barracuda, and sailfish.',
    image: 'https://images.unsplash.com/photo-1469230529682-4b4f7572a2fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'adventure',
    difficulty: 'moderate',
    duration: '4-8 hours',
    price: '₹18,000 - ₹32,000 per boat',
    ageRestriction: '12+ years',
    bestSeason: ['October', 'November', 'December', 'January', 'February', 'March', 'April', 'May'],
    locations: ['Port Blair', 'Havelock Island', 'Neil Island'],
    includes: ['Professional crew', 'Fishing gear & bait', 'Refreshments', 'Fuel and permits'],
    highlights: ['Trophy fish species', 'Modern equipment', 'Experienced crew', 'Sustainable practices'],
    whatToBring: ['Sun protection', 'Non-slip footwear', 'Motion sickness medication'],
    faqs: [
      {
        question: 'Do I need fishing experience?',
        answer: 'No experience necessary. Our crew provides full guidance and assistance.'
      },
      {
        question: 'Is it catch-and-release?',
        answer: 'We practice sustainable fishing with selective catch-and-release for conservation.'
      },
      {
        question: 'What fish can we expect to catch?',
        answer: 'Common catches include GT, tuna, barracuda, snapper, and seasonally, sailfish.'
      }
    ],
    bookingRequired: true,
    popular: false,
    featured: false
  },
  // New experiences to add
  {
    id: 'snorkeling',
    slug: 'snorkeling',
    title: 'Snorkeling',
    shortDescription: 'Discover colorful coral reefs and tropical fish',
    detailedDescription: 'Explore the vibrant underwater world of the Andamans with our guided snorkeling tours. Swim alongside colorful coral formations, tropical fish, and sea turtles in some of the clearest waters in Asia. Perfect for all skill levels, our snorkeling experiences offer a window into marine paradise.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'adventure',
    difficulty: 'easy',
    duration: '2-3 hours',
    price: '₹2,000 - ₹3,500 per person',
    ageRestriction: '8+ years',
    bestSeason: ['October', 'November', 'December', 'January', 'February', 'March', 'April', 'May'],
    locations: ['North Bay Island', 'Elephant Beach', 'Jolly Buoy Island', 'Red Skin Island', 'Neil Island'],
    includes: ['Snorkeling gear', 'Guide', 'Boat transfers', 'Life jacket'],
    highlights: ['Vibrant coral reefs', 'Tropical fish', 'Sea turtles', 'Clear waters'],
    whatToBring: ['Swimwear', 'Towel', 'Waterproof camera', 'Reef-safe sunscreen'],
    faqs: [
      {
        question: 'Do I need to know swimming?',
        answer: 'Basic swimming skills are helpful, but life jackets are mandatory for safety.'
      },
      {
        question: 'What might we see while snorkeling?',
        answer: 'Colorful corals, clownfish, angelfish, butterfly fish, and occasionally sea turtles.'
      },
      {
        question: 'Is equipment provided?',
        answer: 'Yes, we provide all snorkeling equipment including masks, snorkels, and fins.'
      }
    ],
    bookingRequired: true,
    popular: true,
    featured: true
  },
  {
    id: 'trekking',
    slug: 'trekking',
    title: 'Jungle Trekking',
    shortDescription: 'Explore the lush rainforests of the Andamans',
    detailedDescription: 'Discover the pristine rainforests of the Andaman Islands through our guided trekking adventures. Walk through ancient forests, spot endemic bird species, discover hidden waterfalls, and learn about the unique ecosystem from our expert naturalist guides.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'nature',
    difficulty: 'moderate',
    duration: '3-6 hours',
    price: '₹2,500 - ₹4,000 per person',
    ageRestriction: '10+ years',
    bestSeason: ['November', 'December', 'January', 'February', 'March', 'April'],
    locations: ['Mount Harriet', 'Saddle Peak', 'Madhuban', 'Chidiya Tapu', 'Baratang Island'],
    includes: ['Expert guide', 'Forest permits', 'Packed lunch', 'First aid'],
    highlights: ['Endemic bird species', 'Lush rainforests', 'Panoramic views', 'Waterfalls'],
    whatToBring: ['Comfortable hiking shoes', 'Light clothing', 'Insect repellent', 'Water bottle'],
    faqs: [
      {
        question: 'How difficult are the treks?',
        answer: 'We offer treks from easy to moderate difficulty, suitable for various fitness levels.'
      },
      {
        question: 'What wildlife might we see?',
        answer: 'Various bird species, butterflies, and occasionally small mammals like deer.'
      },
      {
        question: 'Are the treks safe?',
        answer: 'Yes, all treks are led by experienced guides with first aid knowledge.'
      }
    ],
    bookingRequired: true,
    popular: false,
    featured: false
  },
  {
    id: 'cultural-tours',
    slug: 'cultural-tours',
    title: 'Cultural Tours',
    shortDescription: 'Experience the rich heritage of the Andamans',
    detailedDescription: 'Immerse yourself in the fascinating culture and history of the Andaman Islands. Visit indigenous tribes, explore colonial architecture, attend traditional performances, and discover the unique blend of cultures that make these islands so special.',
    image: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'cultural',
    difficulty: 'easy',
    duration: '4-6 hours',
    price: '₹3,000 - ₹5,000 per person',
    ageRestriction: 'All ages',
    bestSeason: ['October', 'November', 'December', 'January', 'February', 'March', 'April', 'May'],
    locations: ['Port Blair', 'Baratang Island', 'Rangat', 'Little Andaman'],
    includes: ['Cultural guide', 'Entry fees', 'Transportation', 'Cultural show tickets'],
    highlights: ['Indigenous tribal visits', 'Colonial history', 'Traditional performances', 'Local cuisine'],
    whatToBring: ['Comfortable walking shoes', 'Modest clothing', 'Camera'],
    faqs: [
      {
        question: 'Can we meet indigenous tribes?',
        answer: 'Yes, we arrange respectful visits to select tribal areas with proper permissions.'
      },
      {
        question: 'Are there photography restrictions?',
        answer: 'Photography may be restricted in certain tribal areas for cultural respect.'
      },
      {
        question: 'What cultural experiences are included?',
        answer: 'Traditional dances, craft demonstrations, local cuisine tasting, and historical tours.'
      }
    ],
    bookingRequired: true,
    popular: false,
    featured: false
  },
  {
    id: 'bird-watching',
    slug: 'bird-watching',
    title: 'Bird Watching',
    shortDescription: 'Spot endemic and migratory birds in paradise',
    detailedDescription: 'The Andaman Islands are a paradise for bird enthusiasts with over 270 species including many endemics. Join our expert ornithologists for guided bird watching tours through diverse habitats from mangroves to rainforests, spotting rare species like the Andaman woodpecker and Narcondam hornbill.',
    image: 'https://images.unsplash.com/photo-1552728089-a57bcd42f6ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'nature',
    difficulty: 'easy',
    duration: '4-6 hours',
    price: '₹3,500 - ₹5,000 per person',
    ageRestriction: '10+ years',
    bestSeason: ['November', 'December', 'January', 'February', 'March'],
    locations: ['Chidiya Tapu', 'Mount Harriet', 'Saddle Peak', 'Baratang Island', 'Narcondam Island'],
    includes: ['Ornithologist guide', 'Binoculars', 'Bird field guide', 'Forest permits'],
    highlights: ['270+ bird species', 'Endemic birds', 'Migratory species', 'Expert guidance'],
    whatToBring: ['Binoculars', 'Camera with telephoto lens', 'Hat', 'Notebook'],
    faqs: [
      {
        question: 'What birds can we expect to see?',
        answer: 'Andaman woodpecker, Andaman drongo, white-headed starling, and many migratory species.'
      },
      {
        question: 'Do you provide equipment?',
        answer: 'We provide binoculars and field guides, but recommend bringing your own if possible.'
      },
      {
        question: 'Is early morning necessary?',
        answer: 'Early morning offers the best bird activity, but we offer afternoon tours as well.'
      }
    ],
    bookingRequired: true,
    popular: false,
    featured: false
  },
  {
    id: 'mangrove-creek',
    slug: 'mangrove-creek',
    title: 'Mangrove Creek Safari',
    shortDescription: 'Navigate through mystical mangrove forests',
    detailedDescription: 'Explore the mystical mangrove creeks of the Andamans in our silent electric boats. Navigate through narrow waterways surrounded by dense mangrove forests, spot crocodiles basking in the sun, and witness the unique ecosystem that thrives at the intersection of land and sea.',
    image: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'nature',
    difficulty: 'easy',
    duration: '3-4 hours',
    price: '₹2,500 - ₹4,000 per person',
    ageRestriction: 'All ages',
    bestSeason: ['October', 'November', 'December', 'January', 'February', 'March', 'April', 'May'],
    locations: ['Baratang Island', 'Rangat', 'Mayabunder', 'Little Andaman'],
    includes: ['Electric boat', 'Naturalist guide', 'Safety equipment', 'Refreshments'],
    highlights: ['Mangrove forests', 'Saltwater crocodiles', 'Bird watching', 'Unique ecosystem'],
    whatToBring: ['Binoculars', 'Camera', 'Hat', 'Insect repellent'],
    faqs: [
      {
        question: 'Is it safe with crocodiles?',
        answer: 'Yes, our electric boats are safe and maintain distance from wildlife. Expert guides ensure safety.'
      },
      {
        question: 'What wildlife might we see?',
        answer: 'Saltwater crocodiles, various bird species, mudskippers, and mangrove crabs.'
      },
      {
        question: 'Are the boats comfortable?',
        answer: 'Yes, our electric boats are comfortable, stable, and environmentally friendly.'
      }
    ],
    bookingRequired: true,
    popular: false,
    featured: false
  },
  {
    id: 'parasailing',
    slug: 'parasailing',
    title: 'Parasailing',
    shortDescription: 'Soar above the Andaman Sea for breathtaking views',
    detailedDescription: 'Experience the ultimate thrill as you soar high above the crystal-clear waters of the Andaman Sea. Our parasailing adventures offer breathtaking aerial views of the coastline, coral reefs, and surrounding islands while ensuring maximum safety with certified instructors and quality equipment.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'adventure',
    difficulty: 'moderate',
    duration: '10-15 minutes flight time',
    price: '₹3,500 - ₹4,500 per person',
    ageRestriction: '12+ years',
    bestSeason: ['October', 'November', 'December', 'January', 'February', 'March', 'April', 'May'],
    locations: ['Corbyn\'s Cove Beach', 'Havelock Island', 'Neil Island'],
    includes: ['Safety equipment', 'Certified instructor', 'Boat ride', 'Photos'],
    highlights: ['Aerial views', 'Thrilling experience', 'Safe for beginners', 'Photo opportunities'],
    whatToBring: ['Swimwear', 'Change of clothes', 'Waterproof camera'],
    faqs: [
      {
        question: 'Is parasailing safe for beginners?',
        answer: 'Absolutely! Our certified instructors ensure safety throughout the experience.'
      },
      {
        question: 'Do I need to know swimming?',
        answer: 'No swimming skills required as you take off and land from the boat.'
      },
      {
        question: 'What are the weight restrictions?',
        answer: 'Weight limits typically range from 40-90 kg, varying by equipment and conditions.'
      }
    ],
    bookingRequired: true,
    popular: false,
    featured: false
  },
  {
    id: 'jet-ski',
    slug: 'jet-ski',
    title: 'Jet Skiing',
    shortDescription: 'High-speed water adventure across the waves',
    detailedDescription: 'Feel the adrenaline rush as you zip across the azure waters of the Andaman Sea on our high-performance jet skis. Whether you are a beginner or experienced rider, our instructors will guide you through safe techniques while you enjoy the thrill of speed and freedom on the water.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'adventure',
    difficulty: 'moderate',
    duration: '15-30 minutes',
    price: '₹2,500 - ₹3,500 per session',
    ageRestriction: '16+ years',
    bestSeason: ['October', 'November', 'December', 'January', 'February', 'March', 'April', 'May'],
    locations: ['Corbyn\'s Cove Beach', 'Havelock Island', 'Neil Island', 'Rangat'],
    includes: ['Jet ski rental', 'Safety equipment', 'Briefing', 'Instructor guidance'],
    highlights: ['High-speed adventure', 'Stunning views', 'Safe for beginners', 'Multiple locations'],
    whatToBring: ['Swimwear', 'Change of clothes', 'Waterproof bag'],
    faqs: [
      {
        question: 'Do I need experience?',
        answer: 'No experience necessary. Our instructors provide thorough briefings for beginners.'
      },
      {
        question: 'Is it safe?',
        answer: 'Yes, safety equipment is provided and instructors monitor all activities closely.'
      },
      {
        question: 'Can two people ride together?',
        answer: 'Most jet skis can accommodate two people, though pricing may vary.'
      }
    ],
    bookingRequired: true,
    popular: false,
    featured: false
  }
];

export const getExperiencesByCategory = (category: string) => {
  return experiences.filter(exp => exp.category === category);
};

export const getFeaturedExperiences = () => {
  return experiences.filter(exp => exp.featured);
};

export const getPopularExperiences = () => {
  return experiences.filter(exp => exp.popular);
};

export const getExperienceBySlug = (slug: string) => {
  return experiences.find(exp => exp.slug === slug);
};

export const searchExperiences = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return experiences.filter(exp => 
    exp.title.toLowerCase().includes(lowercaseQuery) ||
    exp.shortDescription.toLowerCase().includes(lowercaseQuery) ||
    exp.detailedDescription.toLowerCase().includes(lowercaseQuery) ||
    exp.category.toLowerCase().includes(lowercaseQuery)
  );
};