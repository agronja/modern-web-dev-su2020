class AuthService {

  constructor(Parse){
    this.Parse = Parse
    this.collection = []
    this.authData = {}
  }

/* Can this be changed to signUp with the setEmail, setPassword, etc.? */
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

  function onSignIn(user) {
    user = await Parse.User.logIn("myname", "mypass");
    return user
  }

  function storeAuthData(response) {
    authData = response;
    return authData;
  }

  function clearAuthData() {
    authData = null;
  }

  this.login = function (user) {
    return user
      .logIn(user.email, user.password)
      // Do we need this if .logIn and .logOut has sessions on the disk? Like we can use current()
      .then(storeAuthData);
  };

  this.register = function (user) {
    return user
      .signUp(user.email, user.password, user.username, user.dorm)
      .then(storeAuthData);
  };
  this.logout = function () {
    return user
      .logOut()
      .then(clearAuthData);
  };
  this.requireAuthentication = function () {
    return user
      .$waitForSignIn().then(onSignIn);
  };
  this.isAuthenticated = function () {
    return user.authenticated();
  };
  this.getUser = function () {
    return user.current();
  };

}

angular
  .module('common')
  .service('AuthService', AuthService)
