// files to cache
const FILES_TO_CACHE = [
    '/',
    'index.html',
    'index.js',
    'styles.css',
    'db.js',
    '/icons/icon-192x192.png',
    '/icons/icon-512x512.png',
];

// cache names for static files & cache data
const CACHE_NAME = 'static-cache-v2';
const DATA_CACHE_NAME = 'data-cache-v1';

// install Service Worker
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('Your files were cached successfully!');
            return cache.addAll(FILES_TO_CACHE);
        })
    );

    self.skipWaiting();
});