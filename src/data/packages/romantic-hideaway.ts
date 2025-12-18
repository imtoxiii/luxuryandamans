import { Package } from '../packages';
import { commonPaymentPolicy, commonTips, commonCancellationPolicy, commonTerms } from '../commonPolicies';

export const romanticHideaway: Package = {
    slug: "romantic-island-hideaway",
  id: "romantic-hideaway",
    title: 'Romantic Island Hideaway',
    description: 'A 6-day intimate escape designed for couples, featuring candlelight dinners and private beach moments.',
    longDescription: 'Celebrate your love in the lap of nature with our Romantic Island Hideaway package. Enjoy private beach walks, romantic candlelight dinners, and couple spa sessions. Stay in luxury cottages and experience the magic of the Andamans with your significant other.',
    price: 65000,
    duration: '6 days',
    groupSize: 'Couple',
    image: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg',
    features: ['Candlelight Dinner', 'Couple Spa', 'Private Beach Access', 'Flower Decoration'],
    includes: [
        'Airport transfers in luxury sedan',
        'Accommodation in private pool villas/cottages',
        'Daily breakfast',
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
            activities: [
                "VIP Airport pickup with flower bouquet (Typical 12:00 PM)",
                "Transfer to luxury hotel by private car",
                "Welcome drink on arrival (12:30 PM)",
                "Lunch and rest at hotel",
                "Visit Chidiya Tapu for sunset (4:30 PM)",
                "  • Known as the 'Bird Island'",
                "  • Romantic sunset view point",
                "Return to hotel for dinner"
            ],
            meals: ['Breakfast'],
            sightseeing: ['Chidiya Tapu']
        },
        {
            day: 'Day 2',
            title: 'Havelock - Beachside Bliss',
            description: 'Private ferry to Havelock. Check into your beachside resort. Evening leisure at the beach.',
            activities: [
                "Private luxury ferry to Havelock (8:00 AM)",
                "Transfer to beachside resort (10:00 AM)",
                "Check-in to decorated room",
                "  • Flower petal decoration on bed",
                "  • Welcome cake and chocolates",
                "Lunch at resort (1:00 PM)",
                "Evening walk at Radhanagar Beach (4:30 PM)",
                "  • Sunset view",
                "  • Photography session (30 mins)",
                "Dinner at resort"
            ],
            meals: ['Breakfast'],
            sightseeing: ['Radhanagar Beach']
        },
        {
            day: 'Day 3',
            title: 'Elephant Beach & Candlelight Dinner',
            description: 'Morning visit to Elephant Beach. Evening reserved for a romantic candlelight dinner by the sea.',
            activities: [
                "Private boat to Elephant Beach (9:00 AM)",
                "Couple Snorkeling session (10:00 AM)",
                "  • Guided experience",
                "  • Underwater photos included",
                "Return to resort for lunch (1:00 PM)",
                "Leisure time / Spa session (Optional)",
                "Special Candlelight Dinner on Beach (7:30 PM)",
                "  • 4-course meal",
                "  • Decorated table setup"
            ],
            meals: ['Breakfast'],
            sightseeing: ['Elephant Beach']
        },
        {
            day: 'Day 4',
            title: 'Neil Island - Tranquility',
            description: 'Cruise to Neil Island. Visit the serene Laxmanpur Beach for a breathtaking sunset.',
            activities: [
                "Cruise transfer to Neil Island (10:00 AM)",
                "Check-in to resort (11:30 AM)",
                "Visit Laxmanpur Beach for sunset (4:30 PM)",
                "  • Triangular sunset view",
                "  • Peaceful atmosphere",
                "Return to resort for dinner"
            ],
            meals: ['Breakfast'],
            sightseeing: ['Laxmanpur Beach', 'Sitapur Beach']
        },
        {
            day: 'Day 5',
            title: 'Return to Port Blair & Shopping',
            description: 'Return to Port Blair. Evening free for shopping and collecting souvenirs.',
            activities: [
                "Morning at leisure on Neil Island",
                "Visit Natural Bridge (if tide permits)",
                "Ferry return to Port Blair (11:00 AM)",
                "Check-in to hotel at Port Blair (1:00 PM)",
                "Evening shopping at Sagarika Emporium (5:00 PM)",
                "Farewell dinner near the bay (Optional)"
            ],
            meals: ['Breakfast'],
            sightseeing: ['Sagarika Emporium']
        },
        {
            day: 'Day 6',
            title: 'Departure',
            description: 'Transfer to airport with a bag full of romantic memories.',
            activities: [
                "Breakfast in bed (Optional)",
                "Check-out formalities",
                "Transfer to airport (2 hours before flight)",
                "Departure with romantic memories"
            ],
            meals: ['Breakfast'],
            sightseeing: []
        }
    ],
    itineraries: {
        5: [
            {
                day: 'Day 1',
                title: 'Arrival & Romantic Sunset',
                description: 'Welcome to Port Blair. Transfer to your luxury hotel. Enjoy a sunset view at Chidiya Tapu.',
                activities: [
                    "VIP Airport pickup with flower bouquet (Typical 12:00 PM)",
                    "Transfer to luxury hotel by private car",
                    "Welcome drink on arrival (12:30 PM)",
                    "Lunch and rest at hotel",
                    "Visit Chidiya Tapu for sunset (4:30 PM)",
                    "  • Known as the 'Bird Island'",
                    "  • Romantic sunset view point",
                    "Return to hotel for dinner"
                ],
                meals: ['Breakfast'],
                sightseeing: ['Chidiya Tapu']
            },
            {
                day: 'Day 2',
                title: 'Havelock - Beachside Bliss',
                description: 'Private ferry to Havelock. Check into your beachside resort. Evening leisure at the beach.',
                activities: [
                    "Private luxury ferry to Havelock (8:00 AM)",
                    "Transfer to beachside resort (10:00 AM)",
                    "Check-in to decorated room",
                    "  • Flower petal decoration on bed",
                    "  • Welcome cake and chocolates",
                    "Lunch at resort (1:00 PM)",
                    "Evening walk at Radhanagar Beach (4:30 PM)",
                    "  • Sunset view",
                    "  • Photography session (30 mins)",
                    "Dinner at resort"
                ],
                meals: ['Breakfast'],
                sightseeing: ['Radhanagar Beach']
            },
            {
                day: 'Day 3',
                title: 'Elephant Beach & Candlelight Dinner',
                description: 'Morning visit to Elephant Beach. Evening reserved for a romantic candlelight dinner by the sea.',
                activities: [
                    "Private boat to Elephant Beach (9:00 AM)",
                    "Couple Snorkeling session (10:00 AM)",
                    "  • Guided experience",
                    "  • Underwater photos included",
                    "Return to resort for lunch (1:00 PM)",
                    "Leisure time / Spa session (Optional)",
                    "Special Candlelight Dinner on Beach (7:30 PM)",
                    "  • 4-course meal",
                    "  • Decorated table setup"
                ],
                meals: ['Breakfast'],
                sightseeing: ['Elephant Beach']
            },
            {
                day: 'Day 4',
                title: 'Return to Port Blair & Shopping',
                description: 'Return to Port Blair. Evening free for shopping.',
                activities: [
                    "Ferry return to Port Blair (10:00 AM)",
                    "Check-in to hotel at Port Blair (12:00 PM)",
                    "Lunch break",
                    "Evening shopping at Sagarika Emporium (5:00 PM)",
                    "Romantic dinner at bay side restaurant (7:00 PM)"
                ],
                meals: ['Breakfast'],
                sightseeing: ['Sagarika Emporium']
            },
            {
                day: 'Day 5',
                title: 'Departure',
                description: 'Transfer to airport.',
                activities: [
                    "Breakfast in bed (Optional)",
                    "Check-out formalities",
                    "Transfer to airport (2 hours before flight)",
                    "Departure with romantic memories"
                ],
                meals: ['Breakfast'],
                sightseeing: []
            }
        ],
        6: [
            {
                day: 'Day 1',
                title: 'Arrival & Romantic Sunset',
                description: 'Welcome to Port Blair. Transfer to your luxury hotel. Enjoy a sunset view at Chidiya Tapu.',
                activities: [
                    "VIP Airport pickup with flower bouquet (Typical 12:00 PM)",
                    "Transfer to luxury hotel by private car",
                    "Welcome drink on arrival (12:30 PM)",
                    "Lunch and rest at hotel",
                    "Visit Chidiya Tapu for sunset (4:30 PM)",
                    "  • Known as the 'Bird Island'",
                    "  • Romantic sunset view point",
                    "Return to hotel for dinner"
                ],
                meals: ['Breakfast'],
                sightseeing: ['Chidiya Tapu']
            },
            {
                day: 'Day 2',
                title: 'Havelock - Beachside Bliss',
                description: 'Private ferry to Havelock. Check into your beachside resort. Evening leisure at the beach.',
                activities: [
                    "Private luxury ferry to Havelock (8:00 AM)",
                    "Transfer to beachside resort (10:00 AM)",
                    "Check-in to decorated room",
                    "  • Flower petal decoration on bed",
                    "  • Welcome cake and chocolates",
                    "Lunch at resort (1:00 PM)",
                    "Evening walk at Radhanagar Beach (4:30 PM)",
                    "  • Sunset view",
                    "  • Photography session (30 mins)",
                    "Dinner at resort"
                ],
                meals: ['Breakfast'],
                sightseeing: ['Radhanagar Beach']
            },
            {
                day: 'Day 3',
                title: 'Elephant Beach & Candlelight Dinner',
                description: 'Morning visit to Elephant Beach. Evening reserved for a romantic candlelight dinner by the sea.',
                activities: [
                    "Private boat to Elephant Beach (9:00 AM)",
                    "Couple Snorkeling session (10:00 AM)",
                    "  • Guided experience",
                    "  • Underwater photos included",
                    "Return to resort for lunch (1:00 PM)",
                    "Leisure time / Spa session (Optional)",
                    "Special Candlelight Dinner on Beach (7:30 PM)",
                    "  • 4-course meal",
                    "  • Decorated table setup"
                ],
                meals: ['Breakfast'],
                sightseeing: ['Elephant Beach']
            },
            {
                day: 'Day 4',
                title: 'Neil Island - Tranquility',
                description: 'Cruise to Neil Island. Visit the serene Laxmanpur Beach for a breathtaking sunset.',
                activities: [
                    "Cruise transfer to Neil Island (10:00 AM)",
                    "Check-in to resort (11:30 AM)",
                    "Visit Laxmanpur Beach for sunset (4:30 PM)",
                    "  • Triangular sunset view",
                    "  • Peaceful atmosphere",
                    "Return to resort for dinner"
                ],
                meals: ['Breakfast'],
                sightseeing: ['Laxmanpur Beach', 'Sitapur Beach']
            },
            {
                day: 'Day 5',
                title: 'Return to Port Blair & Shopping',
                description: 'Return to Port Blair. Evening free for shopping and collecting souvenirs.',
                activities: [
                    "Morning at leisure on Neil Island",
                    "Visit Natural Bridge (if tide permits)",
                    "Ferry return to Port Blair (11:00 AM)",
                    "Check-in to hotel at Port Blair (1:00 PM)",
                    "Evening shopping at Sagarika Emporium (5:00 PM)",
                    "Farewell dinner near the bay (Optional)"
                ],
                meals: ['Breakfast'],
                sightseeing: ['Sagarika Emporium']
            },
            {
                day: 'Day 6',
                title: 'Departure',
                description: 'Transfer to airport with a bag full of romantic memories.',
                activities: [
                    "Breakfast in bed (Optional)",
                    "Check-out formalities",
                    "Transfer to airport (2 hours before flight)",
                    "Departure with romantic memories"
                ],
                meals: ['Breakfast'],
                sightseeing: []
            }
        ],
        7: [
            {
                day: 'Day 1',
                title: 'Arrival & Romantic Sunset',
                description: 'Welcome to Port Blair. Transfer to your luxury hotel. Enjoy a sunset view at Chidiya Tapu.',
                activities: [
                    "VIP Airport pickup with flower bouquet (Typical 12:00 PM)",
                    "Transfer to luxury hotel by private car",
                    "Welcome drink on arrival (12:30 PM)",
                    "Lunch and rest at hotel",
                    "Visit Chidiya Tapu for sunset (4:30 PM)",
                    "  • Known as the 'Bird Island'",
                    "  • Romantic sunset view point",
                    "Return to hotel for dinner"
                ],
                meals: ['Breakfast'],
                sightseeing: ['Chidiya Tapu']
            },
            {
                day: 'Day 2',
                title: 'Havelock - Beachside Bliss',
                description: 'Private ferry to Havelock. Check into your beachside resort. Evening leisure at the beach.',
                activities: [
                    "Private luxury ferry to Havelock (8:00 AM)",
                    "Transfer to beachside resort (10:00 AM)",
                    "Check-in to decorated room",
                    "  • Flower petal decoration on bed",
                    "  • Welcome cake and chocolates",
                    "Lunch at resort (1:00 PM)",
                    "Evening walk at Radhanagar Beach (4:30 PM)",
                    "  • Sunset view",
                    "  • Photography session (30 mins)",
                    "Dinner at resort"
                ],
                meals: ['Breakfast'],
                sightseeing: ['Radhanagar Beach']
            },
            {
                day: 'Day 3',
                title: 'Elephant Beach & Candlelight Dinner',
                description: 'Morning visit to Elephant Beach. Evening reserved for a romantic candlelight dinner by the sea.',
                activities: [
                    "Private boat to Elephant Beach (9:00 AM)",
                    "Couple Snorkeling session (10:00 AM)",
                    "  • Guided experience",
                    "  • Underwater photos included",
                    "Return to resort for lunch (1:00 PM)",
                    "Leisure time / Spa session (Optional)",
                    "Special Candlelight Dinner on Beach (7:30 PM)",
                    "  • 4-course meal",
                    "  • Decorated table setup"
                ],
                meals: ['Breakfast'],
                sightseeing: ['Elephant Beach']
            },
            {
                day: 'Day 4',
                title: 'Neil Island - Tranquility',
                description: 'Cruise to Neil Island. Visit the serene Laxmanpur Beach for a breathtaking sunset.',
                activities: [
                    "Cruise transfer to Neil Island (10:00 AM)",
                    "Check-in to resort (11:30 AM)",
                    "Visit Laxmanpur Beach for sunset (4:30 PM)",
                    "  • Triangular sunset view",
                    "  • Peaceful atmosphere",
                    "Return to resort for dinner"
                ],
                meals: ['Breakfast'],
                sightseeing: ['Laxmanpur Beach', 'Sitapur Beach']
            },
            {
                day: 'Day 5',
                title: 'Neil Island Exploration',
                description: 'Visit Natural Bridge and enjoy leisure time.',
                activities: [
                    "Morning visit to Natural Bridge (based on tide)",
                    "Couple Spa Session (90 mins) at resort",
                    "  • Thai massage or aromatherapy",
                    "  • Private spa room for couples",
                    "Leisure evening to explore local cafes"
                ],
                meals: ['Breakfast'],
                sightseeing: ['Natural Bridge']
            },
            {
                day: 'Day 6',
                title: 'Return to Port Blair & Shopping',
                description: 'Return to Port Blair. Evening free for shopping and collecting souvenirs.',
                activities: [
                    "Morning ferry return to Port Blair (11:00 AM)",
                    "Hotel check-in at Port Blair (1:00 PM)",
                    "Evening shopping at Sagarika Emporium",
                    "Farewell dinner"
                ],
                meals: ['Breakfast'],
                sightseeing: ['Sagarika Emporium']
            },
            {
                day: 'Day 7',
                title: 'Departure',
                description: 'Transfer to airport with a bag full of romantic memories.',
                activities: [
                    "Breakfast in bed (Optional)",
                    "Check-out formalities",
                    "Transfer to airport (2 hours before flight)",
                    "Departure with romantic memories"
                ],
                meals: ['Breakfast'],
                sightseeing: []
            }
        ]
    },
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
        { days: 5, pricePerPerson: 42999, title: '5 Days Romantic Escape' },
        { days: 6, pricePerPerson: 49999, title: '6 Days Romantic Hideaway' },
        { days: 7, pricePerPerson: 58999, title: '7 Days Royal  Honeymoon' }
    ],
    hotels: [],
    supplements: [],
    pickupLocations: ['Port Blair Airport'],
    cancellationPolicy: commonCancellationPolicy
};

