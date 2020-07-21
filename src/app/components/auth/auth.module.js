angular
  .module('auth', [
    'ui.router',
    'ngParse'

  ])

  //when ath.module is run, perform these operations and call authService
  .run(function ($transitions, $state, authService) {
    $transitions.onStart({
      to: function (state) {
        return !!(state.data && state.data.requiredAuth);
      }
    }, function() {
      return authService
        .requireAuthentication()
        .catch(function () {
          return $state.target('login');
        });
    });
    $transitions.onStart({
      to: 'auth.*'
    }, function () {
      if (authService.isAuthenticated()) {
        return $state.target('app');
      }
    });
  });
