$(document).ready(function () {
  const $slider = $('.product_ugc-container');
  if (!$slider.length || $slider.hasClass('slick-initialized')) return;

  $slider.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    speed: 300,
    accessibility: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '40px',
          infinite: true,

          dots: true,
        },
      },
    ],
  });

  $('.product_carousel-prev').on('click', () => {
    $slider.slick('slickPrev');
  });

  $('.product_carousel-next').on('click', () => {
    $slider.slick('slickNext');
  });
});
