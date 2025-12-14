import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import CardSlider from './CardSlider';
import { getDestinationImages } from '../lib/images';

const islands = [
  {
    name: 'Havelock Island',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    desc: 'Home to Radhanagar Beach & scuba diving paradise.',
    link: '/destinations/havelock-destinations',
    rating: '4.9',
    activities: ['Scuba Diving', 'Beach Hopping', 'Kayaking']
  },
  {
    name: 'Neil Island',
    image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    desc: 'Serene beaches, natural bridges & relaxed vibes.',
    link: '/destinations/neil-destinations',
    rating: '4.8',
    activities: ['Glass Bottom Boat', 'Snorkeling', 'Sunset Views']
  },
  {
    name: 'Port Blair',
    image: 'https://images.unsplash.com/photo-1630569688747-0e3b60f6430f?q=80&w=1214&auto=format&fit=crop',
    desc: 'Historic Cellular Jail, museums & gateway to islands.',
    link: '/destinations/port-blair-destinations',
    rating: '4.7',
    activities: ['History Walk', 'Light & Sound', 'Museums']
  }
];

const PopularIslands = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3 block">Island Hopping</span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
          Popular Islands
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Explore the three jewels of the Andaman archipelago, each offering a unique tropical experience.
        </p>
      </div>

      <div className="relative">
        <CardSlider showDots={true} autoScroll={false}>
          {islands.map((island, index) => {
            // Map island names to slugs for image lookup
            const slugMap: Record<string, string> = {
              'Havelock Island': 'havelock-island',
              'Neil Island': 'neil-island',
              'Port Blair': 'port-blair'
            };
            const slug = slugMap[island.name];
            const folderImages = slug ? getDestinationImages(slug) : [];
            
            // Card Image Priority: 'card' -> 'hero_card' -> 'hero' -> First available
            const specificCard = folderImages.find(img => img.toLowerCase().includes('card') && !img.toLowerCase().includes('hero_card'));
            const specificHeroCard = folderImages.find(img => img.toLowerCase().includes('hero_card'));
            const specificHero = folderImages.find(img => img.toLowerCase().includes('hero') && !img.toLowerCase().includes('hero_card'));
            
            const cardImage = specificCard || specificHeroCard || specificHero || folderImages[0] || island.image;

            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full px-2 py-4"
            >
              <Link
                to={island.link}
                className="group block h-full bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                {/* Image Section */}
                <div className="relative h-[300px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  <img
                    src={cardImage}
                    alt={island.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />

                  {/* Floating Badge */}
                  <div className="absolute top-6 left-6 z-20">
                    <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg">
                      <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-bold uppercase tracking-wider">{island.rating} Rating</span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 relative">
                  <div className="absolute -top-10 right-8 w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 z-20 rotate-3 group-hover:rotate-6">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 font-display group-hover:text-blue-600 transition-colors">
                    {island.name}
                  </h3>
                  
                  <p className="text-gray-500 mb-6 line-clamp-2 font-medium">
                    {island.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {island.activities.map((activity, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wide">
                        {activity}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-blue-600 font-bold group/btn">
                    <span className="group-hover/btn:underline">Explore Island</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
            );
          })}
        </CardSlider>
      </div>
    </div>
  );
};

export default PopularIslands;
