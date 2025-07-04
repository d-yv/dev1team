import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function showMessage(message) {
  const messageData = {
    title: message,
    titleColor: 'red',
    position: 'bottomRight',
  };
  return iziToast.show(messageData);
}
// імпортуємо: import { showMessage } from './show-message';
// використовуємо: showMessage('Повідомлення')
