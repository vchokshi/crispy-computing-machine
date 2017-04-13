(function() {
 'use strict';

 /**
 * vdb-widget is a small widget that we use to show data
 *
 * @ngdoc directive
 * @name vdbWidget
 * @module vdb-ui
 * @restrict EA
 * @description vdb-widget is a small widget that we use to show data
 *
 *
 */
 angular
 .module('vdb-ui')
 .directive('vdbWidget', vdbWidget);

 function vdbWidget() {
  const directive = {
   restrict: 'EA',
   templateUrl: 'vdb-ui/vdb-widget/content.html',
   //This next line isolates the scope to this directove only
   scope: {
    data: '=?',
    demo: '=?'
   },
   link: link,
   controller: Controller,
   controllerAs: 'self',
   // bindToController: true
  };

  return directive;

  function link(scope, el, attr, ctrl) {
  }

 }

 Controller.$inject = ['$scope','color_kv_array','utilitiesService','magnitudeFilter','$timeout'];

 function Controller($scope,color_kv_array,utilitiesService,magnitudeFilter,$timeout) {
  'ngInject';
  const self = this;
  self.us = utilitiesService;
  $scope.mf = magnitudeFilter;

  self.activate = function() {
   //We only run activate if no data is passed in on scope.
   if($scope.demo) {
    self.magnitude = 1000000;

    //Randomly pick a background color.
    // self.background = colors.red;
    self.background = Object.keys( color_kv_array[Math.floor(Math.random() * color_kv_array.length)])[0];
    if(utilitiesService.flip()) {
     self.previous = Math.random();
     self.value = self.current = Math.random();
     self.trend = utilitiesService.trend(self.previous,self.current);
    } else {
     self.previous = Math.random()* self.magnitude;
     self.value = self.current = Math.random()* self.magnitude;
     self.trend = utilitiesService.trend(self.previous,self.current);
    }

    $scope.data = {
     title: "vdb-widget",
     background: self.background,
     help: "This is an example of the vdb-widget. The help is shown on mouseover.",
     value: self.value,
     icon: "fa-info-circle",
     trend: "fa-chevron-" + self.trend,
     filterTemplate: null
    };
   }

  }

  self.activate();
 }
})();
