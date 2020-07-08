var dormsWelshFam = {
	template: `
		<div> 
            <h3>Welsh Fam</h3>
            <p>Founded in the year 1997</p>
            <p>Capacity of 281</p>
            <p>Their mascot is the Whirlwinds</p>
            <p>Location: <img src="dorm_locations/WelshFam.png" alt="Welsh Fam Hall"
             width="200" height="200" title="Welsh Fam" align="bottom"/></p>
        </div>
	`
};

angular
	.module('dorms')
	.component('dormsWelshFam', dormsWelshFam)
	.config(function ($stateProvider) {
		$stateProvider
			.state('dorms.welshfam', {
				url: '/welshfam',
				views: {
					'details@dorms': {
						component: 'dormsWelshFam'
					}
				}
			});
	});