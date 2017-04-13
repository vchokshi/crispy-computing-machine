function why($stateProvider, $urlRouterProvider) {
 $stateProvider
 .state('home.resources.why', {
  url: '/why',
  data: {
   pageTitle: 'Why Videbligo',
  },
  views: {
   'topcontent@' : {
    templateUrl:'views/home/resources/why/topcontent.html'
   },
   'content@' : {
    templateUrl: 'views/home/resources/why/content.html',
    controller: whyCtrl
   },

  }
 });
 function controller($scope){
  $scope.data = {
   title: "Why Videbligo",
   subtitle: "Videbligo Is Superior In Every Specific Performance Category",
   version: "v2"
  };
 }
}
angular
.module('vdb')
.config(why);
