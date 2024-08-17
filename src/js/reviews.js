import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';

export const swiper = new Swiper('.swiper', {
  modules: [Navigation, Keyboard],
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

  keyboard: {
    enabled: true,
  },

  navigation: {
    nextEl: '.reviews-btn-next',
    prevEl: '.reviews-btn-prev',
  },
});
