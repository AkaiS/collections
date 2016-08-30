angular.module('yourCollections.services', [])

.factory('Collections', function($http) {
  var getUsersCollections = function() {
    return $http({
      method: 'GET',
      url: 'api/collections'
    }).then(function(data) { return data; });
  };

  var postUsersCollection = function() {
    return $http({
      method: 'POST',
      url: 'api/collections'
    });
  };
});