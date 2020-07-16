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
        console.log(user.username + " successfully registered")
      })
  };

  this.logOut = function() {
    return Parse.User
      .logOut()
      .then(function() {
        console.log("User logged out");
      })
  };

  this.getUser = function() {
    return Parse.User
      .current();
  }

  this.isAuthenticated = function() {
    return Parse.User.authenticated();
  }

  this.requireAuthentication = function() {
    return Parse.User.current();
  }

  /* keep integrity of promise
  this.requireAuthentication = function () {
    return user
      .$waitForSignIn().then(onSignIn);
  };
  this.isAuthenticated = function() {
    return Parse.User().authenticated();
  };
*/
}

angular
  .module('auth')
  .service('authService', authService)
