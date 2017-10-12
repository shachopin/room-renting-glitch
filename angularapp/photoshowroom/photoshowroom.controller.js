(function() {
  'use strict';
  
  angular
    .module('app.photoshowroom')
    .controller('PhotoShowRoomController', PhotoShowRoomController);
  
  function PhotoShowRoomController(/*$firebaseArray*/) { 
    var vm = this;  
    
    //option 1 works - using static file-based data
//     var rooms = [{
//         pic: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg",
//         description: "Sinatra Blackjack Game"
//       },{
//         pic: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/submerged.jpg",
//         description: "First Bedroom 1"
//       },{
//         pic: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/look-out.jpg",
//         description: "Sinatra Blackjack Game"
//       },{
//         pic: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/one-world-trade.jpg",
//         description: "Sinatra Blackjack Game"
//       },{
//         pic: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/cat-nose.jpg",
//         description: "Sinatra Blackjack Game"
//       }
//     ];
    
//     $(".grid").append("\
//       <div class='grid-sizer''></div>\
//     ")
//     //I was thinking maybe I can use a service and feed the data into photoshowroom controller using ng-repeat
//     //unfortunately the img show, but overlapping each other
//     //reason is masonry is run before the ng-repeat generates the final HTML
//     //so I have to programmatically do it like the below way
//     //however the carousel photos are still from landing service, and it worked fine, because there was no masonry there
//     for (var i = 0; i < rooms.length; i++) { 
//       $(".grid").append("\
//        <div class='work-img grid-item'>\
//         <img src='" + rooms[i].pic + "'/>\
//         <span class='info'>\
//          " + rooms[i].description + "\
//         </span>\
//        </div>\
//      ");
//     }
    
//     $(".work-img").mouseenter( function() {
//     //console.log(this); //this is the DOM object(for anchor tag) 
//     //on which that event got triggered, 
//     //you need to wrap this DOM with $ 
//     //DOM object -> jquery object so you can use jqeury methods
//     //kinda like above image[i].css is not defined issue
//     //$(this).hide(); //works, when mouse hover, item vanishes
//     /*
//     this, in our situation, refers to the anchor tag. 
//     What we need is the span tag with the class of "info" inside this anchor tag. 
//     this does not work like a regular descendant selector 
//     like the ones we have used before. 
//     But jQuery still makes it easy for us to select an element inside this. 
//     All we need is to write the following code:
//     $(".info", this)
//     */   
//     $(".info", this).show();
//     }).mouseleave(function(){
//     $(".info", this).hide();
//     }); //method chaining
                
//     var $grid = $('.grid').imagesLoaded(function() {
//       $grid.masonry({
//         itemSelector: '.grid-item',
//         percentPosition: true,
//         columnWidth: '.grid-sizer'
//       }); 
//     });
    
     //option 2 works fine - retrieving data from firebase
  //now that I can still use firebase and ng-repeat, so pulling data from firebase now, no longer need rooms.js
  //this option only needs the data structure to be pic: and description:   
    $(".grid").append("\
      <div class='grid-sizer''></div>\
    ")
    var ref = firebase.database().ref('rooms');
    ref.once('value',function(snap) {
      snap.forEach(function(item) {
         $(".grid").append("\
           <div class='work-img grid-item'>\
            <img src='" + item.val().pic + "'/>\
            <span class='info'>\
             " + item.val().description + "\
            </span>\
           </div>\
         ");        
      }
    ); 
      
      //solution is put the jquery part of code in here:
      //if you put outside, since .once('value) is a async, will not work because DOM is not finished loading
      $(".work-img").mouseenter( function() {
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
      
    });
    
    //console.log(rooms.length); //beccause snap.forEach is async call, here will show 0
   
   //below doesn't work put there because the above firebase data retrieval call is async, 
   //when I try to run these jquery statements, the above HTML DOM are NOT generated yet.
  
    
//     $(".work-img").mouseenter( function() {
//     //console.log(this); //this is the DOM object(for anchor tag) 
//     //on which that event got triggered, 
//     //you need to wrap this DOM with $ 
//     //DOM object -> jquery object so you can use jqeury methods
//     //kinda like above image[i].css is not defined issue
//     //$(this).hide(); //works, when mouse hover, item vanishes
//     /*
//     this, in our situation, refers to the anchor tag. 
//     What we need is the span tag with the class of "info" inside this anchor tag. 
//     this does not work like a regular descendant selector 
//     like the ones we have used before. 
//     But jQuery still makes it easy for us to select an element inside this. 
//     All we need is to write the following code:

//     $(".info", this)
//     */  
//     $(".info", this).show();
//     }).mouseleave(function(){
//     $(".info", this).hide();
//     }); //method chaining
    
//     var $grid = $('.grid').imagesLoaded(function() {
//       $grid.masonry({
//         itemSelector: '.grid-item',
//         percentPosition: true,
//         columnWidth: '.grid-sizer'
//       }); 
//     });
    
    
    //option 3 works partially
//     //this approach needs data structure to be name: pic: description:
//     //the $grid.masonry({
//     //    itemSelector: '.grid-item',
//     //doesn't work property, causng te layout to look weird. Because angular code will finish loading HTML AFTER jquery is executed
//     //And I don't know how to make the above jquery run only after angular finishes loading
//     vm.rooms = $firebaseArray(firebase.database().ref('rooms'));  
    
//     vm.handleMouseOver = function(room) {
//       $("[roomname='" + room.name + "']").show();
//     };
    
//     vm.handleMouseLeave = function(room) {
//      $("[roomname='" + room.name + "']").hide();
//     }
    
//     var $grid = $('.grid').imagesLoaded(function() {
//       $grid.masonry({
//         itemSelector: '.grid-item',
//         percentPosition: true,
//         columnWidth: '.grid-sizer'
//       }); 
//     });
    
  }
 })();