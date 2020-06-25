angular.module('app', ['ngMaterial', 'ngMessages']);

/*--------------------- Home Component ---------------------*/
const home = {
    templateUrl: './home/home.html',
    controller: 'HomeController'
}

// Home Component with Routing (Routed / Stateful)
angular.module('app').component('home', home);

// Home Controller with dependency injection using the array method
angular.module('app').controller('HomeController', ['ExampleService', function (ExampleService) {



}]);
/*--------------------- Home Component ---------------------*/

/*--------------------- Settings Component ---------------------*/
const settings = {
    templateUrl: '',
    controller: 'SettingsController'
}

// Settings Component with Routing (Routed / Stateful)
angular.module('app').component('settings', settings)

// Settings Controller with dependency injection using $inject method
function SettingsController(ExampleService) {

}
SettingsController.$inject = ['ExampleService'];
angular.module('app').controller('SettingsController', SettingsController);
/*--------------------- Settings Component ---------------------*/

/*--------------------- Example Service ---------------------*/
function ExampleService() {
    // Services are Singletons
    $http
    // Properties
    // Methods
}
angular.module('app').controller('SecondController',['question', function(questions) {
    const ctrl = this;
    ctrl.questions [
        {
            'image': "images/Port/Snapseed.jpg",
			'question': "Question 1: What place does this image come from?",
			'options': ["Alvor", "Paris", "Ballymaloe", "Dublin"],
			'answer': 2
		},
		{
            'image': "" ,
			'question': "Question 2: What place does this image come from?",
			'options': ["Alvor", "Paris", "Ballymaloe", "Dublin"],
			'answer': 2
		},
		{
            'image': "",
			'question': "Question 3: What place does this image come from?",
			'options': ["Alvor", "Paris", "Ballymaloe", "Dublin"],
			'answer': 2
		},
		{
            "image": "",
			'question': "Question 4: What place does this image come from? ",
			'options': ["Alvor", "Paris", "Ballymaloe", "Dublin"],
			'answer': 2
		},
		{
            'image': "",
			'question': "Question 5: What place does this image come from?",
			'options': ["Alvor", "Paris", "Ballymaloe", "Dublin"],
			'answer': 2
		}
    ]

                                 }]);
/*--------------------- Example Service ---------------------*/

angular.module('app').controller('')
