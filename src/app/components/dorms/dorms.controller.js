function DormsController($state) {
    const ctrl = this;

<<<<<<< HEAD
    ctrl.getAll = $state.getAll;
    console.log(ctrl.getAll);

=======
    ctrl.$onInit = function(){
      console.log("found the following dorm: ", ctrl.dorms)

      ctrl.searchDorms = function() {
        ctrl.list = new Array()

        for(var i = 0; i < ctrl.dorms.length; i++){
          if(ctrl.dorms[i].get('Name') == ctrl.name){
            ctrl.list.push(ctrl.textbooks[i])
          }
        }
      }
    }
>>>>>>> 3ba7222fb11a81f7acd400529f2d5f015e8871ff
}

angular
    .module('dorms')
    .controller('DormsController', DormsController)
