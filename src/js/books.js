import './book-modal.js';
import axios from 'axios';
import { showLoader, hideLoader } from './loader';

axios.defaults.baseURL = 'https://books-backend.p.goit.global';

const category = document.querySelector('.books-category');
const categorySelect = document.querySelector('.books-options-container');
const booksList = document.querySelector('.books-list');
const loadMoreButton = document.querySelector('.books-load-more');
const booksAllQuantity = document.querySelector('.books-all-quantity');
const booksCarrentQuantity = document.querySelector('.books-carrent-quantity');

category.addEventListener('click', getName);
categorySelect.addEventListener('click', getName);

let booksData = [];
let currentPage = 1;
let booksShowed = 0;
let booksInBox = window.innerWidth >= 1440 ? 24 : 10;

let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    category.innerHTML = '';
    categorySelect.innerHTML = '';
    fetchCategories();
  }, 300);
});

fetchCategories();
fetchBooks(createStartBooks);

// Получение категорий
async function fetchCategories() {
  try {
    showLoader();
    const { data } = await axios.get('/books/category-list');
    makeCategories(data);
  } catch (error) {
    console.error('Error fetching categories:', error.message);
  } finally {
    hideLoader();
  }
}

// Получение всех топ-книг
async function fetchBooks(callback) {
  try {
    showLoader();
    const { data } = await axios.get('/books/top-books');
    callback(data);
  } catch (error) {
    console.error('Error fetching top-books:', error.message);
  } finally {
    hideLoader();
  }
}

// Получение книг по категории
async function fetchBooksByCategory(categoryName) {
  try {
    showLoader();
    const { data } = await axios.get('/books/category', {
      params: { category: categoryName },
    });
    setAllBooksAfterClick(data);
  } catch (error) {
    console.error('Error fetching category books:', error.message);
  } finally {
    hideLoader();
  }
}

// Обработка клика по категории
function getName(event) {
  const categoryName = event.target.getAttribute('data-category-name');
  if (!categoryName) return;

  if (categoryName === 'books-all-categories') {
    fetchBooks(createStartBooks);
  } else {
    fetchBooksByCategory(categoryName);
  }
  selectMenuItem(categoryName);
}

// Выделение выбранной категории
function selectMenuItem(categoryName) {
  document
    .querySelectorAll('.books-category-item')
    .forEach(item => item.classList.remove('selected'));
  const selected = document.querySelector(
    `.books-category-item[data-category-name="${categoryName}"]`
  );
  if (selected) selected.classList.add('selected');
}

// Рендер категорий
function makeCategories(data) {
  const all = { list_name: 'books-all-categories', label: 'All categories' };
  const fullList = [all, ...data];
  category.innerHTML = '';
  categorySelect.innerHTML = '';

  const booksSelected = document.querySelector('.books-selected');
  if (booksSelected) booksSelected.innerText = all.label;
  categorySelect.classList.remove('active');

  if (window.innerWidth < 1440) {
    const markup = fullList
      .map(
        c => `<div class="books-option" data-category-name="${c.list_name}">
          ${c.label || c.list_name}
        </div>`
      )
      .join('');
    categorySelect.insertAdjacentHTML('beforeend', markup);

    document.querySelectorAll('.books-option').forEach(option => {
      option.addEventListener('click', () => {
        if (booksSelected) booksSelected.innerText = option.innerText;
        categorySelect.classList.remove('active');
        getName({ target: option });
      });
    });

    if (booksSelected) {
      booksSelected.onclick = () => {
        categorySelect.classList.toggle('active');
      };
    }

    document.addEventListener('click', e => {
      if (
        !categorySelect.contains(e.target) &&
        !booksSelected.contains(e.target)
      ) {
        categorySelect.classList.remove('active');
      }
    });
  } else {
    const listMarkup = fullList
      .map(
        c => `<li class="books-category-item${
          c.list_name === 'books-all-categories' ? ' selected' : ''
        }" data-category-name="${c.list_name}">
        ${c.label || c.list_name}
      </li>`
      )
      .join('');
    category.insertAdjacentHTML('beforeend', listMarkup);
  }
}

// Обработка топовых книг
function createStartBooks(response) {
  booksList.innerHTML = '';
  booksData = response.flatMap(c => c.books);
  currentPage = 1;
  booksShowed = 0;
  createBooksInBox();
}

// Обработка книг по категории
function setAllBooksAfterClick(response) {
  booksList.innerHTML = '';
  booksData = response;
  currentPage = 1;
  booksShowed = 0;
  createBooksInBox();
}

// Рендер книг порционно
function createBooksInBox() {
  const slice = booksData.slice(
    (currentPage - 1) * booksInBox,
    currentPage * booksInBox
  );

  const markup = slice.map(createBookItem).join('');
  booksList.insertAdjacentHTML('beforeend', markup);
  booksShowed += slice.length;

  booksAllQuantity.textContent = booksData.length;
  booksCarrentQuantity.textContent = booksShowed;

  loadMoreButton.style.display =
    booksShowed < booksData.length ? 'inline' : 'none';
}

// Разметка одной книги
function createBookItem(book) {
  return `
    <li class="books-item" data-id="${book._id}">
      <img src="${book.book_image}" alt="${book.title}" />
      <div class="book-card-content">
        <div class="book-card-heading">
          <h3>${book.title}</h3>
          <p>${book.author}</p>
        </div>
        <div class="book-card-price">$${parseInt(book.price, 10)}</div>
      </div>
      <button class="book-learn-more" data-id="${book._id}">Learn more</button>
    </li>
  `;
}

// Кнопка Load More
loadMoreButton.addEventListener('click', () => {
  currentPage++;
  booksInBox = 4;
  createBooksInBox();
});
