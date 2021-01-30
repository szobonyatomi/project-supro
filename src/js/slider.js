/* Pic-Thumbnail-Logo Slider */

$(document).ready(function () {
  $('.customer-logos').slick({
    speed: 7000 /* sliding speed bigger number -> slowly */,
    cssEase: 'linear',
    autoplaySpeed: 0,
    slidesToShow: 7 /* showing image number/slider  -> image/slider size */,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});

/* s0urce: https://github.com/kenwheeler/slick thx: kenwheeler */
