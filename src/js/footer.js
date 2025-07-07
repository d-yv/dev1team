import {showMessage} from './show-message';

const formData = {
    email: ""};

const form = document.querySelector('.footer-form');

const emailInput = form.elements.email; 

form.addEventListener('input', (event) => {
    if (event.target.name === 'email') {
        formData.email = event.target.value.trim();}
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (formData.email === "") {
      showMessage('red', 'Fill please all fields.');
        return;
    }
    if (!emailInput.checkValidity()){
      showMessage('red', 'Please enter a valid email address.');
      return;
    }
    console.log(formData);
    showMessage('green', 'Message sent successfully!');
    

    formData.email = "";
    form.reset();
});
