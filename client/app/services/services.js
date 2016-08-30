angular.module('yourCollections.services', [])

.factory('Collections', function($http) {
  var getUsersCollections = function() {
    return $http({
      method: 'GET',
      url: 'api/collections'
    }).then(function(data) { return data; });
  };

  var postUsersCollection = function(name) {
    return $http({
      method: 'POST',
      url: 'api/collections',
      data: { name: name }
    }).then(function(resp) {
      return resp;
    });
  };
  return {
    getUsersCollections: getUsersCollections,
    postUsersCollection: postUsersCollection
  };
})
.factory('Collection', function($http) {
  var addItem = function(item) {
    return $http({
      method: 'POST',
      url: 'api/collection',
      data: {
        name: item.name,
        description: item.description,
        image: item.image
      }
    });
  };
});