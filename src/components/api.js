const config = {
  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-9/',
  headers: {
    authorization: '406720eb-77f9-418f-ad2a-325463878595',
    'Content-Type': 'application/json',
  }
}

const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

const request = (endpoint, options) => {
  const completeUrl = config.baseUrl + endpoint;
  return fetch(completeUrl, options).then(handleResponse)
}

const getInitialCards = () => {
  return request('/cards', {
    headers: config.headers
  });
}

const getUser = () => {
  return request('/users/me', {
    headers: config.headers
  });
}

const editProfileInfo = (newName, newDesc) => {
  return request('/users/me', {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: `${newName}`,
      about: `${newDesc}`
    })
  });
}

const postNewCard = (name, url) => {
  return request('/cards', {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: `${name}`,
      link: `${url}`
    })
  });
}

const deleteCard = (cardId) => {
  return request(`/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
  });
}

const addLike = (cardId) => {
  return request(`/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers
  });
}

const removeLike = (cardId) => {
  return request(`/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
  });
}

const setAvatar = (url) => {
  return request(`/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: `${url}`,
    })
  },);
}

export { getInitialCards, getUser, editProfileInfo, postNewCard, deleteCard, addLike, removeLike, setAvatar }
