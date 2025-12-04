import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, ArrowRight, Compass, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { destinations } from '../data/destinations';
import destinationImagesData from '../data/destinationImages.json';

const Destinations = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getDestinationImage = (dest: any) => {
    const images = (destinationImagesData as Record<string, string[]>)[dest.slug] || [];

    // Priority: card.jpg -> hero_card.jpg -> any image with 'card' -> first image -> legacy dest.image
    const cardImage = images.find(img => img.toLowerCase().endsWith('card.jpg'));
    const heroCardImage = images.find(img => img.toLowerCase().includes('hero_card'));
    const anyCardImage = images.find(img => img.toLowerCase().includes('card'));

    if (cardImage) return cardImage;
    if (heroCardImage) return heroCardImage;
    if (anyCardImage) return anyCardImage;
    if (images.length > 0) return images[0];

    if (dest.image) return dest.image;

    // Fallback placeholder
    return 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=800&q=80';
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900" ref={containerRef}>
      <SEO
        title="Destinations - Andaman Islands | Luxury Travel Guide"
        description="Explore the most beautiful destinations in the Andaman Islands. From Havelock to Neil Island, discover paradise with our curated travel guides."
        keywords="andaman destinations, havelock island, neil island, port blair, baratang, luxury travel andaman"
        pathname="/destinations"
      />
      <Header />

      {/* Modern Hero Section with Parallax */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-10" />
          <img
            src="https://images.pexels.com/photos/10945169/pexels-photo-10945169.jpeg"
            alt="Destinations Hero"
            className="w-full h-full object-cover scale-110"
          />
        </motion.div>

        <div className="container mx-auto px-4 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-8 shadow-lg">
              <Compass className="w-4 h-4 text-cyan-300" />
              <span className="text-sm font-bold tracking-widest uppercase">Explore the Archipelago</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-tight drop-shadow-2xl font-display">
              Discover Our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-blue-200 to-white">Paradise Islands</span>
            </h1>

            <p className="text-lg md:text-2xl text-gray-100 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md">
              From the pristine beaches of Havelock to the historic shores of Port Blair,
              explore the diverse beauty of the Andaman Islands.
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/80"
        >
          <span className="text-xs uppercase tracking-widest">Scroll to Explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 lg:py-32 bg-white relative">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {destinations.map((dest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`${index % 3 === 0 ? 'md:col-span-2' : 'md:col-span-1'}`}
              >
                <Link
                  to={`/destinations/${dest.slug}`}
                  className="group block relative rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-gray-900 h-full"
                >
                  <div className={`relative ${index % 3 === 0 ? 'h-[500px] md:h-[650px]' : 'h-[500px]'} overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
                    <img
                      src={getDestinationImage(dest)}
                      alt={dest.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=800&q=80';
                      }}
                    />

                    {/* Floating Badge */}
                    <div className="absolute top-8 left-8 z-20">
                      <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                        <MapPin className="w-4 h-4 text-cyan-300" />
                        <span className="text-sm font-bold tracking-wide uppercase">{dest.name}</span>
                      </div>
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="max-w-3xl">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display leading-tight">
                          {dest.name}
                        </h2>
                        <p className="text-gray-200 text-lg md:text-xl mb-8 line-clamp-2 group-hover:line-clamp-none transition-all duration-500 font-light leading-relaxed">
                          {dest.description}
                        </p>

                        <div className="flex flex-wrap gap-3 mb-10">
                          {dest.activities.slice(0, 4).map((activity, i) => (
                            <span
                              key={i}
                              className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-medium border border-white/10 group-hover:bg-white/20 transition-colors flex items-center gap-2"
                            >
                              <Star className="w-3 h-3 text-cyan-300" />
                              {activity}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-4 text-white font-bold tracking-wide group/btn w-fit">
                          <span className="text-lg border-b-2 border-transparent group-hover/btn:border-cyan-300 transition-all duration-300">Explore Destination</span>
                          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-blue-900 transition-all duration-300">
                            <ArrowRight className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Destinations;