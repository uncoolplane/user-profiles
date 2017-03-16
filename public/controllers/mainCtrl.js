angular.module('userProfiles')
.controller('mainCtrl', function( $scope, friendService, $location ) {

	$scope.login = function( user ) {
		friendService.login(user).then(function( response ) {
			console.log('mainCtrl [login]', response);
			if (response.userFound) {
				$scope.currentUser = response.user;
				$location.path('/friends');
			} else {
				alert('user not found');
			}
		});
	}

});
