(function() {
 'use strict';
 angular
  .module('vdb')
  .config(serviceMarketing);

  function serviceMarketing($stateProvider,$urlRouterProvider) {

   $urlRouterProvider

   .when('/service/marketing','/service/marketing/summary');

   $stateProvider
   .state('service.marketing', {
    url: '/marketing',
    abstract: false,
    data: {
     pageTitle: 'Videbligo for marketing',
    },
    views: {
     'leftbar@': {
      template: '<vdb-left-bar />',
      controller: leftControl
     }
    }
   });
  }

  function leftControl($scope) {
   $scope.route = 'service.marketing.pages';
   $scope.listGroup = [
    {
     id: "Basic",
     items: [
      {
       active: true,
       slug: "summary",
       icon: "fa fa-adjust",
       title: "Executive Summary"
      },
      {
       active: false,
       slug:'sentiment',
       icon: "fa fa-map",
       title: "Conversation Sentiment"
      },
       {
       active: false,
       slug: "language",
       icon: "fa fa-comment",
       title: "Language Choice"
      },
      {
       active: false,
       slug: "drivers",
       icon: "fa fa-pie-chart",
       title: "Conversation Drivers"
      },
      {
       active: false,
       slug: "demographics",
       icon: "fa fa-pie-chart",
       title: "Demographics"
      },
      {
       active: false,
       slug: "trends",
       icon: "fa fa-pie-chart",
       title: "Trendline"
      },
      {
       active: false,
       slug: "comparisons",
       icon: "fa fa-pie-chart",
       title: "Comparisons Summary"
      },
      {
       active: false,
       slug: "insights",
       icon: "fa fa-pie-chart",
       title: "Insights"
      },
      {
       active: false,
       slug: "recommendations",
       icon: "fa fa-pie-chart",
       title: "Recommendations"
      },
      {
       active: false,
       slug: "examples",
       icon: "fa fa-pie-chart",
       title: "Examples"
      },

     ]
    },

   ];

  }

})();

(function() {
 'use strict';
 angular
  .module('vdb')
  .config(serviceMarketingPages);

  function serviceMarketingPages($stateProvider,$urlRouterProvider) {

   $urlRouterProvider
   $stateProvider
   .state('service.marketing.pages', {
    url: '/:slug',
    abstract: false,
    data: {
     pageTitle: 'Videbligo for marketing',
    },
    views: {
     'topcontent@': {
      templateUrl: 'views/service/marketing/topcontent.html'
     },
     'content@': {
      templateUrl: function($stateParams) {
       return 'views/service/marketing/pages/' + $stateParams.slug + '.html';
      },
      controller:tabControl

     }
    }
   });
  }

  function tabControl($scope) {
   $scope.route = 'service.marketing.pages';
   $scope.tabs = [
      {
       active: true,
       slug: "sov",
       icon: "fa fa-adjust",
       title: "Share of Voice"
      },
      {
       active: false,
       slug:'demographics',
       icon: "fa fa-map",
       title: "Demographics"
      },
       {
       active: false,
       slug: "trends",
       icon: "fa fa-comment",
       title: "Trends"
      },
      {
       active: false,
       slug: "influencers",
       icon: "fa fa-pie-chart",
       title: "Influencers"
      },
      {
       active: false,
       slug: "recommendations",
       icon: "fa fa-pie-chart",
       title: "Recommendations"
      },
    ];
  }


})();
