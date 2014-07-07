'use strict';

app.factory('Experience', function ($resource) {
  return $resource('https://glaring-fire-1921.firebaseio.com/experiences/:id.json');
});