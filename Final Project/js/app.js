$(document).ready(function(){

$('.mobile-menu').click(function(){
  $('.nav').toggleClass('open');        
});

$(function(){

    $('#navigation a').click(function(){

        $('#navigation .active').removeClass('active'); // remove the class from the currently selected
        $(this).addClass('active'); // add the class to the newly clicked link

    });

});

$("form").on("submit",function(e){
	e.preventDefault();
	var name = $("input[name='Full_Name']").val();
	var email = $("input[name='Email_Address']").val();
	var textArea1 = $("textarea[name='Your_Message']").val();


	var data = {
		userName: name,
		UserTextArea1: textArea1,
		userEmail: email,
	};

	console.log(data);
});

});