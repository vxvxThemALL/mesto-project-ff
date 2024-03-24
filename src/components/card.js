import { deleteCard, addLike, removeLike } from './api.js';

const cardTemplate = document.getElementById('card-template');

export function createCard(cardData, deleteCardCallback, imageHandler, profileId) {
  const cardElement = cardTemplate.content.querySelector('.places__item').cloneNode(true);
  const cardTitle = cardElement.querySelector('.card__title');
  const cardPic = cardElement.querySelector('.card__image');
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const likeButton = cardElement.querySelector('.card__like-button');
  const likeCounter = cardElement.querySelector('.card__like-counter')
  const userId = cardData._id;
  const isLiked = cardData.likes.some((like) => {
    return like._id === profileId
  });

  cardTitle.textContent = cardData.name;

  cardPic.src = cardData.link;
  cardPic.alt = cardData.name;
  cardPic.addEventListener('click', imageHandler);

  likeCounter.textContent = cardData.likes.length
 
  if (profileId === cardData.owner._id) {
    deleteButton.classList.add('card__delete-button_is-active');
    deleteButton.addEventListener('click', () => {
      cardRemove(cardElement, userId);
    })
  }

  likeButton.addEventListener('click', () => {
    likeHandler(likeCounter, likeButton, userId)
  })

  if (isLiked) {
    likeButton.classList.add('card__like-button_is-active')
  }

  return cardElement;
}

export const cardRemove = (cardElement, id) => {
  deleteCard(id)
    .then(() => {
      cardElement.remove();
    })
    .catch((err) => {
      console.log(err);
    });
}

const likeHandler = (likeCounter, likeButton, userId) => {
  if (likeButton.classList.contains('card__like-button_is-active')) {
    removeLike(userId)
      .then((res) => {
        likeButton.classList.toggle('card__like-button_is-active');
        likeCounter.textContent = res.likes.length
      })
      .catch((err) => {
        console.log(err)
      })
  } else {
    addLike(userId)
    .then((res) => {
      likeButton.classList.toggle('card__like-button_is-active');
      likeCounter.textContent = res.likes.length
    })
    .catch((err) => {
      console.log(err);
    });
  }
}

