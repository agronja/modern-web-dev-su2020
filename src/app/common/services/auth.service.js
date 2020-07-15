class AuthService {

  constructor(Parse){
    this.Parse = Parse
    this.collection = []
    this.authData = {}
  }

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

  onSignIn(user) {
    user = await Parse.User.logIn("myname", "mypass");
    return auth.$requireSignIn();
  }

  clearAuthData() {
    authData = null;
  }

  this.login = function (user) {
    return auth
      .$signInWithEmailAndPassword(user.email, user.password)
      .then(storeAuthData);
  };

  this.register = function (user) {
    return auth
      .$createUserWithEmailAndPassword(user.email, user.password)
      .then(storeAuthData);
  };
  this.logout = function () {
    return auth
      .$signOut()
      .then(clearAuthData);
  };
  this.requireAuthentication = function () {
    return auth
      .$waitForSignIn().then(onSignIn);
  };
  this.isAuthenticated = function () {
    return !!authData;
  };
  this.getUser = function () {
    if (authData) {
      return authData;
    }
  };

}

angular
  .module('auth')
  .service('AuthService', AuthService)
