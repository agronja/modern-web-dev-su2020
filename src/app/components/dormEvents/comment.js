//how to link objects
Parse.initialize("myAppID");
Parse.serverURL = "https://";

var Post = Parse.Object.extend("Post");

var post = new Post();

// NEEDS TO BE CHANGED: take data from user input
var data = {
    "body": "Hi", 
    "tags": ["first-post", "welcome"],
    "numComments": 0,
    "author": "Mark"  
},

post.save(data, {
    success:function(obj) {
        console.log("Successfully saved " + obj.id);
        
        var Comment = Parse.Object.extend("Comment");
        var comment = new Comment();
        comment.set("message", "Thanks for your vote");
        comment.set("parent", post);
        
        comment.save(null, {
            success: function(obj) {
                console.log("Saved comment " + obj.id);
                
                var comments = post.relation("comments");
                comments.add(comment);
                post.save();
            }
        });
        
        
    }
});