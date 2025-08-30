import { BlogPost } from '../../types/blog';

const post: BlogPost = {
  id: 'andaman-food-guide',
  title: 'Andaman Food Guide: Best Seafood, Vegetarian Options, and Cafés',
  slug: 'andaman-food-guide',
  excerpt:
    'From beachside seafood grills to cozy cafés and solid vegetarian picks, here’s where to eat in Port Blair, Havelock, and Neil.',
  image:
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1935&auto=format&fit=crop',
  author: {
    name: 'Luxury Andamans Team',
    avatar: 'https://i.pravatar.cc/150?img=29',
    bio: 'Local experts crafting unforgettable island experiences across the Andaman archipelago.'
  },
  date: new Date().toISOString(),
  readTime: '6 min read',
  category: 'Food & Culture',
  tags: ['food', 'seafood', 'vegetarian', 'restaurants', 'cafés'],
  relatedPosts: ['andaman-best-time', 'andaman-itinerary-7-days', 'andaman-honeymoon-guide'],
  content: `
## Where to eat in Port Blair
- Seafood grills near Marina Park
- Classic thalis and fresh juices in Aberdeen Bazaar
- Sunset cafés with harbour views

## Havelock (Swaraj Dweep) favs
- Beach shacks near Radhanagar for grilled fish and tandoor platters
- Cute cafés at Govind Nagar for coffee and desserts
- Vegetarian-friendly menus with island produce

## Neil (Shaheed Dweep) picks
- Lagoon-side eateries near Bharatpur
- Coconut water and fresh fruit stalls post-beach

## What to try
- Grilled reef fish, prawns, lobster (seasonal)
- Coconut-based curries and island-style biryanis
- Fresh bakes and coffee at artisanal cafés

## Budget tips
- Lunch combos at local joints
- Share large seafood platters
- Ask for catch-of-the-day pricing

## Plan your trip
Love good food on vacation? Pair this guide with a custom Andaman package tailored to your tastes.

- Get ideas in our [7-day Andaman itinerary](/blog/7-day-andaman-itinerary)
- See the [best time to visit](/blog/best-time-to-visit-andaman)
- Ready to plan? Explore [packages](/packages) or [contact us](/contact)
`
};

export default post;


