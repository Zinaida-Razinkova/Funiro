const reviewsSwiper = document.querySelector('.slider-main__body');
const roomsSwiper = document.querySelector('.slider-rooms__body');
const tipsSwiper = document.querySelector('.slider-tips__body');

if (reviewsSwiper) {
  const swiper = new Swiper(reviewsSwiper, {
  // Optional parameters
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 32,
    freeMode: true,
    watchOverflow: true,
    speed: 800,
    loop: true,
    loopAdditionalSlides: 5,
    preloadImages: false,
    parallax: true,
    // Doots
    pagination: {
      el: '.controls-slider__dotts',
      clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.slider-main .slider-arrow__next',
    prevEl: '.slider-main .slider-arrow__prew',
    },
  breakpoints: {
			// when window width is >= 992px
			992: {
				slidesPerView: 1.3,
			}
		}
});
}

if (roomsSwiper) {
  const swiper = new Swiper(roomsSwiper, {
  // Optional parameters
    observer: true,
    observeParents: true,
    slidesPerView: 'auto',
    spaceBetween: 24,
    speed: 800,
    loop: true,
    loopAdditionalSlides: 5,
    preloadImages: false,
    parallax: true,
    // Doots
    pagination: {
      el: '.slider-rooms__dotts',
      clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.slider-rooms .slider-arrow__next',
    prevEl: '.slider-rooms .slider-arrow__prew',
  },
});
}

if (tipsSwiper) {
  const swiper = new Swiper(tipsSwiper, {
  // Optional parameters
    observer: true,
    observeParents: true,
    slidesPerView: 3,
    spaceBetween: 32,
    speed: 800,
    loop: true,
    watchOverflow: true,
    // Doots
    pagination: {
      el: '.slider-tips__dotts',
      clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.slider-tips .slider-tips__arrow_next',
    prevEl: '.slider-tips .slider-tips__arrow_prew',
    },
  
  breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1.1,
				spaceBetween: 15
			},
			// when window width is >= 768px
			768: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			// when window width is >= 992px
			992: {
				slidesPerView: 3,
				spaceBetween: 32
			}
		}
});
}