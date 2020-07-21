angular
  .module('add')
  .controller('AddController', ['eventsService', 'authService', 'dormsService', '$state', function (eventsService, authService, dormsService, $state){
    const ctrl = this;

    var user = authService.getUser();

    ctrl.addEvent = function() {
      /*
      eventsService.data = eventsService.New();

      eventsService.data.Author = user.username;
      eventsService.data.Date = ctrl.date;
      eventsService.data.Title = ctrl.title;
      eventsService.data.Body = ctrl.body;

      eventsService.data.Dorm = dormsService.getByUser(user);

      eventsService.service.save()
        .then(function () {
          ctrl.gotoview();
        })
        */



      ctrl.newEvent.set('Date', ctrl.date)
        .set('Author', user.username)
        .set('Title', ctrl.title)
        .set('Body', ctrl.body)
        .set('Dorm', user.attributes.dorm.attributes.Name)
        .save()
        .then(function() {
          ctrl.eventExists = "true"
          setTimeout(ctrl.gotoview, 1500);
        })

      ctrl.eventExists = "true"
    }

    ctrl.gotoview = function() {
      $state.go('view');
    }
  }])
