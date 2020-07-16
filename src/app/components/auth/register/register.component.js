var register = {
  templateUrl: './register.html',
  controller: 'RegisterController',
  bindings: {
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
            return dormsService.getAll()
          }
        }
      });
  });
