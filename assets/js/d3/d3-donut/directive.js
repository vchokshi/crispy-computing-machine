function d3Donut($window, $timeout, d3v4Service,blues) {
 return {
  restrict: 'AE',
  link: function(scope, element, attrs) {
   d3v4Service.d3().then(function(d3) {
    var width = 200,
    height = 215,
    radius = Math.min(width, height) / 2;

var color = d3.scaleOrdinal()
    .range(blues);

var arc = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(radius - 70);

var pie = d3.pie()
    .sort(null)
    .value(function(d) { return d.population; });

var svg = d3.select("d3-donut").append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

d3.csv("data/d3Pie.csv", type, function(error, data) {
  if (error) throw error;

  var g = svg.selectAll(".arc")
      .data(pie(data))
    .enter().append("g")
      .attr("class", "arc");

  g.append("path")
      .attr("d", arc)
      .style("fill", function(d) { return color(d.data.age); });

  g.append("text")
      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
      .attr("dy", ".35em")
      .text(function(d) { return d.data.age; });
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
.directive('d3Donut', d3Donut);
