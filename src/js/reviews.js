import {
  Navigation,
  Keyboard,
  Mousewheel,
  Swiper,
  axios,
  iziToast,
} from './libraries.js';
import { refs } from './refs.js';

const swiper = new Swiper('.reviews-swiper', {
  modules: [Navigation, Keyboard, Mousewheel],
  direction: 'horizontal',
  watchOverflow: false,
  speed: 700,
  spaceBetween: 16,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 4,
    },
  },

  mousewheel: {
    enabled: true,
    invert: true,
  },

  keyboard: {
    enabled: true,
  },

  navigation: {
    nextEl: '.reviews-btn-next',
    prevEl: '.reviews-btn-prev',
  },
});

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api/reviews';

async function searchReviews() {
  try {
    const response = await axios.get();

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

function renderCards(data) {
  return data
    .map(({ _id, author, avatar_url, review }) => {
      return `
        <li class="swiper-slide reviews-list-item">
          <img
            class="reviews-item-img"
            src="${avatar_url}"
            alt="${author}"
            width="48"
            height="48"
            loading="lazy"
          />
          <h3 class="reviews-item-title section-subtitle">${author}</h3>
          <p class="reviews-item-text section-text">
           ${review}
          </p>
        </li>`;
    })
    .join('');
}
async function loadReviews() {
  try {
    const response = await searchReviews();
    refs.reviewsList.insertAdjacentHTML('beforeend', renderCards(response));
  } catch (error) {
    console.log(error);
    iziToast.error({
      message: 'Sorry, the server is not responding!',
      position: 'topRight',
      backgroundColor: '#ef4040',
      messageColor: 'white',
      messageSize: '16',
      theme: 'dark',
    });

    refs.reviewsList.insertAdjacentHTML(
      'beforeend',
      `<li class="item-message"><p>Not Found</p></li>`
    );
  }
}

loadReviews();
