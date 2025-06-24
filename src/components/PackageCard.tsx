import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, MapPin, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PackageCardProps {
  title: string;
  description: string;
  price: number;
  duration: string;
  groupSize: string;
  features: string[];
  image: string;
  slug: string;
  delay?: number;
}

const PackageCard: React.FC<PackageCardProps> = ({
  title,
  description,
  price,
  duration,
  groupSize,
  features,
  image,
  slug,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="h-full"
    >
      <Link to={`/packages/${slug}`} className="card-modern group h-full flex flex-col min-h-[600px] md:min-h-[650px] block relative overflow-hidden">
        <div className="relative h-64 md:h-72 overflow-hidden flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-t from-night/60 via-night/20 to-transparent 
                         group-hover:from-night/70 group-hover:via-night/30 transition-all duration-700 ease-out z-10" />
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
          <motion.div 
            className="absolute top-4 right-4 glass-sunset-badge px-4 py-2 z-20 font-semibold shadow-lg"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
          >
            ₹{price.toLocaleString('en-IN')}
          </motion.div>
          <motion.div 
            className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm 
                       text-azure px-3 py-1 rounded-full z-20 font-medium text-sm shadow-lg
                       flex items-center space-x-1"
            whileHover={{ scale: 1.05, x: 2 }}
            transition={{ duration: 0.3 }}
          >
            <Star className="w-3 h-3 fill-current" />
            <span>Premium</span>
          </motion.div>
        </div>
        
        <div className="p-6 md:p-8 flex-1 flex flex-col">
          <motion.h3 
            className="text-xl md:text-2xl font-bold text-night mb-3 group-hover:text-azure 
                      transition-colors duration-500 leading-tight"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>
          <p className="text-night/70 text-sm md:text-base mb-6 leading-relaxed line-clamp-3 flex-1">{description}</p>
          
          <motion.div 
            className="flex items-center justify-between mb-6 p-3 bg-gray-50 rounded-xl group-hover:bg-gray-100 transition-colors duration-500"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center text-night/70">
              <Clock className="w-4 h-4 mr-2 glass-sunset-text" />
              <span className="text-sm font-medium">{duration}</span>
            </div>
            <div className="flex items-center text-night/70">
              <Users className="w-4 h-4 mr-2 glass-sunset-text" />
              <span className="text-sm font-medium">{groupSize}</span>
            </div>
          </motion.div>

          <div className="space-y-3 mb-8 flex-1">
            {features.slice(0, 3).map((feature, i) => (
              <motion.div 
                key={i} 
                className="flex items-center text-night/70"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <motion.div 
                  className="w-2 h-2 bg-gradient-to-r from-azure to-lagoon rounded-full mr-3 flex-shrink-0"
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="text-sm md:text-base">{feature}</span>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="flex items-center text-azure group-hover:text-sunset transition-colors duration-500"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-sm font-semibold mr-2">View Details</span>
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </motion.div>
            <div className="flex items-center text-sm text-night/60">
              <MapPin className="w-4 h-4 mr-1 text-sunset" />
              <span className="font-medium">Andaman Islands</span>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="absolute inset-0 border-2 border-transparent rounded-2xl pointer-events-none"
          whileHover={{
            borderColor: "rgba(59, 130, 246, 0.3)",
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.1)"
          }}
          transition={{ duration: 0.3 }}
        />
      </Link>
    </motion.div>
  );
};

export default PackageCard;