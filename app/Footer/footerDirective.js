angular
	.module('app')
	.directive("footerContent", function() {
	    return {
		    restrict : "E",
	        templateUrl: 'app/Footer/footer.html',
	    };
	});