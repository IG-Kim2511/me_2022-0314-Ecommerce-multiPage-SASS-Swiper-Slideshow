// 🍀variable

//🥒 js13. cart 
// let cart =[];
// 🥒js45-30,-40,-50,-60, localStorage
let cart = JSON.parse(localStorage.getItem("CART")) || [];



// 🍀 js637.toastify

const Toast = ()=> {
    Toastify({
        text: "added on cart",
        duration: 3000,
        destination: "./cart.html",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}




// 🍀js0211. fetch

const url = `https://fakestoreapi.com/products/`;

// 🥒js417, fetched dataProducts + inStock, numberOfUnit, ...object에 추가  
//🥒 addToCart
let dataProducts =[];
console.log(dataProducts)


// 🥒 js704. category
let dataProductsMen =[];
let dataProductsWomen =[];
let dataProductsJ =[];
let dataProductsE =[];
console.log(dataProductsMen)


// Fetching data
function getFakeStore() {
    fetch(url)
    .then((res) => res.json())
    .then((a_datas) => {

        //🍀js518 loading화면 만들기 👉products.html
        /* 
         10. html 기본.."loading" 메시지
        
         20. fetch 완료하면, innerHTML로 새로운 텍스트 넣음
        */
        document.querySelector('.products .heading').innerHTML =`products `;        
      
        // 🍀 js417. fetched datas에 inStock 넣기
        a_datas.forEach((p_data)=>{
            dataProducts.push(
                {
                    ...p_data,
                    inStock:10,                    
                });
        });


        // 🥒 js704. category
        a_datas.forEach((p_data) => {
            if (p_data.category === "men's clothing") {
                
                dataProductsMen.push(
                    {
                        ...p_data,
                        inStock:10,                    
                    });
            }
        });

        a_datas.forEach((p_data) => {
            if (p_data.category === "women's clothing") {
                
                dataProductsWomen.push(
                    {
                        ...p_data,
                        inStock:10,                    
                    });
            }
        });

        a_datas.forEach((p_data) => {
            if (p_data.category === "jewelery") {
                
                dataProductsJ.push(
                    {
                        ...p_data,
                        inStock:10,                    
                    });
            }
        });

        a_datas.forEach((p_data) => {
            if (p_data.category === "electronics") {
                
                dataProductsE.push(
                    {
                        ...p_data,
                        inStock:10,                    
                    });
            }
        });



        // 🥒js09. 
        // 🦄 실행 코드는 fetch 함수안에 넣어야 에러없이 작동함. 밖에 있으면 fetch data되기전에 그 함수가 실행되서 rendering이 안됨

        renderProducts();
    });    
}
getFakeStore();



//🍀js09. rendering Products
/* 
   🦄설명:
https://github.com/IG-Kim2511/me_2021-1109-cloth-Shopping_Cart-ig-js
*/

const boxContainer = document.querySelector('.products .box-container');
        
function renderProducts() {
    renderProducts_inside(dataProducts);

}

function renderProducts_inside(p) {
    boxContainer.innerHTML = ``;
    p.forEach((p_product)=>{          
        boxContainer.innerHTML += `
            <div class="box">
                <div class="image">
                    <img src="${p_product.image}"  class="main-img" alt="${p_product.title}">                    
                    <div class="icons">
                        <a class="fas fa-shopping-cart" onclick="addToCart(${p_product.id})"></a>
                        
                    </div>
                </div>
                <div class="content">
                    <h3>${p_product.title}</h3>
                    <div class="price">$${p_product.price}</div>
     
                    <div>rating ⭐ ${p_product.rating.rate}</div>
                    
                    <div class="price">inventory: ${p_product.inStock}</div>
                    <button class="btn" onclick="addToCart(${p_product.id})">add to cart</button>
                </div>
            </div>
        `  
    });  
}




// 🍀 js704. category.....................🍚

/* 🍚filter + 해당 category아닌걸로 코드짜면 되는데, 여기서는 fetched data써서인지 안됨... */

/* 🍚
    10. 해당 category별로 data array만듬

    20. renderProducts_inside 를 통해서 그 data array 보냄

    30. 끝
*/

/* 
    category
    "jewelery"
    "men's clothing"
    "electronics"
    "women's clothing"
*/
const allElm= document.querySelector('.category .all');
const menElm= document.querySelector('.category .men');
const womenElm= document.querySelector('.category .women');
const jewelryElm= document.querySelector('.category .jewelry');
const electronicElm= document.querySelector('.category .electronic');

// console.log(electronicElm)

// 🥒
allElm.addEventListener('click',()=>{
    renderProducts_inside(dataProducts);
});

menElm.addEventListener('click',()=>{    
    renderProducts_inside(dataProductsMen);
});

womenElm.addEventListener('click',()=>{    
    renderProducts_inside(dataProductsWomen);
});

jewelryElm.addEventListener('click',()=>{    
    renderProducts_inside(dataProductsJ);
});

electronicElm.addEventListener('click',()=>{    
    renderProducts_inside(dataProductsE);
});







// 🍀js13. addToCart, 새로운 항목 numberOfUnit...object에 추가하기

/* 
   🦄설명:
    https://github.com/IG-Kim2511/me_2021-1109-cloth-Shopping_Cart-ig-js
*/

function addToCart(p_id) {


    // 🥒 js637.toastify
    Toast();

    console.log(cart)

    // 🍉js13-30
    if (cart.some((pp_item) => pp_item.id === p_id)) {  
        
        changeNumberOfUnits('plus',p_id);
        
    // 🍉js13-20
    } else {
        const item = dataProducts.find( (pp_product) => pp_product.id === p_id);    
        console.log(item)

        // cart.push(item);
        cart.push(
            {
                ...item,
                numberOfUnits : 1,
            }
        )        
    }
    
    updateCart();
}



// 🍀js13-40.update Cart
// 🍀js45. localStorage. save cart to local  storage
/* 
   🦄설명:
   https://github.com/IG-Kim2511/me_2021-1109-cloth-Shopping_Cart-ig-js
*/

function updateCart() {
    // renderCartItems();
    // renderSubtotal();

    // js 45-10, js45-20
    // localStorage.setItem('CART',cart);
    localStorage.setItem('CART',JSON.stringify(cart));    

    console.log(cart)
}
updateCart();



// 🍀js28. + - 버튼 클릭한때, change Number Of Units, 
/* 
   🦄설명:
 https://github.com/IG-Kim2511/me_2021-1109-cloth-Shopping_Cart-ig-js
*/


function changeNumberOfUnits(p_action, p_id) {

    cart = cart.map((p_item)=>{
        let numberOfUnits = p_item.numberOfUnits;

        if (p_item.id === p_id) {

            if (p_action ===  "minus" && numberOfUnits > 1) {

                numberOfUnits--;
                
            } else if (p_action ===  "plus" && numberOfUnits <  p_item.inStock) {

                numberOfUnits++;
                
            }else if(p_action ==="plus" && numberOfUnits ===p_item.inStock){
                alert(`sorry. it's out of stock.`);                
            }            
        }

        return{
            ...p_item,

            numberOfUnits:numberOfUnits,
        }

    })
    updateCart();
}

  

//🍀  localStorage.clear(); /  location.reload();    
// 🥒js13-10,

const deleteAllBtn = document.querySelector('.delete-all-btn');
// const checkoutBtn = document.querySelector('.checkoutBtn');

deleteAllBtn.addEventListener('click',()=>{
    localStorage.clear();
    location.reload();    
});


















