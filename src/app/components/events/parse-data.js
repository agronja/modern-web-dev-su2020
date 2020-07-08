//Sortable data types and multiple constraints

Parse.initialize("myAppID");
Parse.serverURL = 'https://';

var Dorms = Parse.Object.extend("Dorms");
var Dorm = Parse.Object.extend("Dorm");

var q = new Parse.Query("Dorms");
q.equalTo("name", "userSearch");
q.find().then(function(results) {
    console.log("## EQUALTO ##");
    console.log(results);
});


//var q = new Parse.Query("Dorm");
//q.lessThan("marketValue", 1500);
//q.find().then(function(players) {
//    for( var i =0; i < players.length; i++) {
//        var player = players[i];
//        console.log(player.get("name") + " has a market value of <1.5M" + player.get("marketValue"));
//    }
//});

//var q = new Parse.Query("Player");
//q.lessThan("marketValue", 5000);
//q.equalTo("position", "Keeper");
//q.descending("marketValue");
//q.find().then(function(players) {
//    for( var i =0; i < players.length; i++) {
//        var player = players[i];
//        console.log(player.get("name") + " has a market value of <1.5M" + player.get("marketValue"));
//    }
//});

