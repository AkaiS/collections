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
    postUsersCollection: postUsersCollection,
  };
})
.factory('Collection', function($http) {
  var addItem = function(item) {
    return $http({
      method: 'POST',
      url: 'api/item',
      data: {
        name: item.name,
        description: item.description,
        image: item.image,
        collectionName: item.collection
      }
    }); 
  };
  var editItem = function(item) {
    return $http({
      method: 'POST',
      url: 'api/item/edit',
      data: {
        name: item.name,
        description: item.description,
        image: item.image
      }
    });
  };
  var getCollection = function(name) {
    return $http({
      method: 'GET',
      url: 'api/item',
      params: {
        name: name
      }
    })
    .then(function(item) {
      return item;
    });
  };
  return {
    addItem: addItem,
    editItem: editItem,
    getCollection: getCollection
  };
})
.factory('WhichCollection', function() {
  var current = {};
  var setCollection = function(collection) {
    current = collection;
  };
  var getCurCollection = function() {
    return current;
  };
  return {
    setCollection: setCollection,
    getCurCollection: getCurCollection
  };
});