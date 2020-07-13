angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('./root.html','<!--template for the tabs on the site that the user can travel among-->\r\n<div class="root">\r\n  <header class="header">\r\n    <ul class="header__labels">\r\n      <li><a ui-sref="home" ui-sref-active="active">Home</a></li>\r\n      <li><a ui-sref="about" ui-sref-active="active">About</a></li>\r\n      <li><a ui-sref="dorms" ui-sref-active="active">Dorms</a></li>\r\n      <li><a ui-sref="events" ui-sref-active="active">Events</a></li>\r\n    </ul>\r\n  </header>\r\n</div>\r\n<div ui-view></div>\r\n');
$templateCache.put('./app.html','<!--within root and app, loading the ui-view-->\r\n<div class="root">\r\n    <div class="app">\r\n        <div ui-view></div>\r\n    </div>\r\n</div>');
$templateCache.put('./about.html','<!--template for the about tab page-->\r\n<div class="home">\r\n    <h1>A Message from the Authors...</h1>\r\n    <hr />\r\n    <h4>This site is a product of the work of Joshua Agron and Mark Cheng. </h4> \r\n    <h4>The purpose of the site is to provide information concerning the dorms of Notre Dame. Please enjoy!</h4>\r\n    <br />\r\n</div>');
$templateCache.put('./dorms.html','<div class="dorms">\r\n    <h2>Dorms</h2>\r\n    <ul>\r\n      <li ng-repeat="item in $ctrl.dorms">\r\n        Dorm: {{ item.get(\'Name\') }} <br />\r\n        Year Established: {{ item.get(\'Year\') }} <br />\r\n        Max Capacity: {{ item.get(\'Capacity\') }} <br />\r\n        Mascot: {{ item.get(\'Mascot\') }} <br />\r\n        <hr />\r\n      </li>\r\n    </ul>\r\n</div>\r\n');
$templateCache.put('./events.html','<ul class="events">\r\n  <li> <a ui-sref="view" ui-sref-active="active">View All Events</a> </li>\r\n  <li> <a ui-sref="add" ui-sref-active="active">Add Events</a> </li>\r\n</ul>\r\n<div ui-view></div>\r\n');
$templateCache.put('./home.html','<!--template for the home tab page-->\r\n<div class="home">\r\n    <h1>Welcome to our site!!</h1>\r\n    \r\n    <h3>Please click along our tabs to explore the site further</h3>\r\n    <hr />\r\n    <h4>In the Dorms tabs you can find information about Notre Dame Dorms!</h4>\r\n    <br />\r\n    <h4>In the Events tab you can view information on dorm events and add your own event which will be added to the list!</h4>\r\n</div>');
$templateCache.put('./auth-form.html','<form name="authForm" novalidate ng-submit="$ctrl.submitForm();">\r\n  <label>\r\n    <input\r\n      type="email"\r\n      name="email"\r\n      required="required"\r\n      placeholder="Enter your email"\r\n      ng-model="$ctrl.user.email">\r\n  </label>\r\n  <label>\r\n    <input\r\n      type="password"\r\n      name="password"\r\n      required="required"\r\n      placeholder="Enter your password"\r\n      ng-model="$ctrl.user.password">\r\n  </label>\r\n  <div class="auth-button">\r\n    <button type="submit" ng-disabled="authForm.$invalid">\r\n      {{ $ctrl.button }}\r\n    </button>\r\n  </div>\r\n  <div ng-if="$ctrl.message">\r\n    {{ $ctrl.message }}\r\n  </div>\r\n</form>');
$templateCache.put('./login.html','<div class="auth">\r\n  <h1>Login</h1>\r\n  <auth-form\r\n    user="$ctrl.user"\r\n    message="{{ $ctrl.error }}"\r\n    button="Login"\r\n    on-submit="$ctrl.loginUser($event);">\r\n  </auth-form>\r\n</div>\r\n<div class="auth__info">\r\n  <a ui-sref="auth.register">\r\n    Don\'t have an account? Create one here.\r\n  </a>\r\n</div>');
$templateCache.put('./register.html','<div class="auth">\r\n  <h1>Register</h1>\r\n  <auth-form\r\n    user="$ctrl.user"\r\n    message="{{ $ctrl.error }}"\r\n    button="Create user"\r\n    on-submit="$ctrl.createUser($event);">\r\n  </auth-form>\r\n</div>\r\n<div class="auth__info">\r\n  <a ui-sref="auth.login">\r\n    Already have an account? Login here.\r\n  </a>\r\n</div>');
$templateCache.put('./add.html','<div class="add">\r\n  <form ng-submit="$ctrl.addEvent()">\r\n    <fieldset class="event">\r\n      <h2>Add Event</h2>\r\n      <ul>\r\n        <li>Name:\r\n          <input ng-model="$ctrl.author" type="text" id="author">\r\n        </li>\r\n        <br>\r\n        <li>Dorm:\r\n          <input ng-model="$ctrl.dorm" type="text" id="dorm">\r\n        </li>\r\n        <br>\r\n        <li>Event Title:\r\n          <input ng-model="$ctrl.title" type="text" id="title">\r\n        </li>\r\n        <br>\r\n        <li>Event Date:\r\n          <input ng-model="$ctrl.date" type="text" id="date">\r\n        </li>\r\n        <br>\r\n        <li>Short Description of the Event:\r\n          <input ng-model="$ctrl.body" type="text" id="body">\r\n        </li>\r\n        <br>\r\n        <li>\r\n          <input type="submit" value="submit" >\r\n        </li>\r\n      </ul>\r\n    </fieldset>\r\n\r\n  </form>\r\n</div>\r\n');
$templateCache.put('./view.html','<!--template for the events which prints all the events stored on the server-->\r\n<div class="view">\r\n  <h1>See All Events</h1>\r\n  <ul>\r\n    <!--repeating through each event and printing outs its attributes-->\r\n    <li ng-repeat="item in $ctrl.events">\r\n      Event: {{ item.get(\'Title\') }} <br />\r\n      Date: {{ item.get(\'Date\') }} <br />\r\n      Submitted by: {{ item.get(\'Author\') }} <br />\r\n      Dorm: {{ item.get(\'Dorm\') }} <br />\r\n      Body: {{ item.get(\'Body\') }} <br />\r\n      <hr />\r\n    </li>\r\n  </ul>\r\n</div>\r\n');}]);