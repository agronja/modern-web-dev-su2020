angular
  .module('add')
  .controller('AddController', ['eventsService', 'authService', function (eventsService, authService){
    const ctrl = this;

    var user = authService.getUser();

    ctrl.addEvent = function() {
      ctrl.newEvent.set('Author', user.username)
      ctrl.newEvent.set('Date', ctrl.date)
      ctrl.newEvent.set('Title', ctrl.title)
      ctrl.newEvent.set('Body', ctrl.body)
      ctrl.newEvent.set('Dorm', user.attributes.dorm.attributes.Name)
      ctrl.newEvent.save()
    }
  }])
