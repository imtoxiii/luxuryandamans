import { BlogPost } from '../../types/blog';

const post: BlogPost = {
  id: 'andaman-budget-guide',
  title: 'Andaman on a Budget: Smart Tips, Costs, and Sample Plans',
  slug: 'andaman-budget-travel-guide',
  excerpt:
    'Yes, Andaman can be affordable. Learn how to plan cost-effective ferries, stays, and activities without missing the island magic.',
  image:
    'https://images.unsplash.com/photo-1520923155259-13049b7f0a5b?q=80&w=1935&auto=format&fit=crop',
  author: {
    name: 'Luxury Andamans Team',
    avatar: 'https://i.pravatar.cc/150?img=22',
    bio: 'Local experts crafting unforgettable island experiences across the Andaman archipelago.'
  },
  date: new Date().toISOString(),
  readTime: '10 min read',
  category: 'Budget',
  tags: ['budget', 'cheap andaman', 'cost breakdown', 'savings tips'],
  relatedPosts: ['andaman-best-time', 'andaman-itinerary-7-days'],
  content: `
## What costs how much?
- Ferries: Government vs. private—trade-offs on price and comfort
- Hotels: Seasonality matters; book early for peak months
- Activities: Bundle snorkeling/diving for better value

## Daily cost ranges (per person)
- Budget: ₹2,000–₹3,500
- Mid-range: ₹3,500–₹7,000
- Premium: ₹7,000+

## Money-saving hacks
- Travel in shoulder season
- Choose 2 islands max for short trips
- Pre-book high-demand ferries

## Keep planning on a budget
- Use our [7-day itinerary](/blog/7-day-andaman-itinerary) and pick cost-friendly stays
- Check [Best Time to Visit](/blog/best-time-to-visit-andaman) for shoulder-season savings
- Explore [Packages](/packages) or [Contact us](/contact) for budget customizations
`
};

export default post;


