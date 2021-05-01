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

// activate Service Worker
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(keyList => {
            return Promise.all(
                keyList.map(key => {
                    if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
                        console.log('Removing old cache data', key);
                        return caches.delete(key);
                    }
                })
            );
        })
    );

    self.clients.claim();
});

// fetch Service Worker
self.addEventListener('fetch', function(event) {
    if (event.request.url.includes('/api/')) {
        event.respondWith(
            caches.open(DATA_CACHE_NAME).then(cache => {
                return fetch (event.request)
                .then(response => {
                    if (response.status === 200) {
                        cache.put(event.request.url, response.clone());
                    }

                    return response;
                })
                .catch(error => {
                    return cache.match(event.request);
                });
            }).catch(error => console.log(error))
        );

        return;
    }

    event.respondWith(
        caches.match(event.request).then(function(response) {
            return respone || fetch(event.request);
        })
    );
});