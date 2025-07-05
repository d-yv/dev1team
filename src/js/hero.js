

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const prevBtn = document.querySelector('.custom-prev');
const nextBtn = document.querySelector('.custom-next');

const swiper = new Swiper('.swiper', {
  loop: false,
  speed: 600,
  navigation: false, // кастомные кнопки
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
