const userForm = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-stat';
const userTextarea = userForm.elements.message;
const userEmail = userForm.elements.email;

userForm.addEventListener('input', onFormInput);

function onFormInput(event) {
  const result = {
    email: userEmail.value.trim(),
    message: userTextarea.value.trim(),
  };
  localStorage.setItem(localStorageKey, JSON.stringify(result));
}

const parselResult = JSON.parse(localStorage.getItem(localStorageKey));
userEmail.value = parselResult.email ?? '';
userTextarea.value = parselResult.message ?? '';

userForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  if (userTextarea.value && userEmail.value) {
    console.log(JSON.parse(localStorage.getItem(localStorageKey)));
    localStorage.removeItem(localStorageKey);
    userForm.reset();
  }
}
