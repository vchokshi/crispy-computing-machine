function home($stateProvider, $urlRouterProvider) {

  $urlRouterProvider
  .when('','/')
  .when('/home', '/');
  // .otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    data: {
      pageTitle: 'Videbligo is Visualization',
    },
    views: {
      'header': {
        template: '<vdb-header />' ,
        //controller is in the directive
      },
      'leftbar': {
        //controller is in the directive
      },
      'topcontent': {
        templateUrl: ajaxInfo.template_directory + 'views/home/slider.html',
        controller: controller
      },
      'content': {
        templateUrl: ajaxInfo.template_directory + 'views/home/content.html',
        controller: contentController
      },
      'bottomcontent': {
      },
      'footer': {
        template: '<vdb-footer />' ,
        //controller is in the directive
      },
    }
  });

  function contentController($scope,posts) {
    posts.projects(function(r) {
      $scope.posts = r;
    });
  }
  function controller($scope) {
    $scope.myInterval = 5000;
    $scope.active = 0;
  }
}


angular
.module('vdb')
.config(home);
