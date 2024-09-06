// TypeScript: Handling form submission
// alert('WELCOME TO GIAIC STUDENT (Abdul Rafay Khan)!');
const forms = document.getElementById('contactForm') as HTMLFormElement;

forms.addEventListener('submit', (event: Event) => {
  event.preventDefault();

  const nameInput = document.getElementById('name') as HTMLInputElement;
  const emailInput = document.getElementById('email') as HTMLInputElement;


  alert(`Name: ${nameInput.value}, Email: ${emailInput.value}`);
  alert('Form submitted successfully!');
  
  

  nameInput.value = '';
  emailInput.value = '';
});
