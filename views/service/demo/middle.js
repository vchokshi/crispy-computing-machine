function demomiddleCtrl($scope,d3v4Service,colors,$interval,$resource) {

 const self = this;
 self.postParams = {};
 self.promise;

 self.url = '/api/test/:verb';
 self.paramDefaults = {};
 self.options = {};

 $scope.tabs = [
  { title: "Aster Plots", content: 'views/service/demo/aster.html' },
  { title: "Calendar Views", content:'views/service/demo/calendar.html' },
  { title: "Sunburst Charts", content:'views/service/demo/sunburst.html' },
  { title: "User Commentary", content:'views/service/demo/comments.html' },

  // { title: "Payment Options", content: 'app/views/home/myProfile/settings/payment.html'},
  // { title: "Notification Settings", content: 'app/views/home/myProfile/settings/notifications.html'}
 ];

 function init() {

  $scope.months = ['October', 'November', 'December'];

  $scope.barSeries = ['You', 'Your Competitors'];
  $scope.detailSeries= ['You','Wells Fargo','Prudential','Washington Mutual', 'Chase Bank', 'Bank of America', 'Hartford', 'Allstate', 'Statefarm'];
  $scope.colors = [colors.blue, colors.green];

  $scope.bubbleSeries= ['You','Wells Fargo','Prudential','Washington Mutual', 'Chase Bank', 'Bank of America', 'Hartford', 'Allstate', 'Statefarm'];

  $scope.bubbleData = [];
  $scope.bubbleData[0] = [];
  $scope.bubbleColors = [];


  $scope.barData = [];
  $scope.barData[0] =[];
  $scope.barData[1] = [];
  $scope.barData[2] = [];

  $scope.pieSeries = ['Male', 'Female'];
  $scope.pieData = [];


  $scope.pieColors = [colors.blue, colors.red];

  $scope.pieSeries2 = ['Spanish', 'English', 'Other'];
  $scope.pieData2 = [];

  $scope.pieColors2 = [colors.blue, colors.green,colors.gray];



  // $scope.myCircle = Circles.create({
  //  id:                  'circles-1',
  //  radius:              80,
  //  value:               $scope.barData[0][2],
  //  maxValue:            100,
  //  width:               10,
  //  text:                function(value){return value + '%';},
  //  colors:              $scope.colors,
  //  duration:            1000,
  //  wrpClass:            'circles-wrp',
  //  textClass:           'circles-text',
  //  valueStrokeClass:    'circles-valueStroke',
  //  maxValueStrokeClass: 'circles-maxValueStroke',
  //  styleWrapper:        true,
  //  styleText:           true
  // });


  $scope.hblabels= ['You','Lorem','Ipsum','dolo', 'sit', 'amet'];
  $scope.hbseries = ['Positive', 'Negative'];

  $scope.hbdata = [];
  $scope.hbdata[0] = [];
  $scope.hbdata[1] = [];
 }

 function execute() {
  $scope.pieData[0] = (Math.random() * 100).toFixed(0);
  $scope.pieData[1] = 100 - $scope.pieData[0];

  $scope.pieData2[0] = (Math.random() * 100).toFixed(0);
  $scope.pieData2[1] = (Math.random() * 100).toFixed(0);
  $scope.pieData2[2] = (Math.random() * 100).toFixed(0);

  // for (var j=0; j<2; j++) {
  //  for (var k=0; k<3; k++) {
  //   $scope.barData[j][k] = (Math.random() * 100).toFixed(0);
  //  }
  // }

  var actions = {
   'tweets': {
    'method': 'GET',
    'params': { 'verb': 'tweets' }
   },
   'mytweets': {
    'method': 'GET',
    'params': { 'verb': 'mytweets' }
   },
   'mymentions': {
    'method': 'GET',
    'params': { 'verb': 'mymentions' }
   }
  };

  var query = $resource(self.url,self.paramDefaults,actions,self.options);

  query.mymentions(function(response) {
   $scope.mymentions = response;
  });

  query.tweets(function(response) {
   $scope.tweets = response;
   query.mytweets(function(response) {
    $scope.mytweets = {
     hits: {
      total: (Math.random() * 10000).toFixed(0)
     }
    };

    $scope.barData[0][0] = (Math.random() * 5000).toFixed(0);
    $scope.barData[1][0] = (Math.random() * 5000).toFixed(0);

    $scope.barData[0][1] = (Math.random() * 5000).toFixed(0);
    $scope.barData[1][1] = (Math.random() * 5000).toFixed(0);

    $scope.barData[0][2] = $scope.tweets.hits.total;
    $scope.barData[1][2] = $scope.mytweets.hits.total;

    $scope.total = +$scope.tweets.hits.total + +$scope.mytweets.hits.total;

    $scope.myCircle = Circles.create({
     id:                  'circles-1',
     radius:              80,
     value:               ($scope.mytweets.hits.total / $scope.total * 100).toFixed(0),
     maxValue:            100,
     width:               10,
     text:                function(value){return value + '%';},
     colors:              $scope.colors,
     duration:            1000,
     wrpClass:            'circles-wrp',
     textClass:           'circles-text',
     valueStrokeClass:    'circles-valueStroke',
     maxValueStrokeClass: 'circles-maxValueStroke',
     styleWrapper:        true,
     styleText:           true
    });


   });


  });

  for (var i = 0; i< 100; i++) {
   if(i == 0) {
    $scope.bubbleColors[0] = colors.blue;
   } else {
    $scope.bubbleColors[i] = colors.gray;
   }
   $scope.bubbleData[0][i] = {
    x: (Math.random() * 100).toFixed(0),
    y: (Math.random() * 100).toFixed(0),
    r: (Math.random() * 10).toFixed(0)
   }
  }

  for (var x = 0; x < 2; x++) {
   for (var y=0; y < $scope.hblabels.length; y++) {
    $scope.hbdata[x][y] = (Math.random() * 100).toFixed(0);
   }
  }


 }
 init();
 execute();

 $interval(function () {
  execute();
 }, 5000);

}
angular
.module('vdb')
.controller('demomiddleCtrl',demomiddleCtrl);
