var app = angular.module('rootController', []);
app.controller('rootController', function($scope, $rootScope, $location){

    $scope.init = function(){
    	$location.path( "/main" );
    }

});