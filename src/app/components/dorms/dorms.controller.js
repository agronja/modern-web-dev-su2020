function DormsController($state) {
    const ctrl = this;
/*
    ctrl.getAll = $state.getAll;
    console.log(ctrl.getAll);
*/
    ctrl.$onInit = function(){
      console.log("found the following dorms: ", ctrl.dorms)

      ctrl.searchDorms = function() {
        ctrl.list = new Array()

        for(var i = 0; i < ctrl.dorms.length; i++){
          if(ctrl.dorms[i].get('Name') == ctrl.name){
            ctrl.list.push(ctrl.textbooks[i])
          }
        }
      }

    }
}

angular
    .module('dorms')
    .controller('DormsController', DormsController)
