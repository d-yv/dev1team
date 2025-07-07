import { showMessage } from './show-message.js';


let backdrop, closeBtn, form, titleEl;
let ready = false;

export function openEventModal(title) {
  if (!ready) {
    if (!initModal()) {
      setTimeout(() => openEventModal(title), 30);
      return;
    }
  }
  titleEl.textContent = title;
  backdrop.classList.remove('visually-hidden');
  document.body.style.overflow = 'hidden';
}

function close() {
  backdrop.classList.add('visually-hidden');
  document.body.style.overflow = '';
}

function initModal() {
  backdrop = document.getElementById('events-modal-backdrop');
  if (!backdrop) return false;

  closeBtn = document.getElementById('events-modal-close');
  form     = document.getElementById('events-modal-form');
  titleEl  = document.getElementById('events-modal-event-name');

  closeBtn.addEventListener('click', close);
  backdrop.addEventListener('click', e => e.target === backdrop && close());
  document.addEventListener('keydown', e => e.key === 'Escape' && close());

  form.addEventListener('submit', e => {
    e.preventDefault();
    showMessage(green,'Thank you for registering!');
    form.reset();
    close();
  });

  ready = true;
  return true;
}
