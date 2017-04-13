function serviceITCtrl($scope,$rootScope) {

 $scope.route = 'service.cloud.pages';
 $scope.listGroup = [
  {
   id: "Basic",
   items: [
    {
     active: true,
     slug: "summary",
     icon: "fa fa-adjust",
     title: "Overview"
    },
    {
     active: false,
     slug:'maps',
     icon: "fa fa-map",
     title: "Explorer"
    }
   ]
  }
 ];

 $rootScope.$on('unathorized', function() {
  $scope.$broadcast('unathorized');
 });
 $rootScope.$on('index', function() {
  $scope.$broadcast('reset');
 });
 $rootScope.$on('window', function() {
  $scope.$broadcast('reset');
 });
}

angular
.module('vdb')
.controller('serviceITCtrl',serviceITCtrl);
