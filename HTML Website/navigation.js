var today = Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening';
} else if (hourNow > 12) {
    greeting = 'Good Afternoon';
} else if (hourNow > 0) {
    greeting = 'Good Morning';
} else {
    greeting = 'Welcome';
}

document.write('<h4>' + greeting + '</h4>');








//this.addEventListener("click", myFunction);

//function myFunction() {
//  alert ("Hello World!");
//}