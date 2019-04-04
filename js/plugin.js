/* ======================================
//					owl carousel
// ======================================*/
$(".owl-carousel").owlCarousel({
	loop: true,
	nav: true,
	margin: 1,
	dots: false,
	autoplay: true,
	responsive: {
		0: {
			items: 1
		},
		481: {
			items: 2
		},
		790: {
			items: 3
		},
		1000: {
			items: 4
		},
		1500: {
			items: 5
		}
	}

});