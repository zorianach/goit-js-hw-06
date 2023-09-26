
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', sendForm);


function sendForm(event) {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;

    if (!email.value.trim() || !password.value.trim()) {
        return alert('Please fill in all the fields!');
      } 
      else {
        const formData = {
          email: email.value,
          password: password.value,
        };
        console.log(formData);
        event.currentTarget.reset();
      }
}

