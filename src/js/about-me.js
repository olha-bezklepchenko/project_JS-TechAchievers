import {
  Swiper,
  Navigation,
  Keyboard,
  Mousewheel,
  Accordion,
} from './libraries.js';

cloneSlides();

const swiper = new Swiper('.skills-container', {
  modules: [Navigation, Keyboard, Mousewheel],
  direction: 'horizontal',
  loop: true,
  spaceBetween: 0,

  keyboard: {
    enabled: true,
  },
  mousewheel: {
    enabled: true,
    invert: true,
  },

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

function cloneSlides() {
  const swiperWrapper = document.querySelector('.about-skills');
  const slides = document.querySelectorAll('.about-sk-item');

  slides.forEach(slide => {
    const clonedSlideEnd = slide.cloneNode(true);
    swiperWrapper.appendChild(clonedSlideEnd);
  });
}

new Accordion(document.querySelector('.accordion-container'), {
  duration: 700,
  showMultiple: true,
  elementClass: 'about-accordion-item',
  panelClass: 'about-ac-panel',
  triggerClass: 'about-accordion-btn',
  activeClass: 'about-active',
  onOpen: onOpen,
  onClose: onClose,
});

function turnBtn(element, degrees) {
  const arrow = element.querySelector('.about-ac-svg');
  if (arrow) {
    arrow.style.transform = `rotate(${degrees}deg)`;
  }
}

function onOpen(currentElement) {
  turnBtn(currentElement, 180);
}

function onClose(currentElement) {
  turnBtn(currentElement, 0);
}

function onScroll() {
  const title = document.querySelector('.about-content');
  const titlePosition = title.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (titlePosition < screenPosition) {
    title.classList.add('visible');
  }
}

window.addEventListener('scroll', onScroll);
