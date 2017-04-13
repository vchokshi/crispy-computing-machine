function d3Flower($window, $timeout, d3v3Service,codeFlowerService) {
 return {
  restrict: 'AE',
  link: function(scope, element, attrs) {
   d3v3Service.d3().then(function(d3) {
    codeFlowerService.cf().then(function(cf) {

     var currentCodeFlower;

     var createCodeFlower = function(json) {
      var jsonArray;
      // update the jsonData textarea
       // document.getElementById('jsonData').value = JSON.stringify(json);
      // remove previous flower to save memory
      if (currentCodeFlower) currentCodeFlower.cleanup();
      // adapt layout size to the total number of elements
      // var total = countElements(json);
      var total =  Object.keys(json);
      w = parseInt(Math.sqrt(total) * 30, 10);
      h = parseInt(Math.sqrt(total) * 30, 10);
      // create a new CodeFlower
      currentCodeFlower = new CodeFlower("d3-flower", 300, 300).update(json);
     };

     d3.json('/data/flower.json', createCodeFlower);

     // document.getElementById('project').addEventListener('change', function() {
     //  console.log("Project");
     //  d3.json(this.value, createCodeFlower);
     // });

     // document.getElementById('jsonInput').addEventListener('submit', function(e) {
     //  console.log("jsonInput");
     //  e.preventDefault();
     //  document.getElementById('visualization').scrollIntoView();
     //  var json = JSON.parse(document.getElementById('jsonData').value);
     //  currentCodeFlower.update(json);
     // });

      // document.getElementById('jsonConverter').addEventListener('submit', function(e) {
      //  console.log("jsonConverter");
      //  e.preventDefault();
      //  var origin = this.children[0].children[0].value;
      //  var data = this.children[0].children[1].value;
      //  var json = convertToJSON(data, origin);
      //  document.getElementById('visualization').scrollIntoView();
      //  createCodeFlower(json);
      // });

    });
   });
  }
 }
}
angular
.module('vdb-d3')
.directive('d3Flower', d3Flower);
