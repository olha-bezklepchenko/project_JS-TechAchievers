import {
  Swiper,
  Navigation,
  Keyboard,
  Mousewheel,
  Accordion,
} from './libraries.js';

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

document.addEventListener('DOMContentLoaded', function () {
  const skillsList = document.querySelector('.about-skills');

  const listItems = document.querySelectorAll('.about-sk-item');

  listItems.forEach(function (item) {
    const clone = item.cloneNode(true);
    skillsList.appendChild(clone);
  });

  swiper.update();
});

new Accordion(document.querySelector('.accordion-container'), {
  duration: 1000,
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
