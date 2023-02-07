import './index.scss';
const formPassword = document.querySelector('.form-change-password');
const loginForm = document.querySelector('.form-change-password__input_login');
const controlForm = document.querySelector('.form-change-password__input_control');
const passwordForm = document.querySelector('.form-change-password__input_password');
const confirmPasswordForm = document.querySelector('.form-change-password__input_password-confirm');

//Переменные ошибок
const errorLogin = document.querySelector('.form-change-password__error_login');

formPassword.addEventListener('submit', e => {
  e.preventDefault();
  checkInputs();
})
const checkInputs = () => {
  const loginValue = loginForm.value.trim();
  setErrors(loginForm, '');
  if (loginValue === '') {
    setErrors('Неверный формат ввода')
  } else {
    setErrors('')
  }
}
const setErrors = (input, message) => {
  errorLogin.textContent = message;
}