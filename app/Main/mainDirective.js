angular
	.module('app')
	.directive("mainContent", function() {
	    return {
		    restrict : "E",
	        templateUrl: 'app/Main/main.html',
	    };
	});