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
    'Daily breakfast and dinner',
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
      activities: ['Airport Pickup', 'Cellular Jail Visit', 'Light & Sound Show'],
      meals: ['Dinner'],
      sightseeing: ['Cellular Jail', 'Corbyn\'s Cove Beach']
    },
    {
      day: 'Day 2',
      title: 'Havelock Island & Radhanagar Beach',
      description: 'Ferry to Havelock Island. Relax at the world-famous Radhanagar Beach, known for its stunning sunset.',
      activities: ['Ferry Transfer', 'Beach Relaxation', 'Sunset View'],
      meals: ['Breakfast', 'Dinner'],
      sightseeing: ['Radhanagar Beach']
    },
    {
      day: 'Day 3',
      title: 'Scuba Diving & Elephant Beach',
      description: 'Morning Scuba Diving session. Later, boat ride to Elephant Beach for snorkeling and water sports.',
      activities: ['Scuba Diving (Beginner Friendly)', 'Boat Ride', 'Snorkeling'],
      meals: ['Breakfast', 'Dinner'],
      sightseeing: ['Elephant Beach', 'Coral Reefs']
    },
    {
      day: 'Day 4',
      title: 'Neil Island - The Vegetable Bowl',
      description: 'Transfer to Neil Island. Visit Bharatpur Beach for water activities and Laxmanpur Beach for sunset.',
      activities: ['Ferry Transfer', 'Glass Bottom Boat Ride', 'Sunset Walk'],
      meals: ['Breakfast', 'Dinner'],
      sightseeing: ['Bharatpur Beach', 'Laxmanpur Beach', 'Natural Bridge']
    },
    {
      day: 'Day 5',
      title: 'Baratang Island Adventure',
      description: 'Early morning departure to Baratang. Pass through tribal reserves, explore limestone caves and mud volcanoes.',
      activities: ['Jungle Safari', 'Boat Ride through Mangroves', 'Cave Exploration'],
      meals: ['Breakfast', 'Dinner'],
      sightseeing: ['Limestone Caves', 'Mud Volcano']
    },
    {
      day: 'Day 6',
      title: 'Ross Island & North Bay',
      description: 'Return to Port Blair. Visit Ross Island (British HQ) and North Bay Island (Coral Island).',
      activities: ['Boat Ride', 'History Walk', 'Water Sports (Optional)'],
      meals: ['Breakfast', 'Dinner'],
      sightseeing: ['Ross Island Ruins', 'North Bay Lighthouse']
    },
    {
      day: 'Day 7',
      title: 'Departure',
      description: 'Check out and transfer to the airport with fond memories of your adventure.',
      activities: ['Airport Drop'],
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
        activities: ['Airport Pickup', 'Cellular Jail Visit', 'Light & Sound Show'],
        meals: ['Dinner'],
        sightseeing: ['Cellular Jail', 'Corbyn\'s Cove Beach']
      },
      {
        day: 'Day 2',
        title: 'Havelock Island & Radhanagar Beach',
        description: 'Ferry to Havelock Island. Relax at the world-famous Radhanagar Beach, known for its stunning sunset.',
        activities: ['Ferry Transfer', 'Beach Relaxation', 'Sunset View'],
        meals: ['Breakfast', 'Dinner'],
        sightseeing: ['Radhanagar Beach']
      },
      {
        day: 'Day 3',
        title: 'Scuba Diving & Elephant Beach',
        description: 'Morning Scuba Diving session. Later, boat ride to Elephant Beach for snorkeling and water sports.',
        activities: ['Scuba Diving', 'Boat Ride', 'Snorkeling'],
        meals: ['Breakfast', 'Dinner'],
        sightseeing: ['Elephant Beach', 'Coral Reefs']
      },
      {
        day: 'Day 4',
        title: 'Neil Island',
        description: 'Transfer to Neil Island. Visit Bharatpur Beach and Laxmanpur Beach.',
        activities: ['Ferry Transfer', 'Glass Bottom Boat Ride', 'Sunset Walk'],
        meals: ['Breakfast', 'Dinner'],
        sightseeing: ['Bharatpur Beach', 'Laxmanpur Beach']
      },
      {
        day: 'Day 5',
        title: 'Ross Island & North Bay',
        description: 'Return to Port Blair. Visit Ross Island and North Bay Island.',
        activities: ['Ferry to Port Blair', 'Boat Ride', 'History Walk'],
        meals: ['Breakfast', 'Dinner'],
        sightseeing: ['Ross Island Ruins', 'North Bay Lighthouse']
      },
      {
        day: 'Day 6',
        title: 'Departure',
        description: 'Check out and transfer to the airport.',
        activities: ['Airport Drop'],
        meals: ['Breakfast'],
        sightseeing: []
      }
    ],
    7: [
      {
        day: 'Day 1',
        title: 'Arrival & Cellular Jail',
        description: 'Arrive at Port Blair, transfer to hotel. Visit the historic Cellular Jail and witness the Light & Sound show.',
        activities: ['Airport Pickup', 'Cellular Jail Visit', 'Light & Sound Show'],
        meals: ['Dinner'],
        sightseeing: ['Cellular Jail', 'Corbyn\'s Cove Beach']
      },
      {
        day: 'Day 2',
        title: 'Havelock Island & Radhanagar Beach',
        description: 'Ferry to Havelock Island. Relax at the world-famous Radhanagar Beach, known for its stunning sunset.',
        activities: ['Ferry Transfer', 'Beach Relaxation', 'Sunset View'],
        meals: ['Breakfast', 'Dinner'],
        sightseeing: ['Radhanagar Beach']
      },
      {
        day: 'Day 3',
        title: 'Scuba Diving & Elephant Beach',
        description: 'Morning Scuba Diving session. Later, boat ride to Elephant Beach for snorkeling and water sports.',
        activities: ['Scuba Diving', 'Boat Ride', 'Snorkeling'],
        meals: ['Breakfast', 'Dinner'],
        sightseeing: ['Elephant Beach', 'Coral Reefs']
      },
      {
        day: 'Day 4',
        title: 'Neil Island',
        description: 'Transfer to Neil Island. Visit Bharatpur Beach and Laxmanpur Beach.',
        activities: ['Ferry Transfer', 'Glass Bottom Boat Ride', 'Sunset Walk'],
        meals: ['Breakfast', 'Dinner'],
        sightseeing: ['Bharatpur Beach', 'Laxmanpur Beach']
      },
      {
        day: 'Day 5',
        title: 'Baratang Island Adventure',
        description: 'Early morning departure to Baratang. Pass through tribal reserves, explore limestone caves and mud volcanoes.',
        activities: ['Jungle Safari', 'Boat Ride', 'Cave Exploration'],
        meals: ['Breakfast', 'Dinner'],
        sightseeing: ['Limestone Caves', 'Mud Volcano']
      },
      {
        day: 'Day 6',
        title: 'Ross Island & North Bay',
        description: 'Return to Port Blair. Visit Ross Island and North Bay Island.',
        activities: ['Boat Ride', 'History Walk'],
        meals: ['Breakfast', 'Dinner'],
        sightseeing: ['Ross Island Ruins', 'North Bay Lighthouse']
      },
      {
        day: 'Day 7',
        title: 'Departure',
        description: 'Check out and transfer to the airport.',
        activities: ['Airport Drop'],
        meals: ['Breakfast'],
        sightseeing: []
      }
    ],
    8: [
      {
        day: 'Day 1',
        title: 'Arrival & Cellular Jail',
        description: 'Arrive at Port Blair, transfer to hotel. Visit the historic Cellular Jail and witness the Light & Sound show.',
        activities: ['Airport Pickup', 'Cellular Jail Visit', 'Light & Sound Show'],
        meals: ['Dinner'],
        sightseeing: ['Cellular Jail', 'Corbyn\'s Cove Beach']
      },
      {
        day: 'Day 2',
        title: 'Havelock Island & Radhanagar Beach',
        description: 'Ferry to Havelock Island. Relax at the world-famous Radhanagar Beach, known for its stunning sunset.',
        activities: ['Ferry Transfer', 'Beach Relaxation', 'Sunset View'],
        meals: ['Breakfast', 'Dinner'],
        sightseeing: ['Radhanagar Beach']
      },
      {
        day: 'Day 3',
        title: 'Scuba Diving & Elephant Beach',
        description: 'Morning Scuba Diving session. Later, boat ride to Elephant Beach for snorkeling and water sports.',
        activities: ['Scuba Diving', 'Boat Ride', 'Snorkeling'],
        meals: ['Breakfast', 'Dinner'],
        sightseeing: ['Elephant Beach', 'Coral Reefs']
      },
      {
        day: 'Day 4',
        title: 'Havelock Leisure & Kayaking',
        description: 'Morning at leisure. Afternoon mangrove kayaking tour.',
        activities: ['Leisure', 'Kayaking'],
        meals: ['Breakfast', 'Dinner'],
        sightseeing: ['Mangroves']
      },
      {
        day: 'Day 5',
        title: 'Neil Island',
        description: 'Transfer to Neil Island. Visit Bharatpur Beach and Laxmanpur Beach.',
        activities: ['Ferry Transfer', 'Glass Bottom Boat Ride', 'Sunset Walk'],
        meals: ['Breakfast', 'Dinner'],
        sightseeing: ['Bharatpur Beach', 'Laxmanpur Beach']
      },
      {
        day: 'Day 6',
        title: 'Baratang Island Adventure',
        description: 'Early morning departure to Baratang. Pass through tribal reserves, explore limestone caves and mud volcanoes.',
        activities: ['Jungle Safari', 'Boat Ride', 'Cave Exploration'],
        meals: ['Breakfast', 'Dinner'],
        sightseeing: ['Limestone Caves', 'Mud Volcano']
      },
      {
        day: 'Day 7',
        title: 'Ross Island & North Bay',
        description: 'Return to Port Blair. Visit Ross Island and North Bay Island.',
        activities: ['Boat Ride', 'History Walk'],
        meals: ['Breakfast', 'Dinner'],
        sightseeing: ['Ross Island Ruins', 'North Bay Lighthouse']
      },
      {
        day: 'Day 8',
        title: 'Departure',
        description: 'Check out and transfer to the airport.',
        activities: ['Airport Drop'],
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
    { days: 6, pricePerPerson: 38000, title: '6 Days Adventure' },
    { days: 7, pricePerPerson: 45000, title: '7 Days Ultimate Adventure' },
    { days: 8, pricePerPerson: 52000, title: '8 Days Extended Adventure' }
  ],
  hotels: [],
  supplements: [],
  pickupLocations: ['Port Blair Airport'],
  cancellationPolicy: commonCancellationPolicy
};
