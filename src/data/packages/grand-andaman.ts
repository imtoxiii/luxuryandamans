import { Package } from '../packages';
import { commonPaymentPolicy, commonTips, commonCancellationPolicy, commonTerms } from '../commonPolicies';

export const grandAndaman: Package = {
  slug: "grand-andaman-tour",
  id: "grand-andaman",
  title: 'Grand Andaman Tour',
  description: 'An 8-day comprehensive tour covering the best of Port Blair, Havelock, Neil, and Baratang.',
  longDescription: 'The Grand Andaman Tour is the ultimate way to experience the diversity of the islands. From the historical significance of Port Blair to the natural wonders of Baratang and the pristine beaches of Havelock and Neil, this 8-day itinerary covers it all. Perfect for families and groups who want to see everything.',
  price: 52000,
  duration: '8 days',
  groupSize: '4-12 People',
  image: 'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg',
  features: ['Comprehensive Tour', 'History & Nature', 'All Major Islands', 'Family Friendly'],
  includes: [
    'Airport transfers',
    'Accommodation in 3-star deluxe hotels',
    'Daily breakfast',
    'All ferry transfers (Makruzz/Nautika)',
    'Entry tickets to all monuments and museums',
    'Baratang permit charges',
    'Glass bottom boat ride at North Bay',
    'Tour coordinator assistance'
  ],
  excludes: [
    'Airfare',
    'Lunch',
    'Water sports activities',
    'Camera charges',
    'GST 5%'
  ],
  itinerary: [
    {
      day: 'Day 1',
      title: 'Arrival & City Tour',
      description: 'Arrival at Port Blair. Visit Anthropological Museum, Fisheries Museum, and Cellular Jail.',
      activities: [
        "Airport arrival and welcome (typical 12:00 PM - 2:00 PM)",
        "Transfer to hotel with tour briefing",
        "Check-in and lunch break (12:30 PM - 2:00 PM)",
        "Visit Cellular Jail National Memorial (3:30 PM)",
        "Explore Anthropological Museum (4:30 PM)",
        "  • Tribal history exhibits",
        "  • Cultural artifacts",
        "Light & Sound Show at Cellular Jail (6:00 PM - 7:00 PM)",
        "Dinner at local restaurant (optional)",
        "Return to hotel for rest"
      ],
      meals: ['Breakfast'],
      sightseeing: ['Cellular Jail', 'Anthropological Museum', 'Fisheries Museum']
    },
    {
      day: 'Day 2',
      title: 'Ross & North Bay Islands',
      description: 'Full day excursion to Ross Island and North Bay Coral Island.',
      activities: [
        "Breakfast at hotel (8:00 AM)",
        "Transfer to Rajiv Gandhi Water Sports Complex (9:00 AM)",
        "Boat ride to Ross Island (9:30 AM)",
        "  • Explore British administrative ruins",
        "  • Spot diverse fauna (deer, peacocks)",
        "Boat transfer to North Bay Island (12:00 PM)",
        "Lunch break at North Bay (1:00 PM)",
        "Included Glass Bottom Boat ride (2:00 PM)",
        "Optional Water Sports (Scuba, Sea Walk) (2:30 PM)",
        "Return boat to Port Blair (4:00 PM)",
        "Evening at leisure"
      ],
      meals: ['Breakfast'],
      sightseeing: ['Ross Island', 'North Bay']
    },
    {
      day: 'Day 3',
      title: 'Port Blair to Havelock',
      description: 'Cruise to Havelock. Afternoon visit to Radhanagar Beach.',
      activities: [
        "Private ferry transfer to Havelock Island (8:00 AM)",
        "  • 90-minute scenic cruise",
        "Arrival and transfer to resort (10:00 AM)",
        "Check-in and refresh",
        "Lunch at resort (1:00 PM)",
        "Visit Radhanagar Beach (3:30 PM)",
        "  • Ranked among Asia's best beaches",
        "  • Swimming and sunset viewing",
        "Return to resort (6:30 PM)"
      ],
      meals: ['Breakfast'],
      sightseeing: ['Radhanagar Beach']
    },
    {
      day: 'Day 4',
      title: 'Elephant Beach Excursion',
      description: 'Boat ride to Elephant Beach for water sports. Evening at leisure.',
      activities: [
        "Speed boat ride to Elephant Beach (9:00 AM)",
        "  • 20-minute coastal ride",
        "Complimentary Snorkeling session (10:00 AM)",
        "  • Guided session with gear",
        "Optional water sports available:",
        "  • Sea Walk, Jet Ski, Banana Ride",
        "Return to Havelock Jetty (1:00 PM)",
        "Lunch at local restaurant (1:30 PM)",
        "Evening at leisure / Resort pool time"
      ],
      meals: ['Breakfast'],
      sightseeing: ['Elephant Beach']
    },
    {
      day: 'Day 5',
      title: 'Havelock to Neil Island',
      description: 'Transfer to Neil Island. Visit Bharatpur, Laxmanpur, and Natural Bridge.',
      activities: [
        "Check-out and transfer to Jetty (9:00 AM)",
        "Cruise to Neil Island (10:00 AM)",
        "Disembark at Neil and hotel transfer (11:30 AM)",
        "Visit Bharatpur Beach (2:00 PM)",
        "  • Ideal for swimming and glass bottom boats",
        "Visit Natural Bridge (4:00 PM)",
        "  • Walk on dead coral reef (low tide required)",
        "Sunset at Laxmanpur Beach (5:00 PM)",
        "Return to hotel"
      ],
      meals: ['Breakfast'],
      sightseeing: ['Bharatpur Beach', 'Laxmanpur Beach', 'Natural Bridge']
    },
    {
      day: 'Day 6',
      title: 'Neil to Port Blair',
      description: 'Return to Port Blair. Evening shopping at Sagarika Emporium.',
      activities: [
        "Breakfast and morning at leisure (9:00 AM)",
        "Check-out and transfer to Jetty (10:30 AM)",
        "Return cruise to Port Blair (11:30 AM)",
        "Hotel check-in at Port Blair (1:30 PM)",
        "Evening shopping at Sagarika Emporium (5:00 PM)",
        "  • Government emporium for handicrafts",
        "  • Pearls, shell crafts, wood carvings",
        "Dinner and overnight stay"
      ],
      meals: ['Breakfast'],
      sightseeing: ['Sagarika Emporium']
    },
    {
      day: 'Day 7',
      title: 'Baratang Day Trip',
      description: 'Early morning trip to Baratang to see Limestone Caves.',
      activities: [
        "Departure for Baratang (3:30 AM)",
        "  • Convoy passes through Jarawa Reserve",
        "Arrival at Baratang Jetty (7:00 AM)",
        "Speed boat through mangroves to Limestone Caves (8:00 AM)",
        "  • Walk through forest trail to reach caves",
        "Return to Jetty and refreshment (11:00 AM)",
        "Optional trip to Mud Volcano (if open)",
        "Return journey to Port Blair (1:00 PM)",
        "Arrival at Port Blair hotel (5:00 PM)"
      ],
      meals: ['Breakfast'],
      sightseeing: ['Limestone Caves']
    },
    {
      day: 'Day 8',
      title: 'Departure',
      description: 'Transfer to airport for your onward journey.',
      activities: [
        "Breakfast at hotel (8:00 AM)",
        "Check-out formalities (9:00 AM)",
        "Transfer to Veer Savarkar International Airport",
        "Departure with sweet memories"
      ],
      meals: ['Breakfast'],
      sightseeing: []
    }
  ],
  itineraries: {
    7: [
      {
        day: 'Day 1',
        title: 'Arrival & City Tour',
        description: 'Arrival at Port Blair. Visit Anthropological Museum, Fisheries Museum, and Cellular Jail.',
        activities: [
          "Airport arrival and welcome",
          "Check-in and lunch",
          "Cellular Jail & Museums visit",
          "Light & Sound Show"
        ],
        meals: ['Breakfast'],
        sightseeing: ['Cellular Jail', 'Anthropological Museum', 'Fisheries Museum']
      },
      {
        day: 'Day 2',
        title: 'Ross & North Bay Islands',
        description: 'Full day excursion to Ross Island and North Bay Coral Island.',
        activities: [
          "Boat trip to Ross Island",
          "Transfer to North Bay",
          "Glass Bottom Boat ride included",
          "Return to Port Blair"
        ],
        meals: ['Breakfast'],
        sightseeing: ['Ross Island', 'North Bay']
      },
      {
        day: 'Day 3',
        title: 'Port Blair to Havelock',
        description: 'Cruise to Havelock. Afternoon visit to Radhanagar Beach.',
        activities: [
          "Cruise to Havelock",
          "Check-in to resort",
          "Sunset at Radhanagar Beach"
        ],
        meals: ['Breakfast'],
        sightseeing: ['Radhanagar Beach']
      },
      {
        day: 'Day 4',
        title: 'Elephant Beach Excursion',
        description: 'Boat ride to Elephant Beach for water sports. Evening at leisure.',
        activities: [
          "Boat ride to Elephant Beach",
          "Snorkeling session",
          "Leisure evening"
        ],
        meals: ['Breakfast'],
        sightseeing: ['Elephant Beach']
      },
      {
        day: 'Day 5',
        title: 'Havelock to Neil to Port Blair',
        description: 'Transfer to Neil Island for sightseeing, then return to Port Blair.',
        activities: [
          "Morning ferry to Neil Island",
          "Visit Bharatpur & Laxmanpur Beaches",
          "Evening ferry to Port Blair"
        ],
        meals: ['Breakfast'],
        sightseeing: ['Bharatpur Beach', 'Laxmanpur Beach']
      },
      {
        day: 'Day 6',
        title: 'Baratang Day Trip',
        description: 'Early morning trip to Baratang to see Limestone Caves.',
        activities: [
          "Early morning departure (3:30 AM)",
          "Jarawa Reserve drive",
          "Limestone Caves boat ride",
          "Return to Port Blair"
        ],
        meals: ['Breakfast'],
        sightseeing: ['Limestone Caves']
      },
      {
        day: 'Day 7',
        title: 'Departure',
        description: 'Transfer to airport for your onward journey.',
        activities: ['Airport Drop'],
        meals: ['Breakfast'],
        sightseeing: []
      }
    ],
    8: [
      {
        day: 'Day 1',
        title: 'Arrival & City Tour',
        description: 'Arrival at Port Blair. Visit Anthropological Museum, Fisheries Museum, and Cellular Jail.',
        activities: [
          "Airport arrival and welcome (typical 12:00 PM - 2:00 PM)",
          "Transfer to hotel with tour briefing",
          "Check-in and lunch break (12:30 PM - 2:00 PM)",
          "Visit Cellular Jail National Memorial (3:30 PM)",
          "Explore Anthropological Museum (4:30 PM)",
          "  • Tribal history exhibits",
          "  • Cultural artifacts",
          "Light & Sound Show at Cellular Jail (6:00 PM - 7:00 PM)",
          "Dinner at local restaurant (optional)",
          "Return to hotel for rest"
        ],
        meals: ['Breakfast'],
        sightseeing: ['Cellular Jail', 'Anthropological Museum', 'Fisheries Museum']
      },
      {
        day: 'Day 2',
        title: 'Ross & North Bay Islands',
        description: 'Full day excursion to Ross Island and North Bay Coral Island.',
        activities: [
          "Breakfast at hotel (8:00 AM)",
          "Transfer to Rajiv Gandhi Water Sports Complex (9:00 AM)",
          "Boat ride to Ross Island (9:30 AM)",
          "  • Explore British administrative ruins",
          "  • Spot diverse fauna (deer, peacocks)",
          "Boat transfer to North Bay Island (12:00 PM)",
          "Lunch break at North Bay (1:00 PM)",
          "Included Glass Bottom Boat ride (2:00 PM)",
          "Optional Water Sports (Scuba, Sea Walk) (2:30 PM)",
          "Return boat to Port Blair (4:00 PM)",
          "Evening at leisure"
        ],
        meals: ['Breakfast'],
        sightseeing: ['Ross Island', 'North Bay']
      },
      {
        day: 'Day 3',
        title: 'Port Blair to Havelock',
        description: 'Cruise to Havelock. Afternoon visit to Radhanagar Beach.',
        activities: [
          "Private ferry transfer to Havelock Island (8:00 AM)",
          "  • 90-minute scenic cruise",
          "Arrival and transfer to resort (10:00 AM)",
          "Check-in and refresh",
          "Lunch at resort (1:00 PM)",
          "Visit Radhanagar Beach (3:30 PM)",
          "  • Ranked among Asia's best beaches",
          "  • Swimming and sunset viewing",
          "Return to resort (6:30 PM)"
        ],
        meals: ['Breakfast'],
        sightseeing: ['Radhanagar Beach']
      },
      {
        day: 'Day 4',
        title: 'Elephant Beach Excursion',
        description: 'Boat ride to Elephant Beach for water sports. Evening at leisure.',
        activities: [
          "Speed boat ride to Elephant Beach (9:00 AM)",
          "  • 20-minute coastal ride",
          "Complimentary Snorkeling session (10:00 AM)",
          "  • Guided session with gear",
          "Optional water sports available:",
          "  • Sea Walk, Jet Ski, Banana Ride",
          "Return to Havelock Jetty (1:00 PM)",
          "Lunch at local restaurant (1:30 PM)",
          "Evening at leisure / Resort pool time"
        ],
        meals: ['Breakfast'],
        sightseeing: ['Elephant Beach']
      },
      {
        day: 'Day 5',
        title: 'Havelock to Neil Island',
        description: 'Transfer to Neil Island. Visit Bharatpur, Laxmanpur, and Natural Bridge.',
        activities: [
          "Check-out and transfer to Jetty (9:00 AM)",
          "Cruise to Neil Island (10:00 AM)",
          "Disembark at Neil and hotel transfer (11:30 AM)",
          "Visit Bharatpur Beach (2:00 PM)",
          "  • Ideal for swimming and glass bottom boats",
          "Visit Natural Bridge (4:00 PM)",
          "  • Walk on dead coral reef (low tide required)",
          "Sunset at Laxmanpur Beach (5:00 PM)",
          "Return to hotel"
        ],
        meals: ['Breakfast'],
        sightseeing: ['Bharatpur Beach', 'Laxmanpur Beach', 'Natural Bridge']
      },
      {
        day: 'Day 6',
        title: 'Neil to Port Blair',
        description: 'Return to Port Blair. Evening shopping at Sagarika Emporium.',
        activities: [
          "Breakfast and morning at leisure (9:00 AM)",
          "Check-out and transfer to Jetty (10:30 AM)",
          "Return cruise to Port Blair (11:30 AM)",
          "Hotel check-in at Port Blair (1:30 PM)",
          "Evening shopping at Sagarika Emporium (5:00 PM)",
          "  • Government emporium for handicrafts",
          "  • Pearls, shell crafts, wood carvings",
          "Dinner and overnight stay"
        ],
        meals: ['Breakfast'],
        sightseeing: ['Sagarika Emporium']
      },
      {
        day: 'Day 7',
        title: 'Baratang Day Trip',
        description: 'Early morning trip to Baratang to see Limestone Caves.',
        activities: [
          "Departure for Baratang (3:30 AM)",
          "  • Convoy passes through Jarawa Reserve",
          "Arrival at Baratang Jetty (7:00 AM)",
          "Speed boat through mangroves to Limestone Caves (8:00 AM)",
          "  • Walk through forest trail to reach caves",
          "Return to Jetty and refreshment (11:00 AM)",
          "Optional trip to Mud Volcano (if open)",
          "Return journey to Port Blair (1:00 PM)",
          "Arrival at Port Blair hotel (5:00 PM)"
        ],
        meals: ['Breakfast'],
        sightseeing: ['Limestone Caves']
      },
      {
        day: 'Day 8',
        title: 'Departure',
        description: 'Transfer to airport for your onward journey.',
        activities: [
          "Breakfast at hotel (8:00 AM)",
          "Check-out formalities (9:00 AM)",
          "Transfer to Veer Savarkar International Airport",
          "Departure with sweet memories"
        ],
        meals: ['Breakfast'],
        sightseeing: []
      }
    ],
    9: [
      {
        day: 'Day 1',
        title: 'Arrival & City Tour',
        description: 'Arrival at Port Blair. Visit Anthropological Museum, Fisheries Museum, and Cellular Jail.',
        activities: [
          "Airport arrival and welcome",
          "Cellular Jail & Museums",
          "Light & Sound Show"
        ],
        meals: ['Breakfast'],
        sightseeing: ['Cellular Jail', 'Anthropological Museum', 'Fisheries Museum']
      },
      {
        day: 'Day 2',
        title: 'Ross & North Bay Islands',
        description: 'Full day excursion to Ross Island and North Bay Coral Island.',
        activities: [
          "Boat trip to Ross Island",
          "Transfer to North Bay",
          "Glass Bottom Boat included"
        ],
        meals: ['Breakfast'],
        sightseeing: ['Ross Island', 'North Bay']
      },
      {
        day: 'Day 3',
        title: 'Port Blair to Havelock',
        description: 'Cruise to Havelock. Afternoon visit to Radhanagar Beach.',
        activities: [
          "Cruise to Havelock",
          "Radhanagar Beach sunset"
        ],
        meals: ['Breakfast'],
        sightseeing: ['Radhanagar Beach']
      },
      {
        day: 'Day 4',
        title: 'Elephant Beach Excursion',
        description: 'Boat ride to Elephant Beach for water sports. Evening at leisure.',
        activities: [
          "Boat ride to Elephant Beach",
          "Snorkeling & Water Sports"
        ],
        meals: ['Breakfast'],
        sightseeing: ['Elephant Beach']
      },
      {
        day: 'Day 5',
        title: 'Havelock Leisure',
        description: 'Day at leisure to explore Havelock or relax at the resort.',
        activities: [
          "Full day at leisure",
          "Optional Scooter rental",
          "Explore cafes (Something Different, Full Moon Cafe)"
        ],
        meals: ['Breakfast'],
        sightseeing: ['Havelock Island']
      },
      {
        day: 'Day 6',
        title: 'Havelock to Neil Island',
        description: 'Transfer to Neil Island. Visit Bharatpur, Laxmanpur, and Natural Bridge.',
        activities: [
          "Ferry to Neil Island",
          "Bharatpur & Laxmanpur Beaches",
          "Natural Bridge"
        ],
        meals: ['Breakfast'],
        sightseeing: ['Bharatpur Beach', 'Laxmanpur Beach', 'Natural Bridge']
      },
      {
        day: 'Day 7',
        title: 'Neil to Port Blair',
        description: 'Return to Port Blair. Evening shopping at Sagarika Emporium.',
        activities: [
          "Return ferry to Port Blair",
          "Evening shopping"
        ],
        meals: ['Breakfast'],
        sightseeing: ['Sagarika Emporium']
      },
      {
        day: 'Day 8',
        title: 'Baratang Day Trip',
        description: 'Early morning trip to Baratang to see Limestone Caves.',
        activities: [
          "Baratang trip via Jarawa Reserve",
          "Limestone Caves"
        ],
        meals: ['Breakfast'],
        sightseeing: ['Limestone Caves']
      },
      {
        day: 'Day 9',
        title: 'Departure',
        description: 'Transfer to airport for your onward journey.',
        activities: ['Airport Drop'],
        meals: ['Breakfast'],
        sightseeing: []
      }
    ]
  },
  highlights: [
    {
      title: 'All-in-One',
      description: 'Covers all major tourist attractions in one trip.',
      image: 'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg'
    },
    {
      title: 'Baratang Caves',
      description: 'Unique natural limestone formations.',
      image: 'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg'
    }
  ],
  terms: commonTerms,
  paymentPolicy: commonPaymentPolicy,
  tips: commonTips,
  pricingOptions: [
    { days: 7, pricePerPerson: 54999, title: '7 Days Grand Express' },
    { days: 8, pricePerPerson: 61999, title: '8 Days Grand Tour' },
    { days: 9, pricePerPerson: 69999, title: '9 Days Grand Leisure' }
  ],
  hotels: [],
  supplements: [],
  pickupLocations: ['Port Blair Airport'],
  cancellationPolicy: commonCancellationPolicy
};

