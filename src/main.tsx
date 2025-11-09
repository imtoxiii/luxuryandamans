import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';
import { requestIdleTask } from './lib/performanceOptimizer';

const AppWrapper = () => {
  useEffect(() => {
    // Remove loading skeleton with smooth transition
    const skeleton = document.getElementById('loading-skeleton');
    if (skeleton) {
      skeleton.classList.add('hidden');
      setTimeout(() => skeleton.remove(), 300);
    }

    // Performance optimizations for mobile
    requestIdleTask(() => {
      // Optimize images after initial render
      const images = document.querySelectorAll('img[loading="lazy"]');
      images.forEach((img) => {
        if (img instanceof HTMLImageElement) {
          // Force decode images in idle time
          img.decode?.().catch(() => {});
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

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(<AppWrapper />);
}