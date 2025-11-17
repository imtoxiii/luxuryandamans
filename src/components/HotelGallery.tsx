import React, { useState, useEffect } from 'react';
import { 
  getHotelImageSet, 
  getHotelsByCategory, 
  getRoomTypeImages, 
  filterExistingImages,
  type HotelCategory,
  type HotelImageSet 
} from '../lib/imageLoader';
import { ChevronLeft, ChevronRight, Star, X } from 'lucide-react';

interface HotelGalleryProps {
  packageSlug: string;
  category: HotelCategory;
  hotelName: string;
  roomType?: string;
  showThumbnails?: boolean;
  className?: string;
}

/**
 * Hotel Gallery Component
 * Automatically loads and displays hotel images from the folder structure
 */
export const HotelGallery: React.FC<HotelGalleryProps> = ({
  packageSlug,
  category,
  hotelName,
  roomType,
  showThumbnails = true,
  className = ''
}) => {
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      setLoading(true);
      
      let imageList: string[];
      
      if (roomType) {
        // Load room-specific images
        imageList = getRoomTypeImages(packageSlug, category, hotelName, roomType);
      } else {
        // Load general hotel images
        const hotelSet = getHotelImageSet(packageSlug, category, hotelName);
        imageList = hotelSet.images;
      }
      
      // Filter to only existing images
      const existingImages = await filterExistingImages(imageList);
      setImages(existingImages);
      setLoading(false);
    };

    loadImages();
  }, [packageSlug, category, hotelName, roomType]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  if (loading) {
    return (
      <div className={`animate-pulse bg-gray-200 rounded-xl ${className}`} style={{ height: '300px' }}>
        <div className="flex items-center justify-center h-full">
          <span className="text-gray-400">Loading images...</span>
        </div>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className={`bg-gray-100 rounded-xl flex items-center justify-center ${className}`} style={{ height: '300px' }}>
        <div className="text-center text-gray-500">
          <p className="mb-2">No images available</p>
          <p className="text-sm">Add images to: hotels/{category}/{hotelName.toLowerCase().replace(/\s+/g, '-')}/</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={`relative ${className}`}>
        {/* Main Image */}
        <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden group">
          <img
            src={images[currentIndex]}
            alt={`${hotelName} - Image ${currentIndex + 1}`}
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => openModal(currentIndex)}
          />
          
          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full transition-all shadow-lg opacity-0 group-hover:opacity-100"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full transition-all shadow-lg opacity-0 group-hover:opacity-100"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
          
          {/* Image Counter */}
          <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm">
            {currentIndex + 1} / {images.length}
          </div>
          
          {/* Hotel Name Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <h3 className="text-white font-bold text-lg">{hotelName}</h3>
            {roomType && (
              <p className="text-white/80 text-sm">{roomType}</p>
            )}
          </div>
        </div>

        {/* Thumbnails */}
        {showThumbnails && images.length > 1 && (
          <div className="mt-3 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
            {images.slice(0, 8).map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                  currentIndex === index
                    ? 'border-blue-600 ring-2 ring-blue-200'
                    : 'border-gray-200 hover:border-blue-400'
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
        )}
      </div>

      {/* Full Screen Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative w-full max-w-6xl">
            <img
              src={images[currentIndex]}
              alt={`${hotelName} - Full size`}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full transition-all shadow-xl"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full transition-all shadow-xl"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

interface HotelCategoryGridProps {
  packageSlug: string;
  category: HotelCategory;
  hotelNames: string[];
  columns?: number;
}

/**
 * Hotel Category Grid Component
 * Displays multiple hotels from the same category in a grid
 */
export const HotelCategoryGrid: React.FC<HotelCategoryGridProps> = ({
  packageSlug,
  category,
  hotelNames,
  columns = 3
}) => {
  const [hotels, setHotels] = useState<HotelImageSet[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadHotels = async () => {
      setLoading(true);
      const hotelSets = getHotelsByCategory(packageSlug, category, hotelNames);
      
      // Filter hotels that have images
      const hotelsWithImages = await Promise.all(
        hotelSets.map(async (hotel) => {
          const existingImages = await filterExistingImages(hotel.images);
          return {
            ...hotel,
            images: existingImages
          };
        })
      );
      
      // Only include hotels with at least one image
      setHotels(hotelsWithImages.filter(h => h.images.length > 0));
      setLoading(false);
    };

    loadHotels();
  }, [packageSlug, category, hotelNames]);

  if (loading) {
    return (
      <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-6`}>
        {[1, 2, 3].map(i => (
          <div key={i} className="animate-pulse bg-gray-200 rounded-xl h-64" />
        ))}
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-6`}>
      {hotels.map((hotel, index) => (
        <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
          <div className="aspect-video relative overflow-hidden">
            <img
              src={hotel.thumbnail}
              alt={hotel.hotelName}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
              <Star className="w-3 h-3 fill-white" />
              <span>{category}</span>
            </div>
          </div>
          <div className="p-4">
            <h4 className="font-bold text-gray-900 mb-1">{hotel.hotelName}</h4>
            <p className="text-sm text-gray-600">{hotel.images.length} images available</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotelGallery;
