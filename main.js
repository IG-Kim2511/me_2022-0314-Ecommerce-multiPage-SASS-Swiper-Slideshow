// 🍀js0432 - Swiper.js library 👉index.html  👉main.scss
var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
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



// 🍀js1212.sideBar 👉main.scss

let sideBar = document.querySelector('.side-bar');
let menuBtn = document.querySelector('#menu-btn');
let closeSideBar = document.querySelector('#close-side-bar');

menuBtn.addEventListener('click',()=>{
        sideBar.classList.toggle('active');
});
closeSideBar.addEventListener('click',()=>{
        sideBar.classList.remove('active');
});



// 🍀searchForm

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

window.onscroll = () =>{
    sideBar.classList.remove('active');
    searchForm.classList.remove('active');
};

document.querySelectorAll('.accordion-container .accordion').forEach(accordion =>{
    accordion.onclick = () =>{
        accordion.classList.toggle('active');
    }
});
