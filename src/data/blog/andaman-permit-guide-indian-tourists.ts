import { BlogPost } from '../../types/blog';
import { defaultAuthor } from './author';

const slug = 'andaman-permit-guide-indian-tourists';
const imagePath = `/blog-assets/${slug}/`;

const images = {
  main: {
    src: `${imagePath}immigration-check-andaman.jpg`,
    alt: 'Tourists at the immigration check post in Port Blair airport',
    width: 1200,
    height: 800,
  },
  permit: {
    src: `${imagePath}rap-permit-document.jpg`,
    alt: 'Sample of the Restricted Area Permit (RAP) document',
    width: 800,
    height: 533,
  },
  airport: {
    src: `${imagePath}veer-savarkar-airport.jpg`,
    alt: 'Veer Savarkar International Airport terminal entrance',
    width: 800,
    height: 533,
  },
};

const post: BlogPost = {
  id: 'andaman-permit-guide-indian-tourists',
  title: 'Do Indians Need a Passport for Andaman? Permit Guide 2025',
  slug: 'andaman-permit-guide-indian-tourists',
  excerpt:
    'Confused about entry formalities? We clear up all doubts about passports, visas, and the Restricted Area Permit (RAP) for Indian and Foreign tourists visiting Andaman.',
  image: images.main.src,
  author: defaultAuthor,
  date: new Date().toISOString(),
  readTime: '4 min read',
  category: 'Travel Tips',
  tags: [
    'andaman permit for indian tourists',
    'do indians need passport for andaman',
    'rap permit andaman',
    'entry formalities andaman',
    'foreign tourists andaman visa',
    'travel documents andaman',
  ],
  relatedPosts: ['how-to-reach-andaman-flight-vs-ship', 'is-andaman-safe-for-tourists', 'andaman-best-time'],
  faq: [
    {
      question: 'Do Indian citizens need a passport for Andaman?',
      answer:
        '**No.** Andaman & Nicobar Islands are a part of India. Indian citizens do not need a passport or a visa. A valid government ID (Aadhaar, Voter ID, Driving License, etc.) is sufficient.'
    },
    {
      question: 'Do Foreign nationals need a permit?',
      answer:
        'As of recent changes, the **RAP (Restricted Area Permit) requirement has been eased** for citizens of most countries for visiting 30 inhabited islands. However, they must have a valid Indian Visa. They will need to register at the immigration counter at Port Blair airport.'
    },
    {
      question: 'What is the RAP (Restricted Area Permit)?',
      answer:
        'It was a special permit required for foreigners. Now, for 30 tourist islands (like Havelock, Neil), it is no longer required. However, for visiting reserved tribal areas or Nicobar islands, special permissions are still needed (and usually not granted to tourists).'
    },
    {
      question: 'Can I visit the Nicobar Islands?',
      answer:
        '**No.** The Nicobar group of islands is strictly reserved for tribal welfare and is off-limits to tourists (both Indian and Foreign), except for specific purposes like research with government clearance.'
    },
    {
      question: 'Do I need a permit for Jolly Buoy or Red Skin Island?',
      answer:
        'Yes. These islands fall under the Mahatma Gandhi Marine National Park. A forest permit is required, which your tour operator usually arranges for you a day in advance.'
    }
  ],
  content: `
## The "Passport" Confusion 🛂

We get this question almost every day: *"I am an Indian citizen. Do I need a passport to visit Andaman?"*

The answer is a resounding **NO**.

The Andaman and Nicobar Islands are a Union Territory of India. Flying from Delhi to Port Blair is legally the same as flying from Delhi to Mumbai. There is no international border crossing.

---

## Documents Required for Indian Citizens 🇮🇳
You just need to carry a valid Government-issued Photo ID.
- **Accepted IDs:** Aadhaar Card, Voter ID, Driving License, Passport, or PAN Card.
- **For Children:** School ID or Birth Certificate (if they don't have Aadhaar).
- **Why is it needed?** You will need to show ID at the airport, at hotel check-ins, and before boarding ferries/ships.

<img src="${images.airport.src}" alt="${images.airport.alt}" width="${images.airport.width}" height="${images.airport.height}" />

---

## Rules for Foreign Nationals 🌍
If you are not an Indian citizen (holding a foreign passport), the rules are slightly different.

### 1. Indian Visa
You must have a valid **Indian Visa** (Tourist Visa, e-Visa, etc.) to enter India.

### 2. Restricted Area Permit (RAP) - *Update 2025*
Good news! The Government of India has **removed the RAP requirement** for foreigners visiting the 30 popular tourist islands (including Port Blair, Havelock, Neil, Baratang, etc.).
- **What you need to do:** Upon arrival at Port Blair airport, proceed to the Immigration Counter. They will verify your visa and stamp your passport for entry into the islands.
- **Duration:** Usually allowed for 30 days, extendable by another 15 days.

### 3. Citizens of Specific Countries
Citizens of Pakistan, China, and Afghanistan may have additional prior clearance requirements. It is best to check with the Indian embassy in your country before booking.

---

## Special Permits for Specific Islands 🏝️
Even for Indians, some specific islands require a local forest permit because they are protected marine parks.
- **Jolly Buoy / Red Skin:** Requires a forest permit (issued one day prior).
- **Ross & Smith Islands (Diglipur):** Requires a forest permit.
- **Baratang (Limestone Caves):** Passing through the tribal reserve requires a convoy permit (arranged by your driver).

**Don't worry:** If you book a package with us, **we handle all these local permits for you.** You just need to enjoy the ride!

<img src="${images.permit.src}" alt="${images.permit.alt}" width="${images.permit.width}" height="${images.permit.height}" />

---

## Summary
- **Indians:** No Passport. Just Aadhaar/ID.
- **Foreigners:** Passport + Indian Visa. (RAP is mostly relaxed).
- **Nicobar Islands:** No Entry for tourists.

---
*Have more questions about travel logistics? Read our [FAQs](/faq) or [Contact our experts](/contact).*
`,
};

export default post;
