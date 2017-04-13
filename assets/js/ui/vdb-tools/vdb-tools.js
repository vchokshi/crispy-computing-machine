function vdbTools($timeout) {
  return {
    restrict: 'AE',
    scope: true,
    templateUrl: 'components/vdb-tools/vdbTools.html',
   };
}
angular
    .module('vdb-ui')
    .directive('vdbTools', vdbTools);
