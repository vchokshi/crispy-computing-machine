(function() {

 angular
 .module('vdb-auth')
 .run(run);

 run.$inject= ['$rootScope','$state', '$resource','user'];

 function run($rootScope, $state, $resource,user) {
  const self=this;

  $rootScope.$on('$stateChangeStart', function (event, toState, fromState, fromParams) {
   var resource = toState.name.split(".")[0];
   if(resource !== 'home') {
    //Protected resource being accessed
    //Check for auth
    if(!user.checkAuth()) {
     // $state.go('home');
    }
   }
  });
 }
})();
