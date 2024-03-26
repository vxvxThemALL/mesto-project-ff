const renderLoading = (isLoading, element, defaultStatus='Сохранить', loadingStatus='Сохранение...') => {
  if (isLoading) {
    element.textContent = loadingStatus;
  } else { element.textContent = defaultStatus;
  }
}

const handleSubmit = (request, e, loadingText = 'Сохранение...') => {
  e.preventDefault();

  const submitButton = e.submitter;
  const defaultStatus = submitButton.textContent;

  renderLoading(true, submitButton, defaultStatus, loadingText)
  request()
    .then(() => {
      e.target.reset();
    })
    .catch((err) => {
      console.error(`Ошибка: ${err}`);
    })
    .finally(() => {
      renderLoading(false, submitButton, defaultStatus, loadingText);
    });
}

export { handleSubmit };