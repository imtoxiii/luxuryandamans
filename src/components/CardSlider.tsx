import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CardSliderProps {
  children: React.ReactNode;
  showDots?: boolean;
  autoScroll?: boolean;
}

const CardSlider: React.FC<CardSliderProps> = ({ 
  children, 
  showDots = true, 
  autoScroll = false 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const items = React.Children.toArray(children);

  // Calculate items per view based on screen size
  useEffect(() => {
    const calculateItemsPerView = () => {
      const width = window.innerWidth;
      if (width >= 1280) return 3; // xl screens - show 3 cards
      if (width >= 1024) return 3; // lg screens - show 3 cards  
      if (width >= 768) return 2;  // md screens - show 2 cards
      return 1; // sm screens - show 1 card
    };

    const updateItemsPerView = () => {
      const newItemsPerView = calculateItemsPerView();
      setItemsPerView(newItemsPerView);
      setCurrentIndex(0); // Reset to first slide when screen size changes
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, items.length - itemsPerView);

  const handlePrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  // Auto scroll functionality
  useEffect(() => {
    if (!autoScroll || items.length <= itemsPerView) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        if (prev >= maxIndex) return 0; // Loop back to start
        return prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [autoScroll, maxIndex, itemsPerView, items.length]);

  // Touch/swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentIndex < maxIndex) {
      handleNext();
    }
    if (isRightSwipe && currentIndex > 0) {
      handlePrevious();
    }
  };

  if (items.length === 0) return null;

  return (
    <div className="relative">
      {/* Main slider container */}
      <div 
        ref={containerRef}
        className="overflow-hidden mx-4 md:mx-0"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <motion.div
          className="flex"
          animate={{
            x: `${-currentIndex * (100 / itemsPerView)}%`
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300,
            damping: 30,
            mass: 0.8
          }}
        >
          {items.map((child, index) => (
            <div
              key={index}
              className="flex-none px-2 md:px-4"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <div className="h-full">
                {child}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced Navigation Buttons */}
      {items.length > itemsPerView && (
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none px-2 md:px-0">
          <AnimatePresence mode="wait">
            {currentIndex > 0 ? (
              <motion.button
                key="prev-button"
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: -20 }}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                onClick={handlePrevious}
                className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 bg-white/90 backdrop-blur-sm shadow-lg rounded-full flex items-center justify-center text-night transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-azure focus:ring-offset-2 z-10"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </motion.button>
            ) : <div key="prev-placeholder" />}

            {currentIndex < maxIndex ? (
              <motion.button
                key="next-button"
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: 20 }}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                onClick={handleNext}
                className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 bg-white/90 backdrop-blur-sm shadow-lg rounded-full flex items-center justify-center text-night transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-azure focus:ring-offset-2 z-10"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </motion.button>
            ) : <div key="next-placeholder" />}
          </AnimatePresence>
        </div>
      )}

      {/* Enhanced Dot Navigation */}
      {showDots && items.length > itemsPerView && maxIndex > 0 && (
        <div className="hidden md:flex items-center justify-center space-x-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-azure focus:ring-offset-2 rounded-full ${
                index === currentIndex 
                  ? 'bg-azure' 
                  : 'bg-night/20 hover:bg-night/40'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                width: index === currentIndex ? 32 : 8,
                height: 8
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Enhanced progress bar for mobile */}
      <div className="md:hidden mt-6">
        <div className="w-full bg-gray-200 rounded-full h-1 overflow-hidden">
          <motion.div 
            className="bg-azure h-1 rounded-full"
            animate={{ 
              width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%` 
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  );
};

export default CardSlider;