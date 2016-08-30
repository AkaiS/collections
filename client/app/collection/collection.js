angular.module('yourCollections.collection', [])
.controller('CollectionController', ['$scope', 'Collection', 'Collections', function($scope, Collection, Collections) {
  $scope.data = {};
  $scope.post = function() {
    $scope.data.item = {
      name: $scope.item,
      image: $scope.itemImage,
      description: $scope.description
    };
    Collection.postItem($scope.data.item);
  };
  $scope.data.current = Collections.collectionPass();
  // Collection.getCollection($scope.data.current).then(function(data) {
  //   $scope.data.collection = data.data;
  // });
}]);