(function() {
 //'use-strict';
 /**
  * @ngdoc directive
  * @name vdb-privacy
  * @module vdb-ui
  * @restrict EA
  * @description
  *
  * The `vdb-privacy` directive description.
  *
  */
 angular
 .module('vdb-ui')
 .directive('vdbPrivacy', vdbPrivacy);

 function vdbPrivacy() {
  const directive = {
   restrict: 'EA',
   templateUrl: 'vdb-ui/vdb-privacy/content.html',
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
