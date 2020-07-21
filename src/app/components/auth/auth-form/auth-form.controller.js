// controller for the form that the user uses to register
function AuthFormController(eventsService) {
  var ctrl = this;
  ctrl.$onChanges = function (changes) {
    if (changes.user) {
      ctrl.user = angular.copy(ctrl.user);
    }
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
