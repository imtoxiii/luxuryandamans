# Cache Management Guide

## How Caching Works in Your Website

Your website uses a **multi-layer caching strategy** to provide fast loading times while ensuring users get the latest content when you make updates.

## Caching Layers

### 1. Browser Cache (via .htaccess)
- **Static Assets**: 1 year cache for CSS, JS, images, fonts
- **HTML Files**: 1 hour cache with revalidation
- **Service Worker**: Never cached (always fresh)

### 2. Service Worker Cache
- **Static Assets**: Core files cached immediately
- **Dynamic Assets**: Cached as requested
- **Version Control**: Automatic cleanup of old versions

## When Users See New Changes

### ✅ Immediate Updates (No Cache)
- **HTML Content**: Updates within 1 hour
- **Service Worker**: Always fetches latest version
- **Dynamic Data**: API calls, form submissions, etc.

### ⏱️ Versioned Updates (Cached Assets)
- **CSS/JS Files**: Updated when file hash changes (automatic)
- **Images**: Updated when filename/URL changes
- **Static Assets**: Updated when you increment cache version

## How to Deploy Updates

### For Content Changes (Text, Layout, etc.)
1. **Make your changes** in React components
2. **Build the project**: `npm run build`
3. **Upload to server**: Files get new hashes automatically
4. **Users see changes**: Within 1 hour or on next visit

### For Major Updates (New Features, etc.)
1. **Update cache version** in `/public/sw.js`:
   ```javascript
   const CACHE_VERSION = 'v1.2'; // Increment this
   ```
2. **Build and deploy** as usual
3. **Users get notification**: "New content available! Click OK to refresh"

## Cache Version Management

### Current Version: `v1.1`

### When to Increment Cache Version:
- ✅ Major feature additions
- ✅ Critical bug fixes
- ✅ Significant UI changes
- ✅ New pages or components
- ❌ Minor text changes (not needed)
- ❌ Content updates (not needed)

### How to Increment:
```javascript
// In /public/sw.js
const CACHE_VERSION = 'v1.2'; // Change this number
```

## User Experience During Updates

### First Visit
- Downloads and caches all assets
- Fast loading on subsequent visits

### Return Visits (No Updates)
- Instant loading from cache
- No network requests for cached assets

### Return Visits (With Updates)
- **Automatic Detection**: Service worker checks for updates
- **Smart Loading**: Only new/changed files downloaded
- **User Notification**: Optional prompt for major updates
- **Seamless Experience**: Updates in background

## Troubleshooting Cache Issues

### If Users Don't See Updates:
1. **Check cache version**: Ensure it's incremented
2. **Verify service worker**: Check browser DevTools > Application > Service Workers
3. **Force refresh**: Ctrl+F5 or Cmd+Shift+R
4. **Clear cache**: Browser settings > Clear browsing data

### If Users Get Old Content:
1. **Wait 1 hour**: HTML cache expires automatically
2. **Check .htaccess**: Ensure cache headers are correct
3. **Verify deployment**: Ensure new files are uploaded

### For Developers:
1. **Disable cache**: DevTools > Network > Disable cache
2. **Hard refresh**: Ctrl+Shift+R
3. **Incognito mode**: Test without any cache

## Best Practices

### For Regular Updates:
- ✅ Just build and deploy - automatic cache busting
- ✅ Let users know about major changes via notifications
- ✅ Test in incognito mode before deployment

### For Emergency Fixes:
- ✅ Increment cache version immediately
- ✅ Add user notification in service worker
- ✅ Consider showing update banner

### For Content Updates:
- ✅ No special action needed
- ✅ Changes appear within 1 hour
- ✅ API data updates immediately

## Cache Performance Stats

### Expected Performance:
- **First Visit**: 2-3 seconds (full download)
- **Return Visits**: 0.5-1 second (cached)
- **With Updates**: 1-2 seconds (partial download)
- **Offline**: Instant (full cache)

### Cache Storage:
- **Static Assets**: ~2-3 MB
- **Dynamic Content**: ~1-2 MB
- **Total Storage**: ~5 MB maximum
- **Automatic Cleanup**: Old versions removed

## Monitoring & Analytics

### Check Cache Effectiveness:
1. **Browser DevTools**: Network tab shows cache hits
2. **Google Analytics**: Page load times
3. **Service Worker**: Console logs cache operations
4. **User Feedback**: Faster perceived performance

### Key Metrics:
- **Cache Hit Rate**: >90% for return visitors
- **Load Time**: <1s for cached content
- **Update Detection**: <5 minutes
- **Storage Usage**: <10MB per user

This caching system ensures your users always get the best performance while seeing your latest updates when needed! 