import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 768 : false);
  const [heroComplete, setHeroComplete] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  
  // Use useScroll to track scroll progress from the container
  const { scrollYProgress } = useScroll();

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
  }, []);

  // Ultra fast spring physics for quick animations (desktop)
  const springConfig = { stiffness: 1000, damping: 30, restDelta: 0.001 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  // BULLETPROOF: Monitor scroll progress and set heroComplete immediately after "Explore Now"
  useEffect(() => {
    const unsubscribe = smoothProgress.onChange((latest) => {
      if (latest >= 0.25 && !heroComplete) {
        setHeroComplete(true); // Mark hero as complete at 25%
      }
    });
    return unsubscribe;
  }, [smoothProgress, heroComplete]);

  // Force video play on load (desktop only)
  useEffect(() => {
    const playVideo = async () => {
      if (!isMobile && videoRef.current) {
        try {
          await videoRef.current.play();
        } catch (error) {
          console.log('Desktop video autoplay prevented:', error);
        }
      }
      if (isMobile && mobileVideoRef.current) {
        try {
          await mobileVideoRef.current.play();
        } catch (error) {
          console.log('Mobile video autoplay prevented:', error);
        }
      }
    };
    
    if (isLoaded) {
      playVideo();
    }
  }, [isLoaded, isMobile]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    // Preload mobile background image
    if (isMobile) {
      const img = new Image();
      img.onload = () => setImageLoaded(true);
      img.onerror = () => setImageLoaded(true); // Set to true even on error to show fallback
      img.src = 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80';
    } else {
      setImageLoaded(true); // Not needed for desktop
    }
    
    return () => clearTimeout(timer);
  }, [isMobile]);

  // DESKTOP & TABLET: ORIGINAL COMPLEX ANIMATIONS
  if (!isMobile) {
    // 🔒 BULLETPROOF PC TIMING: 20% DURATION EXPLORE NOW + 15% EXTRA SCROLL

    // Phase 1: Video Scaling ONLY (0% to 5%) - WIDER VIDEO
    const videoHeight = useTransform(smoothProgress, [0, 0.05], ['100vh', '60vh']);
    const videoWidth = useTransform(smoothProgress, [0, 0.05], ['100vw', '90vw']); // WIDER: 80vw -> 90vw
    const videoTop = useTransform(smoothProgress, [0, 0.05], ['0vh', '8vh']);
    const videoLeft = useTransform(smoothProgress, [0, 0.05], ['0vw', '5vw']); // WIDER: 10vw -> 5vw
    const videoBorderRadius = useTransform(smoothProgress, [0, 0.05], [0, 20]);
    const videoScale = useTransform(smoothProgress, [0, 0.05], [1, 0.98]);

    // Phase 2: Text color based on video position (0% to 5%) - For subtitle only
    const subtitleColor = useTransform(
      smoothProgress,
      [0, 0.025, 0.05],
      ['rgba(255, 255, 255, 0.9)', 'rgba(180, 180, 180, 0.9)', 'rgba(100, 100, 100, 0.9)']
    );
    
    // Phase 3: Text animation AFTER video is done (5% to 15%) - Compressed timing
    const word1Opacity = useTransform(smoothProgress, [0.05, 0.056], [0, 1]);
    const word2Opacity = useTransform(smoothProgress, [0.056, 0.062], [0, 1]);
    const word3Opacity = useTransform(smoothProgress, [0.062, 0.068], [0, 1]);
    const word4Opacity = useTransform(smoothProgress, [0.068, 0.074], [0, 1]);
    const word5Opacity = useTransform(smoothProgress, [0.074, 0.08], [0, 1]);
    const word6Opacity = useTransform(smoothProgress, [0.08, 0.086], [0, 1]);
    const word7Opacity = useTransform(smoothProgress, [0.086, 0.092], [0, 1]);
    const word8Opacity = useTransform(smoothProgress, [0.092, 0.098], [0, 1]);
    const word9Opacity = useTransform(smoothProgress, [0.098, 0.104], [0, 1]);
    const word10Opacity = useTransform(smoothProgress, [0.104, 0.11], [0, 1]);
    const word11Opacity = useTransform(smoothProgress, [0.11, 0.116], [0, 1]);
    const word12Opacity = useTransform(smoothProgress, [0.116, 0.122], [0, 1]);
    const word13Opacity = useTransform(smoothProgress, [0.122, 0.128], [0, 1]);
    const word14Opacity = useTransform(smoothProgress, [0.128, 0.134], [0, 1]);
    const word15Opacity = useTransform(smoothProgress, [0.134, 0.14], [0, 1]);
    const word16Opacity = useTransform(smoothProgress, [0.14, 0.146], [0, 1]);
    
    // Phase 4: "Explore Now" LETTER BY LETTER - FAST ANIMATION (15% to 25%) then HOLD 5% MORE
    const letter1Opacity = useTransform(smoothProgress, [0.15, 0.155], [0, 1]); // E
    const letter2Opacity = useTransform(smoothProgress, [0.155, 0.160], [0, 1]); // X
    const letter3Opacity = useTransform(smoothProgress, [0.160, 0.165], [0, 1]); // P
    const letter4Opacity = useTransform(smoothProgress, [0.165, 0.170], [0, 1]); // L
    const letter5Opacity = useTransform(smoothProgress, [0.170, 0.175], [0, 1]); // O
    const letter6Opacity = useTransform(smoothProgress, [0.175, 0.180], [0, 1]); // R
    const letter7Opacity = useTransform(smoothProgress, [0.180, 0.185], [0, 1]); // E
    const letter8Opacity = useTransform(smoothProgress, [0.185, 0.190], [0, 1]); // (space)
    const letter9Opacity = useTransform(smoothProgress, [0.190, 0.195], [0, 1]); // N
    const letter10Opacity = useTransform(smoothProgress, [0.195, 0.200], [0, 1]); // O
    const letter11Opacity = useTransform(smoothProgress, [0.200, 0.205], [0, 1]); // W

    // Hold "Explore Now" after completion - SHORT HOLD (20.5% to 25.5%)
    const exploreTextOpacity = useTransform(smoothProgress, [0.205, 1.0], [1, 1]);

    // Hero elements stay visible throughout scroll - NO FADE
    const heroElementsOpacity = useTransform(smoothProgress, [0, 1.0], [1, 1]);
    
    // Scroll indicator fades instantly
    const scrollIndicatorOpacity = useTransform(smoothProgress, [0, 0.01], [1, 0]);

    // Video overlay
    const overlayOpacity = useTransform(smoothProgress, [0, 0.05], [0.4, 0.1]);

    const textWords = [
      "We", "empower", "travelers", "to", "discover", "amazing", "destinations", "and",
      "capture", "true", "luxury", "experiences", "with", "the", "Andaman", "Islands"
    ];

    const wordOpacities = [
      word1Opacity, word2Opacity, word3Opacity, word4Opacity,
      word5Opacity, word6Opacity, word7Opacity, word8Opacity,
      word9Opacity, word10Opacity, word11Opacity, word12Opacity,
      word13Opacity, word14Opacity, word15Opacity, word16Opacity
    ];

    // "Explore Now" letters
    const exploreLetters = ["E", "X", "P", "L", "O", "R", "E", " ", "N", "O", "W"];
    const letterOpacities = [
      letter1Opacity, letter2Opacity, letter3Opacity, letter4Opacity,
      letter5Opacity, letter6Opacity, letter7Opacity, letter8Opacity,
      letter9Opacity, letter10Opacity, letter11Opacity
    ];

    return (
      <>
        {/* Optimized scroll distance for complete animations */}
        <div className="relative" style={{ height: '300vh' }}>
          {/* Fixed hero container */}
          <div className="fixed top-0 left-0 w-full h-screen overflow-hidden z-10">
            {/* Clean white background like NeoLeaf */}
            <div className="absolute inset-0 bg-white z-0" />

            {/* Video container */}
            <motion.div 
              className="absolute z-20 overflow-hidden"
              style={{ 
                height: videoHeight, 
                width: videoWidth,
                top: videoTop,
                left: videoLeft,
                borderRadius: videoBorderRadius,
                scale: videoScale,
                boxShadow: '0 30px 60px -20px rgba(0, 0, 0, 0.4)',
              }}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 1.02 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <video 
                ref={videoRef}
                autoPlay 
                muted 
                loop 
                playsInline
                controls={false}
                preload="auto"
                className="w-full h-full object-cover"
                onLoadedData={() => videoRef.current?.play()}
                onCanPlay={() => videoRef.current?.play()}
              >
                <source 
                  src="https://videos.pexels.com/video-files/3094026/3094026-uhd_2560_1440_30fps.mp4" 
                  type="video/mp4"
                />
              </video>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/45" 
                style={{ opacity: overlayOpacity }}
              />
            </motion.div>
            
            {/* Hero Content */}
            <motion.div 
              className="absolute inset-0 z-30"
              style={{ opacity: heroElementsOpacity }}
            >
              {/* 
                🔒 BULLETPROOF TIMING SUMMARY:
                - 0-5%: Video scaling (WIDER)
                - 5-15%: Text animation
                - 15-35%: "Explore Now" appears LETTER BY LETTER (20% duration)
                - 35-60%: "Explore Now" HOLDS (25% duration)
                - 65-66%: Hero fades
                - 67%+: Main content
              */}
              
              {/* Text positioned with 30px offset */}
              <div className="absolute left-0 bottom-0 w-full p-8 md:p-16 pb-32 pointer-events-none">
                <motion.div 
                  className="relative max-w-4xl"
                  style={{ marginLeft: '30px' }}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -30 }}
                  transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                >
                  {/* Main heading - MOVED DOWN 10PX */}
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
                  
                  {/* Paragraph animation - COMPLETES BY 15% */}
                  <div className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed max-w-3xl">
                    {textWords.map((word, index) => (
                      <motion.span
                        key={index}
                        className="inline-block mr-2"
                        style={{ 
                          opacity: wordOpacities[index],
                          color: subtitleColor
                        }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* "Explore Now" - NEW FONT AND COLOR */}
              <motion.div
                className="absolute bottom-16 right-16 z-40 pointer-events-none"
                style={{ opacity: exploreTextOpacity }}
              >
                <div className="flex items-center">
                  <div className="flex font-playfair">
                    {exploreLetters.map((letter, index) => (
                      <motion.span
                        key={index}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-gradient-to-r from-blue-600 via-teal-500 to-green-500 bg-clip-text"
                        style={{ opacity: letterOpacities[index] }}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40"
              style={{ opacity: scrollIndicatorOpacity }}
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
        
        {/* Main content starts after hero animations complete (after 25% scroll) */}
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
              backgroundImage: 'url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
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