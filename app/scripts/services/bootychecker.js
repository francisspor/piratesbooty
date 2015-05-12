'use strict';

/**
 * @ngdoc service
 * @name piratesbootyApp.bootyChecker
 * @description
 * # bootyChecker
 * Service in the piratesbootyApp.
 */
angular.module('piratesbootyApp')
  .service('bootyChecker', function ($http, $q) {
    this.findOutHowManyPirates = function (numberOfPirates) {
     var deferred = $q.defer();
     $http.get('http://pirate.azurewebsites.net/api/Pirate/' + numberOfPirates)
     .success(function(data) {
       deferred.resolve(data);
     }).error(function(data) {
       deferred.reject(data);
     });
     return deferred.promise;
   };
});
