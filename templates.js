angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('./root.html','<div class="root">\r\n    <a ui-sref="home">Home</a>\r\n    <a ui-sref="about">About</a>\r\n    <a ui-sref="dorms">Dorms</a>\r\n    <a ui-sref="events">Events</a>\r\n    <div ui-view></div>\r\n</div>\r\n');
$templateCache.put('./app.html','<div class="root">\r\n    <div class="app">\r\n        <div ui-view></div>\r\n    </div>\r\n</div>');}]);