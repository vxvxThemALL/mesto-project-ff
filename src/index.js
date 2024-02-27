import './styles/index.css';
import { initialCards } from './components/cards.js';
//CARD
const cardsContainer = document.querySelector('.places__list');
const cardTemplate = document.getElementById('card-template');

//MODALS
const popups = document.querySelectorAll('.popup');
const popupCloseButtons = document.querySelectorAll('.popup__close');
const popupEdit = document.querySelector('.popup_type_edit')
const popupEditOpenButton = document.querySelector('.profile__edit-button')
const popupNewCard = document.querySelector('.popup_type_new-card')
const popupNewCardButton = document.querySelector('.profile__add-button');
const popupImage = document.querySelector('.popup_type_image');
const cardImage = document.querySelectorAll('.card__image');

//CARD
function createCard(cardData, onDeleteCallBack) {
  const cardElement = cardTemplate.content.querySelector('.places__item').cloneNode(true);

  const cardTitle = cardElement.querySelector('.card__title');
  cardTitle.textContent = cardData.name;

  const cardPic = cardElement.querySelector('.card__image');
  cardPic.src = cardData.link;
  cardPic.alt = cardData.name;

  const deleteButton = cardElement.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', () => {
  onDeleteCallBack(cardElement);
  })

  return cardElement;
}

const cardRemove = (cardElement) => {
  cardElement.remove();
}

function addCard(cardElement) {
  cardsContainer.appendChild(cardElement);
}

initialCards.forEach((cardData) => {
  const card = createCard(cardData, cardRemove);
  addCard(card);
});
//CARD END

// MODALS
const popupOpener = (anyPopup) => {
  anyPopup.classList.add('popup_is-opened');
}

popupEditOpenButton.addEventListener('click', () => popupOpener(popupEdit));
popupNewCardButton.addEventListener('click', () => popupOpener(popupNewCard));
cardImage.forEach((image) => {
  image.addEventListener('click', () => {
    popupOpener(popupImage);
  })
})

popupCloseButtons.forEach((closeButtons) => {
  closeButtons.addEventListener('click', () => {
    popups.forEach((popup) => {
      if (popup.classList.contains('popup_is-opened'))
      popup.classList.remove('popup_is-opened');
    })
  })
})
