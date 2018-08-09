
const api = require('./api')
const ui = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields.js')

// THIS IS AUTH EVENTS

const onFormSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFail)
  console.log(data)
}

const onFormSignIn = function (event) {
  event.preventDefault()
  // console.log(event)
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFail)
  console.log(data)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log(data)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFail)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFail)
}

// THIS IS RESOURCE EVENTS

const onCreateContent = function (event) {
  event.preventDefault()
  // console.log(event)
  const data = getFormFields(event.target)
  api.createContent(data)
    .then(ui.createContentSuccess)
    .catch(ui.createContentFail)
  console.log(data)
}

// THIS IS HANDLEBARS FOR LISTING RESOURCE

const onShowAllContents = function (event) {
  // console.log('onShowAllContents')
  // console.log(contents)
  event.preventDefault()
  api.showContents()
    .then(ui.showContentsSuccess)
    .catch(ui.showContentsFail)
}

// THIS IS HANDLEBARS FOR OPEN READ LISTING RESOURCE

const onShowAllContentsOp = function () {
  // console.log('onShowAllContents')
  // console.log(contents)
  // preventDefault()
  api.showContentsOp()
    .then(ui.showContentsOpSuccess)
    .catch(ui.showContentsOpFail)
}

// THIS IS FOR DELETING A CONTENT ON RESOURCE

const onDeleteShownContents = (event) => {
  event.preventDefault()
  console.log(onDeleteShownContents)
  const contentsId = $(event.target).closest('button').attr('data-id')
  console.log(contentsId)
  api.deleteContents(contentsId)
    .then(() => onShowAllContents(event))
    .catch(ui.showContentsFail)
}

// THIS IS FOR UPDATING A CONTENT ON RESOURCE

const onUpdateShownContents = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const contentsId = $(event.target).attr('data-id')
  console.log(contentsId)
  api.updateContents(contentsId, data)
    .then(() => onShowAllContents(event))
    .catch(ui.updateContentsFail)
}

module.exports = {
  onFormSignUp,
  onFormSignIn,
  onChangePassword,
  onSignOut,
  onCreateContent,
  onShowAllContents,
  onShowAllContentsOp,
  onDeleteShownContents,
  onUpdateShownContents
}
