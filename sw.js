var CACHE_NAME = 'Orisa-v1.0.0';
var urlsToCache = [
    '/',
    '/index.html',
    '/assets/css/tailwind.css',
    '/assets/js/jquery.min.js',
    '/assets/js/main.js',
    '/manifest.json',
    '/assets/images/logo.svg',
    '/assets/images/icons/search.svg',
    '/assets/images/icons/menu-icon.svg',
    '/assets/images/home-image.png',
    '/assets/images/type.png',
    '/assets/images/icons/wave.svg',
    '/assets/images/type-1.png',
    '/assets/images/type-2.png',
    '/assets/images/type-3.png',
    '/assets/images/type-4.png',
    '/assets/images/type-5.png',
    '/assets/images/icons/bullet.svg',
    '/assets/images/icons/file.svg',
    '/assets/images/icons/message.svg',
    '/assets/images/icons/draft.svg',
    '/assets/images/main-article.png',
    '/assets/images/sub-article.png',
    '/assets/images/sub-article-2.png',
    '/assets/images/sub-article-3.png',
    '/assets/images/sub-article-4.png',
    '/assets/images/ilustration.png',
    '/assets/images/icons/icon-192x192.png',
    '/assets/images/icons/icon-256x256.png',
    '/assets/images/icons/icon-384x384.png',
    '/assets/images/icons/icon-512x512.png',
    '/assets/fonts/Poppins-Bold.ttf',
    '/assets/fonts/Poppins-Light.ttf',
    '/assets/fonts/Poppins-Medium.ttf',
    '/assets/fonts/Poppins-Regular.ttf'
];

self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function (event) {
    let request = event.request;
    event.respondWith(
        caches.match(request).then((response) => {
            return response || fetch(request)
        })
    );
});

self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.filter((cacheName) => {
                    return cacheName != CACHE_NAME
                }).map((cacheName) => {
                    return caches.delete(cacheName)
                })
            );
        })
    );
});