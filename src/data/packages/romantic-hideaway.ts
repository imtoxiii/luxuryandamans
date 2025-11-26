
import { Package } from '../packages';
import { commonPaymentPolicy, commonTips, commonCancellationPolicy, commonTerms } from '../commonPolicies';

export const romanticHideaway: Package = {
    slug: 'romantic-island-hideaway',
    title: 'Romantic Island Hideaway',
    description: 'A 6-day intimate escape designed for couples, featuring candlelight dinners and private beach moments.',
    longDescription: 'Celebrate your love in the lap of nature with our Romantic Island Hideaway package. Enjoy private beach walks, romantic candlelight dinners, and couple spa sessions. Stay in luxury cottages and experience the magic of the Andamans with your significant other.',
    price: 65000,
    duration: '5 Nights / 6 Days',
    groupSize: 'Couple',
    image: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg',
    features: ['Candlelight Dinner', 'Couple Spa', 'Private Beach Access', 'Flower Decoration'],
    includes: [
        'Airport transfers in luxury sedan',
        'Accommodation in private pool villas/cottages',
        'Daily breakfast and dinner',
        'One romantic candlelight dinner on the beach',
        'Couple spa therapy session (60 mins)',
        'Private sunset cruise',
        'Flower bed decoration on arrival',
        'Professional photoshoot session'
    ],
    excludes: [
        'Airfare',
        'Lunch',
        'Personal expenses',
        'GST 5%'
    ],
    itinerary: [
        {
            day: 'Day 1',
            title: 'Arrival & Romantic Sunset',
            description: 'Welcome to Port Blair. Transfer to your luxury hotel. Enjoy a sunset view at Chidiya Tapu.',
            activities: ['Airport Pickup', 'Sunset View'],
            meals: ['Dinner'],
            sightseeing: ['Chidiya Tapu']
        },
        {
            day: 'Day 2',
            title: 'Havelock - Beachside Bliss',
            description: 'Private ferry to Havelock. Check into your beachside resort. Evening leisure at the beach.',
            activities: ['Luxury Ferry', 'Beach Walk'],
            meals: ['Breakfast', 'Dinner'],
            sightseeing: ['Radhanagar Beach']
        },
        {
            day: 'Day 3',
            title: 'Elephant Beach & Candlelight Dinner',
            description: 'Morning visit to Elephant Beach. Evening reserved for a romantic candlelight dinner by the sea.',
            activities: ['Snorkeling', 'Candlelight Dinner'],
            meals: ['Breakfast', 'Dinner'],
            sightseeing: ['Elephant Beach']
        },
        {
            day: 'Day 4',
            title: 'Neil Island - Tranquility',
            description: 'Cruise to Neil Island. Visit the serene Laxmanpur Beach for a breathtaking sunset.',
            activities: ['Ferry Transfer', 'Sunset Watch'],
            meals: ['Breakfast', 'Dinner'],
            sightseeing: ['Laxmanpur Beach', 'Sitapur Beach']
        },
        {
            day: 'Day 5',
            title: 'Return to Port Blair & Shopping',
            description: 'Return to Port Blair. Evening free for shopping and collecting souvenirs.',
            activities: ['Ferry Transfer', 'Shopping'],
            meals: ['Breakfast', 'Dinner'],
            sightseeing: ['Sagarika Emporium']
        },
        {
            day: 'Day 6',
            title: 'Departure',
            description: 'Transfer to airport with a bag full of romantic memories.',
            activities: ['Airport Drop'],
            meals: ['Breakfast'],
            sightseeing: []
        }
    ],
    highlights: [
        {
            title: 'Candlelight Dinner',
            description: 'A romantic dinner setup on the white sands under the stars.',
            image: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg'
        },
        {
            title: 'Private Sunset Cruise',
            description: 'Watch the sun go down from a private boat.',
            image: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg'
        }
    ],
    terms: commonTerms,
    paymentPolicy: commonPaymentPolicy,
    tips: commonTips,
    pricingOptions: [
        { days: 6, pricePerPerson: 65000, title: 'Luxury Hideaway' },
        { days: 6, pricePerPerson: 85000, title: 'Royal Honeymoon' }
    ],
    hotels: [],
    supplements: [],
    pickupLocations: ['Port Blair Airport'],
    cancellationPolicy: commonCancellationPolicy
};

