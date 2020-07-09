var view = {
    template: `
        <div class="view">view</div>`
};

angular
    .module('view')
    .component('view', view)
    .config(function ($stateProvider) {
        $stateProvider
            .state('view', {
                parent: 'events',
                url: 'view',
                component: 'view'
        })
});
