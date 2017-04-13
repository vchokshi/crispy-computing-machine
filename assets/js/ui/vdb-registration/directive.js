(function() {
 //'use-strict';

 angular
 .module('vdb-ui')
 .directive('vdbRegistration', vdbRegistration);

 function vdbRegistration() {
  const directive = {
   restrict: 'EA',
   templateUrl: 'vdb-ui/vdb-registration/content.html',
   link: link,
   controller: controller,
   bindToController: true
  };

  return directive;

  ///////////

  function link(scope, el, attr, ctrl) {}

  function controller(user,$scope,$state) {
   console.log("Starting new reg controller");
   const self = this;

   activate();

   function activate() {

    const self = this;

    $scope.regParams = {
     userStrong: false,
     passStrength: '',
     mode: 'entropy',
     goal: 96,
     passMatch: false,
     validemail: false
    };

    $scope.regData = {
     username: '',
     password: '',
     confirm:'',
     firstname:'',
     lastname: '',
     email: '',
     company: '',
     terms: false
    };

    $scope.submit = function() {

     $scope.submitted = !$scope.submitted;

     //Now we send this stuff to the server to see if we can register the user.
     //We simplified the code to simply have them check a box to read the terms
     user.register($scope.regData,function(response) {

      if(response.company && response.id && response.token) {
       $scope.modalInstance.close();
       $scope.submitted = !$scope.submitted;

       user.getUser(function(response) {
        response.Account ? $state.go('home') : $state.go('register');
       });

      }

      else if(!response.company && response.id && response.token){
       //We did not create a company but we created a user
       //So we do not need to create a new resource of type index.
       //Log them in, but we need to alert the admin to subscrivve them to services
       $scope.modalInstance.close();
       $scope.submitted = !$scope.submitted;

       user.getUser(function(response) {
        response.Account ? $state.go('home') : $state.go('register');
       });

      }

      else if(response.company && !response.id) {
       //this should not happen. We should not create a company and not a user
      }

      else {
       //The company existed and so did the user.
       //We need to avoid trolls here.
       //Present an error message to contact admin.
       $scope.modalInstance.close();
       $state.go('register');
      }

     });//End User.register
    };
   }
  }
 }
})();
