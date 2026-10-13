/* Fallback Service Worker (used when the inline Blob SW is refused by the browser). Place next to index.html. */
var C='starten-wir-a1-v5';
var ASSETS=[self.registration.scope,'./','./index.html','./xlsx.full.min.js'];
self.addEventListener('install',function(e){self.skipWaiting();e.waitUntil(caches.open(C).then(function(c){return Promise.all(ASSETS.map(function(u){return c.add(u).catch(function(){})}))}))});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==C}).map(function(x){return caches.delete(x)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener('fetch',function(e){var r=e.request;if(r.method!=='GET')return;
 e.respondWith(fetch(r).then(function(res){if(res&&(res.ok||res.type==='opaque')){var cp=res.clone();caches.open(C).then(function(c){c.put(r,cp)})}return res}).catch(function(){return caches.match(r).then(function(h){return h||caches.match(self.registration.scope)})}))});
