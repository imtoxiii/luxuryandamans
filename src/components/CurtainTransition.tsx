import React from 'react';
import { motion } from 'framer-motion';

/**
 * Angled two-panel curtain used between page navigations.
 * Both panels close over the old page, hold while the new page mounts,
 * then slide back out. Timings are coordinated with usePageTransition:
 * panels take 0.8s to close — the content swap happens at 850ms.
 */

const CURTAIN_EASE = [0.22, 1, 0.36, 1] as const;

// Inline film grain — no external texture request (the old cubes.png came from
// a third-party CDN and could fail/flicker offline)
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)'/%3E%3C/svg%3E\")";

const CurtainTransition: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center pointer-events-none overflow-hidden">

      {/* Left Curtain - Angled Edge */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: '0%' }}
        exit={{ x: '-100%' }}
        transition={{ duration: 0.8, ease: CURTAIN_EASE }}
        className="fixed top-0 left-0 w-[60%] h-full bg-[#0f172a] z-50 shadow-2xl will-change-transform"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)'
        }}
      >
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: GRAIN }} />
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-blue-400/50 to-transparent" />
      </motion.div>

      {/* Right Curtain - Angled Edge */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: '0%' }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.8, ease: CURTAIN_EASE }}
        className="fixed top-0 right-0 w-[60%] h-full bg-[#0f172a] z-50 shadow-2xl will-change-transform"
        style={{
          clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)'
        }}
      >
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: GRAIN }} />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-blue-400/50 to-transparent" />
      </motion.div>

      {/* Center Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2, delay: 0 } }}
        transition={{ delay: 0.35, duration: 0.4, ease: 'easeOut' }}
        className="relative z-[60] flex flex-col items-center justify-center w-full px-4"
      >
        <div className="relative p-6 md:p-8">
          {/* Rotating Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-blue-500/20 rounded-full border-t-transparent border-l-transparent"
          />

          <div className="flex flex-col items-center relative z-10">
            <div className="flex items-center gap-3 md:gap-4 mb-4">
              <div className="p-2.5 md:p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20 backdrop-blur-sm shadow-lg">
                <img src="/images/luxury-andamans-logo.png" alt="Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
              </div>
              <div className="text-left">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white leading-none tracking-tight">
                  Luxury
                </h2>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 leading-none tracking-tight">
                  Andamans
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full justify-center max-w-[200px] md:max-w-none">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-blue-500/30" />
              <p className="text-blue-200/60 text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-medium whitespace-nowrap">
                Loading Experience
              </p>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-blue-500/30" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CurtainTransition;
