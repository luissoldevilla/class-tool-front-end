![Ask Class Logo](https://i.imgur.com/9a90nYW.png)

# AskClass! Client Side

  Client-side repo for full stack web application. The application purpose is
  to allow users(students) to ask questions to the teachers.

## The Idea

The reason I decided to make this application was that I used to be a tutor
after school back in high school, and often I had students not getting the
concept of what was happening in class, and most of those times, I would asked
them if they were participating in class, and they didn't, and I would asked
them "why?" and they're answer was that they had anxiety, or the class wasn't
interactive enough, so that's the problem im trying to solve and the main
purpose behind it.


## User Stories

User Stories:
- As a user I want to create questions
- As a user I want to view my questions
- As a user I want to delete my quesitons
- As a user I want to update my question
- As a user(teacher) I want to delete students quesitons
- As a user I want to choose my role of a student or teacher

## Wireframes:
![Image of Wirerframes](https://i.imgur.com/50C6vrD.png)

## Planning

The way I approached my project was to focus on the backend first , once that was
done,  I started with the Client side.  I built the front end first based on MVP.
These meant that I focus on Auth and the main MVP events (CRUD), such as
`create question form`, `show`, `deleted` and `update` function based on handlebars.
After that, I started to focus on the appearance, I utilize Bootstrap for this,
I customized a top/ sign-in bar as well as modals.

## Technology Used:

The main front-end framework is built on Javascript, HTML5, and CSS. Utilizing
Bootstrap also takes part in building the client side, this can include the
Sign-In navigation bar, as well as the effects on the buttons when hovering over.
Bootstrap also allow me to use modals in different sections of the client, such
as the Sign-up and Change Password. Another big part of my client side is
utilizing Handlebars, these, are used for displaying the user quesitons once
created, they are also attached to my API.


## Future iterations

### V2
- User has property named “teacher” which is true or false.
- On sign up form, select Teacher or Student.
- If Teacher then brought to Index to view questions
- Allow Teach to delete once they have answered.

### V3
- Teacher can respond with an answer in the application and mark it as done.

## API

[For Backend Repo click here](https://github.com/luissoldevilla/class-tool-rails-api)

## Deployed Links:

- [Client](https://luissoldevilla.github.io/class-tool-front-end/)
- [Backend](https://quiet-ravine-35247.herokuapp.com/)

## Additional Resources

- [The Pomodoro Technique](https://lifehacker.com/productivity-101-a-primer-to-the-pomodoro-technique-1598992730)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
