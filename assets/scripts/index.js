'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const contentsEvents = require('./events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here

  // LANDING
  $('#sign-out').hide()
  $('#pass-change').hide()
  $('.pass-change').hide()
  $('.create-content-form').hide()
  $('.user-status').hide()
  $(contentsEvents.onShowAllContentsOp)
  $('#sign-out').on('click', contentsEvents.onShowAllContentsOp)

  // AUTH
  $('#form-signUp').on('submit', contentsEvents.onFormSignUp)
  $('#form-signIn').on('submit', contentsEvents.onFormSignIn)
  $('#change-password').on('submit', contentsEvents.onChangePassword)
  $('#sign-out').on('click', contentsEvents.onSignOut)
  // RESOURCE GOES HERE
  $('#form-createContent').on('submit', contentsEvents.onCreateContent)
  $('#get-allContents').on('click', contentsEvents.onShowAllContents)
  $('#question-content').on('click', '.remove-button', contentsEvents.onDeleteShownContents)
  $('#question-content').on('submit', '.form-update-content', contentsEvents.onUpdateShownContents)
})
