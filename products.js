
// 🍀js0211. fetch

const url = `https://fakestoreapi.com/products/`;

// 🥒js417
let cart =[];

// let loading = true;



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
        
        // loading= false;

        console.log(a_datas);

        /*🍉 ~~~coding~~~ */


        // 🍀js417. fetched datas에 inStock 넣기
        a_datas.forEach((p_data)=>{

            cart.push(
                {
                    ...p_data,
                    inStock:10,                    
                });
        });

        console.log(cart);


        // 🥒js315. 
        // 🦄 실행 코드는 fetch 함수안에 넣어야 에러없이 작동함. 밖에 있으면 fetch data되기전에 그 함수가 실행되서 rendering이 안됨

        renderProducts();
    });    
}
getFakeStore();


//🍀js315. rendering Products
const boxContainer = document.querySelector('.products .box-container');
        
function renderProducts() {
    cart.forEach((p_product)=>{          
        boxContainer.innerHTML += `
            <div class="box">
                <div class="image">
                    <img src="${p_product.image}"  class="main-img" alt="">                    
                    <div class="icons">
                        <a href="#" class="fas fa-shopping-cart" onclick="addToCart(${p_product.id})"></a>
                        <a href="#" class="fas fa-heart"></a>
                    </div>
                </div>
                <div class="content">
                    <h3>${p_product.title}</h3>
                    <div class="price">$${p_product.price}</div>
                    
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                    <div class="price">inventory: ${p_product.inStock}</div>
                    <a class="btn" onclick="addToCart(${p_product.id})">add to cart</a>
                </div>
            </div>
        `  
    });  
}



// // loading
// window.addEventListener('load', () => {    
//     if (!loading) {
//         document.querySelector('.products .heading').innerHTML =`loading`;
//         console.log('loading')
//     }else{
//         renderProducts();
//     }
// });








//🍀 js0237. rendering data products

/* 
  dataProducts  : products.js 에서 가져온 variable
    innerHTML += 사용
  
  🦄onClick 사용  - 🥒js13, addToCart
    JS로 rendering한 element에 variable할 수 없을 때..
    rendering할때, onClick 넣으면 간단함!!    
*/
            









