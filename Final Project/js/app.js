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
	var firstName = $("input[name='firstName']").val();
	var lastName = $("input[name='lastName']").val();
	var email = $("input[name='email']").val();
	var textArea1 = $("textarea[name='textArea1']").val();


	var data = {
		userFirstName: firstName,
		userLastName: lastName,
		userPhone: [phone1, phone2, phone3],
		userAddress: [street, street2, city, state, zip],
		userCourse: course,
		UserTextArea1: textArea1,
		userRefferal: refferal,
		UserTextArea2: textArea2,
	};

	console.log(data);
});

});