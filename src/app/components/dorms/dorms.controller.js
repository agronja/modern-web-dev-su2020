function DormsController($state) {
    const ctrl = this;

/* We don't use this
    ctrl.$onInit = function(){

      ctrl.searchDorms = function() {
        ctrl.list = new Array()

        for(var i = 0; i < ctrl.dorms.length; i++){
          if(ctrl.dorms[i].get('Name') == ctrl.name){
            ctrl.list.push(ctrl.dorms[i])
          }
        }
      }

    }
    */
}

angular
    .module('dorms')
    .controller('DormsController', DormsController)
