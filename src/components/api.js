export { getInitialCards, getUser, editProfileInfo, postNewCard, deleteCard, addLike, removeLike, setAvatar }

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


const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
    .then(handleResponse)
}

const getUser = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
    .then(handleResponse)
}

const editProfileInfo = (newName, newDesc) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: `${newName}`,
      about: `${newDesc}`
    })
  },)
    .then(handleResponse)
}

const postNewCard = (name, url) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: `${name}`,
      link: `${url}`
    })
  },)
    .then(handleResponse)
}

const deleteCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
  })
    .then(handleResponse)
}

const addLike = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers
  })
    .then(handleResponse)
}

const removeLike = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
  })
    .then(handleResponse)
}

const setAvatar = (url) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: `${url}`,
    })
  },)
    .then(handleResponse)
}
