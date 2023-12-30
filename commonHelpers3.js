import"./assets/modulepreload-polyfill-ec808ebb.js";const l=`
<form class="feedback-form" autocomplete="off">
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Submit</button>
</form>
`,s=document.querySelector(".section");s.innerHTML=l;console.log(l);const r=document.querySelector(".feedback-form");r.addEventListener("click",n);function n(e){e.preventDefault();const a=e.currentTarget.elements.email.value;console.log(a);const o=e.currentTarget.elements.message.value;console.log(o),c({emailValue:a,messageValue:o})}const t="tasks";function c(e){const a=localStorage.getItem(t)?JSON.parse(localStorage.getItem(t)):[];a.push(e),localStorage.setItem(t,JSON.stringify(a))}
//# sourceMappingURL=commonHelpers3.js.map
