//the element we want the event on
  var button = document.getElementById("button");
  var greeting;
  //Define the event listener function
     
  var onButtonClick = function() {
    var name = document.getElementById("name").value;
    var opinion = document.getElementById("opinion").value;
    if (opinion === "yes") {
        greeting = "Hi " + name + ", what did you like about the site?";
    } else {
        greeting = "Hi " + name + ", what can we do to improve the site?";
    }
    
    document.getElementById("comment").textContent += greeting; 
      
    var input = document.createElement("textarea");
      input.name = "post";
      input.maxLength = "500";
      input.cols = "45";
      input.rows = "6";
      response.appendChild(input); //appendChild
    
  };

  //var deleteClick = function() {
      //var elem = document.getElementById("comment");
      //elem.parentNode.removeChild(elem);
      //response.removeChild(input);
      //response.reload();
  //    return false;
  //};

  //attach event listener to element
  button.addEventListener("click", onButtonClick, true);