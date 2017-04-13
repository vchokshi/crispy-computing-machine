(function() {
 /**
  * @ngdoc config
  * @name vdb
  * @module vdb
  * @description
  *
  */
 angular
 .module('vdb')
 .config(config);

 config.$inject= ['$httpProvider','$resourceProvider','$locationProvider'];

 function config($httpProvider,$resourceProvider,$locationProvider) {

   $locationProvider.hashPrefix('');
   $locationProvider.html5Mode({
     enabled: true,
     requireBase: false
   });
  // $resourceProvider.defaults.stripTrailingSlashes = false;
  // $httpProvider.useApplyAsync(false);
  $httpProvider.defaults.useXDomain = true;

  delete $httpProvider.defaults.headers.common['X-Requested-With'];
  delete $httpProvider.defaults.headers.common['referrer'];

  $httpProvider.interceptors.push('interceptor');
 }

})();

(function() {
 //'use-strict';
 /**
  * @ngdoc service
  * @name interceptor
  * @module vdb
  * @restrict EA
  * @description
  */
  /*
  */
 angular
 .module('vdb')
 .service('interceptor', interceptor);

 interceptor.$inject = ['$q', 'token','$rootScope'];

 function interceptor($q,token,$rootScope) {

  var service = this;
  var token = token;
  // var id = id;

  service.request = function(config) {
   config.headers = config.headers || {};
   token.get(function(response) {
    response ? config.headers.Authorization = 'Bearer ' + response: null;
   });
   // id.getMyId(function(response) {
   //  response ? config.headers.From = response : null;;
   // });

   return config;
  };

  service.requestError = function(rejection) {
  }

  service.response = function(response) {
   return response;
  };

  service.responseError = function(rejection) {
   if (rejection.status === 401) {
    $rootScope.$broadcast("unathorized");
    return;
   }
   return $q.reject(rejection);
  };
 }

})();

(function() {
 //'use-strict';
 /**
  * @ngdoc service
  * @name interpolate
  * @module vdb
  * @restrict EA
  * @description
  *
  *
  *
  */
 angular
 .module('vdb')
 .config(interpolate);

 interpolate.$inject = ['$interpolateProvider'];

 function interpolate($interpolateProvider) {
  $interpolateProvider.startSymbol('//');
  $interpolateProvider.endSymbol('\\\\');
 }
})();
