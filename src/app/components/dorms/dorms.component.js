var dorms = {
	template: `
		<div class="dorms">
			<div class="dorms-methods">
				<h3>Click on a dorm to learn about it!</h3>
				<div ui-view="methods"></div>
			</div>
			<div class="dorms-details" ui-view="details"></div>
		</div>
	`
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