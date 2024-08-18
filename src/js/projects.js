import { Swiper, Navigation, Keyboard, Mousewheel } from './libraries.js';

// Створення слайдеру з налаштуванням
document.addEventListener('DOMContentLoaded', () => {
  const projectsSwiper = new Swiper('.swiper', {
    modules: [Navigation, Keyboard, Mousewheel],
    slidesPerView: 1,
    spaceBetween: 16,
    watchOverflow: false,
    loop: false,
    direction: 'horizontal',
    speed: 1000,

    // прикручуємо кліки на кнопки
    navigation: {
      nextEl: '.swiper-project-right', // Кнопка вправо
      prevEl: '.swiper-project-left', // Кнопка вліво
    },

    keyboard: {
      enabled: true,
    },

    mousewheel: {
      enabled: true,
      invert: true,
      sensitivity: 1,
    },
  });
});
