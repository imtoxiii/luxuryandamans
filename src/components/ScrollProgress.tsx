import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface ScrollProgressProps {
  color?: string;
  height?: number;
  showPercentage?: boolean;
}

const ScrollProgress = ({
  color = '#0EA5E9',
  height = 3,
  showPercentage = false,
}: ScrollProgressProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setPercentage(Math.round(latest * 100));
      setIsVisible(latest > 0.01);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[10003] origin-left"
        style={{
          scaleX,
          height: `${height}px`,
          background: color,
          opacity: isVisible ? 1 : 0,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />

      {/* Percentage indicator */}
      {showPercentage && isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed top-4 right-4 z-[10003] px-3 py-1 bg-white shadow-lg rounded-full text-sm font-semibold"
          style={{ color }}
        >
          {percentage}%
        </motion.div>
      )}
    </>
  );
};

export default ScrollProgress;
