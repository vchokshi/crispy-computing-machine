angular.module('vdb-d3')
.factory('d3circosService', function($document, $q, $rootScope){

  var d = $q.defer();
  function onScriptLoad() {
   // Load client in the browser
   $rootScope.$apply(function() { d.resolve(window.d3); });
  }

  var scriptTag = $document[0].createElement('script');
  scriptTag.type = 'text/javascript';
  scriptTag.async = true;
  scriptTag.src = 'circosJS/dist/circosJS.js';
  scriptTag.onreadystatechange = function () {
   if (this.readyState == 'complete') onScriptLoad();
  };

  scriptTag.onload = onScriptLoad;

  var s = $document[0].getElementsByTagName('body')[0];
  s.appendChild(scriptTag);

 return {
  cs: function() {
   return d.promise;
  }
 };
});
