const openPopup = (popup) => {
  popup.classList.add('popup_is-animated');
  setTimeout(() => {
    popup.classList.add('popup_is-opened');
  }, 1);
  document.addEventListener('keydown', closeEscPopup);
}

const closePopup = (popup) => {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closeEscPopup)
}

const closeEscPopup = (e) => {
  if (e.key === 'Escape') {
    const popup = document.querySelector('.popup_is-opened')
    closePopup(popup);
  }
}

export {openPopup, closePopup, closeEscPopup}
