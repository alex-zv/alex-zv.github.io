
var staticCacheName = "pwa";
const filesToCache = [
    './',
    './index.html',
    './main.js',
    '../images/tick.png',
    '../images/close.png'
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

const createNotificationService = () => ({
    config: {
        notificationOptions: {}

    },
    isPermissionGranted() {
        return Notification.permission === 'granted'
    },
    displayNotification(e, { body, title, data }) {
        const options = {
            body,
            icon: '../images/house.png',
            vibrate: [100, 50, 100],
            data: {
                ...data,
                dateOfArrival: Date.now(),
                primaryKey: 1,
            },
            actions: [
                {
                    action: 'explore',
                    title: 'Open this link',
                    icon: '../images/tick.png'
                },
                {
                    action: 'close',
                    title: 'Close',
                    icon: '../images/close.png'
                }
            ]
        };
        e.waitUntil(
            self.registration.showNotification(title, options)
        )
    }
});

const notificationService = createNotificationService();

self.addEventListener('push', (e) => {
    const body = e.data ? e.data.text() : 'No body';
    console.log('push event', body);
    notificationService.displayNotification(e, {
        title: 'Hello from push!',
        body: body
    });
});

setTimeout(() => {
    notificationService.displayNotification(e, {
        title: 'Test push',
        body: 'test push body'
    });
}, 5000);