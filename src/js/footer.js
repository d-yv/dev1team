const formData = {
    email: ""};

const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector('.footer_form');
const emailInput = form.elements.email; 

form.addEventListener('input', (event) => {
    if (event.target.name === 'email') {
        formData.email = event.target.value.trim();}
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));});
    
document.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        formData.email = parsedData.email || "";
        emailInput.value = formData.email;
    }
});
form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (formData.email === "") {
        alert("Fill please all fields.");
        return;
    }
    console.log(formData);
    
    localStorage.removeItem(STORAGE_KEY);

    formData.email = "";
    form.reset();
});
