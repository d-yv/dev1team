import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function showMessage(color, message) {
  const messageData = {
    title: message,
    titleColor: color,
    position: 'bottomRight',
    zindex: 9999,
  };
  return iziToast.show(messageData);
}
// імпортуємо: import { showMessage } from './show-message';
// використовуємо: showMessage('колір повідомлення(red або green)', 'Повідомлення')
