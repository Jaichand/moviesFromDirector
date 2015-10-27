(function() {
  var app = angular.module('store', []);
  app.controller('directorController', ['$scope','$http',
    function($scope,$http) {
      $scope.movies = [];
      $scope.directorName="nolan";
      $scope.error = false;
      $scope.errorMesg = '';
      $scope.requestComplete = false;
      $scope.searchDirector = function() {
        $scope.requestComplete = false;
        $http.get(
          'http://netflixroulette.net/api/api.php?director=' +
          $scope.directorName
        ).success(function(data) {
          $scope.error = false;
          $scope.movies = data;
          $scope.requestComplete = true;
        }).error(function(err) {
          $scope.error = true;
          $scope.errorMesg = err.message;
        });
      };
    }
  ]);
})();