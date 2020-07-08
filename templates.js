angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('./root.html','<div class="root">\r\n    <div class="tabs">\r\n        <a href="#/home">Home</a>\r\n        <a href="#/about">About</a>\r\n        <a href="#/dorms">Dorms</a>\r\n        <a href="#/rate">Rate</a>\r\n    </div>\r\n    <div ui-view></div>\r\n</div>');
$templateCache.put('./dorm.html','<!--.html where the button and table are generated from-->\r\n\r\n<!--button that causes the requested information to load when pressed-->\r\n<button ng-click="$ctrl.findDorm()" >Find out more!</button>\r\n<br />\r\n<br />\r\n<!--table of elements along with the data corresponding to the user\'s input-->\r\n<div>\r\n    <table>\r\n    <tr>\r\n        <td><h1>Dorm</h1></td>\r\n        <!--the line below retrives data from dorms.json if it matches the name of a dorm (if not the exception is caught in app.js)-->\r\n        <td><h1>{{$ctrl.sel.name}}</h1></td>\r\n    </tr>\r\n    <tr>\r\n        <td>Established</td>\r\n        <td>{{$ctrl.sel.year}}</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Max Occupancy</td>\r\n        <td>{{$ctrl.sel.ppl}}</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Mascot</td>\r\n        <td>{{$ctrl.sel.mascot}}</td>\r\n    </tr>\r\n    </table>\r\n</div>\r\n');
$templateCache.put('./home.html','<!--.html for loading the main elements of the page-->\r\n\r\n<div>\r\n    <h1> Dorm Info Finder </h1>\r\n    \r\n    <!--form element for the user to interact with-->\r\n    <form>\r\n      <label for="dorm-input">Which dorm do you want to learn more about?</label>\r\n      <!--text box for the user to input a dorm-->\r\n        <br />\r\n      <input type="text" id="dorm-input">\r\n\r\n        <br />\r\n        \r\n      <!--dorms is where the table of information originates-->\r\n      <dorms></dorms>\r\n    </form>\r\n</div>\r\n\r\n');}]);