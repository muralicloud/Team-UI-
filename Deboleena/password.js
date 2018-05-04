$(document).ready(function(){

		function validation(){
				var pwd_field = $("#pwd");
		    	$('#showCheckbox').css("display" , "block");
		    	
		    	console.log(pwd_field.val().length);
		    	if (pwd_field.val().length > 0) {

				      
				      // CHECK FOR CAPITAL LETTER
				      pattern = new RegExp(/[A-Z]/);
				      if (pattern.test(pwd_field.val())) {
				         
				         $("#capital").prop("checked",true);
				         
				      } 
				     
				      
				      // CHECK FOR NUMBER
				      pattern = new RegExp(/\d/);
				      if (pattern.test(pwd_field.val())) {
				         
				         $("#number").prop("checked",true);
				      
				      } 
				      
				      // CHECK FOR SYMBOL
				      pattern = new RegExp(/[-!@$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g);
				      if (pattern.test(pwd_field.val())) {
				       
				         $("#symbol").prop("checked",true);
				      } 

				      // CHECK FOR LENGTH
				      if (pwd_field.val().length >= 8) {
				            $("#length").prop("checked",true);
				      } 

				   

		    	}
		    	
		}
	
		$("#pwd").keyup(validation);
		function login(){

			$('#welcome').css("display" , "block");

			if ($("#capital").prop('checked') && $("#number").prop('checked') &&  $("#symbol").prop('checked') && $("#length").prop('checked')){ 
				$('#showCheckbox').css("display" , "none");
				//console.log("welcome");
				$('#welcome').html("<h1>Welcome Here</h1>").css("text-align","center");
				
			}
		}

		$("#btn").click(login);

});

