import './styles/index.css';
import { createCard, cardRemove } from './components/card.js';
import { openPopup } from './components/modal.js';
import { initialCards } from './components/cards.js';

const cardsContainer = document.querySelector('.places__list');

const profileEditButton = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup_type_edit');
const profileName = document.querySelector('.profile__title');
const profileDesc = document.querySelector('.profile__description');
const editForm = editPopup.querySelector('.popup__form');
const editFormName = editForm.querySelector('.popup__input_type_name');
const editFormDesc = editForm.querySelector('.popup__input_type_description');

const newCardButton = document.querySelector('.profile__add-button');
const newCardPopup = document.querySelector('.popup_type_new-card');
const newCardForm = newCardPopup.querySelector('.popup__form');
const newCardName = newCardForm.querySelector('.popup__input_type_card-name');
const newCardUrl = newCardForm.querySelector('.popup__input_type_url');

const cardOverview = document.querySelector('.popup_type_image');
const cardOverviewImage = cardOverview.querySelector('.popup__image');
const cardOverviewDesc = cardOverview.querySelector('.popup__caption');

const addCard = (cardElement) => {
  cardsContainer.appendChild(cardElement);
}

const addCardToBeginning = (cardElement) => {
  const firstChild = cardsContainer.firstChild;
  cardsContainer.insertBefore(cardElement, firstChild);
}

const cardImageListener = (evt) => {
  const image = evt.target;
  cardOverviewImage.src = image.src;
  cardOverviewDesc.textContent = image.alt;
  openPopup(cardOverview);
}

initialCards.forEach((cardData) => {
  const card = createCard(cardData, cardRemove, cardImageListener);
  addCard(card);
});

profileEditButton.addEventListener('click', () => {
  openPopup(editPopup);
  editFormDefault();
});

newCardButton.addEventListener('click', () => {
  openPopup(newCardPopup);
});

const editFormDefault = () => {
  editFormName.value = profileName.textContent;
  editFormDesc.value = profileDesc.textContent;
}

const editHandleFormSubmit = (evt) => {
  evt.preventDefault();
  profileName.textContent = editFormName.value;
  profileDesc.textContent = editFormDesc.value;
}

editForm.addEventListener('submit', editHandleFormSubmit);

const addNewCard = (evt) => {
  evt.preventDefault();
  const cardInfo = {
    name: newCardName.value,
    link: newCardUrl.value
  }
  const newCard = createCard(cardInfo, cardRemove, cardImageListener); 
  addCardToBeginning(newCard);
  newCardForm.reset();
}

newCardForm.addEventListener('submit', addNewCard);

