# Hotel Images and Pricing Guide

This guide explains how to organize hotel images by Island/Star-Rating/Standard and how to update prices in the system.

## 1. Hotel Image Organization

We have set up a structured folder system for hotel images in `public/images/hotels/`.

### Folder Structure
The structure follows this pattern:
`public/images/hotels/[island]/[star-rating]/[hotel-name]/`

**Examples:**
- **Havelock 5-Star:** `public/images/hotels/havelock/5-star/taj-exotica/`
- **Port Blair 5-Star:** `public/images/hotels/port-blair/5-star/fortune-bay-island/`
- **Neil Island 4-Star:** `public/images/hotels/neil-island/4-star/summer-sands/`

### How to Add New Hotel Images
1.  Navigate to `public/images/hotels/`.
2.  Create a folder for the **Island** (if it doesn't exist).
3.  Inside that, create a folder for the **Star Rating** (e.g., `3-star`, `4-star`, `5-star`).
4.  Inside that, create a folder for the **Hotel Name** (use hyphens instead of spaces, e.g., `sea-shell-resort`).
5.  Paste your images into this folder.
    *   Name the main image `main.jpg` or `hero.jpg` for easy identification.
    *   Name other images `1.jpg`, `2.jpg`, `pool.jpg`, etc.

---

## 2. Linking Hotel Images in Code

After adding images, you need to tell the system where to find them. You will edit the package files in `src/data/packages/`.

**Example:** Editing `src/data/packages/luxury-escape.ts`

Find the `hotels` array and update the `image` and `images` paths:

```typescript
hotels: [
  {
    name: "Taj Exotica Resort & Spa",
    location: "Havelock Island",
    rating: 5,
    starCategory: 5,
    // MAIN IMAGE
    image: "/images/hotels/havelock/5-star/taj-exotica/main.jpg", 
    
    // GALLERY IMAGES
    images: [
      "/images/hotels/havelock/5-star/taj-exotica/1.jpg",
      "/images/hotels/havelock/5-star/taj-exotica/pool.jpg",
      "/images/hotels/havelock/5-star/taj-exotica/room.jpg"
    ],
    // ... other details
  }
]
```

---

## 3. Changing Prices

Prices are defined in the same package files in `src/data/packages/`. There are 4 places where prices appear:

### A. Main Package Price
This is the "starting from" price displayed on the card.
```typescript
export const luxuryEscape: Package = {
  // ...
  price: 85000, // <--- CHANGE THIS
  // ...
}
```

### B. Pricing Options (Per Person)
This defines the price based on duration or specific options.
```typescript
pricingOptions: [
  { 
    days: 7, 
    pricePerPerson: 85000, // <--- CHANGE THIS
    title: "7 Days Ultra Luxury Experience" 
  }
],
```

### C. Hotel Room Upgrades
If you have different room types with different costs.
```typescript
roomTypes: [
  { 
    name: "Premium Suite", 
    pricePerNight: 8000, // <--- CHANGE THIS
    // ...
  },
  { 
    name: "Executive Villa", 
    pricePerNight: 12000, // <--- CHANGE THIS
    // ...
  }
]
```

### D. Supplements (Add-ons)
Optional extras like candlelight dinners or scuba diving.
```typescript
supplements: [
  {
    name: "Private Yacht Sunset Cruise",
    price: 15000, // <--- CHANGE THIS
    // ...
  }
]
```

## Summary of Files to Edit
- **Luxury 7 Days:** `src/data/packages/luxury-escape.ts`
- **Luxury 5 Days:** `src/data/packages/luxury-4n5d.ts`
- **Honeymoon 6 Days:** `src/data/packages/honeymoon-5n6d.ts`
- **Honeymoon 5 Days:** `src/data/packages/honeymoon-4n5d.ts`
- **Family 6 Days:** `src/data/packages/family-paradise.ts`
- **Family 5 Days:** `src/data/packages/family-4n5d.ts`
- **Standard Package:** `src/data/packages/standard-andaman.ts`
