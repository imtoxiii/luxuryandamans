import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

/**
 * Component to add dynamic resource hints based on the current route
 * Improves mobile performance by preloading/prefetching critical resources
 */
export const ResourceHints = () => {
  const location = useLocation();

  useEffect(() => {
    // Preconnect to critical third-party domains
    const preconnectDomains = [
      'https://images.unsplash.com',
      'https://plus.unsplash.com',
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
    ];

    preconnectDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      
      // Check if not already added
      if (!document.querySelector(`link[href="${domain}"][rel="preconnect"]`)) {
        document.head.appendChild(link);
      }
    });
  }, []);

  // Route-specific preloading
  const getRouteSpecificHints = () => {
    const path = location.pathname;

    // Home page - preload critical images
    if (path === '/') {
      return (
        <>
          <link rel="preload" href="/src/img/hero-background.png" as="image" fetchPriority="high" />
        </>
      );
    }

    // Destinations page - prefetch destination images
    if (path.startsWith('/destinations')) {
      return (
        <>
          <link rel="prefetch" as="image" href="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=640&fm=webp&q=65" />
        </>
      );
    }

    return null;
  };

  return (
    <Helmet>
      {getRouteSpecificHints()}
      
      {/* DNS prefetch for external resources */}
      <link rel="dns-prefetch" href="https://images.unsplash.com" />
      <link rel="dns-prefetch" href="https://plus.unsplash.com" />
      
      {/* Preload critical fonts */}
      <link
        rel="preload"
        href="https://api.fontshare.com/v2/css?f[]=clash-display@600,700&display=swap"
        as="style"
      />
    </Helmet>
  );
};

export default ResourceHints;
