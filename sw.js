const CACHE = "realm-of-xiangqi-v19";
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
          const copy = response.clone();
          void caches.open(CACHE).then((cache) => cache.put(request, copy));
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
    if (cacheable(response)) void caches.open(CACHE).then((cache) => cache.put(request, response.clone()));
    return response;
  })));
});
