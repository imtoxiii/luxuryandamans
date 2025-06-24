import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Instant scroll to top on route change to prevent jarring animation
    window.scrollTo(0, 0);
  }, [location.pathname]);
};