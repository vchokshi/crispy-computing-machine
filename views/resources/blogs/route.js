function blogs($stateProvider) {

 $stateProvider
 .state('home.resources.blogs', {
  url: 'blogs',
  abstract: false,
  data: {
   pageTitle: 'Blogs',
  },
  views: {
   'topcontent@': {
   },
   'content@' : {
    templateUrl: 'wp/index.php',
    // templateUrl: 'views/home/blogs/content/index.html',
    controller: 'blogCtrl'
   },
   'bottomcontent@': {
   }
  }
 });
}
angular
.module('vdb')
.config(blogs);


function postss($stateProvider) {

 $stateProvider
 .state('home.blogs.posts', {
  url: '/:cat/:year/:month/:day/:title' + '.html',
  views: {
   'content@': {
    templateUrl: function($stateParams) {
     return 'views/home/blogs/content/' +
      ($stateParams.cat).toLowerCase() + '/' +
      $stateParams.year + '/' +
      $stateParams.month + '/' +
      $stateParams.day + '/' +
      ($stateParams.title).toLowerCase() + '.html';
    },
    controller: blogPostsCtrl
   }
  }
 });
}

angular
.module('vdb')
.config(postss);
