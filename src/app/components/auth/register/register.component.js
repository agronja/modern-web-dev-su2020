var register = {
  templateUrl: './register.html',
  controller: 'RegisterController',
  binding: {
    dorms: '<'
  }
};

angular
  .module('auth')
  .component('register', register)
  .config(function($stateProvider) {
    $stateProvider
      .state('register', {
        url: '/register',
        component: 'register',
        parent: 'auth',
        resolve: {
          dorms: function(dormsService) {
            var arr = dormsService.getAll()
              .then(
                function(arr) {
                  console.log(arr)
                }
              )
            return arr
          }
        }
      });
  });
