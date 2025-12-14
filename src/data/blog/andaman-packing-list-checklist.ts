import { BlogPost } from '../../types/blog';
import { defaultAuthor } from './author';

export const post: BlogPost = {
    id: "andaman-packing-list-checklist",
    slug: "andaman-packing-list-checklist",
    title: "The Ultimate Andaman Packing List: Printable Checklist (2026)",
    excerpt: "Don't overpack! Here is the exact list of what you need for a 5-7 day trip to Andaman, including the one item everyone forgets.",
    image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    category: "Travel Tips",
    author: defaultAuthor,
    date: "2026-02-20",
    readTime: "6 min read",
    tags: ["Packing List", "Travel Tips", "Essentials", "Sustainable Travel"],
    relatedPosts: ["what-to-pack-for-andaman-trip", "sustainable-packing-list-2026"],
    content: `
# Pack Light, Pack Right

Andaman is hot, humid, and casual. You do not need heels. You do not need a suit.

Here is the only checklist you need.

## The "Must-Haves" (Do Not Forget These)

*   [ ] **Sunscreen (Reef Safe):** SPF 50+. The sun here is brutal. Please buy "Reef Safe" sunscreen (Oxybenzone-free) to protect the corals.
*   [ ] **Sunglasses:** Polarized ones are best to see the colors of the water.
*   [ ] **Hat/Cap:** Essential for boat rides.
*   [ ] **Flip Flops:** You will live in these.
*   [ ] **Waterproof Phone Pouch:** For kayaking and beach days.
*   [ ] **Power Bank:** For long ferry rides and occasional power cuts.
*   [ ] **Cash:** ATMs in Havelock/Neil run out of cash often. Carry ₹5,000 - ₹10,000 in cash.

## Clothing Checklist (For 6 Days)

*   [ ] **Swimwear:** 2 pairs. Things take time to dry here.
*   [ ] **Cotton T-shirts/Tops:** 4-5. Breathable fabrics are key.
*   [ ] **Shorts/Skirts:** 3 pairs.
*   [ ] **Light Jacket/Shrug:** For the AC on the ferry (it gets freezing!).
*   [ ] **Dinner Outfit:** 1 nice dress or shirt for a candlelight dinner. (Think "Tropical Chic", not formal).
*   [ ] **Undergarments:** Pack extra. You'll shower twice a day.

## Toiletries & Meds

*   [ ] **Mosquito Repellent:** Odomos or similar. Essential for evenings.
*   [ ] **Motion Sickness Pills:** For the ferry ride if you get seasick.
*   [ ] **Hair Conditioner:** The salt water will make your hair frizzy.
*   [ ] **Sanitizer & Wet Wipes.**

## Documents

*   [ ] **ID Proof:** Aadhar/Voter ID/Passport (Originals required for ferry/hotel).
*   [ ] **Ferry Tickets:** Downloaded on your phone (offline).
*   [ ] **Hotel Vouchers.**

## What NOT To Bring

*   **Plastic Bags:** Andaman has a strict ban on single-use plastic bags. Bring a cloth tote bag instead.
*   **Heavy Jeans:** You will regret wearing denim in 85% humidity.
*   **Heels/Boots:** Sand gets everywhere. Stick to flats or sandals.
*   **Drone:** You need special permission to fly drones in many areas. It's often more hassle than it's worth unless you are a pro.

## Sustainable Travel Tip 🌿
Bring a **refillable water bottle**. Most hotels and resorts have RO water dispensers. This saves you money and saves the island from plastic bottle waste.

> **The "One Item Everyone Forgets":** A **Dry Bag** (5L or 10L). It keeps your electronics, wallet, and clothes dry when you are on a small boat or kayaking. You can buy one in Port Blair if you forget.
  `,
    faq: [
        {
            question: "Can I buy clothes in Andaman?",
            answer: "Yes, there are market stalls in Havelock and Port Blair selling beachwear, hats, and flip-flops. But branded items are limited."
        },
        {
            question: "Is there a dress code for temples/jail?",
            answer: "Yes. When visiting Cellular Jail or local temples, dress modestly (shoulders and knees covered)."
        }
    ]
};

export default post;
