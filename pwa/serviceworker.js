
var staticCacheName = "pwa";
const filesToCache = [
    '/',
    '/index.html',
    '/main.js'
];

self.addEventListener("install", function (e) {
    e.waitUntil(
        caches.open(staticCacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});

self.addEventListener('notificationclose', (e) => {
    const notification = e.notification;
    const primaryKey = notification.data.primaryKey;

    console.log(`User close notification with primary key: ${primaryKey}`)
});

self.addEventListener('notificationclick', (e) => {
    const notification = e.notification;
    const primaryKey = notification.data.primaryKey;
    const action = e.action;

    if (action === 'close') {
        notification.close();
    } else {
        clients.openWindow('http://localhost:3000/#test');
        notification.close();
    }
});