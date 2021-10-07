window.onload = function () {
	// 모달창 닫기
	const modal = $('.modal');
	const modalBox = $('.modal-box');
	const modalClose = $('.modal__close');

	modalClose.click(function () {
		modal.stop().fadeOut();
	});

	modal.click(function () {
		$(this).stop().fadeOut();
	});

	modalBox.click(function (event) {
		event.stopPropagation();
	});

	// 전자제품 보이기/숨기기
	const elec = $('.elec');
	const elecBtn = $('.elec-btn');

	function hideElec() {
		elec.stop().slideUp(300);
	}

	elecBtn.hover(function () {
		elec.stop().slideDown(300);
		clearTimeout(elecTimer);
	}, function () {
		elecTimer = setTimeout(hideElec, 50);
	});

	elec.hover(function () {
		clearTimeout(elecTimer);
	}, function () {
		elecTimer = setTimeout(hideElec, 50);
	});

	// 검색창 보이기/숨기기
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

	// 검색창 지우기버튼 활성화
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

	// THE LATEST 슬라이드
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

	// THE LATEST 네비게이션 보이기/숨기기
	const swLatest = $('.sw-latest');
	const swLatestPrev = $('.sw-latest__prev');
	const swLatestNext = $('.sw-latest__next');
	const swLatestPrevShow = 'sw-latest__prev--show';
	const swLatestNextShow = 'sw-latest__next--show';

	swLatest.hover(function () {
		swLatestPrev.addClass(swLatestPrevShow);
		swLatestNext.addClass(swLatestNextShow);
	}, function () {
		swLatestPrev.removeClass(swLatestPrevShow);
		swLatestNext.removeClass(swLatestNextShow);
	});

	// LATEST NEWS 슬라이드
	new Swiper('.sw-news', {
		slidesPerView: 3,
		spaceBetween: 55,
		allowTouchMove: false,
	});

	// WHAT'S HOT 하트 활성화/비활성화
	const iconHeart = $('.hot-box-img .icon-heart');
	const iconHeartOn = 'icon-heart--on';

	iconHeart.click(function (event) {
		event.preventDefault();
		event.stopPropagation();
		$(this).toggleClass(iconHeartOn);
	});

	// addon 보이기/숨기기
	const addonTop = $('.addon-top');
	const addonMain = $('.addon-main');
	const addonIcon = $('.addon-top i');

	addonTop.click(function () {
		addonMain.slideToggle();
		addonIcon.toggleClass('icon-down-micro');
	});

	// SNS
	const footerSns = [$('.footer__sns--y'), $('.footer__sns--f'), $('.footer__sns--i')];
	const snsBoxClose = $('.sns-box__close');

	$.each(footerSns, function (index) {
		// SNS 말풍선 보이기/숨기기
		footerSns[index].hover(function () {
			$(this).find('.sns-box').stop().fadeIn(300);
		}, function () {
			$(this).find('.sns-box').stop().fadeOut(300);
		});

		// SNS 말풍선 닫기
		snsBoxClose.click(function () {
			footerSns[index].find('.sns-box').stop().fadeOut(200);
		});
	});

	// Go-top
	const winScrTop = $(window).scrollTop();
	const goTop = $('.go-top');
	const goTopShow = 'go-top--show';

	$(window).scroll(function () {
		if (winScrTop >= 400) {
			goTop.addClass(goTopShow);
		} else {
			goTop.removeClass(goTopShow);
		}
	});

	goTop.click(function () {
		$('html, body').animate({
			scrollTop: 0
		});
	});
}