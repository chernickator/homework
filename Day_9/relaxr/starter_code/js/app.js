$(document).ready(function(){
	event.preventDefault();

	$("p.readmore a").on("click", function(e) {
		$("#show-this-on-click").slideDown();
		$(".readmore").addClass("hide");
		$(".readless").removeClass("hide");
	});
	
	$("p.readless a").on("click", function(e) {
		$("#show-this-on-click").slideUp();
		$(".readless").addClass("hide");
		$(".readmore").removeClass("hide");
	});
});
