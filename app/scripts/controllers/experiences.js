'use strict';

app.controller('ExperiencesController', function ($scope, Experience) {
  $scope.experiences = Experience.all;

  // Excluding Notes, Tags, Pics and Address
  $scope.experience = {
      name: '',
      url: 'http://www.',
      address: '',
      lat: '',
      lon: '',
      duration: '',
      price: ''
  };

  $scope.submitExperience = function () {

    // Convert address to latitude and longitude
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode( { 'address': $scope.experience.address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        $scope.experience.lat = results[0].geometry.location.lat();
        $scope.experience.lon = results[0].geometry.location.lng();
      }
    });

    // Create BlackMarker class of pins
    var BlackMarker = L.Icon.extend({
      options: {
        iconUrl: 'images/black_circle_marker_v2.png',
        iconSize: [40],
        iconAnchor: [20,45],
        popupAnchor: [0, -35]
      }
    });

    // Create an instance of a black marker
    var blackMarker = new BlackMarker({});

    markerObj[$scope.experience.lat] = L.marker([$scope.experience.lat, $scope.experience.lon], {icon: blackMarker});

    map.addLayer(markerObj[$scope.experience.lat]);

    markerObj[$scope.experience.lat].bindPopup('<a href="' + $scope.experience.url + '"><strong>' + $scope.experience.name + '</strong></a>');

//    L.marker([$scope.experience.lat, $scope.experience.lon], {icon: blackMarker})
//      .addTo(map)
//      .bindPopup('<a href="' + $scope.experience.url + '"><strong>' + $scope.experience.name + '</strong></a>');

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

  $scope.deleteExperience = function (experienceID, lat) {
    Experience.delete(experienceID);
    map.removeLayer(markerObj[lat]);
  };

});