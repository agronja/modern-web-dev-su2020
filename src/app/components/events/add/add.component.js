var add = {
    templateUrl: './add.html',
    controller: 'AddController',
    bindings: {
      newEvent: '<'
    }
};

angular
    .module('add')
    .component('add', add)
    .config(function ($stateProvider) {
        $stateProvider
            .state('add', {
                parent: 'events',
                url: '/add',
                component: 'add',
                resolve: {
                  newEvent: function(eventsService) {
                    return eventsService.New()
                  }
                } /*
                data: {
                  requiredAuth: true
                } */
        })
});
