var dorms = {
    
    bindings: {
        list: '<'
    },
	template: `
		<div class="dorms">
			<div class="dorms-methods">
				<h3>Click on a dorm to learn about it!</h3>
				<div ui-view="methods"></div>
			</div>
			<div class="dorms-details" ui-view="details"></div>
		</div>
	`,
    
    controller: function DormsController($scope, $element, $attrs, dormsService) {
        var ctrl = this;
        ctrl.type = []
        
        // get data from service
        dormsService.getDormsData().then(function(response) {
            console.log("success")
            ctrl.types = response.data;
        });
        
    }
};

angular
	.module('dorms')
	.component('dorms', dorms)
	.config(function ($stateProvider) {
		$stateProvider
			.state('dorms', {
				url: '/dorms',
				views: {
					// default view
					'@': {
						component: 'dorms'
					},
					'methods@dorms': {
						component: 'dormsMethods'
					}
				}
			});
	});