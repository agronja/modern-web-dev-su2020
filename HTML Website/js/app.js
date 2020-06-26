/*
angular.module('app', ['ngMaterial', 'ngMessages']);

/*--------------------- Home Component ---------------------
const home = {
  templateUrl: './home/home.html',
  controller: 'HomeController'
}

// Home Component with Routing (Routed / Stateful)
angular.module('app').component('home', home);

// Home Controller with dependency injection using the array method
angular.module('app').controller('HomeController', ['ExampleService', function(ExampleService) {



}]);
/*--------------------- Home Component ---------------------*

/*--------------------- Settings Component ---------------------*
const settings = {
  templateUrl: '',
  controller: 'SettingsController'
}

// Settings Component with Routing (Routed / Stateful)
angular.module('app').component('settings', settings)

// Settings Controller with dependency injection using $inject method
function SettingsController(ExampleService) {

}
SettingsController.$inject = ['ExampleService'];
angular.module('app').controller('SettingsController', SettingsController);
/*--------------------- Settings Component ---------------------*

/*--------------------- Example Service ---------------------*
function ExampleService() {
  // Services are Singletons
  $http
  // Properties
  // Methods
}
angular.module('app').controller('SimpleChild', [function() {

}]);

//Not sure how to link the template and data files, v my attempt
angular.component('app').({
  'template.html',
  'data.js'
})

/*--------------------- Example Service ---------------------*/


var mapApp = angular.module('mapApp', ["ngMaterial", "ngMessages"]);
mapApp.controller('mapCtrl', ['MapService',
  function(MapService) {
    const ctrl = this;

    MapService.getMaps().then(

      function(response) {
        ctrl.maps = response;
      }
    )
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

var mapChild = angular.module('mapChild', ["ngMaterial", "ngMessages"]);
