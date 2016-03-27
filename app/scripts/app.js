'use strict';

/**
 * @ngdoc overview
 * @name primerYeomanApp
 * @description
 * # primerYeomanApp
 *
 * Main module of the application.
 */
angular
  .module('primerYeomanApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
         templateUrl:'views/about.html',
         controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
