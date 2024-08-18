import { Swiper, Navigation, Keyboard } from './libraries.js';

// Створення слайдеру з налаштуванням
document.addEventListener('DOMContentLoaded', () => {
  const projectsSwiper = new Swiper('.project-swiper-wrapper', {
    modules: [Navigation, Keyboard],
    slidesPerView: 1,
    loop: false,
    direction: 'horizontal',
    
    // прикручуємо кліки на кнопки
    navigation: {
      nextEl: '.swiper-project-right', // Кнопка вправо
      prevEl: '.swiper-project-left', // Кнопка вліво
    },

    keyboard: {
      enabled: true,
    },

    // Реєструю події з кнопками при зміні слайду
    on: {
      slideChange: function () {
        // встановлюю стилі кнопок при кліку на зміну слайду
        updateNavigationButtons(this);
      },
    },
  });

  //   робота зі стилями кнопок
  function updateNavigationButtons(projectsSwiper) {
    // витягую кнопки
    const leftButton = document.querySelector('.swiper-project-left');
    const rightButton = document.querySelector('.swiper-project-right');

    // Перевірка на перший слайд і визначаю чи має бути активна кнопка вліво
    if (projectsSwiper.isBeginning) {
      leftButton.setAttribute('disabled', true); // Кнопка вліво вимкнена
    } else {
      leftButton.removeAttribute('disabled'); // Кнопка вліво включена
    }

    // перевірка на останній слайд і визначаю чи має бути активна кнопка вправо
    if (projectsSwiper.isEnd) {
      rightButton.setAttribute('disabled', true); // Кнопка вправо вимкнена
    } else {
      rightButton.removeAttribute('disabled'); // Кнопка вправо включена
    }
  }
});
