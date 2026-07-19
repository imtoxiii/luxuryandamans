import { BlogPost } from '../../types/blog';
import { defaultAuthor } from './author';

const slug = 'andaman-scuba-diving-guide';

const post: BlogPost = {
  id: slug,
  title: 'Scuba Diving in Andaman (2026): Sites, Prices & Safety',
  slug,
  excerpt:
    'Discover Scuba from ₹3,500, Open Water courses, best Havelock dive sites, season timing, and which shops we trust — written for beginners and certified divers alike.',
  image: 'https://images.pexels.com/photos/4766819/pexels-photo-4766819.jpeg?auto=compress&cs=tinysrgb&w=1200',
  author: defaultAuthor,
  date: '2026-07-11',
  readTime: '14 min read',
  category: 'Adventure',
  tags: [
    'scuba diving andaman',
    'andaman scuba cost',
    'padi course havelock',
    'elephant beach diving',
    'discover scuba andaman',
    'best dive sites andaman',
  ],
  relatedPosts: ['elephant-beach-havelock-guide-2026', 'andaman-scuba-diving-beginners-guide', 'best-time-to-visit-andaman'],
  content: `
## Andaman is where most Indians learn to dive properly

Warm water (27–30°C most of year), English-speaking instructors, and sites 20 minutes from shore — Havelock (Swaraj Dweep) beats mainland options for first dives. Visibility hits 15–25m in season; marine life ranges from reef fish and turtles to occasional reef sharks on advanced sites.

You do not need to swim like a competitive athlete for a **Discover Scuba Dive (DSD)**. You do need to listen to briefing, equalise ears, and respect no-fly rules after diving.

Experience page: [Scuba Diving](/experiences/scuba-diving).

---

## Discover Scuba vs certification

**Discover Scuba (try dive):** Half day, pool or shallow skills, then guided dive to ~12m with instructor holding you. **₹3,500–5,500** including gear. No certificate. Best at [Elephant Beach](/blog/elephant-beach-havelock-guide-2026) operators or shore centres like Dive India / Barefoot Scuba.

**PADI/SSI Open Water:** 3–4 days, theory + confined + 4 open water dives. Certificate valid worldwide. **₹24,000–30,000** in Havelock — cheaper than Thailand for many Indians.

**Fun dives (certified):** ₹3,000–4,500 per dive with gear and guide. Multi-dive packages discount.

Beginner-focused companion: [scuba beginners guide](/blog/andaman-scuba-diving-beginners-guide).

---

## Dive sites that matter

### Havelock
- **Lighthouse:** Night dives famous — lobsters, sleeping parrotfish. Day dives good for novices.
- **Elephant Beach reef:** Shallow, colourful, busy — great first open water location.
- **Johnny's Gorge / Dixon's Pinnacle:** Advanced — currents, depth, sharks possible. Not for day-one tourists.
- **The Wall:** Drop-off dive for experienced divers comfortable with blue water.

### Neil Island
- **Margherita's Mischief:** Sandy bottom, clear water, dugong rumours (luck-dependent).
- Quieter than Havelock — fewer shops, slower pace.

### Port Blair area
- Limited recreational scuba compared to Havelock. Most tourists dive after ferry to Havelock.

---

## Best season

**November–April:** Default recommendation. Calm seas, boat dives run daily.

**May–June:** Often fine; check daily.

**July–September:** Boat dives cancel frequently; shore-based try dives may still run on calm windows.

Align trip dates: [best time to visit](/blog/best-time-to-visit-andaman).

---

## Choosing a dive shop

Look for: PADI/SSI registration displayed, equipment rinse tanks, dated tanks with visual inspection tags, small student-to-instructor ratio (4:1 max for courses).

Ask: "What if sea cancels boat?" — good shops reschedule or refund dive portion.

Avoid: Street touts selling "scuba" without shop name; ultra-cheap uncertified operators.

---

## Health and safety rules

- **Fly wait:** 18–24 hours after last dive before flying from Port Blair — non-negotiable for pressure injury risk.
- **Medical:** Asthma, ear surgery, pregnancy — disclose on form. Some conditions need doctor clearance.
- **Alcohol:** No diving hungover — dehydration worsens narcosis risk and judgment.
- **Equalisation:** If ears hurt, ascend slightly and try again — never push through sharp pain.

---

## What to bring

Swimsuit, towel, reef-safe sunscreen (apply 30 min before, not right before dive). Motion sickness tab if boat rides affect you. Certification card + logbook if certified. GoPro available for rent ~₹800–1,500 — ask about red filter for depth.

---

## Sample dive holiday (5 days on Havelock)

| Day | Plan |
|-----|------|
| 1 | Arrive, rest, no dive after travel |
| 2 | Discover Scuba or OW pool session |
| 3 | OW dives 1–2 or second fun dive |
| 4 | OW dives 3–4 or Johnny's (if qualified) |
| 5 | Buffer / Radhanagar — **no fly same day after diving** |

Build into [7-day itinerary](/blog/7-day-andaman-itinerary) with Neil after dive days complete.

---

## Prices snapshot 2026

| Activity | Range (INR) |
|----------|-------------|
| Discover Scuba | ₹3,500–5,500 |
| Open Water course | ₹24,000–30,000 |
| Advanced OW | ₹20,000–26,000 |
| Fun dive (single) | ₹3,000–4,500 |
| Night dive add-on | ₹4,000–5,500 |

Detailed pricing notes: [scuba prices 2026](/blog/andaman-scuba-prices-2026).

---

## Bundled packages

[Diving + island package](/packages/andaman-adventure-thrill-6-days) locks ferry timing so you are not on Neil the same day you planned a two-tank morning.

Questions on certification while on honeymoon? [Romantic packages](/packages/5n6d-andaman-time-mapped-honeymoon) with optional dive add-on.

[Enquiry](/enquiry) with "PADI OW" in message — we slot course days before Neil ferry in peak season.
`,
  faq: [
    {
      question: 'Do I need to know swimming for scuba in Andaman?',
      answer: 'Not for Discover Scuba — instructor manages buoyancy. Open Water certification requires basic water comfort (200m swim/float skills vary by agency).',
    },
    {
      question: 'What is the minimum age for scuba diving?',
      answer: 'Discover Scuba typically 10 years with parental consent. Junior Open Water from 10–14 with depth limits.',
    },
    {
      question: 'Is scuba diving safe in Andaman?',
      answer: 'With registered PADI/SSI shops, safety standards match international norms. Risk rises with uncertified operators and ignoring no-fly intervals.',
    },
    {
      question: 'Can I dive if I wear glasses?',
      answer: 'Yes — prescription masks available at most shops (-2 to -8 common). Notify when booking.',
    },
    {
      question: 'When should I not dive?',
      answer: 'Cold/flu with congestion, ear infection, pregnancy, recent surgery, or within 24 hours of a flight after diving.',
    },
  ],
};

export default post;
