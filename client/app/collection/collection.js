angular.module('yourCollections.collection', [])
.controller('CollectionController', ['$scope', 'Collection', 'WhichCollection', function($scope, Collection, WhichCollection) {
  $scope.data = {};
  $scope.data.current = WhichCollection.getCurCollection();
  $scope.post = function() {
    $scope.data.item = {
      name: $scope.item,
      image: $scope.itemImage || 'http://placehold.it/150x300',
      description: $scope.description,
      collection: $scope.data.current
    };
    Collection.addItem($scope.data.item);
    $scope.item = '';
    $scope.itemImage = '';
    $scope.description = '';
    Collection.getCollection($scope.data.current).then(function(data) {
      $scope.data.collection = data.data;
    });
  };
  console.log($scope.data.current);
  Collection.getCollection($scope.data.current).then(function(data) {
    $scope.data.collection = data.data;
    console.log($scope.data.collection);
  });
}]);