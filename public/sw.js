// service-worker.ts

self.addEventListener('install', event => {
    console.log('Service Worker instalado');
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    console.log('Service Worker activado');
    return self.clients.claim();
});

self.addEventListener('push', event => {
    const data = event.data?.json();
    const options = {
        body: data?.body,
        icon: 'path/to/icon.png',
        badge: 'path/to/badge.png'
    };

    event.waitUntil(
        self.registration.showNotification(data?.title, options)
    );
});
