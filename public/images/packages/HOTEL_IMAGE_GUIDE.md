# Hotel Image Management System

## 📁 Folder Structure

```
packages/
  [package-slug]/
    hero/              # Main package hero images
    gallery/           # Package gallery images
    highlights/        # Package highlight images
    hotels/            # Hotel images organized by category
      3-star/          # 3-star hotels folder
        [hotel-name]/  # Individual hotel folder (use lowercase with hyphens)
          1.jpg
          2.jpg
          3.jpg
          standard/    # Room type subfolder (optional)
            1.jpg
            2.jpg
          deluxe/      # Room type subfolder (optional)
            1.jpg
            2.jpg
      4-star/          # 4-star hotels folder
        [hotel-name]/
          1.jpg
          ...
      5-star/          # 5-star hotels folder
        [hotel-name]/
          1.jpg
          ...
      standard/        # Standard category hotels
        [hotel-name]/
      deluxe/          # Deluxe category hotels
        [hotel-name]/
      luxury/          # Luxury category hotels
        [hotel-name]/
      budget/          # Budget category hotels
        [hotel-name]/
```

## 🏨 Hotel Categories

The system supports the following hotel categories:
- **3-star** - Basic 3-star hotels
- **4-star** - Mid-range 4-star hotels
- **5-star** - Premium 5-star hotels
- **standard** - Standard category hotels
- **deluxe** - Deluxe category hotels
- **luxury** - Luxury category hotels
- **budget** - Budget-friendly hotels

## 📝 Naming Convention

### Hotel Folder Names
Convert hotel names to URL-friendly slugs:
- Use lowercase
- Replace spaces with hyphens
- Remove special characters

**Examples:**
- "Sea Shell Resort" → `sea-shell-resort`
- "Fortune Resort Bay Island" → `fortune-resort-bay-island`
- "Taj Exotica Resort & Spa" → `taj-exotica-resort-spa`
- "Silver Sand Beach Resort" → `silver-sand-beach-resort`

### Image Names
Use simple numeric names:
- `1.jpg` - Main/Featured image (used as thumbnail)
- `2.jpg` - Secondary image
- `3.jpg` - Third image
- ... and so on

## 🎯 How to Add Hotel Images

### Step 1: Choose the Right Category
Decide which category your hotel belongs to (3-star, 4-star, 5-star, etc.)

### Step 2: Create Hotel Folder
Navigate to the category folder and create a new folder with the hotel's slug name.

**Example for a 4-star hotel:**
```
packages/honeymoon-5n6d/hotels/4-star/paradise-beach-resort/
```

### Step 3: Add Images
Drop your images with numeric names (1.jpg, 2.jpg, etc.)

```
packages/honeymoon-5n6d/hotels/4-star/paradise-beach-resort/
  1.jpg  ← Featured image (shows first)
  2.jpg
  3.jpg
  4.jpg
  5.jpg
```

### Step 4: (Optional) Add Room Type Images
Create subfolders for different room types:

```
packages/honeymoon-5n6d/hotels/4-star/paradise-beach-resort/
  1.jpg              ← Hotel exterior/main image
  2.jpg
  standard/          ← Standard room images
    1.jpg
    2.jpg
    3.jpg
  deluxe/            ← Deluxe room images
    1.jpg
    2.jpg
    3.jpg
  suite/             ← Suite images
    1.jpg
    2.jpg
```

## 💻 Usage in Code

### Get Hotel Images
```typescript
import { getHotelImages } from '@/lib/imageLoader';

// Get all images for a specific hotel
const images = getHotelImages(
  'honeymoon-5n6d',           // package slug
  '4-star',                    // category
  'Paradise Beach Resort',     // hotel name (auto-slugified)
  10                           // max images to load
);

// Returns: [
//   '/images/packages/honeymoon-5n6d/hotels/4-star/paradise-beach-resort/1.jpg',
//   '/images/packages/honeymoon-5n6d/hotels/4-star/paradise-beach-resort/2.jpg',
//   ...
// ]
```

### Get Hotel Image Set with Metadata
```typescript
import { getHotelImageSet } from '@/lib/imageLoader';

const hotelData = getHotelImageSet(
  'honeymoon-5n6d',
  '4-star',
  'Paradise Beach Resort'
);

// Returns: {
//   hotelName: 'Paradise Beach Resort',
//   category: '4-star',
//   images: [...],
//   thumbnail: '/images/.../1.jpg'
// }
```

