import React, { useState, useEffect, useRef, ImgHTMLAttributes } from 'react';
import { 
  getImageFocusInfo, 
  getOptimalPosition, 
  detectOrientationFromDimensions,
  ImageOrientation 
} from '../lib/imageFocus';

interface SmartImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'onLoad' | 'onError'> {
  src: string;
  alt: string;
  /** Type of container - affects how portrait images are handled */
  containerType?: 'card' | 'hero' | 'gallery' | 'thumbnail';
  /** Whether to animate on load */
  animateOnLoad?: boolean;
  /** Fallback image if main image fails to load */
  fallbackSrc?: string;
  /** Additional class names */
  className?: string;
  /** Callback when image loads successfully */
  onImageLoad?: (dimensions: { width: number; height: number; orientation: ImageOrientation }) => void;
  /** Callback when image fails to load */
  onImageError?: () => void;
  /** Whether to apply blur-up loading effect */
  blurOnLoad?: boolean;
  /** Force a specific object-position (overrides auto-detection) */
  forcePosition?: string;
}

/**
 * SmartImage Component
 * 
 * Intelligent image component that:
 * 1. Parses filename for focus hints (_top, _center, _portrait, etc.)
 * 2. Detects actual image orientation on load
 * 3. Dynamically adjusts object-position for optimal display
 * 4. Handles loading states and errors gracefully
 * 5. Optimizes portrait images in landscape containers
 */
const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  containerType = 'card',
  animateOnLoad = true,
  fallbackSrc = '/images/hero-home.webp',
  className = '',
  onImageLoad,
  onImageError,
  blurOnLoad = false,
  forcePosition,
  ...imgProps
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [objectPosition, setObjectPosition] = useState<string>('center center');
  const [scale, setScale] = useState<number>(1);
  const [currentSrc, setCurrentSrc] = useState(src);

  // Get initial position from filename analysis
  useEffect(() => {
    if (forcePosition) {
      setObjectPosition(forcePosition);
      return;
    }
    
    const focusInfo = getImageFocusInfo(src);
    setObjectPosition(focusInfo.cssPosition);
    
    // Apply initial scale for portrait images
    if (focusInfo.isPortrait && (containerType === 'card' || containerType === 'hero')) {
      setScale(1.15);
    }
  }, [src, forcePosition, containerType]);

  // Handle image load - detect actual dimensions and adjust if needed
  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
    
    if (imgRef.current) {
      const { naturalWidth, naturalHeight } = imgRef.current;
      const orientation = detectOrientationFromDimensions(naturalWidth, naturalHeight);
      
      if (!forcePosition) {
        // Get optimal position based on actual dimensions
        const optimalPosition = getOptimalPosition(src, naturalWidth, naturalHeight);
        setObjectPosition(optimalPosition);
        
        // Apply scaling for portrait images in card/hero containers
        if (orientation === 'portrait' && (containerType === 'card' || containerType === 'hero')) {
          // Scale up portrait images to fill container better
          setScale(1.15);
        } else {
          setScale(1);
        }
      }
      
      onImageLoad?.({ 
        width: naturalWidth, 
        height: naturalHeight, 
        orientation 
      });
    }
  };

  // Handle image error - try fallback
  const handleError = () => {
    if (currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setHasError(true);
    }
    onImageError?.();
  };

  // Update current src when prop changes
  useEffect(() => {
    setCurrentSrc(src);
    setIsLoaded(false);
    setHasError(false);
  }, [src]);

  const baseClasses = `
    w-full h-full object-cover transition-all duration-700
    ${blurOnLoad && !isLoaded ? 'blur-sm scale-105' : 'blur-0 scale-100'}
    ${animateOnLoad && !isLoaded ? 'opacity-0' : 'opacity-100'}
  `;

  // Container-specific tweaks
  const containerStyles: Record<string, React.CSSProperties> = {
    card: {
      transform: `scale(${scale})`,
    },
    hero: {
      transform: `scale(${scale})`,
    },
    gallery: {
      transform: 'none',
    },
    thumbnail: {
      transform: `scale(${Math.min(scale, 1.1)})`,
    },
  };

  return (
    <img
      ref={imgRef}
      src={currentSrc}
      alt={hasError ? `${alt} (using fallback)` : alt}
      className={`${baseClasses} ${className}`.trim()}
      style={{
        objectPosition,
        ...containerStyles[containerType],
        ...imgProps.style,
      }}
      onLoad={handleLoad}
      onError={handleError}
      loading="lazy"
      decoding="async"
      {...imgProps}
    />
  );
};

export default SmartImage;

/**
 * Hook for using smart image positioning in custom components
 */
export const useSmartImage = (src: string) => {
  const [imageInfo, setImageInfo] = useState({
    isLoaded: false,
    position: 'center center',
    orientation: 'unknown' as ImageOrientation,
    isPortrait: false,
  });

  useEffect(() => {
    const focusInfo = getImageFocusInfo(src);
    setImageInfo(prev => ({
      ...prev,
      position: focusInfo.cssPosition,
      orientation: focusInfo.orientation,
      isPortrait: focusInfo.isPortrait,
    }));

    // Preload image to get actual dimensions
    const img = new Image();
    img.onload = () => {
      const orientation = detectOrientationFromDimensions(img.naturalWidth, img.naturalHeight);
      const optimalPosition = getOptimalPosition(src, img.naturalWidth, img.naturalHeight);
      setImageInfo({
        isLoaded: true,
        position: optimalPosition,
        orientation,
        isPortrait: orientation === 'portrait',
      });
    };
    img.src = src;
  }, [src]);

  return imageInfo;
};
