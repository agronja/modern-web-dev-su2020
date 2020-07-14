angular
  .module('common', [
    'ui.router',
<<<<<<< HEAD
    'ngParse'
  ])
  // 'angular-loading-bar'
  //.run(function ($transitions,cfpLoadigBar) {
  //  $transitions.onStart({}. cfpLoadigBar.start);
  //  $transitions.onSuccess({}. cfpLoadigBar.complete);
  //})
=======
    'ngParse',
    //'angular-loading-bar'
  ])
>>>>>>> 7fae7da9d795f3dfef65e0f27b2d2f253204d79d
    //connecting our website to the server in Back4App
    .config(function($locationProvider, ParseProvider) {
        var MY_PARSE_APP_ID = 'Xm5mvESVMpYL3fhQVoY3CufO9iRrWsVhl8Qr1RYp';
        var MY_PARSE_JS_KEY = 'ivH9AWT51N75391o5tgHv8gEhWiVEXbl82WeGqyX';
        ParseProvider.initialize(MY_PARSE_APP_ID, MY_PARSE_JS_KEY);
        ParseProvider.serverURL = 'https://parseapi.back4app.com/';
});

/*

.run(function ($transitions,cfpLoadingBar) {
  $transitions.onStart({}. cfpLoadingBar.start);
  $transitions.onSuccess({}. cfpLoadingBar.complete);
})
*/
