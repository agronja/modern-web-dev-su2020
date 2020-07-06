var dorms = {
	template: `
		<div class="dorms">
			<div class="dorms-methods">
				<h3>How would you like to contact me?</h3>
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
					'methods@contact': {
						component: 'dormsMethods'
					}
				}
			});
	});