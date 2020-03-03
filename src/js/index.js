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
  $(".specialists .carousel").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    // appendArrows: $(".specialists__img"),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $(".slider-main .carousel").slick({
    dots: true,
    arrows: false
  });

  $(".gallery_carousel .carousel").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});
