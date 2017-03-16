angular.module('userProfiles').controller('profileCtrl', function($scope, friendService) {
  $scope.getSessionUser = function() {
    friendService.getSessionUser().then(function(response) {
      console.log('profileCtrl [getSessionUser]', response);
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

  $scope.CreateProfile = function(user) {

  }
})
