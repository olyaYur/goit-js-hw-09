"use strict";

const feedbackForm = document.querySelector(".feedback-form");
const btnSubmit = document.querySelector('button');


feedbackForm.addEventListener("input", saveFormInput);
btnSubmit.addEventListener("submit", clearFormSubmit);

function saveFormInput(event){
  event.preventDefault();
  const emailValue = event.currentTarget.elements.email.value;
  console.log(emailValue);
  const messageValue = event.currentTarget.elements.message.value;
  console.log(messageValue);

    // field to object
    const objValue = {
      emailValue,
      messageValue ,
      
    }
    addToLocalStarage(objValue);

  };

  const STORAGE_KEY = "feedback-form-state";


function addToLocalStarage(task){
 const tasks = localStorage.getItem(STORAGE_KEY) ? JSON.parse(localStorage.getItem(STORAGE_KEY)): [];
 
  localStorage.setItem(STORAGE_KEY, JSON.stringify(task));
};


function clearFormSubmit(event){
  event.preventDefault();
  feedbackForm.reset();
}
