
const store = require('./store')

const config = require('./config.js')

// THIS IS AUTH API
const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: data
  })
}

const changePassword = function (data) {
  console.log('user is ', store.user)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const signOut = function (data) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// THIS IS RESOURCES

const createContent = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/contents',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// THIS IS SHOW RESOURCE HANDLEBARS

const showContents = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/contents',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// THIS IS SHOW OPEN RESOURCE HANDLEBARS

const showContentsOp = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/contents',
    data: data
  })
}

const deleteContents = (contentsId) => {
  return $.ajax({
    url: config.apiUrl + '/contents/' + contentsId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateContents = (contentsId, data) => {
  return $.ajax({
    url: config.apiUrl + '/contents/' + contentsId,
    method: 'PATCH',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createContent,
  showContents,
  showContentsOp,
  deleteContents,
  updateContents
}
