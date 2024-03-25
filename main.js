(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-9/",headers:{authorization:"406720eb-77f9-418f-ad2a-325463878595","Content-Type":"application/json"}},t=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},n=document.getElementById("card-template");function r(e,t,r,a){var i=n.content.querySelector(".places__item").cloneNode(!0),u=i.querySelector(".card__title"),l=i.querySelector(".card__image"),s=i.querySelector(".card__delete-button"),p=i.querySelector(".card__like-button"),d=i.querySelector(".card__like-counter"),f=e._id,_=e.likes.some((function(e){return e._id===a}));return u.textContent=e.name,l.src=e.link,l.alt=e.name,l.addEventListener("click",r),d.textContent=e.likes.length,a===e.owner._id&&(s.classList.add("card__delete-button_is-active"),s.addEventListener("click",(function(){o(i,f)}))),p.addEventListener("click",(function(){c(d,p,f)})),_&&p.classList.add("card__like-button_is-active"),i}var o=function(n,r){var o;(o=r,fetch("".concat(e.baseUrl,"/cards/").concat(o),{method:"DELETE",headers:e.headers}).then(t)).then((function(){n.remove()})).catch((function(e){console.log(e)}))},c=function(n,r,o){var c;r.classList.contains("card__like-button_is-active")?(c=o,fetch("".concat(e.baseUrl,"/cards/likes/").concat(c),{method:"DELETE",headers:e.headers}).then(t)).then((function(e){r.classList.toggle("card__like-button_is-active"),n.textContent=e.likes.length})).catch((function(e){console.log(e)})):function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:e.headers}).then(t)}(o).then((function(e){r.classList.toggle("card__like-button_is-active"),n.textContent=e.likes.length})).catch((function(e){console.log(e)}))},a=function(e){e.classList.add("popup_is-opened","popup_is-animated"),document.addEventListener("keydown",u)},i=function(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",u)},u=function(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");i(t)}},l=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""},s=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))},p=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){l(e,n,t)})),s(n,r,t)};function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var f="",_=document.querySelector(".places__list"),y=document.querySelectorAll(".popup__close"),m=document.querySelectorAll(".popup"),v=document.querySelector(".profile__edit-button"),h=document.querySelector(".popup_type_edit"),S=document.querySelector(".profile__title"),b=document.querySelector(".profile__description"),q=h.querySelector(".popup__form"),g=q.querySelector(".popup__input_type_name"),E=q.querySelector(".popup__input_type_description"),C=q.querySelector(".popup__button"),L=document.querySelector(".profile__add-button"),k=document.querySelector(".popup_type_new-card"),A=k.querySelector(".popup__form"),x=A.querySelector(".popup__input_type_card-name"),U=A.querySelector(".popup__input_type_url"),w=A.querySelector(".popup__button"),j=document.querySelector(".popup_type_image"),B=j.querySelector(".popup__image"),O=j.querySelector(".popup__caption"),T=document.querySelector(".popup_type_avatar"),D=document.querySelector(".profile__image"),P=T.querySelector(".popup__form"),I=P.querySelector(".popup__input_type_avatar"),N=P.querySelector(".popup__button"),J={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},M=function(e,t,n,r){t.textContent=e?n:r},H=function(e){var t=e.target;B.src=t.src,O.textContent=t.alt,a(j)};v.addEventListener("click",(function(){a(h),V(),p(q,J)})),D.addEventListener("click",(function(){a(T),p(P,J)})),L.addEventListener("click",(function(){a(k),p(A,J)})),y.forEach((function(e){e.addEventListener("click",(function(e){var t=e.target.closest(".popup_is-opened");i(t)}))})),m.forEach((function(e){e.addEventListener("click",(function(t){!t.target.closest(".popup__content")&&e.classList.contains("popup_is-opened")&&i(e)}))}));var V=function(){g.value=S.textContent,E.value=b.textContent};P.addEventListener("submit",(function(n){var r;n.preventDefault(),D.setAttribute("style","background-image: url('".concat(I.value,"');")),M(!0,N,"Сохранение...","Сохранить"),(r=I.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:"".concat(r)})}).then(t)).finally((function(){return M(!1,N,"Сохранение...","Сохранить")})),P.reset(),i(T)})),q.addEventListener("submit",(function(n){var r,o;n.preventDefault(),S.textContent=g.value,b.textContent=E.value,M(!0,C,"Сохранение...","Сохранить"),(r=g.value,o=E.value,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:"".concat(r),about:"".concat(o)})}).then(t)).finally((function(){return M(!1,C,"Сохранение...","Сохранить")})),i(h)})),A.addEventListener("submit",(function(n){n.preventDefault();var o,c,a={name:x.value,link:U.value};M(!0,w,"Создание...","Создать"),(o=a.name,c=a.link,fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:"".concat(o),link:"".concat(c)})}).then(t)).then((function(e){var t,n;t=r(e,0,H,f),n=_.firstChild,_.insertBefore(t,n),A.reset()})).catch((function(e){console.log(e)})).finally((function(){return M(!1,w,"Создание...","Создать")})),i(k)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);s(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity("Разрешены только латинские и кириллические буквы, знаки дефиса и пробелы."):t.setCustomValidity(""),t.validity.valid?l(e,t,n):function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(n.inputErrorClass),r.textContent=t.validationMessage,r.classList.add(n.errorClass)}(e,t,n)}(e,o,t),s(n,r,t)}))}))}(t,e)}))}(J),Promise.all([fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then(t),fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then(t)]).then((function(e){var t,n,o,c=(o=2,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,i=[],u=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return i}}(n,o)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=c[0],i=c[1];t=i,S.textContent=t.name,b.textContent=t.about,f=t._id,function(e){D.setAttribute("style","background-image: url('".concat(e.avatar,"');"))}(i),a.forEach((function(e){var t;t=r(e,0,H,f),_.appendChild(t)}))})).catch((function(e){console.log(e)}))})();