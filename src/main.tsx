import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { MotionConfig } from 'framer-motion';
import App from './App';
import './index.css';
import { requestIdleTask } from './lib/performanceOptimizer';
import { applyPerformanceOptimizations } from './utils/performance';

const AppWrapper = () => {
  // Run optimization check once on mount
  const isLowEnd = applyPerformanceOptimizations();

  useEffect(() => {
    // Loader is now handled in App.tsx and Home.tsx to wait for assets

    requestIdleTask(() => {
      // Optimize images after initial render
      const images = document.querySelectorAll('img[loading="lazy"]');
      images.forEach((img) => {
        if (img instanceof HTMLImageElement) {
            // Force decode images in idle time
            img.decode?.().catch(() => { });
        }
      });
    });
  }, []);

  return (
    <StrictMode>
      <HelmetProvider>
        <MotionConfig reducedMotion={isLowEnd ? "always" : "user"}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </MotionConfig>
      </HelmetProvider>
    </StrictMode>
  );
};

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(<AppWrapper />);
}