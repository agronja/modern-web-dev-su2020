var dormsKeenan = {
	template: `
		<div>Contact via phone: +44(0) 7777 888 999</div>
	`
};

angular
	.module('dorms')
	.component('dormsKeenan', dormsKeenan)
	.config(function ($stateProvider) {
		$stateProvider
			.state('dorms.keenan', {
				url: '^/keenan',
				views: {
					'details@dorms': {
						component: 'dormsKeenan'
					}
				}
			});
	});