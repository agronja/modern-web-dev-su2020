var add = {
    templateUrl: './add.html'
};

angular
    .module('add')
    .component('add', add)
    .config(function ($stateProvider) {
        $stateProvider
            .state('add', {
                parent: 'events',
                url: '/add',
                component: 'add'
        })
});
