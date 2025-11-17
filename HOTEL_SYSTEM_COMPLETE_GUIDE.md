# 🎯 Complete Hotel Image System - Quick Start Guide

## 📋 What This System Does

This robust hotel image management system allows you to:
- ✅ Organize hotel images by star category (3-star, 4-star, 5-star, standard, deluxe, luxury, budget)
- ✅ Add unlimited hotels within each category
- ✅ Include room-type specific images (standard, deluxe, suite, etc.)
- ✅ Automatically display images in your package pages
- ✅ NO CODE CHANGES NEEDED - just add images and they appear!

## 🚀 Quick Start (3 Steps)

### Step 1: Create Your Hotel Folder

```bash
# Navigate to your package folder
cd public/images/packages/[your-package-slug]/hotels/

# Create category folder (if not exists)
mkdir 4-star

# Create hotel folder with slugified name
mkdir 4-star/symphony-palms-beach-resort
```

### Step 2: Add Images

Drop your images with numeric names:
```
4-star/symphony-palms-beach-resort/
  1.jpg  ← Main image (shown first everywhere)
  2.jpg
  3.jpg
  4.jpg
  5.jpg
```

### Step 3: Use in Your Code

```tsx
import { HotelGallery } from '@/components/HotelGallery';

<HotelGallery
  packageSlug="honeymoon-5n6d"
  category="4-star"
  hotelName="Symphony Palms Beach Resort"
  showThumbnails={true}
/>
```

**That's it!** Images will automatically load and display.

## 📁 Complete Folder Structure

```
packages/
  honeymoon-5n6d/           ← Package slug
    hero/                   ← Package hero images
      1.jpg
      2.jpg
      ...
    gallery/                ← Package gallery
      1.jpg
      2.jpg
      ...
    highlights/             ← Highlight images
      scuba-diving.jpg
      radhanagar-beach.jpg
      ...
    hotels/                 ← HOTEL IMAGES START HERE
      3-star/               ← Budget hotels
        dolphin-resort/
          1.jpg
          2.jpg
          ...
        wild-orchid-resort/
          1.jpg
          ...
          
      4-star/               ← Mid-range hotels
        symphony-palms-beach-resort/
          1.jpg            ← Featured image
          2.jpg
          3.jpg
          4.jpg
          5.jpg
          standard-room/   ← Room type subfolder (optional)
            1.jpg
            2.jpg
          deluxe-room/     ← Another room type (optional)
            1.jpg
            2.jpg
            3.jpg
          suite/           ← Suite images (optional)
            1.jpg
            2.jpg
            
        sea-shell-resort/
          1.jpg
          2.jpg
          ...
          
        silver-sand-beach-resort/
          1.jpg
          ...
          
      5-star/               ← Luxury hotels
        taj-exotica-resort-spa/
          1.jpg
          2.jpg
          ...
          ocean-view-suite/
            1.jpg
            2.jpg
          presidential-suite/
            1.jpg
            2.jpg
            
        barefoot-at-havelock/
          1.jpg
          ...
          
      standard/             ← Standard category
        [hotel-name]/
          ...
          
      deluxe/               ← Deluxe category
        [hotel-name]/
          ...
          
      luxury/               ← Luxury category
        [hotel-name]/
          ...
          
      budget/               ← Budget category
        [hotel-name]/
          ...
```

## 🏨 Real-World Example

Let's add a complete 4-star hotel with room types:

