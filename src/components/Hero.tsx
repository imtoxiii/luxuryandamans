import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import newHeroImage from '../img/hero-background.png';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 768 : false);
  const [heroComplete, setHeroComplete] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Refs for GSAP animations
  const heroContainerRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const textWordsRef = useRef<HTMLSpanElement[]>([]);
  const exploreLettersRef = useRef<HTMLSpanElement[]>([]);
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

  // GSAP ScrollTrigger animations for desktop
  useEffect(() => {
    if (isMobile || !videoContainerRef.current) return;

    // Set up GSAP context for cleanup
    const ctx = gsap.context(() => {
      // Performance optimization: Set ScrollTrigger defaults
      ScrollTrigger.config({
        limitCallbacks: true, // Limit callback frequency for better performance
        syncInterval: 33, // ~30fps sync rate for better performance
      });

      // Phase 1: Video Scaling (0% to 5% of scroll)
      gsap.timeline({
        scrollTrigger: {
          trigger: heroContainerRef.current,
          start: 'top top',
          end: '5% top',
          scrub: 1, // Smooth scrubbing with 1 second delay
          invalidateOnRefresh: true,
          fastScrollEnd: true, // Better performance on fast scrolling
        }
      })
      .to(videoContainerRef.current, {
        height: '60vh',
        width: '90vw',
        top: '8vh',
        left: '5vw',
        borderRadius: '20px',
        scale: 0.98,
        ease: 'none',
        force3D: true, // Force hardware acceleration
      }, 0)
      .to(overlayRef.current, {
        opacity: 0.1,
        ease: 'none',
        force3D: true,
      }, 0);

      // Phase 2: Fade scroll indicator quickly
      gsap.to(scrollIndicatorRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: heroContainerRef.current,
          start: 'top top',
          end: '1% top',
          scrub: 1,
          fastScrollEnd: true,
        },
        ease: 'none',
        force3D: true,
      });

      // Phase 3: Text words animation (5% to 15%)
      if (textWordsRef.current.length > 0) {
        textWordsRef.current.forEach((word, index) => {
          if (word) {
            const startProgress = 5 + (index * 0.6); // Each word gets 0.6% of scroll
            const endProgress = startProgress + 0.6;
            
            gsap.fromTo(word, 
              { opacity: 0 },
              {
                opacity: 1,
                scrollTrigger: {
                  trigger: heroContainerRef.current,
                  start: `${startProgress}% top`,
                  end: `${endProgress}% top`,
                  scrub: 1,
                  fastScrollEnd: true,
                },
                ease: 'none',
                force3D: true,
              }
            );
          }
        });
      }

      // Phase 4: "Explore Now" letter by letter (15% to 20%)
      if (exploreLettersRef.current.length > 0) {
        exploreLettersRef.current.forEach((letter, index) => {
          if (letter) {
            const startProgress = 15 + (index * 0.55); // Each letter gets 0.55% of scroll
            const endProgress = startProgress + 0.55;
            
            gsap.fromTo(letter,
              { opacity: 0 },
              {
                opacity: 1,
                scrollTrigger: {
                  trigger: heroContainerRef.current,
                  start: `${startProgress}% top`,
                  end: `${endProgress}% top`,
                  scrub: 1,
                  fastScrollEnd: true,
                },
                ease: 'none',
                force3D: true,
              }
            );
          }
        });
      }

      // Mark hero complete at 20% scroll (right after "Explore Now" completes)
      ScrollTrigger.create({
        trigger: heroContainerRef.current,
        start: '20% top',
        onEnter: () => setHeroComplete(true),
        onLeaveBack: () => setHeroComplete(false),
      });

    }, heroContainerRef);

    return () => {
      ctx.revert(); // Clean up all GSAP animations and ScrollTriggers
    };
  }, [isMobile, imageLoaded]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    // Preload background image
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(true); // Set to true even on error to show fallback
    img.src = newHeroImage;
    
    return () => clearTimeout(timer);
  }, []);

  // DESKTOP & TABLET: GSAP SCROLL ANIMATIONS
  if (!isMobile) {
    const textWords = [
      "We", "empower", "travelers", "to", "discover", "amazing", "destinations", "and",
      "capture", "true", "luxury", "experiences", "with", "the", "Andaman", "Islands"
    ];

    const exploreLetters = ["E", "X", "P", "L", "O", "R", "E", " ", "N", "O", "W"];

    return (
      <>
        {/* Optimized scroll distance for complete animations */}
        <div ref={heroContainerRef} className="relative" style={{ height: '240vh' }}>
          {/* Fixed hero container */}
          <div className="fixed top-0 left-0 w-full h-screen overflow-hidden z-10">
            {/* Clean white background */}
            <div className="absolute inset-0 bg-white z-0" />

            {/* Image container - animated with GSAP */}
            <div 
              ref={videoContainerRef}
              className="absolute z-20 overflow-hidden"
              style={{ 
                height: '100vh',
                width: '100vw',
                top: '0vh',
                left: '0vw',
                borderRadius: '0px',
                boxShadow: '0 30px 60px -20px rgba(0, 0, 0, 0.4)',
                willChange: 'transform, width, height, border-radius',
                transform: 'translateZ(0)', // Force GPU acceleration
                backfaceVisibility: 'hidden', // Better performance
              }}
            >
              <motion.img 
                src={newHeroImage}
                alt="Luxury Andaman hero"
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 1.02 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
              <div 
                ref={overlayRef}
                className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/45" 
                style={{ opacity: 0.4 }}
              />
            </div>
            
            {/* Hero Content */}
            <div className="absolute inset-0 z-30">
              {/* Text positioned with 30px offset */}
              <div className="absolute left-0 bottom-0 w-full p-8 md:p-16 pb-32 pointer-events-none">
                <motion.div 
                  className="relative max-w-4xl"
                  style={{ marginLeft: '30px' }}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -30 }}
                  transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                >
                  {/* Main heading */}
                  <motion.h1 
                    className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight"
                    style={{ y: 10 }}
                  >
                    <span className="text-white">Experience Untouched</span>
                    <br />
                    <span className="text-transparent bg-gradient-to-r from-blue-600 via-teal-500 to-green-500 bg-clip-text">
                      Paradise
                    </span>
                  </motion.h1>
                  
                  {/* Paragraph animation with GSAP refs */}
                  <div className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed max-w-3xl">
                    {textWords.map((word, index) => (
                      <span
                        key={index}
                        ref={(el) => {
                          if (el) textWordsRef.current[index] = el;
                        }}
                        className="inline-block mr-2 text-white/90"
                        style={{ opacity: 0 }}
                      >
                        {word}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* "Explore Now" with GSAP letter animation */}
              <div
                ref={exploreContainerRef}
                className="absolute bottom-16 right-16 z-40 pointer-events-none"
              >
                <div className="flex items-center">
                  <div className="flex font-playfair">
                    {exploreLetters.map((letter, index) => (
                      <span
                        key={index}
                        ref={(el) => {
                          if (el) exploreLettersRef.current[index] = el;
                        }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-gradient-to-r from-blue-600 via-teal-500 to-green-500 bg-clip-text"
                        style={{ opacity: 0 }}
                      >
                        {letter}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll indicator - animated with GSAP */}
            <div
              ref={scrollIndicatorRef}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40"
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
            </div>
          </div>
        </div>
        
        {/* Main content starts after hero animations complete */}
        <motion.div 
          className="bg-white py-16"
          style={{ 
            opacity: heroComplete ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out'
          }}
        ></motion.div>
      </>
    );
  }

  // Mobile Hero - Static Image Version (UNCHANGED)
  else {
    return (
      <>
        {/* Mobile hero with static image */}
        <div className="relative min-h-screen w-full overflow-hidden">
          {/* Loading state for mobile */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-sm opacity-75">Loading...</p>
              </div>
            </div>
          )}
          
          {/* Static background image for mobile */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-300"
            style={{
              backgroundImage: `url(${newHeroImage})`,
              backgroundColor: '#0F172A', // Fallback color
              opacity: imageLoaded ? 1 : 0
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
          </div>
          
          {/* Mobile content */}
          <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
            <div className="text-center max-w-lg">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                Experience Untouched
                <br />
                <span className="text-transparent bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 bg-clip-text">
                  Paradise
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-lg text-white/90 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Discover luxury travel experiences in the pristine Andaman Islands
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ duration: 1, delay: 0.9 }}
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
            transition={{ delay: 1.5 }}
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