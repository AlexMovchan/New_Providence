angular.module('app', []);
function footerCtrl($rootScope) {}

angular.module('app').controller('footerCtrl', footerCtrl);
angular.module('app').directive("footerContent", function () {
	return {
		restrict: "E",
		templateUrl: 'app/footer/footer.html'
	};
});
function sectionCtrl($rootScope, $window) {
	let vm = this;

	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 10,
		responsiveClass: true,
		loop: true,
		nav: false,
		items: 20,
		autoplay: true,
		autoplayTimeout: 3000,
		responsive: {
			// breakpoint from 0 up
			320: {
				items: 5
			},
			// breakpoint from 480 up
			520: {
				items: 10
			},
			// breakpoint from 768 up
			768: {
				items: 15
			}
		}
	});

	window.onscroll = function () {

		let buttonScrollPosition = document.documentElement.scrollTop + $('.head-content')[0].offsetHeight;

		if (buttonScrollPosition > $('#main')[0].offsetTop) {
			$('.figure_container').css('opacity', '1');
		}
		if (buttonScrollPosition > $('#notification')[0].offsetTop) {
			$('.update_notification').css('opacity', '1');
		}
		if (buttonScrollPosition > $('#get_touch')[0].offsetTop) {
			$('.get_touch').css('opacity', '1');
		}
	};
}

angular.module('app').controller('sectionCtrl', sectionCtrl);
angular.module('app').directive("sectionContent", function () {
	return {
		restrict: "E",
		templateUrl: 'app/section/section.html'
	};
});
function headerCtrl($rootScope) {}

angular.module('app').controller('headerCtrl', headerCtrl);
angular.module('app').directive("headerContent", function () {
	return {
		restrict: "E",
		templateUrl: 'app/header/header.html'
	};
});