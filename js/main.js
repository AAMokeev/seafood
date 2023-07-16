$(function(){
    $('.top__slider').slick({
        prevArrow: '<img src="images/white_arrow-prev.svg" alt="" class="top__slider-arrow-prev">',
        nextArrow: '<img src="images/white_arrow-next.svg" alt="" class="top__slider-arrow-next">',
        dots: true,
        vertical: true,
        autoplay: true,
        autoplaySpeed: 3000, 
        responsive: [
          {
            breakpoint: 481,
            settings: {
              dots: false,
              arrows: false,
            }
          }
        ]
    });

    $('.select__slider').slick({
      prevArrow: '<img src="images/blue_arrow-prev.svg" alt="" class="select__slider-arrow-prev">',
      nextArrow: '<img src="images/blue_arrow-next.svg" alt="" class="select__slider-arrow-next">',
      vertical: true,
      slidesToShow: 6,
      focusOnSelect: true,
      slidesToScroll: 1,
      asNavFor: '.product__slider',
      responsive: [
        {
          breakpoint: 1001,
          settings: {
            dots: true,
            arrows: false,
            vertical: false,
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 481,
          settings: {
            dots: true,
            arrows: false,
            vertical: false,
            slidesToShow: 1,
          }
        }
      ]
  });

  $('.product__slider').slick({
    arrows: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.select__slider',
})
});

const menuBtn = document.querySelector('.btn-burger');
const menuMobile = document.querySelector('.menu__list-mobile');

menuBtn.addEventListener('click', ()=> {
  menuMobile.classList.toggle('menu--open');
});