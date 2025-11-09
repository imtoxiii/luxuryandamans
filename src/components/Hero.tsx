import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import newHeroImage from '../img/hero-background.png';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 768 : false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Refs for elements
  const heroContainerRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const exploreContainerRef = useRef<HTMLDivElement>(null);

  // Detect mobile vs desktop with proper initial state
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      const changed = mobile !== isMobile;
      setIsMobile(mobile);
      if (changed) {
        console.log('Mobile state changed:', mobile, 'Window width:', window.innerWidth);
      }
    };
    
    // Set initial state immediately
    checkMobile();
    
    // Add resize listener with debounce
    let timeoutId: NodeJS.Timeout;
    const debouncedCheck = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkMobile, 100);
    };
    
    window.addEventListener('resize', debouncedCheck);
    return () => {
      window.removeEventListener('resize', debouncedCheck);
      clearTimeout(timeoutId);
    };
  }, [isMobile]);

  // Simplified scroll observer - just track visibility
  useEffect(() => {
    if (isMobile || !heroContainerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Hero has scrolled out of view - content below is visible
          if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
            // Hero complete - could trigger something if needed
          }
        });
      },
      { threshold: [0, 0.5] }
    );

    observer.observe(heroContainerRef.current);
    return () => observer.disconnect();
  }, [isMobile]);

  useEffect(() => {
    // Faster initial load - reduced delay
    const timer = setTimeout(() => setIsLoaded(true), 50);
    
    // Preload background image with faster feedback
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(true); // Set to true even on error to show fallback
    img.src = newHeroImage;
    
    // Set a timeout to show content even if image hasn't loaded
    const fallbackTimer = setTimeout(() => {
      if (!imageLoaded) {
        setImageLoaded(true);
      }
    }, 1500); // Show content after 1.5s max
    
    return () => {
      clearTimeout(timer);
      clearTimeout(fallbackTimer);
    };
  }, [imageLoaded]);

  // DESKTOP & TABLET: Simple, fast, smooth version
  if (!isMobile) {
    return (
      <>
        {/* Simplified hero - no heavy scroll animations */}
        <div ref={heroContainerRef} className="relative w-full" style={{ minHeight: '100vh', overflow: 'hidden' }}>
          {/* Hero container */}
          <div className="relative w-full min-h-screen overflow-hidden">
            {/* Clean white background */}
            <div className="absolute inset-0 bg-white z-0" />

            {/* Image container - simple, no scroll animations */}
            <div 
              ref={videoContainerRef}
              className="absolute inset-0 z-20 overflow-hidden"
              style={{ 
                backgroundColor: '#1e293b',
                transform: 'translateZ(0)',
              }}
            >
              {/* Gradient placeholder - shows instantly */}
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 animate-pulse" />
              )}
              
              <motion.img 
                src={newHeroImage}
                alt="Luxury Andaman hero"
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: imageLoaded ? 1 : 0, scale: imageLoaded ? 1 : 1.05 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ display: imageLoaded ? 'block' : 'none' }}
              />
              <div 
                ref={overlayRef}
                className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/45" 
              />
            </div>
            
            {/* Hero Content - Simple fade-in */}
            <div className="absolute inset-0 z-30">
              {/* Text positioned with 30px offset */}
              <div className="absolute left-0 bottom-0 w-full p-8 md:p-16 pb-32 pointer-events-none">
                <motion.div 
                  className="relative max-w-4xl"
                  style={{ marginLeft: '30px' }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                  {/* Main heading */}
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight">
                    <span className="text-white">Experience Untouched</span>
                    <br />
                    <span className="text-transparent bg-gradient-to-r from-blue-600 via-teal-500 to-green-500 bg-clip-text">
                      Paradise
                    </span>
                  </h1>
                  
                  {/* Clean paragraph without cursive */}
                  <motion.p 
                    className="text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-3xl text-white/95 font-light"
                    style={{ 
                      textShadow: '0 2px 8px rgba(0,0,0,0.4)'
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isLoaded ? 1 : 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                     ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ                                                                                                  
                  </motion.p>
                </motion.div>
              </div>

              {/* "Explore Now" - Simple version */}
              <motion.div
                ref={exploreContainerRef}
                className="absolute bottom-16 right-16 z-40 pointer-events-none"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <div className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-gradient-to-r from-blue-600 via-teal-500 to-green-500 bg-clip-text">
                  EXPLORE NOW
                </div>
              </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
              ref={scrollIndicatorRef}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <div className="flex flex-col items-center">
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-5 h-8 border-2 border-gray-400 rounded-full flex justify-center"
                >
                  <motion.div 
                    className="w-0.5 h-2 bg-gray-400 rounded-full mt-1.5"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </>
    );
  }

  // Mobile Hero - Static Image Version (OPTIMIZED)
  else {
    return (
      <>
        {/* Mobile hero with static image */}
        <div className="relative min-h-screen w-full overflow-hidden">
          {/* Gradient placeholder - shows instantly */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900" />
          
          {/* Static background image for mobile */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500"
            style={{
              backgroundImage: imageLoaded ? `url(${newHeroImage})` : 'none',
              backgroundColor: '#1e293b', // Fallback color
              opacity: imageLoaded ? 1 : 0
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
          </div>
          
          {/* Mobile content - Shows immediately */}
          <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
            <div className="text-center max-w-lg">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Experience Untouched
                <br />
                <span className="text-transparent bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 bg-clip-text">
                  Paradise
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-lg text-white/90 mb-8 leading-relaxed font-light"
                style={{ 
                  textShadow: '0 2px 8px rgba(0,0,0,0.4)'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Discover luxury travel experiences in the pristine Andaman Islands
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Link
                  to="/enquiry"
                  className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm text-gray-900 rounded-full font-semibold hover:bg-white transition-all duration-300 shadow-xl"
                >
                  Explore Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Simple scroll indicator for mobile */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-5 h-8 border-2 border-white/60 rounded-full flex justify-center"
            >
              <motion.div 
                className="w-0.5 h-2 bg-white/60 rounded-full mt-1.5"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </>
    );
  }
};

export default Hero;