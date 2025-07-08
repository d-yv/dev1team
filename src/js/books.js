import "./book-modal.js";
import axios from 'axios';

axios.defaults.baseURL = "https://books-backend.p.goit.global";

const categories = document.querySelector('.books-categories');
const category = document.querySelector('.books-category');
const booksList = document.querySelector('.books-list');
const loadMoreButton = document.querySelector('.books-load-more');
// const categorySelect = document.querySelector('.books-category-select');
const categorySelect = document.querySelector('.books-custom-select');
const booksAllQuantity = document.querySelector('.books-all-quantity');
const booksCarrentQuantity = document.querySelector('.books-carrent-quantity');
const booksLoader = document.querySelector('books-loader');

category.addEventListener('click', getName);

let booksData = [];
let currentPage = 1;

let currentWindows = window.innerWidth;
let booksInBox = 10;
let booksShowed = 0;


if (currentWindows >= 1440) {
  booksInBox = 24;
}

// Запрос на получение категорий
async function fetchCategories() {
    try {
        const { data } = await axios.get('/books/category-list');
        return data;
    } catch (error) {
        console.error('Error fetching categories:', error.message);
    }
}

fetchCategories()
  .then(response => {
    makeCategories(response);
  })
    .catch(error =>
        console.log(error)
);
    
// Запрос на получение топовых (всех) книг
async function fetchBooks() {
    try {
        const { data } = await axios.get('/books/top-books');
        return data;
    } catch (error) {
        console.error('Error fetching top-books:', error.message);
    }
}

// Получение топовых книг
fetchBooks()
  .then(response => {
    createStartBooks(response);
  })
    .catch(error =>
        console.log(error)
    );

// Запрос на получение книг по категории
async function fetchBooksByCategory(categoryName) {
    try {
        const { data } = await axios.get('/books/category', {
            params: {
                category: categoryName
            }
        });
        
        return data; 
    } catch (error) {
        console.error('Error fetching books by category:', error.message);
    }
}


function getName(event) {
  let categoryName = event.target.getAttribute('data-category-name');
    console.log('categoryName',categoryName);
    if (categoryName === 'books-all-categories') {
    fetchBooks()
      .then(response => {
        createStartBooks(response);
      })
        .catch(error =>
            console.log(error)
        );
  } else {
      fetchBooksByCategory(categoryName)
          .then(response => {
        setAllBooksAfterClick(response);
      })
          .catch(error =>
              console.log(error)
          );
  }
      selectMenuItem(categoryName);
}

function selectMenuItem(categoryName) {
    const items = document.querySelectorAll('.books-category-item');
    items.forEach(item => {
        item.classList.remove('selected');
    });
    const selectedItem = document.querySelector(`.books-category-item[data-category-name="${categoryName}"]`);

    if (selectedItem) {
        selectedItem.classList.add('selected');
    }
}
const booksCustomSelect = document.querySelector('.books-custom-select');
function makeCategories(response) {
  if (window.innerWidth < 1440) {
    const booksSelected = document.querySelector('.books-selected');
    const booksOptionsContainer = document.querySelector('.books-options-container');
    const booksOptionsList = document.querySelectorAll('.books-option');

    response.map(
      category =>
        `<div class="books-option" data-category-name="${category.list_name}">${category.list_name}</div>`
    ).join('');
    console.log('categ:', category);
        // categorySelect.insertAdjacentHTML('beforeend', createSelectCategories(response));
    category.insertAdjacentHTML('beforeend', booksOptionsContainer);
    // Открытие/закрытие выпадающего меню
    booksSelected.addEventListener('click', () => {
        booksOptionsContainer.classList.toggle('active'); // Переключаем видимость выпадающего меню
    });
  } else {
    const liCategory = response.map(
        category =>
            `<li class="books-category-item" data-category-name="${category.list_name}">${category.list_name}</li>`
        ).join('');
    category.insertAdjacentHTML('beforeend', liCategory);
    }
}

// Отрисовка категорий селектом (select/option)
function createSelectCategories(response) {
  console.log('arr', response);
  
const booksCustomSelect = document.querySelector('.books-custom-select');
    const booksSelected = document.querySelector('.books-selected');
    const booksOptionsContainer = document.querySelector('.books-options-container');
    const booksOptionsList = document.querySelectorAll('.books-option');

  booksCustomSelect.style.display = 'inline';
  // categorySelect.insertAdjacentHTML('beforeend', createSelectCategories(data));
  // customSelect.style.display = 'none';
    // Открытие/закрытие выпадающего меню
    booksSelected.addEventListener('click', () => {
        booksOptionsContainer.classList.toggle('active'); // Переключаем видимость выпадающего меню
    });

    // Изменение выбранного элемента
    booksOptionsList.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText; // Изменяем текст выбранного элемента
            booksOptionsContainer.classList.remove('active'); // Закрываем меню
        });
    });

    // Закрытие меню при клике вне его
    document.addEventListener('click', (event) => {
        if (!selected.contains(event.target) && !optionsContainer.contains(event.target)) {
            booksOptionsContainer.classList.remove('active');
        }
    });
  
  
  // const startCategory = '<option>Categories</option><option value="">All categories</option>';
  //   const allCategories = response.map((category) => `
  //       <option value="${category.list_name}">${category.list_name}</option>
  //   `).join('');
    
  //   return startCategory + allCategories;
}


function createStartBooks(response) {
  booksList.innerHTML = '';
  booksData = [];
  for (const category of response) {
    const books = category.books;
    for (let i = 0; i < books.length; i += 1) {
      booksData.push(books[i]);
    }
    }
    
  currentPage = 1;
  booksShowed = 0;
  createBooksInBox();
}

function setAllBooksAfterClick(response) {
  booksList.innerHTML = '';
  booksData = response;
  currentPage = 1;
  booksShowed = 0;
  createBooksInBox();
}

function createBooksInBox() {
  let sumAllBooks = '';
  const sliceBooks = booksData.slice(
    (currentPage - 1) * booksInBox,
    (currentPage - 1) * booksInBox + booksInBox
  );

  for (const book of sliceBooks) {
    let markupInner = createBookItem(book);
    sumAllBooks += markupInner;
    booksShowed++;
  }
  booksList.insertAdjacentHTML('beforeend', sumAllBooks);
  if (currentPage * booksInBox < booksData.length) {
      loadMoreButton.style.display = 'inline';
  } else {
      loadMoreButton.style.display = 'none';
  }
  booksAllQuantity.textContent = booksData.length;

  booksCarrentQuantity.textContent = booksShowed;
}

// Отрисовка книги
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

loadMoreButton.addEventListener('click', event => {
  currentPage += 1;
  booksInBox = 4;
  createBooksInBox();
});
