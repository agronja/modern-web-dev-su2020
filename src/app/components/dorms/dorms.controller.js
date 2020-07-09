function DormsController($state) {
    const ctrl = this;
<<<<<<< HEAD

    ctrl.getAll = $state.getAll;
    console.log(ctrl.getAll);
=======
    /*
    DormsService.getAllDorms().then(function(dorm_data) {
        ctrl.dorm_data = dorm_data;
<<<<<<< HEAD
        
    });
=======
        ctrl.dorms = ctrl.dorm_data.data;
    }); */
>>>>>>> 76d6c7d2f23065fdc7b7d4b380846d82632851aa
>>>>>>> 207dcba5f34967df5c3ce3c962f446515dbe21b2
}

angular
    .module('dorms')
    .controller('DormsController', DormsController)
