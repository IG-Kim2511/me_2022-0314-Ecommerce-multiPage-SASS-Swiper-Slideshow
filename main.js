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


// 🍀js1142. nav, footer rendering
const navElm = document.querySelector(".nav");

navElm.innerHTML = `
    <div class="header">
    <a href="index.html" class="logo"><i class="fa-solid fa-store"></i> shopie</a>

    <form action="" class="search-form">
        <!-- 🦄type="search" ,  class="fas fa-search"-->
        <input type="search" id="search-box" placeholder="search here...">
        <label for="search-box" class="fas fa-search"></label>
    </form>

    <div class="icons">
        <div class="menu-btn"><i class="fa-solid fa-bars"></i></div>
        <div id="search-btn"><i class="fa-solid fa-magnifying-glass"></i></div>
        <div class="./products.html"><i class="fa-solid fa-bag-shopping"></i></div>
        <a href="login.html"><i class="fa-solid fa-user"></i></a>
        <a href="#"><i class="fa-solid fa-heart"></i></a>
        <a href="cart.html"><i class="fa-solid fa-cart-shopping"></i></a>
    </div>
    </div>

    <div class="side-bar">
    <div id="close-side-bar"> <i class="fa-solid fa-xmark"></i> </div>
    <div class="user">
        <img src="./images/pokemon-pika.png" alt="">
        <h3>user name : pikachu</h3>
        <a href="#">log out</a>
    </div>

    <nav class="navbar">
        <a href="./index.html"> <i class="fas fa-angle-right"></i> home </a>
        <a href="./products.html"> <i class="fas fa-angle-right"></i> products </a>
        <a href="./cart.html"> <i class="fas fa-angle-right"></i> cart </a>
        <a href="./about.html"> <i class="fas fa-angle-right"></i> about </a>
        <a href="./contact.html"> <i class="fas fa-angle-right"></i> contact </a>
        <a href="./login.html"> <i class="fas fa-angle-right"></i> login </a>
        <a href="./register.html"> <i class="fas fa-angle-right"></i> register </a>
    </nav>
    </div>
`;


const footerElm= document.querySelector('.footer');

footerElm.innerHTML=`
          <section class="quick-links">

            <a href="./index.html" class="logo"> <i class="fas fa-store"></i> shopie </a>

            <div class="links">
                <a href="./index.html">  home </a>
                <a href="./products.html"> products </a>
                <a href="./cart.html">  cart </a>
                <a href="./about.html">  about </a>
                <a href="./contact.html">  contact </a>
                <a href="./login.html"> login </a>
                <a href="./register.html"> register </a>

            </div>

            <div class="share">
                <a href="#" class="fab fa-facebook-f"></a>
                <a href="#" class="fab fa-twitter"></a>
                <a href="#" class="fab fa-instagram"></a>
                <a href="#" class="fab fa-linkedin"></a>
            </div>

        </section>

        <section class="credit">
            <img src="images/card_img.png" alt="">
        </section>


`;
