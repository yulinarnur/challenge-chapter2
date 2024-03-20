$(document).ready(function () {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    center: true,
    loop: true,
    margin: 10,
    nav: false,
    autoplay: false,
    paginationSpeed: 500,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  });

  $(".btn-left").click(function () {
    owl.trigger("prev.owl.carousel");
  });

  $(".btn-right").click(function () {
    owl.trigger("next.owl.carousel");
  });
});
