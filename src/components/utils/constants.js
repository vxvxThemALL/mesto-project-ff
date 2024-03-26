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

const avatarPopup = document.querySelector('.popup_type_avatar');
const avatarImage = document.querySelector('.profile__image');
const avatarForm = avatarPopup.querySelector('.popup__form');
const inputAvatar = avatarForm.querySelector('.popup__input_type_avatar')

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}

export {
  cardsContainer,
  closeButtons,
  popups,
  profileEditButton,
  editPopup,
  profileName,
  profileDesc,
  editForm,
  inputNameFormProfile,
  inputDescFormProfile,
  newCardButton,
  newCardPopup,
  newCardForm,
  inputNameNewCard,
  inputUrlNewCard,
  cardOverview,
  cardOverviewImage,
  cardOverviewDesc,
  avatarPopup,
  avatarImage,
  avatarForm,
  inputAvatar,
  validationConfig
}