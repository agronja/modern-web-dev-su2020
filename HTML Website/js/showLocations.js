
/*  Attempt number 1 */
var mapApp = angular.module('mapApp', ["ngMaterial", "ngMessages"]);
mapApp.controller('mapCtrl', ['MapService',
  function(MapService) {
    const ctrl = this;

    MapService.getMaps().then(

      function(response) {
        ctrl.maps = response;
      }
    )
    /*
        var column = 0;
        for (var i = 0; i < $scope.maps.length; i++) {
          var dataID = i;
          document.getElementById(dataID).style.gridColumnStart = column;
          column++;
          document.getElementById(dataID).style.gridColumnEnd = column;
          document.getElementById(dataID).style.margin = auto;

        }
    */
  }
])

function MapService($http) {
  const self = this;
  self.getMaps = getMaps;

  function getMaps() {
    return $http.get('https://raw.githubusercontent.com/agronja/modern-web-dev-su2020/master/HTML%20Website/js/locations.json')

  }
}
angular.module('mapApp').service('MapService', MapService);
MapService.$inject = ['$http'];
