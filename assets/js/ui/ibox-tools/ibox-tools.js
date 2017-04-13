function iboxTools($timeout) {
 return {
  restrict: 'AE',
  scope: true,
  templateUrl: 'vdb-ui/ibox-tools/ibox_tools.html',
  controller: function ($scope, $element) {

   $scope.showhide = function () {
    var ibox = $element.closest('div.ibox');
    var icon = $element.find('i:first');
    var content = ibox.find('div.ibox-content');
    content.slideToggle(200);
    // Toggle icon from up to down
    icon.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
    ibox.toggleClass('').toggleClass('border-bottom');
    $timeout(function () {
     ibox.resize();
     ibox.find('[id^=map-]').resize();
    }, 50);
   },

   $scope.showhelp = function () {
    var ibox = $element.closest('div.ibox');
    var content = ibox.find('div.ibox-content');
    var data=content.find('#data');
    var help = content.find('#help');
    var settings=content.find('#settings');

    // data.slideToggle(200, function() {
    //  help.toggleClass('hidden');
    // });
    data.toggleClass('hidden');
    help.toggleClass('hidden');
    // settings.toggleClass('hidden');
   },

   $scope.showsettings = function () {
    var ibox = $element.closest('div.ibox');
    var content = ibox.find('div.ibox-content');

    var data=content.find('#data');
    var help = content.find('#help');
    var settings=content.find('#settings');

    data.toggleClass('hidden');
    // help.toggleClass('hidden');
    settings.toggleClass('hidden');

    $timeout(function () {
     ibox.resize();
     ibox.find('[id^=map-]').resize();
    }, 50);
   },
   // Function for close ibox
   $scope.closebox = function () {
    var ibox = $element.closest('div.ibox');
    ibox.remove();
   };
  }
 };
}
angular
.module('vdb-ui')
.directive('iboxTools', iboxTools);
