angular
  .module('add')
  .controller('AddController', ['eventsService', 'authService', 'dormsService', function (eventsService, authService, dormsService){
    const ctrl = this;

    var user = authService.getUser();

    ctrl.addEvent = function() {
      ctrl.newEvent.set('Author', user.username)
      ctrl.newEvent.set('Date', ctrl.date)
      ctrl.newEvent.set('Title', ctrl.title)
      ctrl.newEvent.set('Body', ctrl.body)
      //user.attributes.dorm.attributes.Name)
      ctrl.newEvent.Parse.defineAttributes(user.dorm, 'Dorm')
      ctrl.newEvent.Parse.defineAttributes(user.name, 'Name')
      ctrl.newEvent.save()
    }
  }])
