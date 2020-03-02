import "bootstrap";
import "popper.js";
import $ from "jquery";

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
