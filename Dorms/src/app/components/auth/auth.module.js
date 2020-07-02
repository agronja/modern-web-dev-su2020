angular
    .module('components.auth', [
    'ui.router',
    'firebase',
    'ngParse',
    'ui.router',
    'ngMaterial',
    'ngMessages'
])
    .config(function (ParseProvider){
    
        var MY_PARSE_APP_ID = '';
        var MY_PARSE_JS_KEY = '';
        ParseProvider.initialize(MY_PARSE_APP_ID, MY_PARSE_JS_KEY);
        ParseProvider.serverURL = 'https://parseapi.back4app.com/';
});