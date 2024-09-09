import axios from 'axios';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

class ReviewAPI {
  async getReviews() {
    try {
      const res = await axios.get('/reviews');
      return res.data;
    } catch (error) {
      throw new Error('Error fetching reviews');
    }
  }
}

const reviewsList = document.querySelector('.js-reviews-list');
const buttonPrev = document.querySelector('.button-prev');
const buttonNext = document.querySelector('.button-next');
const swiperContainer = document.querySelector('.review-swiper-container');

const createLoader = () => {
  const loaderContainer = document.createElement('div');
  loaderContainer.classList.add(
    'loader-container',
    'js-loader-container',
    'hidden'
  );

  const loader = document.createElement('span');
  loader.classList.add('loader', 'js-loader');

  loaderContainer.appendChild(loader);
  swiperContainer.appendChild(loaderContainer);

  buttonNext.disabled = true;
  buttonPrev.disabled = true;
  const swiperButtons = document.querySelectorAll('.swiper-button-lock');
  swiperButtons.forEach(button => {
    button.style.display = 'block';
  });

  return loaderContainer;
};

const loaderContainer = createLoader();

const toggleLoader = show => {
  if (show) {
    loaderContainer.classList.remove('hidden');
  } else {
    loaderContainer.classList.add('hidden');
  }
};

function createMarkup(arr) {
  const markup = arr
    .map(
      ({ _id, author, avatar_url, review }) =>
        `<li class="swiper-slide review-swiper-slide" data-id="${_id}">
          <div class="swiper-card">
            <div class="card-image" style="background: #e0e0e0 url('${avatar_url}') no-repeat center center; background-size: cover;"></div>
            <h3 class="card-title">${author}</h3>
            <p class="card-text">${review}</p>
          </div>
        </li>`
    )
    .join('');

  return reviewsList.insertAdjacentHTML('beforeend', markup);
}

function showErrorMessage() {
  reviewsList.innerHTML = '<div class="err-container"></div>';
  const errorAnimationContainer = document.querySelector('.err-container');
  lottie.loadAnimation({
    container: errorAnimationContainer,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './img/redcat.json',
  });
  buttonNext.disabled = true;
  buttonPrev.disabled = true;
  const swiperButtons = document.querySelectorAll('.swiper-button-lock');
  swiperButtons.forEach(button => {
    button.style.display = 'block';
  });
}

function showError() {
  return iziToast.error({
    icon: false,
    message: 'Failed to load data. Please try again later!',
    backgroundColor: '#ed3b44',
    maxWidth: 400,
    timeout: 2000,
    messageColor: '#fafafb',
    messageSize: '16',
    theme: 'dark',
    progressBarColor: '#b51b1',
    position: 'bottomRight',
  });
}

const swiperReview = new Swiper('.review-swiper', {
  initialSlide: 0,
  speed: 400,
  spaceBetween: 16,
  modules: [Navigation, Pagination],
  preventClicks: true,
  freeMode: false,
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  mousewheel: {
    invert: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  breakpoints: {
    375: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 4,
    },
  },
});

export async function fetchAndDisplayReviews() {
  const reviewAPI = new ReviewAPI();
  toggleLoader(true);
  try {
    const data = await reviewAPI.getReviews();
    if (data && data.length > 0) {
      createMarkup(data);
      toggleLoader(false);
    } else {
      toggleLoader(false);
      showErrorMessage();
      showError();
    }
  } catch (error) {
    toggleLoader(false);
    showErrorMessage();
    showError();
  }
}

fetchAndDisplayReviews();