(function() {
  'use strict';

  angular
    .module('app.landing')
    .controller('LandingController', LandingController);
  
  function LandingController(LandingService) { 
    var vm = this;
    vm.photos = LandingService.photos;
    
    //$(".message-box").css("border", "2px solid red");
    $("#contact-form-button").on("click", function () {
      var comment = $('.message-box').val();
      if (comment.length === 0) {
        //$('#visible-comment').text("Why is there no message?");
        //$('#visible-comment').html(comment); //here same effect
        //$('.message-box').hide();
        $(".message-box").css("border", "2px solid red");
        $('#visible-comment').text("Why is there no message?");
        return false; //not submit the form -- essentially this button is not able to submit form any more until you type something in message box, essentially it breaks the button action, hence preventiong from the later form submission
        //return or return true will make the button still continue to submit the form
      }
    });
    //on keyup event in the message box
    $(".message-box").on("keyup", function () {
      $(".message-box").css("border", "");  //to undo to the css change added before by jquery
      $('#visible-comment').text("");
      var charCount = $(".message-box").val().length; //here we set the length of the content of the textarea to a variable
      $("#char-count").html(charCount); //here we show a running character count to the user
      if (charCount > 50) {
        $('#char-count').text(charCount + " - over 50 characters!");
        $("#char-count").css("color", "red");
      } else {
         // need it to be black
        $("#char-count").css("color", "black");
      }
    });    
    
  }
 })();