angular.module('userProfiles')
.controller('friendsCtrl', function( $scope, friendService, $location ) {
		$scope.getSessionUser = function() {
			friendService.getSessionUser().then(function(response) {
				console.log('mainCtrl [getSessionUser]', response);
				if(response.userFound) {
					$scope.currentUser = response.user;

					friendService.getProfile($scope.currentUser.name).then(function(response) {
	          $scope.currentUser.pic = response.pic;
	          $scope.currentUser.status = response.status;
	        });

				} else {
					$location.path('/home');
				}
			})
		};

		$scope.getFriends = function() {
			friendService.getFriends($scope.currentUser).then(function(response) {
				console.log('mainCtrl [getFriends]', response);
				$scope.friends = response.friends;
			})
		};

		$scope.init = function() {
			$scope.getSessionUser();
			$scope.getFriends();
		}

		$scope.init();
});
