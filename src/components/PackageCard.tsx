import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, MapPin, ArrowRight, Star, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getPackageCardImage } from '../lib/imageLoader';

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
  // Use dynamic image from folder or fallback to provided image
  const cardImage = getPackageCardImage(slug);
  const [displayImage, setDisplayImage] = useState(image);
  
  // Check if dynamic image exists, otherwise use fallback
  useEffect(() => {
    const img = new Image();
    img.onload = () => setDisplayImage(cardImage);
    img.onerror = () => setDisplayImage(image); // Fallback to original
    img.src = cardImage;
  }, [cardImage, image]);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5, 
        delay,
        ease: [0.21, 0.45, 0.27, 0.9]
      }}
      className="h-full"
    >
      <Link 
        to={`/packages/${slug}`} 
        className="group h-full flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200"
      >
        {/* Image Section */}
        <div className="relative h-56 overflow-hidden bg-gray-100">
          <motion.img
            src={displayImage}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-500" />
          
          {/* Price Badge */}
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
            <div className="text-xs font-medium text-gray-600 mb-0.5">Starting from</div>
            <div className="text-lg font-bold text-blue-600">₹{(price / 1000).toFixed(0)}K</div>
          </div>
          
          {/* Premium Badge */}
          <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-1.5 rounded-full shadow-lg flex items-center space-x-1.5">
            <Star className="w-3.5 h-3.5 fill-white" />
            <span className="text-xs font-semibold">Premium</span>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-2 flex-grow">
            {description}
          </p>
          
          {/* Meta Info */}
          <div className="flex items-center justify-between mb-5 py-3 px-4 bg-gray-50 rounded-xl">
            <div className="flex items-center space-x-2 text-gray-700">
              <Clock className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium">{duration}</span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Users className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium">{groupSize} people</span>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-2.5 mb-6">
            {features.slice(0, 3).map((feature, i) => (
              <div key={i} className="flex items-start space-x-2.5">
                <div className="mt-0.5 flex-shrink-0">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-sm text-gray-700 leading-snug">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-auto pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                <span>View Details</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
              <div className="flex items-center space-x-1.5 text-xs text-gray-500">
                <MapPin className="w-3.5 h-3.5" />
                <span>Andaman</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PackageCard;