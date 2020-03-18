import $ from "jquery"
$(document).ready(function () {
  
  $(".recommend-list").slick({
    nextArrow: `<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></i></button>`,
    prevArrow: `<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></i></button>`
  });
});
