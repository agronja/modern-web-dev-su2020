var add = {
    template: `
        <div class="add">add</div>`
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
