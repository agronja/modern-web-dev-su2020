var dorms = {
	template: `
		<div class="dorms">Dorms</div>
	`
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
