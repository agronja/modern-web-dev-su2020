function ViewController($state){
  const ctrl = this;

  ctrl.$onInit = function() {
    console.log("found the following events: ", ctrl.events)
/*
    ctrl.searchEvents = function() {
      ctrl.list = new Array()

      for(var i = 0; i < ctrl.events.length; i++){
        ctrl.list.push(ctrl.events[i])
      }
    }
    */
  }

}

angular
  .module('view')
  .controller('ViewController', ViewController)
