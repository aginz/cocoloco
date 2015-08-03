// NAVBAR
$(function() {
  $("nav ul li").on("click", function(){
    $("nav ul li").removeClass("active");
    $(this).addClass("active");
  });
};

// FLEXSLIDER
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    controlNav: false
  });
});

// SMOOTH SCROLL
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 4000);
        return false;
      }
    }
  });
});
