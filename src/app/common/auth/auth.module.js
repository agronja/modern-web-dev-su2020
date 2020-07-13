angular
  .module('components.auth', [
    'ui.router',
    'firebase'
  ])
  .config(function ($firebaseRefProvider) {

    var config = {
      //apiKey: "AIzaSyCsNISt3dFx7dy5AImIIk62jDDd0OLvZK0",
      //authDomain: "contacts-manager-e486f.firebaseapp.com",
      //databaseURL: "https://contacts-manager-e486f.firebaseio.com",
      //storageBucket: "contacts-manager-e486f.appspot.com",

      var MY_PARSE_APP_ID = 'Xm5mvESVMpYL3fhQVoY3CufO9iRrWsVhl8Qr1RYp';
      var MY_PARSE_JS_KEY = 'ivH9AWT51N75391o5tgHv8gEhWiVEXbl82WeGqyX';
      ParseProvider.initialize(MY_PARSE_APP_ID, MY_PARSE_JS_KEY);
      ParseProvider.serverURL = 'https://parseapi.back4app.com/';
    };

    $firebaseRefProvider
      .registerUrl({
        default: config.databaseURL,
        //changed
        events: config.databaseURL + '/events'
      });

    firebase.initializeApp(config);
  })
  .run(function ($transitions, $state, AuthService) {
    $transitions.onStart({
      to: function (state) {
        return !!(state.data && state.data.requiredAuth);
      }
    }, function() {
      return AuthService
        .requireAuthentication()
        .catch(function () {
          return $state.target('auth.login');
        });
    });
    $transitions.onStart({
      to: 'auth.*'
    }, function () {
      if (AuthService.isAuthenticated()) {
        return $state.target('app');
      }
    });
  });
