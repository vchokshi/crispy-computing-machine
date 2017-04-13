(function() {
 'use strict';

 angular
 .module('vdb')
 .controller('clusterCtrl',clusterCtrl);

 clusterCtrl.$inject=['$scope','search', '$interval','$resource'];

 function clusterCtrl($scope,search,$interval,$resource) {
  console.log("Starting cluster control");
  /* jshint validthis: true */
  const self=this;

  self.search = search;

  self.initialize = function() {
   self.postParams = {};
   self.promise;

   self.url = '/api/cluster/:verb';
   self.paramDefaults = {};
   self.options = {
    "cancellable": true
   };
   self.actions = {
    'status': {
     'method': 'GET',
     'params': { 'verb': 'status' }
    },
    'performance': {
     'method': 'GET',
     'params': { 'verb': 'performance' }
    }
   };
   self.query = $resource(self.url,self.paramDefaults,self.actions,self.options);
  }

  self.execute = function() {
   self.status = self.query.status(function(response) {
    $scope.status = response;
   });
   self.performance = self.query.performance(function(response) {
    $scope.performance = response;
   });
  }

  self.initialize();
  self.execute();

  self.promise = $interval(function() {
   self.execute();
  },self.search.getRefreshKey());

  $scope.$on('$destroy', function() {
   $interval.cancel(self.promise);
  });

  $scope.$on('unathorized', function() {
   self.status.$cancelRequest();
   self.performance.$cancelRequest();
   $interval.cancel(self.promise);
  });



 }

})();
