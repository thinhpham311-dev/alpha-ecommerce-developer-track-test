$('.main_product-image-carousel').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  infinite: true,
  asNavFor: '.main_product-image-carousel_thumbs',
  prevArrow: `
    <button type="button" class="slick-prev">
      <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/iconamoon_arrow-up-2-thin_1.png" />
    </button>
  `,
  nextArrow: `
    <button type="button" class="slick-next">
      <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/iconamoon_arrow-up-2-thin.png" />
    </button>
  `,
});

$('.main_product-image-carousel_thumbs').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.main_product-image-carousel',
  focusOnSelect: true,
  arrows: false,
  infinite: true,
});
