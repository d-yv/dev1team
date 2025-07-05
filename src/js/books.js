import axios from 'axios';
import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

new Accordion('.accordion-container', {
    duration: 400,
  showMultiple: true,
  
});

axios.defaults.baseURL = "https://books-backend.p.goit.global";

const categories = document.querySelector('.books-categories');
const category = document.querySelector('.books-category');
const booksList = document.querySelector('.books-list');
const loadMoreButton = document.querySelector('.books-load-more');
const categorySelect = document.querySelector('.books-category-select');
//let categoriesLoaded = false; // Флаг для отслеживания загрузки категорий


// Получение категорий
async function fetchCategories() {
    try {
        const { data } = await axios.get('/books/category-list');
        return data;
    } catch (error) {
        console.error('Error fetching categories:', error.message);
    }
}

// Получаем и выводим категории
fetchCategories()
    .then(data => {
        displayCategories(data);
    })
    .catch(error => {
        console.log(error.message);
    });


// Функция для отображения категорий
function displayCategories(data) {
    if (window.innerWidth >= 1440) {
        category.insertAdjacentHTML('beforeend', createCategories(data));
        addCategoryClickListeners(); // Добавляем обработчики кликов
    } else {
        categorySelect.insertAdjacentHTML('beforeend', createSelectCategories(data));
        addCategoryClickListeners(); // Добавляем обработчики кликов
    }
}

// Отрисовка категорий списком (ul/li)
function createCategories(arr) {
    const startCategory = '<li class="books-category-item" data-category-name="All categories">All categories</li>';
    const allCategories = arr.map((category) => `
        <li class="books-category-item" data-category-name="${category.list_name}">${category.list_name}</li>
    `).join('');

    //console.log('li: ',startCategory + allCategories);
    return startCategory + allCategories;
}

// Отрисовка категорий селектом (select/option)
function createSelectCategories(arr) {
    const startCategory = '<option>Categories</option><option value="">All categories</option>';
    const allCategories = arr.map((category) => `
        <option value="${category.list_name}">${category.list_name}</option>
    `).join('');
    
    return startCategory + allCategories;
}
/*
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
*/

// Обработчик события изменения размера окна
window.addEventListener('resize', () => {
    fetchCategories()
        .then(data => {
            category.innerHTML = '';
            categorySelect.innerHTML = '';
            displayCategories(data);
        })
        .catch(error => {
            console.log(error.message);
        });
});
/*
window.addEventListener('resize', debounce(() => {
    if (!categoriesLoaded) {
        fetchCategories()
            .then(data => {
                displayCategories(data);
                categoriesLoaded = true; // Устанавливаем флаг после загрузки
            })
            .catch(error => {
                console.log(error.message);
            });
    } else {
        // Обновите отображение категорий, если это необходимо
        displayCategories(categories); // Если у вас есть актуальные данные
    }
}, 300)); // 300 мс задержка
*/



// Получение книг по категории
async function fetchBooksByCategory(categoryName) {
    try {
        // if (categoryName === 'All categories') {
        //     const { data } = await axios.get('/books/top-books');
        // }
        // else {
            const { data } = await axios.get('/books/category', {
                params: {
                    category: categoryName
                }
            });
        // }
        //console.log('dataCateg: ', data);
        return data; 
    } catch (error) {
        console.error('Error fetching books by category:', error.message);
    }
}

// Выводим ВСЕ книги
function displayBooks(books) {
    //console.log('books:', books);
    booksList.innerHTML = ''; // Очищаем предыдущие книги
    if (books && Array.isArray(data)) {
        books.forEach(book => {
            //console.log('book', book);
            booksList.insertAdjacentHTML('beforeend', createBookItem(book.books));
        });
    }
};

// Выводим книги КАТЕГОРИИ
function displayBooksCategory(books) {
    //console.log('booksCategExport:', books);
    booksList.innerHTML = ''; // Очищаем предыдущие книги
    // if (books && Array.isArray(data)) {
        books.map(book => {
            //console.log('book', book);
            booksList.insertAdjacentHTML('beforeend', createBookItemCategory(book));
        });
    // }
};

