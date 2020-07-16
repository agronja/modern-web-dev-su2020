function authService(Parse) {


  this.logIn = function(user) {
    return Parse.User
      .logIn(user.email, user.password)
      .then(function(user) {
        console.log('User logged in: ' + user.email + ' Password ' + user.password);
      })
  };

  this.register = function(user) {

    return new Parse.User()
      .set("username", user.username)
      .set("password", user.password)
      .set("email", user.email)
      .signUp()
      .then(function() {
        console.log(user.username + " successfully registered! ")
      })
  };

  this.logout = function() {
    return Parse.User
      .logOut()
  };

  this.getUser = function() {
    return Parse.User
      .current();
  }

  /* keep integrity of promise
  this.requireAuthentication = function () {
    return user
      .$waitForSignIn().then(onSignIn);
  };
  this.isAuthenticated = function() {
    return Parse.User().authenticated();
  };
  this.getUser = function() {
    var currentUser = Parse.User().current();
    if (currentUser) {
      return currentUser
    } else {
      return Parse.User()
        .signUp(user.email, user.password, user.username)
    }
  };
*/
}

angular
  .module('auth')
  .service('authService', authService)
