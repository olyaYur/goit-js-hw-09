const l=document.querySelector(".feedback-form");l.addEventListener("click",s);function s(e){e.preventDefault();const a=e.currentTarget.elements.email.value;console.log(a);const o=e.currentTarget.elements.message.value;console.log(o),c({emailValue:a,messageValue:o})}const t="tasks";function c(e){const a=localStorage.getItem(t)?JSON.parse(localStorage.getItem(t)):[];a.push(e),localStorage.setItem(t,JSON.stringify(a))}
//# sourceMappingURL=2-form-84b7eec7.js.map