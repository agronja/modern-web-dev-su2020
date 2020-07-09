function DormsController() {
    const ctrl = this;
    
    dormsService.getAll().then(function(dorm_data) {
        ctrl.dorm_data = dorm_data;
        
    });
}

angular
    .module(component.dorms)
    .controller('DormsController', DormsController)