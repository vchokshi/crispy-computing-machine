  function userroute($stateProvider, $urlRouterProvider) {
     $stateProvider
     .state('admin.user', {
       url: '/users',
       abstract: false,
       data: {
        pageTitle: 'User Adminstration',
       },
       views: {
       'topcontent@': {
        templateUrl: 'app/views/admin/user/topcontent.html',
        controller: 'usertopCtrl'         
       },
       'content@' : {
         templateUrl: 'app/views/admin/user/middlecontent.html',
         controller: 'usermiddleCtrl'
        },
        'bottomcontent@': {
         templateUrl: 'app/views/admin/user/bottomcontent.html',
         controller: 'userbottomCtrl'

        },
     }
   });
  }
  angular
  .module('vdb')
  .config(userroute);