```powershell
# PowerShell commands (Windows)
cd public\images\packages\honeymoon-5n6d\hotels\4-star

# Create hotel folder
mkdir symphony-palms-beach-resort
cd symphony-palms-beach-resort

# Add main hotel images (copy your files here and rename)
# 1.jpg - Hotel exterior (MAIN IMAGE - shows first)
# 2.jpg - Pool area
# 3.jpg - Beach view
# 4.jpg - Restaurant
# 5.jpg - Reception/Lobby

# Add room type folders
mkdir standard-room
mkdir deluxe-room
mkdir suite

# Add room images
cd standard-room
# 1.jpg - Room interior
# 2.jpg - Bathroom
# 3.jpg - Balcony view

cd ..\deluxe-room
# 1.jpg - Deluxe room interior
# 2.jpg - Room amenities
# 3.jpg - Ocean view

cd ..\suite
# 1.jpg - Suite living room
# 2.jpg - Suite bedroom
# 3.jpg - Suite bathroom
```

## 💻 Code Examples

### Example 1: Simple Hotel Gallery

```tsx
import { HotelGallery } from '@/components/HotelGallery';

function MyPackagePage() {
  return (
    <div>
      <h2>Symphony Palms Beach Resort</h2>
      <HotelGallery
        packageSlug="honeymoon-5n6d"
        category="4-star"
        hotelName="Symphony Palms Beach Resort"
      />
    </div>
  );
}
```

### Example 2: Show Specific Room Type

```tsx
<HotelGallery
  packageSlug="honeymoon-5n6d"
  category="4-star"
  hotelName="Symphony Palms Beach Resort"
  roomType="Deluxe Room"
  showThumbnails={true}
/>
```

### Example 3: Grid of All Hotels in Category

```tsx
import { HotelCategoryGrid } from '@/components/HotelGallery';

function HotelSelection() {
  const hotels = [
    'Symphony Palms Beach Resort',
    'Sea Shell Resort',
    'Silver Sand Beach Resort'
  ];

  return (
    <HotelCategoryGrid
      packageSlug="honeymoon-5n6d"
      category="4-star"
      hotelNames={hotels}
      columns={3}
    />
  );
}
```

### Example 4: Dynamic Hotel Selection

```tsx
function DynamicHotelSelector() {
  const [category, setCategory] = useState<'3-star' | '4-star' | '5-star'>('4-star');
  const [hotel, setHotel] = useState('');
  
  const hotelsByCategory = {
    '3-star': ['Dolphin Resort', 'Wild Orchid'],
    '4-star': ['Symphony Palms', 'Sea Shell', 'Silver Sand'],
    '5-star': ['Taj Exotica', 'Barefoot', 'Munjoh Ocean']
  };

  return (
    <div>
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value="3-star">3 Star</option>
        <option value="4-star">4 Star</option>
        <option value="5-star">5 Star</option>
      </select>

      <select value={hotel} onChange={e => setHotel(e.target.value)}>
        <option value="">Choose Hotel</option>
        {hotelsByCategory[category].map(h => (
          <option key={h} value={h}>{h}</option>
        ))}
      </select>

      {hotel && (
        <HotelGallery
          packageSlug="honeymoon-5n6d"
          category={category}
          hotelName={hotel}
        />
      )}
    </div>
  );
}
```

## 🎨 Image Guidelines

### Naming Convention
- **Hotel folders**: lowercase-with-hyphens
  - "Sea Shell Resort" → `sea-shell-resort`
  - "Taj Exotica Resort & Spa" → `taj-exotica-resort-spa`
- **Image files**: Numeric (1.jpg, 2.jpg, 3.jpg...)
- **Room type folders**: lowercase-with-hyphens
  - "Standard Room" → `standard-room`
  - "Ocean View Suite" → `ocean-view-suite`

### Image Specifications
- **Format**: JPG (preferred), PNG, WebP
- **Resolution**: 
  - Hotel main images: 1920x1080px or higher
  - Room images: 1200x800px minimum
- **File Size**: Under 500KB (use compression)
- **Aspect Ratio**: 16:9 or 4:3

### Best Practices
1. **First image (1.jpg) is crucial** - Used as thumbnail
2. **Show variety**: Exterior, rooms, amenities, dining, pool, beach
3. **Professional quality**: Well-lit, sharp, high-resolution
4. **Consistent style**: Similar color grading
5. **Descriptive order**: Arrange from most to least important

