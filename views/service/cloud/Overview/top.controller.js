function ITOverviewTopCtrl($scope,$resource,$interval,flot,search) {
 const s = this;
 s.search = search;

 s.initialize = function() {

  s.pP = {};
  s.url = '/api/overview/:verb';

  s.actions = {
   'score': {
    'method': 'POST',
    'params': { 'verb': 'score'},
    'rparams': { 'library': 'vdb', 'type': 'widget'}
   },
   'events': {
    'method': 'POST',
    'params': { 'verb': 'events' },
    'rparams': { 'library': 'vdb', 'type': 'widget'}
   },
   'threats': {
    'method': 'POST',
    'params': { 'verb': 'threats' },
    'rparams': { 'library': 'vdb', 'type': 'widget'}
   },
   'devices': {
    'method': 'POST',
    'params': { 'verb': 'devices' },
    'rparams': { 'library': 'vdb', 'type': 'widget'}
   },
   'sl': {
    'method': 'POST',
    'params': { 'verb': 'sl' },
    'rparams': { 'library': 'vdb', 'type': 'widget'}
   },
   'users': {
    'method': 'POST',
    'params': { 'verb': 'users' },
    'rparams': { 'library': 'vdb', 'type': 'widget'}
   },
   'layers': {
    'method': 'POST',
    'params': {'verb': 'layers'},
    'rparams': {'library': 'vdb', 'type': 'progress'}
   },
   'devicetable': {
    'method': 'POST',
    'params': {'verb': 'devicetable'},
    'rparams': {'library': "vdb", 'type': "table"}
   },
   'timeseries': {
    'method': 'POST',
    'params': { 'verb': 'timeseries' },
    'rparams': {'library': "vdb", 'type': "timeseries" }
   }
  };

  s.qs = {};
  $scope.rs = {};

  s.query = $resource(s.url,s.paramDefaults || {}, s.actions || {}, s.search.options);

  s.execute();

  s.promise = $interval(function() {
   s.execute();
  },s.search.getRefreshKey());
 };

 s.execute = function() {
  s.search.getSearchParams(function(sp) {
   s.pP.searchParams = sp;
   $.each(s.actions, function(k,v) {
    s.qs[k] = s.query[k](s.pP,function(r) {
     $scope.rs[k] = r[v.rparams.type];
    })
   });//end foreach
  });

  $scope.$watch('rs.timeseries', function() {
   if($scope.rs.timeseries) {
    $.plot($("#flot-timeseries"), $scope.rs.timeseries,flot.options);
   }
  });
 }//end of s.execute

 s.initialize();

 s.cleanup = function() {
  $.each(s.qs,function(k,v) {
   v.$cancelRequest();
  });
  $interval.cancel(s.promise);
 }

 $scope.$on('reset', function() {
  s.cleanup();
  s.initialize();
 });

 $scope.$on('unathorized', function() {
  s.cleanup();
 });
 $scope.$on('$destroy', function() {
  s.cleanup();
 });
}
angular
.module('vdb')
.controller('ITOverviewTopCtrl',ITOverviewTopCtrl);
