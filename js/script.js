window.onload = function() {
	new Swiper('.sw-latest', {
		slidesPerView: "auto",
        spaceBetween: 25,
		// slidesPerGroup: 3,
		on: {
			slideChange: function() {
				changeGroup(this.realIndex);
			}
		}
	});

	function changeGroup(_num) {
        if(_num == 1) {
            sw_latest.slidesPerGroup = 2;
        }
		else {
            sw_latest.slidesPerGroup = 3;
        }
    }
}