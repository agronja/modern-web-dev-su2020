var dormsKeenan = {
	template: `
		<div> 
            <h3>Keenan</h3>
            <p>Founded in the year 1957</p>
            <p>Capacity of 250</p>
            <p>Their mascot is the Knights</p>
            <p>Location: <img src="dorm_locations/Keenan.png" alt="Keenan Hall"
             width="200" height="200" title="Keenan" align="bottom"/></p>
        </div>
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