function serviceenergy($stateProvider, $urlRouterProvider) {

 $urlRouterProvider
 .when('/service/energy','/service/energy/data');

 $stateProvider
 .state('service.energy', {
  url: '/energy',
  abstract: false,
  data: {
   pageTitle: 'Videbligo for Energy',
  },
  views: {
   'leftbar@' : {
    template: '<vdb-left-menu-accordian />',
    controller: leftcontroller
   },
   'topcontent@': {
    templateUrl: 'views/service/energy/content.html',
    controller: topcontroller
   },
   'content@': {
    templateUrl: 'views/service/energy/topcontent.html',
    controller: controller
   },
   'bottomcontent@': {
    templateUrl: 'views/service/energy/bottomcontent.html',
    controller: bottomcontroller
   }
  }
 });

 function leftcontroller($scope) {
  $scope.route = 'service.energy.pages';
  $scope.toggleObject = {item: -1};
  $scope.listGroup = [
   {
    id: "Overiew",
    items: [
     {
      active: true,
      slug: "data",
      icon: "fa fa-adjust",
      title: "MDM Overview"
     },
     {
      active: true,
      slug: "meteroverview",
      icon: "fa fa-adjust",
      title: "Meters Overview"
     },
     {
      active: true,
      slug: "collectoroverview",
      icon: "fa fa-adjust",
      title: "Collectors Overview"
     },
    ]
   },
   {
    id: "Explorer",
    items: [
     {
      active: true,
      slug: "mexplore",
      icon: "fa fa-adjust",
      title: "Meters Explorer"
     },
     {
      active: true,
      slug: "cexplore",
      icon: "fa fa-adjust",
      title: "Collectors Explorer"
     }
    ]
   },
   {
    id: "Analytics",
    items: [
     {
      active: false,
      slug: "weather",
      icon: "fa fa-adjust",
      title: "Weather"
     },

    ]
   },
   {
    id: "Historicals",
    items: [
     {
      active: false,
      slug: "mhistory",
      icon: "fa fa-adjust",
      title: "Meter Data Historicals"
     },
     {
      active: true,
      slug: "chistory",
      icon: "fa fa-adjust",
      title: "Collector Data Historicals"
     }
    ]
   }
  ];
 }

 function bottomcontroller($scope) {}

 function topcontroller($scope) {}

 function controller($scope) {

 }
}
angular
.module('vdb')
.config(serviceenergy);

function serviceenergypages($stateProvider) {
 $stateProvider
 .state('service.energy.pages', {
  onEnter: function(){
  },
  url: '/:slug',
  data: {
   pageTitle: 'Videbligo for Energy',
  },
  views: {
   'topcontent@' : {
    templateUrl: function($stateParams) {
     return 'views/service/energy/pages/' +
     $stateParams.slug + 'top.html';
    },
    controllerProvider: function($stateParams) {
     return $stateParams.slug + 'topCtrl'
    }
   },
   'content@' : {
    templateUrl: function($stateParams) {
     return 'views/service/energy/pages/' +
     $stateParams.slug + 'middle.html';
    },
    controllerProvider: function($stateParams) {
     return $stateParams.slug + 'middleCtrl'
    }
   },
   'bottomcontent@' : {
    templateUrl: function($stateParams) {
     return 'views/service/energy/pages/' +
     $stateParams.slug + 'bottom.html';
    },
    controllerProvider: function($stateParams) {
     return $stateParams.slug + 'bottomCtrl'
    }
   },

  }
 });
}
angular
.module('vdb')
.config(serviceenergypages);
