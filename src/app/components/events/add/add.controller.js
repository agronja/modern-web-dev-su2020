angular
  .module('add')
  .controller('AddController', ['eventsService', function (eventsService){
    const ctrl = this;

    ctrl.addEvent = function() {
      ctrl.newEvent.set('Author', ctrl.author)
      ctrl.newEvent.set('Date', ctrl.date)
      ctrl.newEvent.set('Title', ctrl.title)
      ctrl.newEvent.set('Body', ctrl.body)
      ctrl.newEvent.set('Dorm', ctrl.dorm)
      ctrl.newEvent.save()
      console.log('Successfully saved ' + ctrl.newEvent.id)
    }
  }])
