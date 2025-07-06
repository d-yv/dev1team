import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', () => {
  const prevBtn = document.querySelector('.custom-prev');
  const nextBtn = document.querySelector('.custom-next');

  const swiper = new Swiper('.hero-swiper', {
    loop: false,
    speed: 600,
    slidesPerView: 1,
    navigation: false,
    on: {
      init: updateNavButtons,
      slideChange: updateNavButtons,
    },
  });

  prevBtn.addEventListener('click', () => swiper.slidePrev());
  nextBtn.addEventListener('click', () => swiper.slideNext());

  function updateNavButtons(swiperInstance) {
    prevBtn.disabled = swiperInstance.isBeginning;
    nextBtn.disabled = swiperInstance.isEnd;
  }
});