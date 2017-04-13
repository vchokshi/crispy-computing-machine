function support($stateProvider, $urlRouterProvider) {
 $stateProvider
 .state('home.resources.support', {
  url: '/support',
  abstract: false,
  data: {
   pageTitle: 'Support',
  },
  views: {
   'topcontent@': {

   },
   'content@' : {
    templateUrl: 'views/home/resources/support/content.html',
    controller: 'supportCtrl'
   },
  }
 });
}
angular
.module('vdb')
.config(support);
