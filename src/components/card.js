const cardTemplate = document.getElementById('card-template');

export function createCard(cardData, onDeleteCallBack, imageHandler) {
  const cardElement = cardTemplate.content.querySelector('.places__item').cloneNode(true);
  const likeButton = cardElement.querySelector('.card__like-button');

  const cardTitle = cardElement.querySelector('.card__title');
  cardTitle.textContent = cardData.name;

  const cardPic = cardElement.querySelector('.card__image');
  cardPic.src = cardData.link;
  cardPic.alt = cardData.name;
  cardPic.addEventListener('click', imageHandler);

  const deleteButton = cardElement.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', () => {
  onDeleteCallBack(cardElement);
  })

  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('card__like-button_is-active');
  })

  return cardElement;
}

export const cardRemove = (cardElement) => {
  cardElement.remove();
}


