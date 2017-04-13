function serviceDemonstrationPages($stateProvider, $urlRouterProvider) {

 $stateProvider
 .state('service.demo.pages', {
  onEnter: function(){
  },
  url: '/:slug',
  data: {
   pageTitle: 'Demonstration Pages',
  },
  views: {
   'topcontent@' : {
    templateUrl: function($stateParams) {
     return 'views/service/demo/accordian-pages/' +
     $stateParams.slug + '.html';
    },
   },

  }
 });
}
angular
.module('vdb')
.config(serviceDemonstrationPages);
