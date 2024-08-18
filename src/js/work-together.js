import { axios, iziToast } from '../js/libraries';

const form = document.querySelector('.work-tgt-form');
const modal = document.querySelector('[data-modal]');
const closeModalBtn = document.querySelector('[data-modal-close]');
const sendButton = document.querySelector('[data-send]');

sendButton.addEventListener('click', async event => {
  event.preventDefault();
  const formData = new FormData(form);
  const data = {
    email: formData.get('email'),
    comment: formData.get('comment'),
  };
  try {
    const response = await axios.post(
      'https://portfolio-js.b.goit.study/api/requests',
      JSON.stringify(data),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.status >= 200 && response.status < 300) {
      modal.classList.remove('is-hidden');

      form.reset();
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please check your input and try again.',
      position: 'topRight',
    });
  }
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.add('is-hidden');
});
