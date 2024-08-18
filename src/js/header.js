const menuToggle = document.querySelector('.js-dropdown-toggle');
const menuDropdown = document.querySelector('.js-dropdown-menu');
const menuLink = document.querySelectorAll('.js-header-menu-link');
// клік на кнопку меню
menuToggle.addEventListener('click', function () {
  menuDropdown.classList.toggle('show');
});
// при кліку на посилання закривається випадаючк меню
menuLink.forEach(link => {
  link.addEventListener('click', function () {
    menuDropdown.classList.remove('show');
  });
});
// якщо клік стався за межами випадаючого меню, закриваємо його
window.addEventListener('click', function (e) {
  if (!document.querySelector('.dropdown').contains(e.target)) {
    menuDropdown.classList.remove('show');
  }
});

//плавний скрол при кліку на якірні посилання
menuLink.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();   
      //ID секції, до якої веде посилання
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
  
      //скрол до відповідної секції
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth' // Плавний скрол
      });
  
      // закриває меню після переходу
      menuDropdown.classList.remove('show');
    });
  });
  

// modal

(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const closeMenuLink = document.querySelectorAll('.js-header-link');

// перемикання стану модального меню (відкрити/закрити)
  const toggleMenu = () => {
    const isMenuOpen = mobileMenu.classList.contains('is-open');
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');


    //блокування прокручування тіла сторінки залежно від стану меню
    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  closeMenuLink.forEach(item => item.addEventListener('click', toggleMenu));
  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

// якщо ширина вікна більше або дорівнює 768px, закривається мобільне меню
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();


