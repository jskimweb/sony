window.onload = function() {
	// THE LATEST slide
	new Swiper('.sw-latest', {
		slidesPerView: "auto",
		slidesPerGroup: 3,
		pagination: {
			el: '.sw-latest__pg',
			clickable: true,
		},
		navigation: {
			prevEl: '.sw-latest__prev',
			nextEl: '.sw-latest__next',
		},
	});

	$('.sw-latest .swiper-wrapper').mouseenter(function () {
		$('.sw-latest__prev').stop().fadeIn(300);
		$('.sw-latest__next').stop().fadeIn(300);
	});
	$('.sw-latest .swiper-wrapper').mouseleave(function () {
		$('.sw-latest__prev').stop().fadeOut(300);
		$('.sw-latest__next').stop().fadeOut(300);
	});

	// LATEST NEWS slide
	new Swiper('.sw-news', {
		slidesPerView: 3,
		spaceBetween: 55,
		allowTouchMove: false,
	})
}