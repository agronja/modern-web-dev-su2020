//component for the about tab
var about = {
    templateUrl: './about.html'
};

angular
    .module('about')
    .component('about', about)
    .config(function ($stateProvider) {
        $stateProvider
            .state('about', {
                parent: 'app',
                url: 'about',
                component: 'about'
        })
});
