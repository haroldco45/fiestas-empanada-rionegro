const C='fiestas-empanada-v1';
const A=['./','index.html','manifest.json','og-image.jpg','icon-192.png','img/plaza-1.jpg','img/helado-frito-tablero.jpg','img/hojuelas-gigantes.jpg','img/obleas-hojuelas.jpg','img/crepes-san.jpg','img/dispa.jpg','img/merengones.jpg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(A)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;
 e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp)).catch(()=>{});return r}).catch(()=>caches.match(e.request)))});
