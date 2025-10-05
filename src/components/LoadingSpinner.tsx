import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Palmtree, Ship, Waves } from 'lucide-react';

interface PageTransitionProps {
  onComplete?: () => void;
}

const PageTransition: React.FC<PageTransitionProps> = ({ onComplete }) => {
  const leftCurtainRef = useRef<HTMLDivElement>(null);
  const rightCurtainRef = useRef<HTMLDivElement>(null);
  const leftTextRef = useRef<HTMLHeadingElement>(null);
  const rightTextRef = useRef<HTMLHeadingElement>(null);
  const iconsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP animations for smooth curtain effect
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: 'power2.inOut',
        }
      });

      // Curtains slide in with text attached
      tl.fromTo(
        leftCurtainRef.current,
        { xPercent: -100 },
        {
          xPercent: 0,
          duration: 0.6,
          force3D: true,
        },
        0
      );

      tl.fromTo(
        rightCurtainRef.current,
        { xPercent: 100 },
        {
          xPercent: 0,
          duration: 0.6,
          force3D: true,
        },
        0
      );

      // Text moves with curtains - already positioned inside curtains
      // Just fade them in as curtains move
      tl.fromTo(
        [leftTextRef.current, rightTextRef.current],
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.4,
          force3D: true,
        },
        0.2
      );

      // Icons appear in center after curtains close
      tl.fromTo(
        iconsContainerRef.current,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          force3D: true,
        },
        0.6
      );

      // Hold for a moment
      tl.to({}, { duration: 0.5 }, 1.0);

      // Icons fade out first
      tl.to(
        iconsContainerRef.current,
        {
          opacity: 0,
          scale: 0.9,
          duration: 0.3,
          force3D: true,
        },
        1.5
      );

      // Text fades as curtains start opening
      tl.to(
        [leftTextRef.current, rightTextRef.current],
        {
          opacity: 0,
          duration: 0.4,
          force3D: true,
        },
        1.6
      );

      // Curtains open - text moves with them
      tl.to(
        leftCurtainRef.current,
        {
          xPercent: -100,
          duration: 0.7,
          ease: 'power2.inOut',
          force3D: true,
        },
        1.6
      );

      tl.to(
        rightCurtainRef.current,
        {
          xPercent: 100,
          duration: 0.7,
          ease: 'power2.inOut',
          force3D: true,
          onComplete: () => {
            onComplete?.();
          }
        },
        1.6
      );
    });

    return () => {
      ctx.revert();
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[10001] pointer-events-none flex items-center justify-center">
      {/* Left Curtain - Ocean Blue Gradient with "Luxury" text */}
      <div
        ref={leftCurtainRef}
        className="absolute left-0 top-0 w-1/2 h-full flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 50%, #14b8a6 100%)',
          willChange: 'transform',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
        }}
      >
        {/* Wave pattern overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='1' d='M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,106.7C960,117,1056,139,1152,133.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
          }}
        />
        
        {/* Floating palm trees decoration */}
        <div className="absolute top-1/4 left-1/4 opacity-10">
          <Palmtree size={80} className="text-white" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 opacity-10">
          <Palmtree size={60} className="text-white" />
        </div>

        {/* "Luxury" text - moves with left curtain */}
        <div className="flex items-center justify-end w-full pr-4 sm:pr-6 md:pr-8">
          <h1
            ref={leftTextRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-right"
            style={{ 
              fontFamily: 'Philosopher, sans-serif',
              textShadow: '0 4px 20px rgba(0,0,0,0.3)',
              willChange: 'transform, opacity',
            }}
          >
            Luxury
          </h1>
        </div>
      </div>

      {/* Right Curtain - Turquoise/Teal Gradient with "Andamans" text */}
      <div
        ref={rightCurtainRef}
        className="absolute right-0 top-0 w-1/2 h-full flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #14b8a6 0%, #06b6d4 50%, #0ea5e9 100%)',
          willChange: 'transform',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
        }}
      >
        {/* Wave pattern overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='1' d='M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,106.7C960,117,1056,139,1152,133.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
          }}
        />
        
        {/* Floating palm trees decoration */}
        <div className="absolute top-1/3 right-1/4 opacity-10">
          <Palmtree size={70} className="text-white" />
        </div>
        <div className="absolute bottom-1/4 right-1/3 opacity-10">
          <Palmtree size={50} className="text-white" />
        </div>

        {/* "Andamans" text - moves with right curtain */}
        <div className="flex items-center justify-start w-full pl-4 sm:pl-6 md:pl-8">
          <h1
            ref={rightTextRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-left"
            style={{ 
              fontFamily: 'Philosopher, sans-serif',
              textShadow: '0 4px 20px rgba(0,0,0,0.3)',
              willChange: 'transform, opacity',
            }}
          >
            Andamans
          </h1>
        </div>
      </div>

      {/* Center Content - Icons and Tagline (appears after curtains close) */}
      <div 
        ref={iconsContainerRef}
        className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4"
        style={{ marginTop: '120px' }} // Push content down away from text
      >
        {/* Tropical Icons */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8 mb-3 sm:mb-4">
          <div className="animate-float" style={{ animationDelay: '0s' }}>
            <Ship size={28} className="sm:w-9 sm:h-9 md:w-10 md:h-10 text-white drop-shadow-lg" />
          </div>
          <div className="animate-float" style={{ animationDelay: '0.3s' }}>
            <Waves size={32} className="sm:w-10 sm:h-10 md:w-12 md:h-12 text-white drop-shadow-lg" />
          </div>
          <div className="animate-float" style={{ animationDelay: '0.6s' }}>
            <Palmtree size={28} className="sm:w-9 sm:h-9 md:w-10 md:h-10 text-white drop-shadow-lg" />
          </div>
        </div>

        {/* Tagline */}
        <p 
          className="text-white text-xs sm:text-sm md:text-base font-light tracking-wide text-center"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
        >
          Your Gateway to Paradise
        </p>
      </div>

      {/* Add floating animation keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default PageTransition; 