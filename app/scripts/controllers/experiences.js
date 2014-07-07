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

    console.log("Latitude: ", $scope.experience.lat);
    console.log("Longitude: ", $scope.experience.lon);

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