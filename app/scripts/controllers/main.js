'use strict';

/**
 * @ngdoc function
 * @name freshlyhackedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the freshlyhackedApp
 */
angular.module('freshlyhackedApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
