//header scroll
$(document).on("scroll", function () {
  updateHeaderStyle();
});

function updateHeaderStyle() {
  var header = $("header");
  var shouldAddClass = $(document).scrollTop() > 100;

  header.toggleClass("header-dark", shouldAddClass);
}



//change background hover
const buttons = document.querySelectorAll(".menu-btn");
const stage = document.querySelector("#background-panel");

buttons.forEach((button) => {
  button.onmouseover = function () {
    document.querySelector(button.dataset.show).style.opacity = 1;
  };
  button.onmouseout = function () {
    document.querySelector(button.dataset.show).style.opacity = 0;
  };
});

// pdt detail banner 輪播
var pdtDetailBannerswiper = new Swiper('.pdt-banner-swiper', {
  slidesPerView: 1,
  spaceBetween: 40,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {

    768: {  //當螢幕寬度大於768
      slidesPerView: 2,
      spaceBetween: 30,
    },

  }
});

// pdt detail banner 輪播
var pdtDetailBannerswiper = new Swiper('.collect-banner-swiper', {
  slidesPerView: 1,
  spaceBetween: 40,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {

    768: {  //當螢幕寬度大於768
      slidesPerView: 2,
      spaceBetween: 30,
    },

  }
});
