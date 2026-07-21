export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqCategories = [
  { id: 'all', name: 'All topics' },
  { id: 'travel', name: 'Flights & ferries' },
  { id: 'permits', name: 'Permits & ID' },
  { id: 'booking', name: 'Booking packages' },
  { id: 'payment', name: 'Costs & payment' },
  { id: 'accommodation', name: 'Hotels & stay' },
  { id: 'activities', name: 'Things to do' },
  { id: 'safety', name: 'Safety & health' },
];

export const popularFaqIds = [
  'best-time-visit-andaman',
  'ferries-port-blair-havelock-neil',
  'indian-citizens-passport-andaman',
  'andaman-trip-cost',
  'is-andaman-safe',
  'foreign-tourist-documents',
  'how-many-days-andaman',
  'book-makruzz-ferry',
];

export const andamanFaqs: FAQItem[] = [
  {
    id: 'best-time-visit-andaman',
    category: 'travel',
    question: 'What is the best time to visit the Andaman Islands?',
    answer:
      'October to mid-May is the main season — calm seas, clear water, and reliable ferries. December through February is peak (book ferries and hotels early). March and April stay warm with fewer crowds. May gets humid; monsoon runs roughly June to September with ferry cancellations and rough seas on open-water routes.',
  },
  {
    id: 'reach-andaman-from-india',
    category: 'travel',
    question: 'How do I reach Andaman from mainland India?',
    answer:
      'Most travellers fly into Veer Savarkar International Airport (Port Blair) from Delhi, Mumbai, Bengaluru, Chennai, Kolkata, or Hyderabad — typically 2–3 hours. A passenger ship from Chennai, Kolkata, or Visakhapatnam is cheaper but takes 3–4 days each way and is only practical if you have plenty of time.',
  },
  {
    id: 'ferries-port-blair-havelock-neil',
    category: 'travel',
    question: 'How do ferries between Port Blair, Havelock, and Neil work?',
    answer:
      'Private catamarans (Makruzz, Nautika, Green Ocean) run fixed morning and afternoon slots. Government ferries are cheaper but slower and harder to book online. Match your flight landing time to the ferry — if you land after 11 AM, you often miss the same-day Havelock ferry. We include ferry coordination in our packages because a missed connection wastes a full day.',
  },
  {
    id: 'book-makruzz-ferry',
    category: 'travel',
    question: 'How do I book Makruzz or Nautika ferry tickets?',
    answer:
      'Book on the operator website or through a local agent who holds block seats in peak season. You need each passenger’s ID number and exact travel date. Tickets are non-refundable or carry a fee close to travel date. Reach Phoenix Bay Jetty (Port Blair) or Havelock/Neil jetties 45–60 minutes before departure with a printed or PDF ticket.',
  },
  {
    id: 'jetty-arrival-time-ferry',
    category: 'travel',
    question: 'How early should I reach the jetty for my ferry?',
    answer:
      'Arrive 45–60 minutes before departure for private catamarans; 90 minutes for government ferries during peak season. Security and bag checks add time. Missing check-in by even 10 minutes usually means losing your seat with no refund.',
  },
  {
    id: 'night-ferry-andaman',
    category: 'travel',
    question: 'Is there a night ferry from Port Blair to Havelock?',
    answer:
      'No regular night passenger ferry runs on the tourist route. All standard catamarans operate daytime slots only. Do not plan to land at Port Blair late evening and reach Havelock the same night — you will need a Port Blair hotel and a next-morning ferry.',
  },
  {
    id: 'havelock-neil-one-trip',
    category: 'travel',
    question: 'Can I visit Havelock and Neil Island in one trip?',
    answer:
      'Yes — most 5–7 day itineraries cover both. A common split is 2–3 nights on Havelock (Radhanagar, diving, Elephant Beach) and 1–2 nights on Neil (Bharatpur, Natural Bridge). You need separate tickets for Port Blair ↔ Havelock ↔ Neil ↔ Port Blair.',
  },
  {
    id: 'havelock-swaraj-dweep-name',
    category: 'travel',
    question: 'Is Havelock Island the same as Swaraj Dweep?',
    answer:
      'Yes. The island was officially renamed Swaraj Dweep in 2018 but almost everyone — ferry tickets, hotels, dive shops — still says Havelock. Your booking may show either name; it is the same place.',
  },
  {
    id: 'how-many-days-andaman',
    category: 'travel',
    question: 'How many days do I need for a first Andaman trip?',
    answer:
      'Minimum 4 nights / 5 days for Port Blair plus Havelock. A 5-night / 6-day trip adding Neil Island works well for first-timers. Divers or slow travellers often take 7–8 nights. Less than 4 nights feels rushed once flights and ferry timings are counted.',
  },
  {
    id: 'andaman-honeymoon',
    category: 'travel',
    question: 'Is Andaman good for a honeymoon?',
    answer:
      'Yes — Radhanagar sunsets, beach dinners, and boutique resorts on Havelock are popular with couples. Book honeymoon room categories early for December–January. We run dedicated honeymoon packages with ferry upgrades and private setups on request.',
  },
  {
    id: 'andaman-with-kids',
    category: 'travel',
    question: 'Is Andaman suitable for families with children?',
    answer:
      'Yes. Kids enjoy glass-bottom boats, shallow snorkelling at Elephant Beach, Ross Island, and calm beaches. Pick hotels with pools, carry motion-sickness medicine for ferries, and avoid long open-water days or Barren Island trips with very young children.',
  },
  {
    id: 'elderly-parents-andaman',
    category: 'travel',
    question: 'Can elderly parents travel to Andaman?',
    answer:
      'Yes, with sensible planning. Stick to Port Blair sightseeing and Radhanagar or Bharatpur beaches. Avoid rough boat days, Baratang convoys, and Barren Island. Book ground-floor rooms where possible and allow rest days between ferry travel.',
  },
  {
    id: 'what-to-pack-andaman',
    category: 'travel',
    question: 'What should I pack for an Andaman trip?',
    answer:
      'Light cotton clothes, swimwear, reef-safe sunscreen, hat, sunglasses, sandals plus walking shoes, insect repellent, waterproof pouch for phone, personal medicines, and photocopies of ID. Bring ferry printouts and hotel vouchers. A light rain jacket helps if travelling near monsoon.',
  },
  {
    id: 'monsoon-travel-andaman',
    category: 'travel',
    question: 'Is monsoon travel to Andaman worth it?',
    answer:
      'Only if you accept limited plans. Expect rain, choppy ferries, closed Jolly Buoy/Red Skin, and poor diving visibility June–September. Hotel rates drop and beaches are empty. First-time visitors who want the standard beach-and-ferry trip should avoid monsoon.',
  },
  {
    id: 'sim-card-andaman',
    category: 'travel',
    question: 'Which SIM card works best in Andaman?',
    answer:
      'Jio and Airtel have the widest coverage in Port Blair, Havelock, and Neil. Buy or activate before you fly — counters at Port Blair airport sometimes run out in peak season. BSNL works in Port Blair but is weaker on outer islands.',
  },
  {
    id: 'indian-citizens-passport-andaman',
    category: 'permits',
    question: 'Do Indian citizens need a passport for Andaman?',
    answer:
      'No. A government photo ID — Aadhaar, driving licence, voter ID, or passport — is enough for flights, hotels, and jetties. Carry a printed or PDF copy; some ferry counters still ask to see it.',
  },
  {
    id: 'foreign-tourist-documents',
    category: 'permits',
    question: 'What documents do foreign tourists need for Andaman?',
    answer:
      'A valid Indian visa (e-Visa or regular) and passport with six months validity. Most nationalities get a Restricted Area Permit (RAP) on arrival at Port Blair, valid 30 days for standard tourist islands. Citizens of Afghanistan, China, and Pakistan need prior clearance. Baratang requires a separate permit for foreigners, arranged through a registered operator.',
  },
  {
    id: 'baratang-permit-tourists',
    category: 'permits',
    question: 'Can tourists visit Baratang Island and the limestone caves?',
    answer:
      'Yes, on a day trip from Port Blair. Indians need only ID. Foreigners need a Baratang RAP arranged a day or two ahead. The morning convoy through the Jarawa reserve has fixed times — miss it and you miss the trip that day.',
  },
  {
    id: 'north-sentinel-tribal-areas',
    category: 'permits',
    question: 'Can tourists visit North Sentinel or tribal reserves?',
    answer:
      'No. North Sentinel and other protected tribal areas are strictly off-limits. Entry is illegal and dangerous. Visit only standard open tourist islands.',
  },
  {
    id: 'drone-camera-andaman',
    category: 'permits',
    question: 'Can I bring a drone to the Andaman Islands?',
    answer:
      'Drone rules are strict. Recreational drones are generally not permitted for tourists without defence/civil aviation clearance. Do not fly at beaches or jetties — confiscation and fines happen. For professional filming, apply for permits well in advance through official channels.',
  },
  {
    id: 'book-andaman-advance',
    category: 'booking',
    question: 'How far in advance should I book an Andaman package?',
    answer:
      'For December–January, book 4–8 weeks ahead for ferries and decent hotels. October–November and February–March often work with 2–3 weeks. Last-minute off-peak trips are possible but good ferry seats and rooms are not guaranteed.',
  },
  {
    id: 'package-inclusions',
    category: 'booking',
    question: 'What is included in your tour packages?',
    answer:
      'Typically: hotels, daily breakfast, Port Blair airport pickup, inter-island ferries (class as stated), and sightseeing transfers. Scuba, sea walk, Baratang, and premium ferry classes are add-ons unless listed. Every quote itemises inclusions before you pay.',
  },
  {
    id: 'cancellation-refund-policy',
    category: 'booking',
    question: 'What is your cancellation and refund policy?',
    answer:
      'Depends on how close you cancel to travel and whether ferries or hotels are already ticketed. Partial refunds are easier 15+ days out; within 7 days, operator cancellation charges usually apply. We send exact terms in writing before payment — no vague promises.',
  },
  {
    id: 'custom-private-trips',
    category: 'booking',
    question: 'Do you arrange customised private trips?',
    answer:
      'Yes — honeymoons, families, groups, and dive-focused trips. Send dates, budget, and must-do list via the enquiry form or WhatsApp (+91 62975 76826). We reply with a day-by-day plan and total cost.',
  },
  {
    id: 'airport-pickup-drop',
    category: 'booking',
    question: 'Do you provide airport pickup and drop?',
    answer:
      'Airport pickup in Port Blair is included in most packages. Drop is timed to your return flight. Share flight numbers when booking so we can allow for delays and jetty transfers.',
  },
  {
    id: 'payment-methods',
    category: 'payment',
    question: 'What payment methods do you accept?',
    answer:
      'UPI, bank transfer (NEFT/IMPS), and major Indian debit/credit cards. A booking advance secures ferries and hotels; balance is due before travel per your invoice. All quotes are in INR.',
  },
  {
    id: 'andaman-trip-cost',
    category: 'payment',
    question: 'How much does a typical Andaman trip cost?',
    answer:
      'Budget couples: roughly ₹18,000–28,000 per person for 4N/5D (standard hotels, shared ferries). Mid-range 5N/6D: ₹28,000–45,000. Luxury or honeymoon from ₹55,000 upward. Scuba, private ferries, and peak-season rates add on top. Use our cost calculator at luxuryandamans.com/calculator.',
  },
  {
    id: 'atm-upi-islands',
    category: 'payment',
    question: 'Are there ATMs and UPI on the islands?',
    answer:
      'Port Blair has ATMs and wide UPI acceptance. Havelock and Neil have limited ATMs — carry cash for autos, small shops, and beach shacks. Major hotels and dive centres take UPI or cards; do not rely on cards alone outside Port Blair.',
  },
  {
    id: 'gst-package-prices',
    category: 'payment',
    question: 'Is GST included in package prices?',
    answer:
      'Quotes state whether GST is included or added at 5% (tour operator rate). Invoices show base fare, GST, and add-ons separately. Business travellers can request a GST bill with our GSTIN.',
  },
  {
    id: 'travel-insurance-andaman',
    category: 'payment',
    question: 'Do I need travel insurance for Andaman?',
    answer:
      'Strongly recommended. Standard policies should cover medical evacuation, trip cancellation, and water activities if you plan to dive or snorkel. GB Pant Hospital in Port Blair handles emergencies but serious cases may need mainland transfer — that is expensive without insurance.',
  },
  {
    id: 'where-to-stay-port-blair-havelock-neil',
    category: 'accommodation',
    question: 'Should I stay in Port Blair, Havelock, or Neil?',
    answer:
      'Port Blair: arrival/departure nights plus Cellular Jail, Ross Island, North Bay. Havelock (Swaraj Dweep): best beaches and diving — most nights here on a typical trip. Neil (Shaheed Dweep): quieter, good for one or two nights. Most 5–6 day packages use all three.',
  },
  {
    id: 'wifi-mobile-data-andaman',
    category: 'accommodation',
    question: 'Is Wi-Fi and mobile data reliable?',
    answer:
      'Jio and Airtel work in Port Blair and main tourist areas on Havelock and Neil. Coverage drops on boats and remote beaches. Resort Wi-Fi handles messaging and email, not reliable video calls. Download offline maps and tickets before travel.',
  },
  {
    id: 'alcohol-andaman',
    category: 'accommodation',
    question: 'Is alcohol available in Andaman?',
    answer:
      'Yes, in licensed bars and restaurants in Port Blair and some Havelock resorts. Neil has fewer options. It is not sold on most public beaches — buy from hotels or shops in town if you want it in your room.',
  },
  {
    id: 'vegetarian-jain-food',
    category: 'accommodation',
    question: 'Are vegetarian and Jain meals available?',
    answer:
      'Port Blair and Havelock have veg restaurants; most resorts cook veg/Jain on request if you tell us at booking. Seafood dominates local menus — flag dietary needs when you enquire and we note every hotel.',
  },
  {
    id: 'scuba-beginners-safe',
    category: 'activities',
    question: 'Is scuba diving safe for beginners in Andaman?',
    answer:
      'Yes. Discover Scuba (no certification) runs daily at Havelock and Neil with PADI/SSI centres. You need basic swimming comfort, no serious breathing issues, and 24 hours without flying after a dive. Popular intro sites include Nemo Reef and Elephant Beach area.',
  },
  {
    id: 'snorkeling-vs-scuba',
    category: 'activities',
    question: 'Should I do snorkelling or scuba diving?',
    answer:
      'Snorkelling: cheaper (₹800–1,500), no training, see coral from the surface — good for half a day at Elephant Beach or Jolly Buoy. Scuba: go underwater with an instructor (Discover Scuba ₹3,500–6,000) or get certified over 3–4 days if you want deeper sites. Many travellers do both.',
  },
  {
    id: 'water-sports-prices',
    category: 'activities',
    question: 'What water sports are available and what do they cost?',
    answer:
      'Jet ski, parasailing, banana boat, snorkelling, sea walk, and glass-bottom boats at North Bay, Corbyn\'s Cove, and Elephant Beach. Rough 2026 prices: snorkelling ₹800–1,500, sea walk ₹3,500–4,500, discover scuba ₹3,500–6,000, parasailing ₹2,500–3,500. Book licensed operators, not random beach touts.',
  },
  {
    id: 'barren-island-volcano',
    category: 'activities',
    question: 'Can I visit Barren Island volcano?',
    answer:
      'You cannot land — it is an active volcano. Sightseeing boats run from Havelock or Port Blair in calm seas, usually October–April. Expect 6–8 hours round trip, open water, and ₹15,000+ per person on shared charters. Not for seasickness or tight schedules.',
  },
  {
    id: 'jolly-buoy-red-skin-open',
    category: 'activities',
    question: 'When is Jolly Buoy or Red Skin Island open?',
    answer:
      'Roughly mid-October to mid-May; closed in monsoon for coral recovery. Limited daily boats — book early in peak season. Closed Mondays and on government holidays.',
  },
  {
    id: 'bioluminescence-kayaking',
    category: 'activities',
    question: 'When can I see bioluminescence in Andaman?',
    answer:
      'On dark, moonless nights around Havelock and Mayabunder mangroves — plankton glow when disturbed. Best odds November–February. Weather-dependent; no operator can guarantee it every night.',
  },
  {
    id: 'radhanagar-elephant-beach-entry',
    category: 'activities',
    question: 'Do I need tickets for Radhanagar or Elephant Beach?',
    answer:
      'Radhanagar: no entry fee; public beach, roughly 6 AM–5 PM. Elephant Beach: reachable only by boat from Havelock jetty or a forest trek — book boats early in peak season. Water sports at Elephant Beach are paid on site.',
  },
  {
    id: 'best-beach-andaman',
    category: 'activities',
    question: 'Which is the best beach in Andaman?',
    answer:
      'Radhanagar Beach on Havelock is the most famous — wide, clean, good for swimming in season. Bharatpur (Neil) and Laxmanpur (Neil) are excellent and less crowded. Corbyn\'s Cove near Port Blair is convenient but busier.',
  },
  {
    id: 'cellular-jail-light-show',
    category: 'activities',
    question: 'What are Cellular Jail light and sound show timings?',
    answer:
      'Two shows most evenings — Hindi and English at different times (roughly 6:00 PM and 7:15 PM; confirm locally). Tickets sell out in peak season; buy same-day at the counter or through your hotel. Closed Mondays and some holidays.',
  },
  {
    id: 'rent-scooter-havelock',
    category: 'activities',
    question: 'Can I rent a scooter on Havelock without a licence?',
    answer:
      'Shops rent scooters with a valid driving licence — they usually photocopy it. Riding without a licence is illegal and insurance will not cover an accident. Roads are dark at night; plan to return before sunset.',
  },
  {
    id: 'solo-traveller-andaman',
    category: 'activities',
    question: 'Can solo travellers join group trips?',
    answer:
      'Yes. Solo travellers use fixed departures or shared transfers to cut cost. Havelock is easy alone if ferries are pre-booked in peak season. Our coordinator stays reachable on WhatsApp during your trip.',
  },
  {
    id: 'is-andaman-safe',
    category: 'safety',
    question: 'Is Andaman safe for tourists?',
    answer:
      'Andaman is among India\'s safer destinations — low street crime and a visible naval presence. Main risks are water-related: currents, seasickness, sunburn. Swim only in flagged zones, wear life jackets on boats, and heed crocodile warnings on Havelock\'s east coast.',
  },
  {
    id: 'hospitals-medical-andaman',
    category: 'safety',
    question: 'Are there hospitals if I need medical help?',
    answer:
      'GB Pant Hospital in Port Blair handles most emergencies. Havelock has a community health centre; Neil has basic care. Serious cases may need transfer to Port Blair or mainland. Carry personal meds and motion-sickness tablets.',
  },
  {
    id: 'safe-swimming-beaches',
    category: 'safety',
    question: 'Which beaches are safe for swimming?',
    answer:
      'Radhanagar (Havelock), Bharatpur (Neil), and Corbyn\'s Cove (Port Blair) are popular and generally calm in season. Avoid unmarked beaches, swimming after dark, and areas with crocodile or jellyfish warnings. Monsoon often shuts water activities entirely.',
  },
  {
    id: 'emergency-numbers-andaman',
    category: 'safety',
    question: 'What emergency numbers should I save?',
    answer:
      'Police: 100, Ambulance: 102, Fire: 101, Coast Guard: 1554, Tourist helpline: 1363. Save our coordinator (+91 62975 76826) before travel — we help with ferry delays and on-ground issues.',
  },
  {
    id: 'jellyfish-crocodile-warning',
    category: 'safety',
    question: 'Are jellyfish or crocodiles a problem in Andaman?',
    answer:
      'Jellyfish appear seasonally — look for warning flags and ask locals before entering water. Saltwater crocodiles exist in mangrove and east-coast areas; signboards mark unsafe zones on Havelock. Stick to busy swimming beaches in daylight.',
  },
  {
    id: 'ross-island-visit',
    category: 'activities',
    question: 'How do I visit Ross Island (Netaji Subhash Chandra Bose Dweep)?',
    answer:
      'Boats leave from Aberdeen Jetty in Port Blair every 30–60 minutes in season. Entry ticket plus optional light-and-sound show if you stay evening. Allow half a day — deer roam the ruins, paths are easy. Combine with North Bay on a same-day boat combo if time is short.',
  },
  {
    id: 'north-bay-half-day',
    category: 'activities',
    question: 'Is North Bay Island worth a half-day trip?',
    answer:
      'Yes for first-timers — glass-bottom boat, snorkelling, and sea walk in one place, 20 minutes by boat from Port Blair. Crowded midday; go early. Often paired with Ross Island in a morning tour.',
  },
  {
    id: 'duty-free-port-blair',
    category: 'payment',
    question: 'Is there duty-free shopping at Port Blair airport?',
    answer:
      'A small duty-free shop exists at Veer Savarkar airport for departing passengers — limited spirits and souvenirs. Do not count on it for essentials; buy sunscreen and meds in Port Blair town before island hopping.',
  },
  {
    id: 'photography-rules-beaches',
    category: 'permits',
    question: 'Are there photography restrictions on Andaman beaches?',
    answer:
      'Casual tourist photos are fine on open beaches and tourist sites. Do not photograph military installations, naval ships, airports, or checkpoints. Drones need separate clearance — see our drone FAQ above.',
  },
];

export const FAQ_HERO_IMAGE =
  'https://images.pexels.com/photos/12920835/pexels-photo-12920835.jpeg?auto=compress&cs=tinysrgb&w=1920';

export function getFaqsByCategory(categoryId: string): FAQItem[] {
  if (categoryId === 'all') return andamanFaqs;
  return andamanFaqs.filter((f) => f.category === categoryId);
}

export function getCategoryLabel(categoryId: string): string {
  return faqCategories.find((c) => c.id === categoryId)?.name ?? categoryId;
}
