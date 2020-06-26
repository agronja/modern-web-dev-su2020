angular.module('app', ['ngMaterial', 'ngMessages']);

/*--------------------- Home Component ---------------------*/
const home = {
  templateUrl: './home/home.html',
  controller: 'HomeController'
}

// Home Component with Routing (Routed / Stateful)
angular.module('app').component('home', home);

// Home Controller with dependency injection using the array method
angular.module('app').controller('HomeController', ['DormService', function(DormService) {
  const ctrl = this;
  DormService.getDorms().then(
    function(response) {
      ctrl.dorms = response;
    }
  )

}]);

/*--------------------- Home Component ---------------------*/

/*--------------------- Dorms Component ---------------------*/
const dorms = {
  templateUrl: './home/dorm.html',
  controller: 'DormsController'
}

// Settings Component with Routing (Routed / Stateful)
angular.module('app').component('dorms', dorms)

// Settings Controller with dependency injection using $inject method
function DormsController(DormService) {
  const ctrl = this;

  ctrl.findDorm = function() {
    DormService().getDorms().then(
      function(result) {
        console.log(result);
        var selector = document.getElementById('dorm-input').value;

      })
  }

}
DormsController.$inject = ['DormService'];
angular.module('app').controller('DormsController', DormsController);
/*--------------------- Dorms Component ---------------------*/

/*--------------------- Dorm Service ---------------------*/
function DormService($http) {
  // Services are Singletons
  // Properties
  // Methods
  const self = this;
  self.getDorms = getDorms;

  function getDorms() {
    return $http.get('./dorms.json')

  }
}
angular.module('app').service('DormService', DormService)
DormService.$inject = ['$http'];
/*--------------------- Dorm Service ---------------------*/
