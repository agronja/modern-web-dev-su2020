//controller for the view of the events component
function ViewController($state){
  const ctrl = this;

  ctrl.$onInit = function() {
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
