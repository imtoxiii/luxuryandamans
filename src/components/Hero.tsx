import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import newHeroImage from '../img/hero-background.png';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // DESKTOP VERSION - Simple and fast
  if (!isMobile) {
    return (
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Background Image - Instant display */}
        <div className="absolute inset-0 z-0">
          <img 
            src={newHeroImage}
            alt="Luxury Andaman Islands"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/45" />
        </div>
        
        {/* Content - Instant display */}
        <div className="absolute inset-0 z-10 flex items-end pb-32 px-8 md:px-16">
          <div className="max-w-4xl" style={{ marginLeft: '30px' }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight">
              <span className="text-white">Experience Untouched</span>
              <br />
              <span className="text-transparent bg-gradient-to-r from-blue-600 via-teal-500 to-green-500 bg-clip-text">
                Paradise
              </span>
            </h1>
          </div>
          
          {/* Explore Now Text */}
          <div className="absolute bottom-16 right-16">
            <div className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-gradient-to-r from-blue-600 via-teal-500 to-green-500 bg-clip-text">
              EXPLORE NOW
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="flex flex-col items-center animate-bounce">
            <div className="w-5 h-8 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-0.5 h-2 bg-gray-400 rounded-full mt-1.5" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // MOBILE VERSION - Optimized with responsive images
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image - Optimized for mobile */}
      <picture className="absolute inset-0">
        <source 
          srcSet={newHeroImage}
          type="image/png"
          media="(max-width: 768px)"
        />
        <img 
          src={newHeroImage}
          alt="Luxury Andaman Islands Paradise"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          style={{ 
            transform: 'translateZ(0)',
            willChange: 'transform'
          }}
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      
      {/* Content - Instant display */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
        <div className="text-center max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience Untouched
            <br />
            <span className="text-transparent bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 bg-clip-text">
              Paradise
            </span>
          </h1>
          
          <p className="text-lg text-white/90 mb-8 leading-relaxed font-light">
            Discover luxury travel experiences in the pristine Andaman Islands
          </p>

          <Link
            to="/enquiry"
            className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm text-gray-900 rounded-full font-semibold hover:bg-white transition-all duration-300 shadow-xl"
          >
            Explore Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center animate-bounce">
          <div className="w-5 h-8 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-0.5 h-2 bg-white/60 rounded-full mt-1.5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;