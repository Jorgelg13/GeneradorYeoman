'use strict';

/**
 * @ngdoc function
 * @name primerYeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the primerYeomanApp
 */
angular.module('primerYeomanApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'Protractor',
      'E2E'
    ];
  });
