import { BlogPost } from '../../types/blog';
import { defaultAuthor } from './author';

export const post: BlogPost = {
    id: "first-timers-guide-andaman-2026",
    slug: "first-timers-guide-andaman-2026",
    title: "First-Timer's Guide to Andaman (2026 Edition): Everything You Need to Know",
    excerpt: "Planning your first trip to Andaman in 2026? From permits to packing, here is the only guide you need to avoid rookie mistakes.",
    image: "https://images.unsplash.com/photo-1540206395-688085723adb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    category: "Travel Guide",
    author: defaultAuthor,
    date: "2026-01-05",
    readTime: "12 min read",
    tags: ["Beginner Guide", "2026", "Tips", "Planning"],
    relatedPosts: ["andaman-ferry-guide-2026", "sustainable-packing-list-2026", "is-andaman-safe-2026"],
    content: `
# The Ultimate First-Timer's Guide to Andaman (2026)

So, you've finally decided to visit the Andaman Islands. Good choice! But with 572 islands (only a few are open to tourists), planning can be overwhelming. Here is your 2026 cheat sheet.

![Andaman Arrival](https://images.unsplash.com/photo-1540206395-688085723adb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

## 1. The "Golden Triangle" of Andaman
If it's your first time, stick to these three islands:
1.  **Port Blair:** The entry point. History (Cellular Jail) + Convenience.
2.  **Havelock (Swaraj Dweep):** The star attraction. Radhanagar Beach + Scuba Diving.
3.  **Neil (Shaheed Dweep):** The chill sibling. Sunsets + Relaxation.

## 2. Permits & Paperwork (2026 Update)
- **Indian Citizens:** No permit required for the main islands. Just your Aadhaar card.
- **Foreign Nationals:** The RAP (Restricted Area Permit) is no longer required for 30 major islands! You just need a valid Indian Visa.

## 3. Getting Around
- **Inter-Island:** Ferries are the lifeline. Book **Makruzz** or **Nautika** online at least 1 month in advance. Govt ferries are cheaper but harder to book.
- **On-Island:** Rent a scooter (₹500/day). It's the best way to explore. Taxis are expensive (₹2000+ for short trips).

## 4. Cash vs. UPI
- **UPI:** Works in 90% of shops in Port Blair and Havelock now (thanks to better internet).
- **Cash:** Still KING on Neil Island and small dhabas. Carry at least ₹5,000 in cash.

## 5. What to Pack?
- **Reef-Safe Sunscreen:** Mandatory in some marine parks now.
- **Waterproof Bag:** For boat rides.
- **Slip-on Shoes:** You'll be taking them off constantly.

## 6. Common Rookie Mistakes
- **Staying only in Port Blair:** Don't do it. Spend max 1-2 nights there.
- **Booking ferries last minute:** You will get stuck.
- **Ignoring the tides:** Some beaches (like Lakmanpur) are only swimmable at high tide.

**Ready to book?** Check out our [Family Itinerary](/blog/andaman-family-itinerary-2026) for a ready-made plan!
  `,
    faq: [
        {
            question: "Do I need a passport?",
            answer: "Only if you are a foreign national. Indians just need an ID proof."
        },
        {
            question: "Is vegetarian food available?",
            answer: "Yes! Every island has pure veg restaurants. Try 'Annapurna' in Port Blair."
        }
    ]
};

export default post;
