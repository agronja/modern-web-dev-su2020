//the service for using athentication in our website
function authService(Parse) {

  this.fields = [
    'email',
    'password',
    'username',
    'dorm',
    'attributes'
  ]

  //upon logining in
  this.logIn = function(user) {
    return Parse.User
      .logIn(user.email, user.password)
      .then(function(user) {
        console.log(user.username + ' logged in');
      })
  };

  //upon registering (see the register component)
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

  //for logging out
  this.logOut = function() {
    var name = Parse.User.current().username
    return Parse.User
      .logOut()
      .then(function() {
        console.log(name + " logged out");
      })
  };

  //for getting the current user
  this.getUser = function() {
    return Parse.User
      .current();
  }

  //check for authentication
  this.isAuthenticated = function() {
    return Parse.User.authenticated();
  }

  //returns if the user has an account and is logged in
  this.requireAuthentication = function() {
    var user = this.getUser();

    return new Promise(function(resolve,reject) {
        if(!!user && user.authenticated()) {
          resolve();
        } else {
          reject();
        }

    });
  }


}

angular
  .module('common')
  .service('authService', authService)
