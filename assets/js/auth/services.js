(function() {
 //'use-strict';

 angular
 .module('vdb-auth')
 .factory('services', services);

 services.$inject = ['$rootScope','$resource'];

 function services($rootScope,$resource) {

  'ngInject';

  const s = this;

  var myServices=[];
  var myService =[];
  s.hit;

  s.url = '/api/services/:verb';
  s.actions = {
   'service': {
    'method': 'POST',
    'params': {'verb' : 'service'}
   }
  };
  s.query = $resource(s.url,s.paramDefaults || {} ,s. actions,s.options || {});

  var service = {
   getAll: getAll,
   setAll: setAll,
   set: set,
   get: get,
   clear: clear,
  };

  return service;

  function set(index,callback) {
   var hits = getAll();
   var j = 0;
   if(hits) {
    for (var i = 0, len = hits.length; i < len; i++) {
     if(hits[i].index == index) {
      myService[j] = {
       index: hits[i].index,
       title: hits[i].title,
       route: hits[i].route,
       icon: hits[i].icon,
      };
      j++;
     }
    }
   }
   callback(myService);
  }

  function get(callback) {
   callback(myService);
  }

  function clear() {
   myService = MyServices =  [];
  }

  function setAll(hits,callback) {
   myServices = [];
   for (var i = 0, len = hits.length; i < len; i++) {
    if(hits[i]._source.independent.verb_type == 'permission' &&  hits[i]._source.independent.verb == 'is_subscribed_to' && hits[i]._source.independent.record_type == 'service') {
     switch(hits[i]._source.independent.record) {
      case 'Visualize Cloud':
       var rte = 'service.cloud';
       var icon = 'fa fa-cloud';
       break;
      case 'Visualize Energy':
       var rte = 'service.energy';
       var icon = 'fa fa-pie-chart';
       break;

     }
     var service = {
      title: hits[i]._source.independent.record,
      index: hits[i]._source.dependent.record,
      route: rte,
      icon:icon
     };
     myServices.push(service);
    }
   }
   callback(myServices);
  }

  function getAll() {
   return myServices;
  }


 }
})();
