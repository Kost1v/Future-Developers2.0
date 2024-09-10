import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.projects-swiper', {
  modules: [Navigation, Pagination, Keyboard],
  direction: 'horizontal',
  loop: false, 
  keyboard: {
    enabled: true, 
    onlyInViewport: true, 
  },
  navigation: {
    prevEl: '.button-prev1',
    nextEl: '.button-next1',
    disabledClass: 'swiper-button-disabled', 
  },
  on: {
    slideChange: function () {
    
      if (swiper.isBeginning) {
        document.querySelector('.button-prev1').setAttribute('disabled', true);
      } else {
        document.querySelector('.button-prev1').removeAttribute('disabled');
      }
    
      if (swiper.isEnd) {
        document.querySelector('.button-next1').setAttribute('disabled', true);
      } else {
        document.querySelector('.button-next1').removeAttribute('disabled');
      }
    },
  },
});