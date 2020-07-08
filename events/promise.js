//Promises in Parse
function onReady() {
    var promise = new Parse.Promise();
    
    setTimeout(function() {
        console.log("Ready to work");
        promise.reject("Something went wrong!");
    }, 2000);
    
    return promise;
}

function onError(err) {
    console.error(err);
};

onReady()
    .then(onReady,onError);

console.log("onReady() called");

