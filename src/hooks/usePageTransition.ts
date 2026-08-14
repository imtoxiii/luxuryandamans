import { useState, useEffect } from 'react';
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

      // Phase 1: Curtains close over the current page (panels take 800ms —
      // swap only once the screen is fully covered to avoid a visible content pop)
      const wipeInTimer = setTimeout(() => {
        setTransitionPhase('content-swap');
        // Update displayed location while the screen is covered
        setDisplayLocation(currentLocation);
      }, 850);

      // Phase 2: Hold closed while the new page renders (850-1250ms)
      const contentSwapTimer = setTimeout(() => {
        setTransitionPhase('wipe-out');
      }, 1250);

      // Phase 3: Curtains slide out to reveal the new page (1250-2100ms)
      const wipeOutTimer = setTimeout(() => {
        setTransitionPhase('idle');
        setIsTransitioning(false);
      }, 2100);

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