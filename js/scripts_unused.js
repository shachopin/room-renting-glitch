$(function () { //document ready start 
    
//   //bootstrap tooltip   Originally here, but now moved to LandingController
//   $('#item1').tooltip(); //make sure the a tag has id="#item1" and title="some hover text"
//   //the hover text will always show by title attribute, but just not bootrap style
//   //to have the bootstrap style, you have to call the above bootstrap method - $('#item1').tooltip();
//   $('[data-toggle="tooltip"]').tooltip();  //css attribute selector..here for testing button hover text
  
  
  // //Enable Smooth Scrolling (Originally here, but since navbar is moved to navbar directive, you need to put the jquery code inside the its link function. Because only link function will guarentee the code is run AFTER the directie is loaded)
  // var $root = $('html, body');
  // $('.navbar a').click(function () {
  //   var href = $.attr(this, 'href');
  //   if (href.includes('#')) {
  //     $root.animate({
  //         scrollTop: $(href).offset().top
  //     }, 500, function () {
  //         window.location.hash = href;
  //     });
  //     return false;  //click on about, contact and faq link, will not finish the link action, return false. but click on apply, will go though as link action (triggering angular routes)
  //   }
  // });
  
// in small device, once you open the navbar drawer, cannot close it unless clicking on the hamburger menu again
// $(document).on('click',function(){ 
//   $('.collapse').collapse('hide');
// })
// the above still won't click on the link and close the drawer
// but a lot better, u can click on anywhere else and close the drawer
// how to click on the link and close the drawer?
  // $('.navbar-collapse ul li a').click(function () { (Originally here, but since navbar is moved to navbar directive, moved to directive too)
  //   $('.collapse').collapse('hide');
  // });
  
  //control contact me message box submission   Originally here, but it's in landing partial page html, so moved to LandingController
  //$(".message-box").css("border", "2px solid red");
  // $("#contact-form-button").on("click", function () {
  //   var comment = $('.message-box').val();
  //   if (comment.length === 0) {
  //     //$('#visible-comment').text("Why is there no message?");
  //     //$('#visible-comment').html(comment); //here same effect
  //     //$('.message-box').hide();
  //     $(".message-box").css("border", "2px solid red");
  //     $('#visible-comment').text("Why is there no message?");
  //     return false; //not submit the form -- essentially this button is not able to submit form any more until you type something in message box, essentially it breaks the button action, hence preventiong from the later form submission
  //     //return or return true will make the button still continue to submit the form
  //   }
  // });
  // //on keyup event in the message box
  // $(".message-box").on("keyup", function () {
  //   $(".message-box").css("border", "");  //to undo to the css change added before by jquery
  //   $('#visible-comment').text("");
  //   var charCount = $(".message-box").val().length; //here we set the length of the content of the textarea to a variable
  //   $("#char-count").html(charCount); //here we show a running character count to the user
  //   if (charCount > 50) {
  //     $('#char-count').text(charCount + " - over 50 characters!");
  //     $("#char-count").css("color", "red");
  //   } else {
  //      // need it to be black
  //     $("#char-count").css("color", "black");
  //   }
  // });    
});  //document ready end