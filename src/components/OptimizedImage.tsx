import React, { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
}

/**
 * Highly optimized image component for mobile performance
 * - Automatic WebP conversion for Unsplash images
 * - Responsive srcset for different screen sizes
 * - Lazy loading with intersection observer
 * - LQIP (Low Quality Image Placeholder) support
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  sizes
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLDivElement>(null);

  // Generate optimized URLs for different sizes
  const generateUrl = (baseUrl: string, targetWidth: number, format: 'webp' | 'jpg' = 'webp') => {
    if (baseUrl.includes('unsplash.com')) {
      const url = new URL(baseUrl);
      url.searchParams.set('auto', 'format');
      url.searchParams.set('fit', 'crop');
      url.searchParams.set('fm', format);
      url.searchParams.set('q', '75');
      url.searchParams.set('w', targetWidth.toString());
      if (height) {
        const aspectRatio = width ? height / width : 1;
        url.searchParams.set('h', Math.floor(targetWidth * aspectRatio).toString());
      }
      return url.toString();
    }
    return baseUrl;
  };

  // Generate srcset for responsive images
  const srcSet = React.useMemo(() => {
    if (!src.includes('unsplash.com') || !width) return undefined;
    
    const widths = [320, 640, 768, 1024, 1280, 1920];
    return widths
      .filter(w => w <= (width * 2)) // Only include sizes up to 2x the target
      .map(w => `${generateUrl(src, w)} ${w}w`)
      .join(', ');
  }, [src, width, height]);

  // Generate tiny LQIP
  const lqip = React.useMemo(() => {
    if (src.includes('unsplash.com')) {
      const url = new URL(src);
      url.searchParams.set('w', '20');
      url.searchParams.set('q', '10');
      url.searchParams.set('blur', '50');
      url.searchParams.set('fm', 'webp');
      return url.toString();
    }
    return undefined;
  }, [src]);

  // Intersection observer for lazy loading
  useEffect(() => {
    if (priority || !imgRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px 0px', threshold: 0.01 }
    );

    observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, [priority]);

  // Default sizes if not provided
  const sizesAttr = sizes || (width 
    ? `(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, ${width}px`
    : '100vw'
  );

  return (
    <div 
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: width && height ? `${width}/${height}` : undefined }}
    >
      {/* LQIP - Tiny blurred placeholder */}
      {lqip && !isLoaded && (
        <img
          src={lqip}
          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110"
          style={{ filter: 'blur(20px)' }}
          aria-hidden="true"
        />
      )}

      {/* Loading skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

      {/* Main image with WebP support */}
      {isInView && (
        <picture>
          {src.includes('unsplash.com') && (
            <>
              <source
                type="image/webp"
                srcSet={srcSet}
                sizes={sizesAttr}
              />
              <source
                type="image/jpeg"
                srcSet={srcSet?.replace(/fm=webp/g, 'fm=jpg')}
                sizes={sizesAttr}
              />
            </>
          )}
          <img
            src={generateUrl(src, width || 1200)}
            alt={alt}
            width={width}
            height={height}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            style={{ 
              contentVisibility: priority ? 'visible' : 'auto',
            }}
          />
        </picture>
      )}
    </div>
  );
};

export default OptimizedImage;
