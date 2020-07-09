var dorms = {
	templateUrl: './dorms.html',
	controller: 'DormsController',
	bindings: {
		dorms: '<'
	}
};

angular
	.module('dorms')
	.component('dorms', dorms)
	.config(function ($stateProvider) {
		$stateProvider
			.state('dorms', {
				url: 'dorms',
				component: 'dorms',
        parent: 'app',
				resolve: {
					dorms: function(dormsService){
						console.log('load from network')
						return dormsService.getAll()
					}
				}
			})
	});
