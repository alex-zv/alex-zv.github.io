console.log(Notification);

Notification.requestPermission(function(status) {
    console.log('Notification permission status:', status);
});

const createNotificationService = () => ({
    config: {
        notificationOptions: {}

    },
    isPermissionGranted() {
        return Notification.permission === 'granted'
    },
    displayNotification({ body, title }) {
        if (this.isPermissionGranted()) {
            navigator.serviceWorker.getRegistration().then(function(reg) {
                var options = {
                    body,
                    icon: '../images/house.png',
                    vibrate: [100, 50, 100],
                    data: {
                        dateOfArrival: Date.now(),
                        primaryKey: 1
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
                reg.showNotification(title, options);
            });
        }
    }
});

const notificationService = createNotificationService();

/*setTimeout(() => {
    notificationService.displayNotification({
        title: 'Hello world!',
        body: 'Here is a notification body!',
    });
}, 500);*/