## 🔧 Available Functions

### Image Loader Functions

```tsx
// Get hotel images
import { getHotelImages } from '@/lib/imageLoader';
const images = getHotelImages('honeymoon-5n6d', '4-star', 'Symphony Palms', 10);

// Get room type images
import { getRoomTypeImages } from '@/lib/imageLoader';
const roomImages = getRoomTypeImages('honeymoon-5n6d', '4-star', 'Symphony Palms', 'Deluxe Room');

// Get hotel with metadata
import { getHotelImageSet } from '@/lib/imageLoader';
const hotel = getHotelImageSet('honeymoon-5n6d', '4-star', 'Symphony Palms');
// Returns: { hotelName, category, images[], thumbnail }

// Get all hotels in category
import { getHotelsByCategory } from '@/lib/imageLoader';
const hotels = getHotelsByCategory('honeymoon-5n6d', '4-star', ['Hotel 1', 'Hotel 2']);

// Filter existing images
import { filterExistingImages } from '@/lib/imageLoader';
const existing = await filterExistingImages(['/path/1.jpg', '/path/2.jpg']);
```

## 📦 Components Available

### HotelGallery
Display single hotel or room type gallery with slideshow

```tsx
<HotelGallery
  packageSlug="honeymoon-5n6d"
  category="4-star"
  hotelName="Symphony Palms Beach Resort"
  roomType="Deluxe Room"  // optional
  showThumbnails={true}   // optional (default: true)
  className="my-custom-class"  // optional
/>
```

### HotelCategoryGrid
Display multiple hotels in a grid layout

```tsx
<HotelCategoryGrid
  packageSlug="honeymoon-5n6d"
  category="4-star"
  hotelNames={['Hotel 1', 'Hotel 2', 'Hotel 3']}
  columns={3}  // optional (default: 3)
/>
```

## 🎯 Features

### Automatic Features
- ✅ Auto-detects images in folders
- ✅ Slugifies hotel/room names automatically
- ✅ Filters non-existent images
- ✅ Falls back gracefully if no images
- ✅ Supports unlimited nesting
- ✅ Works with any category structure
- ✅ No code changes for new hotels

### User Features
- ✅ Full-screen image modal
- ✅ Keyboard navigation (arrow keys, ESC)
- ✅ Thumbnail navigation
- ✅ Auto-rotating slideshow option
- ✅ Image counter
- ✅ Responsive design
- ✅ Loading states
- ✅ Error handling

## 🛠️ Troubleshooting

**Q: Images not showing?**
- Check filenames are exactly `1.jpg`, `2.jpg` (lowercase .jpg)
- Verify folder name is slugified correctly
- Ensure images are in correct category folder
- Clear browser cache

**Q: How do I add a new hotel?**
1. Create folder: `hotels/[category]/[hotel-slug]/`
2. Add images: `1.jpg`, `2.jpg`, etc.
3. Use in code with hotel name (auto-slugified)

**Q: Can I use PNG or WebP?**
- Yes, but update code to check for multiple extensions
- JPG is default and recommended

**Q: How many images can I add?**
- No limit! System tries loading 1-20 by default
- Adjust `maxImages` parameter if needed

**Q: Do I need to update code for new hotels?**
- NO! Just add folder and images
- Use hotel name in component props

## 📞 Support & Examples

- **Full documentation**: `/public/images/packages/HOTEL_IMAGE_GUIDE.md`
- **Usage examples**: `/src/examples/HotelImageUsageExamples.tsx`
- **Component source**: `/src/components/HotelGallery.tsx`
- **Image loader**: `/src/lib/imageLoader.ts`

## 🎉 You're All Set!

The system is now ready to use. Just:
1. Add your hotel images to the appropriate folders
2. Use the components in your pages
3. Images will automatically appear!

**No configuration files, no manual linking, no code changes needed!**

Happy coding! 🚀
