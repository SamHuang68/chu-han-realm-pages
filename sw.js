const CACHE = "realm-of-xiangqi-v20";
const BASE_PATH = new URL(self.registration.scope).pathname.replace(/\/$/, "");
const scoped = (path) => `${BASE_PATH}${path}` || "/";
const SHELL = [
  "/",
  "/banqi/",
  "/bigtwo/",
  "/billiards/",
  "/brick-breaker/",
  "/chess/",
  "/go/",
  "/harbor-city/",
  "/gomoku/",
  "/mahjong13/",
  "/mahjong16/",
  "/pixel-dungeon/",
  "/reversi/",
  "/snake/",
  "/sokoban/",
  "/space-invaders/",
  "/spirit-maze/",
  "/sudoku/",
  "/tank-battle/",
  "/tetris/",
  "/texas-holdem/",
  "/twenty-forty-eight/",
  "/xiangqi/",
  "/favicon.svg",
  "/manifest.webmanifest",
].map(scoped);

function cacheable(response) {
  return response.ok && response.type === "basic";
}

function cacheResponse(event, request, response) {
  if (!cacheable(response)) return;
  // Clone before returning the response: the page can consume its body while
  // CacheStorage.open is pending. Keep the worker alive through the write.
  const copy = response.clone();
  event.waitUntil(caches.open(CACHE).then((cache) => cache.put(request, copy)).catch(() => undefined));
}

async function precache(cache, path) {
  const response = await fetch(path, { cache: "reload" });
  if (!cacheable(response)) return;
  await cache.put(path, response);
}

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => Promise.allSettled(SHELL.map((url) => precache(cache, url)))));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)))));
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET" || new URL(request.url).origin !== self.location.origin) return;
  const navigation = request.mode === "navigate";
  const flight = new URL(request.url).pathname.endsWith(".rsc");
  if (navigation || flight) {
    event.respondWith((async () => {
      try {
        const response = await fetch(request);
        if (cacheable(response)) {
          cacheResponse(event, request, response);
          return response;
        }
        const cached = await caches.match(request);
        if (cached) return cached;
        return response;
      } catch {
        return (await caches.match(request)) || (navigation ? await caches.match(scoped("/")) : undefined);
      }
    })());
    return;
  }
  event.respondWith(caches.match(request).then((cached) => cached || fetch(request).then((response) => {
    cacheResponse(event, request, response);
    return response;
  })));
});
