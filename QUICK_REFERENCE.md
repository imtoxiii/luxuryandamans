# 🎯 HOTEL IMAGE SYSTEM - QUICK REFERENCE CARD

## 📁 Folder Structure
```
packages/[package-slug]/hotels/[category]/[hotel-slug]/
  1.jpg, 2.jpg, 3.jpg...
  [room-type]/
    1.jpg, 2.jpg...
```

## 🏨 Categories
- `3-star` | `4-star` | `5-star`
- `standard` | `deluxe` | `luxury` | `budget`

## 📝 Naming Rules
- **Hotel folder**: `symphony-palms-beach-resort` (lowercase-hyphens)
- **Room folder**: `deluxe-room`, `ocean-view-suite`
- **Images**: `1.jpg`, `2.jpg`, `3.jpg`...

## 💻 Basic Usage

### Display Hotel Gallery
```tsx
import { HotelGallery } from '@/components/HotelGallery';

<HotelGallery
  packageSlug="honeymoon-5n6d"
  category="4-star"
  hotelName="Symphony Palms Beach Resort"
/>
```

### Display Room Type
```tsx
<HotelGallery
  packageSlug="honeymoon-5n6d"
  category="4-star"
  hotelName="Symphony Palms Beach Resort"
  roomType="Deluxe Room"
/>
```

### Display Hotels Grid
```tsx
import { HotelCategoryGrid } from '@/components/HotelGallery';

<HotelCategoryGrid
  packageSlug="honeymoon-5n6d"
  category="4-star"
  hotelNames={['Hotel 1', 'Hotel 2', 'Hotel 3']}
/>
```

## 🔧 Functions

```tsx
// Get hotel images array
import { getHotelImages } from '@/lib/imageLoader';
const imgs = getHotelImages('pkg-slug', '4-star', 'Hotel Name', 10);

// Get room images
import { getRoomTypeImages } from '@/lib/imageLoader';
const roomImgs = getRoomTypeImages('pkg', 'category', 'hotel', 'room', 10);

// Get hotel with metadata
import { getHotelImageSet } from '@/lib/imageLoader';
const hotel = getHotelImageSet('pkg', 'category', 'hotel');
// { hotelName, category, images[], thumbnail }

// Get hotels by category
import { getHotelsByCategory } from '@/lib/imageLoader';
const hotels = getHotelsByCategory('pkg', 'category', ['H1', 'H2']);
```

## ✅ Quick Checklist

- [ ] Create folder: `hotels/[category]/[hotel-slug]/`
- [ ] Add images: `1.jpg`, `2.jpg`, `3.jpg`...
- [ ] First image (1.jpg) is the featured thumbnail
- [ ] Optional: Add room folders with images
- [ ] Use components in your code
- [ ] Done! No configuration needed

## 🎨 Image Specs
- **Format**: JPG (preferred)
- **Size**: < 500KB per image
- **Resolution**: 1920x1080px+ (hero), 1200x800px+ (rooms)
- **Aspect**: 16:9 or 4:3

## 🚀 Example Folder
```
honeymoon-5n6d/hotels/4-star/symphony-palms/
  1.jpg  ← Featured (shows first)
  2.jpg
  3.jpg
  standard-room/
    1.jpg
    2.jpg
  deluxe-room/
    1.jpg
    2.jpg
```

## 📚 Full Documentation
- Complete guide: `/HOTEL_SYSTEM_COMPLETE_GUIDE.md`
- Usage examples: `/src/examples/HotelImageUsageExamples.tsx`
- Detailed docs: `/public/images/packages/HOTEL_IMAGE_GUIDE.md`

---
**🎉 That's it! Just add images and use the components. No config needed!**
