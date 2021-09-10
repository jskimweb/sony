window.onload = function () {
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

	$('.sw-latest .swiper-wrapper').hover(function () {
		$('.sw-latest__prev').stop().fadeIn(300);
		$('.sw-latest__next').stop().fadeIn(300);
	}, function () {
		$('.sw-latest__prev').stop().fadeOut(300);
		$('.sw-latest__next').stop().fadeOut(300);
	});

	// LATEST NEWS slide
	new Swiper('.sw-news', {
		slidesPerView: 3,
		spaceBetween: 55,
		allowTouchMove: false,
	});

	// Add-on show/hide
	addon_top = $('.addon-top');
	addon_icon = addon_top.find('i');
	addon_main = $('.addon-main');

	addon_top.click(function () {
		addon_main.slideToggle();
		addon_icon.toggleClass('icon-down-micro');
	});

	// sns-box show/hide
	$('.footer__sns--y').mouseenter(function () {
		var cont = $(this).attr('sns-data');

		$(cont).show();
		$('.sns-box').show();
	})
	$('.footer__sns--y').mouseleave(function () {
		$('.sns-box-cont').hide();
		$('.sns-box').hide();
	})

	$('.footer__sns--f').mouseenter(function () {
		var cont = $(this).attr('sns-data');
		$(cont).show();
		$('.sns-box').show();
	})
	$('.footer__sns--f').mouseleave(function () {
		$('.sns-box-cont').hide();
		$('.sns-box').hide();
	})

	$('.footer__sns--i').mouseenter(function () {
		var cont = $(this).attr('sns-data');
		$(cont).show();
		$('.sns-box').show();
	})
	$('.footer__sns--i').mouseleave(function () {
		$('.sns-box-cont').hide();
		$('.sns-box').hide();
	})

	// sns-box close
	$('.footer__sns--y').find('.icon-cancel').click(function () {
		$('.footer__sns--y').find('.sns-box').stop().fadeOut(200);
	});
	$('.footer__sns--f').find('.icon-cancel').click(function () {
		$('.footer__sns--f').find('.sns-box').stop().fadeOut(200);
	});
	$('.footer__sns--i').find('.icon-cancel').click(function () {
		$('.footer__sns--i').find('.sns-box').stop().fadeOut(200);
	});
}