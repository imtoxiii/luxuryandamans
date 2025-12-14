import { BlogPost } from '../../types/blog';
import { defaultAuthor } from './author';

export const post: BlogPost = {
  id: "new-ferry-services-2025",
  slug: "new-ferry-services-2025",
  title: "New Luxury Ferry Services Launched for 2025 Season",
  excerpt: "Experience faster and more comfortable island hopping with the newly launched luxury ferry services connecting Port Blair, Havelock, and Neil.",
  image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  category: "Travel News",
  author: defaultAuthor,
  date: "2024-12-10",
  readTime: "4 min read",
  tags: ["Travel News", "Ferry", "Transport", "Luxury Travel"],
  relatedPosts: ["andaman-ferry-guide-2026", "how-to-reach-andaman-flight-vs-ship"],
  content: `
# New Luxury Ferry Services for 2025

Great news for travelers visiting the Andaman Islands in 2025! The island administration and private operators have announced the launch of new luxury ferry services that promise to transform the island-hopping experience.

![Luxury Ferry](https://images.unsplash.com/photo-1566373722234-a498063f251f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80)

## Nautika's New Catamaran: "Nautika Lite"
Nautika, one of the premier private ferry operators, has introduced "Nautika Lite," a high-speed catamaran designed for speed and comfort.
- **Route:** Port Blair <-> Havelock <-> Neil Island
- **Capacity:** 285 passengers
- **Features:** Premium leather seating, onboard café, and panoramic windows.

## Makruzz Adds "Makruzz Pearl"
Makruzz continues to expand its fleet with the "Makruzz Pearl."
- **Focus:** Ultra-luxury. Think business-class seating for everyone.
- **Speed:** Cuts travel time from Port Blair to Havelock by 15 minutes.

## Why This Matters?
Previously, peak season (December - January) saw tickets selling out weeks in advance. With these new vessels, the daily passenger capacity has increased by **40%**, ensuring more availability and flexibility for tourists.

## Booking Tips
- **Book in Advance:** Despite new ferries, we recommend booking at least 3 weeks prior during peak season.
- **Seasickness:** These larger catamarans are much more stable, significantly reducing seasickness compared to older government ferries.

Planning your trip? Check out our complete [Ferry Guide 2026](/blog/andaman-ferry-guide-2026) for schedules and booking tips.
  `,
  faq: [
    {
      question: "When do the new ferries start operating?",
      answer: "Both Nautika Lite and Makruzz Pearl are operational as of December 2024, ready for the 2025 season."
    },
    {
      question: "Are the ticket prices higher?",
      answer: "Prices are competitive with existing private ferries, starting around ₹1,400 for standard class."
    }
  ]
};

export default post;
