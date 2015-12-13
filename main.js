$(document).ready(function() {
  var cleanUp = function () {
    $(".main p").remove();
  }

  $("input:button").click(function(event){
     playWithNumber();

  });

  
  

  function playWithNumber(){
    cleanUp();
    var userValue = $("input:text").val();
    
    if(isNaN(userValue) || userValue % 1 != 0 || userValue == "") {
      alert("enter a valid decimal number");
  	}

  	else{
  		

  	    for (var NumberCount = 1; NumberCount <= userValue; NumberCount++) {
    		 	if(NumberCount % 3 == 0  && NumberCount % 5 == 0){
    		 		$(".main").append("<p>FizzBuzz</p>");
    		 	
    		 	}
    		 	else if(NumberCount % 3 == 0){
    		 		$(".main").append("<p>Fizz</p>")
    		 	}

    		 	else if(NumberCount % 5 == 0){
    		 		$(".main").append("<p> Buzz</p>")
    		 	}
    		 	
    		 	else{
            $(".main").append("<p>"+NumberCount+"</p>");

          }

        };

  	}

  }

  
 
 
});