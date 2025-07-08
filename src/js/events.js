
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { openEventModal } from './events-modal.js';

const eventWrapper = document.querySelector('.events-swiper .swiper-wrapper');
const prevBtn      = document.querySelector('.events-btn-prev');
const nextBtn      = document.querySelector('.events-btn-next');

/* -------- Swiper -------- */
const eventsSwiper = new Swiper('.events-swiper', {
  slidesPerView: 1,
  spaceBetween: 5,
  keyboard: {enabled: true},
  pagination : { el: '.event-swiper-pagination', clickable: true },
  navigation : { nextEl: nextBtn, prevEl: prevBtn },
  breakpoints: {
    768 : { slidesPerView: 2, spaceBetween: 24 },
    1440: { slidesPerView: 3, spaceBetween: 24 },
  },
});

function updateNav(sw) {
  prevBtn.disabled = sw.isBeginning;
  nextBtn.disabled = sw.isEnd;
}

updateNav(eventsSwiper);                   
eventsSwiper.on('slideChange', () => updateNav(eventsSwiper));

/* -------- modal click -------- */
eventWrapper.addEventListener('click', (evt) => {
  const btn = evt.target.closest('.event-register');
  if (!btn) return;    
  openEventModal(btn.dataset.title);
});
