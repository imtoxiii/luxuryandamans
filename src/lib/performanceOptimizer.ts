/**
 * Performance Optimization Utilities
 * Handles mobile-specific optimizations for better PageSpeed scores
 */

// Detect if user is on a slow connection
export const isSlowConnection = (): boolean => {
  if ('connection' in navigator) {
    const conn = (navigator as any).connection;
    return conn && (conn.effectiveType === 'slow-2g' || conn.effectiveType === '2g' || conn.saveData);
  }
  return false;
};

// Check if device is mobile
export const isMobileDevice = (): boolean => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Get optimal image quality based on connection and device
export const getOptimalImageQuality = (): number => {
  if (isSlowConnection()) return 50;
  if (isMobileDevice()) return 65;
  return 80;
};

// Get optimal image width for device
export const getOptimalImageWidth = (targetWidth: number): number => {
  const devicePixelRatio = window.devicePixelRatio || 1;
  const screenWidth = window.innerWidth;
  
  // On mobile, limit to screen width * DPR
  if (isMobileDevice()) {
    return Math.min(targetWidth, Math.floor(screenWidth * devicePixelRatio));
  }
  
  return targetWidth;
};

// Optimize Unsplash URL for current device and connection
export const optimizeUnsplashUrl = (
  url: string, 
  width?: number, 
  height?: number,
  customQuality?: number
): string => {
  if (!url.includes('unsplash.com')) return url;
  
  try {
    const urlObj = new URL(url);
    const quality = customQuality || getOptimalImageQuality();
    const optimalWidth = width ? getOptimalImageWidth(width) : undefined;
    
    // Set optimal parameters
    urlObj.searchParams.set('auto', 'format');
    urlObj.searchParams.set('fit', 'crop');
    urlObj.searchParams.set('fm', 'webp'); // Force WebP
    urlObj.searchParams.set('q', quality.toString());
    
    if (optimalWidth) {
      urlObj.searchParams.set('w', optimalWidth.toString());
    }
    
    if (height && optimalWidth) {
      const aspectRatio = height / (width || optimalWidth);
      urlObj.searchParams.set('h', Math.floor(optimalWidth * aspectRatio).toString());
    }
    
    return urlObj.toString();
  } catch (error) {
    console.error('Error optimizing Unsplash URL:', error);
    return url;
  }
};

// Generate responsive srcset for Unsplash images
export const generateResponsiveSrcSet = (
  url: string,
  baseWidth: number,
  baseHeight?: number
): string => {
  if (!url.includes('unsplash.com')) return '';
  
  const widths = [320, 640, 768, 1024, 1280, 1920];
  const quality = getOptimalImageQuality();
  
  return widths
    .filter(w => w <= baseWidth * 2) // Up to 2x for retina
    .map(w => {
      try {
        const urlObj = new URL(url);
        urlObj.searchParams.set('auto', 'format');
        urlObj.searchParams.set('fit', 'crop');
        urlObj.searchParams.set('fm', 'webp');
        urlObj.searchParams.set('q', quality.toString());
        urlObj.searchParams.set('w', w.toString());
        
        if (baseHeight) {
          const aspectRatio = baseHeight / baseWidth;
          urlObj.searchParams.set('h', Math.floor(w * aspectRatio).toString());
        }
        
        return `${urlObj.toString()} ${w}w`;
      } catch {
        return null;
      }
    })
    .filter(Boolean)
    .join(', ');
};

// Generate LQIP (Low Quality Image Placeholder)
export const generateLQIP = (url: string): string | undefined => {
  if (!url.includes('unsplash.com')) return undefined;
  
  try {
    const urlObj = new URL(url);
    urlObj.searchParams.set('w', '20');
    urlObj.searchParams.set('q', '10');
    urlObj.searchParams.set('blur', '50');
    urlObj.searchParams.set('fm', 'webp');
    return urlObj.toString();
  } catch {
    return undefined;
  }
};

// Preload critical images
export const preloadImage = (url: string, priority: 'high' | 'low' = 'high'): void => {
  if (typeof document === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = url;
  link.fetchPriority = priority;
  document.head.appendChild(link);
};

// Debounce function for performance
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle function for performance
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Measure and log performance metrics
export const measurePerformance = (metricName: string, callback: () => void): void => {
  const start = performance.now();
  callback();
  const end = performance.now();
  console.log(`[Performance] ${metricName}: ${(end - start).toFixed(2)}ms`);
};

// Request idle callback wrapper
export const requestIdleTask = (callback: () => void, timeout: number = 2000): void => {
  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(callback, { timeout });
  } else {
    setTimeout(callback, 1);
  }
};
