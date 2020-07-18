angular
  .module('auth', [
    'ui.router',
    'ngParse'

  ])

  .run(function ($transitions, $state, authService) {
    $transitions.onStart({
      to: function (state) {
        return !!(state.data && state.data.requiredAuth);
      }
    }, function() {
      return authService
        .requireAuthentication($state)
        /*
        .catch(function () {
          return $state.target('login');
        });
        */
    });
    $transitions.onStart({
      to: 'auth.*'
    }, function () {
      if (authService.isAuthenticated()) {
        return $state.target('app');
      }
    });
  });
