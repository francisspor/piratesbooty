'use strict';

/**
 * @ngdoc function
 * @name piratesbootyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the piratesbootyApp
 */
angular.module('piratesbootyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
