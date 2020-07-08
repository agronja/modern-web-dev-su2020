//how to link objects
Parse.initialize("myAppID");
Parse.serverURL = "https://";

var Post = Parse.Object.extend("Post");

var post = new Post();

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
        comment.set("message", "This is a great post");
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