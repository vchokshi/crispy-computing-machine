(function() {
 'use strict';

 /**
 * @ngdoc directive
 * @name d3Calendar
 * @module vdb-d3
 * @restrict EA
 * @description
 *
 * The `d3Calendar` directive description.
 *
 */
 angular
 .module('vdb-d3')
 .directive('d3Calendar', d3Calendar);

 function d3Calendar($window, $timeout, d3v3Service) {
  const directive = {
   restrict: 'EA',
   // templateUrl: '',
   scope: {
    csv: '=?',
    demo: '=?'
   },
   link: link,
   controller: Controller,
   // controllerAs: 'self',
  };

  return directive;

  ///////////

  function link(scope, el, attr, ctrl) {
   window.onresize = function() {
    scope.$apply();
   };
  }

  Controller.$inject = ['$scope','d3v3Service','$element'];

  function Controller($scope ,d3v3Service,$element) {
   'ngInject';
   const s = this;

   activate();

   function activate() {
    d3v3Service.d3().then(function(d3) {

     var width = $element.parent()[0].clientWidth,
     height= $element.parent()[0].clientHeight,
     cellSize = Math.min(width / 52, height/7);

     var percent = d3.format(".1%"),
     format = d3.time.format("%Y-%m-%d");

     var color = d3.scale.quantize()
     // .domain([-.05, .05])
     .domain([0,1])
     .range(d3.range(11).map(function(d) {
      return "q" + d + "-11";
     }));

     if($scope.demo) {
      d3.csv("data/dji.csv", function(error, csv) {
       if (error) throw error;
       s.render(csv);
      });
     } else {
      $scope.$watch('csv', function() {
       if($scope.csv) {
        s.render($scope.csv);
       }
      });
     }

     s.render = function(csv) {

      var svg = d3.select("d3-calendar").selectAll("svg")
      .data(d3.range(2017, 2018))
      .enter().append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("class", "RdYlGn")
      .append("g");

      var svg = d3.select("d3-calendar").selectAll("svg").selectAll("g");

      // svg.append("text")
      // .attr("transform", "translate(-6," + cellSize * 3.5 + ")rotate(-90)")
      // .style("text-anchor", "middle")
      // .text(function(d) { return d; });

      var rect = svg.selectAll(".day")
      .data(function(d) { return d3.time.days(new Date(d, 0, 1), new Date(d + 1, 0, 1)); })
      .enter().append("rect")
      .attr("class", "day")
      .attr("width", cellSize)
      .attr("height", cellSize)
      .attr("x", function(d) { return d3.time.weekOfYear(d) * cellSize; })
      .attr("y", function(d) { return d.getDay() * cellSize; })
      .datum(format);

      rect.append("title")
      .text(function(d) { return d; });

      svg.selectAll(".month")
      .data(function(d) { return d3.time.months(new Date(d, 0, 1), new Date(d + 1, 0, 1)); })
      .enter().append("path")
      .attr("class", "month")
      .attr("d", monthPath);

      var data = d3.nest()
      .key(function(d) { return d.Date; })
      .rollup(function(d) { return d[0].Recieved / d[0].Expected; })
      .map(csv);

      rect.filter(function(d) { return d in data; })
      .attr("class", function(d) { return color(data[d]); })
      .select("title")
      .text(function(d) { return d + ": " + percent(data[d]); });
     }

     function monthPath(t0) {
      var t1 = new Date(t0.getFullYear(), t0.getMonth() + 1, 0),
      d0 = t0.getDay(), w0 = d3.time.weekOfYear(t0),
      d1 = t1.getDay(), w1 = d3.time.weekOfYear(t1);
      return "M" + (w0 + 1) * cellSize + "," + d0 * cellSize
      + "H" + w0 * cellSize + "V" + 7 * cellSize
      + "H" + w1 * cellSize + "V" + (d1 + 1) * cellSize
      + "H" + (w1 + 1) * cellSize + "V" + 0
      + "H" + (w0 + 1) * cellSize + "Z";
     }

    });
   }//end activate
  }

 }
})();
