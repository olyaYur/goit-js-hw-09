"use strict";

const form = document.querySelector(".feedback-form");
const btnSubmit = document.querySelector('button');
const input = document.querySelector('input');
const STORAGE_KEY = "feedback-form-state";


form.addEventListener('input', event => {
  event.preventDefault();
  const emailValue = event.currentTarget.elements.email.value;
  const messageValue = event.currentTarget.elements.message.value;

    // field to object
    const objValue = {
      email: emailValue,
      message: messageValue,
    }
    console.log(objValue);  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(objValue));
  
})
  form.addEventListener('submit', event =>{
  event.preventDefault();
  console.log(localStorage.getItem(STORAGE_KEY));
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
})

 