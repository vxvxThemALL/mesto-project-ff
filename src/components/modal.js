export const openPopup = (popup) => {
  popup.classList.add('popup_is-opened', 'popup_is-animated');
  const saveButton = popup.querySelector('.popup__button');
  const closeButton = popup.querySelector('.popup__close');
  const handleEscButtonClose = (esc) => {
    if (esc.key === 'Escape') {
      closePopup(popup);
      document.removeEventListener('keydown', handleEscButtonClose);
    }
  }

  closeButton.addEventListener('click', () => {
    closePopup(popup);
  })

  if (popup.contains(saveButton)) {
  saveButton.addEventListener('click', () => {
    closePopup(popup);
  })}

  popup.addEventListener('click', (evt) => {
    const isClickInsidePopupContent = evt.target.closest('.popup__content');
    if  (!isClickInsidePopupContent && popup.classList.contains('popup_is-opened')) {
      closePopup(popup)
    }
  })

  document.addEventListener('keydown', handleEscButtonClose);
}

const closePopup = (popup) => {
  popup.classList.remove('popup_is-opened');
}
