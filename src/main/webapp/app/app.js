var app = angular.module('mainApp', ['ngRoute', 'rootController', 'searchMainController', 'searchDetailController']);
app.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/main', {
		templateUrl : "app/searchMain/searchMain.html",
		controller : 'searchMainController'
	}).
	when('/detail', {
		templateUrl : "app/searchDetail/searchDetail.html",
		controller : 'searchDetailController'
	}).
	otherwise({
		redirectTo : ''
	});
}]);
