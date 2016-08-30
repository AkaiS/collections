angular.module('yourCollections.auth', [])

.controller('AuthController', function($scope, $window, $location, Auth) {
  $scope.user = {};

  $scope.signin = function() {
    Auth.signin($scope.user)
      .then(function(token) {
        $window.localStorage.setItem('com.collections', token);
        $location.path('/');
      });
  };

  $scope.signup = function() {
    Auth.signup($scope.user)
      .then(function(token) {
        $window.localStorage.setItem('com.collections', token);
        $location.path('/');
      })
      .catch(function(error) {
        console.log(error);
      });
  };
});