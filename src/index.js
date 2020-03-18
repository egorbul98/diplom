// import Post from "./js/Post"



import "slick-carousel"

import "./js/gamburger"
import "./js/slick"
import $ from "jquery"


$(document).ready(function () {

  $(".btn-gamburger").on("click", function () {
    $(".header-wrap").toggleClass("active");
  });
  $(".filter-btn").on("click", function () {
    $(".filter .drop-down").slideToggle();
  });

  //LESSON_PAGE
  $(".lesson-page .btn-gamburger").on("click", function () {
    $(".lesson-sidebar").toggleClass("lesson-sidebar--active");
  });
  $(".lesson-page .lesson-header__name").on("click", function () {
    $(this).siblings(".drop-down")
      .slideToggle();
  });

  $('.lesson-page .section').on("click", function () {
    // $('.notifications').toggleClass("notifications--active");
    $(".lesson-sidebar").removeClass("lesson-sidebar--active");
  });

  
//------------
  
  $(".btn-close").on("click", function () {
    $(".header-wrap").removeClass("active");
  });


  $('.item-page .item-sections-item').on("click", function () {
    $(this).toggleClass("active")
      .children(".item-sections-item__cometencies")
      .slideToggle();
  });

  //NOTIFICATION
  // $('.section').on("click", function () {
  //   // $('.notifications').toggleClass("notifications--active");
  //   $('.notifications').slideToggle();
  // });
});


import "./sass/style.scss"