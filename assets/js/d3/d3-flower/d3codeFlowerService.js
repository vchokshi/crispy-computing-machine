angular.module('vdb-d3')
.factory('codeFlowerService', function($document, $q, $rootScope){

  var d = $q.defer();
  function onScriptLoad() {
   // Load client in the browser
   $rootScope.$apply(function() { d.resolve(window.d3); });
  }

  var scriptTag = $document[0].createElement('script');
  scriptTag.type = 'text/javascript';
  scriptTag.async = true;
  scriptTag.src = 'vdb-d3/d3CodeFlower/codeFlower.js';
  scriptTag.onreadystatechange = function () {
   if (this.readyState == 'complete') onScriptLoad();
  };

  scriptTag.onload = onScriptLoad;

  var s = $document[0].getElementsByTagName('body')[0];
  s.appendChild(scriptTag);

 return {
  cf: function() {
   return d.promise;
  }
 };
});
