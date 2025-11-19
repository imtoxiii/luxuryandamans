
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import CardSlider from './CardSlider';
import { destinations } from '../data/destinations';

const Destinations = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute top-40 -left-20 w-72 h-72 bg-cyan-50 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 mb-6">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-bold tracking-wide uppercase">Popular Locations</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-display tracking-tight">
            Explore Paradise
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            From the pristine beaches of Havelock to the historic shores of Port Blair, discover the gems of the Andaman archipelago.
          </p>
        </motion.div>

        <div className="relative">
          <CardSlider showDots={true} autoScroll={false}>
            {destinations.map((dest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full px-2 py-4"
              >
                <Link
                  to={`/destinations/${dest.slug}`}
                  className="group block h-full relative bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                >
                  {/* Image Section */}
                  <div className="relative h-[400px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />

                    {/* Floating Badge */}
                    <div className="absolute top-6 left-6 z-20">
                      <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg">
                        <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-bold uppercase tracking-wider">Top Rated</span>
                      </div>
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-white font-bold text-3xl mb-3 font-display leading-tight">{dest.name}</h3>
                      <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {dest.activities.slice(0, 3).map((activity, i) => (
                          <span key={i} className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium border border-white/10">
                            {activity}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-white/90 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        <span>Explore Destination</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </CardSlider>
        </div>
      </div>
    </div>
  );
};

export default Destinations;