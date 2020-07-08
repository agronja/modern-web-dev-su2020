function AppController($state) {
  var ctrl = this;
}

New(obj) {
    if (angular.isUndefined(obj)) {
        const parseObject = new this.Parse.Object(this.name)
        this.Parse.defineAttributes(parseObject, this.fields)
        return parseObject
    }
    else {
        this.Parse.defineAttributes(obj, this.fields)
        return obj
    }
}



angular
  .module('common')
  .controller('AppController', AppController)
