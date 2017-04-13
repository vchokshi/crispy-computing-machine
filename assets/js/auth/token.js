
(function() {
 //'use-strict';

 angular
 .module('vdb-auth')
 .factory('token', token);

 token.$inject = ['$rootScope','$localStorage'];

 function token($rootScope, $localStorage) {

  'ngInject';

  const self = this;
  self.token;

  var service = {
   set: set,
   get: get,
   clear: clear
  };

  return service;

  function set(token, callback) {
    self.token = $localStorage.token =  token.token;
    $rootScope.$broadcast('login');
    callback(true);
  }

  function get(callback){
   if(self.token) {
    callback(self.token);
   } else if($localStorage.token) {
    callback($localStorage.token);
   } else {
    callback(null);
   }
  }

  function clear() {
   self.token = null;
   delete $localStorage.token;
  }

 }

})();
