angular.module('userProfiles')
.service('friendService', function( $http ) {

    this.login = function( user ) {
      return $http({
        method: 'POST',
        url: '/api/login',
        data: user
      }).then(function(req) {
        console.log('friendService', req.data);
        return req.data;
      })
    };

    this.getSessionUser = function() {
      return $http({
        method: 'GET',
        url: '/api/login'
      }).then(function(response) {
        console.log('friendService', response.data);
        return response.data;
      })
    };

    this.getProfile = function(name) {
      return $http({
        method: 'GET',
        url: 'api/profile/' + name
      }).then(function(response) {
        console.log('friendService', response.data);
        return response.data;
      })
    };

    this.getFriends = function(user) {
    	return $http({
        method: 'GET',
        url: '/api/friends',
        data: user
      }).then(function(response) {
        console.log('friendService', response.data);
        return response.data;
      })
    };

    this.getProfiles = function() {
      return $http({
        method: 'GET',
        url: '/api/profiles'
      }).then(function(response) {
        console.log('friendService', response.data);
      })
    }

});
