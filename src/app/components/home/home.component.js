//component for the home tab
var home = {
    templateUrl: './home.html'
};

angular
    .module('home')
    .component('home', home)
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                parent: 'app',
                url: 'home',
                component: 'home'
        })
    $urlRouterProvider.otherwise('/');
});
