function DormsController($state, $mdTheming, $mdDialog, $scope) {
    const ctrl = this;

    $mdTheming.generateTheme('mark');
    $mdTheming.generateTheme('nd');
    $mdTheming.generateTheme('josh');
    $mdTheming.generateTheme('');

    ctrl.dynamicTheme = 'mark';

    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }

    $scope.showAlert = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    // Modal dialogs should fully cover application
    // to prevent interaction outside of dialog
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
