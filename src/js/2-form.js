"use strict";

const form = document.querySelector(".feedback-form");
const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');
const STORAGE_KEY = "feedback-form-state";

form.addEventListener('input', () => {
  const data = {
    email: emailInput.value,
    message: messageInput.value
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
});


window.addEventListener('DOMContentLoaded', () => {
  const storedData = localStorage.getItem('feedback-form-state');
  if (storedData) {
    const { email, message } = JSON.parse(storedData);
    emailInput.value = email;
    messageInput.value = message;
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const data = {
    email: emailInput.value,
    message: messageInput.value
  };


  console.log(data);
  localStorage.removeItem('feedback-form-state');
  form.reset();
  });


