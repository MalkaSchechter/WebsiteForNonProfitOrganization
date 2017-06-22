
$(document).ready(function() {

$("a").hover(function(){
	$(this).css("color", "green");
	
});


$("a").mouseout(function(){
	$(this).css("color", "grey");
	
});
});