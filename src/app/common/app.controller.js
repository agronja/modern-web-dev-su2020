function AppController(authService, $state) {
  const ctrl = this;

  ctrl.user = authService.getUser();

  ctrl.logout = function () {
    authService.logOut()
    .then(function () {
      $state.go('app');
    }, function (reason) {
      ctrl.error = reason.message;
    });
  };


  console.log(ctrl.user);

}

angular
  .module('common')
  .controller('AppController', AppController);
