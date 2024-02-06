const cardsContainer = document.querySelector('.places__list');

function addPlace(cardData, onDeleteCallBack) {
  const cardTemplate = document.getElementById('card-template');
  const cardElement = cardTemplate.content.querySelector('.places__item').cloneNode(true);

  const cardTitle = cardElement.querySelector('.card__title');
  cardTitle.textContent = cardData.name;

  const cardPic = cardElement.querySelector('.card__image');
  cardPic.setAttribute('src', cardData.link);

  cardsContainer.appendChild(cardElement);

  const deleteButton = cardElement.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', () => {
  onDeleteCallBack(cardElement);
  })
}

const cardRemove = (cardElement) => {
  cardElement.remove();
}

initialCards.forEach((cardData) => {
  addPlace(cardData, cardRemove);
});