function d3rtTree($window, $timeout, d3v3Service) {//d3rt-tree
 return {
  restrict: 'AE',
  link: function(scope, element, attrs) {
   d3v3Service.d3().then(function(d3) {
    var margin = parseInt(attrs.margin) || 20,
     diameter = 630/2;

    var tree = d3.layout.tree()
    .size([360, diameter / 2 -60])
    .separation(function(a, b) { return (a.parent == b.parent ? 1 : 2) / a.depth; });

    var diagonal = d3.svg.diagonal.radial()
    .projection(function(d) { return [d.y, d.x / 180 * Math.PI]; });

    var svg = d3.select("d3rt-tree").append("svg")
    // var svg = d3.select("body").append("svg")
    .attr("width", diameter)
    .attr("height", diameter )
    .append("g")
    .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

    d3.json("gruntdata/flare.json", function(error, root) {
     if (error) throw error;
     var nodes = tree.nodes(root),
     links = tree.links(nodes);

     var link = svg.selectAll(".link")
     .data(links)
     .enter().append("path")
     .attr("class", "link")
     .attr("d", diagonal);

     var node = svg.selectAll(".node")
     .data(nodes)
     .enter().append("g")
     .attr("class", "node")
     .attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; });

     node.append("circle")
     .attr("r", 4.5);

     node.append("text")
     .attr("dy", ".31em")
     .attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
     .attr("transform", function(d) { return d.x < 180 ? "translate(8)" : "rotate(180)translate(-8)"; })
     .text(function(d) { return d.name; });
    });

    d3.select(self.frameElement).style("height", diameter - 150 + "px");

   });
  }
 };
}

 angular
 .module('vdb-d3')
 .directive('d3rtTree', d3rtTree);
