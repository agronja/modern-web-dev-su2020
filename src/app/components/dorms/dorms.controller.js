function DormsController($stateProvider) {
    const ctrl = this;
    /*
    DormsService.getAllDorms().then(function(dorm_data) {
        ctrl.dorm_data = dorm_data;
        ctrl.dorms = ctrl.dorm_data.data;
    }); */
}

angular
    .module('dorms')
    .controller('DormsController', DormsController)
