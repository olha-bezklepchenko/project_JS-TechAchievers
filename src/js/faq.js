import { Accordion } from './libraries';

new Accordion(document.querySelector('.faq-list'), {
  duration: 700,
  showMultiple: true,
  elementClass: 'faq-item',
  panelClass: 'faq-panel',
  triggerClass: 'faq-trigger',
  activeClass: 'faq-active',
  onOpen: onOpen,
  onClose: onClose,
});

function rotateArrow(element, degrees) {
  const arrow = element.querySelector('.faq-btn-open');
  if (arrow) {
    arrow.style.transform = `rotate(${degrees}deg)`;
  }
}

function onOpen(currentElement) {
  rotateArrow(currentElement, 180);
}

function onClose(currentElement) {
  rotateArrow(currentElement, 0);
}
