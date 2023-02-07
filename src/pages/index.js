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
})
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.add('form-change-password__input_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form-change-password__error_active');
}
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.remove('form-change-password__input_error');
  errorElement.textContent = '';
  errorElement.classList.remove('form-change-password__error_active');
}
const hidePlaceholder = (formElement, inputElement) => {
  const placeholderElement = formElement.querySelector(`.${inputElement.name}-placeholder`);
  placeholderElement.classList.add('form-change-password__placeholder_disable');
}
const showPlaceholder = (formElement, inputElement) => {
  const placeholderElement = formElement.querySelector(`.${inputElement.name}-placeholder`);
  placeholderElement.classList.remove('form-change-password__placeholder_disable');
}
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
    showPlaceholder(formElement, inputElement)
  } else {
    hideInputError(formElement, inputElement)
    hidePlaceholder(formElement, inputElement)
  }
}
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form-change-password__input'));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement)
    })
  })
}
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form-change-password'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault()
    });
    setEventListeners(formElement);
  });
}
enableValidation()