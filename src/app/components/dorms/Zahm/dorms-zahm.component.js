var dormsZahm = {
	template: `
		<div> 
            <h3>Zahm</h3>
            <p>Founded in the year 1937</p>
            <p>Capacity of 202</p>
            <p>Their mascot is the Dumbasses</p>
            <p>Location: <img src="dorm_locations/Zahm.png" alt="Zahm"
             width="200" height="200" title="Zahm" align="bottom"/></p>
        </div>
	`
};

angular
	.module('dorms')
	.component('dormsZahm', dormsZahm)
	.config(function ($stateProvider) {
		$stateProvider
			.state('dorms.zahm', {
				url: '/zahm',
				views: {
					'details@dorms': {
						component: 'dormsZahm'
					}
				}
			});
	});