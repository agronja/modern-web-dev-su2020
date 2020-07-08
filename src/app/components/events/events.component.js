var events = {
    template: `
        <div class="events">Events</div>`
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
