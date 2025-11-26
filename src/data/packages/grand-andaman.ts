import { Package } from '../packages';
import { commonPaymentPolicy, commonTips, commonCancellationPolicy, commonTerms } from '../commonPolicies';

export const grandAndaman: Package = {
  slug: 'grand-andaman-tour',
  title: 'Grand Andaman Tour',
  description: 'An 8-day comprehensive tour covering the best of Port Blair, Havelock, Neil, and Baratang.',
  longDescription: 'The Grand Andaman Tour is the ultimate way to experience the diversity of the islands. From the historical significance of Port Blair to the natural wonders of Baratang and the pristine beaches of Havelock and Neil, this 8-day itinerary covers it all. Perfect for families and groups who want to see everything.',
  price: 52000,
  duration: '7 Nights / 8 Days',
  groupSize: '4-12 People',
  image: 'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg',
  features: ['Comprehensive Tour', 'History & Nature', 'All Major Islands', 'Family Friendly'],
  includes: [
    'Airport transfers',
    'Accommodation in 3-star deluxe hotels',
    'Daily breakfast and dinner',
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
      activities: ['Museum Visits', 'Light & Sound Show'],
      meals: ['Dinner'],
      sightseeing: ['Cellular Jail', 'Anthropological Museum', 'Fisheries Museum']
    },
    {
      day: 'Day 2',
      title: 'Ross & North Bay Islands',
      description: 'Full day excursion to Ross Island and North Bay Coral Island.',
      activities: ['Boat Ride', 'Coral Viewing'],
      meals: ['Breakfast', 'Dinner'],
      sightseeing: ['Ross Island', 'North Bay']
    },
    {
      day: 'Day 3',
      title: 'Port Blair to Havelock',
      description: 'Cruise to Havelock. Afternoon visit to Radhanagar Beach.',
      activities: ['Cruise Transfer', 'Beach Visit'],
      meals: ['Breakfast', 'Dinner'],
      sightseeing: ['Radhanagar Beach']
    },
    {
      day: 'Day 4',
      title: 'Elephant Beach Excursion',
      description: 'Boat ride to Elephant Beach for water sports. Evening at leisure.',
      activities: ['Snorkeling', 'Sea Walk (Optional)'],
      meals: ['Breakfast', 'Dinner'],
      sightseeing: ['Elephant Beach']
    },
    {
      day: 'Day 5',
      title: 'Havelock to Neil Island',
      description: 'Transfer to Neil Island. Visit Bharatpur, Laxmanpur, and Natural Bridge.',
      activities: ['Ferry Transfer', 'Sightseeing'],
      meals: ['Breakfast', 'Dinner'],
      sightseeing: ['Bharatpur Beach', 'Laxmanpur Beach', 'Natural Bridge']
    },
    {
      day: 'Day 6',
      title: 'Neil to Port Blair',
      description: 'Return to Port Blair. Evening shopping at Sagarika Emporium.',
      activities: ['Ferry Transfer', 'Shopping'],
      meals: ['Breakfast', 'Dinner'],
      sightseeing: ['Sagarika Emporium']
    },
    {
      day: 'Day 7',
      title: 'Baratang Day Trip',
      description: 'Early morning trip to Baratang to see Limestone Caves.',
      activities: ['Jungle Journey', 'Cave Visit'],
      meals: ['Breakfast', 'Dinner'],
      sightseeing: ['Limestone Caves']
    },
    {
      day: 'Day 8',
      title: 'Departure',
      description: 'Transfer to airport for your onward journey.',
      activities: ['Airport Drop'],
      meals: ['Breakfast'],
      sightseeing: []
    }
  ],
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
    { days: 8, pricePerPerson: 52000, title: 'Standard Grand' },
    { days: 8, pricePerPerson: 62000, title: 'Deluxe Grand' }
  ],
  hotels: [],
  supplements: [],
  pickupLocations: ['Port Blair Airport'],
  cancellationPolicy: commonCancellationPolicy
};
