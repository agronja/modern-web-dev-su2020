angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('./root.html','<div class="root">\r\n  <header class="header">\r\n    <ul class="header__labels">\r\n      <li><a ui-sref="home" ui-sref-active="active">Home</a></li>\r\n      <li><a ui-sref="about" ui-sref-active="active">About</a></li>\r\n      <li><a ui-sref="dorms" ui-sref-active="active">Dorms</a></li>\r\n      <li><a ui-sref="events" ui-sref-active="active">Events</a></li>\r\n    </ul>\r\n  </header>\r\n</div>\r\n<div ui-view></div>\r\n');
$templateCache.put('./app.html','<div class="root">\r\n    <div class="app">\r\n        <div ui-view></div>\r\n    </div>\r\n</div>');
$templateCache.put('./dorms.html','<div class="dorms">\r\n    <h2>Dorms</h2>\r\n    <ul>\r\n      <li ng-repeat="item in $ctrl.dorms">\r\n        Dorm: {{ item.get(\'Name\') }}\r\n        Year Established: {{ item.get(\'Year\') }}\r\n        Max Capacity: {{ item.get(\'Capacity\') }}\r\n        Mascot: {{ item.get(\'Mascot\') }}\r\n      </li>\r\n    </ul>\r\n</div>\r\n');
$templateCache.put('./events.html','<ul class="events">\r\n  <li> <a ui-sref="view" ui-sref-active="active">View All Events</a> </li>\r\n  <li> <a ui-sref="add" ui-sref-active="active">Add Events</a> </li>\r\n</ul>\r\n<div ui-view></div>\r\n');
$templateCache.put('./add.html','<div class="add">\r\n  <form ng-submit="$ctrl.addEvent()">\r\n    <fieldset class="event">\r\n      <h2>Add Event</h2>\r\n      <ul>\r\n        <li>Name:\r\n          <input ng-model="$ctrl.author" type="text" id="author">\r\n        </li>\r\n        <br>\r\n        <li>Dorm:\r\n          <input ng-model="$ctrl.dorm" type="text" id="dorm">\r\n        </li>\r\n        <br>\r\n        <li>Event Title:\r\n          <input ng-model="$ctrl.title" type="text" id="title">\r\n        </li>\r\n        <br>\r\n        <li>Event Date:\r\n          <input ng-model="$ctrl.date" type="text" id="date">\r\n        </li>\r\n        <br>\r\n        <li>Short Description of the Event:\r\n          <input ng-model="$ctrl.body" type="text" id="body">\r\n        </li>\r\n        <br>\r\n        <li>\r\n          <input type="submit" value="submit" >\r\n        </li>\r\n      </ul>\r\n    </fieldset>\r\n\r\n  </form>\r\n</div>\r\n');
$templateCache.put('./view.html','<div class="view">\r\n  <h1>See All Events</h1>\r\n  <ul>\r\n\r\n    <li ng-repeat="item in $ctrl.events">\r\n      Event: {{ item.get(\'Title\') }}\r\n      Date: {{ item.get(\'Date\') }}\r\n      Submitted by: {{ item.get(\'Author\') }}\r\n      Dorm: {{ item.get(\'Dorm\') }}\r\n      Body: {{ item.get(\'Body\') }}\r\n\r\n    </li>\r\n  </ul>\r\n</div>\r\n');}]);