angular.module('yourCollections.collections', [])

.controller('CollectionsController', ['$scope', 'Collections', function($scope, Collections) {
  $scope.data = {};
  $scope.post = function(name) {
    Collections.postUsersCollection(name);
    $scope.newCollection = '';
  };
  Collections.getUsersCollections().then(function(data) { $scope.data.collections = data.data; console.log(data.data); });
}]);