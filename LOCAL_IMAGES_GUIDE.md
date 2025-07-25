# Local Images Implementation Guide

This guide explains how to replace the current online images with your local images across all pages of the Andaman Luxury website.

## 📁 Folder Structure

Create the following folder structure in your project:

```
project/src/assets/images/
├── about/
│   ├── andaman-overview.jpg
│   └── cellular-jail.jpg
├── blog/
│   ├── blog-hero.jpg
│   ├── posts/
│   │   ├── diving-guide.jpg
│   │   ├── hidden-beaches.jpg
│   │   ├── sunset-photography.jpg
│   │   └── ... (other blog post images)
│   └── authors/
│       ├── sarah-johnson.jpg
│       ├── mike-chen.jpg
│       └── ... (other author avatars)
├── contact/
│   ├── office-exterior.jpg
│   ├── location-map.jpg
│   └── team-photo.jpg
├── destinations/
│   ├── destinations-hero.jpg
│   ├── cellular-jail.jpg
│   ├── radhanagar-beach.jpg
│   ├── gallery/
│   │   ├── cellular-jail-interior.jpg
│   │   └── ... (other gallery images)
│   └── highlights/
│       ├── cellular-jail-night.jpg
│       └── ... (other highlight images)
├── experiences/
│   ├── experiences-hero.jpg
│   ├── luxury-resorts.jpg
│   ├── scuba-diving.jpg
│   ├── island-hopping.jpg
│   ├── sunset-cruises.jpg
│   ├── wellness-retreats.jpg
│   ├── romantic-getaways.jpg
│   ├── family-adventures.jpg
│   └── family-adventures/
│       ├── hero.jpg
│       ├── glass-bottom-boat.jpg
│       └── jungle-safari.jpg
├── packages/
│   ├── luxury-escape.jpg
│   ├── adventure-package.jpg
│   └── ... (other package images)
└── locations/
    ├── havelock-overview.jpg
    ├── neil-island.jpg
    └── ... (other location images)
```

## 🔄 Implementation Steps

### 1. Static Page Images (Already Updated)

The following pages have been updated with local image placeholders:

#### About Page (`/src/pages/About.tsx`)
- Hero images with commented local image paths
- Historical timeline images
- **Location**: Lines with `localImages` object

#### Blog Page (`/src/pages/Blog.tsx`)
- Hero background image
- **Note**: Individual blog post images need to be updated in the data file (see Data Files section)

#### Contact Page (`/src/pages/Contact.tsx`)
- Optional hero section and office images
- **Location**: Commented sections for future image additions

#### Destinations Page (`/src/pages/Destinations.tsx`)
- Optional hero background
- **Note**: Individual destination images come from data file

#### Experiences Page (`/src/pages/Experiences.tsx`)
- Hero background and experience card images
- **Location**: Each experience object has commented `localImage` property

#### Family Adventures Page (`/src/pages/experiences/family-adventures.tsx`)
- Hero image and activity images
- **Location**: `localImages` object and activity objects

### 2. Dynamic Page Images (Already Updated)

#### Blog Post Detail (`/src/pages/blog/[slug].tsx`)
- Hero images, author avatars, and related post images
- **Source**: All come from `blogPosts.ts` data file

#### Destination Detail (`/src/pages/destinations/[slug].tsx`)
- Hero, gallery, highlight, and activity images
- **Source**: All come from `destinations.ts` data file

### 3. Data Files (Need Manual Update)

You need to manually update the following data files:

#### `src/data/blogPosts.ts`
Replace image URLs in:
```typescript
// Replace online URLs
image: "https://images.unsplash.com/..."
author: {
  avatar: "https://images.unsplash.com/..."
}

// With local paths
image: "/src/assets/images/blog/posts/diving-guide.jpg"
author: {
  avatar: "/src/assets/images/blog/authors/sarah-johnson.jpg"
}
```

#### `src/data/destinations.ts`
Replace image URLs in:
```typescript
// Main destination image
image: "/src/assets/images/destinations/cellular-jail.jpg"

// Gallery images
gallery: [
  {
    url: "/src/assets/images/destinations/gallery/cellular-jail-interior.jpg",
    caption: "Prison corridors"
  }
]

// Highlight images
highlights: [
  {
    title: "Light & Sound Show",
    image: "/src/assets/images/destinations/highlights/cellular-jail-night.jpg"
  }
]
```

