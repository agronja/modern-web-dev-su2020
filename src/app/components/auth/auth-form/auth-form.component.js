var authForm = {
  bindings: {
    user: '<',
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
        resolve: {
          dorms: function(dormsService) {
            return dormsService.getAll()
          }
        }
      })
  });
