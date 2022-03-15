
// 🍀js0432 - Swiper.js library 👉index.html
var swiper = new Swiper(".home-slider", {
    loop:true,
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


//🍀 js0501- Swiper.js library 👉about.html
// var swiper = new Swiper(".review-slider", {
//     loop:true,
//     grabCursor:true,
//     spaceBetween: 20,
//     breakpoints: {
//         450: {
//           slidesPerView: 1,
//         },
//         768: {
//           slidesPerView: 2,
//         },
//         1024: {
//           slidesPerView: 3,
//         },
//     },
// });