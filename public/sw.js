// Update this version number when you make changes to force cache refresh
const CACHE_VERSION = 'v1.1';
const CACHE_NAME = `luxury-andaman-${CACHE_VERSION}`;
const STATIC_CACHE = `luxury-andaman-static-${CACHE_VERSION}`;
const DYNAMIC_CACHE = `luxury-andaman-dynamic-${CACHE_VERSION}`;

// Assets to cache on install - these will be updated during build
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/favicon.svg',
  '/site.webmanifest',
  '/sw.js'
];

// Dynamic asset discovery - cache JS and CSS files as they're requested
const CACHE_PATTERNS = [
  /\/assets\/.*\.(js|css)$/,
  /\/assets\/images\/.*\.(png|jpg|jpeg|gif|svg|webp)$/,
  /\/assets\/fonts\/.*\.(woff2|woff|ttf|eot)$/
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Service Worker: Static assets cached successfully');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Service Worker: Error caching static assets', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            // Delete any cache that doesn't match current version
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE && cacheName.includes('luxury-andaman-')) {
              console.log('Service Worker: Deleting old cache', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Claiming clients and forcing refresh');
        // Force refresh of all clients when new version is activated
        self.clients.matchAll().then(clients => {
          clients.forEach(client => {
            client.postMessage({ type: 'CACHE_UPDATED' });
          });
        });
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip external URLs (except fonts and images)
  if (url.origin !== location.origin && 
      !url.hostname.includes('fonts.googleapis.com') &&
      !url.hostname.includes('fonts.gstatic.com') &&
      !url.hostname.includes('api.fontshare.com') &&
      !url.hostname.includes('images.unsplash.com') &&
      !url.hostname.includes('plus.unsplash.com')) {
    return;
  }

  // Check if request matches cacheable patterns
  const shouldCache = CACHE_PATTERNS.some(pattern => pattern.test(request.url)) || 
                     STATIC_ASSETS.includes(url.pathname);

  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        // Return cached version if available
        if (cachedResponse) {
          console.log('Service Worker: Serving from cache', request.url);
          return cachedResponse;
        }

        // Network first for HTML pages
        if (request.headers.get('accept').includes('text/html')) {
          return fetch(request)
            .then((response) => {
              // Cache successful responses
              if (response.status === 200) {
                const responseClone = response.clone();
                caches.open(DYNAMIC_CACHE)
                  .then((cache) => {
                    cache.put(request, responseClone);
                  });
              }
              return response;
            })
            .catch(() => {
              // Fallback to offline page or cached index
              return caches.match('/index.html');
            });
        }

        // Cache first for assets
        return fetch(request)
          .then((response) => {
            // Cache successful responses for cacheable assets
            if (response.status === 200 && shouldCache) {
              const responseClone = response.clone();
              caches.open(DYNAMIC_CACHE)
                .then((cache) => {
                  cache.put(request, responseClone);
                });
            }
            return response;
          })
          .catch((error) => {
            console.log('Service Worker: Network request failed', request.url, error);
            // Return cached version or placeholder
            return caches.match(request);
          });
      })
  );
});

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    console.log('Service Worker: Background sync triggered');
    event.waitUntil(
      // Handle offline form submissions or other background tasks
      Promise.resolve()
    );
  }
});

// Push notifications (if needed in future)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    console.log('Service Worker: Push notification received', data);
    
    event.waitUntil(
      self.registration.showNotification(data.title, {
        body: data.body,
        icon: '/favicon.svg',
        badge: '/favicon.svg',
        tag: 'luxury-andaman-notification'
      })
    );
  }
}); 