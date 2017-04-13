(function() {
 // 'use strict';

 angular
 .module('vdb-flot')
 .factory('flot', flot);

 flot.$inject = ['magnitudeFilter','$filter','colors'];

 function flot(magnitudeFilter,$filter,colors) {

  'ngInject';

  const self = this;

  var service = {
   options: {
    legend: {
     show:false
    },
    grid: {
     show: true,
     clickable: true,
     hoverable:true,
     color: colors.white,
     borderWidth: 0,
     borderColor: colors.white
    },
    series: {
     shadowSize:0,
     points: {
      show: false
     }
    },
    xaxes: [
     {
      show: true,
      tickFormatter: function (val, axis) {
       return $filter('date')(val, 'shortTime');
      },
     }
    ],
    yaxes: [
     {
      position: "left",
      tickFormatter: function (val, axis) {
       return magnitudeFilter(val);
      },
      tickDecimals: 0,
     },
     {
      position: "right",
      tickFormatter: function (val, axis) {
       return magnitudeFilter(val);
      },
      // axisLabel: "# of bad events",
      tickDecimals: 0,
     },
     {
      position: "right",
      tickFormatter: function (val, axis) {
       return magnitudeFilter(val);
      },
      // axisLabel: "# of bad events",
      tickDecimals: 0,
     },
     {
      position: "left",
      tickFormatter: function (val, axis) {
       return magnitudeFilter(val);
      },
      tickDecimals: 0,
     },
    ],


   },
  };

  return service;
 }


})();
