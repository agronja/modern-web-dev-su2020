var authForm = {
  bindings: {
    user: '<',
    dorms: '<',
    button: '@',
    message: '@',
    onSubmit: '&',
    routeName: '@'
  },
  templateUrl: './auth-form.html',
  controller: 'AuthFormController'
};

angular
  .module('auth')
  .component('authForm', authForm);
