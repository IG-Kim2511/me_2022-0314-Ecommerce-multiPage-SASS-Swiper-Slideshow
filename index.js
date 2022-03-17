// 🍀js0432 - Swiper.js library 👉index.html  👉main.scss
let swiper = new Swiper(".home-slider", {
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });