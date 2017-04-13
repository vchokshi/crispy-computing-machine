(function() {
 //'use strict';

 angular
 .module('vdb-search')
 .factory('search', search);

 search.$inject = ['$rootScope','$localStorage','user'];

 function search($rootScope,$localStorage,user) {

  const self = this;

  self.user = user;

  self.searchParams = {
   'index' : function() {
     return user.getMyIndex();
    },
   'size' : 0,
   'from': "now-28800",
   'to': "now",
   'interval': 240
  };

  self.refresh = {
   key:'30',
   value:'Every 30s',
   options: {
    '0':'Off',
    // '5': 'Every 5s',
    '30':'Every 30s',
    '60':'Every 1m',
    '300':'Every 5m',
    '1800':'Every 30m',
    '3600':'Every 1h',
    '7200':'Every 2h'
   }
  };

  self.timeWindow = {
   key: '28800',
   value: 'Last 8h',
   options: {
    300:'Last 5m',
    14400:'Last 4h',
    28800:'Last 8h',
    86400:'Last 24h',
    172800:'Last 2d',
    604800:'Last 7d',
   }
  };

  var service = {
   getSearchParams: getSearchParams,
   getRefresh:getRefresh,
   getRefreshKey: getRefreshKey,
   getTimeWindow:getTimeWindow,
   setTimeWindow: setTimeWindow,
   options: {"cancellable": true}
  };

  return service;

  function getSearchParams(callback) {
   self.user.getMyIndex(function(response) {
    self.searchParams.index = response;
    callback (self.searchParams);
   });

  }

  function setTimeWindow(start, end, callback) {
   self.searchParams.to = start;
   self.searchParams.from = "now-" + end;
   self.searchParams.interval = end / 120;
   self.timeWindow.key = end + "s";
   self.timeWindow.value = self.timeWindow.options[end];
   $rootScope.$broadcast('reset');
   callback(true);
  }

  function getRefresh(callback) {
   callback(self.refresh);
  }

  function getRefreshKey() {
   return self.refresh.key * 1000;
  }

  function getTimeWindow(callback) {
   callback(self.timeWindow);
  }
 }

})();
