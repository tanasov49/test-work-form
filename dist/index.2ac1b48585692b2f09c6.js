/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

var reg = /(?:\s|^)[A-Za-z0-9\-\.\_]+(?:\s|$)/;
var password = document.querySelector('.form-change-password__input_password');
var confirmPassword = document.querySelector('.form-change-password__input_password-confirm');
var showInputError = function showInputError(formElement, inputElement, errorMessage) {
  var errorElement = formElement.querySelector(".".concat(inputElement.name, "-error"));
  inputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__input-error_active');
};
var hideInputError = function hideInputError(formElement, inputElement) {
  var errorElement = formElement.querySelector(".".concat(inputElement.name, "-error"));
  inputElement.classList.remove('form__input_type_error');
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
};
var showPlaceholderInput = function showPlaceholderInput(formElement, inputElement) {
  var errorElement = formElement.querySelector(".".concat(inputElement.name, "-placeholder"));
  errorElement.classList.remove('form-change-password__placeholder_disable');
};
var hidePlaceholderInput = function hidePlaceholderInput(formElement, inputElement) {
  var errorElement = formElement.querySelector(".".concat(inputElement.name, "-placeholder"));
  errorElement.classList.add('form-change-password__placeholder_disable');
};
var checkInputValidity = function checkInputValidity(formElement, inputElement) {
  if (inputElement.name === 'login') {
    if (inputElement.value === '') {
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
    } else if (!reg.test(inputElement.value)) {
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
var setEventListeners = function setEventListeners(formElement) {
  var inputList = Array.from(formElement.querySelectorAll('.form-change-password__input'));
  var buttonElement = formElement.querySelector('.form-change-password__submit');
  inputList.forEach(function (inputElement) {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
  toggleButtonState(inputList, buttonElement);
};
var enableValidation = function enableValidation() {
  var formList = Array.from(document.querySelectorAll('.form-change-password'));
  formList.forEach(function (formElement) {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};
var hasInvalidInput = function hasInvalidInput(inputList) {
  return inputList.some(function (inputElement) {
    return !inputElement.validity.valid;
  });
};
var toggleButtonState = function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('form-change-password__submit_disable');
  } else {
    buttonElement.classList.remove('form-change-password__submit_disable');
  }
};
enableValidation();
/******/ })()
;