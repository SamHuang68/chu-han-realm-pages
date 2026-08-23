const CACHE = "realm-of-xiangqi-v16";
const BASE_PATH = new URL(self.registration.scope).pathname.replace(/\/$/, "");
const scoped = (path) => `${BASE_PATH}${path}` || "/";
const SHELL = ["/", "/xiangqi/", "/banqi/", "/gomoku/", "/go/", "/mahjong13/", "/mahjong16/", "/spirit-maze/", "/tank-battle/", "/favicon.svg", "/og.png", "/og-go.png", "/xiangqi-palace-cinematic-v1.png", "/banqi-night-court-v1.png", "/mahjong-theme-rain-salon-v2.png", "/mahjong-theme-skyline-v2.png", "/mahjong-theme-mountain-v2.png", "/spirit-maze-sanctuary-v1.png", "/tank-battle-frontier-v1.png"].map(scoped);

async function precacheRoute(cache, path) {
  const response = await fetch(path, { cache: "reload" });
  if (!response.ok) return;
  await cache.put(path, response.clone());
  if (!response.headers.get("content-type")?.includes("text/html")) return;
  const html = await response.text();
  const assets = [...html.matchAll(/(?:src|href)=["']([^"']+)["']/g)]
    .map((match) => match[1])
    .filter((url) => url.startsWith(`${BASE_PATH}/_next/`) || url.startsWith(`${BASE_PATH}/assets/`));
  await Promise.allSettled([...new Set(assets)].map((url) => cache.add(url)));
}

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => Promise.allSettled(SHELL.map((url) => precacheRoute(cache, url)))));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)))));
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET" || new URL(request.url).origin !== self.location.origin) return;
  if (request.mode === "navigate") {
    event.respondWith(fetch(request).then((response) => {
      const copy = response.clone();
      void caches.open(CACHE).then((cache) => cache.put(request, copy));
      return response;
    }).catch(async () => (await caches.match(request)) || (await caches.match(scoped("/")))));
    return;
  }
  event.respondWith(caches.match(request).then((cached) => cached || fetch(request).then((response) => {
    if (response.ok) void caches.open(CACHE).then((cache) => cache.put(request, response.clone()));
    return response;
  })));
});
