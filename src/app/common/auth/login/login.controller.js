function LoginController(AuthService, $state) {
  var ctrl = this;
  ctrl.$onInit = function () {
    ctrl.error = null;
    ctrl.user = {
      email: '',
      password: ''
    };
  };
  ctrl.loginUser = function (event) {
    return AuthService
      .login(event.user)
      .then(function () {
        $state.go('app');
      }, function (reason) {
        ctrl.error = reason.message;
      });
  };
}

angular
  .module('auth')
  .controller('LoginController', LoginController);
