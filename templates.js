angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('./root.html','<div class="root">\r\n  <header class="header">\r\n    <ul class="header__labels">\r\n      <li><a ui-sref="home" ui-sref-active="active">Home</a></li>\r\n      <li><a ui-sref="about" ui-sref-active="active">About</a></li>\r\n      <li><a ui-sref="dorms" ui-sref-active="active">Dorms</a></li>\r\n      <li><a ui-sref="events" ui-sref-active="active">Events</a></li>\r\n    </ul>\r\n  </header>\r\n</div>\r\n<div ui-view></div>\r\n');
$templateCache.put('./app.html','<div class="root">\r\n    <div class="app">\r\n        <div ui-view></div>\r\n    </div>\r\n</div>');}]);