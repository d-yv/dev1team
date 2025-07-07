import axios from 'axios';
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


const modal = document.getElementById('modal');
const closeButton = document.querySelector('.close-button');
const booksList = document.querySelector('.books-list');
const quantityInput = modal.querySelector('#quantity');
const increaseButton = modal.querySelector('#increase');
const decreaseButton = modal.querySelector('#decrease');
const addToCartButton = modal.querySelector('.book-add-to-card');
const buyNowButton = modal.querySelector('.book-buy-now');

booksList.addEventListener('click', async event => {
  if (event.target.classList.contains('book-learn-more')) {
    const bookId = event.target.getAttribute('data-id');
    const bookData = await fetchBookById(bookId);
    if (bookData) displayBookInModal(bookData);
  }
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
  document.body.classList.remove('no-scroll');
});

window.addEventListener('click', event => {
  if (event.target === modal) {
    modal.style.display = 'none';
    document.body.classList.remove('no-scroll');
  }
});

// Обработка кнопок +/-
increaseButton.addEventListener('click', () => {
  quantityInput.value = parseInt(quantityInput.value) + 1;
});

decreaseButton.addEventListener('click', () => {
  const current = parseInt(quantityInput.value);
  if (current > 1) {
    quantityInput.value = current - 1;
  }
});

addToCartButton.addEventListener('click', () => {
  const quantity = parseInt(quantityInput.value);
  iziToast.info({
    title: 'Added to cart',
    message: `${quantity} book(s) successfully added to your cart.`,
    position: 'topRight',
  });
});

buyNowButton.addEventListener('click', () => {
  iziToast.success({
    title: 'Thank you!',
    message: 'Your purchase was successful.',
    position: 'topRight',
  });
});

// Получение данных книги
async function fetchBookById(id) {
  try {
    const response = await axios.get(`/books/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error getting a book:', error.message);
    return null;
  }
}

// Отображение книги в модалке
function displayBookInModal(book) {
  document.body.classList.add('no-scroll');
  // Обновляем основные данные
  modal.querySelector('.modal-book-image').src = book.book_image || './img/placeholder.jpg';
  modal.querySelector('h3').innerText = book.title || 'No title';
  modal.querySelector('.modal-author').innerText = book.author || 'Unknown author';
  modal.querySelector('.book-card-price').innerText = book.price ? `$${book.price}` : 'N/A';

  // Перерендерим аккордеон
  renderAccordion(book);

  // Сброс количества
  quantityInput.value = 1;

  // Показываем модалку
  modal.style.display = 'flex';
}

// Рендеринг аккордеона заново
function renderAccordion(book) {
  const accordionWrapper = modal.querySelector('.accordion-list');
  accordionWrapper.innerHTML = `
    <div class="accordion-container">
      <div class="ac accordion-item">
        <h2 class="ac-header">
          <button type="button" class="ac-trigger">Details</button>
        </h2>
        <div class="ac-panel">
          <p class="ac-text book-details">${book.description || 'No details'}</p>
        </div>
      </div>
      <div class="ac accordion-item">
        <h2 class="ac-header">
          <button type="button" class="ac-trigger">Shipping</button>
        </h2>
        <div class="ac-panel">
          <p class="ac-text book-shipping">${book.amazon_product_url || 'Shipping info not available'}</p>
        </div>
      </div>
      <div class="ac accordion-item">
        <h2 class="ac-header">
          <button type="button" class="ac-trigger">Returns</button>
        </h2>
        <div class="ac-panel">
          <p class="ac-text book-returns">${book.contributor || 'No return policy info'}</p>
        </div>
      </div>
    </div>
  `;

  // Переинициализируем accordion-js
  new Accordion('.accordion-container', {
    duration: 400,
    showMultiple: true,
  });
}
