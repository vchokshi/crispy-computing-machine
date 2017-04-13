(function() {
 // 'use strict';

 angular
 .module('vdb-main')
 .filter('trust', [
    '$sce',
    function($sce) {
      return function(text, type) {
        return $sce.trustAs(type || 'html', text);
      }
    }
  ])
;


})();
