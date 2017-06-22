1. angular.module('scotchy', [])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl : 'partials/home.html',
                controller : mainController
            })
            .when('/about', {
                templateUrl : 'partials/about.html',
                controller : mainController
            })
            .when('/contact', {
                templateUrl : 'partials/contact.html',
                controller : mainController
            });
        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    });

2. <!doctype html>
<html>
<head>
    <meta charset="utf-8">

    <base href="/">
</head>


BOOKMARK fails because server routes doesn't have it - I am transitioning an angular app that uses hashtags to one that is html5mode. I have successfully set

$locationProvider.html5Mode(true);
And all links from the landing page (index.html) work fine.

The problem is, if partial urls are referenced directly, I get a 404, naturally, since the server endpoint definitions aren't coupled to client side-defined routes.

So without HTML5 we get non-SEO friendly hashbangs, but with it we cannot bookmark anything other than the landing page (the page that bootstraps angular).

SOLUTION:
Server side Using this mode requires URL rewriting on server side, basically you have to rewrite all your links to entry point of your application (e.g. index.html)
In this case, one Java-based solution is to tell the server "map all urls to index.html." This can be done in any HTTP Server or container. I implemented this using Java/Servet since I want my application to be HTTP server agnostic (ie Apache versus NginX, or Tomcat/JBoss only).

This is what I used in server.js for node.js
app.get("*", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


3. // //Enable Smooth Scrolling (Originally here, but since navbar is moved to navbar directive, you need to put the jquery code inside the its link function. Because only link function will guarentee the code is run AFTER the directie is loaded)
  // var $root = $('html, body');
  // $('.navbar a').click(function () {
  //   var href = $.attr(this, 'href');
  //   if (href.includes('#')) {
  //     $root.animate({
  //         scrollTop: $(href).offset().top
  //     }, 500, function () {
  //         window.location.hash = href;
  //     });
  //     return false; //click on about, contact and faq link, will not finish the link action, return false. but click on apply, will go though as link action
  //   }
  // });

4.sticky footer css style
html {
  position: relative;
  min-height: 100%;
}
body {
  /* Margin bottom by footer height */
  margin-bottom: 60px;
}
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  /* Set the fixed height of the footer here */
  height: 50px;
  background-color:aqua;
  color: brown;
}
5 how to use jquery in angular
TWO ways
option a (preferred) use directive and add link function
option b use controller
https://stackoverflow.com/questions/22666289/how-to-use-jquery-in-angularjs

angular.module('App', [])
    .controller('AppCtrl', function ($scope) {

      $scope.model = 0;

      $scope.initSlider = function () {
          $(function () {
            // wait till load event fires so all resources are available
              $scope.$slider = $('#slider').slider({
                  slide: $scope.onSlide
              });
          });

          $scope.onSlide = function (e, ui) {
             $scope.model = ui.value;
             $scope.$digest();
          };
      };

      $scope.initSlider();
  });

6. after you use angular, the custom directive or angular directive like dd-navbar or ng-view are in DOM first, so your real html is not loaded before the jquery run, hence cannot find the html tag. then how to use jquery js in angular, look above points

7. Without angualr in place, the #carousel won't show

8 I use the baseURL way to get rid of the /#/ part in URL. Why? Because otherwise the same page link for example /#contact, /#about won't work.

9 jquery Masonry and hover text picture (can be your template for photo showing)



