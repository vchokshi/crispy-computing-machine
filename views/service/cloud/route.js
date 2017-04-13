 function cloud($stateProvider, $urlRouterProvider) {

  $urlRouterProvider
  .when('/service/cloud','/service/cloud/overview');

   $stateProvider
   .state('service.cloud', {
     url: '/cloud',
     abstract: false,
     data: {
      pageTitle: 'Videbligo for Cloud',
     },
     views: {
      // 'leftbar@' : {
      //  template: '<vdb-left-bar />',
      //  controller: serviceITCtrl
      // },
     }
   });
 }
 angular
    .module('vdb')
    .config(cloud);
