angular.module('root')
  .controller('RootController', function() {
    var ctrl = this;

    ctrl.isOpen = false;

    ctrl.demo = {
      isOpen: false,
      count: 0,
      selectedDirection: 'left'
    };
  });
