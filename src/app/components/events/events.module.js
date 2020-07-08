//this will be the rating system for dorm events
//the user will enter their comment in a textbox in the HTML 
//and then that comment will be stored on the server
Parse.initialize("myAppID");
Parse.serverURL = "https://";

var Post = Parse.Object.extend("Post");

var post = new Post();

// NEEDS TO BE CHANGED: take data from user input
var id = angular.element(document.getElementById("textbox"));
//var data = {
//    "body": "Hi", 
//    "tags": ["first-post", "welcome"],
//    "numComments": 0,
//    "author": "Mark"  
//},

post.save(id, {
    success:function(obj) {
        console.log("Successfully saved " + obj.id);
        
        var Events = Parse.Object.extend("Events");
        var event = new Events();
        event.set("message", "Thanks for your vote");
        event.set("parent", post);
        
        event.save(null, {
            success: function(obj) {
                console.log("Saved comment " + obj.id);
                
                var events = post.relation("events");
                events.add(event);
                post.save();
            }
        });
        
        
    }
});