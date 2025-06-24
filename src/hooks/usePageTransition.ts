import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const usePageTransition = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionPhase, setTransitionPhase] = useState<'idle' | 'wipe-in' | 'content-swap' | 'wipe-out'>('idle');
  const [displayLocation, setDisplayLocation] = useState(useLocation());
  const currentLocation = useLocation();
  
  useEffect(() => {
    // If location changed, start transition
    if (currentLocation.pathname !== displayLocation.pathname) {
      setIsTransitioning(true);
      setTransitionPhase('wipe-in');

      // Phase 1: Walls close over current page (0-600ms)
      const wipeInTimer = setTimeout(() => {
        setTransitionPhase('content-swap');
        // Update displayed location while walls are closed
        setDisplayLocation(currentLocation);
      }, 600);

      // Phase 2: Hold closed while new page renders (600-1200ms)
      const contentSwapTimer = setTimeout(() => {
        setTransitionPhase('wipe-out');
      }, 1200);

      // Phase 3: Walls open to reveal new page (1200-2200ms)
      const wipeOutTimer = setTimeout(() => {
        setTransitionPhase('idle');
        setIsTransitioning(false);
      }, 2200);

      return () => {
        clearTimeout(wipeInTimer);
        clearTimeout(contentSwapTimer);
        clearTimeout(wipeOutTimer);
      };
    }
  }, [currentLocation]);

  return {
    isTransitioning,
    transitionPhase,
    displayLocation
  };
}; 