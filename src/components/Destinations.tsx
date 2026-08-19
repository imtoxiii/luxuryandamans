import CardSlider from './CardSlider';
import HomeMediaCard from './HomeMediaCard';
import SectionIntro from './SectionIntro';
import { destinations } from '../data/destinations';
import { getDestinationImages } from '../lib/images';

const formatCategory = (category: string) =>
  category.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

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

const Destinations = () => {
  return (
    <div className="container mx-auto px-4">
      <SectionIntro title="Explore" script="Paradise">
        Beaches, jetties, and the day trips between the islands.
      </SectionIntro>

      <CardSlider showDots={true} autoScroll={false}>
        {destinations.map((dest, index) => (
          <HomeMediaCard
            key={dest.slug}
            href={`/destinations/${dest.slug}`}
            image={pickCardImage(dest.slug, dest.image || '/images/placeholder-destination.jpg')}
            title={dest.name}
            description={dest.description}
            badge={formatCategory(dest.category)}
            tags={dest.activities}
            reverse={index % 2 === 1}
            delay={Math.min(index, 4) * 0.08}
          />
        ))}
      </CardSlider>
    </div>
  );
};

export default Destinations;
