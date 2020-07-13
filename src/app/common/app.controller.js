function AppController($state, AuthService) {
  var ctrl = this;
  ctrl.user = AuthService.getUser();
  ctrl.logout = function () {
    AuthService.logout().then(function () {
      //logged out
      $state.go('auth.login');
    });
  }
}


angular
  .module('common')
  .controller('AppController', AppController)
