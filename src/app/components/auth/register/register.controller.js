function RegisterController(authService, $state) {
  var ctrl = this;
  ctrl.$onInit = function () {
    ctrl.error = null;
    ctrl.user = {
      email: '',
      password: '',
      username: ''
    };
  };

  ctrl.createUser = function (event) {
    
    return authService
      .register(event.user)
      .then(function () {
        $state.go('app');
      }, function (reason) {
        ctrl.error = reason.message;
      });
  };

}

angular
  .module('auth')
  .controller('RegisterController', RegisterController);
