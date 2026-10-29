// Guarda la app para que abra sin conexión (las fuentes de Google necesitan internet).
var CACHE='sira-v2',FILES=['./','index.html','manifest.webmanifest','icon.svg'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(FILES)}));self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k!==CACHE}).map(function(k){return caches.delete(k)}))}))});
self.addEventListener('fetch',function(e){if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(function(r){var c=r.clone();caches.open(CACHE).then(function(ch){ch.put(e.request,c)});return r}).catch(function(){return caches.match(e.request)}))});
