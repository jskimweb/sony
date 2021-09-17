window.onload = function () {
	// elec show & hide
	const elec = $('.elec');

	function hideElec() {
		elec.stop().slideUp(300);
	}

	$('.elec-btn').hover(function () {
		elec.stop().slideDown(300);
		clearTimeout(elec_timer);
	}, function () {
		elec_timer = setTimeout(hideElec, 50);
	});

	elec.hover(function () {
		clearTimeout(elec_timer);
	}, function () {
		elec_timer = setTimeout(hideElec, 50);
	});

	// srch
	const srch = $('.srch');
	const srchBtn = $('.srch-btn');
	const srchInput = $('#srch-input');
	const srchFormClr = $('.srch-form__clear');
	const srchArrow = $('.srch-arrow');

	srch.attr('state', 'close');
	srchBtn.click(function (event) {
		event.stopPropagation();
		if (srch.attr('state') == 'close') {
			srchArrow.show();
			srch.stop().slideDown(300);
			srch.attr('state', 'open');
			$(this).css('background', '#5d58f5');
		} else {
			srchArrow.fadeOut(100);
			srch.stop().fadeOut(100);
			srch.attr('state', 'close');
			$(this).removeAttr('style');
		}
	});

	srch.click(function (event) {
		event.stopPropagation();
	});

	$('body').click(function () {
		srchArrow.stop().fadeOut(100);
		srch.stop().fadeOut(100);
		srch.attr('state', 'close');
		srchBtn.removeAttr('style');
	});

	srchInput.keyup(function () {
		if ($(this).val() == '') srchFormClr.hide();
		else srchFormClr.show();
	});

	srchFormClr.click(function () {
		srchInput.val('');
		$(this).hide();
	});

	// site
	const site = $('.site');
	const siteBtn = $('.site-btn');
	const openSite = 'site--open';
	const closeSite = $('.site__close');

	siteBtn.click(function () {
		site.toggleClass(openSite);
	});

	closeSite.click(function () {
		site.removeClass(openSite);
	})

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

	// addon show & hide
	addon_top = $('.addon-top');
	addon_icon = addon_top.find('i');
	addon_main = $('.addon-main');

	addon_top.click(function () {
		addon_main.slideToggle();
		addon_icon.toggleClass('icon-down-micro');
	});

	// sns-box show & hide
	const snsBox = $('.sns-box');
	const snsBoxCont = $('.sns-box-cont');
	const snsBoxConts = [$('.sns-box-cont--y'), $('.sns-box-cont--f'), $('.sns-box-cont--i')];
	const snsBtns = [$('.footer__sns--y'), $('.footer__sns--f'), $('.footer__sns--i')];
	const pos = [18, 50, 85];

	$.each(snsBtns, function (index) {
		snsBtns[index].hover(function () {
			snsBox.css('left', pos[index] + '%');
			snsBox.show();
			snsBoxConts[index].show();
		}, function () {
			snsBoxCont.hide();
			snsBox.hide();
		});
	});

	// sns-box close
	youtubeBtn.find('.icon-cancel').click(function () {
		$(this).find('.sns-box').stop().fadeOut(200);
	});
	facebookBtn.find('.icon-cancel').click(function () {
		$(this).find('.sns-box').stop().fadeOut(200);
	});
	instaBtn.find('.icon-cancel').click(function () {
		$(this).find('.sns-box').stop().fadeOut(200);
	});

	// go-top
	const winScrTop = $(window).scrollTop();

	$(window).scroll(function () {
		if (winScrTop >= 400) {
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
}