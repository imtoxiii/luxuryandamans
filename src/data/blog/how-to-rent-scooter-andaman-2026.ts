import { BlogPost } from '../../types/blog';
import { defaultAuthor } from './author';

const images = {
    main: {
        src: 'https://images.pexels.com/photos/12525039/pexels-photo-12525039.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Tourists riding a scooter on a coastal road in Havelock Island.',
        width: 1200,
        height: 800,
    }
};

const post: BlogPost = {
    id: 'how-to-rent-scooter-andaman-2026',
    title: 'How to Rent a Scooter in Andaman (2026): Prices, Rules & License',
    slug: 'how-to-rent-scooter-andaman-2026',
    excerpt:
        "Want to explore Havelock and Neil at your own pace? Renting a two-wheeler is the best way. Here is your 2026 guide on how to rent, potential costs, and traffic rules.",
    image: images.main.src,
    author: defaultAuthor,
    date: new Date().toISOString(),
    readTime: '5 min read',
    category: 'Travel Tips',
    tags: [
        'rent scooter andaman',
        'bike rental havelock',
        'scooter price neil island',
        'driving license andaman',
        'traffic rules andaman 2026'
    ],
    relatedPosts: [
        'andaman-solor-trip-guide',
        'havelock-vs-neil-island-guide-2026',
        'andaman-budget-guide'
    ],
    faq: [
        {
            question: 'Do I need a driving license?',
            answer:
                'Yes, a valid driving license (Indian or International) is mandatory. Learners licenses are generally not accepted by rental agencies.'
        },
        {
            question: 'How much does it cost per day?',
            answer:
                'In 2026, prices range from ₹500 to ₹800 per day depending on the season and the model (Activa, Jupiter, or bike).'
        },
        {
            question: 'Is fuel included?',
            answer:
                'No. You usually get the bike with a little fuel (enough to reach the petrol pump). You must fill it up yourself. Petrol stations close by 7-8 PM in Havelock.'
        }
    ],
    content: `
## Freedom on Two Wheels 🛵

The best way to feel the island breeze is by renting a scooter. Unlike Port Blair, where autos are king, Havelock and Neil Island are perfect for two-wheelers. The roads are scenic, distances are short, and the freedom is unmatched.

Here is how to do it right in 2026.

---

## 1. Where can you rent?

- **Port Blair:** Rental scooters are available but less common due to heavy traffic and hilly terrain. Most tourists prefer cabs or autos here.
- **Havelock Island:** Available everywhere! You will find rental shops right at the jetty and near most hotels.
- **Neil Island:** The primary mode of transport. The flat terrain makes it a joy to ride.

---

## 2. The Process: How to Rent?

1.  **Documents:** Carry your original Driving License. Some shops might ask to keep a photocopy or the original (try to avoid giving the original; offer a deposit instead).
2.  **Deposit:** A security deposit of ₹1,000 - ₹2,000 is standard.
3.  **Check the Condition:** Before driving off, take a video of the bike. Note existing scratches, check the brakes, and test the headlights.
4.  **Fuel:** Ask where the nearest petrol pump is. In Neil, there is only one!

---

## 3. 2026 Rental Costs

| Vehicle Type | Off-Season (May-Sept) | Peak Season (Oct-Apr) |
| :--- | :--- | :--- |
| **Scooter (Activa/Dio)** | ₹500 | ₹700 - ₹800 |
| **Bike (Avenger/Bullet)** | ₹800 | ₹1,200 - ₹1,500 |

*Note: Prices are per day (24 hours). Late returns usually incur a fine.*

---

## 4. Important Rules to Follow ⚠️

- **Helmets are Mandatory:** For BOTH the rider and the pillion rider. Police checks are frequent, and fines are hefty.
- **No Beach Riding:** Driving strictly on the road. Taking vehicles onto the sand is illegal and damages the ecosystem.
- **Phone Network:** Download offline maps. Network spots can be patchy on the way to Radhanagar or Kalapathar.
- **Drink & Drive:** Strictly prohibited. Police patrol the roads at night, especially near bars/cafes.

---

## Plan Your Dream Trip! 
Want a hassle-free Andaman experience? Let our local experts plan your 2026 getaway. 
[**Contact Us Now**](/contact) for customized packages and best deals.
`
};

export default post;
