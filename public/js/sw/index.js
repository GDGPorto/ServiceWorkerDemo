self.addEventListener('install', function(event){

  caches.open('v1').then(function(cache){
    return cache.addAll([
        '/',
        'js/main.js',
        'css/main.css',
        'imgs/icon.png'
    ]);
  });

});


self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response){
               return response || fetch(event.request);
            })
    );
});

