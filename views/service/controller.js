function serviceCtrl($scope,$rootScope) {
 $rootScope.$on('unathorized', function() {
  $scope.$broadcast('unathorized');
 });
}
angular
.module('vdb')
.controller('serviceCtrl',serviceCtrl);
