import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Tag, Sparkles } from 'lucide-react';

const OfferSticker = () => {
  const navigate = useNavigate();

  // Generate random particles
  const particles = [...Array(8)].map((_, i) => ({
    id: i,
    angle: Math.random() * 180 - 90, // -90 to 90 degrees (facing right)
    delay: Math.random() * 2,
    duration: 2 + Math.random(),
    size: Math.random() * 3 + 1
  }));

  return (
    <motion.div
      className="fixed left-0 top-1/2 z-50 cursor-pointer group"
      style={{ y: '-50%' }}
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      whileHover={{ x: 2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      onClick={() => navigate('/offer')}
    >
      {/* Radiating Glow Pulse */}
      <motion.div
        className="absolute inset-0 bg-amber-500/30 rounded-r-md blur-xl"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3] 
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Particles emitting from all exposed sides */}
      <div className="absolute inset-0 pointer-events-none overflow-visible">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute left-1/2 top-1/2 bg-amber-300 rounded-full shadow-[0_0_6px_#fbbf24]"
            style={{ width: p.size, height: p.size }}
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              x: Math.cos(p.angle * (Math.PI / 180)) * 40, // Move outward based on angle
              y: Math.sin(p.angle * (Math.PI / 180)) * 40,
              scale: [0, 1, 0]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      <div className="relative flex flex-col items-center gap-1.5 bg-gradient-to-b from-amber-500 via-orange-500 to-red-600 text-white py-3 px-1.5 rounded-r-lg shadow-[0_0_15px_rgba(245,158,11,0.5)] border-y border-r border-white/30 backdrop-blur-md overflow-hidden">
        
        {/* Continuous Shimmer */}
        <motion.div
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
          animate={{ translateX: ['100%', '250%'] }}
          transition={{ repeat: Infinity, duration: 2.5, repeatDelay: 1, ease: "easeInOut" }}
        />

        {/* Icon */}
        <div className="relative z-10">
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ repeat: Infinity, duration: 3, repeatDelay: 0 }}
          >
            <Tag className="w-4 h-4 fill-white/20 drop-shadow-md" />
          </motion.div>
          <motion.div
             animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5], rotate: [0, 180, 360] }}
             transition={{ repeat: Infinity, duration: 3 }}
             className="absolute -top-1 -right-1"
          >
            <Sparkles className="w-2.5 h-2.5 text-yellow-100" />
          </motion.div>
        </div>

        {/* Vertical Text */}
        <div 
          className="rotate-180 py-1 relative z-10" 
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
            <span className="text-[11px] font-black tracking-widest uppercase text-white drop-shadow-md whitespace-nowrap font-display">
              Offers
            </span>
        </div>
        
      </div>
    </motion.div>
  );
};

export default OfferSticker;
