import './index.scss';
const reg = /(?:\s|^)[A-Za-z0-9\-\.\_]+(?:\s|$)/;
const password = document.querySelector('.form-change-password__input_password');
const confirmPassword = document.querySelector('.form-change-password__input_password-confirm');
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__input-error_active');
}
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.remove('form__input_type_error');
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
};
const showPlaceholderInput = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.name}-placeholder`);
  errorElement.classList.remove('form-change-password__placeholder_disable');
}
const hidePlaceholderInput = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.name}-placeholder`);
  errorElement.classList.add('form-change-password__placeholder_disable');
}
const checkInputValidity = (formElement, inputElement) => {
  if (inputElement.name === 'login') {
    if(inputElement.value === '') {
      showInputError(formElement, inputElement, 'Поле не может быть пустым');
      showPlaceholderInput(formElement, inputElement);
    } else if (inputElement.value.length <= 2) {
      showInputError(formElement, inputElement, 'Не менее двух знаков');
      hidePlaceholderInput(formElement, inputElement);
    } else if (!reg.test(inputElement.value) && inputElement.validity.valid) {
      showInputError(formElement, inputElement, 'Только латинскими буквами и цифрами');
      hidePlaceholderInput(formElement, inputElement);
    } else {
      hideInputError(formElement, inputElement);
      hidePlaceholderInput(formElement, inputElement);
    }
  }
  if (inputElement.name === 'control') {
    if (inputElement.value === '') {
      showInputError(formElement, inputElement, 'Поле не может быть пустым');
      showPlaceholderInput(formElement, inputElement);
    } else if (inputElement.value !== 'promo' && inputElement.validity.valid) {
      showInputError(formElement, inputElement, 'Неверное контрольное слово');
      hidePlaceholderInput(formElement, inputElement);
    } else {
      hideInputError(formElement, inputElement);
      hidePlaceholderInput(formElement, inputElement);
      inputElement.validity.valid;
    }
  }
  if (inputElement.name === 'password') {
    if (inputElement.value === '') {
      showInputError(formElement, inputElement, 'Поле не может быть пустым');
      showPlaceholderInput(formElement, inputElement);
    } else if (inputElement.value.length < 6) {
      showInputError(formElement, inputElement, 'Пароль должен быть не менее 6 символов');
      hidePlaceholderInput(formElement, inputElement);
      }
      else if (!reg.test(inputElement.value)) {
      showInputError(formElement, inputElement, 'Только латинскими буквами и цифрами');
      hidePlaceholderInput(formElement, inputElement);
    } else {
      hideInputError(formElement, inputElement);
      hidePlaceholderInput(formElement, inputElement);
    }
  }
  if (inputElement.name === 'password-confirm') {
    if (password.value != confirmPassword.value) {
      showInputError(formElement, inputElement, 'Пароли не совпадают');
      hidePlaceholderInput(formElement, inputElement);
    } else if (confirmPassword.value === '') {
      showPlaceholderInput(formElement, inputElement);
    } else if (password.value === confirmPassword.value) {
      hideInputError(formElement, inputElement);
      hidePlaceholderInput(formElement, inputElement);
    }
  }
};
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form-change-password__input'));
  const buttonElement = formElement.querySelector('.form-change-password__submit');
  
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
  toggleButtonState(inputList, buttonElement);
};
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form-change-password'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
}); 
}
const hasInvalidInput = (inputList) => {
  return inputList.some(inputElement => !inputElement.validity.valid);
}
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('form-change-password__submit_disable');
  } else {
    buttonElement.classList.remove('form-change-password__submit_disable');
  }
}
enableValidation();
