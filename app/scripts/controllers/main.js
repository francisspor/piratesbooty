'use strict';

/**
 * @ngdoc function
 * @name piratesbootyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the piratesbootyApp
 */
angular.module('piratesbootyApp')
  .controller('MainCtrl', function ($scope, humanize, bootyChecker) {
    $scope.numberOfCoins = 0;

    $scope.formattedCoins = function() {
      return humanize.formatNumber($scope.numberOfCoins);
    }


    $scope.checkTheBooty = function () {
      bootyChecker.findOutHowManyPirates($scope.numberOfPirates)
        .then(function(data) {
          $scope.numberOfCoins = data;
        });
    }
  });
