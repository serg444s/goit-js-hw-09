const form = document.querySelector('.feedback-form');
const textarea = form.elements.message;
const email = form.elements.email;
const localStorageKey = 'feedback-form-state';
console.log(localStorageKey);

form.addEventListener('input', evt => {
  localStorage.setItem(localStorageKey.email, evt.target.elements.email.value);
  localStorage.setItem(
    localStorageKey.message,
    evt.target.elements.message.value
  );
});

textarea.value = localStorage.getItem(localStorageKey.message) ?? '';
email.value = localStorage.getItem(localStorageKey.email) ?? '';

form.addEventListener('submit', evt => {
  evt.preventDefault();
  console.log(evt.target.elements.message.value);
  console.log(evt.target.elements.email.value);

  localStorage.removeItem(localStorageKey);
  form.reset();
});
