import { BlogPost } from '../../types/blog';
import { defaultAuthor } from './author';

export const post: BlogPost = {
  id: "hidden-andaman-facts-2026",
  slug: "hidden-andaman-facts-2026",
  title: "7 Hidden Facts Every 2026 Traveller Must Know",
  excerpt: "Going beyond the beaches? Here are 7 lesser-known facts and tips about Andaman that will save you money and enhance your 2026 trip.",
  image: 'https://images.pexels.com/photos/18505543/pexels-photo-18505543/free-photo-of-people-diving-underwater.jpeg?auto=compress&cs=tinysrgb&w=1200',
  category: "Travel Tips",
  author: defaultAuthor,
  date: "2025-12-18",
  readTime: "6 min read",
  tags: ["Travel Tips", "Hidden Gems", "Budget Hacks", "2026 Guide"],
  relatedPosts: ["andaman-budget-guide", "first-timers-guide-andaman-2026"],
  content: `
# 7 Hidden Facts for the Smart 2026 Traveller

Planning a trip to Andaman in 2026? You've probably read about the beaches and the ferries. But here are 7 hidden facts and local secrets that most guidebooks miss.

## 1. The "Plastic Ban" is Serious
Andaman has a strict no-plastic policy.
*   **Fact:** Plastic bottles under 750ml are banned.
*   **Tip:** Carry a reusable metal water bottle. You can refill it at hotels and RO stations.

## 2. Ferries > Seaplanes for reliability
While seaplanes are exciting (and back in 2026!), they are weather-dependent.
*   **Fact:** Ferries run in almost all weather conditions.
*   **Tip:** Always book a ferry as your primary transport and keep the seaplane as an "experience."

## 3. Early Sunrise (Really Early!)
Andaman is geographically closer to Thailand than mainland India.
*   **Fact:** The sun rises as early as 4:45 AM and sets by 5:15 PM.
*   **Tip:** Start your day early! If you sleep in til 8 AM, you've missed 3 hours of daylight.

## 4. The "Jarawa" Reserve is Restricted
You might cross the Jarawa tribal reserve while going to Baratang.
*   **Fact:** Photography is strictly prohibited and is a punishable offense.
*   **Tip:** Respect the law and the tribe. Keep your cameras packed away.

## 5. Bioluminescence is Best on New Moom
Everyone wants to see the glowing water.
*   **Fact:** You can't see it during a full moon.
*   **Tip:** Plan your Havelock trip around the **New Moon** phase for the best [kayaking experience](/experiences/bioluminescence-kayaking).

## 6. Pre-book Scuba, Not Snorkel
*   **Fact:** Scuba diving Slots are limited. Snorkeling can often be booked on the spot.
*   **Tip:** If you want to dive, book your slot weeks in advance.

## 7. Internet is Better, But Not Perfect
5G is here, but coverage spots exist.
*   **Fact:** BSNL and Airtel have the best coverage. Jio is catching up.
*   **Tip:** Download offline maps and your entertainment before you fly.

Knowing these little details can make the difference between a good trip and a great one!
  `,
  faq: [
    {
      question: "Can I bring my drone?",
      answer: "Drones are generally not allowed without specific permission from the DGCA and local administration due to security reasons."
    },
    {
      question: "Do I need a permit for Andaman?",
      answer: "Indian nationals do not need a permit. Foreign nationals no longer need a RAP (Restricted Area Permit) for 30 major islands, including Havelock and Neil."
    }
  ]
};

export default post;
