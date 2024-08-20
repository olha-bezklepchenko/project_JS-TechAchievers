const scrollUp = document.querySelector('.scroll-up');
const scrollDown = document.querySelector('.scroll-down');
const heroEl = document.querySelector('.hero');
const footerEl = document.querySelector('.footer');

// Додаємо обробник подій для прокрутки
window.addEventListener('scroll', onVisibleOrHiddenScrollButtons);

// Додаємо обробники подій для кнопок
scrollUp.addEventListener('click', onScrollUp);
scrollDown.addEventListener('click', onScrollDown);

function onVisibleOrHiddenScrollButtons() {
  // Поточне значення прокручування  сторінки
  const scrollPosition = window.scrollY;

  // Отримуємо розміри та позиції елементів
  const heroHeight = heroEl.offsetHeight;
  const footerTop = footerEl.getBoundingClientRect().top + scrollPosition;

  // Логіка для кнопки "Scroll Up"
  if (scrollPosition > heroHeight) {
    scrollUp.classList.remove('hidden');
  } else {
    scrollUp.classList.add('hidden');
  }

  // Логіка для кнопки "Scroll Down"
  if (scrollPosition < footerTop - window.innerHeight) {
    scrollDown.classList.remove('hidden');
  } else {
    scrollDown.classList.add('hidden');
  }
}

// Прокручує сторінку вгору при натисканні кнопки "Scroll Up"
function onScrollUp() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

// Прокручує сторінку в самий низ при натисканні кнопки "Scroll Down"
function onScrollDown() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth',
  });
}
