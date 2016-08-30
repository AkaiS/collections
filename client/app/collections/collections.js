angular.module('yourCollections.collections', [])

.controller('CollectionsController', ['$scope', '$location', 'Collections', function($scope, $location, Collections) {
  $scope.data = {};
  $scope.post = function(name) {
    Collections.postUsersCollection(name);
    $scope.newCollection = '';
  };
  $scope.openCollection = function() {
    Collections.collectionPass(data.collection.name);
    $location.path('/collection');
  };
  Collections.getUsersCollections().then(function(data) { $scope.data.collections = data.data; console.log(data.data); });
}]);