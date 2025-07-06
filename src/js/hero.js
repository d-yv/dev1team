import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', () => {
  const prevBtn = document.querySelector('.custom-prev');
  const nextBtn = document.querySelector('.custom-next');

  const swiper = new Swiper('.hero-swiper', {
    slidesPerView: 1, // ❗ Один слайд на экране
    loop: false,
    speed: 600,
    navigation: false,
    spaceBetween: 0,
    allowTouchMove: true,
    observer: true,
    observeParents: true,
    resizeObserver: true, // 🔑 если контейнер меняется по размеру
    on: {
      init(swiperInstance) {
        updateNavButtons(swiperInstance);
      },
      slideChange(swiperInstance) {
        updateNavButtons(swiperInstance);
      },
    },
  });

  prevBtn.addEventListener('click', () => {
    if (!prevBtn.disabled) swiper.slidePrev();
  });

  nextBtn.addEventListener('click', () => {
    if (!nextBtn.disabled) swiper.slideNext();
  });

  function updateNavButtons(swiperInstance) {
    prevBtn.disabled = swiperInstance.isBeginning;
    nextBtn.disabled = swiperInstance.isEnd;
  }
});