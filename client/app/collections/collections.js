angular.module('yourCollections.collections', [])

.controller('CollectionsController', [$scope, Collections, function($scope, Collections) {
  $scope.data = {};
  Collections.getUsersCollections().then(function(data) { $scope.data = data; });
}]);