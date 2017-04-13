  function ITOverview($stateProvider, $urlRouterProvider) {

     $stateProvider
     .state('service.cloud.overview', {
       url: '/overview',
       abstract: false,
       data: {
        pageTitle: 'Cloud Overview',
       },
       views: {
       'topcontent@': {
        templateUrl: 'views/service/cloud/Overview/topcontent.html',
        controller: 'ITOverviewTopCtrl'
       },
       'content@' : {
        templateUrl: 'views/service/cloud/Overview/middlecontent.html',
        controller: 'ITOverviewMiddleCtrl'
        },
        'bottomcontent@': {
         templateUrl: 'views/service/cloud/Overview/bottomcontent.html',
         // controller: 'ITOverviewBottomCtrl'
        },
       }
   });
  }
  angular
  .module('vdb')
  .config(ITOverview);