// Отрисовка ВСЕХ книг
function createBookItem(arr) {
    //console.log('arrAll: ', arr);
    return arr.map(book => `
        <li class="books-item" data-id="${book._id}">
            <img src="${book.book_image}" alt="${book.title}" />
            <div class="book-card-content">
                <div class="book-card-heading">
                <h3>${book.title}</h3>
                <p>${book.author}</p>
                </div>
                <div class="book-card-price">$${book.price}</div>
            </div>
            <button class="book-learn-more" data-id="${book._id}">Learn more</button>
        </li>
    `).join('');
}

// Отрисовка книг КАТЕГОРИИ
function createBookItemCategory(book) {
    //console.log('arrCateg: ', book);
    return `
        <li class="books-item" data-id="${book._id}">
            <img src="${book.book_image}" alt="${book.title}" />
            <div class="book-card-content">
                <div class="book-card-heading">
                <h3>${book.title}</h3>
                <p>${book.author}</p>
                </div>
                <div class="book-card-price">$${book.price}</div>
            </div>
            <button class="book-learn-more" data-id="${book._id}">Learn more</button>
        </li>
    `
}

// Обработчик клика по категориям в ul/li
function addCategoryClickListeners() {
    const categoryItems = document.querySelectorAll('.books-category-item');
    categoryItems.forEach(item => {
        item.addEventListener('click', async () => {
            const categoryName = item.getAttribute('data-category-name');
            const books = await fetchBooksByCategory(categoryName);
            //console.log('booksCateg',books);
            displayBooksCategory(books);
        });
    });
}

// Обработчик клика по категориям в select/option
categorySelect.addEventListener('change', async (event) => {
    const selectedCategoryName = event.target.value;
    const books = await fetchBooksByCategory(selectedCategoryName);
    displayBooksCategory(books);
});

// Получение топовых книг
async function fetchBooks() {
    try {
        const { data } = await axios.get('/books/top-books');
        //console.log('data: ', data);
        return data;
    } catch (error) {
        console.error('Error fetching top-books:', error.message);
    }
}

// Получение топовых книг
/*async function fetchBooks() {
    try {
        const { data } = await axios.get('/books/top-books');
        // const dataBooks = await axios.get('/books/top-books');
        // console.log('data: '.dataBooks);
        console.log('data: '.data);
        return data.books;
    } catch (error) {
        console.error('Error fetching top books:', error.message);
    }
}*/

// fetchBooks();


// Инициализация - получение книг
async function initializeBooks() {
    //const books = await fetchBooksByCategory('All categories');
    const data = await fetchBooks();
    booksList.innerHTML = ''; // Очищаем предыдущие книги
    // if (data && Array.isArray(data)) {
        data.forEach(book => {
            booksList.insertAdjacentHTML('beforeend', createBookItem(book.books));
        });
    // }
}

// Вызов функции инициализации для загрузки книг
initializeBooks();



/* Modal */
// Получаем элементы
const modal = document.getElementById("modal");
const closeButton = document.querySelector(".close-button");
// const booksList = document.querySelector(".books-list");

// Обработчик клика на кнопки "Learn more"
booksList.addEventListener("click", async (event) => {
    if (event.target.classList.contains("book-learn-more")) {
        const bookId = event.target.getAttribute("data-id");
        
        const bookData = await fetchBookById(bookId);
        displayBookInModal(bookData);
    }
});

async function fetchBookById(id) {
    try {
        const response = await axios.get(`/books/${id}`);
        return response.data; 
    } catch (error) {
        console.error('Error fetching book by ID:', error.message);
    }
}

function displayBookInModal(book) {
    
    console.log(book);

    modal.querySelector(".modal-book-image").src = book.book_image;
    modal.querySelector("h3").innerText = book.title;
    modal.querySelector(".modal-author").innerText = book.author;
    modal.querySelector(".book-card-price").innerText = '$'+book.price;
    
    // Заполнение аккордеона данными книги
    const detailsText = document.querySelector('.book-details');
    const shippingText = document.querySelector('.book-shipping');
    const returnsText = document.querySelector('.book-returns');

    detailsText.innerText = book.description;
    shippingText.innerText = book.amazon_product_url;
    returnsText.innerText = book.contributor;

    // Показываем модальное окно
    modal.style.display = "block";
}



// Закрытие модального окна
closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// Закрытие модального окна при клике вне его
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


// Изменение количества
/*increaseButton.addEventListener("click", () => {
    quantityInput.value = parseInt(quantityInput.value) + 1;
});

decreaseButton.addEventListener("click", () => {
    if (quantityInput.value > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
});
*/