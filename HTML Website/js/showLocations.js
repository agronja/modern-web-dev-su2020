/*
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
*/

/*  Attempt number 1 */
var mapApp = angular.module('mapApp', ["ngMaterial", "ngMessages"]);
mapApp.controller('mapCtrl', ['$scope', '$http',
  function($scope, $http) {
    console.log("hello");
    $http.get('https://raw.githubusercontent.com/agronja/modern-web-dev-su2020/master/HTML%20Website/js/locations.json').then(
      function success(response) {
        $scope.locations = response.data;
        $scope.statusVal = response.status;
        $scope.statusText = response.statusText;
        $scope.headers = response.headers();
        console.log($scope.locations);
        console.log(response);
      },
      function error(response) {
        console.log("oops");
        console.log(response);
      }
    )
  }
])


/* Attempt number 2
var mapApp = angular.module('mapApp', ["ngMaterial", "ngMessages"]);
mapApp.controller('mapCtrl', ['$scope', '$http',
  function($scope, $http) {

    var request = {
      method: 'GET',
      url: 'js/locations.js',
      datatype: 'json',
      contentType: "application/json"
    };

    $scope.locations = new Array;

    $http(request)
      .success(function(jsonData) {
        $scope.locations = jsonData;
        $scope.maps = $scope.locations;
      })
      .error(function() {
        console.log("oops");
      });
  }
]);
*/
