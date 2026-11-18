const CACHE_NAME = "cybershield-v1";

const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./awareness.html",
    "./checker.html",
    "./quiz.html",
    "./safety.html",
    "./dashboard.html",
    "./report.html",
    "./about.html",
    "./style.css",
    "./checker.js",
    "./dashboard.js"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(FILES_TO_CACHE))
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});