import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CardSlider from './CardSlider';
import { destinations } from '../data/destinations';

const Destinations = () => {
  return (
    <section className="bg-pearl">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title-spacing text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-night mb-4">
            Popular Destinations
          </h2>
          <p className="text-night/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Explore our carefully curated selection of the most breathtaking locations
          </p>
        </motion.div>

        <div className="section-content-spacing">
          <CardSlider showDots={true} autoScroll={false}>
            {destinations.map((dest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full"
              >
                <Link 
                  to={`/destinations/${dest.slug}`}
                  className="card-modern group h-full flex flex-col min-h-[500px] md:min-h-[550px] block"
                >
                  <div className="relative h-64 md:h-72 overflow-hidden flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-night/60 via-night/20 to-transparent 
                                   group-hover:from-night/70 group-hover:via-night/30 transition-all duration-500 z-10" />
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      draggable="false"
                    />
                    <div className="absolute top-4 left-4 glass-sunset-badge px-3 py-2  
                                   flex items-center z-20 font-medium shadow-lg group-hover:scale-105 transition-transform duration-500">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{dest.name}</span>
                    </div>
                  </div>
                  
                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <h3 className="text-xl md:text-2xl font-bold text-night mb-3 group-hover:text-azure 
                                  transition-colors duration-300 leading-tight">
                      {dest.name}
                    </h3>
                    <p className="text-night/70 text-sm md:text-base mb-6 leading-relaxed line-clamp-2 flex-1">
                      {dest.description}
                    </p>
                    
                    <div className="space-y-3 mb-8 flex-1">
                      {dest.activities.slice(0, 3).map((activity, i) => (
                        <div 
                          key={i} 
                          className="flex items-center text-night/70 transform group-hover:translate-x-1 
                                    transition-transform duration-300"
                          style={{ transitionDelay: `${i * 100}ms` }}
                        >
                          <div className="w-2 h-2 glass-sunset-dot mr-3 
                                         transform group-hover:scale-125 transition-transform duration-300 flex-shrink-0" />
                          <span className="text-sm md:text-base">{activity}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                      <div className="flex items-center text-azure group-hover:text-sunset transition-colors duration-300">
                        <span className="text-sm font-semibold mr-2">Explore Destination</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                      <div className="text-sm text-night/60 font-medium">
                        Andaman Islands
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </CardSlider>
        </div>
      </div>
    </section>
  );
};

export default Destinations;