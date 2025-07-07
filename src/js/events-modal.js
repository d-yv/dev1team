import { showMessage } from './show-message.js';

let backdrop, closeBtn, form, titleEl, fields;
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

  fields = form.querySelectorAll('input[name], textarea[name]');
  fields.forEach(field => {
    field.addEventListener('input', () => {
      if (field.validity.valid) {
        field.classList.remove('invalid');
      } else {
        field.classList.add('invalid');
      }
    });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();

    const bad = Array.from(fields).find(f => !f.validity.valid);
    if (bad) {
      bad.classList.add('invalid');
    //  const container = bad.closest('.events-modal-field') || document.body;
      //  showMessage2('red', bad.validationMessage, container);
      showMessage('red', bad.validationMessage)
      bad.focus();
      return;
    }

    showMessage('green', 'Thank you for registering!');
    form.reset();
    fields.forEach(f => f.classList.remove('invalid'));
    close();
  });

  ready = true;
  return true;
}
