function services($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home.services',	{
    abstract: false,
    url: 'services',
    data: {
      pageTitle: 'Services',
    },
    views: {
      'topcontent@': {
        templateUrl:ajaxInfo.template_directory + 'views/home/services/topcontent.html',
        controller: top
      },
      'content@' : {
        templateUrl:ajaxInfo.template_directory + 'views/home/services/middlecontent.html',
      },
      'bottomcontent@': {
        templateUrl:ajaxInfo.template_directory + 'views/home/services/bottomcontent.html',
      }
    }

  });

  function top($scope,posts) {
    console.log("Top controller started");
  }

}
angular
.module('vdb')
.config(services);
