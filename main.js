// TypeScript: Handling form submission
// alert('WELCOME TO GIAIC STUDENT (Abdul Rafay Khan)!');
var forms = document.getElementById('contactForm');
forms.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    alert("Name: ".concat(nameInput.value, ", Email: ").concat(emailInput.value));
    alert('Form submitted successfully!');
    nameInput.value = '';
    emailInput.value = '';
});
