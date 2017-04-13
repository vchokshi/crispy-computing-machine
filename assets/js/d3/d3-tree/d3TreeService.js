angular.module('vdb-d3')
.factory('treeService', function($document, $q, $rootScope){

  var d = $q.defer();
  function onScriptLoad() {
   // Load client in the browser
   $rootScope.$apply(function() { d.resolve(window.d3); });
  }

  var scriptTag = $document[0].createElement('script');
  scriptTag.type = 'text/javascript';
  scriptTag.async = true;
  scriptTag.src = 'directives/d3/tree.js';
  scriptTag.onreadystatechange = function () {
   if (this.readyState == 'complete') onScriptLoad();
  };

  scriptTag.onload = onScriptLoad;

  var s = $document[0].getElementsByTagName('body')[0];
  s.appendChild(scriptTag);

 return {
  tree: function() {
   return d.promise;
  }
 };
});
