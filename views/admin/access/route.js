  function accessroute($stateProvider, $urlRouterProvider) {
     $stateProvider
     .state('admin.access', {
       url: '/acl',
       abstract: false,
       data: {
        pageTitle: 'Access List Management',
       },
       views: {
       'topcontent@': {
        templateUrl: 'views/admin/access/topcontent.html',
        controller: 'accesstopCtrl'

       },
       'content@' : {
         templateUrl: 'views/admin/access/middlecontent.html',
         controller: 'accessmiddleCtrl'
        },
        'bottomcontent@': {
         templateUrl: 'views/admin/access/bottomcontent.html',
         controller: 'accessbottomCtrl'
        },
     }
   });
  }
  angular
  .module('vdb')
  .config(accessroute);
