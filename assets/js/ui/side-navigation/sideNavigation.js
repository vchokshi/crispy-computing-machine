function sideNavigation() {
 return {
  restrict: 'A',
  link: function(scope, element) {
   // Call the metsiMenu plugin and plug it to sidebar navigation
   angular.element(document).ready(function() {
    setTimeout(function() {
     element.metisMenu({
     });
    },800);
   });
   // setTimeout(function() {
   //  element.metisMenu({
   //  });
   // },3000);
   // element(document).ready(function() {
   //  element.metisMenu();
   // });
  }
 };
}
angular
.module('vdb-ui')
.directive('sideNavigation', sideNavigation);
