angular.module('collections.auth', [])

.controller('AuthController', function($scope, $window, $location, Auth) {
  $scope.user = {};

  $scope.signin = function() {
    Auth.signin($scope.user)
      .then(function(token) {
        $window.localStorage.setItem('com.collections', token);
        $location.path('/');
      });
  }
})
.controller();