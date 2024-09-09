import Accordion from 'accordion-js';

const accordion = new Accordion('.about-me-list', {
   duration: 300,
  showMultiple: false,
  openOnInit: [0],
});

import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';

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
    nextEl: '.swiper-button-next',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  touchEventsTarget: 'container',
  allowSlidePrev: false,
});
