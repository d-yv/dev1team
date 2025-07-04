
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { openEventModal } from './events-modal.js';

/* -------- дані: усі шляхи лежать всередині об’єкта images -------- */
const eventsData = [
  {
    title: 'Cozy Book Club — “The Midnight Library”',
    type: 'In-store',
    date: 'June 5, 6:30 PM',
    desc: 'Join us for an evening of tea, thoughtful conversation, and shared reflections as we dive into Matt Haig’s bestseller.',
    images: {
      mob1x:   './img/events/mobEvent1.jpg',
      mob2x:   './img/events/mobEvent1@2x.jpg',
      tab1x:   './img/events/tabletEvent1.jpg',
      tab2x:   './img/events/tabletEvent1@2x.jpg',
      desk1x:  './img/events/event1.jpg',
      desk2x:  './img/events/event1@2x.jpg',
    },
  },
  {
    title: 'Book Cover Design Workshop',
    type: 'Online',
    date: 'June 12, 7:00 PM',
    desc: 'A hands-on session for aspiring designers and curious readers. Learn what makes a cover stand out — from concept to print.',
    images: {
      mob1x:   './img/events/mobEvent2.jpg',
      mob2x:   './img/events/mobEvent2@2x.jpg',
      tab1x:   './img/events/tabletEvent2.jpg',
      tab2x:   './img/events/tabletEvent2@2x.jpg',
      desk1x:  './img/events/event2.jpg',
      desk2x:  './img/events/event2@2x.jpg',
    },
  },
  {
    title: 'Children’s Story Hour',
    type: 'In-store',
    date: 'June 18, 11:00 AM',
    desc: 'A magical morning of stories, games, and imagination for our youngest book lovers (ages 4–8).',
    images: {
      mob1x:   './img/events/mobEvent3.jpg',
      mob2x:   './img/events/mobEvent3@2x.jpg',
      tab1x:   './img/events/tabletEvent3.jpg',
      tab2x:   './img/events/tabletEvent3@2x.jpg',
      desk1x:  './img/events/event3.jpg',
      desk2x:  './img/events/event3@2x.jpg',
    },
  },
];

/* -------- розмітка картки -------- */
const createCard = (e) => `
  <li class="swiper-slide event-card">
    <picture>
      <source srcset="${e.images.mob2x} 2x, ${e.images.mob1x} 1x" media="(max-width: 767px)">
      <source srcset="${e.images.tab2x} 2x, ${e.images.tab1x} 1x" media="(min-width: 768px) and (max-width: 1439px)">
      <img class="event-img" src="${e.images.desk1x}" srcset="${e.images.desk2x} 2x" alt="${e.title}">
    </picture>

    <div class="event-text-content">
      <h3 class="event-name">${e.title}</h3>
      <p class="event-meta">${e.type} | ${e.date}</p>
      <p class="event-desc">${e.desc}</p>
    </div>

    <button type="button" class="event-register" data-title="${e.title}">
      Register
      <svg class="event-arrow" width="24" height="24">
        <use href="../img/sprite.svg#chevron-right"></use>
      </svg>
    </button>
  </li>`;

/* -------- рендер -------- */
const wrapper = document.querySelector('.events-swiper .swiper-wrapper');
wrapper.innerHTML = eventsData.map(createCard).join('');

/* -------- Swiper -------- */
new Swiper('.events-swiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: { el: '.swiper-pagination', clickable: true },
  navigation: { nextEl: '.events-btn-next', prevEl: '.events-btn-prev' },
  breakpoints: {
    768:  { slidesPerView: 2, spaceBetween: 24 },
    1440: { slidesPerView: 3, spaceBetween: 24 },
  },
});

/* modal click */
/*
wrapper.addEventListener('click', (evt) => {
  const btn = evt.target.closest('.event-register');
  if (!btn) return;
  openEventModal(btn.dataset.title);
});*/