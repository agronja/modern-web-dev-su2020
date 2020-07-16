//component for the events tab
var view = {
  templateUrl: './view.html',
  controller: 'ViewController',
  bindings: {
    events: '<'
  }
};

angular
  .module('view')
  .component('view', view)
  .config(function($stateProvider) {
    $stateProvider
      .state('view', {
        parent: 'events',
        url: '/view',
        component: 'view',
        resolve: {
          events: function(eventsService) {
            return eventsService.getAll()
          }
        }
      })
  });
