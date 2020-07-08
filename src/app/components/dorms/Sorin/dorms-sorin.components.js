var dormsSorin = {
	template: `
		<div> 
            <h3>Sorin</h3>
            <p>Founded in the year 1888</p>
            <p>Capacity of 146</p>
            <p>Their mascot is the Otters</p>
            <p>Location: <img src="dorm_locations/Sorin.png" alt="Sorin"
             width="200" height="200" title="Sorin" align="bottom"/></p>
        </div>
	`
};

angular
	.module('dorms')
	.component('dormsSorin', dormsSorin)
	.config(function ($stateProvider) {
		$stateProvider
			.state('dorms.sorin', {
				url: '/sorin',
				views: {
					'details@dorms': {
						component: 'dormsSorin'
					}
				}
			});
	});