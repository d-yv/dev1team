import axios from 'axios';

axios.defaults.baseURL = "https://books-backend.p.goit.global";

const categories = document.querySelector('.books-categories');
const category = document.querySelector('.books-category');
const booksList = document.querySelector('.books-list');
const loadMoreButton = document.querySelector('.books-load-more');
const categorySelect = document.querySelector('.books-category-select');

// Получение категорий
async function fetchCategories() {
    try {
        const { data } = await axios.get('/books/category-list');
        return data;
    } catch (error) {
        console.error('Error fetching categories:', error.message);
    }
}

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

// Получаем и выводим категории
fetchCategories()
    .then(data => {
        displayCategories(data);
    })
    .catch(error => {
        console.log(error.message);
    });

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
    const startCategory = '<option selected>All categories</option>';
    const allCategories =  arr.map((category) => `
        <option value="${category.list_name}">${category.list_name}</option>
    `).join('');
    //console.log('option: ',startCategory + allCategories);
    return startCategory + allCategories;
}

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
        console.log('dataCateg: ', data);
        return data; 
    } catch (error) {
        console.log(categoryName);
        console.error('Error fetching books by category:', error.message);
    }
}

// Выводим ВСЕ книги
function displayBooks(books) {
    console.log('books:', books);
    booksList.innerHTML = ''; // Очищаем предыдущие книги
    if (books && Array.isArray(data)) {
        books.forEach(book => {
            console.log('book', book);
            booksList.insertAdjacentHTML('beforeend', createBookItem(book.books));
        });
    }
};

// Выводим книги КАТЕГОРИИ
function displayBooksCategory(books) {
    console.log('booksCategExport:', books);
    booksList.innerHTML = ''; // Очищаем предыдущие книги
    // if (books && Array.isArray(data)) {
        books.map(book => {
            console.log('book', book);
            booksList.insertAdjacentHTML('beforeend', createBookItemCategory(book));
        });
    // }
};

// Отрисовка ВСЕХ книг
function createBookItem(arr) {
    console.log('arrAll: ', arr);
    return arr.map(book => `
        <li class="books-item">
            <img src="${book.book_image}" alt="${book.title}" />
            <div class="book-card-content">
                <div class="book-card-heading">
                <h3>${book.title}</h3>
                <p>${book.author}</p>
                </div>
                <div class="book-card-price">$${book.price}</div>
            </div>
            <button class="book-learn-more">Learn more</button>
        </li>
    `).join('');
}

// Отрисовка книг КАТЕГОРИИ
function createBookItemCategory(book) {
    console.log('arrCateg: ', book);
    return `
        <li class="books-item">
            <img src="${book.book_image}" alt="${book.title}" />
            <div class="book-card-content">
                <div class="book-card-heading">
                <h3>${book.title}</h3>
                <p>${book.author}</p>
                </div>
                <div class="book-card-price">$${book.price}</div>
            </div>
            <button class="book-learn-more">Learn more</button>
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
            console.log('booksCateg',books);
            displayBooksCategory(books);
        });
    });
}

// Обработчик клика по категориям в select/option
categorySelect.addEventListener('change', async () => {
    const selectedCategoryName = categorySelect.options[categorySelect.selectedIndex].text; // Получаем имя выбранной категории
    const books = await fetchBooksByCategory(selectedCategoryName);
    displayBooksCategory(books);
});

// Получение топовых книг
async function fetchBooks() {
    try {
        const { data } = await axios.get('/books/top-books');
        console.log('data: ', data);
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
    // console.log('books', books);
    booksList.innerHTML = ''; // Очищаем предыдущие книги
    // if (data && Array.isArray(data)) {
        data.forEach(book => {
            booksList.insertAdjacentHTML('beforeend', createBookItem(book.books));
        });
    // }
}

// Вызов функции инициализации для загрузки книг
initializeBooks();