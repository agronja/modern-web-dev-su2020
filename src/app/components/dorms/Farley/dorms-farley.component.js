var dormsFarley = {
	template: `
		<div> 
            <h3>Farley</h3>
            <p>Founded in the year 1947</p>
            <p>Capacity of 216</p>
            <p>Their mascot is the Angels</p>
            <p>Location: <img src="dorm_locations/Farley.png" alt="Farley"
             width="200" height="200" title="Farley" align="bottom"/></p>
        </div>
	`
};

angular
	.module('dorms')
	.component('dormsFarley', dormsFarley)
	.config(function ($stateProvider) {
		$stateProvider
			.state('dorms.farley', {
				url: '/farley',
				views: {
					'details@dorms': {
						component: 'dormsFarley'
					}
				}
			});
	});