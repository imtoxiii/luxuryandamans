import { BlogPost } from '../../types/blog';
import { defaultAuthor } from './author';

const images = {
    main: {
        src: 'https://images.pexels.com/photos/1769305/pexels-photo-1769305.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'A dense, untouched rainforest in the Andaman Islands.',
        width: 1200,
        height: 800,
    }
};

const post: BlogPost = {
    id: 'what-tribes-live-in-andaman-2026',
    title: 'What Tribes Live in Andaman? Can Tourists Visit Them? (2026)',
    slug: 'what-tribes-live-in-andaman-2026',
    excerpt:
        "Andaman is home to some of the world's most ancient and endangered tribes. In 2026, rules are strict. Learn about the Jarawa, Sentinelese, and what is permitted for tourists.",
    image: images.main.src,
    author: defaultAuthor,
    date: new Date().toISOString(),
    readTime: '6 min read',
    category: 'Culture & History',
    tags: [
        'andaman tribes',
        'jarawa tribe andaman',
        'can tourists visit jarawa',
        'north sentinel island',
        'sentinelese tribe 2026'
    ],
    relatedPosts: [
        'hidden-andaman-facts-2026',
        'port-blair-one-day-plan',
        'how-to-visit-baratang-island'
    ],
    faq: [
        {
            question: 'Can I meet the Jarawa tribe?',
            answer:
                'No. Interaction with the Jarawa tribe is strictly prohibited by law (PAT Regulation 1956). You might see them while traveling through the forest reserve to Baratang, but stopping, photographing, or offering food is a punishable offense.'
        },
        {
            question: 'Can I visit North Sentinel Island?',
            answer:
                'Absolutely NOT. North Sentinel Island is a restricted zone. The Sentinelese tribe is hostile to outsiders and protected by the Indian government to ensure their isolation and health.'
        },
        {
            question: 'Are any tribes friendly?',
            answer:
                'While "friendly" isn\'t the right term, the Great Andamanese and Oncge tribes have some contact with the administration but live in restricted reserves not open to general tourism.'
        }
    ],
    content: `
## Ancient Guardians of the Islands

The Andaman & Nicobar Islands are not just a tourist destination; they are the ancestral home of indigenous tribes who have lived here for tens of thousands of years. Their isolation has preserved a way of life that is rare in the modern world.

It is crucial for visitors to respect the laws protecting these communities.

---

## 1. The Jarawa Tribe (Middle Andaman)
- **Status:** Endangered, but contact with the outside world has increased.
- **Location:** The Jarawa Reserve Forest, which the Andaman Trunk Road passes through.
- **Tourist Rules:** While traveling to Baratang (for Limestone Caves), you pass through their territory. **Photography is banned.** Stopping vehicles is illegal. Do not offer food or clothes. Violators face imprisonment.

---

## 2. The Sentinelese (North Sentinel Island)
- **Status:** The most isolated tribe in the world. Uncontacted.
- **Location:** North Sentinel Island.
- **Tourist Rules:** A total no-go zone. The Indian Navy and Coast Guard patrol the waters to keep intruders out for the safety of both the tribe (who have no immunity to modern diseases) and the intruders.

---

## 3. The Onge (Little Andaman)
- **Status:** Semi-nomadic, population heavily reduced.
- **Location:** Dugong Creek and South Bay in Little Andaman.
- **Tourist Rules:** Restricted. Tourists visiting Little Andaman for surfing cannot enter the tribal reserves.

---

## 4. The Great Andamanese (Strait Island)
- **Status:** Once the largest tribe, now very few remain. They have been resettled by the government.
- **Tourist Rules:** Generally restricted, though some interact with settlers.

---

## 5. The Shompen (Great Nicobar)
- **Status:** Isolated hunter-gatherers in the Nicobar islands.
- **Tourist Rules:** Great Nicobar is largely off-limits to foreign tourists and requires permits even for Indians. Access to Shompen territory is denied.

---

## How Can Tourists Learn Without Disturbing?
Instead of seeking "human safaris" (which are unethical and illegal), visit the **Anthropological Museum within Port Blair**.
- It houses tools, photographs, and artifacts.
- It provides a deep, respectful insight into their history and lifestyle.
- It supports the preservation efforts without intruding on their lives.

---

## Plan Your Dream Trip! 
Want a hassle-free Andaman experience? Let our local experts plan your 2026 getaway. 
[**Contact Us Now**](/contact) for customized packages and best deals.
`
};

export default post;
