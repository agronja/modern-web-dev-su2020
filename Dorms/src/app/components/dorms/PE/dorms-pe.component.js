var dormsPE = {
	template: `
		<div> 
            <h3>Pasquerilla East</h3>
            <p>Founded in the year 1981</p>
            <p>Capacity of 248</p>
            <p>Their mascot is the Pyros</p>
            <p>Location: <img src="dorm_locations/PE.png" alt="PE"
             width="200" height="200" title="PE" align="bottom"/></p>
        </div>
	`
};

angular
	.module('dorms')
	.component('dormsPE', dormsPE)
	.config(function ($stateProvider) {
		$stateProvider
			.state('dorms.pe', {
				url: '/pe',
				views: {
					'details@dorms': {
						component: 'dormsPE'
					}
				}
			});
	});