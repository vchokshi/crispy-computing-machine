
(function() {
 //'use-strict';

 angular
 .module('vdb-auth')
 .factory('register', register);

 register.$inject = ['$resource','user'];

 function register($resource,user) {

  var service = {
   register: register,
  };

  return service;

  function register(postData, callback) {
   var reg = $resource('/api/aaa/register/');
   reg.get(postData, function(response) {
    if(response.token && response.id && response.$resolved) {
     user.setToken(response,function(response){});
     user.setId(response,function(response) {});
     callback(response);
    }
   });
  }
 }
})();
