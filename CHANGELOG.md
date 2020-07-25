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

In v0.4 I added some extra features to the dorms page. Changes can be seen in the files in the dorms folder and in app.module.js

## Bug Fixes

no new bug fixes in this version

## Contributors

Mark Cheng

## Features

* Main changes can be found on the Dorms page which can be navigated to through the tabs bar.
* User can now interact with theme buttoms at the top of the dorms page to customize their experience!
* Clicking the theme buttoms will change colors of the dorms list to make the information more appealing to the user (because I did not consult Josh on his theme color, there is also an alert stating such informtion when Josh's Theme is selected)
* There is also a small map icon under the theme tabs which is clickable.
* If the user clicks the map icon, a large map of campus will pop up on the screen for the user to locate dorms if they so choose. To close the map, the user needs to click the "x" at the top right-hand corner of the page when the map is enlarged.
* changes in the code can be found in the dorms folder inside the components folder and in app.module.js
