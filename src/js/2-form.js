const userForm = document.querySelector('.feedback-form');
const userTextarea = userForm.elements.message;
const userEmail = userForm.elements.email;
const localStorageKey = 'feedback-form-state';

userForm.addEventListener('input', onFormInput);
userForm.addEventListener('submit', onFormSubmit);

function onFormInput() {
  const email = userForm.elements.email.value.trim();
  const message = userForm.elements.message.value.trim();
  const userFormData = {
    email,
    message,
  };
  localStorage.setItem(localStorageKey, JSON.stringify(userFormData));
}

const returnedFormData = localStorage.getItem(localStorageKey);
if (returnedFormData) {
  const parsedForm = JSON.parse(returnedFormData);
  userEmail.value = parsedForm.email;
  userTextarea.value = parsedForm.message;
}

function onFormSubmit(event) {
  event.preventDefault();
  if (userTextarea.value.trim() && userEmail.value.trim()) {
    console.log(JSON.parse(localStorage.getItem(localStorageKey)));
    localStorage.removeItem(localStorageKey);
    userForm.reset();
  }
}
