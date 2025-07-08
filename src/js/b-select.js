const selected = document.querySelector('.selected');
const optionsContainer = document.querySelector('.options-container');
const optionsList = document.querySelectorAll('.option');

// Открытие/закрытие выпадающего меню
selected.addEventListener('click', () => {
    optionsContainer.classList.toggle('active'); // Переключаем видимость выпадающего меню
});

// Изменение выбранного элемента
optionsList.forEach(option => {
    option.addEventListener('click', () => {
        selected.innerText = option.innerText; // Изменяем текст выбранного элемента
        optionsContainer.classList.remove('active'); // Закрываем меню
    });
});

// Закрытие меню при клике вне его
document.addEventListener('click', (event) => {
    if (!selected.contains(event.target) && !optionsContainer.contains(event.target)) {
        optionsContainer.classList.remove('active'); // Закрываем меню
    }
});