
    
const cartItemsEl = document.querySelector('.shopping-cart .box-container');

// 🦄multi page : 저장된 localstorage data활용하기 - cart.js

//🥒 cart 
// let cart =[];
// 🥒js45-30,-40,-50,-60, localStorage
let cart = JSON.parse(localStorage.getItem("CART")) || [];



// 🍀js13-40. renderCartItems :  cart에 아이템 render
/* 
    🦄databinding 안에 js코드 넣기

    + substring(~,~) 하는법 : ${pp_item.title.substring(0, 15)}
 */

/* 
    <form action="">
        <span>quantity : </span>
        <input type="number" name="" value="${pp_item.numberOfUnits}" id="">
    </form>
*/

function renderCartItems() {
    
    cartItemsEl.innerHTML=""; 

    cart.forEach((pp_item)=>{
        cartItemsEl.innerHTML += `
        <div class="box">
            <i class="fas fa-times"></i>
            <img src="${pp_item.image}" alt="${pp_item.title}">
            <div class="content">
                <h3>${pp_item.title.substring(0, 15)}..</h3>
          
                <div class="units">
                    <div class="mybtn plus" onclick="changeNumberOfUnits('plus', ${pp_item.id})">+</div>           
                    <div class="number">${pp_item.numberOfUnits}</div>
                    <div class="mybtn minus" onclick="changeNumberOfUnits('minus', ${pp_item.id})">-</div>
                </div>
                <div class="price">$${pp_item.price} <span>$1000</span></div>
            </div>
        </div>
    `        
    });
}

function updateCart_onCart() {
    renderCartItems();
    // renderSubtotal();

    console.log(cart)
}
updateCart_onCart();

function changeNumberOfUnits(params) {
    
}


