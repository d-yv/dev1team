export function showLoader() {
  loader.style.display = 'block';
}

export function hideLoader() {
  loader.style.display = 'none';
}

//імпортуємо функкції в свій js-файл (import {showLoader, hideLoader} from './loader';),
// додааємо <span class="loader"></span> в свій html-файл, туди, де лоадер повинен бути.
