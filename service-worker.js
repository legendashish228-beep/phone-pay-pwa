// Install event: cache important files
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("phonepay-cache").then(cache => {
      return cache.addAll([
        "/",
        "/dashboard.html",
        "/qrscanner.html",
        "/payment.html",
        "/pin.html",
        "/completed.html",
        "/manifest.json",
        "/icon-192.png",
        "/icon-512.png"
      ]);
    })
  );
});

// Fetch event: serve cached files when offline
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});