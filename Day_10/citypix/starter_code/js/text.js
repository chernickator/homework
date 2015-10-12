$(document).ready(function(){

var city;

$("div").submit(function(event){
event.preventDefault();
changeBackground();
});

function changeBackground(){
city = $("#city-type").val();
city = city.toLowerCase();
city = city.trim();

	if (city === "new york" || city === "new york city" || city === "nyc"){
	$("body").removeClass().addClass("nyc");
    }
	else if (city === "san francisco" || city === "sf" || city === "bay area"){
 	$("body").removeClass().addClass("sf");
 	}
	else if (city === "los angeles" || city === "la" || city === "lax"){		
	$("body").removeClass().addClass("la");
 	}
	else if (city === "austin" || city === "atx"){
 	$("body").removeClass().addClass("austin");
 	}
 	else (city === "sydney" || city === "syd"){
 	$("body").removeClass().addClass("sydney");
 	};
 	city = $("#city-type").val("");
};
