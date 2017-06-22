(function() {
  'use strict';
  
  angular
    .module('app.photoshowroom')
    .controller('PhotoShowRoomController', PhotoShowRoomController);
  
  function PhotoShowRoomController() { 
    var vm = this;  
    
    $(".grid").append("\
      <div class='grid-sizer''></div>\
    ")
    //I was thinking maybe I can use a service and feed the data into photoshowroom controller using ng-repeat
    //unfortunately the img show, but overlapping each other
    //reason is masonry is run before the ng-repeat generates the final HTML
    //so I have to programmatically do it like the below way
    //however the carousel photos are still from landing service, and it worked fine, because there was no masonry there
    for (var i = 0; i < rooms.length; i++) { 
      $(".grid").append("\
       <div class='work-img grid-item'>\
        <img src='" + rooms[i].pic + "'/>\
        <span class='info'>\
         " + rooms[i].description + "\
        </span>\
       </div>\
     ");
    }
    
    $(".work-img").mouseenter( function() {
    //console.log(this); //this is the DOM object(for anchor tag) 
    //on which that event got triggered, 
    //you need to wrap this DOM with $ 
    //DOM object -> jquery object so you can use jqeury methods
    //kinda like above image[i].css is not defined issue
    //$(this).hide(); //works, when mouse hover, item vanishes
    /*
    this, in our situation, refers to the anchor tag. 
    What we need is the span tag with the class of "info" inside this anchor tag. 
    this does not work like a regular descendant selector 
    like the ones we have used before. 
    But jQuery still makes it easy for us to select an element inside this. 
    All we need is to write the following code:

    $(".info", this)
    */   
    $(".info", this).show();
    }).mouseleave(function(){
    $(".info", this).hide();
    }); //method chaining
                
    var $grid = $('.grid').imagesLoaded(function() {
      $grid.masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer'
      }); 
    });
  }
 })();