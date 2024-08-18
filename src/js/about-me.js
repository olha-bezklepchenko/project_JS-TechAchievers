import Swiper from 'swiper';
import {
  Navigation,
    Keyboard,
} from 'swiper/modules';

const swiper = new Swiper('.swiper', {
    modules: [Navigation, Keyboard],
    direction: 'horizontal',
    loop: true,
    hashNavigation: true,
    keyboard: {
          enabled: true,
          onlyInViewport: false,
    },
    ousewheel: {
        forceToAxis: true,
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