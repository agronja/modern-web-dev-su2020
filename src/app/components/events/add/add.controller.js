angular
  .module('add')
  .controller('AddController', ['eventsService', 'authService', 'dormsService', '$state', function (eventsService, authService, dormsService, $state){
    const ctrl = this;

    var user = authService.getUser();
    var attrib = authService.getAttributes();

    ctrl.addEvent = function() {
      eventsService.data = eventsService.New();

      eventService.data.Author = user.username;
      eventService.data.Date = user.date;
      eventService.data.Title = user.title;
      eventService.data.Body = user.body;

      eventService.data.Dorm = dormsService.getByUser(user);

      eventService.service.save()
        .then(function () {
          ctrl.gotoview
        })

    //  ctrl.newEvent.set('Author', user.username)
    //  ctrl.newEvent.set('Date', ctrl.date)
    //  ctrl.newEvent.set('Title', ctrl.title)
    //  ctrl.newEvent.set('Body', ctrl.body)
    //  ctrl.newEvent.set('Dorm', user.attributes.dorm.attributes.Name)
      /*
      ctrl.newEvent.Parse.defineAttributes(user.dorm, ctrl.fields('Name'))
      */
      ctrl.newEvent.save()

      ctrl.eventExists = "true"

      setTimeout(ctrl.gotoview, 2500)
    }

    ctrl.gotoview = function() {
      $state.go('view');
    }
  }])
