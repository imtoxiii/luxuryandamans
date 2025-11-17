# Package Images Structure

Each package has its own folder with the following subfolders:

## Folder Structure

```
packages/
├── [package-slug]/
│   ├── hero/           # Main hero/banner images (auto-rotating slideshow)
│   ├── gallery/        # Additional gallery images for package detail page
│   ├── highlights/     # Images for package highlights section
│   └── hotels/         # Hotel and accommodation images
```

## Image Guidelines

### 1. **hero/** folder
- **Purpose**: Main slideshow images that appear at the top of the package detail page
- **Naming**: `1.jpg`, `2.jpg`, `3.jpg`, etc.
- **Recommendation**: 5-8 high-quality images
- **Resolution**: Minimum 1920x1080px (16:9 aspect ratio)
- **Content**: Best scenic views, activities, destinations of the package

### 2. **gallery/** folder
- **Purpose**: Additional images shown in the package detail page gallery
- **Naming**: `1.jpg`, `2.jpg`, `3.jpg`, etc.
- **Recommendation**: 10-20 images
- **Resolution**: Minimum 1200x800px
- **Content**: Various activities, locations, experiences covered in the package

### 3. **highlights/** folder
- **Purpose**: Specific images for each package highlight
- **Naming**: Match highlight titles (e.g., `radhanagar-beach.jpg`, `scuba-diving.jpg`)
- **Recommendation**: 1 image per highlight (typically 4-6 images)
- **Resolution**: Minimum 800x600px (4:3 or 16:9)
- **Content**: Specific to each highlight feature

### 4. **hotels/** folder
- **Purpose**: Hotel and accommodation photos
- **Naming**: `hotel-1.jpg`, `hotel-2.jpg`, or by hotel name
- **Recommendation**: 3-5 images per hotel
- **Resolution**: Minimum 1200x800px
- **Content**: Hotel exterior, rooms, amenities, views

## Automatic Image Loading

The system will automatically:
- Load all images from `hero/` folder for the slideshow
- Use `gallery/` images throughout the package detail page
- Match highlight images by filename
- Display hotel images in the accommodation section

## Image Format Support

- **Preferred**: `.jpg`, `.jpeg` (best for photos)
- **Supported**: `.png`, `.webp`
- **File Size**: Keep under 500KB per image (use compression tools)

## Package Slugs

- `honeymoon-5n6d` - 5N/6D Andaman Time Mapped Honeymoon
- `honeymoon-4n5d` - 4N/5D Quick Honeymoon Escape
- `family-paradise` - 5N/6D Family Paradise Package
- `family-4n5d` - 4N/5D Family Fun Escape
- `luxury-escape` - 6N/7D Ultimate Luxury Escape
- `luxury-4n5d` - 4N/5D Premium Luxury Package
- `standard-andaman` - 5N/6D Standard Andaman Tour

## How to Add Images

1. Navigate to the package folder (e.g., `/packages/honeymoon-5n6d/`)
2. Choose the appropriate subfolder (hero, gallery, highlights, or hotels)
3. Add your images with simple numeric names (1.jpg, 2.jpg, etc.)
4. The system will automatically detect and display them!

No code changes needed - just drop your images and they'll appear!
