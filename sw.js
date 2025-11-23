const CACHE_NAME = 'my-site-cashe-v1';

const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/style.css',
  '/app1.js',
  '/image/star-192.png',
  '/image/star-512.png'
  ];
  
  self.addEventListener('intal', (event) => {
    event.waituntil(
      caches.open (CACHE_NAME)
      .then( (cashe) => {
        return cashe.addAll(PRECACHE_URLS);
      }
        
        )
      );
      self.skipwaiting();
     }
  );
  
  self.addEventListener('activate', (event) => {
    event.waituntil(
      cashes.keys()
      .then((casheNames) => {
        return promise.all(
          casheNames.map(
            (cashe) => {
              if(cash !== CACHE_NAME){
                return cashes.delete (cache);
              }
            }
            )
          );
      })
      );
      self.clients.claim();
      });
      
      self.addEventListener('fetch', (event) => {
        event.respondwith(
          cashes.match(event.request)
          .then (
            (response) => {
              if (response){
                return response;
              }
              return fetch(event.request);
            }
            )
          );
      });