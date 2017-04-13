(function() {
 'use strict';

 /**
 * @ngdoc directive
 * @name d3Aster
 * @module vdb-d3
 * @restrict EA
 * @description
 *
 * The `d3Aster` directive description.
 *
 */
 angular
 .module('vdb-d3')
 .directive('d3Aster', d3Aster);

 function d3Aster(d3v4Service) {
  const directive = {
   restrict: 'EA',
   scope: {
    csv: '=?',
    demo: '=?'
   },
   link: link,
   controller: Controller,
   controllerAs: 'self',
   // bindToController: true
  };

  return directive;

  ///////////

  function link(scope, iElement, iAttrs) {


  }


  Controller.$inject = ['$scope','d3v4Service','$element'];

  function Controller($scope ,d3v4Service,$element) {
   'ngInject';
   const s = this;

   activate();

   ///////////

   function activate() {
    d3v4Service.d3().then(function(d3) {

     var width = $element.parent()[0].clientWidth ,
     height = $element.parent()[0].clientHeight ,
     radius = Math.min(width, height) / 2,
     innerRadius = 0.3 * radius;

     var pie = d3.pie()
     .sort(null)
     .value(function(d) { return d.width; });

     var color = d3.scaleQuantize()
     // .domain([-.05, .05])
     .domain([0,100])
     .range(d3.range(11).map(function(d) {
      return "q" + d + "-11";
     }));

     var arc = d3.arc()
     .innerRadius(innerRadius)
     .outerRadius(function (d) {
      return (radius - innerRadius) * (d.data.score / 100.0) + innerRadius;
     });

     var outlineArc = d3.arc()
     .innerRadius(innerRadius)
     .outerRadius(radius);



     // var tip = d3.tip()
     // .attr('class', 'd3-tip')
     // .offset([0, 0])
     // .html(function(d) {
     //  return d.data.label + ": <span style='color:orangered'>" + d.data.score + "</span>";
     // });

     if($scope.demo) {
      d3.csv("data/aster_data.csv", function(error, csv) {
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

      var svg = d3.select("d3-aster").append("svg")
      .attr("class", "aster RdYlGn")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


       csv.forEach(function(d) {
        d.weight = +d.weight;
        d.score  = +d.score;
        d.width  = +d.weight;
        d.label  =  d.label;
       });
       // for (var i = 0; i < data.score; i++) { console.log(data[i].id) }

       var path = svg.selectAll(".solidArc")
       .data(pie(csv))
       .enter().append("path")
       .attr("class", function(d) { return "solidArc " + color(d.data.score); })
       .attr("stroke", function(d) {return color(d.data.score)})
       .attr("d", arc);

       // .on('mouseover', tip.show)
       // .on('mouseout', tip.hide);

       var outerPath = svg.selectAll(".outlineArc")
       .data(pie(csv))
       .enter().append("path")
       .attr("fill", "none")
       .attr("stroke", "green")
       .attr("class", "outlineArc")
       .attr("d", outlineArc);


       // calculate the weighted mean score
       var score =
       csv.reduce(function(a, b) {
        //console.log('a:' + a + ', b.score: ' + b.score + ', b.weight: ' + b.weight);
        return a + (b.score * b.weight);
       }, 0) /
       csv.reduce(function(a, b) {
        return a + b.weight;
       }, 0);

       svg.append("svg:text")
       .attr("class", "aster-score")
       .attr("dy", ".35em")
       .attr("text-anchor", "middle") // text-align: right
       .text(Math.round(score));
      //
     }


    });
   }//end activate
  }
 }
})();
