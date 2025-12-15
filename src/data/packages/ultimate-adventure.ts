import { Package } from '../packages';
import { commonPaymentPolicy, commonTips, commonCancellationPolicy, commonTerms } from '../commonPolicies';

export const ultimateAdventure: Package = {
  slug: 'ultimate-andaman-adventure',
  title: 'Ultimate Andaman Adventure',
  description: 'A 7-day thrill-seeker\'s paradise exploring the depths and heights of the Andaman Islands.',
  longDescription: 'Experience the adrenaline of the Andaman Islands with our Ultimate Adventure package. From scuba diving in crystal clear waters to trekking through lush rainforests, this 7-day journey is designed for those who seek excitement and natural beauty. Discover hidden caves, pristine beaches, and vibrant coral reefs.',
  price: 45000,
  duration: '7 days',
  groupSize: '2-8 People',
  image: 'https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg',
  features: ['Scuba Diving', 'Jungle Trekking', 'Kayaking', 'Island Hopping'],
  includes: [
    'Airport transfers in private AC vehicle',
    'Accommodation in 4-star adventure resorts',
    'Daily breakfast',
    'Scuba diving session at Havelock',
    'Kayaking tour in mangroves',
    'Trekking guide and equipment',
    'Inter-island ferry tickets (Luxury Class)',
    'All entry permits and forest fees'
  ],
  excludes: [
    'Airfare to/from Port Blair',
    'Lunch',
    'Personal expenses',
    'Optional water sports not mentioned',
    'GST 5%'
  ],
  itinerary: [
    {
      day: 'Day 1',
      title: 'Arrival & Cellular Jail',
      description: 'Arrive at Port Blair, transfer to hotel. Visit the historic Cellular Jail and witness the Light & Sound show.',
      activities: [
        "Airport pickup by private vehicle (10:00 AM - 2:00 PM)",
        "Check-in to hotel and freshen up (12:30 PM)",
        "Lunch at hotel (1:30 PM)",
        "Visit Cellular Jail National Memorial (4:30 PM)",
        "Attend Light & Sound Show (6:00 PM)",
        "  • Historical narration of freedom struggle",
        "  • Hindi/English show timings vary",
        "Return to hotel for dinner"
      ],
      meals: ['Breakfast'],
      sightseeing: ['Cellular Jail', 'Corbyn\'s Cove Beach']
    },
    {
      day: 'Day 2',
      title: 'Havelock Island & Radhanagar Beach',
      description: 'Ferry to Havelock Island. Relax at the world-famous Radhanagar Beach, known for its stunning sunset.',
      activities: [
        "Early morning private ferry to Havelock (8:00 AM)",
        "Arrival at Havelock Jetty (9:30 AM)",
        "Transfer to beach resort (10:00 AM)",
        "Relaxation at Beach No. 5 (Afternoon)",
        "Sunset at Radhanagar Beach (4:30 PM)",
        "  • Rated Asia's Best Beach",
        "  • Swimming allowed in designated areas",
        "Dinner at resort"
      ],
      meals: ['Breakfast'],
      sightseeing: ['Radhanagar Beach']
    },
    {
      day: 'Day 3',
      title: 'Scuba Diving & Elephant Beach',
      description: 'Morning Scuba Diving session. Later, boat ride to Elephant Beach for snorkeling and water sports.',
      activities: [
        "Early wake-up for Scuba session (5:00 AM)",
        "PADI Scuba Diving experience (5:30 AM - 7:30 AM)",
        "  • Depth: 10-12 meters",
        "  • Duration: 45 minutes underwater",
        "  • Includes training and gear",
        "Breakfast at resort (8:00 AM)",
        "Boat transfer to Elephant Beach (10:00 AM)",
        "Snorkeling and water sports (11:00 AM - 2:00 PM)",
        "Return to resort for leisure evening"
      ],
      meals: ['Breakfast'],
      sightseeing: ['Elephant Beach', 'Coral Reefs']
    },
    {
      day: 'Day 4',
      title: 'Neil Island - The Vegetable Bowl',
      description: 'Transfer to Neil Island. Visit Bharatpur Beach for water activities and Laxmanpur Beach for sunset.',
      activities: [
        "Check-out and transfer to Jetty (9:00 AM)",
        "Ferry to Neil Island (10:00 AM)",
        "Check-in to Neil resort (11:30 AM)",
        "Visit Bharatpur Beach for glass-bottom ride (2:00 PM)",
        "Sunset at Laxmanpur Beach (4:30 PM)",
        "  • Famous for Natural Bridge formation",
        "  • Sunset point viewing",
        "Dinner at local restaurant"
      ],
      meals: ['Breakfast'],
      sightseeing: ['Bharatpur Beach', 'Laxmanpur Beach', 'Natural Bridge']
    },
    {
      day: 'Day 5',
      title: 'Baratang Island Adventure',
      description: 'Early morning departure to Baratang. Pass through tribal reserves, explore limestone caves and mud volcanoes.',
      activities: [
        "Ultra-early start for Baratang (3:30 AM)",
        "Drive through Jarawa Tribal Reserve (5:00 AM)",
        "  • No photography allowed",
        "  • Guided convoy movement",
        "Mangrove boat ride to Limestone Caves (9:00 AM)",
        "Trek to Mud Volcano (11:00 AM)",
        "Lunch at Baratang (1:00 PM)",
        "Return drive to Port Blair (3:00 PM)",
        "Reach hotel by evening (6:00 PM)"
      ],
      meals: ['Breakfast'],
      sightseeing: ['Limestone Caves', 'Mud Volcano']
    },
    {
      day: 'Day 6',
      title: 'Ross Island & North Bay',
      description: 'Return to Port Blair. Visit Ross Island (British HQ) and North Bay Island (Coral Island).',
      activities: [
        "Boat exhursion to Ross Island (9:00 AM)",
        "  • Explore British ruins and deer park",
        "Transfer to North Bay Island (11:30 AM)",
        "Optional water sports at North Bay:",
        "  • Sea Walk",
        "  • Glass bottom boat",
        "  • Semi-submarine",
        "Return to Port Blair (3:30 PM)",
        "Shopping at Aberdeen Bazaar (5:00 PM)"
      ],
      meals: ['Breakfast'],
      sightseeing: ['Ross Island Ruins', 'North Bay Lighthouse']
    },
    {
      day: 'Day 7',
      title: 'Departure',
      description: 'Check out and transfer to the airport with fond memories of your adventure.',
      activities: [
        "Breakfast and check-out (8:00 AM)",
        "Airport drop (2 hours before flight)",
        "Tour concludes"
      ],
      meals: ['Breakfast'],
      sightseeing: []
    }
  ],
  itineraries: {
    6: [
      {
        day: 'Day 1',
        title: 'Arrival & Cellular Jail',
        description: 'Arrive at Port Blair, transfer to hotel. Visit the historic Cellular Jail and witness the Light & Sound show.',
        activities: [
          "Airport pickup by private vehicle (10:00 AM - 2:00 PM)",
          "Check-in to hotel and freshen up (12:30 PM)",
          "Visit Cellular Jail National Memorial (4:30 PM)",
          "Attend Light & Sound Show (6:00 PM)"
        ],
        meals: ['Breakfast'],
        sightseeing: ['Cellular Jail', 'Corbyn\'s Cove Beach']
      },
      {
        day: 'Day 2',
        title: 'Havelock Island & Radhanagar Beach',
        description: 'Ferry to Havelock Island. Relax at the world-famous Radhanagar Beach.',
        activities: [
          "Early morning private ferry to Havelock (8:00 AM)",
          "Arrival at Havelock Jetty (9:30 AM)",
          "Relaxation at Beach No. 5",
          "Sunset at Radhanagar Beach (4:30 PM)"
        ],
        meals: ['Breakfast'],
        sightseeing: ['Radhanagar Beach']
      },
      {
        day: 'Day 3',
        title: 'Scuba Diving & Elephant Beach',
        description: 'Morning Scuba Diving session. Later, boat ride to Elephant Beach.',
        activities: [
          "Early wake-up for Scuba session (5:00 AM)",
          "PADI Scuba Diving experience (5:30 AM)",
          "Boat transfer to Elephant Beach (10:00 AM)",
          "Snorkeling and water sports"
        ],
        meals: ['Breakfast'],
        sightseeing: ['Elephant Beach', 'Coral Reefs']
      },
      {
        day: 'Day 4',
        title: 'Neil Island',
        description: 'Transfer to Neil Island. Visit Bharatpur Beach and Laxmanpur Beach.',
        activities: [
          "Ferry to Neil Island (10:00 AM)",
          "Visit Bharatpur Beach for glass-bottom ride",
          "Sunset at Laxmanpur Beach (4:30 PM)"
        ],
        meals: ['Breakfast'],
        sightseeing: ['Bharatpur Beach', 'Laxmanpur Beach']
      },
      {
        day: 'Day 5',
        title: 'Ross Island & North Bay',
        description: 'Return to Port Blair. Visit Ross Island and North Bay Island.',
        activities: [
          "Boat exhursion to Ross Island (9:00 AM)",
          "Transfer to North Bay Island (11:30 AM)",
          "Optional water sports at North Bay",
          "Return to Port Blair (3:30 PM)"
        ],
        meals: ['Breakfast'],
        sightseeing: ['Ross Island Ruins', 'North Bay Lighthouse']
      },
      {
        day: 'Day 6',
        title: 'Departure',
        description: 'Check out and transfer to the airport.',
        activities: ["Airport drop (2 hours before flight)"],
        meals: ['Breakfast'],
        sightseeing: []
      }
    ],
    7: [
      {
        day: 'Day 1',
        title: 'Arrival & Cellular Jail',
        description: 'Arrive at Port Blair, transfer to hotel. Visit the historic Cellular Jail and witness the Light & Sound show.',
        activities: [
          "Airport pickup by private vehicle (10:00 AM - 2:00 PM)",
          "Check-in to hotel and freshen up (12:30 PM)",
          "Visit Cellular Jail National Memorial (4:30 PM)",
          "Attend Light & Sound Show (6:00 PM)"
        ],
        meals: ['Breakfast'],
        sightseeing: ['Cellular Jail', 'Corbyn\'s Cove Beach']
      },
      {
        day: 'Day 2',
        title: 'Havelock Island & Radhanagar Beach',
        description: 'Ferry to Havelock Island. Relax at the world-famous Radhanagar Beach.',
        activities: [
          "Early morning private ferry to Havelock (8:00 AM)",
          "Arrival at Havelock Jetty (9:30 AM)",
          "Relaxation at Beach No. 5",
          "Sunset at Radhanagar Beach (4:30 PM)"
        ],
        meals: ['Breakfast'],
        sightseeing: ['Radhanagar Beach']
      },
      {
        day: 'Day 3',
        title: 'Scuba Diving & Elephant Beach',
        description: 'Morning Scuba Diving session. Later, boat ride to Elephant Beach.',
        activities: [
          "Early wake-up for Scuba session (5:00 AM)",
          "PADI Scuba Diving experience (5:30 AM)",
          "Boat transfer to Elephant Beach (10:00 AM)",
          "Snorkeling and water sports"
        ],
        meals: ['Breakfast'],
        sightseeing: ['Elephant Beach', 'Coral Reefs']
      },
      {
        day: 'Day 4',
        title: 'Neil Island',
        description: 'Transfer to Neil Island. Visit Bharatpur Beach and Laxmanpur Beach.',
        activities: [
          "Ferry to Neil Island (10:00 AM)",
          "Visit Bharatpur Beach for glass-bottom ride",
          "Sunset at Laxmanpur Beach (4:30 PM)"
        ],
        meals: ['Breakfast'],
        sightseeing: ['Bharatpur Beach', 'Laxmanpur Beach']
      },
      {
        day: 'Day 5',
        title: 'Baratang Island Adventure',
        description: 'Early morning departure to Baratang. Pass through tribal reserves, explore limestone caves and mud volcanoes.',
        activities: [
          "Ultra-early start for Baratang (3:30 AM)",
          "Drive through Jarawa Tribal Reserve",
          "Mangrove boat ride to Limestone Caves",
          "Trek to Mud Volcano",
          "Return to Port Blair (6:00 PM)"
        ],
        meals: ['Breakfast'],
        sightseeing: ['Limestone Caves', 'Mud Volcano']
      },
      {
        day: 'Day 6',
        title: 'Ross Island & North Bay',
        description: 'Return to Port Blair. Visit Ross Island and North Bay Island.',
        activities: [
          "Boat exhursion to Ross Island (9:00 AM)",
          "Transfer to North Bay Island",
          "Return to Port Blair (3:30 PM)"
        ],
        meals: ['Breakfast'],
        sightseeing: ['Ross Island Ruins', 'North Bay Lighthouse']
      },
      {
        day: 'Day 7',
        title: 'Departure',
        description: 'Check out and transfer to the airport.',
        activities: ["Airport drop (2 hours before flight)"],
        meals: ['Breakfast'],
        sightseeing: []
      }
    ],
    8: [
      {
        day: 'Day 1',
        title: 'Arrival & Cellular Jail',
        description: 'Arrive at Port Blair, transfer to hotel. Visit the historic Cellular Jail and witness the Light & Sound show.',
        activities: [
          "Airport pickup by private vehicle",
          "Visual tour of Cellular Jail",
          "Light & Sound Show"
        ],
        meals: ['Breakfast'],
        sightseeing: ['Cellular Jail', 'Corbyn\'s Cove Beach']
      },
      {
        day: 'Day 2',
        title: 'Havelock Island & Radhanagar Beach',
        description: 'Ferry to Havelock Island. Relax at Radhanagar Beach.',
        activities: [
          "Ferry transfer to Havelock",
          "Check-in to resort",
          "Sunset at Radhanagar Beach"
        ],
        meals: ['Breakfast'],
        sightseeing: ['Radhanagar Beach']
      },
      {
        day: 'Day 3',
        title: 'Scuba Diving & Elephant Beach',
        description: 'Scuba Diving session and Elephant Beach visit.',
        activities: [
          "Scuba Diving session (5:00 AM)",
          "Elephant Beach water sports",
          "Leisure afternoon"
        ],
        meals: ['Breakfast'],
        sightseeing: ['Elephant Beach', 'Coral Reefs']
      },
      {
        day: 'Day 4',
        title: 'Havelock Leisure & Kayaking',
        description: 'Morning at leisure. Afternoon mangrove kayaking tour.',
        activities: [
          "Morning relaxation/spa",
          "Afternoon Mangrove Kayaking",
          "Beachside dinner"
        ],
        meals: ['Breakfast'],
        sightseeing: ['Mangroves']
      },
      {
        day: 'Day 5',
        title: 'Neil Island',
        description: 'Transfer to Neil Island.',
        activities: [
          "Ferry to Neil Island",
          "Bharatpur Beach visit",
          "Laxmanpur Beach sunset"
        ],
        meals: ['Breakfast'],
        sightseeing: ['Bharatpur Beach', 'Laxmanpur Beach']
      },
      {
        day: 'Day 6',
        title: 'Baratang Island Adventure',
        description: 'Full day trip to Baratang.',
        activities: [
          "Jarawa Reserve drive",
          "Limestone Caves boat ride",
          "Mud Volcano trek"
        ],
        meals: ['Breakfast'],
        sightseeing: ['Limestone Caves', 'Mud Volcano']
      },
      {
        day: 'Day 7',
        title: 'Ross Island & North Bay',
        description: 'North Bay and Ross Island tour.',
        activities: [
          "Ross Island heritage walk",
          "North Bay water sports"
        ],
        meals: ['Breakfast'],
        sightseeing: ['Ross Island Ruins', 'North Bay Lighthouse']
      },
      {
        day: 'Day 8',
        title: 'Departure',
        description: 'Check out and transfer to the airport.',
        activities: ["Airport Drop"],
        meals: ['Breakfast'],
        sightseeing: []
      }
    ]
  },
  highlights: [
    {
      title: 'Scuba Diving',
      description: 'Explore the vibrant underwater world of Havelock.',
      image: 'https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg'
    },
    {
      title: 'Limestone Caves',
      description: 'Marvel at the natural limestone formations in Baratang.',
      image: 'https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg'
    }
  ],
  terms: commonTerms,
  paymentPolicy: commonPaymentPolicy,
  tips: commonTips,
  pricingOptions: [
    { days: 6, pricePerPerson: 48999, title: '6 Days Adventure' },
    { days: 7, pricePerPerson: 55999, title: '7 Days Ultimate Adventure' },
    { days: 8, pricePerPerson: 62999, title: '8 Days Extended Adventure' }
  ],
  hotels: [],
  supplements: [],
  pickupLocations: ['Port Blair Airport'],
  cancellationPolicy: commonCancellationPolicy
};

