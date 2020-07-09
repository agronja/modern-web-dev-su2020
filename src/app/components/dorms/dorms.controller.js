function DormsController($stateProvider) {
    const ctrl = this;
    /*
    DormsService.getAllDorms().then(function(dorm_data) {
        ctrl.dorm_data = dorm_data;
<<<<<<< HEAD
        
    });
=======
        ctrl.dorms = ctrl.dorm_data.data;
    }); */
>>>>>>> 76d6c7d2f23065fdc7b7d4b380846d82632851aa
}

angular
    .module('dorms')
    .controller('DormsController', DormsController)
