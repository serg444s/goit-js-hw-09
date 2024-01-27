const form = document.querySelector('.feedback-form');
const textarea = form.elements.message;
const email = form.elements.email;
const localStorageKey = 'feedback-form-stat';

textarea.value = localStorage.getItem(localStorageKey.message) ?? '';
email.value = localStorage.getItem(localStorageKey.email) ?? '';

form.addEventListener('input', event => {
  localStorage.setItem(
    localStorageKey.email,
    event.currentTarget.elements.email.value
  );
  localStorage.setItem(
    localStorageKey.message,
    event.currentTarget.elements.message.value
  );
});

console.log(localStorage);

form.addEventListener('submit', event => {
  if (textarea.value && email.value) {
    event.preventDefault();
    console.log(localStorageKey);
    localStorage.removeItem(localStorageKey);
    form.reset();
  }
});
