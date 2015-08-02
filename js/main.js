// NAVBAR
var main = function() {
  $("nav ul li").on("click", function(){
    $("nav ul li").removeClass("active");
    $(this).addClass("active");
  });
};

$(document).ready(main);

// FLEXSLIDER
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});
