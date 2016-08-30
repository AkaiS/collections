angular.module('yourCollection.collection', [])
.controller('CollectionController', ['$scope', 'Collection', function($scope, Collection) {
  $scope.data = {};
}]);