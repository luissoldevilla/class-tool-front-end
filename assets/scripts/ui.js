
const store = require('./store')
const showContentsTemplate = require('./templates/content-listing.handlebars')
const showOpContentsTemplate = require('./templates/op-content-listing.handlebars')

// SIGN UP
const signUpSuccess = function (data) {
  $('#user-message-signUp').html('You are Sign Up!').fadeIn().delay(3000).fadeOut()
  document.getElementById('form-signUp').reset()
}

const signUpFail = function (data) {
  document.getElementById('form-signUp').reset()
  $('#user-message-signUp').html('something went wrong, try again!').fadeIn().delay(3000).fadeOut()
}

// SIGN IN

const signInSuccess = function (response) {
  store.user = response.user
  document.getElementById('form-signIn').reset()
  $('#user-message-signIn').html('You are sign In!')
  $('#change-password').show()
  $('#sign-out').show()
  $('.create-content-form').show()
  $('.signup-portal').hide()
  $('#sign-in-button').hide()
  $('.pass-change').show()
  $('#user-message-signOut').html('')
  $('.form-group').hide()
  $('.view-all-content').hide('')
}

const signInFail = function (error) {
  console.error(error)
  document.getElementById('form-signIn').reset()
  $('#user-message-signIn').html('something went wrong, try again!')
}

// CHANGE PASSWORD

const changePasswordSuccess = function (data) {
  document.getElementById('change-password').reset()
  $('#user-message-passwordChange').html('You have changed your password')
}

const changePasswordFail = function (data) {
  document.getElementById('change-password').reset()
  $('#user-message-passwordChange').html('Something went wrong, password not changed')
}

// SIGN OUT

const signOutSuccess = function (data) {
  $('#user-message-signOut').html('You are sign Out!').fadeIn().delay(3000).fadeOut()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#user-message-signIn').html('')
  $('#sign-in-button').show()
  $('.signup-portal').show()
  $('.create-content-form').hide()
  $('.view-all-content').show()
  $('.pass-change').hide()
  $('#question-content').hide()
  $('.form-group').show()
  // showContentsOpSuccess()
  document.getElementById('form-createContent').reset()
  document.getElementById('change-password').reset()
}

const signOutFail = function (data) {
  $('#user-message-signOut').html('Something went wrong')
}

// RESOURCE CREATE BOOK

const createContentSuccess = function (data) {
  $('#create-content-message').html('You have Successfully created your question').fadeIn().delay(3000).fadeOut()
  document.getElementById('form-createContent').reset()
}
const createContentFail = function (data) {
  $('#create-content-message').html('Your question was not successfully created')
}

// SHOW LISTING IF CONTENT

const showContentsSuccess = (data) => {
  if (data.contents.length !== 0) {
    const showContentsHtml = showContentsTemplate({ contents: data.contents })
    $('#question-content').html(showContentsHtml).fadeIn()
  } else {
    $('#question-content').html('You dont have any questions yet').fadeIn().delay(1500).fadeOut()
  }
}

// SHOW OPEN READ LISTING OF CONTENT

const showContentsOpSuccess = (data) => {
  if (data.contents.length !== 0) {
    const showOpContentsHtml = showOpContentsTemplate({ contents: data.contents })
    $('.view-all-content-hbs').html(showOpContentsHtml).fadeIn()
  } else {
    $('.view-all-content-hbs').html('Theres not questions yet').fadeIn().delay(1500).fadeOut()
  }
}

// SHOW ONE CONTENT FORM RESOURCE ERROR

const showContentsFail = (error) => {
  console.error(error)
}

// SHOW ONE OPENE READ CONTENT FORM RESOURCE ERROR

const showContentsOpFail = (error) => {
  console.error(error)
}

// UPDATE ONE CONTENT FORM RESOURCE

module.exports = {
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  changePasswordSuccess,
  changePasswordFail,
  signOutSuccess,
  signOutFail,
  createContentSuccess,
  createContentFail,
  showContentsSuccess,
  showContentsFail,
  showContentsOpSuccess,
  showContentsOpFail
}
