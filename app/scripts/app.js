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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/experiences', {
        templateUrl: 'views/experiences.html',
        controller: 'ExperiencesController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
