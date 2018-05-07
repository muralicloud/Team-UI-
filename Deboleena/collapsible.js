$(document).ready(function(){

	function deleterow(){
		console.log($(this));
		console.log($(this).parent());
		console.log($(this).parent().parent());
		// console.log(this.parent().parent());

		$(this).parent().parent().remove();
	}

	$(".btn").click(deleterow);
});