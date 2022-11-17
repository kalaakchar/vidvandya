(function ($) {
 "use strict";
            
    if (window.matchMedia('(min-width: 768px)').matches){
      $('.navbar .nav-item').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).slideDown(400);
      }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).slideUp(300);
      });
    }  
   
    // STICKY ACTIVE
      var activeSticky = $('#active-sticky'),
          winD = $(window);
        winD.on('scroll',function() {
          var scroll = $(window).scrollTop(),
                isSticky = activeSticky;
          if (scroll < 100) {
                isSticky.removeClass("is-sticky");
          }
          else{
            isSticky.addClass("is-sticky");
          }
       });
    
     

    /* Preloader */
    
    var preloader = document.getElementById("preloader");

        window.addEventListener('load', function(){
          overlay.style.display = 'none';
        })
      // Scroll To Top 
    var scrollTop = $(".scrollToTop");
    $(window).on('scroll', function () {
      if ($(this).scrollTop() < 500) {
        scrollTop.removeClass("active");
      } else {
        scrollTop.addClass("active");
      }
    });
    //Click event to scroll to top
    $('.scrollToTop').on('click', function () {
      $('html, body').animate({
        scrollTop: 0
      }, 500);
      return false;
    });
})(jQuery);
