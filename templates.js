angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('./root.html','<!--template for the tabs on the site that the user can travel among-->\r\n<div class="root">\r\n  <!-- This is what the menu used to look like\r\n  <header class="header">\r\n    <ul class="header__labels">\r\n      <li><a ui-sref="home" ui-sref-active="active">Home</a></li>\r\n      <li><a ui-sref="about" ui-sref-active="active">About</a></li>\r\n      <li><a ui-sref="dorms" ui-sref-active="active">Dorms</a></li>\r\n      <li><a ui-sref="events" ui-sref-active="active">Events</a></li>\r\n    </ul>\r\n  </header>\r\n  -->\r\n\r\n  <md-fab-toolbar md-open="$ctrl.demo.isOpen"\r\n      count="$ctrl.demo.count"\r\n      md-direction="{{$ctrl.demo.selectedDirection}}">\r\n    <md-fab-trigger class="align-with-text">\r\n      <md-button aria-label="menu" class="md-fab md-primary">\r\n        <md-tooltip md-direction="bottom" md-visible="tooltipVisible">MENU</md-tooltip>\r\n        <md-icon md-svg-src="img/icons/menu.svg" aria-label="menu"></md-icon>\r\n      </md-button>\r\n    </md-fab-trigger>\r\n\r\n    <md-toolbar>\r\n      <md-fab-actions class="md-toolbar-tools">\r\n      <md-button aria-label="events" >\r\n        <a ui-sref="events">Events</a>\r\n      </md-button>\r\n      <md-button aria-label="dorms" >\r\n        <a ui-sref="dorms">Dorms</a>\r\n      </md-button>\r\n      <md-button aria-label="about" >\r\n        <a ui-sref="about">About</a>\r\n      </md-button>\r\n        <md-button aria-label="home" >\r\n          <a ui-sref="home">Home</a>\r\n        </md-button>\r\n      </md-fab-actions>\r\n    </md-toolbar>\r\n  </md-fab-toolbar>\r\n\r\n\r\n</div>\r\n<div ui-view></div>\r\n');
$templateCache.put('./app.html','<!--within root and app, loading the ui-view-->\r\n<div class="root">\r\n  <!-- Actually showing the website -->\r\n  <div class="app">\r\n    <div ui-view></div>\r\n  </div>\r\n\r\n  <fieldset class="logs">\r\n    <!-- This is how the user will log in/out -->\r\n    <form ng-submit="$ctrl.logout()" ng-if="$ctrl.user">\r\n      <b>Welcome, {{$ctrl.user.username}}!</b>\r\n      <button value="logout" name="logout" class="kill">Log Out</button>\r\n    </form>\r\n\r\n    <form ng-submit="$ctrl.login()" ng-if="!($ctrl.user)">\r\n      <b>You are not currently logged in.</b>\r\n      <button value="login" name="login" class="kill">Log In</button>\r\n    </form>\r\n\r\n  </fieldset>\r\n</div>\r\n');
$templateCache.put('./about.html','<!--template for the about tab page-->\r\n<div class="home">\r\n  <div class="about">\r\n    <h1>A Message from the Authors...</h1>\r\n    <hr />\r\n    <h4>This site is a product of the work of Joshua Agron and Mark Cheng. </h4>\r\n    <h4>The purpose of the site is to provide information concerning the dorms of Notre Dame. Please enjoy!</h4>\r\n    <br />\r\n  </div>\r\n</div>\r\n');
$templateCache.put('./dorms.html','<div class="dorms">\r\n  <!-- The old way\r\n    <ul class="lists">\r\n      <li ng-repeat="item in $ctrl.dorms" class="dorm">\r\n        <h3> {{ item.get(\'Name\') }} Hall </h3>\r\n        Year Established: {{ item.get(\'Year\') }}\r\n        <br />\r\n        Max Capacity: {{ item.get(\'Capacity\') }}\r\n        <br />\r\n        Mascot: {{ item.get(\'Mascot\') }}\r\n        <br />\r\n        <hr />\r\n      </li>\r\n    </ul>\r\n    -->\r\n  <h1 class="dormHeader"> All Notre Dame Dorms </h1>\r\n\r\n  <!-- The new way -->\r\n  <md-content layout-xs="column" layout="row">\r\n    <div flex-xs="" flex-gt-xs="100" layout="column">\r\n      <md-card ng-repeat="item in $ctrl.dorms">\r\n        <md-card-title>\r\n          <md-card-title-text>\r\n            <span class="md-headline">{{ item.get(\'Name\') }} Hall</span>\r\n            <span class="md-subhead">\r\n              <p>Year Established: {{item.get(\'Year\')}}</p>\r\n              <p>Max Capacity: {{item.get(\'Capacity\') }}</p>\r\n              <p>Mascot: {{item.get(\'Mascot\')}}</p>\r\n            </span>\r\n          </md-card-title-text>\r\n          <md-card-title-media>\r\n            <img src="{{item.Crest._url}}" alt="Crest of {{item.get(\'Name\')}} Hall" />\r\n          </md-card-title-media>\r\n        </md-card-title>\r\n      </md-card>\r\n    </div>\r\n  </md-content>\r\n</div>\r\n');
$templateCache.put('./events.html','<ul class="events">\r\n  <li> <a ui-sref="view" ui-sref-active="active">View All Events</a> </li>\r\n  <li> <a ui-sref="add" ui-sref-active="active">Add Events</a> </li>\r\n</ul>\r\n<div ui-view></div>\r\n');
$templateCache.put('./home.html','<!--template for the home tab page-->\r\n<div class="home">\r\n    <h1>Welcome to our site!!</h1>\r\n  <div class="box">\r\n    <h3>Please click along our tabs to explore the site further</h3>\r\n    <p class="first">\r\n      In the Dorms tabs you can find information about Notre Dame Dorms!\r\n    </p>\r\n    <p class="second">\r\n      In the Events tab you can view information on dorm events and add your own event which will be added to the list!\r\n    </p>\r\n  </div>\r\n</div>\r\n');
$templateCache.put('./auth-form.html','<!-- Old way with fieldset\r\n<form name="authForm" novalidate ng-submit="$ctrl.submitForm();">\r\n  <label>\r\n    <input\r\n      type="email"\r\n      name="email"\r\n      required="required"\r\n      placeholder="Enter your email"\r\n      ng-model="$ctrl.user.email">\r\n  </label>\r\n  <br />\r\n  <br />\r\n  <label ng-if="$ctrl.routeName !== \'login\'">\r\n    <input\r\n      name="username"\r\n      required="required"\r\n      placeholder="Enter your username"\r\n      ng-model="$ctrl.user.username">\r\n  </label>\r\n  <br ng-if="$ctrl.routeName !== \'login\'"/>\r\n  <br ng-if="$ctrl.routeName !== \'login\'"/>\r\n  <label>\r\n    <input\r\n      type="password"\r\n      name="password"\r\n      required="required"\r\n      placeholder="Enter your password"\r\n      ng-model="$ctrl.user.password">\r\n  </label>\r\n  <br />\r\n  <br />\r\n  <label ng-if="$ctrl.routeName !== \'login\'">\r\n    <select name="dorm" ng-model="$ctrl.user.dorm">\r\n\r\n      <option disabled selected value="">-- Please select a dorm --</option>\r\n      <option ng-repeat="item in $ctrl.dorms" value=\'{{item.id}}\'>{{ item.Name }}</option>\r\n\r\n    </select>\r\n  </label>\r\n  <br ng-if="$ctrl.routeName !== \'login\'"/>\r\n  <br ng-if="$ctrl.routeName !== \'login\'"/>\r\n  <div class="auth-button">\r\n    <button type="submit" ng-disabled="authForm.$invalid">\r\n      {{ $ctrl.button }}\r\n    </button>\r\n  </div>\r\n  <br ng-if="$ctrl.message">\r\n  <div ng-if="$ctrl.message" class="error">\r\n    {{ $ctrl.message }}\r\n  </div>\r\n</form>\r\n-->\r\n<form name="authForm" novalidate ng-submit="$ctrl.submitForm();">\r\n  <md-card class="authForm">\r\n    <md-card-title>\r\n      <md-card-title-text>\r\n        <span class="md-headline" style="text-decoration:underline;">{{$ctrl.top}}</span>\r\n      </md-card-title-text>\r\n    </md-card-title>\r\n    <md-card-content>\r\n      <p>\r\n        <input type="email" name="email" required="required" placeholder="Enter your email" ng-model="$ctrl.user.email">\r\n      </p>\r\n      <p ng-if="$ctrl.routeName !== \'login\'">\r\n        <input name="username" required="required" placeholder="Enter your username" ng-model="$ctrl.user.username">\r\n      </p>\r\n      <p>\r\n        <input type="password" name="password" required="required" placeholder="Enter your password" ng-model="$ctrl.user.password">\r\n      </p>\r\n      <p ng-if="$ctrl.routeName !== \'login\'">\r\n        <select name="dorm" ng-model="$ctrl.user.dorm">\r\n          <option disabled selected value="">-- Please select a dorm --</option>\r\n          <option ng-repeat="item in $ctrl.dorms" value=\'{{item.id}}\'>{{ item.Name }}</option>\r\n        </select>\r\n      </p>\r\n      <div ng-if="$ctrl.message" class="error">\r\n        {{ $ctrl.message }}\r\n      </div>\r\n    </md-card-content>\r\n    <md-card-actions layout="column" layout-align="right">\r\n      <md-button type="submit" ng-disabled="authForm.$invalid">{{ $ctrl.button }}</md-button>\r\n    </md-card-actions>\r\n  </md-card>\r\n</form>\r\n');
$templateCache.put('./login.html','<div class="auth">\r\n  <!-- Old way\r\n  <h1>Login</h1>\r\n  <auth-form user="$ctrl.user"\r\n      message="{{ $ctrl.error }}"\r\n      button="Log In"\r\n      on-submit="$ctrl.loginUser($event);"\r\n      route-name="login">\r\n  </auth-form>\r\n</div>\r\n<br>\r\n<div class="auth__info">\r\n  <a ui-sref="register">\r\n    Don\'t have an account? Create one here.\r\n  </a> -->\r\n\r\n  <auth-form user="$ctrl.user" message="{{ $ctrl.error }}" button="Log In" top="Login" on-submit="$ctrl.loginUser($event);" route-name="login">\r\n  </auth-form>\r\n  <div class="auth__info">\r\n    <a ui-sref="register">\r\n      Don\'t have an account? Create one here.\r\n    </a>\r\n  </div>\r\n</div>\r\n');
$templateCache.put('./register.html','<div class="auth">\r\n  <!-- Old way\r\n  <h1>Register</h1>\r\n  <auth-form\r\n    user="$ctrl.user"\r\n    message="{{ $ctrl.error }}"\r\n    button="Create user"\r\n    on-submit="$ctrl.createUser($event);"\r\n    dorms="$ctrl.dorms">\r\n  </auth-form>\r\n</div>\r\n<br>\r\n<div class="auth__info">\r\n  <a ui-sref="login">\r\n    Already have an account? Login here.\r\n  </a>\r\n  -->\r\n\r\n\r\n  <auth-form user="$ctrl.user" message="{{ $ctrl.error }}" top="Register" button="Create user" on-submit="$ctrl.createUser($event);" dorms="$ctrl.dorms">\r\n  </auth-form>\r\n  <div class="auth__info">\r\n    <a ui-sref="login">\r\n      Already have an account? Login here.\r\n    </a>\r\n  </div>\r\n</div>\r\n');
$templateCache.put('./add.html','<!--template for the add events tab -->\r\n<div class="add">\r\n  <!-- Maybe I can change this to a card too?\r\n  <form ng-submit="$ctrl.addEvent()">\r\n    <fieldset class="event">\r\n      <h2>Add Event</h2>\r\n      <h3>Please only add events for your own dorm! </h3>\r\n      <ul>\r\n        <li>Event Title:\r\n          <input ng-model="$ctrl.title" type="text" id="title" required>\r\n        </li>\r\n        <br>\r\n        <li>Event Date:\r\n          <input ng-model="$ctrl.date" type="date" id="date" min="2020-01-01" max="2050-12-31" required>\r\n        </li>\r\n        <br>\r\n        <li>Short Description of the Event:\r\n          <br>\r\n          <textarea ng-model="$ctrl.body" type="text" id="body" rows="4" cols="30"></textarea>\r\n        </li>\r\n        <br>\r\n      </ul>\r\n      <input type="submit" value="Submit" >\r\n      <br>\r\n      <br>\r\n      <div ng-if="$ctrl.eventExists" class="nEvent">\r\n        <b>Event successfully added!</b>\r\n        <br>\r\n        Please wait while we redirect you to our events page...\r\n      </div>\r\n    </fieldset>\r\n\r\n  </form>\r\n  -->\r\n  <form ng-submit="$ctrl.addEvent()">\r\n    <md-card>\r\n      <md-card-title>\r\n        <md-card-title-text>\r\n          <span class="md-headline">Add Event</span>\r\n          <span class="md-subhead">Please only add events for your own dorm!</span>\r\n        </md-card-title-text>\r\n      </md-card-title>\r\n      <md-card-content>\r\n        <p>Event Title: <input ng-model="$ctrl.title" type="text" id="title" required></p>\r\n        <p>Event Date: <input ng-model="$ctrl.date" type="date" id="date" min="2020-01-01" max="2050-12-31" required></p>\r\n        <p>Short Description of the Event:<br />\r\n          <textarea ng-model="$ctrl.body" type="text" id="body" rows="4" cols="30"></textarea>\r\n        </p>\r\n        <div ng-if="$ctrl.eventExists" class="nEvent">\r\n          <b>Event successfully added!</b>\r\n          <br>\r\n          Please wait while we redirect you to our events page...\r\n        </div>\r\n      </md-card-content>\r\n      <md-card-actions layout="column" layout-align="right">\r\n        <md-button type="submit">Submit</md-button>\r\n      </md-card-actions>\r\n    </md-card>\r\n  </form>\r\n</div>\r\n');
$templateCache.put('./view.html','<!--template for the events which prints all the events stored on the server-->\r\n<div class="view">\r\n  <!-- This is the old website\r\n  <ul class="lists">\r\n    <!--repeating through each event and printing outs its attributes\r\n    <li ng-repeat="item in $ctrl.events" class="event">\r\n      <h2>{{ item.get(\'Title\') }} </h2>\r\n      <h3>{{ item.get(\'Dorm\') }} Hall, {{ item.get(\'Date\')  | date:\'longDate\' }} </h3>\r\n      <p class="submission"> Submitted by: {{ item.get(\'Author\') }} </p>\r\n      {{ item.get(\'Body\') }} <br />\r\n      <hr />\r\n    </li>\r\n  </ul> -->\r\n\r\n  <!-- This is the new way, with cards -->\r\n  <md-content layout-xs="column" layout="row">\r\n    <div flex-xs="" flex-gt-xs="100" layout="column">\r\n      <md-card ng-repeat="item in $ctrl.events">\r\n        <md-card-title>\r\n          <md-card-title-text>\r\n            <span class="md-headline">{{ item.get(\'Title\') }}</span>\r\n            <span class="md-subhead">Submitted by: {{item.get(\'Author\')}}</span>\r\n          </md-card-title-text>\r\n        </md-card-title>\r\n        <md-card-content>\r\n          <p><b>{{ item.get(\'Dorm\')}} Hall, {{ item.get(\'Date\') | date:\'longDate\' }} </b></p>\r\n          <p> {{ item.get(\'Body\') }}</p>\r\n      </md-card>\r\n    </div>\r\n  </md-content>\r\n\r\n</div>\r\n');}]);