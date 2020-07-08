var dormsAlumni = {
	template: `
		<div> 
            <h3>Alumni</h3>
            <p>Founded in the year 1931</p>
            <p>Capacity of 225</p>
            <p>Their mascot is the Dawgs</p>
            <p>Location: <img src="dorm_locations/Alumni.png" alt="Alumni"
             width="200" height="200" title="Alumni" align="bottom"/></p>
        </div>
    `
};

angular
	.module('dorms')
	.component('dormsAlumni', dormsAlumni)
	.config(function ($stateProvider) {
		$stateProvider
			.state('dorms.alumni', {
				url: '/alumni',
				views: {
					'details@dorms': {
						component: 'dormsAlumni'
					}
				}
			});
	});