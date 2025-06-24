import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageTransitionProps {
  onComplete?: () => void;
}

const PageTransition: React.FC<PageTransitionProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'wipe-in' | 'show-logo' | 'wipe-out'>('wipe-in');

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setPhase('show-logo');
    }, 100); // Start showing text almost immediately

    const timer2 = setTimeout(() => {
      setPhase('wipe-out');
    }, 1200); // Hold the closed state

    const timer3 = setTimeout(() => {
      onComplete?.();
    }, 2200); // 1200ms (start) + 1000ms (opening duration)

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[10001] pointer-events-none flex">
      {/* Left Wipe Curtain (Wall) */}
      <motion.div
        className="relative w-1/2 h-full bg-black flex items-center justify-end overflow-hidden"
        initial={{ x: '-100%' }}
        animate={{
          x: phase === 'wipe-in' || phase === 'show-logo' ? '0%' : '-100%'
        }}
        transition={{
          duration: phase === 'wipe-out' ? 1.0 : 0.6,
          ease: "easeInOut",
        }}
      >
        <motion.h1
          className="text-4xl font-bold text-white whitespace-nowrap pr-30"
          style={{ fontFamily: 'Philosopher, sans-serif' }}
          initial={{ opacity: 0, x: -50 }}
          animate={{
            opacity: (phase === 'show-logo' || phase === 'wipe-out') ? 1 : 0,
            x: phase === 'show-logo' ? 0 : -50
          }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        >
          Luxury
        </motion.h1>
      </motion.div>

      {/* Right Wipe Curtain (Wall) */}
      <motion.div
        className="relative w-1/2 h-full bg-black flex items-center justify-start overflow-hidden"
        initial={{ x: '100%' }}
        animate={{
          x: phase === 'wipe-in' || phase === 'show-logo' ? '0%' : '100%'
        }}
        transition={{
          duration: phase === 'wipe-out' ? 1.0 : 0.6,
          ease: "easeInOut",
        }}
      >
        <motion.h1
          className="text-4xl font-bold text-white whitespace-nowrap pl-30"
          style={{ fontFamily: 'Philosopher, sans-serif' }}
          initial={{ opacity: 0, x: 50 }}
          animate={{
            opacity: (phase === 'show-logo' || phase === 'wipe-out') ? 1 : 0,
            x: phase === 'show-logo' ? 0 : 50
          }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        >
          Andamans
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default PageTransition; 