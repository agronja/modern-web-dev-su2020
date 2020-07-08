//Promise in Practice
Parse.initialize("myAppID");
Parse.serverURL = 'https://';

var Post = Parse.Object.extend("Post");
var post = new Post();
post.set("body", "Hello");
post.set("tags", ["first-post", "welcome"]);
post.set("numComments", 0);

post.save().then(function success(obj) {
    console.log("Successfully saved " + post.id);
    var q = new PArse.Query("Post");
    return q.get(post.id);
}).then(function success(obj) {
    console.log("Successfully got" + post.id);
    post.set("body", "This is an updated message");
    post.increment("numComments");
    return post.save();
}).then(function success(obj) {
    console.log("Successfully edited " + post.id);
}, function error(obj, err) {
    console.error(err);
});