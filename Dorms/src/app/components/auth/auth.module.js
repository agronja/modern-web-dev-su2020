angular
    .module('components.auth', [
    'ui.router',
    'ngParse',
    'ui.router',
    'ngMaterial',
    'ngMessages'
])
    .config(function ($locationProvider, $mdThemingProvider, ParseProvider){
    
        var MY_PARSE_APP_ID = 'TjuZFnHAn9J5Fn68Qx15iEIrpAArmKSuAHvwMpMo';
        var MY_PARSE_JS_KEY = '';
        ParseProvider.initialize(MY_PARSE_APP_ID, MY_PARSE_JS_KEY);
        ParseProvider.serverURL = 'https://parseapi.back4app.com/';
})