
export function initializeCustomSelect(
    customSelectWrapper,
    customSelectTrigger,
    customOptionsContainer,
    selectedValueSpan,
    handleCategoryChange ) {
    customSelectTrigger.addEventListener('click', () => {
        customOptionsContainer.classList.toggle('open');
        customSelectTrigger.classList.toggle('open');
    });


    customOptionsContainer.addEventListener('click', async (event) => {
        const clickedOption = event.target.closest('.custom-option');
        if (clickedOption) {
            const value = clickedOption.dataset.value;
            const text = clickedOption.textContent;

            selectedValueSpan.textContent = text;

            const currentSelected = customOptionsContainer.querySelector('.custom-option.selected');
            if (currentSelected) {
                currentSelected.classList.remove('selected');
            }
            clickedOption.classList.add('selected');

            customOptionsContainer.classList.remove('open');
            customSelectTrigger.classList.remove('open');

            if (handleCategoryChange) {
                await handleCategoryChange(value);
            }
        }
    });

    document.addEventListener('click', (event) => {
        if (!customSelectWrapper.contains(event.target) && customOptionsContainer.classList.contains('open')) {
            customOptionsContainer.classList.remove('open');
            customSelectTrigger.classList.remove('open');
        }
    });
}
export function createCustomOptionsHtml(arr) {
    return arr.map((category, index) => `
        <div class="custom-option ${index === 0 ? 'selected' : ''}" data-value="${category.list_name}">
            ${category.list_name === 'All categories' ? 'Categories' : category.list_name}
        </div>
    `).join('');
}
export function updateCustomSelectSelection(categoryName, customOptionsContainer, selectedValueSpan) {
    const selectedOption = customOptionsContainer.querySelector(`.custom-option[data-value="${categoryName}"]`);
    if (selectedOption) {
        const currentSelected = customOptionsContainer.querySelector('.custom-option.selected');
        if (currentSelected) currentSelected.classList.remove('selected');
        selectedOption.classList.add('selected');
        selectedValueSpan.textContent = selectedOption.textContent;
    }
}

