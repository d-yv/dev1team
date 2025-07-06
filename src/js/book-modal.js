import axios from 'axios';
import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

new Accordion('.accordion-container', {
    duration: 400,
    showMultiple: true,
});

// Получаем элементы
const modal = document.getElementById("modal");
const closeButton = document.querySelector(".close-button");
const booksList = document.querySelector(".books-list");

// Обработчик клика на кнопке "Learn more"
booksList.addEventListener("click", async (event) => {
    if (event.target.classList.contains("book-learn-more")) {
        const bookId = event.target.getAttribute("data-id");
        
        const bookData = await fetchBookById(bookId);
        displayBookInModal(bookData);
    }
});

/* Получаем объект книги по id */
async function fetchBookById(id) {
    try {
        const response = await axios.get(`/books/${id}`);
        return response.data; 
    } catch (error) {
        console.error('Error fetching book by ID:', error.message);
    }
}

/* Формируем данные в модалке */
function displayBookInModal(book) {

    modal.querySelector(".modal-book-image").src = book.book_image;
    modal.querySelector("h3").innerText = book.title;
    modal.querySelector(".modal-author").innerText = book.author;
    modal.querySelector(".book-card-price").innerText = '$' + book.price;
    
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
increaseButton.addEventListener("click", () => {
    quantityInput.value = parseInt(quantityInput.value) + 1;
});

decreaseButton.addEventListener("click", () => {
    if (quantityInput.value > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
});
