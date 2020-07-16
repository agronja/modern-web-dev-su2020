function AuthFormController(eventsService) {
  var ctrl = this;
  ctrl.$onChanges = function (changes) {
    if (changes.user) {
      ctrl.user = angular.copy(ctrl.user);
    }
    console.log(ctrl.dorms);
  };
  ctrl.submitForm = function () {
    ctrl.onSubmit({
      $event: {
        user: ctrl.user
      }
    });
  };


}

angular
  .module('auth')
  .controller('AuthFormController', AuthFormController);
