function DormsService($http){
    const self = this;
    self.getDorms = getDorms;
    
    function getDorms(){
        return $http.get('./json/dorms.json')
    }
}

angular
    .module('components.dorms')
    .service('DormsService', DormsService);