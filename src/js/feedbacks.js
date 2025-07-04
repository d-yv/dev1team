import Swiper from 'swiper';

import {
    Navigation,
    Keyboard
}

from 'swiper/modules';


Swiper.use([Navigation, Keyboard]);


function updateButtonsState(swiperInstance) {
    const prevBtn=document.querySelector('.swiper-button-prev');
    const nextBtn=document.querySelector('.swiper-button-next');

    if (swiperInstance.isBeginning) {
        prevBtn.disabled=true;
        prevBtn.classList.add('disabled');
    }

    else {
        prevBtn.disabled=false;
        prevBtn.classList.remove('disabled');
    }

    if (swiperInstance.isEnd) {
        nextBtn.disabled=true;
        nextBtn.classList.add('disabled');
    }

    else {
        nextBtn.disabled=false;
        nextBtn.classList.remove('disabled');
    }
}

const swiper=new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: false,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }

        ,

        keyboard: {
            enabled: true,
            onlyInViewport: true,
        }

        ,

        breakpoints: {
            768: {
                slidesPerView: 2,
            }

            ,
            1440: {
                slidesPerView: 3,
            }

            ,
        }

        ,

        on: {
            init(swiper) {
                updateButtonsState(swiper);
            }

            ,
            slideChange(swiper) {
                updateButtonsState(swiper);
            }

            ,
        }

        ,
    }

);