import { StrictMode, useEffect } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';
import { requestIdleTask } from './lib/performanceOptimizer';
import { applyPerformanceOptimizations } from './utils/performance';

const AppWrapper = () => {
  useEffect(() => {
    // Apply low-power CSS optimizations (non-motion related) after mount
    applyPerformanceOptimizations();

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
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </StrictMode>
  );
};

const container = document.getElementById('root');

if (container) {
  const app = <AppWrapper />;
  // Reuse prerendered DOM when present; otherwise createRoot for empty #root (dev / first visit)
  if (container.hasChildNodes()) {
    hydrateRoot(container, app);
  } else {
    createRoot(container).render(app);
  }
}