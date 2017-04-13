
(function() {
 //'use-strict';

 angular
 .module('vdb-auth')
 .factory('user', user);

 user.$inject = [ '$localStorage', '$rootScope', '$resource', 'token', 'indices', 'services'];

 function user( $localStorage, $rootScope, $resource, token, indices, services) {

   'ngInject';

   const s = this;

   s.token = token;
   s.indices = indices;
   s.services = services;

   s.url = '/api/user/:verb';

    s.actions = {
    'login': {
     'method': 'POST',
     'params': {'verb' : 'login'}
    },
    'register': {
     'method': 'POST',
     'params': {'verb' : 'register'}
    },
    'user': {
     'method': 'POST',
     'params': {'verb' : 'user'}
    },
    'abacs': {
     'method': 'POST',
     'params': {'verb' : 'abacs'}
    }
   };

   s.query = $resource(s.url,s.paramDefaults || {} ,s. actions,s.options || {});

   var service = {

    login: login,
    register: register,
    get: get,

    //helper functiuons
    // setToken: setToken, //uses s.token
    // getToken: getToken,
    checkAuth: checkAuth,

    getPerms: getPerms, //uses s.abacs

    setMyService:setMyService, //uses s.services
    getMyService:getMyService,

    setMyServices: setMyServices,  //uses s.services
    getMyServices: getMyServices,

    setMyIndices: setMyIndices, //uses s.indices
    getMyIndices:getMyIndices,
    getMyIndex: getMyIndex, //uses s.indices
    setMyIndex: setMyIndex,

    logout:logout
   };

   return service;

   function login(postData,callback) {

    s.query.login(postData,function(response) {
     if(response.authenticated && response.token) {
      s.token.set(response.token, function(token) {
       callback(token);
      });
     }
     callback(false);
    });
   }

   function register(postData,callback) {
    s.query.register(postData,function(response) {
    });
   }

   function getPerms(callback) {
    var response = {};
    s.token.get(function(t) {
     if(t) {
      s.query.abacs(function(r) {
       s.services.setAll(r.abacs,function(s) {
        response.services = s;
       });
       s.indices.setAll(r.abacs, function(i) {
        response.indices = i;
       })
       callback(response);
      });
     }
    });
   }

   function get(callback) {
    s.token.get(function(t) {
     if(t) {
      s.query.user(function(r) {
       callback(r);
      });
     }
    });
   }

   // function setToken(token, callback) {
   //  s.token.set(token, function(response) {
   //   callback(response);
   //  });
   // }

   // function getToken(callback) {
   //  s.token.get(function(response) {
   //   callback(response);
   //  });
   // }

   function checkAuth() {
   }

   // function getMyId(callback) {
   //  s.id.getMyId(function(response) {
   //   callback(response);
   //  });
   // }

   function setMyIndices(abacs, callback) {
    s.indices.setAll(abacs, function(response) {
     callback(response);
    });
   }

   function getMyIndices(callback) {
    s.indices.getAll(function(response) {
     callback(response);
    });
   }

   function setMyIndex(index) {
    s.indices.set(index);
   }

   function getMyIndex(callback) {
    s.indices.get(function(response) {
     callback(response);
    });
   }

   function setMyService(index, callback) {
    s.services.set(index, function(response) {
     callback(response);
    });
   }

   function getMyService(callback) {
    s.services.get(function(r) {
     callback(r);
    });
   }

   function setMyServices(abac, callback) {
    s.services.setAll(abac, function(response) {
     callback(response);
    });
   }

   function getMyServices(callback) {
    s.services.getAll(function(response) {
     callback(response);
    });
   }

   function logout(callback) {
    $rootScope.$broadcast('logout');
    services.clear();
    indices.clear();
    token.clear();
    callback(true);
   }
  }
 })();
