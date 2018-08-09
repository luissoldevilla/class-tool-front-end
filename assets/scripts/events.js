
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
}

const onFormSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFail)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
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
  const data = getFormFields(event.target)
  api.createContent(data)
    .then(ui.createContentSuccess)
    .catch(ui.createContentFail)
}

// THIS IS HANDLEBARS FOR LISTING RESOURCE

const onShowAllContents = function (event) {
  event.preventDefault()
  api.showContents()
    .then(ui.showContentsSuccess)
    .catch(ui.showContentsFail)
}

// THIS IS HANDLEBARS FOR OPEN READ LISTING RESOURCE

const onShowAllContentsOp = function () {
  api.showContentsOp()
    .then(ui.showContentsOpSuccess)
    .catch(ui.showContentsOpFail)
}

// THIS IS FOR DELETING A CONTENT ON RESOURCE

const onDeleteShownContents = (event) => {
  event.preventDefault()
  const contentsId = $(event.target).closest('button').attr('data-id')
  api.deleteContents(contentsId)
    .then(() => onShowAllContents(event))
    .catch(ui.showContentsFail)
}

// THIS IS FOR UPDATING A CONTENT ON RESOURCE

const onUpdateShownContents = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const contentsId = $(event.target).attr('data-id')
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
