angular
	.module('app')
	.directive("headerContent", function() {
	    return {
		    restrict : "E",
	        templateUrl: 'app/header/header.html',
	    };
	});