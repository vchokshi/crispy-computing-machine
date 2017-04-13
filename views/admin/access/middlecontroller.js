(function() {
 'use strict';
 angular
 .module('vdb')
 .controller('accessmiddleCtrl',accessmiddleCtrl);

 accessmiddleCtrl.$inject = ['$scope','admin'];

 function accessmiddleCtrl($scope,admin) {
  console.log("Default Controller for accessmiddleCtrl has started");

  $scope.getCompanies = function() {
   admin.dataService('companies', function(response) {
    $scope.content = response.result;
   });
  };

 }
})();
