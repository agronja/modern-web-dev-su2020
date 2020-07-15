//component for the parent component to the components in the components folder
var app = {
    templateUrl: './app.html',
    controller: 'AppController'
};

angular
    .module('common')
    .component('app', app)
    .config(function($stateProvider) {
        $stateProvider
            .state('app', {
              //  redirectTo: 'home',
                url: '/',
                component: 'app'
        })
});
