$(document).ready(function () {

  //AOS (760px 이하에서 제거)
  AOS.init({
    disable: function () {
      var maxWidth = 760;
      return window.innerWidth < maxWidth;
    }
  });

  let ww = $(window).width();
  layout1();
  layout2();

  // sec-3-2 swiper
  function layout1() {
    if (ww >= 959) {
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 60,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: true,
      });
    } else if (ww < 959 && ww > 760) {
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: true,
      });
    }
  }

  function layout2() {
    if (ww > 1400) {
      $(window).scroll(function () {
        let sct = $(window).scrollTop();
        if (sct >= 760) {
          $('.header-area').addClass('active');
        } else {
          $('.header-area').removeClass('active');
        }
      });

    } else if (ww <= 1400) {


      $('.h-menu').click(function () {
        //   $(this).stop().children('.h-submenu').slideToggle();
        //   $(this).stop().siblings().children('.h-submenu').slideUp();
      });
    }
  }

  //리사이즈시 자동호출
  $(window).resize(function () {
    ww = $(window).width();
    layout1();
    layout2();
  });

  //햄버거버튼 클릭
  $('#hamburger').click(function () {
    $(this).toggleClass('active');
    $('.hamburger-menu-box').toggleClass('active');

    if ($('#hamburger').hasClass('active') == false) {
      $('.hamburger-menu-sub').slideUp();
    } else {

    }

  });

  //햄버거버튼 클릭하면 나타나는 메뉴 조작
  $('.hamburger-menu-main-name').click(function () {
    $(this).siblings('.hamburger-menu-sub').slideToggle();
    $(this).parent('.hamburger-menu-main').siblings().children('.hamburger-menu-sub').slideUp();
  });

});