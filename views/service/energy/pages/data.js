(function() {
 'use strict';

 angular
 .module('vdb')
 .controller('datatopCtrl', datatopCtrl);

 datatopCtrl.$inject = ['$scope','$resource','search','$interval','RdYlGn','d3v4Service'];

 function datatopCtrl($scope,$resource,search,$interval,RdYlGn,d3v4Service) {
  'ngInject';
  const s = this;
  s.search = search;

  s.initialize = function() {
   s.pP = {};
   s.url = '/api/energy/:verb';

   s.actions = {
    'meterdata': {
     'method': 'POST',
     'params': { 'verb': 'meterdata'},
     'rparams': { 'widget': true, 'type': 'cal'}
    },
   }
   s.query = $resource(s.url,s.paramDefaults || {}, s.actions || {}, s.search.options);

   s.execute();

   s.promise = $interval(function() {
    s.execute();
   },s.search.getRefreshKey());

   $scope.backgroundColor = [];

   $scope.datasetOverride = [
    {
     label: "Actual Meter Reads",
     borderWidth: 1,
     type: 'bar',
     backgroundColor: $scope.backgroundColor,
     borderColor: $scope.backgroundColor

    },
    {
     label: "Expected Meter Reads",
     borderWidth: 3,
     type: 'line'
    }
   ];
  }

  s.execute = function() {
   s.search.getSearchParams(function(sp) {
    s.pP.searchParams = sp;
    s.pP.rP = s.actions.meterdata.rparams;
    s.qs = s.query.meterdata(s.pP,function(r) {
     console.log(r);
     //Populate the calendar
     $scope.cal = r.data.cal;

     //Populate the bar chart
     $scope.labels = r.data.bar.labels;
     $scope.data = r.data.bar.result;
     //Setup the colors fdr the bars
     d3v4Service.d3().then(function(d3) {

      var color = d3.scaleQuantize()
      .domain([0,1])
      .range(d3.range(RdYlGn().length).map(function(d) {
       return RdYlGn()[d];
      }));

      $scope.labels.forEach(function(m,i) {
       $scope.backgroundColor[i] = color($scope.data[0][i] / $scope.data[1][i]);
      })
     });


    });
   });
  }

  s.initialize();

  s.cleanup = function() {
   s.qs.$cancelRequest();
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
})();

(function() {
 'use strict';

 angular
 .module('vdb')
 .controller('datamiddleCtrl', datamiddleCtrl);

 datamiddleCtrl.$inject = ['$scope','$resource','search','$interval','colors'];

 function datamiddleCtrl($scope,$resource,search,$interval,colors) {
  'ngInject';
  const s = this;
  s.search = search;


  s.initialize = function() {


  }

  s.execute = function() {

  }
 }
})();





(function() {
 'use strict';

 angular
 .module('vdb')
 .controller('databottomCtrl', databottomCtrl);

 databottomCtrl.$inject = ['$scope','colors'];

 function databottomCtrl($scope,colors) {
  'ngInject';
  const self = this;

  activate();

  ///////////

  function activate() {



  }
 }
})();
