(function() {
  var app = angular.module('store', []);
  app.controller('directorController', ['$scope','$http',
    function($scope,$http) {
      $scope.movies = [];
      console.log('inside controller');
      $scope.directorName;
      $scope.error = false;
      $scope.errorMesg = '';
      $scope.requestComplete = false;
      $scope.searchDirector = function() {
        console.log('inside search function');
        $scope.requestComplete = false;
        $http.get(
          'http://netflixroulette.net/api/api.php?director=' +
          $scope.directorName
        ).success(function(data) {
          $scope.error = false;
          console.log('inside success');
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