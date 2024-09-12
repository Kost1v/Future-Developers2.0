import Accordion from 'accordion-js';

const accordion = new Accordion('.about-me-list', {
   duration: 300,
  showMultiple: true,
  openOnInit: [0],
});

import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';

const swiperAbout = new Swiper('.swiper-container-about', {
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
const sectionAbout = document.querySelector('.section-about');
document.addEventListener("DOMContentLoaded", function () {
  const pictureEl = document.querySelector('.about-picture');
  const sourceEls = document.querySelectorAll('source');
  const imgEl = document.querySelector('.about-photo');
  
  const observerAbout = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
    
        sourceEls.forEach((source) => {
          const srcsetVal = source.getAttribute('data-srcset');
          if (srcsetVal) {
            source.setAttribute('srcset', srcsetVal);
            source.removeAttribute('data-srcset');
          }
        });
        const imgSrc = imgEl.getAttribute('data-src');
        if (imgSrc) {
          imgEl.setAttribute('src', imgSrc);
          imgEl.removeAttribute('data-src');
        }

            observer.unobserve(pictureEl);
      }
    });
  });

  observerAbout.observe(pictureEl);
});

