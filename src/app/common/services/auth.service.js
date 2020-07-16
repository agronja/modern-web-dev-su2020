class authService {

  constructor(Parse){
    this.Parse = Parse
    this.collection = []
    this.authData = {}
    this.name = 'User'
    this.fields = [
      'username',
      'email',
      'password',
      'dorm'
    ]
  }

  var user = Parse.User();

/* Can this be changed to signUp with the setEmail, setPassword, etc.?
  New(obj) {
    if(angular.isUndefined(obj)){
      const parseObject = new this.Parse.Object(this.name)
      this.Parse.defineAttributes(parseObject, this.fields)
      return parseObject
    } else {
      this.Parse.defineAttributes(obj, this.fields)
      return obj
    }
  }
*/

  // did we use await right?
  onSignIn(user) {
    user = await Parse.User.logIn("myname", "mypass");
    return user
  }

  this.login = function (user) {
    return user
      .logIn(user.email, user.password)
  };

  this.register = function (user) {
    return user
      .signUp(user.email, user.password, user.username, user.dorm)
  };
  this.logout = function () {
    return user
      .logOut()
  };
  /* keep integrity of promise
  this.requireAuthentication = function () {
    return user
      .$waitForSignIn().then(onSignIn);
  }; */
  this.isAuthenticated = function () {
    return user.authenticated();
  };
  //problem to be fixed
  this.getUser = function () {
    var currentUser = user.current();
    if (currentUser) {
      return currentUser
    } else {
      return user
        .signUp(user.email, user.password, user.username, user.dorm)
    }
  };

}

angular
  .module('common')
  .service('authService', authService)
