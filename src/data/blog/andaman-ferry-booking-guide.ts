import { BlogPost } from '../../types/blog';
import { defaultAuthor } from './author';

const slug = 'andaman-ferry-booking-guide';
const imagePath = `/blog-assets/${slug}/`;

const images = {
  main: {
    src: `${imagePath}makruzz-ferry-andaman.jpg`,
    alt: 'Makruzz luxury catamaran sailing in Andaman waters',
    width: 1200,
    height: 800,
  },
  interior: {
    src: `${imagePath}ferry-interior-premium.jpg`,
    alt: 'Premium class interior of a private ferry',
    width: 800,
    height: 533,
  },
  jetty: {
    src: `${imagePath}havelock-jetty-view.jpg`,
    alt: 'Tourists boarding a ferry at Havelock Jetty',
    width: 800,
    height: 533,
  },
};

const post: BlogPost = {
  id: 'andaman-ferry-booking-guide',
  title: 'Andaman Ferry Guide 2025: Makruzz vs Green Ocean vs Govt Ferries',
  slug: 'andaman-ferry-booking-guide',
  excerpt:
    'How do you get from Port Blair to Havelock? We compare Makruzz, Nautika, Green Ocean, and Government ferries to help you choose the best ride.',
  image: images.main.src,
  author: defaultAuthor,
  date: new Date().toISOString(),
  readTime: '8 min read',
  category: 'Travel Guide',
  tags: [
    'andaman ferry booking',
    'makruzz vs green ocean',
    'port blair to havelock ferry',
    'nautika ferry review',
    'govt ferry booking andaman',
    'havelock to neil ferry',
  ],
  relatedPosts: ['how-to-reach-andaman-flight-vs-ship', 'andaman-7-day-itinerary', 'what-to-pack-for-andaman-trip'],
  faq: [
    {
      question: 'Which is the best ferry for Havelock?',
      answer:
        '**Makruzz** and **Nautika** are the most popular for speed and comfort. **Green Ocean** is great if you want an open deck to walk around.'
    },
    {
      question: 'Do I need to book ferry tickets in advance?',
      answer:
        '**Yes!** In peak season (Oct-Mar), tickets sell out weeks in advance. Do not rely on buying tickets at the jetty. Book online at least 15-20 days prior.'
    },
    {
      question: 'Can tourists take Government ferries?',
      answer:
        'Yes, but it is difficult. Tickets are issued offline at the counter 1-2 days prior, with long queues. They are primarily meant for locals. We recommend private ferries for a stress-free holiday.'
    },
    {
      question: 'How long is the journey from Port Blair to Havelock?',
      answer:
        'It takes about **90 minutes to 2 hours** by private catamaran. Government ferries can take 2.5 to 3 hours.'
    },
    {
      question: 'Is there an open deck on Makruzz?',
      answer:
        'No, Makruzz is a sealed, air-conditioned catamaran. You cannot go outside. If you want an open deck experience, choose **Green Ocean 1** or **Nautika** (limited deck access).'
    }
  ],
  content: `
## Island Hopping 101 🛥️

The Andaman experience is incomplete without the ferry rides. Since there are no bridges connecting the islands, ferries are the lifeline.

For tourists, the main route is: **Port Blair -> Havelock -> Neil -> Port Blair**.

Here is a comparison of your options.

---

## 1. Private Ferries (Recommended for Tourists)
These are fast, comfortable, air-conditioned, and bookable online.

### Makruzz
- **The Pioneer:** The oldest and most famous private ferry.
- **Vibe:** Airport-like interiors, sealed AC cabin.
- **Pros:** Very fast, reliable, professional service.
- **Cons:** No open deck access.
- **Classes:** Premium, Deluxe, Royal.

### Nautika (formerly Sealink)
- **The New Star:** A newer, faster vessel.
- **Vibe:** Modern and sleek.
- **Pros:** Very stable ride (less seasickness), allows limited access to the deck for photos.
- **Cons:** Slightly more expensive.

### Green Ocean 1
- **The Open Deck:** Not a catamaran, but a ship.
- **Vibe:** More relaxed, slower.
- **Pros:** **Has a huge open deck.** You can stand outside, feel the breeze, and watch the sea. Best for photographers.
- **Cons:** Slower than Makruzz/Nautika. Interiors are a bit older.

### Green Ocean 2
- **The Hybrid:** Faster than GO1, but fully AC like Makruzz. No open deck.

<img src="${images.interior.src}" alt="${images.interior.alt}" width="${images.interior.width}" height="${images.interior.height}" />

---

## 2. Government Ferries (The Budget Option)
- **Cost:** Very cheap (₹400-₹600).
- **Booking:** Offline only (mostly). You have to stand in queues at the STAR ticket counter.
- **Comfort:** Basic. Non-AC and AC seats available.
- **Verdict:** Avoid unless you are on a strict shoestring budget and have extra time to queue up.

---

## Ferry Routes & Timings 🕒

### Port Blair to Havelock (Swaraj Dweep)
- **First Ferry:** ~6:00 AM (Govt) / ~7:30 AM (Private)
- **Last Ferry:** ~2:00 PM
- **Duration:** 90 mins - 2.5 hrs

### Havelock to Neil (Shaheed Dweep)
- **Timings:** Mostly morning and early afternoon.
- **Duration:** 60 mins

### Neil to Port Blair
- **Timings:** Mostly afternoon (returns you by evening).
- **Duration:** 60-90 mins

<img src="${images.jetty.src}" alt="${images.jetty.alt}" width="${images.jetty.width}" height="${images.jetty.height}" />

---

## Booking Tips for 2025 💡
1.  **Book the Circuit:** Don't book one-way. Book Port Blair -> Havelock -> Neil -> Port Blair all at once.
2.  **Buffer Time:** If your flight lands at 12:00 PM, don't book a 12:30 PM ferry. You need at least 90 minutes to reach the jetty from the airport.
3.  **Seasickness:** If you get seasick, choose the **Premium** class (lower deck) on Makruzz/Nautika. It sways less than the upper decks.

---
*Want us to handle the bookings? Our [Tour Packages](/packages) include all ferry transfers, so you don't have to worry about availability.*
`,
};

export default post;
