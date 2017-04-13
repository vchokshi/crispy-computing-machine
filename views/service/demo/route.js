function serviceDemonstration($stateProvider) {

 $stateProvider
 .state('service.demo', {
  onEnter: function(){
  },
  url: '/demonstration',
  abstract: false,
  data: {
   pageTitle: 'Demonstration Pages',
  },
  views: {
   'leftbar@' : {
    template: '<vdb-left-menu-accordian />',
    controller:controller
   },
   'topcontent@' : {
    templateUrl: '/views/service/demo/topcontent.html',
   },
   'content@' : {
    template: '<div class="view"></div>',
   },
   'bottomcontent@' : {
    template: '<div class="view"></div>',
   },
  }
 });

 function controller($scope,$rootScope) {
  $scope.route = 'service.demo.pages';
  $scope.toggleObject = {item: -1};
  $scope.listGroup = [
   {
    id: "Basic Charts",
    items: [
     // {
     //  active: true,
     //  slug: "counters",
     //  icon: "fa fa-adjust",
     //  title: "Basic Counters"
     // },
     // {
     //  active: false,
     //  slug: "icon",
     //  icon: "fa fa-adjust",
     //  title: "Icon Counters"
     // },
     {
      active: false,
      slug: "widget",
      icon: "fa fa-adjust",
      title: "Widget Counters"
     },
     // {
     //  active: false,
     //  slug:'maps',
     //  icon: "fa fa-map",
     //  title: "Maps"
     // },
     // {
     //  active: false,
     //  slug: "comments",
     //  icon: "fa fa-comment",
     //  title: "User Comments"
     // },
     // {
     //  active: false,
     //  slug: "charts",
     //  icon: "fa fa-pie-chart",
     //  title: "Circle Charts"
     // },
     // {
     //  active: false,
     //  slug: "bubble",
     //  icon: "fa fa-pie-chart",
     //  title: "Bubble Charts"
     // },
     // {
     //  active: false,
     //  slug: "pie",
     //  icon: "fa fa-pie-chart",
     //  title: "Pie Charts"
     // },

    ]
   },
   {
    id: "Advanced Charts",
    items: [
     {
      active: false,
      slug: "aster",
      icon: "fa fa-bar-chart-o",
      title: "Aster Plots"
     },
     // {
     //  active: false,
     //  slug: "circlepack",
     //  icon: "fa fa-bar-chart-o",
     //  title: "Circle Packs"
     // },
     // {
     //  active: false,
     //  slug: "circos",
     //  icon: "fa fa-bar-chart-o",
     //  title: "Circos Graphs"
     // },
     // {
     //  active: false,
     //  slug: "flowers",
     //  icon: "fa fa-bar-chart-o",
     //  title: "Code Flowers"
     // },
     // {
     //  active: false,
     //  slug: "tree",
     //  icon: "fa fa-bar-chart-o",
     //  title: "Binary Trees"
     // },
     // {
     //  active: false,
     //  slug: "sunburst",
     //  icon: "fa fa-bar-chart-o",
     //  title: "Sunbursts"
     // },
     {
      active: false,
      slug: "calendar",
      icon: "fa fa-bar-chart-o",
      title: "Calendars"
     },
    ]
   },
   {
    id: "New",
    items: [
     {
      active: false,
      slug: "resume",
      icon: "fa fa-bar-chart-o",
      title: "Resume"
     },
    ]
   }
  ];

 }

}
angular
.module('vdb')
.config(serviceDemonstration);
