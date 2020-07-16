var authForm = {
  bindings: {
    user: '<',
    dorms: '<',
    button: '@',
    message: '@',
    onSubmit: '&'
  },
  templateUrl: './auth-form.html',
  controller: 'AuthFormController'
};

angular
  .module('auth')
  .component('authForm', authForm)
  .config(function($stateProvider) {
    $stateProvider
      .state('authForm', {
        component: 'authForm',
        parent: 'auth',
        resolve: {
          dorms: function(dormsService) {
            return dormsService.getAll()
          }
        }
      })
  });
