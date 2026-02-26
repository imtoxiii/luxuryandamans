import { BlogPost } from '../../types/blog';
import { defaultAuthor } from './author';

export const post: BlogPost = {
  id: "andaman-ferry-guide-2026",
  slug: "andaman-ferry-guide-2026",
  title: "Andaman Ferry Guide 2026: Makruzz vs Nautika vs Govt Ferries",
  excerpt: "Confused about ferry bookings? We compare the top private ferries and government ships to help you choose the best ride in 2026.",
  image: "https://images.pexels.com/photos/172920/pexels-photo-172920.jpeg",
  category: "Travel Guide",
  author: defaultAuthor,
  date: "2026-01-25",
  readTime: "9 min read",
  tags: ["Ferry", "Transport", "Guide", "2026"],
  relatedPosts: ["first-timers-guide-andaman-2026", "andaman-family-itinerary-2026"],
  content: `
# Navigating the Seas: The 2026 Ferry Guide

In Andaman, the ocean is your highway. Ferries are the only way to hop between Port Blair, Havelock, and Neil. Here is the updated comparison for 2026.

![Andaman Ferry](https://images.pexels.com/photos/5878513/pexels-photo-5878513.jpeg?auto=compress&cs=tinysrgb&w=1200)

## Private Ferries (The Tourist Choice)
Fast, comfortable, and air-conditioned.

### 1. Makruzz
- **Vibe:** The pioneer. Reliable and premium.
- **Classes:** Premium, Deluxe, Royal.
- **Best For:** Punctuality and service.

### 2. Nautika (formerly Sealink)
- **Vibe:** Newer fleet, very stable in rough seas.
- **Classes:** Luxury, Royal.
- **Best For:** Those who get sea-sick (it's very stable).

### 3. Green Ocean
- **Vibe:** Open deck!
- **Best For:** Photographers. It's the only private ferry where you can walk on the deck during the ride.

## Government Ferries (The Local Choice)
- **Cost:** Very cheap (₹400 - ₹600).
- **Booking:** Offline only (mostly). Hard to get tickets as a tourist.
- **Vibe:** Basic, open-air decks, slower.
- **Verdict:** Take it only if you are on a strict budget or want a raw experience.

## 2026 Ferry Schedule (Typical)

| Route | Departure (Approx) | Duration |
| :--- | :--- | :--- |
| **Port Blair -> Havelock** | 06:00 AM, 08:00 AM, 11:30 AM, 02:00 PM | 90 mins |
| **Havelock -> Neil** | 10:00 AM, 02:00 PM | 60 mins |
| **Neil -> Port Blair** | 11:30 AM, 03:30 PM | 90 mins |

## Booking Tips
1.  **Book Early:** Tickets sell out weeks in advance for Dec-Jan.
2.  **Window Seats:** Cost extra on some ferries but worth it.
3.  **Check-in:** Arrive 1 hour before departure. Security check is like an airport.

**Pro Tip:** If you are landing in Port Blair after 12:00 PM, you CANNOT catch a ferry to Havelock the same day. Plan to stay in Port Blair.
  `,
  faq: [
    {
      question: "Can I book govt ferry online?",
      answer: "There is a portal (stars.andaman.gov.in), but it is often glitchy. It's safer to book private ferries."
    },
    {
      question: "Is there luggage limit?",
      answer: "Yes, usually 25kg per person. Extra luggage is charged."
    }
  ]
};

export default post;
