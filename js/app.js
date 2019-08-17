
document.getElementById("gen").onclick = btnCLICK;
var ctr = 0;
function btnCLICK() {
     document.getElementById("gen").innerHTML = "Make Me Laugh";
	 document.getElementById("gen").disabled = true;
	 ctr++;
	  
      const FIRSTAPI = 'https://geek-jokes.sameerkumar.website/api';
      
      $.ajax({
            method: 'GET',
            url: FIRSTAPI,
        }) .then(function(parameter){
		
              if(ctr <=5) {
			  console.log(parameter);
			  console.log(ctr);
			  $("#result").append(parameter);
			  document.getElementById("gen").disabled = false;
			  
              } else {
			  document.getElementById("result").innerHTML = "";
			  document.getElementById("gen").innerHTML = "RESET";
			  console.log("exceed");
			   ctr = 0;
			   document.getElementById("gen").disabled = false;
			  }
        })


}