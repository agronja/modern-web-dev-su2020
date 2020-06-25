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
angular.module('app').controller('SecondController', [ function() {

}]);

//Not sure how to link the template and data files, v my attempt
angular.component('app').({'template.html', 'data.js'})

angular.module('app').controller('photo-quiz', ['questions', function('questions') {

    //how do i get template.html to work with this??

    templateUrl: 'template.html',

    const $ctrl = this;
    $ctrl.start = function() {
        $ctrl.id = 0;
        $ctrl.quizOver = false;
        $ctrl.inProgress = true;
        $ctrl.getQuestion();
    };

    $ctrl.reset = function() {
        $ctrl.inProgress = false;
        $ctrl.score = 0;
    };

    $ctrl.getQuestion = function() {
        var q = quizPhoto.getQuestion($ctrl.id);
        if(q) {
            $ctrl.image = q.image;
            $ctrl.question = q.question;
            $ctrl.options = q.options;
            $ctrl.answer = q.answer;
            $ctrl.answerMode = true;
            } else {
                $ctrl.quizOver = true;
            }
    };

    $ctrl.checkAnswer = function() {
        if(!$('input[name=answer]:checked').length) return;

        var ans = $('input[name=answer]:checked').val();

        if(ans == $ctrl.options[$ctrl.answer]) {
            $ctrl.score++;
            $ctrl.correctAns = true;
        } else {
            $ctrl.correctAns = false;
        }

        $ctrl.answerMode = false;
    };

    $ctrl.nextQuestion = function() {
        $ctrl.id++;
        $ctrl.getQuestion();
    };

    $ctrl.reset();


}]);

/*--------------------- Example Service ---------------------*/
