angular
  .module('add')
  .controller('AddController', ['eventsService', 'authService', 'dormsService', function (eventsService, authService, dormsService){
    const ctrl = this;

    var user = authService.getUser();
    var attrib = authService.getAttributes();

    ctrl.addEvent = function() {
      ctrl.newEvent.set('Author', user.username)
      ctrl.newEvent.set('Date', ctrl.date)
      ctrl.newEvent.set('Title', ctrl.title)
      ctrl.newEvent.set('Body', ctrl.body)
      ctrl.newEvent.set('Dorm', user.attributes.dorm.attributes.Name)
      /*
      ctrl.newEvent.Parse.defineAttributes(user.dorm, ctrl.fields('dorm'))
      ctrl.newEvent.Parse.defineAttributes(user.name, ctrl.fields('Name'))
      */
      ctrl.newEvent.save()

      ctrl.eventExists = "true"
    }
  }])
