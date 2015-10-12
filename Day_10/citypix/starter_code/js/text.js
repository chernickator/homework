$(document).ready(function(){

var city;

$("#entry").submit(function(event){
event.preventDefault();
changeBackground();
});


function changeBackground(){
	city = $("#city-type").val();
	city = city.toLowerCase();
	city = city.trim();

	if (city === "new york" || city === "new york city" || city === "nyc"){
		$("body").addClass("nyc");
	}
	else if (city === "san francisco" || city === "sf" || city === "bay area"){
		$("body").addClass("sf");
	}
	else if (city === "los angeles" || city === "la" || city === "lax"){
		$("body").addClass("la");
	}
	else if (city === "austin" || city === "atx"){
		$("body").addClass("austin");
	}
	else if (city === "sydney" || city === "syd"){
		$("body").addClass("sydney");
	};

	$("#entry")[0].reset();
};

});