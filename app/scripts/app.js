/* global app:true */

'use strict';

/**
 * @ngdoc overview
 * @name freshlyhackedApp
 * @description
 * # freshlyhackedApp
 *
 * Main module of the application.
 */
var app = angular
  .module('freshlyhackedApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'leaflet-directive'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/experiences', {
        templateUrl: 'views/experiences.html',
        controller: 'ExperiencesController'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function(){})
  .constant('FIREBASE_URL', 'https://glaring-fire-1921.firebaseio.com/');
