import { BlogPost } from '../../types/blog';

const slug = '7-day-andaman-itinerary';
const imagePath = `/blog-assets/${slug}/`;

const images = {
  main: {
    src: `${imagePath}andaman-itinerary-main.jpg`,
    alt: 'Pristine Andaman beach with turquoise waters and white sand at sunset',
    width: 1200,
    height: 800,
  },
  radhanagarSunset: {
    src: `${imagePath}radhanagar-sunset.jpg`,
    alt: 'Golden hour at Radhanagar Beach, Havelock Island with soft waves',
    width: 800,
    height: 533,
  },
  elephantSnorkel: {
    src: `${imagePath}elephant-beach-snorkeling.jpg`,
    alt: 'Snorkeling over coral reefs in clear waters near Elephant Beach',
    width: 800,
    height: 533,
  },
  neilNaturalBridge: {
    src: `${imagePath}neil-natural-bridge.jpg`,
    alt: 'Natural rock bridge formation on Neil Island at low tide',
    width: 800,
    height: 533,
  },
};

const post: BlogPost = {
  id: 'andaman-itinerary-7-days',
  title: 'Ultimate 7-Day Andaman Itinerary 2025: Port Blair, Havelock & Neil',
  slug,
  excerpt:
    'Plan the perfect 7-day Andaman trip in 2025 with this expert, day-by-day itinerary covering Port Blair, Havelock (Swaraj Dweep) and Neil (Shaheed Dweep)—complete with beaches, ferries, budgets, pro tips, and FAQs.',
  image: images.main.src,
  author: {
    name: 'Luxury Andamans Team',
    avatar: 'https://i.pravatar.cc/150?img=12',
    bio: 'Local experts crafting unforgettable island experiences across the Andaman archipelago.',
  },
  date: new Date().toISOString(),
  readTime: '11 min read',
  category: 'Itineraries',
  tags: [
    '7 day andaman itinerary',
    'port blair itinerary',
    'havelock itinerary',
    'neil island guide',
    'radhanagar beach',
    'elephant beach snorkeling',
    'andaman travel guide 2025',
  ],
  relatedPosts: [
    'andaman-best-time',
    'andaman-top-things-to-do',
    'andaman-budget-guide',
  ],
  faq: [
    {
      question: 'What is the best time for a 7-day Andaman trip?',
      answer:
        'October to April offers the best weather with calm seas and clear skies. For budget savings, consider May–September (monsoon) with flexible plans for occasional showers.',
    },
    {
      question: 'How do I book ferries between islands?',
      answer:
        'Use reputable private ferry operators or government ferries. Book online 1–2 weeks in advance during peak season. Carry a valid government ID; arrive at the jetty 45–60 minutes early.',
    },
    {
      question: 'Is snorkeling or scuba better for beginners?',
      answer:
        'Snorkeling is budget-friendly and perfect for first-timers, especially at Elephant Beach and Bharatpur. Try an introductory scuba dive if you want closer reef encounters with an instructor.',
    },
    {
      question: 'Can I add Baratang or Ross & Smith Island to this plan?',
      answer:
        'With only 7 days, adding far-flung spots can feel rushed. If you must, replace Neil with Baratang (limestone caves) or add an extra day for Ross & Smith from Diglipur.',
    },
    {
      question: 'Do I need permits for the Andamans?',
      answer:
        'Indian citizens do not require permits for the main islands in this itinerary. Some remote areas and tribal reserves are restricted. Foreign nationals receive permits on arrival in Port Blair.',
    },
  ],
  content: `
## Welcome to Your Perfect Week in the Andamans
Dreaming of turquoise lagoons, sugar-white beaches, and slow island days? This 7-day Andaman itinerary is the sweet spot—enough time to savor Port Blair’s history, Havelock’s world-class beaches, and Neil’s laid-back charm without rushing. Use this day-by-day plan to lock in ferries, pick the right beaches at the right time, and budget smart for 2025.

---

## Why this 7-day plan works
This itinerary balances beaches, experiences, and travel time so you never feel rushed. You get sunset magic at Radhanagar, snorkeling at Elephant Beach, and time to slow down on Neil Island.

---

## Day 1: Arrive in Port Blair
- Airport pickup and hotel check-in
- Cellular Jail (National Memorial) and Light & Sound Show at night
- Stroll Marina Park for the sea breeze; seafood dinner in Aberdeen Bazaar

## Day 2: Port Blair → Havelock (Swaraj Dweep)
- Morning ferry (90 minutes)
- Check-in and relax near Govind Nagar or Radhanagar side
- Late afternoon: Radhanagar Beach for Asia’s most photogenic sunset

<img src="${images.radhanagarSunset.src}" alt="${images.radhanagarSunset.alt}" width="${images.radhanagarSunset.width}" height="${images.radhanagarSunset.height}" />

## Day 3: Havelock — Elephant Beach Adventure
- Speedboat to Elephant Beach (book a morning slot)
- Snorkeling, sea walk, or parasailing options
- Leisure afternoon; café hop along the main market

<img src="${images.elephantSnorkel.src}" alt="${images.elephantSnorkel.alt}" width="${images.elephantSnorkel.width}" height="${images.elephantSnorkel.height}" />

## Day 4: Havelock — Kalapathar Sunrise + Optional Scuba
- Early sunrise at Kalapathar Beach; emerald hues in soft light
- Optional: Introductory scuba dive with a licensed operator
- Sunset chill at Radhanagar or a quiet cove nearby

## Day 5: Havelock → Neil (Shaheed Dweep)
- Short morning ferry (~60 minutes)
- Check in and head to Bharatpur Beach for shallow, clear lagoon waters
- Sunset at Natural Bridge (Howrah Bridge) and Laxmanpur Beach

<img src="${images.neilNaturalBridge.src}" alt="${images.neilNaturalBridge.alt}" width="${images.neilNaturalBridge.width}" height="${images.neilNaturalBridge.height}" />

## Day 6: Neil — Laze & Explore
- Cycle between beaches; distances are short and scenic
- Sitapur Beach sunrise and Laxmanpur Beach sunset
- Fresh seafood thali at a beachside shack

## Day 7: Return to Port Blair & Departure
- Morning ferry back to Port Blair
- Souvenir shopping at Aberdeen Bazaar
- Airport drop (keep buffer time for ferry and airport security)

---

## Neil Island Beaches: Where to Go and Why

### Bharatpur Beach — Lagoon for All Ages
Shallow, clear waters make this the best spot for casual swims and beginner snorkeling. Hire a glass-bottom boat for children or non-swimmers.

### Laxmanpur Beach — Dreamy Sunset Frames
Known for its long white stretch and pastel sunsets. Great for easy walks and photography.

### Sitapur Beach — Sunrise Serenity
The eastern tip of Neil Island offers a spectacular sunrise and fewer crowds—bring water and start early.

---

## Practical Tips for a Seamless Week
- Pre-book all ferries and water activities, especially in peak season (Oct–Apr)
- Always carry a government ID; ferries require it for boarding
- No plastic on beaches; help keep Andaman pristine
- ATMs are limited—carry some cash; UPI works in most cafes
- Rent a scooter on Havelock and Neil for flexibility (carry a license and helmet)
- Respect currents and flags; swim only in designated zones

---

## Estimated Budget (per couple)
- Ferries: ₹6,000–₹10,000
- Hotels (mix): ₹30,000–₹70,000
- Activities: ₹6,000–₹20,000
- Food & local travel: ₹8,000–₹18,000

Your total can vary based on season and stay choices. For ultra-budget or premium options, ask us to tailor the plan.

---

## Plan your trip next
- Read next: [Top Things To Do in Andaman](/blog/andaman-top-things-to-do)
- Check the [Best Time to Visit Andaman](/blog/andaman-best-time)
- Hungry? See our [Andaman Food Guide](/blog/andaman-food-guide)
- Want to spread costs? Read our guide to [Andaman on EMI 2025](/blog/andaman-budget-emi-2025)
- Ready to go? Explore [Packages](/packages) or [Contact us](/contact)
`,
};

export default post;


