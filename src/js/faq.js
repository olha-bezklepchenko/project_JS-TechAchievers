import { Accordion } from './libraries';

const initializeAccordion = () => {
  const faqList = document.querySelector('.faq-list');

  const accordion = new Accordion(faqList, {
    duration: 250,
    showMultiple: false,
    elementClass: 'faq-item',
    triggerClass: 'faq-btn',
    panelClass: 'faq-text',
    activeClass: 'active',
  });

  accordion.open(0);

  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((currentItem, currentIndex) => {
    currentItem.addEventListener('click', event => {
      if (event.target.closest('.faq-btn')) return;

      faqItems.forEach((otherItem, otherIndex) => {
        if (
          otherIndex !== currentIndex &&
          otherItem.classList.contains('active')
        ) {
          accordion.close(otherIndex);
        }
      });

      if (currentItem.classList.contains('active')) {
        accordion.close(currentIndex);
      } else {
        accordion.open(currentIndex);
      }
    });
  });
};

export default initializeAccordion;