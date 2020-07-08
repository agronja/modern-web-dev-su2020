// search through the dorm data to find the requested dorm
Parse.initialize("myAppID");
Parse.serverURL = 'https://';

var id = angular.element('');
var Dorms = Parse.Object.extend("Dorms");
var Dorm = Parse.Object.extend("Dorm");


var q = new Parse.Query("Dorm");
q.equalTo("name", "id");
q.find().then(function(results) {
    console.log("## EQUALTO ##");
    console.log(results);
});
