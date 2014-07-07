'use strict';

/**
 * @ngdoc function
 * @name freshlyhackedApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the freshlyhackedApp
 */
angular.module('freshlyhackedApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
