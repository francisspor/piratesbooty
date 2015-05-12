'use strict';

/**
 * @ngdoc function
 * @name piratesbootyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the piratesbootyApp
 */
angular.module('piratesbootyApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
