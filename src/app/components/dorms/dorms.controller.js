function DormsController() {
    const ctrl = this;
    
    DormsService.getAllDorms().then(function(dorm_data) {
        ctrl.dorm_data = dorm_data;
        ctrl.dorms = ctrl.dorm_data.data;
    });
}

angular
    .module(component.dorms)
    .controller('DormsController', DormsController)