function help($stateProvider, $urlRouterProvider) {
 $stateProvider
 .state('home.resources.help', {
  url: '/help',
  abstract: false,
  data: {
   pageTitle: 'Help',
  },
  views: {
   'topcontent@': {
    templateUrl: 'views/home/resources/help/topcontent.html',

   },
   'content@' : {
    templateUrl: 'views/home/resources/help/content.html',
    controller: 'helpCtrl'
   },
  }
 });
}
angular
.module('vdb')
.config(help);
