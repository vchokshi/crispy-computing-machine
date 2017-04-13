function d3Sunburst(d3v3Service,search,color_hash,category20a) {
 return {
  restrict: 'AE',
  scope: {
   data: '='
  },
  link: function(scope, element, attrs) {
   d3v3Service.d3().then(function(d3) {

    var width = 1000/2,
    height = 850/2,
    radius = Math.min(width, height) / 2;

    var x = d3.scale.linear()
    .range([0, 2 * Math.PI]);

    var y = d3.scale.sqrt()
    .range([0, radius]);

    var color = d3.scale.ordinal()
    .range(category20a());

    //Build the initial svg here.
    var svg = d3.select("d3-sunburst").append("svg")
    .attr("class", "sunburst")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + (height / 2 + 10) + ")");

    //https://github.com/d3/d3-3.x-api-reference/blob/master/Partition-Layout.md

    var partition = d3.layout.partition()
    .sort(null)
    .value(function(d) { return 1; });

    //The arc function
    var arc = d3.svg.arc()
    .startAngle(function(d) {
     return Math.max(0, Math.min(2 * Math.PI, x(d.x)));
    })
    .endAngle(function(d) {
     return Math.max(0, Math.min(2 * Math.PI, x(d.x + d.dx)));
    })
    .innerRadius(function(d) {
     return Math.max(0, y(d.y));
    })
    .outerRadius(function(d) {
     return Math.max(0, y(d.y + d.dy));
    });

    // Keep track of the node that is currently being displayed as the root.
    //I think this is main.
    var node;

    d3.json("/data/flare.json", function(error, root) {
     node = root;

     var g = svg.datum(root).selectAll("g")
     .data(partition.nodes)
     .enter().append("g")
     .attr("class", "opacity");

     var path = g.append("path")
     // .data(partition.nodes)
     // .enter().append("path")
     .attr("d", arc)
     .attr("class", function(d) {
      return d.level;
     })
     .style("fill", function(d) {
      //if d has chilndre, return d.name, else return  d.parent.name
      //Then name computes a color.
      return color((d.children ? d : d.parent).name);
     })
     .on("click", click)
     .each(stash);

     var text = g.append("svg:title")
     // .attr("transform", function(d) { return "rotate(" + computeTextRotation(d) + ")"; })
     // .attr("x", function(d) { return y(d.y); })
     // .attr("dx", "6") // margin
     // .attr("dy", ".35em") // vertical-align
     .text(function(d) { return d.name; });

     // svg.append("svg:text")
     // // .attr("class", "aster-score")
     // .attr("dy", ".35em")
     // .attr("text-anchor", "middle") // text-align: right
     // .text("89.54%");

     d3.selectAll("input").on("change", function change() {
      var value = this.value === "count"
      ? function() { return 1; }
      : function(d) { return d.size; };

      path
      .data(partition.value(value).nodes)
      .transition()
      .duration(1000)
      .attrTween("d", arcTweenData);
     });

     function click(d) {
      node = d;
      path.transition()
      .duration(1000)
      .attrTween("d", arcTweenZoom(d));
     }
    });
    //End main

    d3.select(self.frameElement).style("height", height + "px");

    // Setup for switching data: stash the old values for transition.
    function stash(d) {
     d.x0 = d.x;
     d.dx0 = d.dx;
    }
    function computeTextRotation(d) {
     return (x(d.x + d.dx / 2) - Math.PI / 2) / Math.PI * 180;
    }
    // When switching data: interpolate the arcs in data space.
    function arcTweenData(a, i) {
     var oi = d3.interpolate({x: a.x0, dx: a.dx0}, a);
     function tween(t) {
      var b = oi(t);
      a.x0 = b.x;
      a.dx0 = b.dx;
      return arc(b);
     }
     if (i == 0) {
      // If we are on the first arc, adjust the x domain to match the root node
      // at the current zoom level. (We only need to do this once.)
      var xd = d3.interpolate(x.domain(), [node.x, node.x + node.dx]);
      return function(t) {
       x.domain(xd(t));
       return tween(t);
      };
     } else {
      return tween;
     }
    }//End arctweendata function

    // When zooming: interpolate the scales.
    function arcTweenZoom(d) {
     var xd = d3.interpolate(x.domain(), [d.x, d.x + d.dx]),
     yd = d3.interpolate(y.domain(), [d.y, 1]),
     yr = d3.interpolate(y.range(), [d.y ? 20 : 0, radius]);
     return function(d, i) {
      return i
      ? function(t) { return arc(d); }
      : function(t) { x.domain(xd(t)); y.domain(yd(t)).range(yr(t)); return arc(d); };
     };
    }

   });
  }
 }
}


angular
.module('vdb-d3')
.directive('d3Sunburst', d3Sunburst);
