
(function(){
  var app = angular.module('store', []);
  app.controller('directorController',['$http',function($http){
      var movieList = this;

       movieList.product=[];
       var directorName;
        movieList.searchDirector = function(){
              directorName = movieList.x;
              $http.get('http://netflixroulette.net/api/api.php?director='+directorName).success(function(data){
                movieList.product=data;

      }).error(function(data){
            movieList.toggle=false;
      });
              movieList.x = "";
        };

          

    }]);
})();