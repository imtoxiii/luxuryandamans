import type { Hotel, ItineraryDay } from './packages';

export const day = (
  n: number,
  title: string,
  location: string,
  description: string,
  activities: string[],
  sightseeing: string[],
  hotel?: Hotel,
  meals: string[] = ['Breakfast']
): ItineraryDay => ({
  day: `Day ${n}`,
  title,
  description,
  activities,
  sightseeing,
  hotel,
  meals,
  location,
});

export const arrivalPortBlair = (n: number, hotel: Hotel, extras: string[] = []): ItineraryDay =>
  day(
    n,
    'Arrival & Cellular Jail',
    'Port Blair',
    'Warm welcome at Veer Savarkar Airport, hotel transfer, then Corbyn’s Cove and the historic Cellular Jail. Evening Light & Sound Show.',
    [
      'Meet-and-greet at Port Blair Airport and private transfer to the hotel',
      'Check-in, freshen up, and a short rest after the flight',
      'Corbyn’s Cove Beach — coconut palms, a swim if the tide is kind',
      'Guided visit to Cellular Jail National Memorial',
      'Light & Sound Show at Cellular Jail (English / Hindi as scheduled)',
      ...extras,
    ],
    ['Cellular Jail', 'Corbyn’s Cove Beach', 'Light & Sound Show'],
    hotel,
    ['Welcome drink']
  );

export const havelockBeaches = (n: number, hotel: Hotel, photoshoot = false): ItineraryDay =>
  day(
    n,
    'Cruise to Havelock · Kalapathar & Radhanagar',
    'Havelock Island',
    'Morning cruise to Swaraj Dweep. Check into the resort, then Kalapathar’s turquoise water and sunset at Radhanagar — still the beach most guests come for.',
    [
      'Early hotel checkout and transfer to the jetty',
      'Private cruise to Havelock Island (Makruzz / Nautika or similar)',
      'Resort check-in and lunch break',
      'Kalapathar Beach — black rocks, clear water, photographs',
      'Radhanagar Beach (Beach No. 7) for a long sunset',
      ...(photoshoot ? ['Complimentary couple photoshoot on Radhanagar sand'] : []),
    ],
    ['Kalapathar Beach', 'Radhanagar Beach'],
    hotel
  );

export const elephantBeach = (n: number, hotel: Hotel, scuba = false): ItineraryDay =>
  day(
    n,
    'Elephant Beach · Reefs & Water',
    'Havelock Island',
    'Speedboat to Elephant Beach — the island’s water-sports pocket. Snorkel the near-shore reef, then a free afternoon back at the resort.',
    [
      'Speedboat to Elephant Beach (weather permitting)',
      'Complimentary snorkeling on the house reef',
      ...(scuba
        ? ['Scuba session with a certified instructor — photos included for the pair']
        : ['Optional scuba, sea walk, or jet ski on the beach (pay on spot or as a supplement)']),
      'Kayaking for two at Elephant Beach (when sea state allows)',
      'Return to the resort by early afternoon — cafés, pool, or a nap',
    ],
    ['Elephant Beach', 'House reef snorkeling'],
    hotel
  );

export const neilArrival = (n: number, hotel: Hotel): ItineraryDay =>
  day(
    n,
    'Ferry to Neil · Bharatpur & Laxmanpur',
    'Neil Island',
    'Coastal cruise to Shaheed Dweep. Bharatpur for corals and a swim; Laxmanpur for a wide, quiet sunset.',
    [
      'Checkout and ferry from Havelock to Neil Island',
      'Resort check-in and a slow lunch',
      'Bharatpur Beach — swimming and coral viewing (glass-bottom optional)',
      'Sunset walk at Laxmanpur Beach',
    ],
    ['Bharatpur Beach', 'Laxmanpur Beach'],
    hotel
  );

export const neilToPortBlair = (n: number, hotel: Hotel, chidiya = true): ItineraryDay =>
  day(
    n,
    chidiya ? 'Natural Bridge · Return to Port Blair · Chidiya Tapu' : 'Natural Bridge · Return to Port Blair',
    'Port Blair',
    chidiya
      ? 'Low-tide walk to the Natural Rock Bridge, ferry back to Port Blair, then Chidiya Tapu for one of the island’s best sunsets.'
      : 'Morning at the Natural Rock Bridge, then the return ferry to Port Blair and an easy evening in town.',
    [
      'Natural Rock Bridge (Howrah Bridge) at low tide',
      'Ferry Neil → Port Blair',
      'Hotel check-in in Port Blair',
      ...(chidiya
        ? ['Chidiya Tapu — mangroves, birds, and sunset at the southern tip']
        : ['Sagarika emporium / local market if time remains']),
    ],
    chidiya ? ['Natural Rock Bridge', 'Chidiya Tapu'] : ['Natural Rock Bridge'],
    hotel
  );

