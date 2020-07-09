function DormsController($state) {
    const ctrl = this;

    ctrl.getAll = $state.getAll;
    console.log(ctrl.getAll);
}

angular
    .module('dorms')
    .controller('DormsController', DormsController)
