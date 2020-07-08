var home = {
    template: `
        <div class="home">Home</div>`
};

angular
    .module('home')
    .component('home', home)
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                parent: 'app',
                url: '/',
                component: 'home'
        })
    $urlRouterProvider.otherwise('/');
});
