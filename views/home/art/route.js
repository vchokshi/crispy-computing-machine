function art($stateProvider, $urlRouterProvider) {
 $stateProvider
 .state('home.art', {
  url: 'art',
  abstract: false,
  data: {
   pageTitle: 'About Us',
  },
  views: {
   'topcontent@': {
    templateUrl:ajaxInfo.template_directory + 'views/home/art/topcontent.html',
   }
  }
 });
}
angular
.module('vdb')
.config(art);
