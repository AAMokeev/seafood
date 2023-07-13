$(function(){
    $('.top__slider').slick({
        prevArrow: '<img src="images/white_arrow-prev.svg" alt="" class="top__slider-arrow-prev">',
        nextArrow: '<img src="images/white_arrow-next.svg" alt="" class="top__slider-arrow-next">',
        dots: true,
        vertical: true,
        autoplay: true,
        autoplaySpeed: 3000,
    })
});

const menuBtn = document.querySelector('.btn-burger');
const menuMobile = document.querySelector('.menu__list-mobile');

menuBtn.addEventListener('click', ()=> {
  menuMobile.classList.toggle('menu--open');
});