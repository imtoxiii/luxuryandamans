import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, MapPin, ArrowRight, Star, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getPackageCardImage } from '../lib/imageLoader';
import SmartImage from './SmartImage';

interface PackageCardProps {
  title: string;
  description: string;
  price: number;
  duration: string;
  groupSize: string;
  features: string[];
  image: string;
  slug: string;
  id?: string;
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
  id,
  delay = 0
}) => {
  // Use dynamic image from folder or fallback to provided image
  const cardImage = getPackageCardImage(id || slug);
  const [displayImage, setDisplayImage] = useState(image);

  // Check if dynamic image exists, otherwise use fallback
  useEffect(() => {
    if (cardImage) {
      const img = new Image();
      img.onload = () => setDisplayImage(cardImage);
      img.onerror = () => setDisplayImage(image); // Fallback to original
      img.src = cardImage;
    } else {
      setDisplayImage(image);
    }
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
        className="group h-full flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-100/50 relative isolate"
      >
        {/* Image Section */}
        <div className="relative h-64 overflow-hidden bg-gray-100">
          <motion.div
            className="w-full h-full"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <SmartImage
              src={displayImage}
              alt={title}
              containerType="card"
              fallbackSrc={image}
              className="w-full h-full"
              animateOnLoad={true}
            />
          </motion.div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500" />

          {/* Price Badge */}
          <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-2xl shadow-lg group-hover:bg-white/20 transition-colors duration-300">
            <div className="text-[10px] uppercase tracking-wider font-bold text-white/90 mb-0.5">Starting from</div>
            <div className="text-xl font-bold text-white">₹{(price / 1000).toFixed(0)}K</div>
          </div>

          {/* Premium Badge */}
          <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 py-1.5 rounded-full shadow-lg flex items-center space-x-1.5">
            <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-bold tracking-wide uppercase">Premium</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-7 flex-1 flex flex-col relative">
          {/* Floating Category/Duration Pill */}
          <div className="absolute -top-5 left-7 bg-blue-600 text-white px-4 py-1.5 rounded-full shadow-lg text-xs font-bold tracking-wide uppercase flex items-center gap-2 ring-4 ring-white">
            <Clock className="w-3.5 h-3.5" />
            {duration}
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300 font-display">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2 flex-grow font-medium">
            {description}
          </p>

          {/* Meta Info */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2 text-gray-600 bg-gray-50 px-3 py-1.5 rounded-lg">
              <Users className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-semibold">{groupSize} people</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 bg-gray-50 px-3 py-1.5 rounded-lg">
              <MapPin className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-semibold">Andaman</span>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-3 mb-8">
            {features.slice(0, 3).map((feature, i) => (
              <div key={i} className="flex items-start gap-3 group/feature">
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-50 flex items-center justify-center group-hover/feature:bg-green-100 transition-colors">
                  <Check className="w-3 h-3 text-green-600" />
                </div>
                <span className="text-sm text-gray-600 font-medium leading-snug group-hover/feature:text-gray-900 transition-colors">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-auto">
            <div className="w-full py-3.5 rounded-xl bg-gray-50 text-gray-900 font-bold text-sm flex items-center justify-center gap-2 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-blue-200 group-hover:shadow-lg">
              <span>View Package Details</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PackageCard;