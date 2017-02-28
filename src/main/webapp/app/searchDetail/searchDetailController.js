var app = angular.module('searchDetailController', ['EsConnector'])

app.controller('searchDetailController', function($scope, es, shareObject, $location) {
	
	$scope.init = function(){
		$scope.item = shareObject.itemDetail;
    }
	
	$scope.back = function(){
		$location.path( "/main" );
	}

});