angular.module('yourCollections.collections', [])

.controller('CollectionsController', ['$scope', '$location', 'Collections', 'WhichCollection', function($scope, $location, Collections, WhichCollection) {
  $scope.data = {};
  $scope.post = function(name) {
    Collections.postUsersCollection(name);
    $scope.newCollection = '';
    Collections.getUsersCollections().then(function(data) { $scope.data.collections = data.data; });
  };
  Collections.getUsersCollections().then(function(data) { $scope.data.collections = data.data; console.log(data.data); });
  $scope.openCollection = function(name) {
    WhichCollection.setCollection(name);
    $location.path('/collection');
  };
}]);