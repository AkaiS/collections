angular.module('yourCollections', [
  'yourCollections.auth',
  'yourCollections.services',
  'yourCollections.collections',
  'yourCollections.collection',
  'ngRoute'
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
      templateUrl: 'app/collections/collections.html',
      controller: 'CollectionsController',
      authenticate: true
    })
    .when('/collection', {
      templateUrl: 'app/collection/collection.html',
      controller: 'CollectionController',
      authenticate: true
    })
    .otherwise({
      redirectTo: '/'
    });
  //$httpProvider.inteceptors.push('AttachTokens');
});
// .factory('AttachTokens', function ($window) {
//   var attach = {
//     request: function(object) {
//       var jwt = $window.localStorage.getItem('com.collections');
//       if (jwt) {
//         object.headers['x-access-token'] = jwt;
//       }
//       object.headers['Allow-Control-Allow-Origin'] = '*';
//       return object;
//     }
//   };
//   return attach;
// })
// .run(function($rootScope, $location, Auth) {
//   $rootScope.$on('$locationChangeStart', function(e, next, current) {
//     if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
//       $location.path('/login');
//     }
//   });
// });