var app = angular.module('searchMainController', ['EsConnector'])

app.controller('searchMainController', function($scope, es, shareObject, $location) {
	
	if(shareObject.searchTerm!=undefined||shareObject.searchTerm!=""){
		$scope.searchTerm=shareObject.searchTerm;
		$scope.hits=shareObject.hits;
	}else{
		$scope.searchTerm="";
	}

	$scope.search = function(){
	    es.search({
	    index: 'terrains',
	    type:'reference',
	    size: 50,
	    body: {
	    "query":
	        {
	            "match": {
	            	_all:$scope.searchTerm
	            }   
	        },
	    }
	       
	    }).then(function (response) {
	    	$scope.hits = response.hits.hits;
	    	shareObject.hits = $scope.hits;
	    	shareObject.searchTerm=$scope.searchTerm;
	    });
	}
	
	$scope.detail = function(id){
		for(var i=0;i<shareObject.hits.length;i++){
			if(shareObject.hits[i]._id == id){
				shareObject.itemDetail = shareObject.hits[i];
				break;
			}
		}
		$location.path( "/detail" );
	}
	

});