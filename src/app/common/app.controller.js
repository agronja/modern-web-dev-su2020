function AppController(authService, $state) {
  const ctrl = this;

  ctrl.user = authService.getUser();

  ctrl.logout = function () {
    authService.logOut()
    .then(function () {
      $state.go('auth');
    }, function (reason) {
      ctrl.error = reason.message;
    });
  };

  ctrl.login = function(){
    $state.go('auth');
  }

  console.log(ctrl.user);

}

angular
  .module('common')
  .controller('AppController', AppController);
