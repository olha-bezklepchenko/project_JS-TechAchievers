import { Swiper, Navigation, Keyboard, Accordion } from './libraries.js';

const swiper = new Swiper('.swiper', {
    modules: [Navigation, Keyboard],
    direction: 'horizontal',
    loop: true,
    // hashNavigation: true,
    keyboard: {
    enabled: true,
    onlyInViewport: false,
    },
    ousewheel: {
      forceToAxis: true,
    },
  
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

new Accordion('.accordion-container');