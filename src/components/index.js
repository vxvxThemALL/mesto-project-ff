import '../styles/index.css';
import { createCard, cardRemove } from './card.js';
import { openPopup, closePopup } from './modal.js';
import { enableValidation, clearValidation } from './validation.js'
import { getInitialCards, getUser, editProfileInfo, postNewCard } from './api.js';

export let profileId = '';

const cardsContainer = document.querySelector('.places__list');

const closeButtons = document.querySelectorAll('.popup__close');
const popups = document.querySelectorAll('.popup')

const profileEditButton = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup_type_edit');
const profileName = document.querySelector('.profile__title');
const profileDesc = document.querySelector('.profile__description');
const editForm = editPopup.querySelector('.popup__form');
const inputNameFormProfile = editForm.querySelector('.popup__input_type_name');
const inputDescFormProfile = editForm.querySelector('.popup__input_type_description');

const newCardButton = document.querySelector('.profile__add-button');
const newCardPopup = document.querySelector('.popup_type_new-card');
const newCardForm = newCardPopup.querySelector('.popup__form');
const inputNameNewCard = newCardForm.querySelector('.popup__input_type_card-name');
const inputUrlNewCard = newCardForm.querySelector('.popup__input_type_url');

const cardOverview = document.querySelector('.popup_type_image');
const cardOverviewImage = cardOverview.querySelector('.popup__image');
const cardOverviewDesc = cardOverview.querySelector('.popup__caption');

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}

const addCard = (cardElement) => {
  cardsContainer.appendChild(cardElement);
}

const addCardToBeginning = (cardElement) => {
  const firstChild = cardsContainer.firstChild;
  cardsContainer.insertBefore(cardElement, firstChild);
}

const cardImageListener = (e) => {
  const image = e.target;
  cardOverviewImage.src = image.src;
  cardOverviewDesc.textContent = image.alt;
  openPopup(cardOverview);
}

profileEditButton.addEventListener('click', () => {
  openPopup(editPopup);
  editFormDefault();
  clearValidation(editForm, validationConfig);
});

newCardButton.addEventListener('click', () => {
  openPopup(newCardPopup);
  clearValidation(newCardForm, validationConfig);
});

closeButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const popup = e.target.closest('.popup_is-opened');
    closePopup(popup);
  })
})

popups.forEach((popup) => {
  popup.addEventListener('click', (e) => {
    const isClickInsidePopupContent = e.target.closest('.popup__content');
    if  (!isClickInsidePopupContent && popup.classList.contains('popup_is-opened')) {
      closePopup(popup)
    }
  })
})

const editFormDefault = () => {
  inputNameFormProfile.value = profileName.textContent;
  inputDescFormProfile.value = profileDesc.textContent;
}

const setProfileInfo = (profileData) => {
  profileName.textContent = profileData.name;
  profileDesc.textContent = profileData.about;
  profileId = profileData._id;
}

const handleEditFormSubmit = (e) => {
  e.preventDefault();
  profileName.textContent = inputNameFormProfile.value;
  profileDesc.textContent = inputDescFormProfile.value;
  editProfileInfo(inputNameFormProfile.value, inputDescFormProfile.value)
  closePopup(editPopup);
}

editForm.addEventListener('submit', handleEditFormSubmit);

const addNewCard = (e) => {
  e.preventDefault();
  const cardInfo = {
    name: inputNameNewCard.value,
    link: inputUrlNewCard.value
  }
  postNewCard(cardInfo.name, cardInfo.link)
    .then((card) => {
      const newCard = createCard(card, cardRemove, cardImageListener, profileId); 
      addCardToBeginning(newCard);
      newCardForm.reset();
      closePopup(newCardPopup);
    })
    .catch((err) => {
      console.log(err);
    });
}

newCardForm.addEventListener('submit', addNewCard);

enableValidation(validationConfig)

Promise.all([getInitialCards(), getUser()])
  .then(([cards, user]) => {
    setProfileInfo(user);
    cards.forEach((cardData) => {
      const card = createCard(cardData, cardRemove, cardImageListener, profileId);
      addCard(card);
    });
})
  .catch((err) => {
    console.log(err);
  });