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
    authData = user;
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
<<<<<<< HEAD:src/app/common/services/auth.service.js
  .module('common')
=======
  .module('auth')
>>>>>>> 7fae7da9d795f3dfef65e0f27b2d2f253204d79d:src/app/common/auth/auth.service.js
  .service('AuthService', AuthService);