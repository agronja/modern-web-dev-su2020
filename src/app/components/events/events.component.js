var events = {
    templateUrl: './events.html'
};

angular
    .module('events')
    .component('events', events)
    .config(function ($stateProvider) {
        $stateProvider
            .state('events', {
                parent: 'app',
                url: 'events',
                component: 'events'
        })
});
