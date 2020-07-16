function LoginController(authService, $state) {
  var ctrl = this;
  ctrl.$onInit = function () {
    ctrl.error = null;
    ctrl.user = {
      email: '',
      password: '',
      username: ''
    };
  };

  ctrl.loginUser = function (event) {
    console.log(event)
    return authService
      .logIn(event.user)
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
