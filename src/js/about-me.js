import Swiper from 'swiper';
import {
  Navigation,
  Keyboard,
} from 'swiper/modules';

const swiper = new Swiper('.skills-container', {
    modules: [Navigation, Keyboard],
    direction: 'horizontal',
    loop: true,
    keyboard: {
          enabled: true,
          onlyInViewport: false,
    },
    //  slideActiveClass,
  watchOverflow: false,
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },

  navigation: {
    nextEl: '.about-btn-next',
  },
});