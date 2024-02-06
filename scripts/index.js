const cardsContainer = document.querySelector('.places__list');
const cardTemplate = document.getElementById('card-template');

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