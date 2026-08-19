import { Link } from 'react-router-dom';
import CardSlider from './CardSlider';
import HomeMediaCard from './HomeMediaCard';
import SectionIntro from './SectionIntro';
import { getDestinationImages } from '../lib/images';

const islands = [
  {
    name: 'Havelock Island',
    image: 'https://images.unsplash.com/photo-1453872302360-eed3c5f8ff66?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Radhanagar Beach, scuba, and the island most people come for.',
    link: '/destinations/havelock-destinations',
    rating: '4.9',
    activities: ['Scuba Diving', 'Beach Hopping', 'Kayaking'],
    slug: 'havelock-island',
  },
  {
    name: 'Neil Island',
    image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    desc: 'Natural Bridge at low tide, slower days, quieter beaches.',
    link: '/destinations/neil-destinations',
    rating: '4.8',
    activities: ['Glass Bottom Boat', 'Snorkeling', 'Sunset Views'],
    slug: 'neil-island',
  },
  {
    name: 'Port Blair',
    image: 'https://images.unsplash.com/photo-1630569688747-0e3b60f6430f?q=80&w=1214&auto=format&fit=crop',
    desc: 'Cellular Jail, the airport, and the ferry hub for the rest.',
    link: '/destinations/port-blair-destinations',
    rating: '4.7',
    activities: ['History Walk', 'Light & Sound', 'Museums'],
    slug: 'port-blair',
  },
];

const pickCardImage = (slug: string, fallback: string) => {
  const folderImages = getDestinationImages(slug);
  const specificCard = folderImages.find(
    (img) => img.toLowerCase().includes('card') && !img.toLowerCase().includes('hero_card')
  );
  const specificHeroCard = folderImages.find((img) => img.toLowerCase().includes('hero_card'));
  const specificHero = folderImages.find(
    (img) => img.toLowerCase().includes('hero') && !img.toLowerCase().includes('hero_card')
  );
  return specificCard || specificHeroCard || specificHero || folderImages[0] || fallback;
};

const PopularIslands = () => {
  return (
    <div className="container mx-auto px-4">
      <SectionIntro title="Popular" script="Islands">
        Havelock, Neil, and Port Blair — the three stops most itineraries use.
      </SectionIntro>

      <CardSlider showDots={true} autoScroll={false}>
        {islands.map((island, index) => (
          <HomeMediaCard
            key={island.slug}
            href={island.link}
            image={pickCardImage(island.slug, island.image)}
            title={island.name}
            description={island.desc}
            badge={`${island.rating} ★`}
            tags={island.activities}
            reverse={index % 2 === 1}
            delay={index * 0.08}
          />
        ))}
      </CardSlider>

      <div className="mt-5 text-center">
        <Link
          to="/destinations"
            className="inline-flex items-center gap-2 rounded-full bg-[#0a2740] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#041018]"
        >
          View all destinations
        </Link>
      </div>
    </div>
  );
};

export default PopularIslands;
