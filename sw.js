const CACHE_NAME = 'my-site-cashe-v1';

const PRECACHE_URLS = [
  '/my-test-website.-',
  '/my-test-website.-/404.html',
  '/my-test-website.-/style.css',
  '/my-test-website.-/app1.js',
  '/my-test-website.-/manifest.json',
  '/my-test-website.-/sw.js',
  '/my-test-website.-/star-192.png',
  '/my-test-website.-/star-512.png'
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
