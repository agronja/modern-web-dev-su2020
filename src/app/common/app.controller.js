function AppController(authService, $state) {
  const ctrl = this;

  //ctrl.user = authService.getUser();
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
