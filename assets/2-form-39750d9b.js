const t=document.querySelector(".feedback-form");document.querySelector("button");document.querySelector("input");const o="feedback-form-state";t.addEventListener("input",e=>{e.preventDefault();const l=e.currentTarget.elements.email.value,r=e.currentTarget.elements.message.value,a={email:l,message:r};console.log(a),localStorage.setItem(o,JSON.stringify(a))});t.addEventListener("submit",e=>{e.preventDefault(),console.log(localStorage.getItem(o)),localStorage.removeItem(o),t.reset()});
//# sourceMappingURL=2-form-39750d9b.js.map
