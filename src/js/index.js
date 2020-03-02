import "bootstrap";
import "popper.js";
import $ from "jquery";

(function($) {
  $(function() {
    $("#about-us_toggle").on("click", function() {
      $("#about-us_col2").removeClass("d-none");
      if ($(this).html() == "подробнее") {
        $(this).html("скрыть");
      } else {
        $(this).html("подробнее");
      }
    });
  });
})(jQuery);

$(document).ready(function() {
  $(".specialists .owl-carousel, .gallery_carousel .owl-carousel").owlCarousel({
    items: 3,
    nav: true,
    margin: 78,
    navText: false,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3
      }
    }
  });

  $(".slider-main .owl-carousel").owlCarousel({
    items: 1,
    nav: false
  });
});
