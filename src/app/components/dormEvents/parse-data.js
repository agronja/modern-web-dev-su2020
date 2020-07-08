//Sortable data types and multiple constraints

Parse.initialize("myAppID");
Parse.serverURL = 'https://';

var Team = Parse.Object.extend("Team");
var Player = Parse.Object.extend("Player");

var q = new Parse.Query("Team");
q.equalTo("code", "MCFC");
q.find().then(function(results) {
    console.log("## EQUALTO ##");
    console.log(results);
});

var q = new Parse.Query("Team");
q.equalTo("code", "MCFC");
q.first().then(function(obj) {
    console.log("## EQUALTO ##");
    console.log(obj);
});

var q = new Parse.Query("Player");
q.lessThan("marketValue", 1500);
q.find().then(function(players) {
    for( var i =0; i < players.length; i++) {
        var player = players[i];
        console.log(player.get("name") + " has a market value of <1.5M" + player.get("marketValue"));
    }
});

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

