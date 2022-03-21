
/* 
🍚

selecting featured images, 


*/




// 🍀js1212.sideBar 👉main.scss

let sideBar = document.querySelector('.side-bar');
let menuBtn = document.querySelector('.menu-btn');
let closeSideBar = document.querySelector('.close-side-bar');

menuBtn.addEventListener('click',()=>{
        sideBar.classList.toggle('active');
});
closeSideBar.addEventListener('click',()=>{
        sideBar.classList.remove('active');
});



// 🍀js0130.searchForm 👉all html, 👉main.scss

let searchForm = document.querySelector('.search-form');  

document.querySelector('.search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

window.onscroll = () =>{
    sideBar.classList.remove('active');
    searchForm.classList.remove('active');
};