export const rossNorthBay = (n: number, hotel: Hotel): ItineraryDay =>
  day(
    n,
    'Ross Island & North Bay',
    'Port Blair',
    'Boat to Netaji Subhash Chandra Bose Island (Ross) for colonial ruins, deer and peacocks, then North Bay for corals and optional water sports.',
    [
      'Morning boat to Ross Island — ruins, church, deer, peacocks',
      'North Bay Island (Coral Island) — snorkel or glass-bottom from the beach',
      'Optional scuba / sea walk / semi-submarine at extra cost',
      'Return to Port Blair — markets or a quiet hotel evening',
    ],
    ['Ross Island', 'North Bay Island'],
    hotel
  );

export const baratang = (n: number, hotel: Hotel): ItineraryDay =>
  day(
    n,
    'Baratang · Mangroves & Limestone Caves',
    'Baratang',
    'Full-day road-and-boat run through the Jarawa reserve forest. Mangrove creek, a short forest walk, limestone caves, and the mud volcano before the evening return.',
    [
      'Very early start from Port Blair (convoy timing is government-set)',
      'Drive through the reserve forest corridor',
      'Fibre-boat mangrove safari',
      'Walk to the limestone caves — stalactites and stalagmites',
      'Mud volcano stop if the site is open',
      'Return to Port Blair by evening',
    ],
    ['Limestone Caves', 'Mangrove creek', 'Mud volcano'],
    hotel
  );

export const jollyBuoy = (n: number, hotel: Hotel): ItineraryDay =>
  day(
    n,
    'Jolly Buoy & Wandoor',
    'Port Blair',
    'Boat from Wandoor into Mahatma Gandhi Marine National Park. Jolly Buoy for corals and a swim (plastic-free island — bags stay on the mainland), then a quiet hour on Wandoor Beach.',
    [
      'Transfer to Wandoor jetty',
      'Boat to Jolly Buoy Island (park ticket included; closed some days — Red Skin is the alternate)',
      'Snorkeling / coral viewing in clear water',
      'Wandoor Beach on the way back',
      'Evening at the hotel',
    ],
    ['Jolly Buoy Island', 'Wandoor Beach'],
    hotel
  );

export const departureDay = (n: number, extra = true): ItineraryDay =>
  day(
    n,
    'Departure',
    'Port Blair',
    extra
      ? 'Checkout and airport transfer. If the flight is late, a museum hour — Anthropological, Samudrika, or Fisheries — before you leave.'
      : 'Checkout and private transfer to Veer Savarkar Airport.',
    [
      'Breakfast and hotel checkout',
      ...(extra
        ? ['Optional: Anthropological / Samudrika / Fisheries Museum if the flight is after noon']
        : []),
      'Private transfer to Port Blair Airport',
    ],
    extra ? ['Airport transfer', 'Optional museums'] : ['Airport transfer'],
    undefined,
    ['Breakfast']
  );

export const elephantBeachThenReturn = (n: number, hotel: Hotel): ItineraryDay =>
  day(
    n,
    'Elephant Beach · ferry back to Port Blair',
    'Port Blair',
    'Morning speedboat to Elephant Beach for snorkeling, then the afternoon ferry back to Port Blair. Evening free for a market walk or an early night before the flight.',
    [
      'Morning speedboat to Elephant Beach',
      'Complimentary snorkeling on the house reef',
      'Return to Havelock jetty and afternoon ferry to Port Blair',
      'Hotel check-in in town',
      'Optional Aberdeen Bazaar / Sagarika stop',
    ],
    ['Elephant Beach', 'Port Blair'],
    hotel
  );

export const returnMuseumMarina = (n: number, hotel: Hotel): ItineraryDay =>
  day(
    n,
    'Return to Port Blair · Fisheries Museum & Marina Park',
    'Port Blair',
    'Checkout on Havelock and cruise back. Afternoon at the Fisheries Museum, then Marina Park for the coastal breeze — a gentler Port Blair day before Jolly Buoy or Ross.',
    [
      'Breakfast and checkout on Havelock',
      'Ferry Havelock → Port Blair',
      'Hotel check-in',
      'Fisheries Museum — endemic marine life of the islands',
      'Evening at Marina Park',
    ],
    ['Fisheries Museum', 'Marina Park'],
    hotel
  );

export const chidiyaReturn = (n: number, hotel: Hotel): ItineraryDay =>
  day(
    n,
    'Return to Port Blair · Chidiya Tapu sunset',
    'Port Blair',
    'Morning at leisure on Havelock, afternoon ferry back, then Chidiya Tapu for mangroves and a last proper sunset.',
    [
      'Leisure morning at the Havelock resort',
      'Afternoon ferry to Port Blair',
      'Hotel check-in',
      'Chidiya Tapu Beach and sunset point',
    ],
    ['Chidiya Tapu'],
    hotel
  );
