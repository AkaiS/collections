angular.module('collections', [
  'collections.auth'
])
.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: 'app/auth/login.html',
      controller: 'AuthController'
    })
    .when('/signup', {
      templateUrl: 'app/auth/signup.html',
      controller: 'AuthController'
    })
    .when('/', {
      templateUrl: 'app/auth/login.html',
      controller: 'AuthController',
      authenticate: true
    })
    .otherwise({
      redirectTo: '/'
    });
  $httpProvider.inteceptors.push('AttachTokens');
})
.factory('AttachTokens', function ($window) {
  var attach = {
    request: function(object) {
      var jwt = $window.localStorage.getItem('com.collections');
      if (jwt) {
        object.headers['x-access-token'] = jwt;
      }
      object.headers['Allow-Control-Allow-Origin'] = '*';
      return object;
    }
  };
  return attach;
})
.run(function($rootScope, $location, Auth) {
  $rootScope.$on('$locationChangeStart', function(e, next, current) {
    if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
      $location.path('/login');
    }
  });
});