function AppController($state, AuthService) {
  var ctrl = this;
  ctrl.user = AuthService.getUser();
  ctrl.logout = function () {
    // logout
  }
}


angular
  .module('common')
  .controller('AppController', AppController)
