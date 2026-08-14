import { BlogPost } from '../../types/blog';
import { defaultAuthor } from './author';

const slug = '7-day-andaman-itinerary';
const imagePath = `/blog-assets/${slug}/`;

const images = {
  main: {
    src: 'https://images.pexels.com/photos/5598760/pexels-photo-5598760.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Pristine Andaman beach with turquoise waters and white sand at sunset',
    width: 1200,
    height: 800,
  },
  radhanagarSunset: {
    src: 'https://images.pexels.com/photos/14923409/pexels-photo-14923409.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Golden hour at Radhanagar Beach, Havelock Island with soft waves',
    width: 800,
    height: 533,
  },
  elephantSnorkel: {
    src: 'https://images.pexels.com/photos/15796414/pexels-photo-15796414/free-photo-of-beach-restaurant-tropical-paradise-pool.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Snorkeling over coral reefs in clear waters near Elephant Beach',
    width: 800,
    height: 533,
  },
  neilNaturalBridge: {
    src: 'https://images.pexels.com/photos/17320214/pexels-photo-17320214/free-photo-of-palm-fronds.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Natural rock bridge formation on Neil Island at low tide',
    width: 800,
    height: 533,
  },
};

const post: BlogPost = {
  id: 'andaman-itinerary-7-days',
  title: '7-Day Andaman Itinerary 2026: Port Blair, Havelock & Neil',
  slug,
  excerpt:
    'The 6N/7D Andaman plan we sell most — day-by-day ferries, Radhanagar, Elephant Beach, Neil, and what to skip so you are not stuck in Port Blair traffic.',
  image: images.main.src,
  author: defaultAuthor,
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
    'andaman travel guide 2026',
    '7 days in andaman',
    'andaman 7 day package',
  ],
  relatedPosts: [
    'andaman-6-days-itinerary-2026',
    'how-many-days-in-andaman-2026',
    'andaman-5-days-itinerary-2026',
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
## Seven days is the version that does not feel rushed

Five days works if you skip Neil. Six is the couple default. Seven lets you keep Havelock slow and still see Bharatpur and Natural Bridge without a 6 am panic.

This is Port Blair → Havelock → Neil → Port Blair. Not Diglipur. Not four islands. Shorter: [5-day itinerary](/blog/andaman-5-days-itinerary-2026). The default we quote: [6-day itinerary](/blog/andaman-6-days-itinerary-2026). Still deciding length: [how many days in Andaman](/blog/how-many-days-in-andaman-2026).

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

<img src="https://images.pexels.com/photos/14565669/pexels-photo-14565669.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="${images.radhanagarSunset.alt}" width="${images.radhanagarSunset.width}" height="${images.radhanagarSunset.height}" />

## Day 3: Havelock — Elephant Beach Adventure
- Speedboat to Elephant Beach (book a morning slot)
- Snorkeling, sea walk, or parasailing options
- Leisure afternoon; café hop along the main market

<img src="https://images.pexels.com/photos/3098980/pexels-photo-3098980.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="${images.elephantSnorkel.alt}" width="${images.elephantSnorkel.width}" height="${images.elephantSnorkel.height}" />

## Day 4: Havelock — Kalapathar Sunrise + Optional Scuba
- Early sunrise at Kalapathar Beach; emerald hues in soft light
- Optional: Introductory scuba dive with a licensed operator
- Sunset chill at Radhanagar or a quiet cove nearby

## Day 5: Havelock → Neil (Shaheed Dweep)
- Short morning ferry (~60 minutes)
- Check in and head to Bharatpur Beach for shallow, clear lagoon waters
- Sunset at Natural Bridge (Howrah Bridge) and Laxmanpur Beach

<img src="https://images.pexels.com/photos/4766819/pexels-photo-4766819.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="${images.neilNaturalBridge.alt}" width="${images.neilNaturalBridge.width}" height="${images.neilNaturalBridge.height}" />

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
- [Best time to visit](/blog/best-time-to-visit-andaman)
- [Andaman food guide](/blog/andaman-food-guide)
- [Trip cost 2026](/blog/andaman-trip-cost-complete-breakdown-2026)
- [EMI option](/blog/andaman-budget-emi-2026)
- [Packages](/packages) or [enquiry](/enquiry)

---

## Plan Your Dream Trip! 
Want a hassle-free Andaman experience? Let our local experts plan your 2026 getaway. 
[**Contact Us Now**](/contact) for customized packages and best deals.
`,
};

export default post;


