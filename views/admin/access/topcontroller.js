(function() {
 'use strict';
 angular
 .module('vdb')
 .controller('accesstopCtrl',accesstopCtrl);

 accesstopCtrl.$inject = ['$scope','admin'];

 function accesstopCtrl($scope,admin) {
  console.log("Default Controller for accesstopCtrl has started");

  $scope.getRoles = function() {
   admin.dataService('roles', function(response) {
    $scope.content = response.result;
   });
  };
  $scope.getDocuments = function() {
   admin.dataService('documents', function(response) {
    $scope.content = response.result;
   });
  };
  $scope.getServices = function() {
   admin.dataService('services', function(response) {
    $scope.content = response.result;
   });
  };
  $scope.getResources = function() {
   admin.dataService('resources', function(response) {
    $scope.content = response.result;
   });
  };
  $scope.getPermissions = function() {
   admin.dataService('permissions', function(response) {
    $scope.content = response.result;
   });
  };
 }
})();
