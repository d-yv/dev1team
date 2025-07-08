import Swiper from 'swiper';
import 'swiper/css/bundle';

import {
    Navigation,
    Keyboard,
    Pagination, 
} from 'swiper/modules';

Swiper.use([Navigation, Keyboard, Pagination]);


function updateButtonsState(swiperInstance) {
    const prevBtn = document.querySelector('.feedbacks-button-prev');
    const nextBtn = document.querySelector('.feedbacks-button-next');

    prevBtn.blur();
    nextBtn.blur();

    if (swiperInstance.isBeginning) {
        prevBtn.disabled = true;
        prevBtn.classList.add('disabled');
    } else {
        prevBtn.disabled = false;
        prevBtn.classList.remove('disabled');
    }

    if (swiperInstance.isEnd) {
        nextBtn.disabled = true;
        nextBtn.classList.add('disabled');
    } else {
        nextBtn.disabled = false;
        nextBtn.classList.remove('disabled');
    }
}

const feedbacksSwiper = new Swiper('.feedbacks-swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 24,
    loop: false,

    navigation: {
        nextEl: '.feedbacks-button-next',
        prevEl: '.feedbacks-button-prev',
    },

    pagination: {
        el: '.feedbacks-pagination',
        clickable: false,
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },

    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1440: {
            slidesPerView: 3,
        },
    },

    on: {
        init(swiper) {
            updateButtonsState(swiper);
        },
        slideChange(swiper) {
            updateButtonsState(swiper);
        },
    },
});

document.querySelectorAll('.feedbacks-pagination .swiper-pagination-bullet').forEach(el => {
    el.removeAttribute('role');
    el.removeAttribute('tabindex');
    el.removeAttribute('aria-label');
});