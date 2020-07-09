function DormsController($stateProvider) {
    const ctrl = this;
<<<<<<< HEAD
    /*
    DormsService.getAllDorms().then(function(dorm_data) {
        ctrl.dorm_data = dorm_data;
        ctrl.dorms = ctrl.dorm_data.data;
    }); */
=======
    
    dormsService.getAll().then(function(dorm_data) {
        ctrl.dorm_data = dorm_data;
        ctrl.dorms_info = ctrl.dorm_data.data;
    });
>>>>>>> 09cb3b6cff75d63695104e3d558becaaa81892aa
}

angular
    .module('dorms')
    .controller('DormsController', DormsController)
