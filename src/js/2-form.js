"use strict";

const formLinkAcsess = document.querySelector(".feedback-form");

formLinkAcsess.addEventListener("click", handlerSaveValueFields); 

function handlerSaveValueFields(event){
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

  const STORAGE_KEY = "tasks";


function addToLocalStarage(task){
 const arrayTasks = localStorage.getItem(STORAGE_KEY) ? JSON.parse(localStorage.getItem(STORAGE_KEY)): [];
  arrayTasks.push(task);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(arrayTasks));
};