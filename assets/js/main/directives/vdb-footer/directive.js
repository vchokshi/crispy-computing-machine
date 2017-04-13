//
(function() {
 ////'use-strict';

 /**
  * Creates an instance of table
  *
  */
 angular
 .module('vdb-main')
 .directive('vdbFooter', vdbFooter);

 function vdbFooter() {
  const directive = {
   restrict: 'EA',
   templateUrl: ajaxInfo.template_directory + 'assets/js/main/directives/vdb-footer/content.html',

   link: link,
   controller: controller,
   controllerAs: 'self',
   // controllerAs: 'vm',
   bindToController: true
  };

  return directive;

  ///////////

  function link(scope, el, attr, ctrl) {

  }
  function controller($scope,$interval,$uibModal,$log) {
   $scope.version = "2.0";

   $scope.links = [
    {
     title: "About Us",
     route: "home.blogs.posts({cat:'About',year:'2017',month:'01',day:'23',title:'About-Us'})"
    },
    {
     title: "Services",
     route: "marketing"
    },
    {
     title: "Support",
     route: "home"
    }
   ];

   $scope.showTerms = function() {
    $scope.modalTerms = $uibModal.open({
     animation: false,
     template: '<vdb-terms />',
     size: 'lg',
    });

    $scope.modalTerms.result.then(function (next) {
     // $scope.selected = selectedItem;
    }, function () {
     $log.info('Terms Modal dismissed at: ' + new Date());
    });

   };

   $scope.showPrivacy = function() {
    $scope.modalPrivacy = $uibModal.open({
     animation: false,
     template: '<vdb-privacy />',
     size: 'lg',
    });

    $scope.modalPrivacy.result.then(function (next) {
     // $scope.selected = selectedItem;
    }, function () {
     $log.info('Terms Modal dismissed at: ' + new Date());
    });



   };

   $scope.posts = [
    // {
    //  title: "New Terms and Conditions",
    //  date: "September 15, 2016",
    //  route: "home"
    // },
   ];

   $scope.unstructured = false;

   $scope.insecure = false;

   var interval;

   $scope.$on('$destroy', function () { $interval.cancel(interval); });

  }
 }

})();
