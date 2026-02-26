import { BlogPost } from '../../types/blog';
import { defaultAuthor } from './author';

const imagePath = '/img/blog/destination-wedding/';

const images = {
  main: {
    src: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'A beautiful beach wedding setup in Andaman with floral decorations and ocean view.',
    width: 1200,
    height: 800,
  },
  resort: {
    src: 'https://images.pexels.com/photos/2227827/pexels-photo-2227827.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Luxury resort wedding venue in Havelock Island.',
    width: 1200,
    height: 800,
  },
  couple: {
    src: 'https://images.pexels.com/photos/3352399/pexels-photo-3352399.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Romantic couple photoshoot on Radhanagar Beach during sunset.',
    width: 1200,
    height: 800,
  }
};

const post: BlogPost = {
  id: 'andaman-destination-wedding-guide-2026',
  title: 'Destination Wedding in Andaman 2026: Venues, Costs & Planning',
  slug: 'andaman-destination-wedding-guide-2026',
  excerpt:
    "Dreaming of a beach wedding? Here is your complete 2026 guide to planning a destination wedding in Andaman, from luxury venues in Havelock to budget breakdowns.",
  image: images.main.src,
  author: defaultAuthor,
  date: new Date().toISOString(),
  readTime: '15 min read',
  category: 'Wedding',
  tags: [
    'destination wedding andaman',
    'beach wedding india',
    'havelock wedding venues',
    'wedding cost andaman 2026',
    'luxury wedding andaman',
  ],
  relatedPosts: [
    'andaman-honeymoon-guide',
    'andaman-luxury-resorts-2026',
    'andaman-best-time'
  ],
  faq: [
    {
      question: 'How much does a destination wedding in Andaman cost?',
      answer:
        'For 2026, a 2-day wedding with 50-80 guests typically costs between ₹15 Lakhs to ₹35 Lakhs, depending on the venue (luxury vs. budget) and inclusions.'
    },
    {
      question: 'Is a legal marriage registration possible in Andaman for tourists?',
      answer:
        'It is complicated and time-consuming for non-residents. Most couples do the legal registration in their home city and perform the ceremonial wedding in Andaman.'
    },
    {
      question: 'What is the best time for a beach wedding?',
      answer:
        'October to April is ideal. The weather is dry, sunny, and pleasant. Avoid the monsoon season (May-September) as rain can disrupt outdoor ceremonies.'
    },
    {
      question: 'Can we get Indian vegetarian food easily?',
      answer:
        'Absolutely. All major resorts and wedding caterers offer extensive vegetarian and Jain menu options, along with fresh seafood specialties.'
    }
  ],
  content: `
## Why Choose Andaman for Your Big Day in 2026?

Imagine exchanging vows with the turquoise Andaman Sea as your backdrop, the sound of gentle waves as your music, and a golden sunset painting the sky. Andaman is fast becoming India's top luxury wedding destination, rivaling Goa and international spots like Bali.

In 2026, venues have upgraded their infrastructure, offering world-class hospitality mixed with raw, tropical beauty.

---

## Top Wedding Destinations in Andaman

### 1. Havelock Island (Swaraj Dweep)
The crown jewel of Andaman weddings.
- **Vibe:** Luxurious, private, and scenic.
- **Venues:** Taj Exotica, Barefoot at Havelock, Seashell.
- **Best For:** Sunset beach weddings and grand receptions.

<img src="${images.resort.src}" alt="${images.resort.alt}" width="${images.resort.width}" height="${images.resort.height}" />

### 2. Port Blair
Convenient and grand.
- **Vibe:** Accessible, with larger banquet capacities.
- **Venues:** Symphony Samudra, Welcomhotel by ITC.
- **Best For:** Large guest lists and easy logistics.

### 3. Neil Island (Shaheed Dweep)
Intimate and rustic.
- **Vibe:** Quiet, laid-back, and budget-friendly.
- **Venues:** Summer Sands, SeaShell Neil.
- **Best For:** Small, intimate ceremonies with close family.

---

## 2026 Cost Breakdown (Estimated)

Here is a rough budget for a **2-day wedding for 80 guests**:

| Expense Category | Economy | Premium | Luxury |
| :--- | :--- | :--- | :--- |
| **Accommodation** | ₹4 - 6 Lakhs | ₹8 - 12 Lakhs | ₹20+ Lakhs |
| **Food & Beverage** | ₹3 - 5 Lakhs | ₹6 - 8 Lakhs | ₹10+ Lakhs |
| **Decor & Setup** | ₹2 - 3 Lakhs | ₹5 - 7 Lakhs | ₹10+ Lakhs |
| **Logistics & Ferry** | ₹1 - 2 Lakhs | ₹2 - 3 Lakhs | ₹4+ Lakhs |
| **Total (Approx)** | **₹10 - 16 Lakhs** | **₹21 - 30 Lakhs** | **₹45+ Lakhs** |

---

## Planning Timeline

- **12 Months Out:** Fix the date and book the venue (popular dates sell out fast).
- **8 Months Out:** Book flight tickets for key family members.
- **6 Months Out:** Finalize the wedding planner and decor themes.
- **3 Months Out:** Send invites and book ferries.
- **1 Month Out:** Final checklists and packing.

---

## A Note on Logistics
Getting 100 guests to an island requires coordination.
- Ensure all guests land in Port Blair before 12:00 PM if transferring to Havelock the same day.
- Book private charter ferries for a seamless experience for your guests.

<img src="${images.couple.src}" alt="${images.couple.alt}" width="${images.couple.width}" height="${images.couple.height}" />

---

## Plan Your Dream Trip! 
Want a hassle-free Andaman experience? Let our local experts plan your 2026 getaway. 
[**Contact Us Now**](/contact) for customized packages and best deals.
`
};

export default post;
