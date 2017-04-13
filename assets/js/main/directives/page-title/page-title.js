function pageTitle($rootScope, $timeout) {
 return {
  link: function(scope, element) {
   var listener = function(event, toState, toParams, fromState, fromParams) {
    // Default title - load on Dashboard 1
    var title = 'Videbligo | Big Data Analytics ';
    // Create your own title pattern
    if (toState.data && toState.data.pageTitle) title = toState.data.pageTitle;
    $timeout(function() {
     element.text(title);
    });
   };
   $rootScope.$on('$stateChangeStart', listener);
  }
 };
}

angular
.module('vdb-ui')
.directive('pageTitle', pageTitle);
