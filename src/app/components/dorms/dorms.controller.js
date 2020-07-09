function DormsController() {
    const ctrl = this;
    
    dormsService.getAll().then(function(dorm_data) {
        ctrl.dorm_data = dorm_data;
        ctrl.dorms_info = ctrl.dorm_data.data;
    });
}

angular
    .module(component.dorms)
    .controller('DormsController', DormsController)