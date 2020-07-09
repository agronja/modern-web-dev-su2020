class dormsService {

  constructor(Parse){
    this.Parse = Parse
    this.collection = []
    this.data = {}
    this.name = "Dorms"
    this.fields = [
      'Name',
      'Year',
      'Capacity',
      'Mascot'
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
      .find(result => {
        results.forEach(result => {
          this.Parse.defineAttributes(result, this.fields)
        })
        this.data = results
        return Promise.resolve(results)
      })
      .catch(error => Promise.reject(error))
  }

  getById(id) {
    console.log('id test')
    return new this.Parse.Query(this.New())
      .get(id)
      .then(result => {
        console.log('result', result)
        console.log('pre define id')
        this.Parse.defineAttributes(result, this.fields)
        this.data = result
        console.log('post define id')

        return Promise.resolve(result)
      })
      .catch(error => {console.log('reject') Promise.reject(error)})
  }
}

angular
  .module('common')
  .service('dormsService', dormsService)
