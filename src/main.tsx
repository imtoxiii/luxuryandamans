import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';

// Remove loading skeleton once React is ready
const removeLoadingSkeleton = () => {
  const skeleton = document.getElementById('loading-skeleton');
  if (skeleton) {
    // Add fade-out class
    skeleton.classList.add('fade-out');
    // Remove from DOM after animation
    setTimeout(() => {
      skeleton.remove();
    }, 400);
  }
};

// Enhanced smooth scrolling for cursor/mouse wheel
const initSmoothScrolling = () => {
  // Ensure smooth scroll behavior is applied
  document.documentElement.style.scrollBehavior = 'smooth';
  
  // Optimize scroll performance with RAF
  let ticking = false;

  const optimizeScroll = () => {
    ticking = false;
    // Scroll optimizations handled by CSS
  };

  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(optimizeScroll);
      ticking = true;
    }
  };

  // Passive scroll listener for better performance
  window.addEventListener('scroll', handleScroll, { passive: true });
};

const AppWrapper = () => {
  useEffect(() => {
    // Remove skeleton immediately when component mounts - React is ready!
    removeLoadingSkeleton();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
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