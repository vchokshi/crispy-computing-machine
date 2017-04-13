angular.module('vdb-main')
.constant(
 // 'color_hash', ["#00a0e9", "#5fb611","#fff100","#f39800","#e60033","#ee82ee","#4b0082",'#f5f5f5','#dcdcdc']
 'color_hash', ["#00a0e9", "#5fb611","#fff100","#f39800","#e60033"]
);

angular.module('vdb-main')
.constant(
 'category20a',
 function() {
  return [
   "#00a0e9", "#20acec","#40b8ee","#60c4f1",
   "#e60033","#e9204d","#ec4066","#ef6080",
   "#f39800","#f4a520","#f6b240","#f7bf60",
   "#fff100","#fff320","#fff440","#fff660",
   "#5fb611","#73bf3f","#87c84d","#9bd16a"
  ];
 });

 angular.module('vdb-main')
 .constant(
  'RdYlGn',
  function() {
   return [
    "rgb(230, 0, 13)",
    "rgb(230, 26, 0)",
    "rgb(230, 64, 0)",
    "rgb(230, 102, 0)",
    "rgb(230, 141, 0)",
    "rgb(230, 217, 0)",
    "rgb(204, 230, 0)",
    "rgb(166, 230, 0)",
    "rgb(128, 230, 0)",
    "rgb(89, 230, 0)"
   ];
  });

 angular.module('vdb-main')
 .constant(
  'category8a',
  function() {
   return [
    "#e60033","#e9204d",
    "#f39800","#f4a520",
    "#fff100","#fff320",
    "#5fb611","#73bf3f"
   ];
  });

 angular.module('vdb-main')
 .constant(
  "colors", {
   "red" : "#e60033",
   "orange" : "#f39800",
   "green" : "#5fb611",
   "blue" : "#00a0e9",
   "indigo" : "#00628e",
   "violet" : "#4b0082",
   "black" : "#252525",
   "gray" : "#dcdcdc",
   "white": "#f5f5f5"
  }
 );

 angular.module('vdb-main')
 .constant(
  "color_kv_array", [
   {"red" : "#e60033"},
   {"orange" : "#f39800"},
   {"green" : "#5fb611"},
   {"blue" : "#00a0e9"},
   {"indigo" : "#00628e"},
   {"violet" : "#4b0082"},
   {"black" : "#252525"},
   {"gray" : "#dcdcdc"},
   {"white": "#f5f5f5"}
  ]
 );
