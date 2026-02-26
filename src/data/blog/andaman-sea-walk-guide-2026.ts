import { BlogPost } from '../../types/blog';
import { defaultAuthor } from './author';

const imagePath = '/img/blog/sea-walk/';

const images = {
    main: {
        src: 'https://images.pexels.com/photos/15763623/pexels-photo-15763623/free-photo-of-scuba-divers-swimming-near-shipwreck.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Sea walking adventure in Andaman with colorful fish and clear waters.',
        width: 1200,
        height: 800,
    }
};

const post: BlogPost = {
    id: 'andaman-sea-walk-guide-2026',
    title: 'Sea Walking in Andaman (2026): Prices, Locations & Safety',
    slug: 'andaman-sea-walk-guide-2026',
    excerpt:
        "Want to walk on the ocean floor without knowing how to swim? Sea walking is the ultimate family-friendly adventure. Here is everything you need to know for 2026.",
    image: images.main.src,
    author: defaultAuthor,
    date: new Date().toISOString(),
    readTime: '8 min read',
    category: 'Activities',
    tags: [
        'sea walk andaman',
        'sea walk price 2026',
        'north bay sea walk',
        'havelock sea walk',
        'non swimmer activities'
    ],
    relatedPosts: [
        'andaman-scuba-prices-2026',
        'water-sports-price-list-andaman',
        'andaman-family-itinerary-2026'
    ],
    faq: [
        {
            question: 'Do I need to know swimming for Sea Walking?',
            answer:
                'No, absolutely not. You just walk on the ocean floor while breathing normally inside a helmet. It is perfect for non-swimmers.'
        },
        {
            question: 'Can I wear glasses inside the helmet?',
            answer:
                'Yes! The helmet is designed to be spacious and dry, so you can comfortably wear your prescription glasses or contact lenses.'
        },
        {
            question: 'What is the age limit?',
            answer:
                'It is generally suitable for anyone between 7 and 70 years old, provided they are medically fit.'
        },
        {
            question: 'Is it safe?',
            answer:
                'Yes, you are always accompanied by certified divers, and fresh air is constantly supplied from the surface.'
        }
    ],
    content: `
## Walk Amongst the Fish! 🐠

Sea Walking is one of the most unique and accessible underwater activities in the world. Unlike scuba diving, which requires technical skills or swimming ability, sea walking allows you to simply stroll on the seabed while breathing naturally.

In 2026, new safety protocols and upgraded equipment have made this experience even better.

---

## Where to do Sea Walking in Andaman?

### 1. North Bay Island (Port Blair)
- **Depth:** 6-7 meters
- **Experience:** Famous for its vibrant coral reefs and large schools of fish.
- **Access:** Easily reachable by a 20-minute boat ride from the Aberdeen Jetty.

### 2. Elephant Beach (Havelock Island)
- **Depth:** 6-10 meters
- **Experience:** Crystal clear waters and a higher chance of spotting exotic marine life like clownfish (Nemo).
- **Access:** Reached by boat from the Havelock jetty.

---

## 2026 Price List (Approximate)

Sea walking prices are regulated but can vary slightly based on the operator.

| Location | Price Per Person | Duration |
| :--- | :--- | :--- |
| **North Bay Island** | ₹3,500 - ₹4,000 | 20-30 mins underwater |
| **Elephant Beach** | ₹3,500 - ₹4,500 | 20-30 mins underwater |
| **Add-on** | Photos & Videos | ₹500 - ₹1,000 |

*Note: Prices often include boat transfers to the pontoon but check before booking.*

---

## Step-by-Step Experience

1. **Briefing:** A 10-minute session on hand signals (OK, Up, Down, Problem).
2. **Descent:** You wear a heavy helmet (35kg on land, weightless underwater) and climb down a ladder.
3. **The Walk:** Once your feet touch the sand, you are free to walk! Fish will surround you as guides feed them.
4. **Photos:** A dedicated photographer will capture your candid moments.
5. **Ascent:** Climb back up, take off the helmet, and dry off!

---

## Who Should Avoid It?
- Anyone with ear infections or sinus issues (pressure equalization can be painful).
- Pregnant women.
- People with heart conditions or asthma.
- Children under 7 years.

---

## Plan Your Dream Trip! 
Want a hassle-free Andaman experience? Let our local experts plan your 2026 getaway. 
[**Contact Us Now**](/contact) for customized packages and best deals.
`
};

export default post;
