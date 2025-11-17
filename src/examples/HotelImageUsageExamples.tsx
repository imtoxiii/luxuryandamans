/**
 * USAGE EXAMPLES FOR HOTEL IMAGE SYSTEM
 * 
 * This file shows how to use the hotel image system in your package detail pages
 */

import React from 'react';
import { HotelGallery, HotelCategoryGrid } from '../components/HotelGallery';
import { getHotelImages, getRoomTypeImages, getHotelImageSet } from '../lib/imageLoader';

// ============================================
// EXAMPLE 1: Display Single Hotel Gallery
// ============================================

function SingleHotelExample() {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Symphony Palms Beach Resort</h2>
      
      <HotelGallery
        packageSlug="honeymoon-5n6d"
        category="4-star"
        hotelName="Symphony Palms Beach Resort"
        showThumbnails={true}
      />
    </div>
  );
}

// ============================================
// EXAMPLE 2: Display Specific Room Type
// ============================================

function RoomTypeExample() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold mb-3">Standard Room</h3>
        <HotelGallery
          packageSlug="honeymoon-5n6d"
          category="4-star"
          hotelName="Symphony Palms Beach Resort"
          roomType="Standard Room"
        />
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-3">Deluxe Room</h3>
        <HotelGallery
          packageSlug="honeymoon-5n6d"
          category="4-star"
          hotelName="Symphony Palms Beach Resort"
          roomType="Deluxe Room"
        />
      </div>
    </div>
  );
}

// ============================================
// EXAMPLE 3: Display All Hotels in Category
// ============================================

function CategoryGridExample() {
  const fourStarHotels = [
    'Symphony Palms Beach Resort',
    'Sea Shell Resort Havelock',
    'Silver Sand Beach Resort',
    'TSG Blue Resort'
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">4-Star Hotels</h2>
      <HotelCategoryGrid
        packageSlug="honeymoon-5n6d"
        category="4-star"
        hotelNames={fourStarHotels}
        columns={3}
      />
    </div>
  );
}

// ============================================
// EXAMPLE 4: Hotel Selection with Images
// ============================================

