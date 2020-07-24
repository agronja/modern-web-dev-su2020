angular
  .module('common', [
    'ui.router',
    'ngParse',
    'auth',
    'ngMaterial'

  ])
    //connecting our website to the server in Back4App
    .config(function($locationProvider, ParseProvider, $mdThemingProvider) {
        var MY_PARSE_APP_ID = 'Xm5mvESVMpYL3fhQVoY3CufO9iRrWsVhl8Qr1RYp';
        var MY_PARSE_JS_KEY = 'ivH9AWT51N75391o5tgHv8gEhWiVEXbl82WeGqyX';
        ParseProvider.initialize(MY_PARSE_APP_ID, MY_PARSE_JS_KEY);
        ParseProvider.serverURL = 'https://parseapi.back4app.com/';

        //theme generation when called
        $mdThemingProvider.generateThemesOnDemand(true);

        //themes to be used on the dorms page
        $mdThemingProvider.theme('nd')
          .primaryPalette('yellow')
          .accentPalette('blue');

        $mdThemingProvider.theme('mark')
          .primaryPalette('indigo')
          .accentPalette('teal');

        $mdThemingProvider.theme('josh')
          .primaryPalette('brown')
          .accentPalette('lime');

        $mdThemingProvider.theme('')
          .primaryPalette('green')
          .dark();
});

/*

.run(function ($transitions,cfpLoadingBar) {
  $transitions.onStart({}. cfpLoadingBar.start);
  $transitions.onSuccess({}. cfpLoadingBar.complete);
})
*/
