angular.module('app', ['home', 'about', 'dorms', 'dormEvents']);

/*--------------------- Home Component ---------------------
const home = {
  templateUrl: 'app/home.html',
  controller: 'HomeController'
}

// Home Component with Routing (Routed / Stateful)
angular.module('app').component('home', home);

// Home Controller with dependency injection using the array method
angular.module('app').controller('HomeController', ['DormService', function(DormService) {
  const ctrl = this;
  //use DormService
  DormService.getDorms().then(
    function(response) {
      ctrl.dorms = response;
    }
  )

}]);

/*--------------------- Home Component ---------------------

/*--------------------- Dorms Component ---------------------
const dorms = {
  templateUrl: 'app/dorm.html',
  controller: 'DormsController'
}

// Settings Component with Routing (Routed / Stateful)
angular.module('app').component('dorms', dorms)

// Settings Controller with dependency injection using $inject method
function DormsController(DormService) {
  const ctrl = this;

  ctrl.findDorm = function() {
    DormService.getDorms().then(
      function(result) {
          // getting the text inputted by the user
          var selector = document.getElementById('dorm-input').value;
          // loop to check each name in dorms.json
          for(x of result.data){
              //if a match is found, load the data
              if(selector.toLowerCase() == x.name.toLowerCase()){
                  ctrl.sel = x;
                  break;
              }
              //if no match is found, print out this
              else {
                  ctrl.sel = {
                      "name": "Not found",
                      "year": "N/A",
                      "ppl": "N/A",
                      "mascot": "N/A"
                  }
              }

          }
      })
  }

}
DormsController.$inject = ['DormService'];
angular.module('app').controller('DormsController', DormsController);
/*--------------------- Dorms Component ---------------------

/*--------------------- Dorm Service ---------------------
function DormService($http) {
  // Services are Singletons
  // Properties
  // Methods
  const self = this;
  self.getDorms = getDorms;
//http request element to retrieve data
  function getDorms() {
    return $http.get('app/dorms.json')

  }
}
angular.module('app').service('DormService', DormService)
DormService.$inject = ['$http'];
/*--------------------- Dorm Service ---------------------*/
