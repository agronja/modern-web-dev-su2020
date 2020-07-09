var dorms = {
	templateUrl: './dorms.html',
	controller: 'DormsController',
	bindings: {
		dorms: '<'
	}
};

angular
	.module('dorms')
	.component('dorms', dorms)
	.config(function ($stateProvider) {
		$stateProvider
			.state('dorms', {
				url: 'dorms',
				component: 'dorms',
                parent: 'app',
				resolve: {
					dorms: function(dormsService){
                        if(!$rootScope.isEmpty(dormService.data)) {
                           console.log('load from app!');
                           return dormService.data;
                           }
                        else {
						console.log('load from network');
						return dormsService.getById('Keenan')
                        }
					}
				}
			})
	});
