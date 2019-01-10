$('.slider-track').slick({
  arrows: false,
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
      {
      breakpoint: 1450,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.navigation-toggle').click(function() {
  $(this).toggleClass('is-active');
  $('.nav-links').slideToggle();
});
