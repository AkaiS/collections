angular.module('yourCollections.services', [])

.factory('Collections', function($http) {
  var current;
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

  var collectionPass = function(collection) {
    if (collection) {
      current = collection;
    } else {
      return current;
    }
  };
  return {
    getUsersCollections: getUsersCollections,
    postUsersCollection: postUsersCollection,
    collectionPass: collectionPass
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
  var editItem = function(item) {
    return $http({
      method: 'POST',
      url: 'api/collection/edit',
      data: {
        name: item.name,
        description: item.description,
        image: item.image
      }
    });
  };
  var getCollection = function(collection) {
    return $http({
      method: 'GET',
      url: 'api/collection',
      data: { collection: collection }
    })
    .then(function(collection) {
      return collection;
    });
  };
  return {
    addItem: addItem,
    editItem: editItem,
    getCollection: getCollection
  };
});