function AppController(authService, $state) {
  const ctrl = this;

  ctrl.user = authService.getUser();

  //needs to be changed
  ctrl.logout = function () {
    authService.logout();
  };

  console.log(ctrl.user);

}

angular
  .module('common')
  .controller('AppController', AppController);
