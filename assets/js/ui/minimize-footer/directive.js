
function minimizeFooter($timeout) {
 return {
  restrict: 'E',
  templateUrl: 'vdb-ui/minimize-footer/content.html',
  controller: function ($scope, $element) {
   $scope.showhide = function () {
    var div = angular.element( '#footer' );
    var icon = $element.find('i:first');
    // var content = ibox.find('div.ibox-content');
    div.slideToggle(200);
    // Toggle icon from up to down
    icon.toggleClass('fa-chevron-down').toggleClass('fa-chevron-up');
    // ibox.toggleClass('').toggleClass('border-bottom');
    $timeout(function () {
     div.resize();
     div.find('[id^=map-]').resize();
    }, 50);
   };
  }
 };
}

angular
.module('vdb-ui')
.directive('minimizeFooter', minimizeFooter);
