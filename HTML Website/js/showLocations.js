
function locations(data) {
    var newContent = '';

    for (var i = 0; i < data.events.length; i++) {
        newContent += '<figure>';
        newContent += '<img src="' + data.events[i].map + '"';
        newContent += ' alt="' + data.events[i].location + '"';
        newContent += ' class="map_img" />';
        newContent += '<p><b>' + data.events[i].location + '</b><br>';
        newContent += data.events[i].date + '</p>';
        newContent += '</figure>';
    }

    document.getElementById('map').innerHTML += newContent;

    var column = 0;
    for (var i = 0; i < data.events.length; i++) {
      var dataID = 'grid-item-' + i;
      document.getElementById(dataID).style.gridColumnStart = column;
      column++;
      document.getElementById(dataID).style.gridColumnEnd = column;
      document.getElementById(dataID).style.margin = auto;

    }



}
/*

var app = angular.module('app', ["ngMaterial", "ngMessages"]);
app.controller('mapCtrl', function($scope, $http) {
  $http.get('locations.js').then(function success(response) {
    $scope.locations = response.data;
    $scope.statusVal = response.status;
    $scope.statusText = response.statusText;
    $scope.headers = response.headers();
  }, function error(response) {
    console.log("oops");
  })
})
*/
