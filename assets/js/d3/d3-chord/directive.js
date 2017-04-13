function d3Chord($window, $timeout, d3v4Service,colors) {
 return {
  restrict: 'AE',
  link: function(scope, element, attrs) {
   d3v4Service.d3().then(function(d3) {

    var matrix = [
     [11975,  5871, 8916, 2868],
     [ 1951, 10048, 2060, 6171],
     [ 8010, 16145, 8090, 8045],
     [ 1013,   990,  940, 6907]
    ];

    var width = 420,
    height = 420;

    var svg = d3.select("d3-chord").append("svg")
     .attr("width",width)
     .attr("height", height);

    var outerRadius = Math.min(width, height) * 0.5 - 40,
    innerRadius = outerRadius - 30;

    var formatValue = d3.formatPrefix(",.0", 1e3);

    var chord = d3.chord()
    .padAngle(0.05)
    .sortSubgroups(d3.descending);

    var arc = d3.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);

    var ribbon = d3.ribbon()
    .radius(innerRadius);

    var color = d3.scaleOrdinal()
    .domain(d3.range(4))
    .range(colors);

    var g = svg.append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
    .datum(chord(matrix));

    var group = g.append("g")
    .attr("class", "groups")
    .selectAll("g")
    .data(function(chords) {
     return chords.groups;
    })
    .enter().append("g");

    group.append("path")
    .style("fill", function(d) {
     return color(d.index);
     })
    .style("stroke", function(d) {
     return d3.rgb(color(d.index)).darker();
    })
    .attr("d", arc);

    var groupTick = group.selectAll(".group-tick")
    .data(function(d) {
     return groupTicks(d, 1e3);
    })
    .enter().append("g")
    .attr("class", "group-tick")
    .attr("transform", function(d) {
     return "rotate(" + (d.angle * 180 / Math.PI - 90) + ") translate(" + outerRadius + ",0)";
    });

    groupTick.append("line")
    .attr("x2", 6);

    groupTick
    .filter(function(d) {
     return d.value % 5e3 === 0;
    })
    .append("text")
    .attr("x", 8)
    .attr("dy", ".35em")
    .attr("transform", function(d) {
     return d.angle > Math.PI ? "rotate(180) translate(-16)" : null;
    })
    .style("text-anchor", function(d) {
     return d.angle > Math.PI ? "end" : null;
    })
    .text(function(d) {
     return formatValue(d.value);
    });

    g.append("g")
    .attr("class", "ribbons")
    .selectAll("path")
    .data(function(chords) {
     return chords;
    })
    .enter().append("path")
    .attr("d", ribbon)
    .style("fill", function(d) {
     return color(d.target.index);
    })
    .style("stroke", function(d) {
     return d3.rgb(color(d.target.index)).darker();
    });

    // Returns an array of tick angles and values for a given group and step.
    function groupTicks(d, step) {
     var k = (d.endAngle - d.startAngle) / d.value;
     return d3.range(0, d.value, step).map(function(value) {
      return {value: value, angle: value * k + d.startAngle};
     });
    }
   });
  }
 }
}
angular
.module('vdb-d3')
.directive('d3Chord', d3Chord);
