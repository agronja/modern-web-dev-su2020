function authService(Parse) {

  this.fields = [
    'email',
    'password',
    'username',
    'dorm'
  ]


  this.logIn = function(user) {
    return Parse.User
      .logIn(user.email, user.password)
      .then(function(user) {
        console.log(user.username + ' logged in');
      })
  };

  this.register = function(user) {

    const userDorm = Parse.Object.extend('Dorms');
    const dormPtr = new userDorm().set('objectId', user.dorm);

    return new Parse.User()
      .set("username", user.username)
      .set("password", user.password)
      .set("email", user.email)
      .set("dorm", dormPtr)
      .signUp()
      .then(function() {
        console.log(user.username + " successfully registered")
      })
  };

  this.logOut = function() {
    var name = Parse.User.current().username
    return Parse.User
      .logOut()
      .then(function() {
        console.log(name + " logged out");
      })
  };

  this.getUser = function() {
    return Parse.User
      .current();
  }

  this.isAuthenticated = function() {
    return Parse.User.authenticated();
  }

  this.requireAuthentication = function($state) {
    var user = this.getUser();
    if(!user){
      $state.go('auth')
    }
  }

  this.getAttributes = function() {
    /* Maybe have something here to get dorm attributes? */
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
  .module('common')
  .service('authService', authService)
