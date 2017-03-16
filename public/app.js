angular.module('userProfiles', ['ui.router'])

.config(function( $stateProvider, $urlRouterProvider ) {

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: './views/home.html',
		controller: 'mainCtrl'
	})
	.state('friends', {
		url: '/friends',
		templateUrl: './views/friends.html',
		controller: 'friendsCtrl'
	})
	.state('myprofile', {
		url: '/myprofile',
		templateUrl : './views/profile.html',
		controller: 'profileCtrl'
	});

	$urlRouterProvider.otherwise('/');

});
