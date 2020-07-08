// search through the dorm data to find the requested dorm
Parse.initialize("myAppID");
Parse.serverURL = 'https://';

// objects for the list of dorms
var Dorms = Parse.Object.extend("Dorms");
var Dorm = Parse.Object.extend("Dorm");

//go through each dorm 
var q = new Parse.Query("Dorm");
q.find().then(function(specificDorm) {
    for (var i = 0; i < specifcDorm.length; i++){
        var dormName = specifcDorm[i];
        //get data corresponding to the dormName
        var dormsTemplate = {
	       template: `
		      <div> 
                <h3> dormName.name</h3>
                <p>"Founded in the year" + dormName.date</p>
                <p>"Capacity of " + dormName.capacity</p>
                <p>"Their mascot is the " dormName.mascot</p>
                <p>dormName.location</p>
              </div>
            `
        };
        //send data to dorms component which will render the information
        angular
	       .module('dorms')
	       .component('dormsTemplate', dormsTemplate)
	       .config(function ($stateProvider) {
		      $stateProvider
			     .state('dorms.template', {
				    url: '/template',
				    views: {
					   'details@dorms': {
						  component: 'dormsTemplate'
				        }
				    }
			     });
	       }); 
    //repeat cycle
    }
});
