(function() {
 //'use-strict';

 angular
 .module('vdb-auth')
 .factory('indices', indices);

 indices.$inject = ['$rootScope','$localStorage'];

 function indices($rootScope,$localStorage) {

  'ngInject';

  const self = this;

  var allMyIndices = [],
   defaultIndex,
   myIndex;

  var service = {
   get: get,
   set: set,

   getAll: getAll,
   setAll: setAll,

   getDefaultIndex: getDefaultIndex,

   clear: clear,
  };
  return service;

  function get(callback) {
    callback(myIndex);
  }

  function set(index) {
   myIndex = index;
   $rootScope.$broadcast('reset');
  }

  function getDefaultIndex(callback) {
   if(defaultIndex) {
    callback(defaultIndex);
   }
   callback(null);
  }

  function clear() {
   allMyIndices = defaultIndex = myIndex =  [];
  }

  function getAll(callback) {
    callback(allMyIndices);
  }

  function setAll(hits,callback) {
   for (var i = 0, len = hits.length; i < len; i++) {
    if(
     hits[i]._source.independent.verb_type == 'permission' &&
     hits[i]._source.independent.verb == 'is_subscribed_to' &&
     hits[i]._source.independent.record_type == 'service' &&
     hits[i]._source.dependent.verb_type == 'permission' &&
     hits[i]._source.dependent.verb == 'with_resource' &&
     (allMyIndices.indexOf(hits[i]._source.dependent.record) === -1 )
    ) {
     allMyIndices.push(hits[i]._source.dependent.record);
    }
   }
   set(allMyIndices[0]);
   callback(allMyIndices);
  }

 }



})();
