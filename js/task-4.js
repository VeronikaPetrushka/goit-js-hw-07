const loginForm = document.querySelector(".login - form");
loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (login === "" || password === "") {
    return console.log("All form fields must be filled in");
  }

  const emailValue = trim(email.value);
  const passwordValue = trim(password.value);

  console.log(`Email: ${emailValue}, Password: ${passwordValue}`);
  form.reset();
}
