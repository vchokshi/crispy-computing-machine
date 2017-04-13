(function() {
 //'use-strict';

 angular
 .module('vdb-ui')
 .directive('vdbLogin', vdbLogin);

 function vdbLogin() {
  const directive = {
   restrict: 'EA',
   templateUrl: ajaxInfo.template_directory + 'assets/js/ui/vdb-login/content.html',
   link: link,
   controller: controller,
   bindToController: true
  };

  return directive;

  ///////////

  function link(scope, el, attr, ctrl) {

  }
  function controller(user,$scope,$state) {
   const self = this;
   activate();

   function activate() {
    $scope.formData = {
     'username': '',
     'password': '',
    };

   }
   $scope.submit = function() {
    $scope.submitted = !$scope.submitted;
    user.login($scope.formData,function(response) {
     if(response === true) {
      $scope.modalIsOpen ? $scope.modalInstance.close(true) : null;
      $scope.modalInstance.dismiss(true);
      $state.go('home');
     } else {
      $scope.submitted = !$scope.submitted;
     }
    });
   };


  }

 }

})();
