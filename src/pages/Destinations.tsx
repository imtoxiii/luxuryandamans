import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { destinations } from '../data/destinations';

const Destinations = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-blue-100 selection:text-blue-900">
      <SEO
        title="Destinations - Andaman Islands"
        description="Explore the most beautiful destinations in the Andaman Islands. From Havelock to Neil Island, discover paradise."
        keywords="andaman destinations, havelock island, neil island, port blair, baratang"
        pathname="/destinations"
      />
      <Header />

      {/* Modern Hero Section with Parallax */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-gray-50 z-10" />
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Destinations Hero"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-6">
              <Compass className="w-4 h-4 text-blue-300" />
              <span className="text-sm font-medium tracking-wide uppercase">Explore the Archipelago</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight drop-shadow-lg font-display">
              Discover Our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">Paradise Islands</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-light">
              From the pristine beaches of Havelock to the historic shores of Port Blair,
              explore the diverse beauty of the Andaman Islands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 bg-white relative">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        <div className="container mx-auto px-4">
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
                  className="group block relative rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-gray-900"
                >
                  <div className={`relative ${index % 3 === 0 ? 'h-[500px] md:h-[600px]' : 'h-[500px]'} overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />

                    {/* Floating Badge */}
                    <div className="absolute top-8 left-8 z-20">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm font-bold tracking-wide uppercase">{dest.name}</span>
                      </div>
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="max-w-3xl">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display leading-tight">
                          {dest.name}
                        </h2>
                        <p className="text-gray-200 text-lg mb-8 line-clamp-2 group-hover:line-clamp-none transition-all duration-500 font-light">
                          {dest.description}
                        </p>

                        <div className="flex flex-wrap gap-3 mb-8">
                          {dest.activities.slice(0, 4).map((activity, i) => (
                            <span
                              key={i}
                              className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium border border-white/10 group-hover:bg-white/20 transition-colors"
                            >
                              {activity}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-3 text-white font-semibold tracking-wide group/btn w-fit">
                          <span className="border-b-2 border-transparent group-hover/btn:border-white transition-all duration-300">Explore Destination</span>
                          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-blue-900 transition-all duration-300">
                            <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-0.5 transition-transform" />
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