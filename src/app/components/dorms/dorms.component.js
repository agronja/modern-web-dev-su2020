var dorms = {
	templateUrl: './dorms.html',
	controller: 'DormsController'
};

angular
	.module('dorms')
	.component('dorms', dorms)
	.config(function ($stateProvider) {
		$stateProvider
			.state('dorms', {
				url: 'dorms',
				component: 'dorms',
        parent: 'app'
			})
	});
