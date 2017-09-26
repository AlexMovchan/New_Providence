angular
	.module('app')
	.directive("footerContent", function() {
	    return {
		    restrict : "E",
	        templateUrl: 'app/footer/footer.html',
	    };
	});