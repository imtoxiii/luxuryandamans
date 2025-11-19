import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';
import { requestIdleTask } from './lib/performanceOptimizer';

const AppWrapper = () => {
  useEffect(() => {
    // Handle the HTML loader transition
    const skeleton = document.getElementById('loading-skeleton');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    
    // Clear the simulation interval
    if ((window as any).loaderInterval) {
      clearInterval((window as any).loaderInterval);
    }

    if (skeleton && progressBar && progressText) {
      // Force progress to 100%
      progressBar.style.width = '100%';
      progressText.textContent = '100%';
      
      // Wait a moment for the 100% to be seen, then fade out
      setTimeout(() => {
        skeleton.classList.add('hidden');
        setTimeout(() => skeleton.remove(), 500);
      }, 500);
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