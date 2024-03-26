import '../styles/index.css';
import {
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
} from './utils/constants.js';
import { createCard } from './card.js';
import { openPopup, closePopup } from './modal.js';
import { enableValidation, clearValidation } from './validation.js'
import { getInitialCards, getUser, editProfileInfo, postNewCard, setAvatar } from './api.js';
import { handleSubmit } from './utils/utils.js';

let profileId = '';

const renderCard = (item, method = "prepend") => {
  const cardElement = createCard(item, cardImageHandler, profileId)
  cardsContainer[ method ](cardElement)
}

const addCardToBeginning = (cardElement) => {
  const firstChild = cardsContainer.firstChild;
  cardsContainer.insertBefore(cardElement, firstChild);
}

const cardImageHandler = (e) => {
  const image = e.target;
  cardOverviewImage.src = image.src;
  cardOverviewImage.alt = image.alt;
  cardOverviewDesc.textContent = image.alt;
  openPopup(cardOverview);
}

profileEditButton.addEventListener('click', () => {
  openPopup(editPopup);
  editFormDefault();
  clearValidation(editForm, validationConfig);
});

avatarImage.addEventListener('click', () => {
  openPopup(avatarPopup);
  clearValidation(avatarForm, validationConfig);
})

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

const setProfileAvatar = (profileData) => {
  avatarImage.setAttribute('style', `background-image: url('${profileData.avatar}');`)
}

const handleAvatarFormSubmit = (e) => {
  function makeRequest() {
    return setAvatar(inputAvatar.value).then(() => {
      avatarImage.setAttribute('style', `background-image: url('${inputAvatar.value}');`);
      closePopup(avatarPopup);
    });
  }
  handleSubmit(makeRequest, e);
}

const handleEditFormSubmit = (e) => {
  function makeRequest() {
    return editProfileInfo(inputNameFormProfile.value, inputDescFormProfile.value).then((profileId) => {
      profileName.textContent = profileId.name;
      profileDesc.textContent = profileId.about;
      closePopup(editPopup);
    });
  }
  handleSubmit(makeRequest, e);
}

const addNewCard = (e) => {
  const cardInfo = {
    name: inputNameNewCard.value,
    link: inputUrlNewCard.value
  }
  function makeRequest() {
    return postNewCard(cardInfo.name, cardInfo.link).then((card) => {
      const newCard = createCard(card, cardImageHandler, profileId); 
      addCardToBeginning(newCard);
      closePopup(newCardPopup);
    });
  }
  handleSubmit(makeRequest, e, 'Создание...');
}

avatarForm.addEventListener('submit', handleAvatarFormSubmit);
editForm.addEventListener('submit', handleEditFormSubmit);
newCardForm.addEventListener('submit', addNewCard);

enableValidation(validationConfig)

Promise.all([getInitialCards(), getUser()])
  .then(([cards, user]) => {
    setProfileInfo(user);
    setProfileAvatar(user);
    cards.forEach((cardData) => {
      renderCard(cardData, 'append')
    });
})
  .catch((err) => {
    console.log(err);
  });