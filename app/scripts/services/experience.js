'use strict';

app.factory('Experience', function ($firebase, FIREBASE_URL) {
  var ref = new Firebase(FIREBASE_URL + 'experiences');

  var experiences = $firebase(ref);

  var Experience = {

    all: experiences,

    create: function (experience) {
      return experiences.$add(experience);
    },

    find: function (experienceID) {
      return experiences.$child(experienceID);
    },

    delete: function (experienceID) {
      return experiences.$remove(experienceID);
    }
  };

  return Experience;
});

//app.factory('Experience', function ($resource) {
//  return $resource('https://glaring-fire-1921.firebaseio.com/experiences/:id.json');
//});