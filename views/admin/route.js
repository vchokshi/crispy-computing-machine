function admin($stateProvider, $urlRouterProvider) {

 $urlRouterProvider
 // .when('/admin','/admin/docs');

 $stateProvider
 .state('admin', {
  url: '/admin',
  abstract: false,
  data: {
   pageTitle: 'Adminstration',
  },
  views: {
   'header': {
    template: '<vdb-header />',
   },
   'leftbar': {
    template: '<vdb-left-menu-accordian />',
    controller: controller
   },
   'topcontent' : {
    template: '<div />',
   },
   'content' : {
    templateUrl: 'views/admin/content.html',
   },
   'bottomcontent' : {
   },
   'rightbar': {
    template: '<div />',
   },
   'footer': {
    // template: '<vdb-footer />'
   }
  }
});

function controller($scope,$rootScope) {
 $scope.route = 'admin.pages';
 $scope.toggleObject = {item: -1};
 $scope.listGroup = [
  {
    id: "Cluster Admin",
    items: [
     {
      active:true,
      slug: 'cluster',
      icon: "fa fa-adjust",
      title: "Cluster Status"
     }
    ]
  },
  {
    id: "User Mgmt"
  },
  {
    id: "Access Mgmt"
  }
 ];
}

}
angular
.module('vdb')
.config(admin);

function adminPages($stateProvider, $urlRouterProvider) {

 $stateProvider
 .state('admin.pages', {
  onEnter: function(){
  },
  url: '/:slug',
  data: {
   pageTitle: 'Adminstration Pages',
  },
  views: {
   'topcontent@' : {
    templateUrl: function($stateParams) {
     return 'views/admin/accordian-pages/' +
     $stateParams.slug + '.html';
    },
    // controller: clusterCtrl,
    // function($stateParams) {
    //  console.log($stateParams.slug + 'Ctrl');
    //  return $stateParams.slug + 'Ctrl';
    // }
   },
  }
 });
}
angular
.module('vdb')
.config(adminPages);
