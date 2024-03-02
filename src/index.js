import './styles/index.css';
import { initialCards } from './components/cards.js';
//CARD
const cardsContainer = document.querySelector('.places__list');
const cardTemplate = document.getElementById('card-template');

//MODALS
const popupEdit = document.querySelector('.popup_type_edit')
const popupEditOpenButton = document.querySelector('.profile__edit-button')
const popupNewCard = document.querySelector('.popup_type_new-card')
const popupNewCardButton = document.querySelector('.profile__add-button');
const popupOverview = document.querySelector('.popup_type_image');

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
const cardImageButton = document.querySelectorAll('.card__image');

const popupHandler = (popup) => {
  popup.classList.add('popup_is-opened');
  const closeButton = popup.querySelector('.popup__close');
  const keyHandler = (escKey) => {
    if (escKey.key === 'Escape') {
      popup.classList.remove('popup_is-opened');
      document.removeEventListener('keydown', keyHandler)
    }
  }

  closeButton.addEventListener('click', () => {
      if (popup.classList.contains('popup_is-opened')){
      popup.classList.remove('popup_is-opened');
      }
  })

  popup.addEventListener('click', (event) => {
    const isClickInsidePopupContent = event.target.closest('.popup__content');
    if  (!isClickInsidePopupContent && popup.classList.contains('popup_is-opened')) {
      popup.classList.remove('popup_is-opened');
    }
  })

  document.addEventListener('keydown', keyHandler);
}

cardImageButton.forEach((image) => {
  image.addEventListener('click', () => {
    popupHandler(popupOverview);
    const popupOverviewImage = popupOverview.querySelector('.popup__image');
    const popupOverviewDesc = popupOverview.querySelector('.popup__caption')
    popupOverviewImage.setAttribute('src', image.src);
    popupOverviewImage.setAttribute('alt', image.alt);
    popupOverviewDesc.textContent = image.alt;
  })
})
popupEditOpenButton.addEventListener('click', () => popupHandler(popupEdit));
popupNewCardButton.addEventListener('click', () => popupHandler(popupNewCard));


