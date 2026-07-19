import { BlogPost } from '../../types/blog';
import { defaultAuthor } from './author';

const slug = 'andaman-ferry-booking-guide';

const images = {
  main: {
    src: 'https://images.pexels.com/photos/3551208/pexels-photo-3551208.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Makruzz catamaran at Phoenix Bay Jetty Port Blair',
    width: 1200,
    height: 800,
  },
  interior: {
    src: 'https://images.pexels.com/photos/2846820/pexels-photo-2846820.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Air-conditioned cabin inside an Andaman private ferry',
    width: 800,
    height: 533,
  },
};

const post: BlogPost = {
  id: 'andaman-ferry-booking-guide',
  title: 'Andaman Ferry Booking 2026: Makruzz vs Nautika vs Green Ocean',
  slug,
  excerpt:
    'Port Blair to Havelock ferries compared — prices, open deck access, booking windows, jetty check-in, and why your flight landing time matters more than which operator you pick.',
  image: images.main.src,
  author: defaultAuthor,
  date: '2026-07-12',
  readTime: '10 min read',
  category: 'Travel Guide',
  tags: [
    'andaman ferry booking',
    'makruzz vs green ocean',
    'port blair to havelock ferry',
    'nautika ferry andaman',
    'havelock to neil ferry',
    'phoenix bay jetty',
  ],
  relatedPosts: ['how-to-reach-andaman-flight-vs-ship', '7-day-andaman-itinerary', 'new-ferry-services-2026'],
  faq: [
    {
      question: 'Which ferry is best from Port Blair to Havelock?',
      answer:
        'Makruzz and Nautika are fastest and most reliable for tourists — book online 2–4 weeks ahead in peak season. Green Ocean 1 suits you if an open deck matters more than speed.',
    },
    {
      question: 'How early should I book Andaman ferries?',
      answer:
        'Peak (Dec–Feb): 3–4 weeks minimum for Makruzz Premium. Shoulder: 1–2 weeks. Monsoon: sometimes days ahead is enough unless holidays overlap.',
    },
    {
      question: 'Can I buy ferry tickets at the jetty?',
      answer:
        'Private ferries — rarely in peak; counters exist but sell out. Government ferries — counter queue 1–2 days before, not same-day guaranteed for tourists.',
    },
    {
      question: 'How long is Port Blair to Havelock by ferry?',
      answer:
        'Private catamarans: 90–120 minutes. Green Ocean 1: up to 2.5 hours. Government ferries: 2.5–3+ hours.',
    },
    {
      question: 'What ID is required for ferry check-in?',
      answer:
        'Original government photo ID — Aadhaar for Indians, passport for foreign nationals. Name on ticket must match exactly.',
    },
  ],
  content: `
## Ferries are the trip — treat them like flights

No bridge connects Port Blair to Havelock. Every "5-day Andaman package" is really a ferry schedule with hotels attached. Get the sailings wrong and Radhanagar sunset becomes a WhatsApp argument with your hotel.

Main tourist circuit: **Port Blair → Havelock (Swaraj Dweep) → Neil (Shaheed Dweep) → Port Blair**. Book it as a circuit when possible — one-way tickets during peak leave you stranded.

---

## Private operators compared

### Makruzz
The default choice for first-timers. Catamaran, sealed AC cabin, assigned seats (Premium / Deluxe / Royal). **No open deck** — photographers sometimes regret this.

Typical PB–Havelock fare: **₹1,200–2,000** by class and season. Runs morning and mid-day sailings; exact times shift — check PDF ticket.

Pros: punctual, professional crew, easy online booking. Cons: cabin-only views, upper deck feels sway on rough days.

### Nautika
Similar speed class to Makruzz. Slightly newer feel on some routes. Limited deck access on certain sailings for fresh air — verify when booking if seasickness is a concern.

Pricing comparable to Makruzz. Good alternative when Makruzz class is sold out — not a downgrade.

### Green Ocean 1
Slower ship-style vessel with **large open deck** — best if you want wind and photos. Takes longer (~2–2.5 hrs PB–Havelock). Interiors older than Makruzz.

Choose this when experience > speed. Rough days: open deck closes — you still feel swell.

### Green Ocean 2
Faster, fully AC, no deck — sits between GO1 and Makruzz in vibe.

<img src="${images.interior.src}" alt="${images.interior.alt}" width="${images.interior.width}" height="${images.interior.height}" />

---

## Government ferries

**₹400–600** per leg. STAR counters in Port Blair — queues, limited tourist quota, Hindi/Bengali signage confusing for some. Timing slips.

Works for budget travellers with flexible days. Bad fit if you land Day 1 and need guaranteed Havelock that afternoon.

---

## Sample timings (verify on booking day)

| Route | Typical window | Duration |
|-------|----------------|----------|
| Port Blair → Havelock | 07:00–14:00 departures | 1.5–3 hrs |
| Havelock → Neil | 08:30–13:00 | ~1 hr |
| Neil → Port Blair | 12:00–16:00 | 1–1.5 hrs |

First ferry after international arrival: only if you land before 9 am and pre-arranged rush transfer. Safer pattern — **night Port Blair, ferry next morning**.

---

## Check-in reality at Phoenix Bay Jetty

- Arrive **60 minutes early** (90 in peak)
- Original ID + printed/PDF ticket
- Luggage scanned; large bags tagged
- Motion sickness meds **before** boarding — cabin doors close fast

Weight limits exist; excess rare for normal suitcases. Scooter on ferry — separate booking category if allowed on your sailing.

---

## Booking tactics that save trips

1. **Book circuit PB–Havelock–Neil–PB** in one session when websites allow.
2. **Flight buffer:** If landing 11:30 am, do not book 12:30 pm ferry — immigration, baggage, 45 min drive minimum.
3. **Seasickness:** Lower/mid deck Premium seats, face forward, avoid heavy breakfast. Open deck (GO1) worse for nausea on swell.
4. **Monsoon:** Morning sailings cancel less often than afternoon. Keep backup day before flight out.
5. **Neil ATM/cash** — fine; but return ferry to Port Blair same day as flight needs 6+ hour gap.

---

## Havelock ↔ Neil notes

Short hop, smaller boats sometimes. Bags stay on deck or front hold — carry valuables. Morning Neil→PB connects to afternoon flights if Neil hotel arranges 6 am transfer to jetty.

Compare islands: [Havelock vs Neil guide](/blog/havelock-vs-neil-island-guide-2026).

---

## When ferries cancel

Coast guard advisories stop private operators — refunds or next sailing per policy. Insurance helps for missed flights. Our [packages](/packages) rebook ferries internally when possible — DIY travellers chase operator WhatsApp lines.

---

## Bottom line

Pick Makruzz/Nautika for speed and certainty. Pick Green Ocean 1 for deck experience. Pick government for price and patience.

Still juggling timings? [Enquiry form](/enquiry) with flight landing time — we reply with a ferry matrix, not generic "book early" advice.

First trip context: [first-timer guide](/blog/first-timers-guide-andaman-2026).
`,
};

export default post;
