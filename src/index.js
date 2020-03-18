// import Post from "./js/Post"



import "slick-carousel"

import "./js/gamburger"
import "./js/slick"
import $ from "jquery"


$(document).ready(function () {

  $(".btn-gamburger").on("click", function () {
    $(".header-wrap").toggleClass("active");
  });
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



// $(document).ready(function () {

// });
// //JSON
// import posts from "./js/json/posts.json"


// const post = new Post("Пост 1");
// const str = post.toString();


// $(document).ready(function () {
//   let $parent = $('.list');
//   $parent.empty();
//   let str = '';
//   for (const key in posts) {
//     str += `
//     <h3 class="title">${posts[key].title}</h3>
//       <div class="content">${posts[key].price}</div>
//       <div class="footer">футер</div>
//     `
//   }

//   $parent.append(str);
// });




import "./sass/style.scss"