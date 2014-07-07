'use strict';

app.controller('ExperiencesController', function ($scope) {
  // Excluding Notes, Tags, Pics and Address
  $scope.experiences = [];

  $scope.experience = {
      name: '',
      url: 'http://www.',
      lat: '',
      lon: '',
      duration: '',
      price: ''
  };

  $scope.submitExperience = function () {
    $scope.experiences.push($scope.experience);
    $scope.experience = {
      name: '',
      url: 'http://www.',
      lat: '',
      lon: '',
      duration: '',
      price: ''
    };
  };

  $scope.deleteExperience = function (index) {
    $scope.experiences.splice(index, 1);
  };

});