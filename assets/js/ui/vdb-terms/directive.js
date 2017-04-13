(function() {
 //'use-strict';
 /**
  * @ngdoc directive
  * @name vdb-terms
  * @module vdb-ui
  * @restrict EA
  * @description
  *
  * The `vdb-terms` directive description.
  *
  */
 angular
 .module('vdb-ui')
 .directive('vdbTerms', vdbTerms);


 function vdbTerms() {
  const directive = {
   restrict: 'EA',
   templateUrl: 'vdb-ui/vdb-terms/content.html',
   scope: {},
   link: link,
   // controller: controller
   // controller: controller,
   // controllerAs: 'self',
   // controllerAs: 'vm',
   // bindToController: true
  };

  return directive;

  ///////////

  function link(scope, el, attr, ctrl) {

  }
  function controller($scope) {


  }

 }

})();
