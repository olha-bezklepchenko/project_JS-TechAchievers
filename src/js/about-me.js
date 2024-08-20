import { Swiper, Navigation, Keyboard, Accordion } from './libraries.js';

const swiper = new Swiper('.skills-container', {
    modules: [Navigation, Keyboard],
    direction: 'horizontal',
    loop: true,
    
    wrapperClass: 'about-skills',
    slideClass: 'about-sk-item',

    keyboard: {
    enabled: true,
    },
  
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 5,
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
