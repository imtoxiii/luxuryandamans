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
    // GSAP animations optimized for low-end devices
    const ctx = gsap.context(() => {
      // Set initial states with proper transforms and GPU acceleration
      gsap.set([leftCurtainRef.current, rightCurtainRef.current], {
        force3D: true,
      });
      
      gsap.set(leftCurtainRef.current, {
        x: '-100%',
      });
      
      gsap.set(rightCurtainRef.current, {
        x: '100%',
      });

      const tl = gsap.timeline({
        defaults: {
          ease: 'power1.inOut', // Lighter easing for smoother performance
        }
      });

      // Curtains slide in - faster duration for low-end devices
      tl.to(
        leftCurtainRef.current,
        {
          x: '0%',
          duration: 0.5,
          force3D: true,
        },
        0
      );

      tl.to(
        rightCurtainRef.current,
        {
          x: '0%',
          duration: 0.5,
          force3D: true,
        },
        0
      );

      // Text fade in - simplified animation
      tl.to(
        [leftTextRef.current, rightTextRef.current],
        {
          opacity: 1,
          duration: 0.3,
        },
        0.15
      );

      // Icons appear - simplified with no scale for better performance
      tl.to(
        iconsContainerRef.current,
        {
          opacity: 1,
          duration: 0.3,
        },
        0.5
      );

      // Hold for a shorter moment
      tl.to({}, { duration: 0.4 }, 0.8);

      // Icons fade out
      tl.to(
        iconsContainerRef.current,
        {
          opacity: 0,
          duration: 0.25,
        },
        1.2
      );

      // Text fades out
      tl.to(
        [leftTextRef.current, rightTextRef.current],
        {
          opacity: 0,
          duration: 0.3,
        },
        1.3
      );

      // Curtains open - smooth and fast
      tl.to(
        leftCurtainRef.current,
        {
          x: '-100%',
          duration: 0.5,
          ease: 'power1.inOut',
          force3D: true,
        },
        1.4
      );

      tl.to(
        rightCurtainRef.current,
        {
          x: '100%',
          duration: 0.5,
          ease: 'power1.inOut',
          force3D: true,
          onComplete: () => {
            onComplete?.();
          }
        },
        1.4
      );
    });

    return () => {
      ctx.revert();
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[10001] pointer-events-none overflow-hidden">
      {/* Left Curtain - Ocean Blue Gradient with "Luxury" text */}
      <div
        ref={leftCurtainRef}
        className="absolute top-0 bottom-0 flex items-center justify-center"
        style={{
          left: 0,
          width: '50vw',
          background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 50%, #14b8a6 100%)',
          willChange: 'transform',
          transform: 'translate3d(-100%, 0, 0)',
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
              opacity: 0,
            }}
          >
            Luxury
          </h1>
        </div>
      </div>

      {/* Right Curtain - Turquoise/Teal Gradient with "Andamans" text */}
      <div
        ref={rightCurtainRef}
        className="absolute top-0 bottom-0 flex items-center justify-center"
        style={{
          right: 0,
          width: '50vw',
          background: 'linear-gradient(135deg, #14b8a6 0%, #06b6d4 50%, #0ea5e9 100%)',
          willChange: 'transform',
          transform: 'translate3d(100%, 0, 0)',
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
              opacity: 0,
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
        style={{ 
          marginTop: '120px',
          opacity: 0,
        }}
      >
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