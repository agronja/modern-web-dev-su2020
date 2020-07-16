function authService(Parse) {


  this.logIn = function(user) {
    return Parse.User
      .logIn(user.email, user.password)
      .then(function(user) {
        console.log('User logged in: ' + user.email + ' Password ' + user.password);
      })
  };

  this.register = function(user) {
    var auth = new Parse.User()

    auth.set("username", user.username);
    auth.set("password", user.password);
    auth.set("email", user.email);

    return auth
      .signUp()
      .then(function() {
        console.log(user);
        console.log("successfully registered!");
      })
  };

  this.logout = function() {
    return Parse.User
      .logOut()
  };

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
