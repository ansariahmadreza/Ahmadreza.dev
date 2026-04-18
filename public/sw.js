const CACHE_NAME = "dynamic-Ahmadreza";

// install service worker
self.addEventListener("install", (event) => {
  self.skipWaiting(); // activate immediately
});

// activate-delete old caches
self.addEventListener("activate", (event) => {
  console.log("✅ SW activated");
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  // all tabs and windows that are currently open,without needing to refresh,will come under the control of this new service worker.
  self.clients.claim();
});
// handle requests - cache everything dynamically
self.addEventListener("fetch", (event) => {
  //only cache GET requests
  if (event.request.method !== "GET") return;

  //exlude API authentication routes from cache
  if (
    event.request.url.includes("/api/") ||
    event.request.url.includes("/auth/") ||
    event.request.url.includes("_next/data")
  ) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      //if it exists in cache,return it
      if (cachedResponse) {
        return cachedResponse;
      }

      //if not,fetch from network and save it
      return fetch(event.request)
        .then((response) => {
          //only cache successful requests
          if (response && response.status === 200) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return response;
        })
        .catch((error) => {
          //if offline,you can return an offline page
          return new Response("شما آفلاین هستید", {
            status: 503,
            statusText: "Offline",
          });
        });
    })
  );
});