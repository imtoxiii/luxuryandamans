import { BlogPost } from '../../types/blog';

const slug = 'what-to-pack-for-andaman-trip';
const imagePath = `/blog-assets/${slug}/`;

const images = {
  main: {
    src: `${imagePath}packing-list-main.jpg`,
    alt: 'Flat lay of travel essentials for a beach trip to Andaman',
    width: 1200,
    height: 800,
  },
  clothing: {
    src: `${imagePath}beach-wear-andaman.jpg`,
    alt: 'Tourist wearing comfortable cotton clothes on a sunny beach',
    width: 800,
    height: 533,
  },
  essentials: {
    src: `${imagePath}sunscreen-hat-sunglasses.jpg`,
    alt: 'Sunscreen, hat, and sunglasses on sand',
    width: 800,
    height: 533,
  },
};

const post: BlogPost = {
  id: 'what-to-pack-for-andaman-trip',
  title: 'Ultimate Andaman Packing List 2025: What to Bring & What to Leave',
  slug: 'what-to-pack-for-andaman-trip',
  excerpt:
    'Don\'t overpack! Here is the definitive checklist of clothes, gadgets, and essentials you actually need for your Andaman island vacation.',
  image: images.main.src,
  author: {
    name: 'Luxury Andamans Team',
    avatar: '/images/luxury-andamans-logo.png',
    bio: 'Expert travelers helping you travel light and smart.'
  },
  date: new Date().toISOString(),
  readTime: '6 min read',
  category: 'Travel Tips',
  tags: [
    'what to pack for andaman',
    'andaman packing list',
    'beach vacation packing',
    'travel essentials andaman',
    'clothes for andaman trip',
  ],
  relatedPosts: ['andaman-best-time', 'is-andaman-safe-for-tourists', 'shopping-in-andaman-what-to-buy'],
  faq: [
    {
      question: 'Do I need to carry warm clothes?',
      answer:
        'No. Andaman is tropical and humid year-round. Even in "winter" (Dec-Jan), temperatures rarely drop below 22°C. A light jacket for the flight or AC ferries is enough.'
    },
    {
      question: 'Can I buy swimwear in Andaman?',
      answer:
        'Yes, there are shops in Port Blair and Havelock selling swimwear, hats, and flip-flops. However, choices might be limited and prices higher than online. It is better to bring your own.'
    },
    {
      question: 'Is there a dress code for Andaman?',
      answer:
        'On beaches, swimwear is fine. However, when visiting museums, the Cellular Jail, or walking in town, it is respectful to wear modest clothing (cover shoulders/knees). Temples strictly require modest dress.'
    },
    {
      question: 'What kind of footwear should I bring?',
      answer:
        'Flip-flops for the beach, comfortable walking shoes/sandals for sightseeing, and water shoes (crocs/aquashoes) if you plan to walk on rocky corals.'
    },
    {
      question: 'Should I carry cash?',
      answer:
        'Yes! While UPI works in Port Blair, internet can be spotty in Havelock/Neil. ATMs often run out of cash. Carry enough cash for small expenses, auto rides, and water sports.'
    }
  ],
  content: `
## Pack Smart for Paradise 🎒

Packing for an island trip seems simple—swimsuit and sunscreen, right? But Andaman has its own quirks. You'll be hopping on ferries, walking on corals, and dealing with tropical humidity.

Here is the ultimate packing list to ensure you have everything you need without dragging heavy bags across the ocean.

---

## 1. Clothing: Think Light & Breathable 👕
Cotton and linen are your best friends. Synthetics will make you sweat.
- **Beachwear:** 2-3 Swimsuits/Trunks.
- **Day Wear:** Cotton t-shirts, shorts, sundresses, flowy skirts.
- **Evening Wear:** One nice outfit for a candlelight dinner (smart casuals).
- **Cover-ups:** Sarongs or kaftans for walking to/from the beach.
- **Undergarments:** Pack extra! Humidity means things don't dry quickly.

<img src="${images.clothing.src}" alt="${images.clothing.alt}" width="${images.clothing.width}" height="${images.clothing.height}" />

## 2. Footwear: Comfort is Key 🩴
- **Flip-flops/Sliders:** For the beach and hotel.
- **Water Shoes (Aqua Shoes):** Highly recommended! Some beaches have dead corals that can cut your feet.
- **Walking Sandals/Sneakers:** For Cellular Jail, trekking to Elephant Beach, or exploring caves.
- **Leave behind:** High heels. They are useless in the sand and on jetties.

## 3. Toiletries & Health 🧴
- **Sunscreen:** SPF 50+ is non-negotiable. Please buy **Reef-Safe Sunscreen** to protect the corals.
- **Insect Repellent:** Mosquitoes can be active in the evenings.
- **Hair Care:** Humidity causes frizz. Bring your conditioner/serum.
- **Medication:** Motion sickness pills (for ferries), painkillers, band-aids, and any personal prescription meds.

<img src="${images.essentials.src}" alt="${images.essentials.alt}" width="${images.essentials.width}" height="${images.essentials.height}" />

## 4. Electronics & Gadgets 📷
- **Power Bank:** Essential for long days out.
- **Waterproof Phone Pouch:** For taking photos in the water.
- **Camera/GoPro:** If you have one, bring it!
- **Universal Adapter:** Most hotels have standard Indian plugs, but an adapter helps if you have multiple devices.
- **Downloaded Content:** Download maps, music, and movies offline.

## 5. Documents 📄
- **ID Proof:** Original Aadhaar/Voter ID/Passport (mandatory for ferries/hotels).
- **Permits:** If you are a foreign national, keep your passport and visa handy.
- **Tickets:** Printed copies or offline PDFs of flight and ferry tickets.

## What NOT to Bring ❌
- **Heavy Woolens:** You won't need them.
- **Expensive Jewelry:** Don't risk losing it in the ocean.
- **Single-use Plastic:** Andaman has a strict ban on plastic bags. Bring a reusable cloth bag and water bottle.

---
*Forgot something? Don't worry, Port Blair has a main market where you can buy most essentials. Check our [Shopping Guide](/blog/shopping-in-andaman-what-to-buy) for more.*
`,
};

export default post;
