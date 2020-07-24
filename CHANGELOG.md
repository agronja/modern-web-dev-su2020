<a name="v0.2"></a>
## [0.2]

In v0.2 we restructured our code with component architecture and got it to work with gulp.js. UML Diagram and Component tree diagram are in src/img. The Dorms and Events tabs are the main additions for this feature.

## Bug Fixes

fixed errors concerning undefined elements that the gulp file returned

## Contributors

Mark Cheng, Josh Agron

## Features

* Added dorm event submission functionality: You can now submit dorm events!
* Added multiple routed components and dynamic routes
* used parse to retrive and display data stored on a server

<a name="v0.3"></a>
## [0.3]

In v0.3 we added login and registration functionality.

## Bug Fixes

no new bug fixes in this version

## Contributors

Mark Cheng, Josh Agron

## Features

* Users can now log in and log out of the website!
* When registering as a new user, it prompts you for the dorm you currently live in.
* Adding an event is now locked behind a login screen.
* Adding an event no longer prompts for the dorm or the user's name.

<a name="v0.4"></a>
## [0.4]

In v0.4 I gave the website some quality of life changes.

## Bug Fixes

no new bug fixes in this version

## Contributors

Josh Agron

## Features

* Top navigation bar has been changed from a static navbar to a dynamic using an md-fab toolbar (complete with a little hamburger icon)
* Dorms and View Events pages changed from boring lists to cards using md-content
* Dorms now show their crests/Coat of Arms to make each dorm pop a little more (each crest is on the parse database, had to learn how to parse files from there)
