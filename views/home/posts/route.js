function posts($stateProvider, $urlRouterProvider) {
 $stateProvider
 .state('home.posts', {
   url:'posts/:slug',
   data: {
     pageTitle: 'About Us',
   },
   views: {
     'topcontent@': {
       templateUrl:ajaxInfo.template_directory+'views/home/posts/content.html',
       controller:controller,
     },
     'content@': {
       template: '<div></div>'
     },
     'bottomcontent@': {
       template: '<div></div>'
     },

   }
  });
  function controller($scope,posts,$stateParams) {
    self.params = {'slug': $stateParams.slug};
    posts.get(self.params, function(r) {
      $scope.post = r[0];
    });
  }
}
angular
.module('vdb')
.config(posts);
