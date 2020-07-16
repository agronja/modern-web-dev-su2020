function AppController(authService, $state) {
  const ctrl = this;

  ctrl.user = authService.getUser();
  //needs to be changed
  ctrl.logout = function () {
    authService.logout().then(function () {
      $state.go('auth.login');
    });
  };

  console.log(ctrl);

}

angular
  .module('common')
  .controller('AppController', AppController);
