function resources($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home.resources',	{
    abstract: false,
    url: 'resources',
    data: {
      pageTitle: 'Resources',
    },
  });
}
angular
.module('vdb')
.config(resources);
