function sectionCtrl($rootScope) {
	let vm = this;

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    responsiveClass:true,
	    loop: true,
	    nav: false,
	    items: 20,
	    autoplay: true,
	    autoplayTimeout: 3000
	})   

}




angular
	.module('app')
	.controller('sectionCtrl', sectionCtrl);