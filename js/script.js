window.onload = function () {
	// go-top
	$(window).scroll(function () {
		var sT = $(window).scrollTop();
		if (sT >= 400) {
			$('.go-top').addClass('go-top--show');
		} else {
			$('.go-top').removeClass('go-top--show');
		}
	})
	$('.go-top').click(function () {
		$('html,body').animate({
			scrollTop: 0
		});
	});

	// elec show & hide
	function elecHide() {
		$('.elec').stop().slideUp(300);
	}

	$('.elec-btn').mouseenter(function () {
		$('.elec').stop().slideDown(300);
		clearTimeout(elec_timer);
	});

	$('.elec-btn').mouseleave(function () {
		elec_timer = setTimeout(elecHide, 50);
	});

	$('.elec').mouseenter(function() {
		clearTimeout(elec_timer);
	})

	$('.elec').mouseleave(function () {
		elec_timer = setTimeout(elecHide, 50);
	});

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

	// THE LATEST navigation show & hide
	$('.sw-latest').mouseenter(function () {
		$('.sw-latest__prev').addClass('sw-latest__prev--show');
		$('.sw-latest__next').addClass('sw-latest__next--show');
	});

	$('.sw-latest').mouseleave(function () {
		$('.sw-latest__prev').removeClass('sw-latest__prev--show');
		$('.sw-latest__next').removeClass('sw-latest__next--show');
	});

	// LATEST NEWS slide
	new Swiper('.sw-news', {
		slidesPerView: 3,
		spaceBetween: 55,
		allowTouchMove: false,
	});

	// Add-on show & hide
	addon_top = $('.addon-top');
	addon_icon = addon_top.find('i');
	addon_main = $('.addon-main');

	addon_top.click(function () {
		addon_main.slideToggle();
		addon_icon.toggleClass('icon-down-micro');
	});

	// sns-box show & hide
	$('.footer__sns--y').hover(function () {
		var cont = $(this).attr('sns-data');
		$(cont).show();
		$('.sns-box').show();
	}, function () {
		$('.sns-box-cont').hide();
		$('.sns-box').hide();
	});

	$('.footer__sns--f').hover(function () {
		var cont = $(this).attr('sns-data');
		$(cont).show();
		$('.sns-box').show();
	}, function () {
		$('.sns-box-cont').hide();
		$('.sns-box').hide();
	});

	$('.footer__sns--i').hover(function () {
		var cont = $(this).attr('sns-data');
		$(cont).show();
		$('.sns-box').show();
	}, function () {
		$('.sns-box-cont').hide();
		$('.sns-box').hide();
	});

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