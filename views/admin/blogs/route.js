  function adminblogs($stateProvider, $urlRouterProvider) {
     $stateProvider
     .state('admin.blogs', {
       url: '/blogs',
       abstract: false,
       data: {
        pageTitle: 'Blog Publishing',
       },
       views: {

       'content@' : {
         templateUrl: 'views/admin/blogs/content.html',
        },
       
     }
   });
  }
  angular
  .module('vdb')
  .config(adminblogs);