function HotelSelectionExample() {
  const [selectedHotel, setSelectedHotel] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState<'3-star' | '4-star' | '5-star'>('4-star');
  
  const hotelsByCategory = {
    '3-star': ['Dolphin Resort', 'Wild Orchid Beach Resort'],
    '4-star': ['Symphony Palms', 'Sea Shell Resort', 'Silver Sand'],
    '5-star': ['Taj Exotica', 'Barefoot at Havelock', 'Munjoh Ocean']
  };

  return (
    <div className="space-y-6">
      {/* Category Selection */}
      <div>
        <label className="block text-sm font-semibold mb-2">Hotel Category</label>
        <div className="flex space-x-3">
          {(['3-star', '4-star', '5-star'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setSelectedHotel('');
              }}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Hotel Selection */}
      <div>
        <label className="block text-sm font-semibold mb-2">Select Hotel</label>
        <select
          value={selectedHotel}
          onChange={(e) => setSelectedHotel(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg"
        >
          <option value="">Choose a hotel...</option>
          {hotelsByCategory[selectedCategory].map((hotel) => (
            <option key={hotel} value={hotel}>{hotel}</option>
          ))}
        </select>
      </div>

      {/* Display Selected Hotel Gallery */}
      {selectedHotel && (
        <div className="mt-6">
          <HotelGallery
            packageSlug="honeymoon-5n6d"
            category={selectedCategory}
            hotelName={selectedHotel}
            showThumbnails={true}
          />
        </div>
      )}
    </div>
  );
}

// ============================================
// EXAMPLE 5: Get Images Programmatically
// ============================================

function ProgrammaticExample() {
  const [images, setImages] = React.useState<string[]>([]);

  React.useEffect(() => {
    // Get hotel images directly
    const hotelImages = getHotelImages(
      'honeymoon-5n6d',
      '4-star',
      'Symphony Palms Beach Resort',
      10 // max images
    );
    
    setImages(hotelImages);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-3">
      {images.map((img, i) => (
        <img key={i} src={img} alt={`Hotel ${i + 1}`} className="rounded-lg" />
      ))}
    </div>
  );
}

// ============================================
// EXAMPLE 6: Complete Package Detail Page Integration
// ============================================

function CompletePackageExample() {
  const packageSlug = 'honeymoon-5n6d';
  const [selectedStarTier, setSelectedStarTier] = React.useState<3 | 4 | 5>(4);
  const [selectedHotel, setSelectedHotel] = React.useState('');
  const [selectedRoomType, setSelectedRoomType] = React.useState('');

  const hotelsByTier = {
    3: ['Dolphin Resort Havelock', 'Wild Orchid Beach Resort'],
    4: ['Symphony Palms Beach Resort', 'Sea Shell Resort', 'Silver Sand Beach'],
    5: ['Taj Exotica Resort & Spa', 'Barefoot at Havelock', 'Munjoh Ocean Resort']
  };

  const roomTypes = ['Standard Room', 'Deluxe Room', 'Super Deluxe', 'Suite'];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side - Hotel Selection */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-2xl font-bold mb-4">Select Your Accommodation</h2>
            
            {/* Star Category Selection */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-3">Hotel Category</label>
              <div className="flex space-x-3">
                {[3, 4, 5].map((tier) => (
                  <button
                    key={tier}
                    onClick={() => {
                      setSelectedStarTier(tier as 3 | 4 | 5);
                      setSelectedHotel('');
                      setSelectedRoomType('');
                    }}
                    className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                      selectedStarTier === tier
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {tier} ⭐
                  </button>
                ))}
              </div>
            </div>

            {/* Hotel Selection */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-3">Choose Hotel</label>
              <select
                value={selectedHotel}
                onChange={(e) => {
                  setSelectedHotel(e.target.value);
                  setSelectedRoomType('');
                }}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a hotel...</option>
                {hotelsByTier[selectedStarTier].map((hotel) => (
                  <option key={hotel} value={hotel}>{hotel}</option>
                ))}
              </select>
            </div>

            {/* Room Type Selection */}
            {selectedHotel && (
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-3">Room Type</label>
                <div className="grid grid-cols-2 gap-3">
                  {roomTypes.map((roomType) => (
                    <button
                      key={roomType}
                      onClick={() => setSelectedRoomType(roomType)}
                      className={`py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                        selectedRoomType === roomType
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {roomType}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Display Hotel Gallery */}
            {selectedHotel && (
              <div className="mt-6">
                <h3 className="text-lg font-bold mb-3">
                  {selectedRoomType ? `${selectedRoomType} Images` : 'Hotel Images'}
                </h3>
                <HotelGallery
                  packageSlug={packageSlug}
                  category={`${selectedStarTier}-star` as any}
                  hotelName={selectedHotel}
                  roomType={selectedRoomType || undefined}
                  showThumbnails={true}
                />
              </div>
            )}
          </div>

          {/* Available Hotels Grid */}
          {!selectedHotel && (
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-xl font-bold mb-4">{selectedStarTier}-Star Hotels</h3>
              <HotelCategoryGrid
                packageSlug={packageSlug}
                category={`${selectedStarTier}-star` as any}
                hotelNames={hotelsByTier[selectedStarTier]}
                columns={3}
              />
            </div>
          )}
        </div>

        {/* Right Side - Booking Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border p-6 sticky top-6">
            <h3 className="text-lg font-bold mb-4">Booking Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Category:</span>
                <span className="font-semibold">{selectedStarTier}-Star</span>
              </div>
              {selectedHotel && (
                <>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Hotel:</span>
                    <span className="font-semibold">{selectedHotel}</span>
                  </div>
                  {selectedRoomType && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Room Type:</span>
                      <span className="font-semibold">{selectedRoomType}</span>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// EXPORT FOR REFERENCE
// ============================================

export {
  SingleHotelExample,
  RoomTypeExample,
  CategoryGridExample,
  HotelSelectionExample,
  ProgrammaticExample,
  CompletePackageExample
};