### Get Room Type Images
```typescript
import { getRoomTypeImages } from '@/lib/imageLoader';

const roomImages = getRoomTypeImages(
  'honeymoon-5n6d',
  '4-star',
  'Paradise Beach Resort',
  'Deluxe Room'              // Room type (auto-slugified to 'deluxe-room')
);
```

### Get Multiple Hotels by Category
```typescript
import { getHotelsByCategory } from '@/lib/imageLoader';

const fourStarHotels = getHotelsByCategory(
  'honeymoon-5n6d',
  '4-star',
  ['Paradise Beach Resort', 'Sea Shell Resort', 'Silver Sand Beach']
);

// Returns array of HotelImageSet objects
```

## 📋 Real-World Example

### Honeymoon Package with Multiple Hotels

```
packages/honeymoon-5n6d/hotels/
  4-star/
    symphony-palms-beach-resort/
      1.jpg   ← Resort exterior
      2.jpg   ← Pool area
      3.jpg   ← Beach view
      4.jpg   ← Restaurant
      standard/
        1.jpg ← Standard room
        2.jpg ← Room bathroom
      deluxe/
        1.jpg ← Deluxe room
        2.jpg ← Room balcony
    
    sea-shell-resort/
      1.jpg   ← Resort entrance
      2.jpg   ← Garden view
      3.jpg   ← Reception
      
  5-star/
    taj-exotica-resort/
      1.jpg   ← Resort aerial view
      2.jpg   ← Luxury pool
      3.jpg   ← Beach front
      4.jpg   ← Spa
      5.jpg   ← Fine dining
      suite/
        1.jpg ← Presidential suite
        2.jpg ← Suite living room
        3.jpg ← Suite bedroom
```

## 🎨 Image Specifications

### General Guidelines
- **Format**: JPG, JPEG (preferred), PNG, WebP
- **Resolution**: 
  - Hotel exterior: 1920x1080px or higher
  - Room images: 1200x800px minimum
  - Thumbnails: Will be auto-generated
- **File Size**: Keep under 500KB per image (use compression tools)
- **Aspect Ratio**: 16:9 or 4:3 recommended

### Best Practices
1. **First image (1.jpg) is crucial** - It's used as the thumbnail everywhere
2. **Show variety** - Exterior, rooms, amenities, views, dining
3. **Good lighting** - Well-lit, professional-looking photos
4. **High quality** - Sharp, clear images without blur
5. **Consistent style** - Similar color grading across all images

## 🔄 Automatic Features

The system automatically:
✅ Loads images based on folder structure
✅ Slugifies hotel and room names
✅ Uses first image as thumbnail
✅ Falls back gracefully if images don't exist
✅ Filters out non-existent images
✅ Supports infinite nesting for room types

## 🚀 Quick Start

### Adding Your First Hotel

1. **Identify your package**: e.g., `honeymoon-5n6d`
2. **Choose category**: e.g., `4-star`
3. **Create folder**: `hotels/4-star/your-hotel-name/`
4. **Add images**: Drop 5-10 images named `1.jpg`, `2.jpg`, etc.
5. **Refresh page**: Images will automatically appear!

### Example Command (PowerShell)
```powershell
# Create a new hotel folder
New-Item -ItemType Directory -Path "packages/honeymoon-5n6d/hotels/4-star/symphony-palms-resort"

# Copy your images there and rename them to 1.jpg, 2.jpg, etc.
```

## 🛠️ Troubleshooting

**Q: Images not showing?**
- Check file names are exactly `1.jpg`, `2.jpg` (lowercase)
- Verify folder name matches the slug format (lowercase, hyphens)
- Ensure images are in correct category folder
- Clear browser cache and refresh

**Q: How many images should I add?**
- Minimum: 3-5 images per hotel
- Recommended: 5-10 images
- Maximum: No limit, but 15-20 is practical

**Q: Can I use PNG or WebP?**
- Yes, but JPG is recommended for better compatibility
- Update the code to check for `.png` or `.webp` if needed

**Q: How do I organize room types?**
- Create subfolders: `standard/`, `deluxe/`, `suite/`, etc.
- Add images inside with numeric names
- System auto-detects and loads them

## 📞 Support

Need help? The system is designed to be:
- **Robust**: Handles missing images gracefully
- **Flexible**: Supports any category/hotel structure
- **Automatic**: No code changes needed for new hotels
- **Scalable**: Add unlimited hotels and images

Just follow the naming conventions and folder structure!
