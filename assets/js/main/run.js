(function() {
 //'use-strict';
 /**
  * @ngdoc run
  * @name run
  * @module vdb
  * @restrict EA
  * @description
  *
  *
  *
  */
 angular
 .module('vdb-main')
 .run(runBlock);

 runBlock.$inject = ['$rootScope'];

 function runBlock($rootScope) {
   $rootScope.dir = ajaxInfo.template_directory;
   $rootScope.is_admin = ajaxInfo.is_admin;
 }

})();
