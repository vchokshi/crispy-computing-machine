function d3Pie($window, $timeout, d3v4Service,blues) {
 return {
  restrict: 'AE',
  link: function(scope, element, attrs) {
   d3v4Service.d3().then(function(d3) {

    var pie = d3.pie()
    .sort(null)
    .value(function(d) {
     return d.population;
    });

    var width = 260,
    height = 200,
    radius = Math.min(width, height) / 2;

    var svg = d3.select("d3-pie")
    .append("svg")
    .attr("height", height)
    .attr("width", width)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var color = d3.scaleOrdinal()
    .range(blues);
    var arc = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

    var labelArc = d3.arc()
    .outerRadius(radius - 40)
    .innerRadius(radius - 40);

    d3.csv("data/d3pie.csv", type, function(error, data) {
     if (error) throw error;

     var g = svg.selectAll(".arc")
     .data(pie(data))
     .enter().append("g")
     .attr("class", "arc");

     g.append("path")
     .attr("d", arc)
     .style("fill", function(d) {
      return color(d.data.age);
     });

     g.append("text")
     .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
     .attr("dy", ".35em")
     .text(function(d) {
      return d.data.age;
     });

    });

    function type(d) {
     d.population = +d.population;
     return d;
    }

   });
  }
 }
}


angular
.module('vdb-d3')
.directive('d3Pie', d3Pie);
