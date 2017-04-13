function service($stateProvider, $urlRouterProvider) {

 $urlRouterProvider
 .when('/service','/service/cloud');

 $stateProvider
 .state('service', {
  url: '/service',
  abstract: false,
  data: {
   pageTitle: 'Service',
   bodyClasses: 'dark'
  },
  views: {
   'header': {
    template: '<vdb-header />',
   },
   'leftbar': {
    template: '<div />',
   },
   'topcontent' : {
    template: '<div />',
   },
   'content' : {
    template: '<div />',
    controller: 'serviceCtrl'
   },
   'bottomcontent' : {
    template: '<div />',
   },
   'rightbar': {
    template: '<div />',
   },
   'footer': {
    // template: '<vdb-footer />'
   }
  }

 });

}
angular
.module('vdb')
.config(service);
