import"./assets/styles-20b15a51.js";const e=document.querySelector(".feedback-form"),r=e.elements.message,s=e.elements.email,a="feedback-form-state";e.addEventListener("input",l);e.addEventListener("submit",c);function l(){const t=e.elements.email.value.trim(),m=e.elements.message.value.trim(),n={email:t,message:m};localStorage.setItem(a,JSON.stringify(n))}const o=localStorage.getItem(a);if(o){const t=JSON.parse(o);s.value=t.email,r.value=t.message}function c(t){t.preventDefault(),r.value.trim()&&s.value.trim()&&(console.log(JSON.parse(localStorage.getItem(a))),localStorage.removeItem(a),e.reset())}
//# sourceMappingURL=commonHelpers2.js.map