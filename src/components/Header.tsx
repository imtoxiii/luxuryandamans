import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Palmtree } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  
  const { scrollYProgress } = useScroll();

  // Detect mobile vs desktop
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Ultra fast timing: 25% of 120vh = 30vh for both desktop and mobile
  const contentThreshold = 30; // 25% of 120vh for ultra-fast experience
  
  // Navigation background transitions when main content appears at 25%
  const navOpacity = useTransform(
    scrollYProgress, 
    [0, 0.25], // At 25% of scroll (when main content appears)
    [0, 1]
  );

  useEffect(() => {
    const updateScrollY = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', updateScrollY);
    return () => window.removeEventListener('scroll', updateScrollY);
  }, []);

  // Determine if we should show white background
  const isContactPage = location.pathname === '/contact';
  const isHomePage = location.pathname === '/';
  const showWhiteBackground = !isHomePage || scrollY > contentThreshold || isContactPage;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  // Close menu when clicking on a link
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Clean up on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Packages', path: '/packages' },
    { name: 'Experiences', path: '/experiences' },
    { name: 'Blog', path: '/blog' },
    { name: 'Guide', path: '/guide' },
    { name: 'Calculator', path: '/calculator' },
    { name: 'Contact', path: '/contact' },
  ];

  // Animation variants for staggered menu items
  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const footerVariants = {
    closed: {
      opacity: 0,
      y: 30,
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      {/* Fixed Navigation */}
      <motion.nav 
        className={`fixed top-0 left-0 right-0 w-full z-[10001] transition-all duration-500 ${
          (showWhiteBackground && !isMenuOpen) ? 'nav-white-bg shadow-lg' : 'bg-transparent'
        }`}
        style={{ 
          zIndex: 10001,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0
        }}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* White background overlay that appears with main content */}
        <motion.div
          className="absolute inset-0 bg-white/95 backdrop-blur-md"
          style={{ opacity: (isMenuOpen && isMobile) ? 0 : navOpacity }}
        />
        
        {/* Ensure navigation always has a background when scrolled */}
        {(showWhiteBackground && !isMenuOpen) && (
          <div className="absolute inset-0 bg-white/90 backdrop-blur-sm" />
        )}
        
        <div className="relative container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group" onClick={closeMenu}>
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Palmtree className={`h-8 w-8 transition-colors duration-300 ${
                  (showWhiteBackground && !isMenuOpen) ? 'text-teal-600' : 'text-white'
                }`} />
              </motion.div>
              <span className={`text-2xl font-bold transition-colors duration-300 ${
                (showWhiteBackground && !isMenuOpen) ? 'text-gray-900' : 'text-white'
              }`}>
                Luxury Andamans
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center lg:space-x-8 md:space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    ((item.name === 'Guide' || item.name === 'Calculator') ? 'hidden lg:inline-block' : '')
                  } ${
                    location.pathname === item.path
                      ? showWhiteBackground 
                        ? 'text-teal-600 border-b-2 border-teal-600' 
                        : 'text-white border-b-2 border-white'
                      : showWhiteBackground
                        ? 'text-gray-700 hover:text-teal-600'
                        : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/enquiry"
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    showWhiteBackground
                      ? 'bg-gradient-to-r from-teal-600 to-blue-600 text-white hover:shadow-lg'
                      : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30'
                  }`}
                >
                  Book Now
                </Link>
              </motion.div>
            </div>

            {/* Custom Hamburger Menu Button for Mobile */}
            <button
              onClick={toggleMenu}
              className={`md:hidden relative w-10 h-10 flex flex-col justify-center items-center z-[10002] rounded-full transition-all duration-300 ${
                isMenuOpen 
                  ? 'text-white bg-white/10 backdrop-blur-sm' 
                  : (showWhiteBackground ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10')
              } focus:outline-none`}
              aria-label="Toggle navigation menu"
            >
              {/* Custom hamburger/X animation */}
              <motion.span
                className={`absolute w-6 h-0.5 rounded-full shadow-sm ${
                  isMenuOpen || !showWhiteBackground ? 'bg-white' : 'bg-gray-900'
                }`}
                initial={false}
                animate={{
                  rotate: isMenuOpen ? 45 : 0,
                  y: isMenuOpen ? 0 : -4
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              <motion.span
                className={`absolute w-6 h-0.5 rounded-full shadow-sm ${
                  isMenuOpen || !showWhiteBackground ? 'bg-white' : 'bg-gray-900'
                }`}
                initial={false}
                animate={{
                  opacity: isMenuOpen ? 0 : 1,
                  x: isMenuOpen ? -10 : 0
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              />
              <motion.span
                className={`absolute w-6 h-0.5 rounded-full shadow-sm ${
                  isMenuOpen || !showWhiteBackground ? 'bg-white' : 'bg-gray-900'
                }`}
                initial={false}
                animate={{
                  rotate: isMenuOpen ? -45 : 0,
                  y: isMenuOpen ? 0 : 4
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

             {/* Full-Screen Mobile Menu Overlay */}
       <AnimatePresence>
         {isMenuOpen && (
           <motion.div
             className="fixed inset-0 z-[9999] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Dark Overlay Background */}
            <motion.div 
              className="absolute inset-0 bg-gray-900"
              style={{ backgroundColor: '#222' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
            
            {/* Menu Content Container */}
            <div className="relative h-full flex flex-col justify-center px-8">
              {/* Navigation Links */}
              <motion.nav
                className="space-y-8"
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={itemVariants}
                  >
                    <Link
                      to={item.path}
                      onClick={closeMenu}
                      className={`block text-5xl md:text-6xl font-light tracking-wide transition-colors duration-300 ${
                        item.name === 'Home' 
                          ? 'text-gray-400 hover:text-gray-300' 
                          : location.pathname === item.path
                            ? 'text-teal-400'
                            : 'text-white hover:text-gray-300'
                      }`}
                    >
                      {item.name.toUpperCase()}
                    </Link>
                  </motion.div>
                ))}
                
                {/* CTA and social links */}
                <motion.div 
                  className="mt-12 text-center"
                  variants={footerVariants}
                >
                  <Link
                    to="/enquiry"
                    onClick={closeMenu}
                    className="inline-block px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white text-lg font-medium rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Book Your Experience
                  </Link>
                </motion.div>
              </motion.nav>
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;