#### `src/data/packages.ts`
Replace image URLs in:
```typescript
// Package main image
image: "/src/assets/images/packages/luxury-escape.jpg"

// Hotel images
hotels: [
  {
    image: "/src/assets/images/packages/hotels/taj-exotica.jpg"
  }
]

// Highlight images
highlights: [
  {
    image: "/src/assets/images/packages/highlights/luxury-accommodation.jpg"
  }
]
```

#### `src/data/locations.ts`
Replace image URLs in:
```typescript
// Location main image
image: "/src/assets/images/locations/havelock-overview.jpg"

// Gallery, highlights, activities, and accommodation images
```

### 4. Experience Pages (Need Individual Updates)

Update the remaining experience pages following the pattern used in `family-adventures.tsx`:

- `src/pages/experiences/island-hopping.tsx`
- `src/pages/experiences/luxury-resorts.tsx`
- `src/pages/experiences/romantic-getaways.tsx`
- `src/pages/experiences/scuba-diving.tsx`
- `src/pages/experiences/sunset-cruises.tsx`
- `src/pages/experiences/wellness-retreats.tsx`

Each should have:
1. `localImages` object with commented paths
2. Local image placeholders in JSX
3. Fallback online images

## 🖼️ Image Requirements

### Recommended Dimensions
- **Hero Images**: 1920x1080px (16:9 ratio)
- **Card Images**: 1350x900px (3:2 ratio)
- **Gallery Images**: 1200x800px (3:2 ratio)
- **Author Avatars**: 300x300px (1:1 ratio)
- **Activity Images**: 800x600px (4:3 ratio)

### File Formats
- **Primary**: JPG for photos
- **Alternative**: WebP for better compression
- **Logos/Icons**: PNG with transparency

### File Naming Convention
- Use kebab-case: `cellular-jail-exterior.jpg`
- Be descriptive: `radhanagar-beach-sunset.jpg`
- Include location/category: `havelock-beach-activity.jpg`

## 🚀 Implementation Process

### Step 1: Prepare Images
1. Collect and organize your images
2. Resize images to recommended dimensions
3. Optimize for web (compress without losing quality)
4. Name files using the convention above

### Step 2: Upload Images
1. Create the folder structure shown above
2. Place images in appropriate folders
3. Ensure file paths match the commented paths in code

### Step 3: Update Static Pages
1. Uncomment local image paths in component files
2. Comment out or remove fallback online images
3. Test each page to ensure images load correctly

### Step 4: Update Data Files
1. Replace all online image URLs with local paths
2. Use absolute paths starting with `/src/assets/images/`
3. Test dynamic pages (blog posts, destinations, packages)

### Step 5: Update Remaining Experience Pages
1. Follow the pattern from `family-adventures.tsx`
2. Add local image support to each experience page
3. Test all experience pages

## 🔧 Troubleshooting

### Images Not Loading
- Check file paths are correct
- Ensure images exist in specified folders
- Verify file names match exactly (case-sensitive)

### Build Issues
- Make sure all image files are included in your build process
- Check Vite configuration for asset handling
- Verify image file formats are supported

### Performance Issues
- Optimize large images before uploading
- Consider using WebP format for better compression
- Implement lazy loading if needed

## 📝 Testing Checklist

After implementing local images, test:

- [ ] About page images load correctly
- [ ] Blog hero image displays
- [ ] All blog post images work (from data file)
- [ ] Destination hero and gallery images work
- [ ] Experience page hero and card images work
- [ ] Package detail page images work
- [ ] Author avatars display in blog posts
- [ ] All gallery images work with hover effects
- [ ] Mobile responsiveness maintained
- [ ] Image loading performance is acceptable

## 💡 Tips

1. **Start Small**: Update one page at a time to test the process
2. **Backup**: Keep the original online URLs commented out as fallbacks
3. **Optimize**: Compress images before uploading to improve load times
4. **Consistency**: Maintain consistent image quality and style across the site
5. **Mobile**: Test on mobile devices to ensure images work on all screen sizes

## 🔗 Related Files

Key files that have been updated:
- `/src/pages/About.tsx`
- `/src/pages/Blog.tsx`
- `/src/pages/Contact.tsx`
- `/src/pages/Destinations.tsx`
- `/src/pages/Experiences.tsx`
- `/src/pages/blog/[slug].tsx`
- `/src/pages/destinations/[slug].tsx`
- `/src/pages/experiences/family-adventures.tsx`

Data files to update manually:
- `/src/data/blogPosts.ts`
- `/src/data/destinations.ts`
- `/src/data/packages.ts`
- `/src/data/locations.ts`

---

**Note**: This implementation maintains fallback online images so your site continues to work while you gradually replace images with local ones. 