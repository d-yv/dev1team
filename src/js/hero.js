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

  // Универсальная функция для клика с авто-blur
  function setupButtonWithAutoBlur(button, callback) {
    if (!button) return;
    button.addEventListener('click', (e) => {
      callback(e);      // вызываем действие (например, slideNext)
      button.blur();    // снимаем фокус после клика
    });
  }

  setupButtonWithAutoBlur(prevBtn, () => swiper.slidePrev());
  setupButtonWithAutoBlur(nextBtn, () => swiper.slideNext());

  function updateNavButtons(swiperInstance) {
    prevBtn.disabled = swiperInstance.isBeginning;
    nextBtn.disabled = swiperInstance.isEnd;

    prevBtn.classList.remove('active');
    nextBtn.classList.remove('active');

    if (swiperInstance.isBeginning) {
      prevBtn.classList.add('active');
    } else if (swiperInstance.isEnd) {
      nextBtn.classList.add('active');
    }
  }
});