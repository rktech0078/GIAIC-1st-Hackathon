// alert('WELCOME TO GIAIC STUDENT (Abdul Rafay Khan)!');
const forms = document.getElementById('contactForm') as HTMLFormElement;

forms.addEventListener('submit', (event: Event) => {
  event.preventDefault();

  const nameInput = document.getElementById('name') as HTMLInputElement;
  const emailInput = document.getElementById('email') as HTMLInputElement;


  alert(`Name: ${nameInput.value},\nEmail: ${emailInput.value}`);
  alert('Form submitted successfully!');
  alert('Thank you for your message!');
  

  nameInput.value = '';
  emailInput.value = '';
});
