import { BlogPost } from '../../types/blog';

const post: BlogPost = {
  id: 'pune-to-andaman-trip-plan',
  title: 'Pune to Andaman Trip Plan: Flights, Itinerary, Budget & Tips',
  slug: 'pune-to-andaman-trip-plan',
  excerpt:
    'Pune to Andaman made easy: optimal routes via major hubs, a tried 7-day flow, and transparent budgeting.',
  image:
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1887&q=80',
  author: {
    name: 'Luxury Andamans Team',
    avatar: 'https://i.pravatar.cc/150?img=14',
    bio: 'Local experts crafting unforgettable island experiences across the Andaman archipelago.'
  },
  date: new Date().toISOString(),
  readTime: '7 min read',
  category: 'City Guides',
  tags: [
    'pune to andaman',
    'andaman from pune',
    'andaman packages from pune'
  ],
  relatedPosts: [
    'andaman-itinerary-7-days',
    'andaman-top-things-to-do',
    'andaman-budget-guide'
  ],
  content: `
## Overview: Pune → Port Blair
Fly via Mumbai/Chennai for the fastest routes. Total 6–8 hours typical.

### Fares
- 25–40 day window. One-way ₹8,000–₹13,500 in shoulder months.

---

## 6N/7D Flow
Port Blair (1N) → Havelock (3N) → Neil (2N). Check our [7-Day Itinerary](/blog/7-day-andaman-itinerary).

---

## Couple Budget
- Flights: ₹16,000–₹30,000
- Ferries: ₹6,000–₹10,000
- Hotels: ₹30,000–₹70,000
- Activities: ₹6,000–₹20,000
- Food/local: ₹8,000–₹18,000

---

## Tips
- Pick early arrivals to align with ferries.
- Pre-book Elephant Beach/Scuba. Carry cash backups.

---

## Plan Next
- [Top Things To Do](/blog/top-things-to-do-in-andaman) · [Packages](/packages) · [Contact](/contact)
`
};

export default post;


