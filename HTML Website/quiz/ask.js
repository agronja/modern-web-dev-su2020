var app = angular.module('quizApp', []);
//change to component
app.directive('quiz', function(quizPhoto) {
	return {
		restrict: 'AE',
		$ctrl: {},
		templateUrl: 'template.html',
		link: function($ctrl) {
			$ctrl.start = function() {
				$ctrl.id = 0;
				$ctrl.quizOver = false;
				$ctrl.inProgress = true;
				$ctrl.getQuestion();
			};

			$ctrl.reset = function() {
				$ctrl.inProgress = false;
				$ctrl.score = 0;
			}

			$ctrl.getQuestion = function() {
				var q = quizPhoto.getQuestion($ctrl.id);
				if(q) {
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
			}

			$ctrl.reset();
		}
	}
});

app.factory('quizPhoto', function() {

	var questions = [
		{
            image: "images/Port/Snapseed.jpg",
			question: "Question 1: What place does this image come from?",
			options: ["Alvor", "Paris", "Ballymaloe", "Dublin"],
			answer: 2
		},
		{
			question: "Question 2: What place does this image come from?",
			options: ["Alvor", "Paris", "Ballymaloe", "Dublin"],
			answer: 2
		},
		{
			question: "Question 3: What place does this image come from?",
			options: ["Alvor", "Paris", "Ballymaloe", "Dublin"],
			answer: 2
		},
		{
			question: "Question 4: What place does this image come from? ",
			options: ["Alvor", "Paris", "Ballymaloe", "Dublin"],
			answer: 2
		},
		{	
			question: "Question 5: What place does this image come from?",
			options: ["Alvor", "Paris", "Ballymaloe", "Dublin"],
			answer: 2
		}
	];

	return {
		getQuestion: function(id) {
			if(id < questions.length) {
				return questions[id];
			} else {
				return false;
			}
		}
	};
});