  function ITOperationsExplorer($stateProvider, $urlRouterProvider) {
     $stateProvider
     .state('service.cloud.explorer', {
       url: '/Explorer',
       abstract: false,
       data: {
        pageTitle: 'Device Explorer',
       },
       views: {
        'leftbar@': {
         templateUrl: 'views/service/cloud/Explorer/leftbar.html',
         controller: 'leftExplorerCtrl'
        },
       'topcontent@': {
        templateUrl: 'views/service/cloud/Explorer/topcontent.html',
        controller: 'ITOperationsExplorertopCtrl'
       },
       'content@' : {
         templateUrl: 'views/service/cloud/Explorer/middlecontent.html',
         controller: 'ITOperationsExplorermiddleCtrl'
        },
        'bottomcontent@': {
         templateUrl: 'views/service/cloud/Explorer/bottomcontent.html',
         controller: 'ITOperationsExplorerbottomCtrl'
        },
     }
   });
  }
  angular
  .module('vdb')
  .config(ITOperationsExplorer);
