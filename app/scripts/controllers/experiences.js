'use strict';

app.controller('ExperiencesController', function ($scope, Experience) {
  $scope.experiences = Experience.all;

  // Excluding Notes, Tags, Pics and Address
  $scope.experience = {
      name: '',
      url: 'http://www.',
      lat: '',
      lon: '',
      duration: '',
      price: ''
  };

  $scope.submitExperience = function () {

    var BlackMarker = L.Icon.extend({
      options: {
        iconUrl: 'images/black_circle_marker_v2.png',
        iconSize: [40],
        iconAnchor: [20,45],
        popupAnchor: [0, -35]
      }
    });

    var blackMarker = new BlackMarker({});

    L.marker([$scope.experience.lat,$scope.experience.lon], {icon: blackMarker})
      .addTo(map)
      .bindPopup("I am my first custom pin!");

    Experience.create($scope.experience).then(function () {
      $scope.experience = {
        name: '',
        url: 'http://www.',
        lat: '',
        lon: '',
        duration: '',
        price: ''
      };
    });
  };

  $scope.deleteExperience = function (experienceID) {
    Experience.delete(experienceID);
  };

});