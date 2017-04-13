function vdbIconCounter($sce) {
 return {
  restrict: 'E',
  templateUrl: 'vdb-ui/vdb-icon-counter/content.html',
  scope: {
   title: '@',
   values: '=',
  },
 };
}

angular
.module('vdb-ui')
.directive('vdbIconCounter', vdbIconCounter);
