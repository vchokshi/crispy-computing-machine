(function() {
 // 'use strict';

 angular
 .module('vdb-main')
 .filter('magnitude', magnitude);

 function magnitude() {
  return magnitudeFilter

  ///////////

  function magnitudeFilter(v) {
   if(v<1) return (v*100).toFixed(2).toString()  + "%";
   if(v < 1000)  return v.toFixed(2);
   var exp = parseInt(Math.log(v) / Math.log(1000));
   return ((v / Math.pow(1000, exp)).toFixed(1)+"KMBTPE".charAt(exp-1));
  }
 }
})();
