const userForm = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
const userTextarea = userForm.elements.message;
const userEmail = userForm.elements.email;

userForm.addEventListener('input', onFormInput);

function onFormInput(event) {
  const userFormData = {
    email: userEmail.value.trim(),
    message: userTextarea.value.trim(),
  };
  localStorage.setItem(localStorageKey, JSON.stringify(userFormData));
}

const userFormDataParse = JSON.parse(localStorage.getItem(localStorageKey));
if (userFormDataParse && userFormDataParse.email && userFormDataParse.message) {
  userEmail.value = userFormDataParse.email ?? '';
  userTextarea.value = userFormDataParse.message ?? '';
}

userForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  if (userTextarea.value && userEmail.value) {
    console.log(JSON.parse(localStorage.getItem(localStorageKey)));
    localStorage.removeItem(localStorageKey);
    userForm.reset();
  }
}
