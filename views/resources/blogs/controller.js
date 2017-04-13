function blogCtrl($scope,user) {
 console.log("Starting blog control");
 const self = this;
 self.user = user;
 activate();

 ///////////

 function activate() {

 }
}
angular
.module('vdb-ui')
.controller('blogCtrl', blogCtrl);

function blogPostsCtrl($scope) {
 $scope.blog = {};

 $scope.blog.tco = {
  projectdata: {
   //using vdb-table
   headers: false,
   tableheaders: ['Item','Value'],
   title: "Company and User Information Overview",
   panel: false,
   overview: "ACME Inc. Project Data Overview",
   tabledata:[
    ['Annual Revenues @ Growth','$1B @ 8% Y/Y'],
    ['Number of Employees', 4000],
    ['Number of Business Users', 150],
   ]
  },
  team: {
   headers: true,
   tableheaders: ["Role", "Quantity" ,"Allocation (Plan)", "Allocation (Build)", "Allocation (Run)"],
   "title" :"Project Team Members",
   panel: false,
   tabledata: [
    ["Executive Sponsor",1,"25%", "24%", "10%"],
    ["Project Manager",2, "100%","99%","0%"],
    ["Program Manager",3,"0%", "1%","50%"],
    // ["Enterprise Architects",3 ,,,],
    // ["Enterprise Designers",3,,,],
    // ["IT Technical Leads",3,,,],
    // ["IT Level-1 Engineers",,,,],
    // ["IT Level-2 Engineers",,,,],
    // ["IT Level-3 Engineers",,,,],
   ]
  },
  solution: {
   headers: false,
   "title" :"Solution Requirements",
   tabledata: [
    ["Total Active Users", 150],
    ["Daily Active Users ", 100],
    ["Monthly Active Users", 50],
    ["Unique Data Streams", 15],
    ["Key Performance Indicators", 250],
    ["Required Visualizations", 144],
    ["Hot Data", "35 Days"],
    ["Warm Data", "90 Days"],
    ["Cold Data","396 Days"]
   ]
  }

 }

}
angular
.module('vdb-ui')
.controller('blogPostsCtrl', blogPostsCtrl);
