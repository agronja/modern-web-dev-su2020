var root = {
  templateUrl: './root.html'
};

angular
    .module('root')
    .component('root', root)
    .config(function ($stateProvider) {
        $stateProvider
            .state('root', {
                url: '/',
                component: 'root'
        })
});