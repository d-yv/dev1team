import {showMessage} from './show-message';

const formData = {
    email: ""};

const form = document.querySelector('.footer-form');

const emailInput = form.elements.email; 

form.addEventListener('input', (event) => {
    if (event.target.name === 'email') {
        formData.email = event.target.value.trim();
      emailInput.style.borderColor ='rgba(11, 5, 0, 0.60)';
  emailInput.style.color = '#0B0500';
    }
});

form.addEventListener('submit', (event) => {
  const errorBorderColor = '#AD0000';
  const errorColor= '#AD0000';
  
  emailInput.style.borderColor ='rgba(11, 5, 0, 0.60)';
  emailInput.style.color = '#0B0500';
  
    event.preventDefault();
    if (formData.email === "") {
      showMessage('red', 'Fill please all fields.');
      emailInput.style.borderColor = errorBorderColor;
      emailInput.style.color = errorColor;
        return;
    }
    if (!emailInput.checkValidity()){
      showMessage('red', 'Please enter a valid email address.');
      emailInput.style.borderColor = errorBorderColor;
      emailInput.style.color = errorColor;
      return;
    }
    console.log(formData);
    showMessage('green', 'Message sent successfully!');
    

    formData.email = "";
    form.reset();
});
