function DormsController($state, $mdTheming, $mdDialog, $scope) {
    const ctrl = this;

    // generate themes for the page
    $mdTheming.generateTheme('mark');
    $mdTheming.generateTheme('nd');
    $mdTheming.generateTheme('josh');
    $mdTheming.generateTheme('');

    //declare element
    ctrl.dynamicTheme = 'mark';

    //get modal from the html
    var modal = document.getElementById("myModal");

    // Get NDmap and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }

    // Get the <span> element that closes the NDmap
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the NDmap
    span.onclick = function() {
      modal.style.display = "none";
    }

    // alert to pop up on the screen when Josh's Theme is selected
    $scope.showAlert = function(ev) {
      $mdDialog.show(
        $mdDialog.alert()
          .clickOutsideToClose(true)
          .title('Information Alert!')
          .textContent('Josh was not consulted on the colors in his theme.')
          .ariaLabel('Alert Dialog Demo')
          .ok('Got it!')
          .targetEvent(ev)
        );
    }
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
    .controller('DormsController', DormsController);
