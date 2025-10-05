import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top immediately and also after a short delay to ensure page transition
    window.scrollTo(0, 0);
    
    // Additional scroll after transition starts to catch any cases
    const scrollTimer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    // Final scroll to ensure we're at top after page fully loads
    const finalScrollTimer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 700); // After displayLocation updates in transition

    return () => {
      clearTimeout(scrollTimer);
      clearTimeout(finalScrollTimer);
    };
  }, [location.pathname]);
};