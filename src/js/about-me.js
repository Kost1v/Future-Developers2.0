import Accordion from 'accordion-js';

const accordion = new Accordion('.about-me-list', {
   duration: 300,
  showMultiple: true,
  openOnInit: [0],
});

import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';

const swiper = new Swiper('.swiper-container-about', {
  modules: [Navigation, Keyboard],
  loop: true,
  slidesPerView: 2,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next-about',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  touchEventsTarget: 'container',
  allowSlidePrev: false,
});
