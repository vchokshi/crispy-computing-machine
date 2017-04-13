(function() {
 'use strict';

 angular
 .module('vdb')
 .controller('clusterMiddleCtrl',clusterMiddleCtrl);

 clusterMiddleCtrl.$inject=['$scope','search', '$interval','$resource'];

 function clusterMiddleCtrl($scope,search,$interval,$resource) {
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
    'stats': {
     'method': 'GET',
     'params': { 'verb': 'stats' }
    }
   };

   self.query = $resource(self.url,self.paramDefaults,self.actions,self.options);
  }

  self.execute = function() {
   self.stats = self.query.stats(function(response) {
    $scope.stats = response;
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
   self.stats.$cancelRequest();
   $interval.cancel(self.promise);
  });
 }
})();
