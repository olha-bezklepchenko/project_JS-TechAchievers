import { Swiper, Navigation, Keyboard, Accordion } from './libraries.js';

const swiper = new Swiper('.skills-container', {
    modules: [Navigation, Keyboard],
    direction: 'horizontal',
    rewind: true,
    
    keyboard: {
    enabled: true,
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

new Accordion(document.querySelector('.accordion-container'), {
  duration: 200,
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
