$(function(){
 if ($(window).scrollTop()>="250") $("#ToTop").fadeIn("slow")
 $(window).scroll(function(){
  if ($(window).scrollTop()<="250") $("#ToTop").fadeOut("slow")
   else $("#ToTop").fadeIn("slow")
 });

 if ($(window).scrollTop()<=$(document).height()-"999") $("#OnBottom").fadeIn("slow")
 $(window).scroll(function(){
  if ($(window).scrollTop()>=$(document).height()-"999") $("#OnBottom").fadeOut("slow")
   else $("#OnBottom").fadeIn("slow")
 });

 $("#ToTop").click(function(){$("html,body").animate({scrollTop:0},"slow")})
 $("#OnBottom").click(function(){$("html,body").animate({scrollTop:$(document).height()},"slow")})
});


(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 56)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

})(jQuery); // End of use strict
