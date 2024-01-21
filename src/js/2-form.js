"use strict";

const form = document.querySelector(".feedback-form");
const emailInput = document.querySelector('[name="email"]');
const messageInput = document.querySelector('[name="message"]');
const STORAGE_KEY = "feedback-form-state";



form.addEventListener('input', () => {
  const data = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim()
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
    email: emailInput.value.trim(),
    message: messageInput.value.trim()
  };


  console.log(data);
  localStorage.removeItem('feedback-form-state');
  form.reset();
  });


