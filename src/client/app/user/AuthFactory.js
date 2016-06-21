(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('authFactory', authFactory);

  authFactory.$inject = ['$http', '$q', 'exception', 'logger'];
  /* @ngInject */
  function authFactory($http, $q, exception, logger) {
    var service = {
      login: loginUser,
      logout: logoutUser, 
      checkLoggedIn: checkLoggedIn, 
      getUser: getUser
    };

    return service;

    function loginUser() {
      return $http.post('api/user/login')
      .then(success)
      .catch(fail);
    }

    function logoutUser(){
      return $http.get('/api/logout')
      .then(success)
      .catch(fail);
    }

    function checkLoggedIn() {
      return $http.get('/api/user/authed')
      .then(success)
      .catch(fail);
    }

    function getUser() {
      return $http.get('/api/user')
        .then(success)
        .catch(fail);
    }

    function success(res){
      return res.data; 
    }

    function fail(e){
      console.log(this); 
      return exception.catcher('XHR Failed - AuthUser')(e); 
    }
  }
})();
