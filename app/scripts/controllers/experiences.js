'use strict';

app.controller('ExperiencesController', function ($scope, Experience) {
  $scope.experiences = Experience.get();

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
//    $scope.experiences.push($scope.experience);
    Experience.save($scope.experience, function (ref) {
      $scope.experiences[ref.name] = $scope.experience;

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
//    $scope.experiences.splice(index, 1);
    Experience.delete({id: experienceID}, function () {
      delete $scope.experiences[experienceID];
    });
  };

});