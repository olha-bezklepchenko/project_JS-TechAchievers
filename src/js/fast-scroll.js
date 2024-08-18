import { refs } from './refs.js';

// Додаємо обробник подій(до глобального об'єкту window) який спрацьовує під час скролу
window.addEventListener('scroll', onVisibleOrHiddenScrollUp);
// Додаємо обробник подій до кнопки(scroll-up).
refs.scrollUp.addEventListener('click', onScrollUp);

// Функція яка в залежності від степені прокрутки(в пікселях) приховує, або показує кнопку(scroll-up)
function onVisibleOrHiddenScrollUp() {
  // Якщо скрол сторінки, більше ніж висота(крайня нижня точка блоку) блоку Hero, прибирається клас hidden, кнопка з'являється.
  if (window.scrollY > refs.heroEl.clientHeight) {
    refs.scrollUp.classList.remove('hidden');
    // якщо меньше, тоді додається клас hidden, кнопка приховується.
  } else {
    refs.scrollUp.classList.add('hidden');
  }
}

// Функція яка повертає скрол на позицію 0px по вертикалі.
function onScrollUp() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
