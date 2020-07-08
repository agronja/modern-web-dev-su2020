angular
  .module('common', [
    'ui.router',
    'ngParse'
  ])

    .config(function($locationProvider, ParseProvider) {
        var MY_PARSE_APP_ID = 'jHqsqPKdcgNS2uolToydrK8ZrDvAUTCjSdlDKDNb';
        var MY_PARSE_JS_KEY = 'DsXsf8ASScwqMVEuNxtKfoPNfGXhgTuAbpPpC4X0';
        ParseProvider.initialize(MY_PARSE_APP_ID, MY_PARSE_JS_KEY);
        ParseProvider.serverURL = 'https://...back4app.com/';
});
