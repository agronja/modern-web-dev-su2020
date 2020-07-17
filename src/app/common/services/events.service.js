// service for using and getting the events found on the server
class eventsService {

  constructor(Parse){
    this.Parse = Parse
    this.collection = []
    this.data = {}
    this.name = "Events"
    this.fields = [
      'Author',
      'Date',
      'Title',
      'Body',
      'Dorm'
    ]
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

  getAll(){
    return new this.Parse.Query(this.New())
      .find(results => {
        results.forEach(result => {
          this.Parse.defineAttributes(result, this.fields)
        })
        this.data = results
        return Promise.resolve(results)
      })
      .catch(error => Promise.reject(error))
  }
}

angular
  .module('common')
  .service('eventsService', eventsService)
