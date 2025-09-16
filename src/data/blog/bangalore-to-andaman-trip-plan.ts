import { BlogPost } from '../../types/blog';

const post: BlogPost = {
  id: 'bangalore-to-andaman-trip-plan',
  title: 'Bangalore to Andaman Trip Plan: Flights, Itinerary, Budget & Tips',
  slug: 'bangalore-to-andaman-trip-plan',
  excerpt:
    'Step-by-step Bangalore to Andaman travel plan with flight choices, a perfect 7-day route, and budget you can trust.',
  image:
    'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1887&auto=format&fit=crop',
  author: {
    name: 'Luxury Andamans Team',
    avatar: 'https://i.pravatar.cc/150?img=9',
    bio: 'Local experts crafting unforgettable island experiences across the Andaman archipelago.'
  },
  date: new Date().toISOString(),
  readTime: '7 min read',
  category: 'City Guides',
  tags: [
    'bangalore to andaman',
    'andaman from bangalore',
    'andaman itinerary',
    'andaman packages from bangalore'
  ],
  relatedPosts: [
    'andaman-itinerary-7-days',
    'andaman-top-things-to-do',
    'andaman-budget-guide'
  ],
  content: `
## Overview: Bangalore → Port Blair
Usually 1-stop via Chennai. Short total time 4.5–6.5 hours makes it one of the quickest metro connections.

### Booking Insight
- Book 21–35 days ahead. Fares ₹6,500–₹12,000 one-way in shoulder months.

---

## 6N/7D Plan
Port Blair (1N) → Havelock (3N) → Neil (2N) → Port Blair (fly). See [7-Day Itinerary](/blog/7-day-andaman-itinerary).

---

## Couple Budget Range
- Flights: ₹14,000–₹26,000
- Ferries: ₹6,000–₹10,000
- Hotels: ₹28,000–₹65,000
- Activities: ₹6,000–₹20,000
- Food/local: ₹8,000–₹16,000

---

## Best Time
Nov–Apr best. Apr/Nov great for value from BLR.

---

## Tips
- Keep 3–4 hr flight–ferry buffer on return day.
- Pre-book scuba/Elephant Beach slots.

---

## Plan Next
- [Top Things To Do](/blog/top-things-to-do-in-andaman) · [Packages](/packages) · [Contact](/contact)
`
};

export default post;


