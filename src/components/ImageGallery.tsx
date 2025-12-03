import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  captions?: string[];
  onClose: () => void;
  initialIndex?: number;
}

const ImageGallery = ({ images, captions, onClose, initialIndex = 0 }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  }, [images.length]);

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.5, 1));
    if (zoomLevel <= 1.5) {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleReset = () => {
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === '+' || e.key === '=') handleZoomIn();
      if (e.key === '-' || e.key === '_') handleZoomOut();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, handlePrevious, handleNext]);

  // Prevent body scroll when gallery is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[20000] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center"
        onClick={onClose}
      >
        {/* Top Bar */}
        {/* Top Bar */}
        <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-6 py-4 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
          {/* Counter - Top Left */}
          <div className="text-white/90 font-medium tracking-wide bg-black/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 pointer-events-auto">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Controls Container - Top Right */}
          <div className="flex items-center gap-3 pointer-events-auto">
            {/* Zoom Controls - Hidden on very small screens if needed, or compact */}
            <div className="hidden md:flex items-center gap-1 bg-black/40 backdrop-blur-md rounded-full p-1 border border-white/10">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleZoomOut();
                }}
                className="p-2 hover:bg-white/20 rounded-full transition-colors text-white/80 hover:text-white"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleReset();
                }}
                className="p-2 hover:bg-white/20 rounded-full transition-colors text-white/80 hover:text-white"
                title="Reset Zoom"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleZoomIn();
                }}
                className="p-2 hover:bg-white/20 rounded-full transition-colors text-white/80 hover:text-white"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>

            {/* Close Button - Prominent and Always Visible */}
            <button
              onClick={onClose}
              className="p-3 bg-white hover:bg-gray-100 text-black rounded-full transition-all transform hover:scale-110 shadow-lg backdrop-blur-md border border-white/20 active:scale-95 mt-2"
              aria-label="Close gallery"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Zoom Controls - Bottom Right Floating */}
        <div className="md:hidden absolute bottom-24 right-4 z-50 flex flex-col gap-2 pointer-events-auto">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleZoomIn();
            }}
            className="p-3 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-white shadow-lg active:bg-black/60"
          >
            <ZoomIn className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleZoomOut();
            }}
            className="p-3 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-white shadow-lg active:bg-black/60"
          >
            <ZoomOut className="w-5 h-5" />
          </button>
        </div>

        {/* Main Image Area */}
        <div className="relative w-full h-full flex items-center justify-center p-4 md:p-12 overflow-hidden">
          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
                className="absolute left-4 md:left-8 z-40 p-3 md:p-4 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-white/80 hover:text-white transition-all transform hover:scale-110 border border-white/10"
              >
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 md:right-8 z-40 p-3 md:p-4 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-white/80 hover:text-white transition-all transform hover:scale-110 border border-white/10"
              >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            </>
          )}

          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full h-full flex items-center justify-center"
            style={{
              cursor: isDragging ? 'grabbing' : (zoomLevel > 1 ? 'grab' : 'default'),
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <motion.img
              src={images[currentIndex]}
              alt={captions?.[currentIndex] || `Image ${currentIndex + 1}`}
              className="max-w-full max-h-[80vh] object-contain shadow-2xl rounded-sm"
              style={{
                scale: zoomLevel,
                x: position.x,
                y: position.y,
              }}
              drag={zoomLevel > 1}
              dragConstraints={{ left: -1000, right: 1000, top: -1000, bottom: 1000 }}
              dragElastic={0.1}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={() => setIsDragging(false)}
            />
          </motion.div>
        </div>

        {/* Bottom Area: Caption & Thumbnails */}
        <div
          className="absolute bottom-0 left-0 right-0 z-50 flex flex-col items-center gap-4 pb-6 pt-12 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Caption */}
          {captions && captions[currentIndex] && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              key={`caption-${currentIndex}`}
              className="text-white/90 text-center max-w-3xl px-4 text-sm md:text-base font-light tracking-wide"
            >
              {captions[currentIndex]}
            </motion.p>
          )}

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="w-full max-w-5xl px-4 overflow-x-auto no-scrollbar">
              <div className="flex justify-center gap-2 min-w-max px-4">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setZoomLevel(1);
                      setPosition({ x: 0, y: 0 });
                    }}
                    className={`relative flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden transition-all duration-300 ${index === currentIndex
                      ? 'ring-2 ring-white scale-110 opacity-100'
                      : 'opacity-40 hover:opacity-80 hover:scale-105'
                      }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageGallery;
