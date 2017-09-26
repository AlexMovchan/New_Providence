angular
	.module('app')
	.directive("sectionContent", function() {
	    return {
		    restrict : "E",
	        templateUrl: 'app/section/section.html',
	    };
	});