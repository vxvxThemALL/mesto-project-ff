(()=>{"use strict";var e=document.querySelector(".places__list"),t=document.getElementById("card-template"),n=function(e){e.remove()};[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(r){var a,s=function(e,n){var r=t.content.querySelector(".places__item").cloneNode(!0);r.querySelector(".card__title").textContent=e.name;var a=r.querySelector(".card__image");return a.src=e.link,a.alt=e.name,r.querySelector(".card__delete-button").addEventListener("click",(function(){n(r)})),r}(r,n);a=s,e.appendChild(a)}))})();