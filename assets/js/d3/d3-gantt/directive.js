function d3Gantt($window, $timeout, d3v3Service) {
 return {
  restrict: 'AE',
  link: function(scope, element, attrs) {
   d3v3Service.d3().then(function(d3) {

    d3.gantt = function() {
     var FIT_TIME_DOMAIN_MODE = "fit";
     var FIXED_TIME_DOMAIN_MODE = "fixed";

     var margin = {
      top : 20,
      right : 40,
      bottom : 20,
      left : 50
     };

     var timeDomainStart = d3.time.day.offset(new Date(),-3);
     var timeDomainEnd = d3.time.hour.offset(new Date(),+3);
     var timeDomainMode = FIT_TIME_DOMAIN_MODE;// fixed or fit
     var taskTypes = [];
     var taskStatus = [];
     var height = document.body.clientHeight - margin.top - margin.bottom-5;
     var width = document.body.clientWidth - margin.right - margin.left-5;

     var tickFormat = "%H:%M";

     var keyFunction = function(d) {
      return d.startDate + d.taskName + d.endDate;
     };

     var rectTransform = function(d) {
      return "translate(" + x(d.startDate) + "," + y(d.taskName) + ")";
     };

     var x = d3.time.scale().domain([ timeDomainStart, timeDomainEnd ])
     .range([ 0, width ]).clamp(true);

     var y = d3.scale.ordinal().domain(taskTypes)
     .rangeRoundBands([ 0, height - margin.top - margin.bottom ], .1);

     var xAxis = d3.svg.axis()
     .scale(x)
     .orient("bottom")
     .tickFormat(d3.time.format(tickFormat))
     .tickSubdivide(true)
     .tickSize(8)
     .tickPadding(8);

     var yAxis = d3.svg.axis()
     .scale(y)
     .orient("left")
     .tickSize(0);

     var initTimeDomain = function() {
      if (timeDomainMode === FIT_TIME_DOMAIN_MODE) {
       if (tasks === undefined || tasks.length < 1) {
        timeDomainStart = d3.time.day.offset(new Date(), -3);
        timeDomainEnd = d3.time.hour.offset(new Date(), +3);
        return;
       }
       tasks.sort(function(a, b) {
        return a.endDate - b.endDate;
       });
       timeDomainEnd = tasks[tasks.length - 1].endDate;
       tasks.sort(function(a, b) {
        return a.startDate - b.startDate;
       });
       timeDomainStart = tasks[0].startDate;
      }
     };

     var initAxis = function() {
      x = d3.time.scale()
      .domain([ timeDomainStart, timeDomainEnd ])
      .range([ 0, width ])
      .clamp(true);

      y = d3.scale.ordinal()
      .domain(taskTypes)
      .rangeRoundBands([ 0, height - margin.top - margin.bottom ], .1);

      xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom")
      .tickFormat(d3.time.format(tickFormat))
      .tickSubdivide(true)
      .tickSize(8).tickPadding(8);

      yAxis = d3.svg.axis()
      .scale(y)
      .orient("left")
      .tickSize(0);
     };

     function gantt(tasks) {

      initTimeDomain();
      initAxis();

      var svg = d3.select("d3-gantt")
      .append("svg")
      .attr("class", "gantt")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("class", "gantt-chart")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

      svg.selectAll(".gantt .chart")
      .data(tasks, keyFunction).enter()
      .append("rect")
      .attr("rx", 0)
      .attr("ry", 0)
      .attr("class", function(d){
       if(taskStatus[d.status] == null){ return "bar";}
       return taskStatus[d.status];
      })
      .attr("y", 0)
      .attr("transform", rectTransform)
      .attr("height", function(d) { return y.rangeBand(); })
      .attr("width", function(d) {
       return (x(d.endDate) - x(d.startDate));
      });

      svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0, " + (height - margin.top - margin.bottom) + ")")
      .transition()
      .call(xAxis);

      svg.append("g")
      .attr("class", "y axis")
      .transition().call(yAxis);

      return gantt;

     };

     gantt.redraw = function(tasks) {

      initTimeDomain();
      initAxis();

      var svg = d3.select("svg");

      var ganttChartGroup = svg.select(".gantt-chart");
      var rect = ganttChartGroup.selectAll("rect").data(tasks, keyFunction);

      rect.enter()
      .insert("rect",":first-child")
      .attr("rx", 0)
      .attr("ry", 0)
      .attr("class", function(d){
       if(taskStatus[d.status] == null){ return "bar";}
       return taskStatus[d.status];
      })
      .transition()
      .attr("y", 0)
      .attr("transform", rectTransform)
      .attr("height", function(d) { return y.rangeBand(); })
      .attr("width", function(d) {
       return (x(d.endDate) - x(d.startDate));
      });

      rect.transition()
      .attr("transform", rectTransform)
      .attr("height", function(d) { return y.rangeBand(); })
      .attr("width", function(d) {
       return (x(d.endDate) - x(d.startDate));
      });

      rect.exit().remove();

      svg.select(".x").transition().call(xAxis);
      svg.select(".y").transition().call(yAxis);

      return gantt;
     };

     gantt.margin = function(value) {
      if (!arguments.length)
      return margin;
      margin = value;
      return gantt;
     };

     gantt.timeDomain = function(value) {
      if (!arguments.length)
      return [ timeDomainStart, timeDomainEnd ];
      timeDomainStart = +value[0], timeDomainEnd = +value[1];
      return gantt;
     };

     gantt.timeDomainMode = function(value) {
      if (!arguments.length)
      return timeDomainMode;
      timeDomainMode = value;
      return gantt;

     };

     gantt.taskTypes = function(value) {
      if (!arguments.length)
      return taskTypes;
      taskTypes = value;
      return gantt;
     };

     gantt.taskStatus = function(value) {
      if (!arguments.length)
      return taskStatus;
      taskStatus = value;
      return gantt;
     };

     gantt.width = function(value) {
      if (!arguments.length)
      return width;
      width = +value;
      return gantt;
     };

     gantt.height = function(value) {
      if (!arguments.length)
      return height;
      height = +value;
      return gantt;
     };

     gantt.tickFormat = function(value) {
      if (!arguments.length)
      return tickFormat;
      tickFormat = value;
      return gantt;
     };

     return gantt;
    };

    var tasks = [
     {
      "startDate":new Date("2017-01"),
      "endDate":new Date("2017-04"),
      "taskName":"Plan","status":"SUCCEEDED"
     },
     {
      "startDate":new Date("2017-04"),
      "endDate":new Date("2017-08"),
      "taskName":"Build","status":"SUCCEEDED"
     },
     {
      "startDate":new Date("2017-08"),
      "endDate":new Date("2021-12"),
      "taskName":"Run","status":"SUCCEEDED"
     },
     {
      "startDate":new Date("2017-04"),
      "endDate":new Date("2021-12"),
      "taskName":"Analysis","status":"FAILED"
     }
    ];

    var taskStatus = {
     "SUCCEEDED" : "bar",
     "FAILED" : "bar-failed",
     "RUNNING" : "bar-running",
     "KILLED" : "bar-killed"
    };

    var taskNames = [ "Plan", "Build", "Run", "Analysis"];

    tasks.sort(function(a, b) {
     return a.endDate - b.endDate;
    });

    var maxDate = tasks[tasks.length - 1].endDate;

    tasks.sort(function(a, b) {
     return a.startDate - b.startDate;
    });

    var minDate = tasks[0].startDate;

    var format = "%M";
    var timeDomainString = "5year";

    var gantt = d3.gantt()
    .taskTypes(taskNames)
    .taskStatus(taskStatus)
    .tickFormat(format)
    .height(190)
    .width(400);

    gantt.timeDomainMode("fixed");
    changeTimeDomain(timeDomainString);

    gantt(tasks);

    function changeTimeDomain(timeDomainString) {
     this.timeDomainString = timeDomainString;
     switch (timeDomainString) {
      case "1hr":
      format = "%H:%M:%S";
      gantt.timeDomain([ d3.time.hour.offset(getEndDate(), -1), getEndDate() ]);
      break;
      case "3hr":
      format = "%H:%M";
      gantt.timeDomain([ d3.time.hour.offset(getEndDate(), -3), getEndDate() ]);
      break;

      case "6hr":
      format = "%H:%M";
      gantt.timeDomain([ d3.time.hour.offset(getEndDate(), -6), getEndDate() ]);
      break;

      case "1day":
      format = "%H:%M";
      gantt.timeDomain([ d3.time.day.offset(getEndDate(), -1), getEndDate() ]);
      break;

      case "1week":
      format = "%a %H:%M";
      gantt.timeDomain([ d3.time.day.offset(getEndDate(), -7), getEndDate() ]);
      break;

      case "1year":
      format = "%MM";
      gantt.timeDomain([ d3.time.day.offset(getEndDate(), -365), getEndDate() ]);
      break;

      case "5year":
      format = "%Y";
      gantt.timeDomain([ d3.time.day.offset(getEndDate(), -(365*5)), getEndDate() ]);
      break;
      default:

     }
     gantt.tickFormat(format);
     gantt.redraw(tasks);
    }

    function getEndDate() {
     var lastEndDate = Date.now();
     if (tasks.length > 0) {
      lastEndDate = tasks[tasks.length - 1].endDate;
     }

     return lastEndDate;
    }

    function addTask() {

     var lastEndDate = getEndDate();
     var taskStatusKeys = Object.keys(taskStatus);
     var taskStatusName = taskStatusKeys[Math.floor(Math.random() * taskStatusKeys.length)];
     var taskName = taskNames[Math.floor(Math.random() * taskNames.length)];

     tasks.push({
      "startDate" : d3.time.hour.offset(lastEndDate, Math.ceil(1 * Math.random())),
      "endDate" : d3.time.hour.offset(lastEndDate, (Math.ceil(Math.random() * 3)) + 1),
      "taskName" : taskName,
      "status" : taskStatusName
     });

     changeTimeDomain(timeDomainString);
     gantt.redraw(tasks);
    };

    function removeTask() {
     tasks.pop();
     changeTimeDomain(timeDomainString);
     gantt.redraw(tasks);
    };

   });

  }
 }
}
angular
.module('vdb-d3')
.directive('d3Gantt', d3Gantt);
