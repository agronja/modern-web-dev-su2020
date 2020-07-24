// component for the form that user fills in
var authForm = {
  bindings: {
    user: '<',
    dorms: '<',
    button: '@',
    message: '@',
    onSubmit: '&',
    routeName: '@',
    top: '@'
  },
  templateUrl: './auth-form.html',
  controller: 'AuthFormController'
};

angular
  .module('auth')
  .component('authForm', authForm);
