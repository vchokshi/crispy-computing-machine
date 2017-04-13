function ITOverviewMiddleCtrl($resource,$scope,$interval,search,jvector) {
 const s = this;
 s.search = search;

 s.initialize = function() {
  s.map = new jvm.Map(jvector.options);

  s.pP = {};
  s.url = '/api/overview/:verb';

  s.actions = {
   'geo_regions': {
    'method': 'POST',
    'params': { 'verb': 'geo_regions' },
    'rparams': { 'library': 'jvectormap', 'type': 'geo_regions'}
   },
   // 'geo_markers_medium': {
   //  'method': 'POST',
   //  'params': { 'verb': 'geo_markers' },
   //  'rparams': { 'library': 'jvectormap', 'type': 'geo_markers','severity': 'Medium'}
   // },
   'geo_markers_high': {
    'method': 'POST',
    'params': { 'verb': 'geo_markers' },
    'rparams': { 'library': 'jvectormap', 'type': 'geo_markers','severity': 'High'}
   },
  };

  s.qs = {};
  $scope.rs = {};

  s.query = $resource(s.url,s.paramDefaults || {}, s.actions || {}, s.search.options);


  s.execute();
  s.promise = $interval(function() {
   s.execute();
  },s.search.getRefreshKey());
 }//end initialize

 s.execute = function() {
  s.markers = [];
  s.values = [];

  s.search.getSearchParams(function(sp) {
   s.pP.searchParams = sp;

   $.each(s.actions, function(k,v) {
    s.pP.responseParams = v.rparams;
    s.qs[k] = s.query[k](s.pP,function(r) {
     $scope.rs[k] = r[v.rparams.type];
     v.rparams.type == 'geo_regions' ? s.map.series.regions[0].setValues($scope.rs[k]) : null;
     if(v.rparams.type == 'geo_markers') {
      $scope.rs[k].forEach(function(e) {
       s.markers.push({'latLng': e.coords, 'name': e.name});
       s.values.push(e.value);
      });
      s.map.addMarkers(s.markers);
     }
    });

   });//end foreach
  });
 }//end execute

s.cleanup = function() {
 $.each(s.qs,function(k,v) {
  v.$cancelRequest();
 });
 $interval.cancel(s.promise);
 s.map.remove();
}

s.initialize();

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
.controller('ITOverviewMiddleCtrl',ITOverviewMiddleCtrl);
